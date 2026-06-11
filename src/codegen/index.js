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

// ---- Shader-side mixing (CSS Color 4 §12) ----
//
// Per-pixel interpolation in any supported space with spec hue arcs — the
// core of gradient shaders. Coordinates must already be in `space`.

const MIX_HUE_CHANNEL = { hsl: 0, hwb: 0, lch: 2, oklch: 2 };
const HUE_METHODS = ['shorter', 'longer', 'increasing', 'decreasing'];

// Hue delta in the target language, from normalized hues ha/hb (CSS §12.4).
function hueDeltaExpr(lang, method) {
  const MOD = lang === 'glsl' || lang === 'wgsl'
    ? (x, m) => `mod(${x}, ${m})`
    : (x, m) => `(((${x}) % ${m}) + ${m}) % ${m}`;
  const d0 = `${MOD('hb - ha + 360.0', '360.0')}`;
  switch (method) {
    case 'shorter': return `float d0 = ${d0}; float d = d0 > 180.0 ? d0 - 360.0 : d0;`;
    case 'longer': return `float d0 = ${d0}; float d = d0 == 0.0 ? 360.0 : (d0 < 180.0 ? d0 - 360.0 : d0);`;
    case 'increasing': return `float d = ${d0};`;
    case 'decreasing': return `float d0 = ${d0}; float d = d0 == 0.0 ? 0.0 : d0 - 360.0;`;
    default: throw new Error(`codegen: unknown hue method "${method}"`);
  }
}

function mixSource(lang, spaceId, method, name) {
  const hc = MIX_HUE_CHANNEL[spaceId] ?? -1;
  // Mixing is intrinsic to a space (no conversion involved), so hsl/hwb are
  // mixable even though they have no conversion chains in codegen yet.
  if (!codegenSpaces[spaceId] && hc === -1) throw new Error(`codegen: unsupported space "${spaceId}"`);
  if (!HUE_METHODS.includes(method)) throw new Error(`codegen: unknown hue method "${method}"`);

  const comp = ['x', 'y', 'z'];
  const lerp = (i) => `a.${comp[i]} + t * (b.${comp[i]} - a.${comp[i]})`;

  if (lang === 'js') {
    const lines = [];
    for (let i = 0; i < 3; i++) {
      if (i === hc) {
        lines.push(
          `  const ha = ((a[${i}] % 360) + 360) % 360;`,
          `  const hb = ((b[${i}] % 360) + 360) % 360;`,
          `  ${hueDeltaExpr('js', method).replace(/float /g, 'const ').replace(/const d0/, 'const d0').replace('const d =', 'const d =')}`,
          `  out[${i}] = (((ha + t * d) % 360) + 360) % 360;`,
        );
      } else {
        lines.push(`  out[${i}] = a[${i}] + t * (b[${i}] - a[${i}]);`);
      }
    }
    return `function ${name}(a, b, t, out = [0, 0, 0]) {\n${lines.join('\n')}\n  return out;\n}`;
  }

  if (hc === -1) {
    if (lang === 'glsl') return `vec3 ${name}(vec3 a, vec3 b, float t) {\n  return mix(a, b, t);\n}`;
    return `fn ${name}(a: vec3<f32>, b: vec3<f32>, t: f32) -> vec3<f32> {\n  return mix(a, b, t);\n}`;
  }

  const nonHue = [0, 1, 2].filter((i) => i !== hc);
  if (lang === 'glsl') {
    return `vec3 ${name}(vec3 a, vec3 b, float t) {
  float ha = mod(mod(a.${comp[hc]}, 360.0) + 360.0, 360.0);
  float hb = mod(mod(b.${comp[hc]}, 360.0) + 360.0, 360.0);
  ${hueDeltaExpr('glsl', method)}
  vec3 v;
  v.${comp[nonHue[0]]} = ${lerp(nonHue[0])};
  v.${comp[nonHue[1]]} = ${lerp(nonHue[1])};
  v.${comp[hc]} = mod(ha + t * d, 360.0);
  return v;
}`;
  }
  // WGSL: no ternary — rewrite hue delta with select()
  const wgslDelta = {
    shorter: `let d0 = (hb - ha + 360.0) % 360.0; let d = select(d0, d0 - 360.0, d0 > 180.0);`,
    longer: `let d0 = (hb - ha + 360.0) % 360.0; let d = select(select(d0, d0 - 360.0, d0 < 180.0), 360.0, d0 == 0.0);`,
    increasing: `let d = (hb - ha + 360.0) % 360.0;`,
    decreasing: `let d0 = (hb - ha + 360.0) % 360.0; let d = select(d0 - 360.0, 0.0, d0 == 0.0);`,
  }[method];
  return `fn ${name}(a: vec3<f32>, b: vec3<f32>, t: f32) -> vec3<f32> {
  let ha = ((a.${comp[hc]} % 360.0) + 360.0) % 360.0;
  let hb = ((b.${comp[hc]} % 360.0) + 360.0) % 360.0;
  ${wgslDelta}
  var v: vec3<f32>;
  v.${comp[nonHue[0]]} = ${lerp(nonHue[0])};
  v.${comp[nonHue[1]]} = ${lerp(nonHue[1])};
  v.${comp[hc]} = (ha + t * d) % 360.0;
  return v;
}`;
}

