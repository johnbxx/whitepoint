// neon alley — the whitepoint showpiece.
// One toggle, two pipelines, same geometry: hand-picked sRGB with channel
// clipping vs spectra → XYZ → emitted shaders → wide-gamut output.

import * as THREE from 'three';
import { deriveScene, swapGas, MATERIALS, GASES } from './spectra.js';
import { buildAlley, refreshSurfaces, updateReflections, MAX_LIGHTS } from './scene.js';
import { createPost } from './post.js';

THREE.ColorManagement.enabled = false;

// ---- The cast. pos = mount point; shading position is nudged off the wall.
const LIGHT_DEFS = [
  // The hero: a gateway sign spanning the alley overhead, facing the camera.
  { name: 'whitepoint', gas: 'neon', pos: [0.45, 4.15, -5.2], facing: 'front', nudge: [0, -0.6, 0.7], intensity: 1.6 },
  // Blade signs hanging perpendicular off the walls — they read head-on.
  { name: 'bar', gas: 'helium', pos: [-2.05, 3.05, -1.6], facing: 'front', nudge: [0, 0, 0.5], intensity: 1.0 },
  { name: 'open', gas: 'mercury', pos: [2.0, 2.75, -7.5], facing: 'front', nudge: [0, 0, 0.5], intensity: 0.9 },
  // The jog wall pair, head-on at the end of the alley.
  { name: 'cocktail', gas: 'xenon', pos: [-1.75, 3.15, -12.9], facing: 'front', nudge: [0, 0, 0.6], intensity: 0.85 },
  { name: 'live', gas: 'hydrogen', pos: [-0.35, 2.35, -12.9], facing: 'front', nudge: [0, 0, 0.6], intensity: 0.7 },
  { name: 'window', window: ['#1a3f8f', '#8f1a2e', '#1f6e52', '#b1741f'], pos: [-2.8, 2.6, -10.5], intensity: 0.6 },
  { name: 'street', gas: 'sodium-lamp', pos: [1.25, 4.55, 4.6], intensity: 2.2 },
];

const shadePos = (def) => {
  if (def.nudge) return def.pos.map((v, i) => v + def.nudge[i]);
  const inward = Math.abs(def.pos[0]) > 2.5 ? -Math.sign(def.pos[0]) * 0.5 : 0;
  return [def.pos[0] + inward, def.pos[1], def.pos[2]];
};

// ---- GL context: ask for display-p3 before three touches anything.
const canvas = document.getElementById('alley');
// preserveDrawingBuffer: the page's own pixel checks (and ours in CI-style
// verification) read the canvas after the frame; the cost is one buffer copy.
const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, preserveDrawingBuffer: true });
if ('drawingBufferColorSpace' in gl) {
  try { gl.drawingBufferColorSpace = 'display-p3'; } catch { /* stays srgb */ }
}
const isP3 = gl.drawingBufferColorSpace === 'display-p3';

// Every material is a (Raw)ShaderMaterial, so three injects no output
// encoding anywhere — the drawing buffer receives exactly what our emitted
// final pass writes.
const renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: false });
renderer.toneMapping = THREE.NoToneMapping;

// ---- Derivation + shared uniform state.
const derived = deriveScene(LIGHT_DEFS);
derived.lights.forEach((l) => { l.flicker = { value: 1 }; });

const pad = (n, make) => Array.from({ length: n }, (_, i) => make(i));
const shared = {
  uLightPos: { value: pad(MAX_LIGHTS, (i) => new THREE.Vector3(...(derived.lights[i] ? shadePos(derived.lights[i]) : [0, -99, 0]))) },
  uIntensity: { value: pad(MAX_LIGHTS, (i) => derived.lights[i]?.intensity ?? 0) },
  uNaiveLight: { value: pad(MAX_LIGHTS, (i) => new THREE.Vector3(...(derived.lights[i]?.naive ?? [0, 0, 0]))) },
  uWetness: { value: 0.85 },
};

