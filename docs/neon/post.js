// The output end of both pipelines. The whitepoint path is the headline:
// the final pass is built — in this page, at load time — from GLSL the
// library emits, the same constants that run in JS and are parity-tested
// in CI. No conversion math is written here by hand.
//
//   whitepoint: scene XYZ (+ linear bloom) → OKLCH → exact-cusp gamut map
//               → display-p3 (or srgb), encoded by the emitted transform.
//   naive:      scene gamma-sRGB (+ gamma-space bloom) → per-channel clamp.
//               On a P3 canvas even the naive image needs a managed
//               srgb→p3 hop just to show what sRGB output looks like —
//               plumbing the naive pipeline doesn't know it needs.

import * as THREE from 'three';
import { glsl, glslGamutMap } from '../../src/codegen/index.js';

/**
 * Concatenate emitted GLSL snippets, keeping the first definition of each
 * top-level wp_ function (snippets ship their own helpers, so composing
 * two of them would otherwise redeclare wp_srgb_encode and friends).
 * String plumbing only — the math inside stays the library's.
 */
export function dedupeGlsl(...snippets) {
  const seen = new Set();
  const out = [];
  for (const snippet of snippets) {
    const lines = snippet.split('\n');
    let skip = false;
    let depth = 0;
    for (const line of lines) {
      const def = /^(?:float|vec[234]|bool|int) (wp_\w+)\(/.exec(line);
      if (depth === 0 && def) {
        skip = seen.has(def[1]);
        seen.add(def[1]);
      }
      if (!skip && line.trim()) out.push(line);
      depth += (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      if (depth === 0 && line.includes('}')) skip = false;
    }
  }
  return out.join('\n');
}

const OUTPUT_VERT = /* glsl */ `
  out vec2 vUv;
  void main() {
    // Fullscreen triangle from gl_VertexID — no attributes, no fuss.
    vec2 p = vec2(float((gl_VertexID & 1) << 2) - 1.0, float((gl_VertexID & 2) << 1) - 1.0);
    vUv = p * 0.5 + 0.5;
    gl_Position = vec4(p, 0.0, 1.0);
  }
`;

function outputFrag() {
  const emitted = dedupeGlsl(
    glsl('xyz-d65', 'oklch'),
    glslGamutMap('display-p3'),
    glslGamutMap('srgb'),
    glsl('srgb', 'display-p3'),
  );
  return /* glsl */ `
  precision highp float;
  in vec2 vUv;
  out vec4 frag;
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform float uMode;       // 0 whitepoint, 1 naive
  uniform float uP3;         // 1 when the drawing buffer is display-p3
  uniform float uSrgbPreview;// 1 to show the sRGB-clamped view on a P3 display
  uniform float uExposure;
  uniform float uBloomAmt;
${emitted}
  void main() {
    vec3 s = texture(tScene, vUv).rgb;
    vec3 b = texture(tBloom, vUv).rgb;
    vec3 color;
    if (uMode < 0.5) {
      vec3 xyz = (s + uBloomAmt * b) * uExposure;
      vec3 lch = wp_xyz_d65_to_oklch(xyz);
      if (uP3 > 0.5 && uSrgbPreview < 0.5) {
        color = wp_gamut_map_oklch_to_display_p3(lch);
      } else {
        vec3 srgb = wp_gamut_map_oklch_to_srgb(lch);
        color = uP3 > 0.5 ? wp_srgb_to_display_p3(srgb) : srgb;
      }
    } else {
      // What every web demo ships: add, clamp, hope.
      vec3 srgb = clamp(s + uBloomAmt * b, 0.0, 1.0);
      color = uP3 > 0.5 ? wp_srgb_to_display_p3(srgb) : srgb;
    }
    frag = vec4(color, 1.0);
  }
`;
}

const BRIGHT_FRAG = /* glsl */ `
  precision highp float;
  in vec2 vUv;
  out vec4 frag;
  uniform sampler2D tScene;
  uniform float uMode;
  uniform float uThreshold;
  void main() {
    vec3 s = texture(tScene, vUv).rgb;
    if (uMode < 0.5) {
      // Linear light: anything brighter than the threshold blooms, with
      // its true chromaticity (Y is the XYZ luminance channel).
      float w = max(s.y - uThreshold, 0.0) / max(s.y, 1e-4);
      frag = vec4(s * w, 1.0);
    } else {
      // LDR bloom: blur what the 8-bit clamp left behind.
      vec3 c = clamp(s, 0.0, 1.0);
      float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
      frag = vec4(c * smoothstep(0.6, 0.9, luma), 1.0);
    }
  }
`;

const BLUR_FRAG = /* glsl */ `
  precision highp float;
  in vec2 vUv;
  out vec4 frag;
  uniform sampler2D tSrc;
  uniform vec2 uDir; // (1,0)/texel or (0,1)/texel
  void main() {
    // 9-tap separable Gaussian (σ≈2), the ColorPlay workhorse.
    float w[5];
    w[0] = 0.2270270270; w[1] = 0.1945945946; w[2] = 0.1216216216;
    w[3] = 0.0540540541; w[4] = 0.0162162162;
    vec3 acc = texture(tSrc, vUv).rgb * w[0];
    for (int i = 1; i < 5; i++) {
      acc += texture(tSrc, vUv + uDir * float(i)).rgb * w[i];
      acc += texture(tSrc, vUv - uDir * float(i)).rgb * w[i];
    }
    frag = vec4(acc, 1.0);
  }
`;

function pass(frag, uniforms) {
  const mat = new THREE.RawShaderMaterial({
    glslVersion: THREE.GLSL3,
    vertexShader: OUTPUT_VERT,
    fragmentShader: frag,
    uniforms,
    depthTest: false,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.BufferGeometry(), mat);
  mesh.frustumCulled = false;
  const geo = mesh.geometry;
  geo.setDrawRange(0, 3);
  const scene = new THREE.Scene();
  scene.add(mesh);
  return { scene, mat };
}

function target(w, h) {
  return new THREE.WebGLRenderTarget(w, h, {
    type: THREE.HalfFloatType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: false,
    colorSpace: THREE.NoColorSpace,
  });
}

export function createPost(renderer, width, height, uMode) {
  const sceneRT = new THREE.WebGLRenderTarget(width, height, {
    type: THREE.HalfFloatType,
    samples: 4,
    colorSpace: THREE.NoColorSpace,
  });
  const bw = Math.max(1, width >> 1);
  const bh = Math.max(1, height >> 1);
  const ping = target(bw, bh);
  const pong = target(bw, bh);

  const outputSource = outputFrag();
  const bright = pass(BRIGHT_FRAG, {
    tScene: { value: sceneRT.texture },
    uMode,
    uThreshold: { value: 1.2 },
  });
  const blur = pass(BLUR_FRAG, {
    tSrc: { value: null },
    uDir: { value: new THREE.Vector2() },
  });
  const output = pass(outputSource, {
    tScene: { value: sceneRT.texture },
    tBloom: { value: pong.texture },
    uMode,
    uP3: { value: 0 },
    uSrgbPreview: { value: 0 },
    uExposure: { value: 1.0 },
    uBloomAmt: { value: 0.7 },
  });

  const cam = new THREE.OrthographicCamera(); // unused by the shaders

  function render(scene3d, camera3d) {
    renderer.setRenderTarget(sceneRT);
    renderer.render(scene3d, camera3d);

    renderer.setRenderTarget(ping);
    renderer.render(bright.scene, cam);

    for (let i = 0; i < 2; i++) {
      blur.mat.uniforms.tSrc.value = ping.texture;
      blur.mat.uniforms.uDir.value.set(1 / bw, 0);
      renderer.setRenderTarget(pong);
      renderer.render(blur.scene, cam);

      blur.mat.uniforms.tSrc.value = pong.texture;
      blur.mat.uniforms.uDir.value.set(0, 1 / bh);
      renderer.setRenderTarget(ping);
      renderer.render(blur.scene, cam);
    }
    // Final blurred result ends in `ping`; point the output pass at it.
    output.mat.uniforms.tBloom.value = ping.texture;

    renderer.setRenderTarget(null);
    renderer.render(output.scene, cam);
  }

  function dispose() {
    sceneRT.dispose();
    ping.dispose();
    pong.dispose();
    for (const p of [bright, blur, output]) p.mat.dispose();
  }

  return { render, output: output.mat, sceneRT, dispose, source: outputSource };
}
