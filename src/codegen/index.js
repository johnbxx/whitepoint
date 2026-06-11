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

// ---- Shader-side blend modes (W3C Compositing & Blending L1) ----
//
// Componentwise modes emit as vec3 expressions; branching modes as scalar
// helpers; the non-separable four use the spec's Lum/Sat machinery — where
// SetSat reduces to the branchless vector form (c − min)·s/(max − min).

const BLEND_VEC3 = {
  'normal': (b, s) => s,
  'multiply': (b, s) => `${b} * ${s}`,
  'screen': (b, s) => `${b} + ${s} - ${b} * ${s}`,
  'darken': (b, s) => `min(${b}, ${s})`,
  'lighten': (b, s) => `max(${b}, ${s})`,
  'difference': (b, s) => `abs(${b} - ${s})`,
  'exclusion': (b, s) => `${b} + ${s} - 2.0 * ${b} * ${s}`,
};

const SCALAR_HELPERS = {
  glsl: {
    'hard-light': `float wp_hard_light_c(float b, float s) { return s <= 0.5 ? b * 2.0 * s : b + (2.0 * s - 1.0) - b * (2.0 * s - 1.0); }`,
    'overlay': `float wp_overlay_c(float b, float s) { return wp_hard_light_c(s, b); }`,
    'color-dodge': `float wp_color_dodge_c(float b, float s) { if (b == 0.0) { return 0.0; } if (s == 1.0) { return 1.0; } return min(1.0, b / (1.0 - s)); }`,
    'color-burn': `float wp_color_burn_c(float b, float s) { if (b == 1.0) { return 1.0; } if (s == 0.0) { return 0.0; } return 1.0 - min(1.0, (1.0 - b) / s); }`,
    'soft-light': `float wp_softlight_d(float x) { return x <= 0.25 ? ((16.0 * x - 12.0) * x + 4.0) * x : sqrt(x); }
float wp_soft_light_c(float b, float s) { return s <= 0.5 ? b - (1.0 - 2.0 * s) * b * (1.0 - b) : b + (2.0 * s - 1.0) * (wp_softlight_d(b) - b); }`,
  },
  wgsl: {
    'hard-light': `fn wp_hard_light_c(b: f32, s: f32) -> f32 { if (s <= 0.5) { return b * 2.0 * s; } return b + (2.0 * s - 1.0) - b * (2.0 * s - 1.0); }`,
    'overlay': `fn wp_overlay_c(b: f32, s: f32) -> f32 { return wp_hard_light_c(s, b); }`,
    'color-dodge': `fn wp_color_dodge_c(b: f32, s: f32) -> f32 { if (b == 0.0) { return 0.0; } if (s == 1.0) { return 1.0; } return min(1.0, b / (1.0 - s)); }`,
    'color-burn': `fn wp_color_burn_c(b: f32, s: f32) -> f32 { if (b == 1.0) { return 1.0; } if (s == 0.0) { return 0.0; } return 1.0 - min(1.0, (1.0 - b) / s); }`,
    'soft-light': `fn wp_softlight_d(x: f32) -> f32 { if (x <= 0.25) { return ((16.0 * x - 12.0) * x + 4.0) * x; } return sqrt(x); }
fn wp_soft_light_c(b: f32, s: f32) -> f32 { if (s <= 0.5) { return b - (1.0 - 2.0 * s) * b * (1.0 - b); } return b + (2.0 * s - 1.0) * (wp_softlight_d(b) - b); }`,
  },
  js: {
    'hard-light': `const wp_hard_light_c = (b, s) => s <= 0.5 ? b * 2 * s : b + (2 * s - 1) - b * (2 * s - 1);`,
    'overlay': `const wp_overlay_c = (b, s) => wp_hard_light_c(s, b);`,
    'color-dodge': `const wp_color_dodge_c = (b, s) => b === 0 ? 0 : s === 1 ? 1 : Math.min(1, b / (1 - s));`,
    'color-burn': `const wp_color_burn_c = (b, s) => b === 1 ? 1 : s === 0 ? 0 : 1 - Math.min(1, (1 - b) / s);`,
    'soft-light': `const wp_softlight_d = (x) => x <= 0.25 ? ((16 * x - 12) * x + 4) * x : Math.sqrt(x);
const wp_soft_light_c = (b, s) => s <= 0.5 ? b - (1 - 2 * s) * b * (1 - b) : b + (2 * s - 1) * (wp_softlight_d(b) - b);`,
  },
};

