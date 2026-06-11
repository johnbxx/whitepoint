// Hand-templated emitters for solver-based spaces (Tier 3): OKHSL, OKHSV,
// HSLuv, HPLuv — display direction (→ srgb), the per-pixel rendering case.
//
// These conversions involve runtime root-finding (the exact cusp and gamut
// boundary) or branching line algebra that doesn't fit the linear op-chain
// model, so each is a careful template in all three languages, with every
// constant interpolated from the same tables the library uses. The JS
// emission is parity-tested against the library; the only sanctioned
// divergence is the library's centidegree cusp cache (the emitted code
// solves at the exact hue).

import { OKLAB_M2_INV, LMS_TO_XYZ } from '../spaces/oklab.js';
import { sRGB } from '../spaces/rgb.js';
import { mul } from '../core/mat3.js';
import { CSS_D65_XYZ } from '../constants/whitepoints.js';
import { HELPERS, fmt } from './emit.js';

const B = OKLAB_M2_INV;
const S = mul(sRGB.m.fromXyz, LMS_TO_XYZ); // LMS → linear sRGB
const M = sRGB.m.fromXyz;                  // XYZ → linear sRGB

const K1 = 0.206, K2 = 0.03, K3 = (1 + K1) / (1 + K2);
const DEG2RAD = 0.017453292519943295;
const EPSILON = 216 / 24389;
const KAPPA = 24389 / 27;
const WX = CSS_D65_XYZ[0], WY = CSS_D65_XYZ[1], WZ = CSS_D65_XYZ[2];
const UN = (4 * WX) / (WX + 15 * WY + 3 * WZ);
const VN = (9 * WY) / (WX + 15 * WY + 3 * WZ);

// ---- per-language dialect ----

