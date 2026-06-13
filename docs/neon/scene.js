// The alley: low-poly geometry, every surface lit by the precomputed
// (light, material) pair table. One uniform — uMode — flips every material
// between the two pipelines over identical geometry:
//   mode 0 (whitepoint): fragments accumulate pair XYZ × falloff, linear.
//   mode 1 (naive):      gamma-sRGB albedo × gamma-sRGB light × falloff,
//                        accumulated in gamma space — the everyday sin.
// The framebuffer holds XYZ in mode 0 and nonlinear sRGB in mode 1; the
// output pass (post.js) finishes each accordingly.

import * as THREE from 'three';

export const MAX_LIGHTS = 8;

const SURFACE_VERT = /* glsl */ `
  varying vec3 vPos;
  varying vec3 vNormal;
  void main() {
    vPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
  }
`;

const SURFACE_FRAG = /* glsl */ `
  varying vec3 vPos;
  varying vec3 vNormal;
  uniform vec3 uPair[${MAX_LIGHTS}];
  uniform vec3 uNaiveLight[${MAX_LIGHTS}];
  uniform vec3 uLightPos[${MAX_LIGHTS}];
  uniform float uIntensity[${MAX_LIGHTS}];
  uniform vec3 uAlbedo;
  uniform float uMode;
  void main() {
    vec3 n = normalize(vNormal);
    vec3 accW = vec3(0.0);
    vec3 accN = vec3(0.0);
    for (int i = 0; i < ${MAX_LIGHTS}; i++) {
      vec3 L = uLightPos[i] - vPos;
      float d2 = dot(L, L);
      float ndl = max(dot(n, normalize(L)), 0.0);
      float att = uIntensity[i] * ndl / (1.0 + 0.22 * d2);
      accW += uPair[i] * att;
      accN += uNaiveLight[i] * att;
    }
    vec3 whitepoint = accW;
    vec3 naive = uAlbedo * accN; // per-channel multiply of gamma values
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
  uniform float uMode;
  void main() {
    // Limb profile: a glowing column reads brightest through its core.
    float core = 0.55 + 0.45 * pow(max(dot(normalize(vNormal), vView), 0.0), 2.0);
    vec3 whitepoint = uXyz * uPower * core;
    vec3 naive = uNaive * min(uPower * core, 1.0); // LDR: the tube saturates
    gl_FragColor = vec4(mix(whitepoint, naive, uMode), 1.0);
  }
`;

function v3(a) { return new THREE.Vector3(a[0], a[1], a[2]); }

/** ShaderMaterial for a diffuse surface, wired to the pair table. */
export function surfaceMaterial(scene, materialName) {
  const { lights, pairs } = scene.derived;
  const pad = (arr, fill) => {
    const out = arr.slice(0, MAX_LIGHTS).map(v3);
    while (out.length < MAX_LIGHTS) out.push(v3(fill));
    return out;
  };
  return new THREE.ShaderMaterial({
    vertexShader: SURFACE_VERT,
    fragmentShader: SURFACE_FRAG,
    uniforms: {
      uPair: { value: pad(pairs[materialName], [0, 0, 0]) },
      uNaiveLight: { value: pad(lights.map((l) => l.naive), [0, 0, 0]) },
      uLightPos: { value: pad(lights.map((l) => l.pos), [0, -99, 0]) },
      uIntensity: { value: padScalars(lights.map((l) => l.intensity)) },
      uAlbedo: { value: v3(sceneAlbedo(scene, materialName)) },
      uMode: scene.uMode,
    },
  });
}

function padScalars(arr) {
  const out = arr.slice(0, MAX_LIGHTS);
  while (out.length < MAX_LIGHTS) out.push(0);
  return out;
}

function sceneAlbedo(scene, name) {
  return scene.materialsSrgb[name];
}

/** Emissive tube material for a sign. */
export function tubeMaterial(scene, light, power = 14) {
  return new THREE.ShaderMaterial({
    vertexShader: TUBE_VERT,
    fragmentShader: TUBE_FRAG,
    uniforms: {
      uXyz: { value: v3(light.xyz) },
      uNaive: { value: v3(light.naive) },
      uPower: { value: power },
      uMode: scene.uMode,
    },
  });
}

/** Build the alley geometry into a THREE.Scene. Scaffold version. */
export function buildAlley(ctx) {
  const scene = new THREE.Scene();

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(7, 24), surfaceMaterial(ctx, 'asphalt'));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0, -4);
  scene.add(ground);

  const wallGeo = new THREE.PlaneGeometry(24, 7);
  const left = new THREE.Mesh(wallGeo, surfaceMaterial(ctx, 'brick'));
  left.rotation.y = Math.PI / 2;
  left.position.set(-2.8, 3.5, -4);
  scene.add(left);

  const right = new THREE.Mesh(wallGeo, surfaceMaterial(ctx, 'brick'));
  right.rotation.y = -Math.PI / 2;
  right.position.set(2.8, 3.5, -4);
  scene.add(right);

  const back = new THREE.Mesh(new THREE.PlaneGeometry(7, 7), surfaceMaterial(ctx, 'concrete'));
  back.position.set(0, 3.5, -16);
  scene.add(back);

  // Scaffold signs: a neon ring and a helium bar — placeholders for the
  // full tube-lettering set.
  const [neonLight, heliumLight, sodiumLight] = ctx.derived.lights;

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.035, 12, 64),
    tubeMaterial(ctx, neonLight),
  );
  ring.rotation.y = Math.PI / 2;
  ring.position.copy(v3(neonLight.pos));
  scene.add(ring);

  const bar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.035, 1.6, 10),
    tubeMaterial(ctx, heliumLight),
  );
  bar.rotation.z = Math.PI / 2;
  bar.position.copy(v3(heliumLight.pos));
  scene.add(bar);

  // Sodium streetlight head at the alley mouth.
  const lamp = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 16, 12),
    tubeMaterial(ctx, sodiumLight, 30),
  );
  lamp.position.copy(v3(sodiumLight.pos));
  scene.add(lamp);

  return scene;
}
