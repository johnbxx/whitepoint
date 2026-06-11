// whitepoint/codegen — the same conversions, emitted as JS, GLSL, or WGSL.
//
//   import { glsl, wgsl, js } from 'whitepoint/codegen';
//   glsl('oklch', 'display-p3')
//   → a self-contained `vec3 wp_oklch_to_display_p3(vec3 c)` with exactly the
//     constants the JS engine uses, helpers included, adjacent matrices fused.

import { codegenSpaces } from './ops.js';
import { fuseOps, emitFunction } from './emit.js';

function chainFor(from, to) {
  const F = codegenSpaces[from];
  const T = codegenSpaces[to];
  if (!F) throw new Error(`codegen: unsupported space "${from}" (have: ${Object.keys(codegenSpaces).join(', ')})`);
  if (!T) throw new Error(`codegen: unsupported space "${to}"`);
  return fuseOps([...F.toXyzOps, ...T.fromXyzOps]);
}

function fnName(from, to) {
  return `wp_${from}_to_${to}`.replace(/-/g, '_');
}

/** GLSL ES 3.00 source for a from→to conversion (declare `precision highp float;`). */
export function glsl(from, to, { name = fnName(from, to) } = {}) {
  return emitFunction(chainFor(from, to), name, 'glsl');
}

/** WGSL source for a from→to conversion. */
export function wgsl(from, to, { name = fnName(from, to) } = {}) {
  return emitFunction(chainFor(from, to), name, 'wgsl');
}

/** JavaScript source for a standalone, dependency-free from→to function. */
export function js(from, to, { name = fnName(from, to) } = {}) {
  return emitFunction(chainFor(from, to), name, 'js');
}

/** Space ids available to the codegen pipeline. */
export function supported() {
  return Object.keys(codegenSpaces);
}

// ---- Shader-side gamut mapping ----
//
// OKLCH chroma reduction by fixed-iteration bisection, in the shader. This is
// the CSS Color 4 method minus the deltaEOK early-out (a JND ball around an
// already-reduced candidate buys little on GPU and costs a divergent branch),
// so results are equal-or-slightly-more-chroma-conservative than the CSS
// reference; bounded by the bisection step ≈ C/2^16. The conversion inside the
// loop is the same emitted chain as everything else — same constants, fused
// matrices.

function gamutMapName(gamut) {
  return `wp_gamut_map_oklch_to_${gamut}`.replace(/-/g, '_');
}

function gamutMapSource(lang, gamut, name) {
  const convName = fnName('oklch', gamut);
  const convSrc = emitFunction(chainFor('oklch', gamut), convName, lang);
  if (lang === 'js') {
    return `${convSrc}
const wp_in01 = (v) => v[0] >= 0 && v[0] <= 1 && v[1] >= 0 && v[1] <= 1 && v[2] >= 0 && v[2] <= 1;
function ${name}(lch, out = [0, 0, 0]) {
  if (lch[0] >= 1) { out[0] = 1; out[1] = 1; out[2] = 1; return out; }
  if (lch[0] <= 0) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
  ${convName}(lch, out);
  if (wp_in01(out)) return out;
  let lo = 0, hi = lch[1];
  const c = [lch[0], 0, lch[2]];
  for (let i = 0; i < 16; i++) {
    c[1] = 0.5 * (lo + hi);
    ${convName}(c, out);
    if (wp_in01(out)) lo = c[1]; else hi = c[1];
  }
  c[1] = lo;
  ${convName}(c, out);
  out[0] = Math.min(1, Math.max(0, out[0]));
  out[1] = Math.min(1, Math.max(0, out[1]));
  out[2] = Math.min(1, Math.max(0, out[2]));
  return out;
}`;
  }
  if (lang === 'glsl') {
    return `${convSrc}
bool wp_in01(vec3 v) { return all(greaterThanEqual(v, vec3(0.0))) && all(lessThanEqual(v, vec3(1.0))); }
vec3 ${name}(vec3 lch) {
  if (lch.x >= 1.0) { return vec3(1.0); }
  if (lch.x <= 0.0) { return vec3(0.0); }
  vec3 rgb = ${convName}(lch);
  if (wp_in01(rgb)) { return rgb; }
  float lo = 0.0;
  float hi = lch.y;
  for (int i = 0; i < 16; i++) {
    float mid = 0.5 * (lo + hi);
    rgb = ${convName}(vec3(lch.x, mid, lch.z));
    if (wp_in01(rgb)) { lo = mid; } else { hi = mid; }
  }
  return clamp(${convName}(vec3(lch.x, lo, lch.z)), vec3(0.0), vec3(1.0));
}`;
  }
  return `${convSrc}
fn wp_in01(v: vec3<f32>) -> bool { return all(v >= vec3<f32>(0.0)) && all(v <= vec3<f32>(1.0)); }
fn ${name}(lch: vec3<f32>) -> vec3<f32> {
  if (lch.x >= 1.0) { return vec3<f32>(1.0); }
  if (lch.x <= 0.0) { return vec3<f32>(0.0); }
  let rgb = ${convName}(lch);
  if (wp_in01(rgb)) { return rgb; }
  var lo: f32 = 0.0;
  var hi: f32 = lch.y;
  for (var i: i32 = 0; i < 16; i++) {
    let mid = 0.5 * (lo + hi);
    let candidate = ${convName}(vec3<f32>(lch.x, mid, lch.z));
    if (wp_in01(candidate)) { lo = mid; } else { hi = mid; }
  }
  return clamp(${convName}(vec3<f32>(lch.x, lo, lch.z)), vec3<f32>(0.0), vec3<f32>(1.0));
}`;
}

function checkRgbGamut(gamut) {
  const chains = codegenSpaces[gamut];
  if (!chains || !chains.fromXyzOps.some((op) => op.k === 'mat3')) {
    throw new Error(`codegen: gamut mapping needs an RGB gamut space (got "${gamut}")`);
  }
}

/** GLSL gamut mapper: OKLCH in, gamut-mapped RGB (in `gamut` coords) out. */
export function glslGamutMap(gamut, { name = gamutMapName(gamut) } = {}) {
  checkRgbGamut(gamut);
  return gamutMapSource('glsl', gamut, name);
}

/** WGSL gamut mapper. */
export function wgslGamutMap(gamut, { name = gamutMapName(gamut) } = {}) {
  checkRgbGamut(gamut);
  return gamutMapSource('wgsl', gamut, name);
}

/** Standalone JS gamut mapper (used for parity testing the shader logic). */
export function jsGamutMap(gamut, { name = gamutMapName(gamut) } = {}) {
  checkRgbGamut(gamut);
  return gamutMapSource('js', gamut, name);
}