const NONSEP_HELPERS = {
  glsl: `float wp_lum(vec3 c) { return dot(c, vec3(0.3, 0.59, 0.11)); }
vec3 wp_clip_color(vec3 c) {
  float l = wp_lum(c);
  float n = min(c.r, min(c.g, c.b));
  float x = max(c.r, max(c.g, c.b));
  if (n < 0.0) { c = l + (c - l) * l / (l - n); }
  if (x > 1.0) { c = l + (c - l) * (1.0 - l) / (x - l); }
  return c;
}
vec3 wp_set_lum(vec3 c, float l) { return wp_clip_color(c + (l - wp_lum(c))); }
float wp_sat(vec3 c) { return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b)); }
vec3 wp_set_sat(vec3 c, float s) {
  float mn = min(c.r, min(c.g, c.b));
  float mx = max(c.r, max(c.g, c.b));
  return mx > mn ? (c - mn) * s / (mx - mn) : vec3(0.0);
}`,
  wgsl: `fn wp_lum(c: vec3<f32>) -> f32 { return dot(c, vec3<f32>(0.3, 0.59, 0.11)); }
fn wp_clip_color(c_in: vec3<f32>) -> vec3<f32> {
  var c = c_in;
  let l = wp_lum(c);
  let lv = vec3<f32>(l);
  let n = min(c.x, min(c.y, c.z));
  let x = max(c.x, max(c.y, c.z));
  if (n < 0.0) { c = lv + (c - lv) * l / (l - n); }
  if (x > 1.0) { c = lv + (c - lv) * (1.0 - l) / (x - l); }
  return c;
}
fn wp_set_lum(c: vec3<f32>, l: f32) -> vec3<f32> { return wp_clip_color(c + vec3<f32>(l - wp_lum(c))); }
fn wp_sat(c: vec3<f32>) -> f32 { return max(c.x, max(c.y, c.z)) - min(c.x, min(c.y, c.z)); }
fn wp_set_sat(c: vec3<f32>, s: f32) -> vec3<f32> {
  let mn = min(c.x, min(c.y, c.z));
  let mx = max(c.x, max(c.y, c.z));
  if (mx > mn) { return (c - vec3<f32>(mn)) * s / (mx - mn); }
  return vec3<f32>(0.0);
}`,
  js: `const wp_lum = (c) => 0.3 * c[0] + 0.59 * c[1] + 0.11 * c[2];
const wp_clip_color = (c) => {
  const l = wp_lum(c);
  const n = Math.min(c[0], c[1], c[2]);
  const x = Math.max(c[0], c[1], c[2]);
  if (n < 0) { for (let i = 0; i < 3; i++) c[i] = l + ((c[i] - l) * l) / (l - n); }
  if (x > 1) { for (let i = 0; i < 3; i++) c[i] = l + ((c[i] - l) * (1 - l)) / (x - l); }
  return c;
};
const wp_set_lum = (c, l) => { const d = l - wp_lum(c); c[0] += d; c[1] += d; c[2] += d; return wp_clip_color(c); };
const wp_sat = (c) => Math.max(c[0], c[1], c[2]) - Math.min(c[0], c[1], c[2]);
const wp_set_sat = (c, s) => {
  const mn = Math.min(c[0], c[1], c[2]);
  const mx = Math.max(c[0], c[1], c[2]);
  for (let i = 0; i < 3; i++) c[i] = mx > mn ? ((c[i] - mn) * s) / (mx - mn) : 0;
  return c;
};`,
};

const NONSEP_EXPR = {
  'hue': (b, s) => `wp_set_lum(wp_set_sat(${s}, wp_sat(${b})), wp_lum(${b}))`,
  'saturation': (b, s) => `wp_set_lum(wp_set_sat(${b}, wp_sat(${s})), wp_lum(${b}))`,
  'color': (b, s) => `wp_set_lum(${s}, wp_lum(${b}))`,
  'luminosity': (b, s) => `wp_set_lum(${b}, wp_lum(${s}))`,
};

function blendName(mode) {
  return `wp_blend_${mode}`.replace(/-/g, '_');
}