const DIALECT = {
  js: {
    f: (n) => fmt(n, 'js'),
    decl: (n, e) => `let ${n} = ${e};`,
    decl3: (n, e) => `let ${n} = ${e};`,
    loop: (n, body) => `for (let i = 0; i < ${n}; i++) {\n${body}\n}`,
    pow: (x, y) => `Math.pow(${x}, ${y})`,
    cbrt: (x) => `Math.cbrt(${x})`,
    sqrt: (x) => `Math.sqrt(${x})`,
    cos: (x) => `Math.cos(${x})`,
    sin: (x) => `Math.sin(${x})`,
    atan2: (y, x) => `Math.atan2(${y}, ${x})`,
    log: (x) => `Math.log(${x})`,
    exp: (x) => `Math.exp(${x})`,
    min: (a, b) => `Math.min(${a}, ${b})`,
    max: (a, b) => `Math.max(${a}, ${b})`,
    mod360: (x) => `(((${x}) % 360) + 360) % 360`,
    in: (i) => `c[${i}]`,
    gx: (v, i) => `${v}[${i}]`,
    wrap: (name, helpers, body) => `${helpers}\nfunction ${name}(c, out = [0, 0, 0]) {\n${body}\n  return out;\n}`,
    ret3: (a, b2, c2) => `out[0] = ${a}; out[1] = ${b2}; out[2] = ${c2}; return out;`,
    linFn: (consts) => `const wp_oklc_lin = (L, C, kl, km, ks) => {
  let l = ${consts.a0} * L + kl * C, m = ${consts.a1} * L + km * C, q = ${consts.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return [${consts.s0} * l + ${consts.s1} * m + ${consts.s2} * q, ${consts.s3} * l + ${consts.s4} * m + ${consts.s5} * q, ${consts.s6} * l + ${consts.s7} * m + ${consts.s8} * q];
};
const wp_in01v = (v) => v[0] >= 0 && v[0] <= 1 && v[1] >= 0 && v[1] <= 1 && v[2] >= 0 && v[2] <= 1;
const wp_min3 = (v) => Math.min(v[0], Math.min(v[1], v[2]));
const wp_max3 = (v) => Math.max(v[0], Math.max(v[1], v[2]));
const wp_toe = (x) => 0.5 * (${consts.k3} * x - ${consts.k1} + Math.sqrt((${consts.k3} * x - ${consts.k1}) * (${consts.k3} * x - ${consts.k1}) + ${consts.k4k2k3} * x));
const wp_toe_inv = (x) => (x * x + ${consts.k1} * x) / (${consts.k3} * (x + ${consts.k2}));`,
  },
  glsl: {
    f: (n) => fmt(n, 'glsl'),
    decl: (n, e) => `float ${n} = ${e};`,
    decl3: (n, e) => `vec3 ${n} = ${e};`,
    loop: (n, body) => `for (int i = 0; i < ${n}; i++) {\n${body}\n}`,
    pow: (x, y) => `pow(${x}, ${y})`,
    cbrt: (x) => `pow(${x}, ${fmt(1 / 3, 'glsl')})`,
    sqrt: (x) => `sqrt(${x})`,
    cos: (x) => `cos(${x})`,
    sin: (x) => `sin(${x})`,
    atan2: (y, x) => `atan(${y}, ${x})`,
    log: (x) => `log(${x})`,
    exp: (x) => `exp(${x})`,
    min: (a, b) => `min(${a}, ${b})`,
    max: (a, b) => `max(${a}, ${b})`,
    mod360: (x) => `mod(mod(${x}, 360.0) + 360.0, 360.0)`,
    in: (i) => `c.${'xyz'[i]}`,
    gx: (v, i) => `${v}.${'xyz'[i]}`,
    wrap: (name, helpers, body) => `${helpers}\nvec3 ${name}(vec3 c) {\n${body}\n}`,
    ret3: (a, b2, c2) => `return vec3(${a}, ${b2}, ${c2});`,
    linFn: (consts) => `vec3 wp_oklc_lin(float L, float C, float kl, float km, float ks) {
  float l = ${consts.a0} * L + kl * C; float m = ${consts.a1} * L + km * C; float q = ${consts.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return vec3(${consts.s0} * l + ${consts.s1} * m + ${consts.s2} * q, ${consts.s3} * l + ${consts.s4} * m + ${consts.s5} * q, ${consts.s6} * l + ${consts.s7} * m + ${consts.s8} * q);
}
bool wp_in01v(vec3 v) { return all(greaterThanEqual(v, vec3(0.0))) && all(lessThanEqual(v, vec3(1.0))); }
float wp_min3(vec3 v) { return min(v.x, min(v.y, v.z)); }
float wp_max3(vec3 v) { return max(v.x, max(v.y, v.z)); }
float wp_toe(float x) { float t = ${consts.k3} * x - ${consts.k1}; return 0.5 * (t + sqrt(t * t + ${consts.k4k2k3} * x)); }
float wp_toe_inv(float x) { return (x * x + ${consts.k1} * x) / (${consts.k3} * (x + ${consts.k2})); }`,
  },
  wgsl: {
    f: (n) => fmt(n, 'wgsl'),
    decl: (n, e) => `var ${n} = ${e};`,
    decl3: (n, e) => `var ${n} = ${e};`,
    loop: (n, body) => `for (var i: i32 = 0; i < ${n}; i++) {\n${body}\n}`,
    pow: (x, y) => `pow(${x}, ${y})`,
    cbrt: (x) => `pow(${x}, ${fmt(1 / 3, 'wgsl')})`,
    sqrt: (x) => `sqrt(${x})`,
    cos: (x) => `cos(${x})`,
    sin: (x) => `sin(${x})`,
    atan2: (y, x) => `atan2(${y}, ${x})`,
    log: (x) => `log(${x})`,
    exp: (x) => `exp(${x})`,
    min: (a, b) => `min(${a}, ${b})`,
    max: (a, b) => `max(${a}, ${b})`,
    mod360: (x) => `(((${x} % 360.0) + 360.0) % 360.0)`,
    in: (i) => `c.${'xyz'[i]}`,
    gx: (v, i) => `${v}.${'xyz'[i]}`,
    wrap: (name, helpers, body) => `${helpers}\nfn ${name}(c: vec3<f32>) -> vec3<f32> {\n${body}\n}`,
    ret3: (a, b2, c2) => `return vec3<f32>(${a}, ${b2}, ${c2});`,
    linFn: (consts) => `fn wp_oklc_lin(L: f32, C: f32, kl: f32, km: f32, ks: f32) -> vec3<f32> {
  var l = ${consts.a0} * L + kl * C; var m = ${consts.a1} * L + km * C; var q = ${consts.a2} * L + ks * C;
  l = l * l * l; m = m * m * m; q = q * q * q;
  return vec3<f32>(${consts.s0} * l + ${consts.s1} * m + ${consts.s2} * q, ${consts.s3} * l + ${consts.s4} * m + ${consts.s5} * q, ${consts.s6} * l + ${consts.s7} * m + ${consts.s8} * q);
}
fn wp_in01v(v: vec3<f32>) -> bool { return all(v >= vec3<f32>(0.0)) && all(v <= vec3<f32>(1.0)); }
fn wp_min3(v: vec3<f32>) -> f32 { return min(v.x, min(v.y, v.z)); }
fn wp_max3(v: vec3<f32>) -> f32 { return max(v.x, max(v.y, v.z)); }
fn wp_toe(x: f32) -> f32 { let t = ${consts.k3} * x - ${consts.k1}; return 0.5 * (t + sqrt(t * t + ${consts.k4k2k3} * x)); }
fn wp_toe_inv(x: f32) -> f32 { return (x * x + ${consts.k1} * x) / (${consts.k3} * (x + ${consts.k2})); }`,
  },
};