function mixName(spaceId, method) {
  return `wp_mix_${spaceId}_${method}`.replace(/-/g, '_');
}

/** GLSL mixer for a space with a CSS Color 4 hue interpolation method. */
export function glslMix(space, { hue = 'shorter', name = mixName(space, hue) } = {}) {
  return mixSource('glsl', space, hue, name);
}

/** WGSL mixer. */
export function wgslMix(space, { hue = 'shorter', name = mixName(space, hue) } = {}) {
  return mixSource('wgsl', space, hue, name);
}

/** Standalone JS mixer (parity-tested against the library mix in CI). */
export function jsMix(space, { hue = 'shorter', name = mixName(space, hue) } = {}) {
  return mixSource('js', space, hue, name);
}

// ---- Shader-side compositing (Porter-Duff, premultiplied vec4) ----

const PD_FACTORS = {
  'clear':            ['0.0', '0.0'],
  'copy':             ['1.0', '0.0'],
  'destination':      ['0.0', '1.0'],
  'source-over':      ['1.0', '1.0 - as'],
  'destination-over': ['1.0 - ad', '1.0'],
  'source-in':        ['ad', '0.0'],
  'destination-in':   ['0.0', 'as'],
  'source-out':       ['1.0 - ad', '0.0'],
  'destination-out':  ['0.0', '1.0 - as'],
  'source-atop':      ['ad', '1.0 - as'],
  'destination-atop': ['1.0 - ad', 'as'],
  'xor':              ['1.0 - ad', '1.0 - as'],
  'lighter':          ['1.0', '1.0'],
};

function compositeSource(lang, op, name) {
  const f = PD_FACTORS[op];
  if (!f) throw new Error(`codegen: unknown Porter-Duff operator "${op}" (have: ${Object.keys(PD_FACTORS).join(', ')})`);
  const [fsE, fdE] = f;
  if (lang === 'js') {
    return `function ${name}(src, dst, out = [0, 0, 0, 0]) {
  const as = src[3], ad = dst[3];
  const fs = ${fsE.replace(/\.0/g, '')}, fd = ${fdE.replace(/\.0/g, '')};
  out[0] = src[0] * fs + dst[0] * fd;
  out[1] = src[1] * fs + dst[1] * fd;
  out[2] = src[2] * fs + dst[2] * fd;
  out[3] = as * fs + ad * fd;
  return out;
}`;
  }
  if (lang === 'glsl') {
    return `vec4 ${name}(vec4 src, vec4 dst) {
  float as = src.a;
  float ad = dst.a;
  return src * (${fsE}) + dst * (${fdE});
}`;
  }
  return `fn ${name}(src: vec4<f32>, dst: vec4<f32>) -> vec4<f32> {
  let as = src.w;
  let ad = dst.w;
  return src * (${fsE}) + dst * (${fdE});
}`;
}

function compositeName(op) {
  return `wp_composite_${op}`.replace(/-/g, '_');
}

/** GLSL Porter-Duff compositor over premultiplied vec4. */
export function glslComposite(op = 'source-over', { name = compositeName(op) } = {}) {
  return compositeSource('glsl', op, name);
}

/** WGSL Porter-Duff compositor. */
export function wgslComposite(op = 'source-over', { name = compositeName(op) } = {}) {
  return compositeSource('wgsl', op, name);
}

/** Standalone JS Porter-Duff compositor (parity-tested in CI). */
export function jsComposite(op = 'source-over', { name = compositeName(op) } = {}) {
  return compositeSource('js', op, name);
}
