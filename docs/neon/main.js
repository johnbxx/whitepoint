// neon alley — the whitepoint showpiece.
// One toggle, two pipelines, same geometry: hand-picked sRGB with channel
// clipping vs spectra → XYZ → emitted shaders → wide-gamut output.

import * as THREE from 'three';
import { deriveScene, MATERIALS } from './spectra.js';
import { buildAlley } from './scene.js';
import { createPost } from './post.js';

THREE.ColorManagement.enabled = false;

// ---- Lights (scaffold cast; positions are scene-space) ----
const LIGHT_DEFS = [
  { name: 'ring', gas: 'neon', pos: [2.55, 3.0, -3.0], intensity: 2.2 },
  { name: 'bar', gas: 'helium', pos: [-2.55, 2.6, -6.0], intensity: 1.6 },
  { name: 'street', gas: 'sodium-lamp', pos: [2.1, 4.6, 4.5], intensity: 3.2 },
];

const canvas = document.getElementById('alley');
const gl = canvas.getContext('webgl2', { antialias: false, alpha: false });
if ('drawingBufferColorSpace' in gl) {
  try { gl.drawingBufferColorSpace = 'display-p3'; } catch { /* stays srgb */ }
}
const isP3 = gl.drawingBufferColorSpace === 'display-p3';

// Every material below is a (Raw)ShaderMaterial, so three injects no output
// encoding anywhere — the drawing buffer receives exactly what our emitted
// final pass writes. (renderer.outputColorSpace only affects built-ins.)
const renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: false });
renderer.toneMapping = THREE.NoToneMapping;

const uMode = { value: 0 };
const ctx = {
  derived: deriveScene(LIGHT_DEFS),
  materialsSrgb: MATERIALS,
  uMode,
};

const scene = buildAlley(ctx);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 60);

function resize() {
  const w = canvas.clientWidth;
  const h = Math.round(w * 9 / 16);
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
    post = createPost(renderer, pw, ph, uMode);
    post.output.uniforms.uP3.value = isP3 ? 1 : 0;
  }
});

// ---- UI ----
const toggle = document.getElementById('mode');
toggle?.addEventListener('change', () => {
  uMode.value = toggle.checked ? 1 : 0;
  document.body.dataset.mode = toggle.checked ? 'naive' : 'whitepoint';
});
const badge = document.getElementById('gamut-badge');
if (badge) badge.textContent = isP3 ? 'display-p3 output — your display shows the wide-gamut reds' : 'sRGB output — the cusp mapper is doing the fallback live';

// Derivation readout: show the physics did the work.
const readout = document.getElementById('derived');
if (readout) {
  readout.textContent = ctx.derived.lights
    .map((l) => `${l.name} (${l.gas}): XYZ ${l.xyz.map((v) => v.toFixed(3)).join(' ')}`)
    .join('\n');
}

// ---- Loop: fixed camera, slow deterministic drift ----
const t0 = performance.now();
function frame() {
  const t = (performance.now() - t0) / 1000;
  camera.position.set(0.28 * Math.sin(t * 0.07), 1.7 + 0.06 * Math.sin(t * 0.11), 7.5);
  camera.lookAt(0, 2.1, -6);
  post.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