function okConsts(d) {
  return {
    a0: d.f(B[0]), a1: d.f(B[3]), a2: d.f(B[6]),
    s0: d.f(S[0]), s1: d.f(S[1]), s2: d.f(S[2]),
    s3: d.f(S[3]), s4: d.f(S[4]), s5: d.f(S[5]),
    s6: d.f(S[6]), s7: d.f(S[7]), s8: d.f(S[8]),
    k1: d.f(K1), k2: d.f(K2), k3: d.f(K3), k4k2k3: d.f(4 * K2 * K3),
  };
}

// shared OK preamble: normalized hue, direction, k-coefficients
function okPreamble(d) {
  return [
    d.decl('h', d.mod360(d.in(0))),
    d.decl('hr', `h * ${d.f(DEG2RAD)}`),
    d.decl('ca', d.cos('hr')),
    d.decl('cb', d.sin('hr')),
    d.decl('kl', `${d.f(B[1])} * ca + ${d.f(B[2])} * cb`),
    d.decl('km', `${d.f(B[4])} * ca + ${d.f(B[5])} * cb`),
    d.decl('ks', `${d.f(B[7])} * ca + ${d.f(B[8])} * cb`),
  ].join('\n  ');
}

// exact cusp via bracket + bisection on the channel-zero cubic (L = 1 slice)
function cuspBlock(d) {
  return [
    d.decl('clo', '0.0'),
    d.decl('chi', '0.05'),
    d.loop(10, `    if (wp_min3(wp_oklc_lin(1.0, chi, kl, km, ks)) <= 0.0) { break; }
    clo = chi; chi = chi * 2.0;`),
    d.loop(34, `    ${d.decl('cmid', '0.5 * (clo + chi)')}
    if (wp_min3(wp_oklc_lin(1.0, cmid, kl, km, ks)) > 0.0) { clo = cmid; } else { chi = cmid; }`),
    d.decl('Lc', d.cbrt(`1.0 / wp_max3(wp_oklc_lin(1.0, clo, kl, km, ks))`)),
    d.decl('Cc', 'clo * Lc'),
  ].join('\n  ');
}

// final: oklab(L, C·ca, C·cb) → linear sRGB → encode
function okTail(d) {
  return [
    d.decl3('lin', 'wp_oklc_lin(L, C, kl, km, ks)'),
    d.ret3(
      `wp_srgb_encode(${d.gx('lin', 0)})`,
      `wp_srgb_encode(${d.gx('lin', 1)})`,
      `wp_srgb_encode(${d.gx('lin', 2)})`,
    ),
  ].join('\n  ');
}

function whiteReturn(d) { return d.ret3('1.0', '1.0', '1.0'); }
function blackReturn(d) { return d.ret3('0.0', '0.0', '0.0'); }

// ---- OKHSV → sRGB ----

