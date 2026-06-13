// The alley: low-poly geometry, every surface lit by the precomputed
// (light, material) pair table. One uniform — uMode — flips every material
// between the two pipelines over identical geometry:
//   mode 0 (whitepoint): fragments accumulate pair XYZ × falloff, linear.
//   mode 1 (naive):      gamma-sRGB albedo × gamma-sRGB light × falloff,
//                        accumulated in gamma space — the everyday sin.
// The framebuffer holds XYZ in mode 0 and nonlinear sRGB in mode 1; the
// output pass (post.js) finishes each accordingly.
//
// Surface detail (brick courses, asphalt speckle, wetness blotches) is
// scalar masks blending two pair tables — the spectra stay exact; only
// which material a fragment belongs to is procedural.

import * as THREE from 'three';
import { glsl, glslMix } from '../../src/codegen/index.js';
import { convert } from '../../src/index.js';
import { textTubes, COCKTAIL } from './glyphs.js';
import { dedupeGlsl } from './post.js';

export const MAX_LIGHTS = 8;

// ---- shaders ----

const SURFACE_VERT = /* glsl */ `
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
  }
`;

const SURFACE_FRAG = /* glsl */ `
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec2 vUv;
  uniform vec3 uPairA[${MAX_LIGHTS}];
  uniform vec3 uPairB[${MAX_LIGHTS}];
  uniform vec3 uNaiveLight[${MAX_LIGHTS}];
  uniform vec3 uLightPos[${MAX_LIGHTS}];
  uniform float uIntensity[${MAX_LIGHTS}];
  uniform vec3 uAlbedoA;
  uniform vec3 uAlbedoB;
  uniform vec2 uUvScale;
  uniform float uKind; // 0 plain, 1 brick, 2 asphalt
  uniform float uWetness;
  uniform float uMode;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // mask: 0 → material A, 1 → material B; var: scalar albedo variation.
  void pattern(out float mask, out float vari) {
    vec2 uv = vUv * uUvScale;
    mask = 0.0;
    vari = 1.0;
    if (uKind > 0.5 && uKind < 1.5) {
      // Brick courses: offset alternate rows, mortar at the joints.
      float row = floor(uv.y);
      vec2 b = vec2(uv.x + 0.5 * mod(row, 2.0), uv.y);
      vec2 cell = floor(b);
      vec2 f = fract(b);
      float mortar = step(f.x, 0.05) + step(0.9, f.y);
      mask = clamp(mortar, 0.0, 1.0);
      vari = 0.8 + 0.2 * hash(cell);
    } else if (uKind > 1.5) {
      // Asphalt: speckle + broad wet blotches.
      float speck = 0.85 + 0.15 * hash(floor(uv * 24.0));
      float blotch = smoothstep(0.35, 0.75,
        0.5 * hash(floor(uv * 1.7)) + 0.5 * hash(floor(uv * 3.1 + 7.0)));
      mask = uWetness * max(blotch, 0.35);
      vari = speck;
    }
  }

  void main() {
    vec3 n = normalize(vNormal);
    float mask; float vari;
    pattern(mask, vari);
    vec3 accW = vec3(0.0);
    vec3 accN = vec3(0.0);
    for (int i = 0; i < ${MAX_LIGHTS}; i++) {
      vec3 L = uLightPos[i] - vPos;
      float d2 = dot(L, L);
      float ndl = max(dot(n, normalize(L)), 0.0);
      float att = uIntensity[i] * ndl / (1.0 + 0.45 * d2);
      accW += mix(uPairA[i], uPairB[i], mask) * att;
      accN += uNaiveLight[i] * att;
    }
    vec3 whitepoint = accW * vari;
    vec3 naive = mix(uAlbedoA, uAlbedoB, mask) * accN * vari;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`;

const TUBE_VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = normalize(cameraPosition - wp);
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }
`;

const TUBE_FRAG = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  uniform vec3 uXyz;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uMode;
  void main() {
    // Limb profile: a glowing column reads brightest through its core.
    float core = 0.55 + 0.45 * pow(max(dot(normalize(vNormal), vView), 0.0), 2.0);
    float p = uPower * uFlicker;
    vec3 whitepoint = uXyz * p * core;
    vec3 naive = uNaive * min(p * core, 1.0); // LDR: the tube saturates
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`;