const uMode = { value: 0 };
const ctx = {
  derived,
  materialsSrgb: MATERIALS,
  shared,
  uMode,
  surfaceMats: [],
  reflectionMats: [],
};

const scene = buildAlley(ctx);
const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 80);

// ---- Sizing / post chain.
function resize() {
  const w = canvas.clientWidth;
  const h = Math.round(w * 0.58);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setSize(w, h, false);
  renderer.setPixelRatio(dpr);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  return [Math.round(w * dpr), Math.round(h * dpr)];
}

let [pw, ph] = resize();
let post = createPost(renderer, pw, ph, uMode);
post.output.uniforms.uP3.value = isP3 ? 1 : 0;

window.addEventListener('resize', () => {
  const [w, h] = resize();
  if (w !== pw || h !== ph) {
    [pw, ph] = [w, h];
    post.dispose?.();
    post = createPost(renderer, pw, ph, uMode);
    post.output.uniforms.uP3.value = isP3 ? 1 : 0;
  }
});

// ---- UI ----
const state = { naive: false, sodiumOnly: false, srgbPreview: false };

const toggle = document.getElementById('mode');
toggle?.addEventListener('change', () => {
  state.naive = toggle.checked;
  uMode.value = state.naive ? 1 : 0;
  document.body.dataset.mode = state.naive ? 'naive' : 'whitepoint';
});

const badge = document.getElementById('gamut-badge');
if (badge) {
  badge.textContent = isP3
    ? 'display-p3 output — your display shows the wide-gamut reds'
    : 'sRGB display — the emitted cusp mapper is doing the fallback live';
}

const readout = document.getElementById('derived');
function updateReadout() {
  if (!readout) return;
  readout.textContent = derived.lights
    .map((l) => {
      const [X, Y, Z] = l.xyz;
      const x = X / (X + Y + Z), y = Y / (X + Y + Z);
      const src = l.window ? '2700 K Planck × stained glass' : (l.gas === 'sodium-lamp' ? 'Na D doublet' : `${l.gas} (NIST lines)`);
      return `${l.name.padEnd(10)} ${src.padEnd(28)} xy ${x.toFixed(3)} ${y.toFixed(3)}   naive #${l.naive.map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('')}`;
    })
    .join('\n');
}
updateReadout();

// ---- Deterministic flicker (no Math.random anywhere near the pixels).
const fractf = (v) => v - Math.floor(v);
const hash1 = (n) => fractf(Math.sin(n * 12.9898) * 43758.5453);
function flickerOf(i, t, sputter) {
  const buzz = 1 + 0.022 * Math.sin(t * 120 * Math.PI + i * 1.7);
  const cell = Math.floor(t * 6.3) + i * 197;
  const h = hash1(cell);
  const limit = sputter ? 0.14 : 0.035;
  const dropout = h < limit ? 0.3 + 0.55 * hash1(cell + 0.5) : 1;
  return buzz * dropout;
}

// ---- Loop: fixed camera, slow deterministic drift.
const t0 = performance.now();
function frame() {
  const t = (performance.now() - t0) / 1000;
  camera.position.set(0.26 * Math.sin(t * 0.07), 1.7 + 0.05 * Math.sin(t * 0.11), 7.4);
  camera.lookAt(0.1 * Math.sin(t * 0.05), 2.15, -6);

  derived.lights.forEach((l, i) => {
    const isSodium = l.gas === 'sodium-lamp';
    const kill = state.sodiumOnly && !isSodium ? 0.02 : 1;
    const f = flickerOf(i, t, l.name === 'live') * kill;
    l.flicker.value = f;
    shared.uIntensity.value[i] = l.intensity * f;
  });
  updateReflections(ctx);

  post.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// Exposed for the later interaction tasks (gas picker wiring).
window.__alley = { ctx, swapGas: (i, gas) => { swapGas(derived, i, gas); refreshSurfaces(ctx); updateReadout(); }, state, GASES, post: () => post };