function okhsvSource(lang, name) {
  const d = DIALECT[lang];
  const helpers = `${HELPERS[lang].srgb_encode}\n${d.linFn(okConsts(d))}`;
  const body = `  ${d.decl('s', d.in(1))}
  ${d.decl('vv', d.in(2))}
  if (vv <= 1e-9) { ${blackReturn(d)} }
  ${okPreamble(d)}
  ${cuspBlock(d)}
  ${d.decl('sMax', 'Cc / Lc')}
  ${d.decl('tMax', 'Cc / (1.0 - Lc)')}
  ${d.decl('kk', '1.0 - 0.5 / sMax')}
  ${d.decl('denom', '0.5 + tMax - tMax * kk * s')}
  ${d.decl('Lv', '1.0 - s * 0.5 / denom')}
  ${d.decl('Cv', 's * tMax * 0.5 / denom')}
  ${d.decl('L', 'vv * Lv')}
  ${d.decl('C', 'vv * Cv')}
  ${d.decl('Lvt', 'wp_toe_inv(Lv)')}
  ${d.decl('Cvt', 'Cv * Lvt / Lv')}
  ${d.decl('Lnew', 'wp_toe_inv(L)')}
  if (L > 0.0) { C = C * Lnew / L; } else { C = 0.0; }
  L = Lnew;
  ${d.decl3('rs', 'wp_oklc_lin(Lvt, Cvt, kl, km, ks)')}
  ${d.decl('scale', d.cbrt(`1.0 / ${d.max(d.max(d.gx('rs', 0), d.gx('rs', 1)), d.max(d.gx('rs', 2), '0.0'))}`))}
  L = L * scale;
  C = C * scale;
  ${okTail(d)}`;
  return d.wrap(name, helpers, body);
}

// ---- OKHSL → sRGB ----

const ST_MID = (d, v) => ({
  s: `0.11516993 + 1.0 / (7.4477897 + 4.1590124 * cb + ca * (-2.19557347 + 1.75198401 * cb + ca * (-2.13704948 - 10.02301043 * cb + ca * (-4.24894561 + 5.38770819 * cb + 4.69891013 * ca))))`,
  t: `0.11239642 + 1.0 / (1.6132032 - 0.68124379 * cb + ca * (0.40370612 + 0.90148123 * cb + ca * (-0.27087943 + 0.6122399 * cb + ca * (0.00299215 - 0.45399568 * cb - 0.14661872 * ca))))`,
}[v]);

function okhslSource(lang, name) {
  const d = DIALECT[lang];
  const helpers = `${HELPERS[lang].srgb_encode}\n${d.linFn(okConsts(d))}`;
  const body = `  ${d.decl('s', d.in(1))}
  ${d.decl('ll', d.in(2))}
  if (ll >= 1.0 - 1e-9) { ${whiteReturn(d)} }
  if (ll <= 1e-9) { ${blackReturn(d)} }
  ${okPreamble(d)}
  ${d.decl('L', 'wp_toe_inv(ll)')}
  ${cuspBlock(d)}
  ${d.decl('mlo', '0.0')}
  ${d.decl('mhi', '0.05')}
  ${d.loop(8, `    if (mhi >= 2.0) { break; }
    if (!wp_in01v(wp_oklc_lin(L, mhi, kl, km, ks))) { break; }
    mlo = mhi; mhi = mhi * 2.0;`)}
  ${d.loop(48, `    ${d.decl('mm', '0.5 * (mlo + mhi)')}
    if (wp_in01v(wp_oklc_lin(L, mm, kl, km, ks))) { mlo = mm; } else { mhi = mm; }`)}
  ${d.decl('cMax', 'mlo')}
  ${d.decl('sMax', 'Cc / Lc')}
  ${d.decl('tMax', 'Cc / (1.0 - Lc)')}
  ${d.decl('kk', `cMax / ${d.min('L * sMax', '(1.0 - L) * tMax')}`)}
  ${d.decl('sMid', ST_MID(d, 's'))}
  ${d.decl('tMid', ST_MID(d, 't'))}
  ${d.decl('caa', 'L * sMid')}
  ${d.decl('cbb', '(1.0 - L) * tMid')}
  ${d.decl('cMid', `0.9 * kk * ${d.sqrt(d.sqrt('1.0 / (1.0 / (caa * caa * caa * caa) + 1.0 / (cbb * cbb * cbb * cbb))'))}`)}
  caa = L * 0.4;
  cbb = (1.0 - L) * 0.8;
  ${d.decl('c0', d.sqrt('1.0 / (1.0 / (caa * caa) + 1.0 / (cbb * cbb))'))}
  ${d.decl('C', '0.0')}
  if (s < 0.8) {
    ${d.decl('t1', '1.25 * s')}
    ${d.decl('k1v', '0.8 * c0')}
    ${d.decl('k2v', '1.0 - k1v / cMid')}
    C = t1 * k1v / (1.0 - k2v * t1);
  } else {
    ${d.decl('t2', '5.0 * (s - 0.8)')}
    ${d.decl('k1w', '0.2 * cMid * cMid * 1.5625 / c0')}
    ${d.decl('k2w', '1.0 - k1w / (cMax - cMid)')}
    C = cMid + t2 * k1w / (1.0 - k2w * t2);
  }
  ${okTail(d)}`;
  return d.wrap(name, helpers, body);
}