// Flat emissive (window panes, lamp head, sky strip).
const EMISSIVE_FRAG = /* glsl */ `
  varying vec2 vUvE;
  uniform vec3 uXyz;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uGrad; // 1: fade toward +v (the sky)
  uniform float uMode;
  void main() {
    float g = mix(1.0, mix(1.0, 0.15, vUvE.y), uGrad);
    vec3 whitepoint = uXyz * uPower * uFlicker * g;
    vec3 naive = uNaive * min(uPower * uFlicker, 1.0) * g;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`;

const EMISSIVE_VERT = /* glsl */ `
  varying vec2 vUvE;
  void main() {
    vUvE = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;

// The sign halo: light scattered off the wall and the damp air around the
// tubes. The whitepoint side runs the gradient through the library's
// emitted OKLCH mix (luminous all the way down); the naive side lerps RGB
// in gamma space (the gray dead zone every CSS gradient has).
function haloFrag() {
  const emitted = dedupeGlsl(glslMix('oklch'), glsl('oklch', 'xyz-d65'));
  return /* glsl */ `
  varying vec2 vUvE;
  uniform vec3 uLchBright;
  uniform vec3 uLchDark;
  uniform vec3 uNaive;
  uniform float uPower;
  uniform float uFlicker;
  uniform float uMode;