function blendSource(lang, mode, name) {
  let helpers = '';
  let bExpr; // vec3-valued blend expression in terms of backdrop/source rgb

  const vecB = lang === 'glsl' ? 'dst.rgb' : lang === 'wgsl' ? 'dst.rgb' : null;
  const vecS = lang === 'glsl' ? 'src.rgb' : lang === 'wgsl' ? 'src.rgb' : null;

  if (BLEND_VEC3[mode]) {
    bExpr = (b, s) => BLEND_VEC3[mode](b, s);
  } else if (SCALAR_HELPERS[lang][mode] !== undefined || ['overlay', 'hard-light', 'color-dodge', 'color-burn', 'soft-light'].includes(mode)) {
    // overlay depends on hard-light's helper
    helpers = mode === 'overlay'
      ? `${SCALAR_HELPERS[lang]['hard-light']}\n${SCALAR_HELPERS[lang]['overlay']}`
      : SCALAR_HELPERS[lang][mode];
    const h = `wp_${mode.replace(/-/g, '_')}_c`;
    bExpr = null;
    if (lang === 'js') {
      return `${helpers}
function ${name}(src, dst, out = [0, 0, 0, 0]) {
  const as = src[3], ab = dst[3];
  const ao = as + ab * (1 - as);
  for (let i = 0; i < 3; i++) {
    const b = ${h}(dst[i], src[i]);
    const csp = (1 - ab) * src[i] + ab * b;
    const co = as * csp + ab * (1 - as) * dst[i];
    out[i] = ao === 0 ? 0 : co / ao;
  }
  out[3] = ao;
  return out;
}`;
    }
    const vec = lang === 'glsl' ? 'vec3' : 'vec3<f32>';
    const comp = lang === 'glsl' ? ['r', 'g', 'b'] : ['x', 'y', 'z'];
    bExpr = () => `${vec}(${comp.map((c) => `${h}(dst.${lang === 'glsl' ? 'rgb' : 'rgb'}.${c} , src.rgb.${c})`).join(', ')})`;
  } else if (NONSEP_EXPR[mode]) {
    helpers = NONSEP_HELPERS[lang];
    bExpr = NONSEP_EXPR[mode];
  } else {
    throw new Error(`codegen: unknown blend mode "${mode}"`);
  }

  if (lang === 'js') {
    const expr = NONSEP_EXPR[mode]
      ? NONSEP_EXPR[mode]('[dst[0], dst[1], dst[2]]', '[src[0], src[1], src[2]]')
      : null;
    if (expr) {
      return `${helpers}
function ${name}(src, dst, out = [0, 0, 0, 0]) {
  const as = src[3], ab = dst[3];
  const ao = as + ab * (1 - as);
  const bl = ${expr};
  for (let i = 0; i < 3; i++) {
    const csp = (1 - ab) * src[i] + ab * bl[i];
    const co = as * csp + ab * (1 - as) * dst[i];
    out[i] = ao === 0 ? 0 : co / ao;
  }
  out[3] = ao;
  return out;
}`;
    }
    // componentwise vec mode
    const cw = (i) => BLEND_VEC3[mode](`dst[${i}]`, `src[${i}]`)
      .replace(/min\(/g, 'Math.min(').replace(/max\(/g, 'Math.max(').replace(/abs\(/g, 'Math.abs(').replace(/2\.0/g, '2');
    return `function ${name}(src, dst, out = [0, 0, 0, 0]) {
  const as = src[3], ab = dst[3];
  const ao = as + ab * (1 - as);
  for (let i = 0; i < 3; i++) {
    const b = ${cw('i')};
    const csp = (1 - ab) * src[i] + ab * b;
    const co = as * csp + ab * (1 - as) * dst[i];
    out[i] = ao === 0 ? 0 : co / ao;
  }
  out[3] = ao;
  return out;
}`;
  }

  const blendLine = `${bExpr(vecB, vecS)}`;
  if (lang === 'glsl') {
    return `${helpers}${helpers ? '\n' : ''}vec4 ${name}(vec4 src, vec4 dst) {
  vec3 bl = ${blendLine};
  vec3 csp = (1.0 - dst.a) * src.rgb + dst.a * bl;
  float ao = src.a + dst.a * (1.0 - src.a);
  vec3 co = src.a * csp + dst.a * (1.0 - src.a) * dst.rgb;
  return ao == 0.0 ? vec4(0.0) : vec4(co / ao, ao);
}`;
  }
  return `${helpers}${helpers ? '\n' : ''}fn ${name}(src: vec4<f32>, dst: vec4<f32>) -> vec4<f32> {
  let bl = ${blendLine.replace(/dst\.rgb/g, 'dst.rgb').replace(/src\.rgb/g, 'src.rgb')};
  let csp = (1.0 - dst.w) * src.rgb + dst.w * bl;
  let ao = src.w + dst.w * (1.0 - src.w);
  let co = src.w * csp + dst.w * (1.0 - src.w) * dst.rgb;
  return select(vec4<f32>(co / ao, ao), vec4<f32>(0.0), ao == 0.0);
}`;
}

/** GLSL blend-then-composite (source-over) for a W3C blend mode, straight-alpha vec4. */
export function glslBlend(mode = 'normal', { name = blendName(mode) } = {}) {
  return blendSource('glsl', mode, name);
}

/** WGSL blend. */
export function wgslBlend(mode = 'normal', { name = blendName(mode) } = {}) {
  return blendSource('wgsl', mode, name);
}

/** Standalone JS blend (parity-tested against the library in CI). */
export function jsBlend(mode = 'normal', { name = blendName(mode) } = {}) {
  return blendSource('js', mode, name);
}