// ---- HSLuv / HPLuv → sRGB ----

function hsluvSource(lang, name, pastel) {
  const d = DIALECT[lang];
  const helpers = HELPERS[lang].srgb_encode;
  // emit-time constants per channel for the six boundary lines
  const lines = [];
  for (let ch = 0; ch < 3; ch++) {
    const m1 = M[ch * 3], m2 = M[ch * 3 + 1], m3 = M[ch * 3 + 2];
    const A = 284517 * m1 - 94839 * m3;
    const Bc = 838422 * m3 + 769860 * m2 + 731718 * m1;
    const Cc = 632260 * m3 - 126452 * m2;
    for (let t = 0; t < 2; t++) {
      const den = `(${d.f(Cc)} * sub2 + ${d.f(126452 * t)})`;
      const slope = `(${d.f(A)} * sub2 / ${den})`;
      const icpt = `((${d.f(Bc)} * ll * sub2 - ${d.f(769860 * t)} * ll) / ${den})`;
      lines.push({ slope, icpt, i: ch * 2 + t });
    }
  }
  const candidates = lines.map(({ slope, icpt, i }) => {
    const sl = `sl${i}`, ic = `ic${i}`, dd = `dd${i}`;
    if (pastel) {
      return `  ${d.decl(sl, slope)}
  ${d.decl(ic, icpt)}
  ${d.decl(dd, `${d.max(ic, `-(${ic})`)} / ${d.sqrt(`${sl} * ${sl} + 1.0`)}`)}
  if (${dd} < mx) { mx = ${dd}; }`;
    }
    return `  ${d.decl(sl, slope)}
  ${d.decl(ic, icpt)}
  ${d.decl(dd, `${ic} / (sh - ${sl} * chh)`)}
  if (${dd} >= 0.0 && ${dd} < mx) { mx = ${dd}; }`;
  }).join('\n');

  const body = `  ${d.decl('s', d.in(1))}
  ${d.decl('ll', d.in(2))}
  if (ll > 99.9999999) { ${whiteReturn(d)} }
  if (ll < 1e-8) { ${blackReturn(d)} }
  ${d.decl('h', d.mod360(d.in(0)))}
  ${d.decl('hr', `h * ${d.f(DEG2RAD)}`)}
  ${d.decl('sh', d.sin('hr'))}
  ${d.decl('chh', d.cos('hr'))}
  ${d.decl('sub1', `(ll + 16.0) * (ll + 16.0) * (ll + 16.0) / 1560896.0`)}
  ${d.decl('sub2', `sub1`)}
  if (sub1 <= ${d.f(EPSILON)}) { sub2 = ll / ${d.f(KAPPA)}; }
  ${d.decl('mx', '1e30')}
${candidates}
  ${d.decl('C', 'mx / 100.0 * s')}
  ${d.decl('uu', 'C * chh')}
  ${d.decl('vv', 'C * sh')}
  ${d.decl('up', `uu / (13.0 * ll) + ${d.f(UN)}`)}
  ${d.decl('vp', `vv / (13.0 * ll) + ${d.f(VN)}`)}
  ${d.decl('Y', `ll / ${d.f(KAPPA)}`)}
  if (ll > 8.0) { Y = (ll + 16.0) / 116.0; Y = Y * Y * Y; }
  Y = Y * ${d.f(WY)};
  ${d.decl('X', 'Y * 9.0 * up / (4.0 * vp)')}
  ${d.decl('Z', 'Y * (12.0 - 3.0 * up - 20.0 * vp) / (4.0 * vp)')}
  ${d.decl('lr', `${d.f(M[0])} * X + ${d.f(M[1])} * Y + ${d.f(M[2])} * Z`)}
  ${d.decl('lg', `${d.f(M[3])} * X + ${d.f(M[4])} * Y + ${d.f(M[5])} * Z`)}
  ${d.decl('lb', `${d.f(M[6])} * X + ${d.f(M[7])} * Y + ${d.f(M[8])} * Z`)}
  ${d.ret3('wp_srgb_encode(lr)', 'wp_srgb_encode(lg)', 'wp_srgb_encode(lb)')}`;
  return d.wrap(name, helpers, body);
}