${emitted}
  void main() {
    float r = length(vUvE - 0.5) * 2.0;
    float t = smoothstep(0.0, 1.0, r);
    float fade = (1.0 - t) * uPower * uFlicker;
    vec3 lch = wp_mix_oklch_shorter(uLchBright, uLchDark, t);
    vec3 whitepoint = wp_oklch_to_xyz_d65(lch) * fade;
    vec3 naive = mix(uNaive, vec3(0.0), t) * fade;
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`;
}

// ---- material factories ----

function v3(a) { return new THREE.Vector3(a[0], a[1], a[2]); }

function padV3(arr, fill) {
  const out = arr.slice(0, MAX_LIGHTS).map(v3);
  while (out.length < MAX_LIGHTS) out.push(v3(fill));
  return out;
}

export function surfaceMaterial(ctx, matA, matB = matA, opts = {}) {
  const { pairs } = ctx.derived;
  const mat = new THREE.ShaderMaterial({
    vertexShader: SURFACE_VERT,
    fragmentShader: SURFACE_FRAG,
    uniforms: {
      uPairA: { value: padV3(pairs[matA], [0, 0, 0]) },
      uPairB: { value: padV3(pairs[matB], [0, 0, 0]) },
      uNaiveLight: ctx.shared.uNaiveLight,
      uLightPos: ctx.shared.uLightPos,
      uIntensity: ctx.shared.uIntensity,
      uAlbedoA: { value: v3(ctx.materialsSrgb[matA]) },
      uAlbedoB: { value: v3(ctx.materialsSrgb[matB]) },
      uUvScale: { value: new THREE.Vector2(...(opts.uvScale ?? [1, 1])) },
      uKind: { value: opts.kind ?? 0 },
      uWetness: ctx.shared.uWetness,
      uMode: ctx.uMode,
    },
  });
  ctx.surfaceMats.push({ mat, matA, matB });
  return mat;
}

/** Re-sync pair tables after a gas swap. */
export function refreshSurfaces(ctx) {
  const { pairs, lights } = ctx.derived;
  for (const { mat, matA, matB } of ctx.surfaceMats) {
    mat.uniforms.uPairA.value = padV3(pairs[matA], [0, 0, 0]);
    mat.uniforms.uPairB.value = padV3(pairs[matB], [0, 0, 0]);
  }
  lights.forEach((l, i) => {
    if (i < MAX_LIGHTS) ctx.shared.uNaiveLight.value[i].set(...l.naive);
  });
}

function tubeMaterial(ctx, sign, power) {
  return new THREE.ShaderMaterial({
    vertexShader: TUBE_VERT,
    fragmentShader: TUBE_FRAG,
    uniforms: {
      uXyz: { value: v3(sign.xyz) },
      uNaive: { value: v3(sign.naive) },
      uPower: { value: power },
      uFlicker: sign.flicker,
      uMode: ctx.uMode,
    },
  });
}

function emissiveMaterial(ctx, xyz, naive, power, { grad = 0, flicker } = {}) {
  return new THREE.ShaderMaterial({
    vertexShader: EMISSIVE_VERT,
    fragmentShader: EMISSIVE_FRAG,
    uniforms: {
      uXyz: { value: v3(xyz) },
      uNaive: { value: v3(naive) },
      uPower: { value: power },
      uFlicker: flicker ?? { value: 1 },
      uGrad: { value: grad },
      uMode: ctx.uMode,
    },
  });
}

function haloMaterial(ctx, sign, power) {
  // Halo endpoints, derived per sign in JS by the same library: the tube
  // color at glow luminance, and the same hue sunk to near-black.
  const bright = convert(sign.xyz.map((v) => v * 0.32), 'xyz-d65', 'oklch');
  const dark = [0.045, Math.min(bright[1] * 0.35, 0.04), bright[2]];
  return new THREE.ShaderMaterial({
    vertexShader: EMISSIVE_VERT,
    fragmentShader: haloFrag(),
    uniforms: {
      uLchBright: { value: v3(bright) },
      uLchDark: { value: v3(dark) },
      uNaive: { value: v3(sign.naive.map((v) => v * 0.5)) },
      uPower: { value: power },
      uFlicker: sign.flicker,
      uMode: ctx.uMode,
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

// ---- builders ----

/**
 * A neon sign: tube glyphs + backing panel + halo, mounted on a wall.
 * side: -1 = left wall (faces +x), +1 = right wall (faces −x).
 */
function buildSign(ctx, sign, { scale, tubeR = 0.035, panelPad = 0.3, haloScale = 2.6, power = 14 }) {
  const group = new THREE.Group();
  const { geometries, width } = textTubes(sign.text, { radius: tubeR / scale });

  const tubeMat = tubeMaterial(ctx, sign, power);
  sign.tubeMats = [tubeMat];
  const tubes = new THREE.Group();
  for (const geo of geometries) {
    tubes.add(new THREE.Mesh(geo, tubeMat));
  }
  tubes.scale.setScalar(scale);
  tubes.position.set((-width / 2) * scale, -0.5 * scale, 0.1);
  group.add(tubes);

  const w = width * scale + panelPad * 2;
  const h = 1.5 * scale + panelPad * 2;
  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, 0.06),
    surfaceMaterial(ctx, 'panel'),
  );
  panel.position.set(0, 0.25 * scale, 0.02);
  group.add(panel);

  const halo = new THREE.Mesh(
    new THREE.PlaneGeometry(w * haloScale, h * haloScale),
    haloMaterial(ctx, sign, 0.3),
  );
  halo.position.set(0, 0.25 * scale, 0.075);
  group.add(halo);

  if (sign.facing === 'front') {
    // Faces the camera straight on (the jog wall, or a blade sign
    // hanging perpendicular off a side wall).
    group.position.set(sign.pos[0], sign.pos[1], sign.pos[2]);
  } else {
    const side = sign.pos[0] < 0 ? -1 : 1;
    group.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
    group.position.set(sign.pos[0] * 0.97, sign.pos[1], sign.pos[2]);
  }
  return group;
}

function buildWindow(ctx, light, panes) {
  const group = new THREE.Group();
  const W = 1.0, H = 1.5;
  const frame = new THREE.Mesh(
    new THREE.BoxGeometry(W + 0.16, H + 0.16, 0.1),
    surfaceMaterial(ctx, 'panel'),
  );
  group.add(frame);
  const cols = 2, rows = 3;
  const pw = W / cols, ph = H / rows;
  light.paneMats = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const pane = panes[(r * cols + c) % panes.length];
      const mat = emissiveMaterial(ctx, pane.xyz, pane.naive, 1.1, { flicker: light.flicker });
      light.paneMats.push(mat);
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(pw - 0.05, ph - 0.05), mat);
      mesh.position.set((c + 0.5) * pw - W / 2, (r + 0.5) * ph - H / 2, 0.06);
      group.add(mesh);
    }
  }
  const side = light.pos[0] < 0 ? -1 : 1;
  group.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
  group.position.set(light.pos[0] * 0.97, light.pos[1], light.pos[2]);
  return group;
}

function buildStreetlight(ctx, light) {
  const group = new THREE.Group();
  const metal = surfaceMaterial(ctx, 'metal');
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 4.7, 10), metal);
  pole.position.set(2.45, 2.35, light.pos[2]);
  group.add(pole);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.3, 8), metal);
  arm.rotation.z = Math.PI / 2;
  arm.position.set(1.85, 4.66, light.pos[2]);
  group.add(arm);
  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.22, 12), metal);
  hood.position.set(light.pos[0], light.pos[1] + 0.16, light.pos[2]);
  group.add(hood);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 16, 12),
    emissiveMaterial(ctx, light.xyz, light.naive, 9, { flicker: light.flicker }),
  );
  light.headMat = head.material;
  head.position.set(...light.pos);
  group.add(head);
  return group;
}

/** Mirror the emissive pieces below the ground plane: the wet-asphalt look. */
function buildReflections(ctx, sources) {
  const group = new THREE.Group();
  for (const src of sources) {
    src.updateMatrixWorld(true);
    src.traverse((node) => {
      if (!node.isMesh) return;
      const isTube = node.material.fragmentShader === TUBE_FRAG;
      const isEmissive = node.material.fragmentShader === EMISSIVE_FRAG;
      if (!isTube && !isEmissive) return;
      const m = node.material.clone();
      // Same derived colors, same flicker object, dimmed by the water.
      m.uniforms.uFlicker = node.material.uniforms.uFlicker;
      m.uniforms.uMode = ctx.uMode;
      m.uniforms.uPower = { value: node.material.uniforms.uPower.value };
      ctx.reflectionMats.push({ m, src: node.material });
      m.transparent = true;
      m.blending = THREE.AdditiveBlending;
      m.depthWrite = false;
      m.side = THREE.DoubleSide; // the mirror flip inverts winding
      const mesh = new THREE.Mesh(node.geometry, m);
      mesh.applyMatrix4(node.matrixWorld);
      mesh.applyMatrix4(new THREE.Matrix4().makeScale(1, -1, 1));
      // Streak: stretch the reflection downward a touch.
      mesh.applyMatrix4(new THREE.Matrix4().makeScale(1, 1.18, 1));
      group.add(mesh);
    });
  }
  return group;
}

/** Per-frame reflection dimming (wetness × a fixed water loss). */
export function updateReflections(ctx) {
  const wet = ctx.shared.uWetness.value;
  for (const { m, src } of ctx.reflectionMats) {
    m.uniforms.uPower.value = src.uniforms.uPower.value * 0.38 * wet;
    m.uniforms.uXyz = src.uniforms.uXyz;
    m.uniforms.uNaive = src.uniforms.uNaive;
  }
}

export function buildAlley(ctx) {
  const scene = new THREE.Scene();
  const { lights, windowPanes, sky, skyNaive } = ctx.derived;
  const byName = Object.fromEntries(lights.map((l) => [l.name, l]));

  // Ground: dry/wet asphalt blend; lets reflections show through (no
  // depth write — the mirrored tubes live below it).
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 26, 1, 1),
    surfaceMaterial(ctx, 'asphalt', 'asphaltWet', { kind: 2, uvScale: [6, 22] }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, -5);
  ground.material.depthWrite = false;
  ground.renderOrder = -2;
  scene.add(ground);

  // Walls: brick with mortar joints; the alley jogs right at z = −13, so
  // the jog wall faces the camera and carries the hero sign head-on.
  const brickOpts = { kind: 1, uvScale: [104, 84] };
  const left = new THREE.Mesh(
    new THREE.PlaneGeometry(21, 7),
    surfaceMaterial(ctx, 'brick', 'mortar', { kind: 1, uvScale: [84, 84] }),
  );
  left.rotation.y = Math.PI / 2;
  left.position.set(-2.8, 3.5, -2.5);
  scene.add(left);
  const right = new THREE.Mesh(
    new THREE.PlaneGeometry(26, 7),
    surfaceMaterial(ctx, 'brick', 'mortar', brickOpts),
  );
  right.rotation.y = -Math.PI / 2;
  right.position.set(2.8, 3.5, -5);
  scene.add(right);

  // The jog wall (roofline at 5.2 so the sky glows above it).
  const jog = new THREE.Mesh(
    new THREE.PlaneGeometry(4.1, 5.2),
    surfaceMaterial(ctx, 'brick', 'mortar', { kind: 1, uvScale: [16, 62] }),
  );
  jog.position.set(-0.75, 2.6, -13);
  scene.add(jog);

  // The narrow continuation past the jog + sodium-glow sky above it all.
  const back = new THREE.Mesh(
    new THREE.PlaneGeometry(1.7, 5.2),
    surfaceMaterial(ctx, 'concrete', 'concrete', { kind: 1, uvScale: [6, 38] }),
  );
  back.position.set(1.95, 2.6, -18);
  scene.add(back);
  const skyQuad = new THREE.Mesh(
    new THREE.PlaneGeometry(9, 7),
    emissiveMaterial(ctx, sky, skyNaive, 3, { grad: 1 }),
  );
  skyQuad.position.set(0, 8.4, -18.4);
  scene.add(skyQuad);

  // Curbs.
  for (const x of [-2.65, 2.65]) {
    const curb = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 26), surfaceMaterial(ctx, 'concrete'));
    curb.position.set(x, 0.08, -5);
    scene.add(curb);
  }

  // ---- signs ----
  const signGroups = [];
  const add = (sign, opts) => {
    const g = buildSign(ctx, sign, opts);
    signGroups.push(g);
    scene.add(g);
  };

  byName.whitepoint.text = 'whitepoint';
  const hero = buildSign(ctx, byName.whitepoint, { scale: 0.45, power: 5.5 });
  signGroups.push(hero);
  scene.add(hero);
  // Hang the gateway sign on cables from the parapets.
  for (const sx of [-1, 1]) {
    const cable = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 2.6, 6),
      surfaceMaterial(ctx, 'metal'),
    );
    cable.position.set(0.45 + sx * 2.1, 5.45, -5.2);
    cable.rotation.z = sx * 0.45;
    scene.add(cable);
  }

  byName.bar.text = 'BAR';
  add(byName.bar, { scale: 0.42, tubeR: 0.04, power: 4.5 });
  byName.open.text = 'OPEN';
  add(byName.open, { scale: 0.3, power: 4.5 });
  byName.cocktail.text = [COCKTAIL];
  add(byName.cocktail, { scale: 0.62, power: 4.5 });
  byName.live.text = 'LIVE';
  add(byName.live, { scale: 0.34, power: 4.2 });

  const windowGroup = buildWindow(ctx, byName.window, windowPanes);
  scene.add(windowGroup);
  const lamp = buildStreetlight(ctx, byName.street);
  scene.add(lamp);

  // ---- props ----
  const door = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 2.2, 1.0),
    surfaceMaterial(ctx, 'door'),
  );
  door.position.set(-2.76, 1.1, -2.2);
  scene.add(door);
  const step = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.14, 1.2), surfaceMaterial(ctx, 'concrete'));
  step.position.set(-2.6, 0.07, -2.2);
  scene.add(step);

  const dumpster = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.15, 1.9), surfaceMaterial(ctx, 'door'));
  dumpster.position.set(-2.25, 0.58, -7.6);
  scene.add(dumpster);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.08, 1.95), surfaceMaterial(ctx, 'metal'));
  lid.position.set(-2.27, 1.18, -7.6);
  lid.rotation.z = 0.07;
  scene.add(lid);

  for (const [z, h] of [[-6.2, 6.8], [-11.5, 6.8]]) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, h, 8), surfaceMaterial(ctx, 'metal'));
    pipe.position.set(2.74, h / 2, z);
    scene.add(pipe);
  }

  // Wet reflections of everything that glows.
  scene.add(buildReflections(ctx, [...signGroups, windowGroup, lamp]));

  return scene;
}