// ---- CAM16-UCS ↔ sRGB and HCT → sRGB ----
//
// All viewing-condition quantities (Material defaults) and matrices are
// folded at emission time: the forward cone matrix is
// diag(fl·rgbD)·M16·M(srgb→XYZ) and the inverse is its exact reverse, so
// the shader sees two 3×3s, the adaptation curve, and the correlate
// algebra. HCT's inverse carries the same 48-step J-bisection as the
// library (pow-heavy: a picker/palette shader, not a per-pixel-per-frame
// one — documented).

import { cats } from '../constants/cats.js';
import { invert as inv3, mulVec as mv3 } from '../core/mat3.js';
import { CAM16_DEFAULT_VC } from '../spaces/cam16.js';

function cam16Consts(d) {
  const vc = CAM16_DEFAULT_VC;
  const M16 = cats.cat16;
  // forward: linear srgb → fl-scaled, discounted cone responses
  const Mf = mul(M16, sRGB.m.toXyz).map((v, i) => v * vc.fl * vc.rgbD[Math.floor(i / 3)]);
  // inverse: raw unadapted cones → linear srgb (1/fl, 1/rgbD, M16⁻¹, XYZ→srgb folded)
  const Minv16 = inv3(M16);
  const scaled = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) scaled[r * 3 + c] = Minv16[r * 3 + c] / (vc.rgbD[c] * vc.fl);
  }
  const Mb = mul(sRGB.m.fromXyz, scaled);
  const Kn = Math.pow(1.64 - Math.pow(0.29, vc.n), 0.73);
  const P1 = (50000 / 13) * vc.nc * vc.ncb;
  return {
    Mf: Mf.map(d.f), Mb: Mb.map(d.f),
    aw: d.f(vc.aw), nbb: d.f(vc.nbb), cz: d.f(vc.cz), icz: d.f(1 / vc.cz),
    fl25: d.f(vc.fl25), Kn: d.f(Kn), P1: d.f(P1),
  };
}

function mat3Lines(d, M, inVar, outNames) {
  return outNames.map((o, r) =>
    d.decl(o, `${M[r * 3]} * ${d.gx(inVar, 0)} + ${M[r * 3 + 1]} * ${d.gx(inVar, 1)} + ${M[r * 3 + 2]} * ${d.gx(inVar, 2)}`)).join('\n  ');
}

// adaptation helpers per language
const CAM_HELPERS = {
  js: `const wp_cam_adapt = (y) => { const a = Math.abs(y); const f = Math.pow(a, 0.42); return Math.sign(y) * 400 * f / (f + 27.13); };
const wp_cam_unadapt = (v) => { const a = Math.abs(v); const base = Math.max(0, 27.13 * a / (400 - a)); return Math.sign(v) * Math.pow(base, ${1 / 0.42}); };`,
  glsl: `float wp_cam_adapt(float y) { float a = abs(y); float f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
float wp_cam_unadapt(float v) { float a = abs(v); float base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1 / 0.42).toPrecision(17)}); }`,
  wgsl: `fn wp_cam_adapt(y: f32) -> f32 { let a = abs(y); let f = pow(a, 0.42); return sign(y) * 400.0 * f / (f + 27.13); }
fn wp_cam_unadapt(v: f32) -> f32 { let a = abs(v); let base = max(0.0, 27.13 * a / (400.0 - a)); return sign(v) * pow(base, ${(1 / 0.42).toPrecision(17)}); }`,
};

// shared inverse core: from (J, C, hr) in scope → linear srgb vec written to lr/lg/lb
function camInverseCore(d, K) {
  return `${d.decl('alpha', `C / ${d.sqrt('J / 100.0')}`)}
  ${d.decl('tt', d.pow(`alpha / ${K.Kn}`, d.f(1 / 0.9)))}
  ${d.decl('ac', `${K.aw} * ${d.pow('J / 100.0', K.icz)}`)}
  ${d.decl('p2', `ac / ${K.nbb}`)}
  ${d.decl('gam', `23.0 * (p2 + 0.305) * tt / (23.0 * ${K.P1} * eHue + 11.0 * tt * ${d.cos('hr')} + 108.0 * tt * ${d.sin('hr')})`)}
  ${d.decl('ca', `gam * ${d.cos('hr')}`)}
  ${d.decl('cb', `gam * ${d.sin('hr')}`)}
  ${d.decl('rA', '(460.0 * p2 + 451.0 * ca + 288.0 * cb) / 1403.0')}
  ${d.decl('gA', '(460.0 * p2 - 891.0 * ca - 261.0 * cb) / 1403.0')}
  ${d.decl('bA', '(460.0 * p2 - 220.0 * ca - 6300.0 * cb) / 1403.0')}
  ${d.decl('cr', 'wp_cam_unadapt(rA)')}
  ${d.decl('cg', 'wp_cam_unadapt(gA)')}
  ${d.decl('cbn', 'wp_cam_unadapt(bA)')}
  ${d.decl('lr', `${K.Mb[0]} * cr + ${K.Mb[1]} * cg + ${K.Mb[2]} * cbn`)}
  ${d.decl('lg', `${K.Mb[3]} * cr + ${K.Mb[4]} * cg + ${K.Mb[5]} * cbn`)}
  ${d.decl('lb', `${K.Mb[6]} * cr + ${K.Mb[7]} * cg + ${K.Mb[8]} * cbn`)}`;
}

function srgbToCam16UcsSource(lang, name) {
  const d = DIALECT[lang];
  const K = cam16Consts(d);
  const helpers = `${HELPERS[lang].srgb_decode}\n${CAM_HELPERS[lang]}`;
  const body = `  ${d.decl('dr', `wp_srgb_decode(${d.in(0)})`)}
  ${d.decl('dg', `wp_srgb_decode(${d.in(1)})`)}
  ${d.decl('db', `wp_srgb_decode(${d.in(2)})`)}
  ${d.decl('rA', `wp_cam_adapt(${K.Mf[0]} * dr + ${K.Mf[1]} * dg + ${K.Mf[2]} * db)`)}
  ${d.decl('gA', `wp_cam_adapt(${K.Mf[3]} * dr + ${K.Mf[4]} * dg + ${K.Mf[5]} * db)`)}
  ${d.decl('bA', `wp_cam_adapt(${K.Mf[6]} * dr + ${K.Mf[7]} * dg + ${K.Mf[8]} * db)`)}
  ${d.decl('ca', '(11.0 * rA - 12.0 * gA + bA) / 11.0')}
  ${d.decl('cb', '(rA + gA - 2.0 * bA) / 9.0')}
  ${d.decl('u', '(20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0')}
  ${d.decl('ac', `((40.0 * rA + 20.0 * gA + bA) / 20.0) * ${K.nbb}`)}
  ${d.decl('J', `100.0 * ${d.pow(`ac / ${K.aw}`, K.cz)}`)}
  ${d.decl('hr', `${d.atan2('cb', 'ca')}`)}
  ${d.decl('eHue', `0.25 * (${d.cos('hr + 2.0')} + 3.8)`)}
  ${d.decl('tt', `${K.P1} * eHue * ${d.sqrt('ca * ca + cb * cb')} / (u + 0.305)`)}
  ${d.decl('alpha', `${d.pow('tt', '0.9')} * ${K.Kn}`)}
  ${d.decl('C', `alpha * ${d.sqrt('J / 100.0')}`)}
  ${d.decl('Mm', `C * ${K.fl25}`)}
  ${d.decl('Mp', `${d.log('1.0 + 0.0228 * Mm')} / 0.0228`)}
  ${d.ret3('1.7 * J / (1.0 + 0.007 * J)', `Mp * ${d.cos('hr')}`, `Mp * ${d.sin('hr')}`)}`;
  return d.wrap(name, helpers, body);
}

function cam16UcsToSrgbSource(lang, name) {
  const d = DIALECT[lang];
  const K = cam16Consts(d);
  const helpers = `${HELPERS[lang].srgb_encode}\n${CAM_HELPERS[lang]}`;
  const body = `  ${d.decl('Jp', d.in(0))}
  ${d.decl('Mp', d.sqrt(`${d.in(1)} * ${d.in(1)} + ${d.in(2)} * ${d.in(2)}`))}
  ${d.decl('J', 'Jp / (1.7 - 0.007 * Jp)')}
  if (J <= 0.0) { ${blackReturn(d)} }
  ${d.decl('C', `(${d.exp('0.0228 * Mp')} - 1.0) / 0.0228 / ${K.fl25}`)}
  ${d.decl('hr', `${d.atan2(d.in(2), d.in(1))}`)}
  ${d.decl('eHue', `0.25 * (${d.cos('hr + 2.0')} + 3.8)`)}
  ${camInverseCore(d, K)}
  ${d.ret3('wp_srgb_encode(lr)', 'wp_srgb_encode(lg)', 'wp_srgb_encode(lb)')}`;
  return d.wrap(name, helpers, body);
}

function hctToSrgbSource(lang, name) {
  const d = DIALECT[lang];
  const K = cam16Consts(d);
  const helpers = `${HELPERS[lang].srgb_encode}\n${CAM_HELPERS[lang]}`;
  // Y (relative, 0–1) of the inverse at a given J — only the Y row is needed
  // inside the bisection; the full matrix runs once at the end.
  const yRow = (() => {
    const vc = CAM16_DEFAULT_VC;
    const Minv16 = inv3(cats.cat16);
    // Y (relative 0–1): the 100-scale cancels against the (100/fl) unadapt
    // factor, leaving 1/fl — folding an extra /100 here was a 100× Y bug
    // that sent the bisection to the rail (caught by emitted-JS parity).
    return [0, 1, 2].map((c) => d.f(Minv16[3 + c] / (vc.rgbD[c] * vc.fl)));
  })();
  const body = `  ${d.decl('tone', d.in(2))}
  if (tone <= 0.0) { ${blackReturn(d)} }
  if (tone >= 100.0) { ${whiteReturn(d)} }
  ${d.decl('fy', '(tone + 16.0) / 116.0')}
  ${d.decl('targetY', 'fy * fy * fy')}
  if (fy <= ${d.f(6 / 29)}) { targetY = (116.0 * fy - 16.0) / ${d.f(24389 / 27)}; }
  ${d.decl('C', d.in(1))}
  ${d.decl('hr', `${d.mod360(d.in(0))} * ${d.f(DEG2RAD)}`)}
  ${d.decl('eHue', `0.25 * (${d.cos('hr + 2.0')} + 3.8)`)}
  ${d.decl('jlo', '0.0')}
  ${d.decl('jhi', '400.0')}
  ${d.loop(48, `    ${d.decl('J', '0.5 * (jlo + jhi)')}
    ${d.decl('alpha', `C / ${d.sqrt(d.max('J / 100.0', '1e-9'))}`)}
    ${d.decl('tt', d.pow(`alpha / ${K.Kn}`, d.f(1 / 0.9)))}
    ${d.decl('ac', `${K.aw} * ${d.pow('J / 100.0', K.icz)}`)}
    ${d.decl('p2', `ac / ${K.nbb}`)}
    ${d.decl('gam', `23.0 * (p2 + 0.305) * tt / (23.0 * ${K.P1} * eHue + 11.0 * tt * ${d.cos('hr')} + 108.0 * tt * ${d.sin('hr')})`)}
    ${d.decl('ca', `gam * ${d.cos('hr')}`)}
    ${d.decl('cb', `gam * ${d.sin('hr')}`)}
    ${d.decl('cr', 'wp_cam_unadapt((460.0 * p2 + 451.0 * ca + 288.0 * cb) / 1403.0)')}
    ${d.decl('cg', 'wp_cam_unadapt((460.0 * p2 - 891.0 * ca - 261.0 * cb) / 1403.0)')}
    ${d.decl('cbn', 'wp_cam_unadapt((460.0 * p2 - 220.0 * ca - 6300.0 * cb) / 1403.0)')}
    ${d.decl('Y', `${yRow[0]} * cr + ${yRow[1]} * cg + ${yRow[2]} * cbn`)}
    if (Y < targetY) { jlo = J; } else { jhi = J; }`)}
  ${d.decl('J', '0.5 * (jlo + jhi)')}
  ${camInverseCore(d, K)}
  ${d.ret3('wp_srgb_encode(lr)', 'wp_srgb_encode(lg)', 'wp_srgb_encode(lb)')}`;
  return d.wrap(name, helpers, body);
}

// ---- public dispatch ----

const SPECIAL = {
  'okhsv|srgb': okhsvSource,
  'okhsl|srgb': okhslSource,
  'hsluv|srgb': (lang, name) => hsluvSource(lang, name, false),
  'hpluv|srgb': (lang, name) => hsluvSource(lang, name, true),
  'srgb|cam16-ucs': srgbToCam16UcsSource,
  'cam16-ucs|srgb': cam16UcsToSrgbSource,
  'hct|srgb': hctToSrgbSource,
};

export function specialSource(lang, from, to, name) {
  const builder = SPECIAL[`${from}|${to}`];
  return builder ? builder(lang, name) : null;
}

export function specialPairs() {
  return Object.keys(SPECIAL).map((k) => k.split('|'));
}
