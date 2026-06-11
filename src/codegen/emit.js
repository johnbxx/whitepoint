// Emitters: op chains → JS / GLSL / WGSL source.
//
// One number formatter serves all three targets, so every emitted constant is
// the shortest exact decimal representation of the same float64 the JS engine
// computes with. Adjacent 3×3 ops are fused (matrix product) before emission,
// so generated shaders get the same precomposition the JS hot paths enjoy.
//
// Note on GPU precision: the constants are digit-identical; GPU arithmetic is
// float32 (or mediump!), so end-to-end agreement is bounded by the shader's
// precision, not by the constants. Declare `precision highp float;` in GLSL.

import { mul } from '../core/mat3.js';
import {
  A98_GAMMA, PROPHOTO_ET, REC2020_ALPHA, REC2020_BETA,
  BT709_ALPHA, BT709_BETA, ACESCC_MIN, ACESCCT_A, ACESCCT_B,
  HLG_A, HLG_B, HLG_C, HLG_SCALE,
} from '../constants/transfer.js';
import { PQ_M1, PQ_M2, PQ_C1, PQ_C2, PQ_C3, JZ_RHO, JZ_D, JZ_D0, YW } from '../constants/hdr.js';

const ACESCC_LO = (9.72 - 15) / 17.52;
const ACESCC_HI = (Math.log2(65504) + 9.72) / 17.52;
const ACESCCT_BREAK = 0.155251141552511;
const P2_N16 = Math.pow(2, -16);
const P2_N15 = Math.pow(2, -15);

const DEG2RAD = '0.017453292519943295';
const RAD2DEG = '57.29577951308232';

// Every derived constant in the helper bodies is computed here, from the same
// exports the JS engine uses — never retyped (north star principle #2).
const LAB_EPSILON = 216 / 24389;
const LAB_KAPPA = 24389 / 27;
const LAB_CBRT_EPSILON = 6 / 29;

/** Shortest round-trip decimal; guaranteed to parse as a float literal. */
function fmt(n, lang) {
  let s = String(n);
  if (lang !== 'js' && !/[.e]/.test(s)) s += '.0';
  return s;
}

/** Fuse adjacent mat3 ops: mat3(B) after mat3(A) is mat3(B·A). */
export function fuseOps(ops) {
  const out = [];
  for (const op of ops) {
    const prev = out[out.length - 1];
    if (op.k === 'mat3' && prev && prev.k === 'mat3') {
      out[out.length - 1] = { k: 'mat3', m: mul(op.m, prev.m) };
    } else {
      out.push(op);
    }
  }
  return out;
}

// ---- helper function bodies per language ----
//
// Built lazily per language with every constant interpolated from the live
// float64 values above. The original draft hand-typed α−1 for Rec.2020 and
// got the last digit wrong — the exact failure mode this library exists to
// prevent. Now α−1 is computed, like everything else.

function buildHelpers(lang) {
  const f = (n) => fmt(n, lang);
  const THIRD = f(1 / 3);
  if (lang === 'js') {
    return {
      srgb_decode: `const wp_srgb_decode = (v) => { const a = Math.abs(v); const m = a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4); return v < 0 ? -m : m; };`,
      srgb_encode: `const wp_srgb_encode = (v) => { const a = Math.abs(v); const m = a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, ${f(1 / 2.4)}) - 0.055; return v < 0 ? -m : m; };`,
      a98_decode: `const wp_a98_decode = (v) => { const m = Math.pow(Math.abs(v), ${f(A98_GAMMA)}); return v < 0 ? -m : m; };`,
      a98_encode: `const wp_a98_encode = (v) => { const m = Math.pow(Math.abs(v), ${f(1 / A98_GAMMA)}); return v < 0 ? -m : m; };`,
      prophoto_decode: `const wp_prophoto_decode = (v) => { const a = Math.abs(v); const m = a <= ${f(16 * PROPHOTO_ET)} ? a / 16 : Math.pow(a, 1.8); return v < 0 ? -m : m; };`,
      prophoto_encode: `const wp_prophoto_encode = (v) => { const a = Math.abs(v); const m = a >= ${f(PROPHOTO_ET)} ? Math.pow(a, ${f(1 / 1.8)}) : 16 * a; return v < 0 ? -m : m; };`,
      rec2020_decode: `const wp_rec2020_decode = (v) => { const a = Math.abs(v); const m = a < ${f(REC2020_BETA * 4.5)} ? a / 4.5 : Math.pow((a + ${f(REC2020_ALPHA - 1)}) / ${f(REC2020_ALPHA)}, ${f(1 / 0.45)}); return v < 0 ? -m : m; };`,
      rec2020_encode: `const wp_rec2020_encode = (v) => { const a = Math.abs(v); const m = a < ${f(REC2020_BETA)} ? 4.5 * a : ${f(REC2020_ALPHA)} * Math.pow(a, 0.45) - ${f(REC2020_ALPHA - 1)}; return v < 0 ? -m : m; };`,
      labF: `const wp_labF = (t) => t > ${f(LAB_EPSILON)} ? Math.cbrt(t) : (t * ${f(LAB_KAPPA)} + 16) / 116;`,
      labFInv: `const wp_labFInv = (t) => t > ${f(LAB_CBRT_EPSILON)} ? t * t * t : (116 * t - 16) / ${f(LAB_KAPPA)};`,
      bt709_decode: `const wp_bt709_decode = (v) => { const a = Math.abs(v); const m = a < ${f(BT709_BETA * 4.5)} ? a / 4.5 : Math.pow((a + ${f(BT709_ALPHA - 1)}) / ${f(BT709_ALPHA)}, ${f(1 / 0.45)}); return v < 0 ? -m : m; };`,
      bt709_encode: `const wp_bt709_encode = (v) => { const a = Math.abs(v); const m = a < ${f(BT709_BETA)} ? 4.5 * a : ${f(BT709_ALPHA)} * Math.pow(a, 0.45) - ${f(BT709_ALPHA - 1)}; return v < 0 ? -m : m; };`,
      gamma26_decode: `const wp_gamma26_decode = (v) => { const m = Math.pow(Math.abs(v), 2.6); return v < 0 ? -m : m; };`,
      gamma26_encode: `const wp_gamma26_encode = (v) => { const m = Math.pow(Math.abs(v), ${f(1 / 2.6)}); return v < 0 ? -m : m; };`,
      acescc_decode: `const wp_acescc_decode = (v) => { if (v < ${f(ACESCC_LO)}) return (Math.pow(2, v * 17.52 - 9.72) - ${f(P2_N16)}) * 2; if (v < ${f(ACESCC_HI)}) return Math.pow(2, v * 17.52 - 9.72); return 65504; };`,
      acescc_encode: `const wp_acescc_encode = (v) => { if (v <= 0) return ${f(ACESCC_MIN)}; if (v < ${f(P2_N15)}) return (Math.log2(${f(P2_N16)} + v * 0.5) + 9.72) / 17.52; return (Math.log2(v) + 9.72) / 17.52; };`,
      acescct_decode: `const wp_acescct_decode = (v) => { if (v > ${f(ACESCCT_BREAK)}) return Math.pow(2, v * 17.52 - 9.72); return (v - ${f(ACESCCT_B)}) / ${f(ACESCCT_A)}; };`,
      acescct_encode: `const wp_acescct_encode = (v) => { if (v <= 0.0078125) return ${f(ACESCCT_A)} * v + ${f(ACESCCT_B)}; return (Math.log2(v) + 9.72) / 17.52; };`,
      pqabs_decode: `const wp_pqabs_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${f(1 / PQ_M2)}); const num = Math.max(e - ${f(PQ_C1)}, 0); return 10000 * Math.pow(num / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}); };`,
      pqabs_encode: `const wp_pqabs_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${f(PQ_M1)}); return Math.pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1 + ${f(PQ_C3)} * y), ${f(PQ_M2)}); };`,
      jzpq_decode: `const wp_jzpq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${f(1 / JZ_RHO)}); const num = Math.max(e - ${f(PQ_C1)}, 0); return 10000 * Math.pow(num / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}); };`,
      jzpq_encode: `const wp_jzpq_encode = (v) => { if (v <= 0) return 0; const y = Math.pow(v / 10000, ${f(PQ_M1)}); return Math.pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1 + ${f(PQ_C3)} * y), ${f(JZ_RHO)}); };`,
      rec2100pq_decode: `const wp_rec2100pq_decode = (v) => { if (v <= 0) return 0; const e = Math.pow(v, ${f(1 / PQ_M2)}); const num = Math.max(e - ${f(PQ_C1)}, 0); return 10000 * Math.pow(num / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}) / ${f(YW)}; };`,
      rec2100pq_encode: `const wp_rec2100pq_encode = (v) => { const n = v * ${f(YW)}; if (n <= 0) return 0; const y = Math.pow(n / 10000, ${f(PQ_M1)}); return Math.pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1 + ${f(PQ_C3)} * y), ${f(PQ_M2)}); };`,
      rec2100hlg_decode: `const wp_rec2100hlg_decode = (v) => { if (v <= 0) return 0; if (v <= 0.5) return ((v * v) / 3) * ${f(HLG_SCALE)}; return ((Math.exp((v - ${f(HLG_C)}) / ${f(HLG_A)}) + ${f(HLG_B)}) / 12) * ${f(HLG_SCALE)}; };`,
      rec2100hlg_encode: `const wp_rec2100hlg_encode = (v) => { if (v <= 0) return 0; const x = v / ${f(HLG_SCALE)}; if (x <= ${f(1 / 12)}) return Math.sqrt(3 * x); return ${f(HLG_A)} * Math.log(12 * x - ${f(HLG_B)}) + ${f(HLG_C)}; };`,
    };
  }
  if (lang === 'glsl') {
    return {
      srgb_decode: `float wp_srgb_decode(float v) { float a = abs(v); float m = a <= 0.04045 ? a / 12.92 : pow((a + 0.055) / 1.055, 2.4); return v < 0.0 ? -m : m; }`,
      srgb_encode: `float wp_srgb_encode(float v) { float a = abs(v); float m = a <= 0.0031308 ? 12.92 * a : 1.055 * pow(a, ${f(1 / 2.4)}) - 0.055; return v < 0.0 ? -m : m; }`,
      a98_decode: `float wp_a98_decode(float v) { float m = pow(abs(v), ${f(A98_GAMMA)}); return v < 0.0 ? -m : m; }`,
      a98_encode: `float wp_a98_encode(float v) { float m = pow(abs(v), ${f(1 / A98_GAMMA)}); return v < 0.0 ? -m : m; }`,
      prophoto_decode: `float wp_prophoto_decode(float v) { float a = abs(v); float m = a <= ${f(16 * PROPHOTO_ET)} ? a / 16.0 : pow(a, 1.8); return v < 0.0 ? -m : m; }`,
      prophoto_encode: `float wp_prophoto_encode(float v) { float a = abs(v); float m = a >= ${f(PROPHOTO_ET)} ? pow(a, ${f(1 / 1.8)}) : 16.0 * a; return v < 0.0 ? -m : m; }`,
      rec2020_decode: `float wp_rec2020_decode(float v) { float a = abs(v); float m = a < ${f(REC2020_BETA * 4.5)} ? a / 4.5 : pow((a + ${f(REC2020_ALPHA - 1)}) / ${f(REC2020_ALPHA)}, ${f(1 / 0.45)}); return v < 0.0 ? -m : m; }`,
      rec2020_encode: `float wp_rec2020_encode(float v) { float a = abs(v); float m = a < ${f(REC2020_BETA)} ? 4.5 * a : ${f(REC2020_ALPHA)} * pow(a, 0.45) - ${f(REC2020_ALPHA - 1)}; return v < 0.0 ? -m : m; }`,
      labF: `float wp_labF(float t) { return t > ${f(LAB_EPSILON)} ? pow(t, ${THIRD}) : (t * ${f(LAB_KAPPA)} + 16.0) / 116.0; }`,
      labFInv: `float wp_labFInv(float t) { return t > ${f(LAB_CBRT_EPSILON)} ? t * t * t : (116.0 * t - 16.0) / ${f(LAB_KAPPA)}; }`,
      cbrt: `float wp_cbrt(float v) { return sign(v) * pow(abs(v), ${THIRD}); }`,
      bt709_decode: `float wp_bt709_decode(float v) { float a = abs(v); float m = a < ${f(BT709_BETA * 4.5)} ? a / 4.5 : pow((a + ${f(BT709_ALPHA - 1)}) / ${f(BT709_ALPHA)}, ${f(1 / 0.45)}); return v < 0.0 ? -m : m; }`,
      bt709_encode: `float wp_bt709_encode(float v) { float a = abs(v); float m = a < ${f(BT709_BETA)} ? 4.5 * a : ${f(BT709_ALPHA)} * pow(a, 0.45) - ${f(BT709_ALPHA - 1)}; return v < 0.0 ? -m : m; }`,
      gamma26_decode: `float wp_gamma26_decode(float v) { float m = pow(abs(v), 2.6); return v < 0.0 ? -m : m; }`,
      gamma26_encode: `float wp_gamma26_encode(float v) { float m = pow(abs(v), ${f(1 / 2.6)}); return v < 0.0 ? -m : m; }`,
      acescc_decode: `float wp_acescc_decode(float v) { if (v < ${f(ACESCC_LO)}) { return (exp2(v * 17.52 - 9.72) - ${f(P2_N16)}) * 2.0; } if (v < ${f(ACESCC_HI)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,
      acescc_encode: `float wp_acescc_encode(float v) { if (v <= 0.0) { return ${f(ACESCC_MIN)}; } if (v < ${f(P2_N15)}) { return (log2(${f(P2_N16)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,
      acescct_decode: `float wp_acescct_decode(float v) { if (v > ${f(ACESCCT_BREAK)}) { return exp2(v * 17.52 - 9.72); } return (v - ${f(ACESCCT_B)}) / ${f(ACESCCT_A)}; }`,
      acescct_encode: `float wp_acescct_encode(float v) { if (v <= 0.0078125) { return ${f(ACESCCT_A)} * v + ${f(ACESCCT_B)}; } return (log2(v) + 9.72) / 17.52; }`,
      pqabs_decode: `float wp_pqabs_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${f(1 / PQ_M2)}); return 10000.0 * pow(max(e - ${f(PQ_C1)}, 0.0) / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}); }`,
      pqabs_encode: `float wp_pqabs_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${f(PQ_M1)}); return pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1.0 + ${f(PQ_C3)} * y), ${f(PQ_M2)}); }`,
      jzpq_decode: `float wp_jzpq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${f(1 / JZ_RHO)}); return 10000.0 * pow(max(e - ${f(PQ_C1)}, 0.0) / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}); }`,
      jzpq_encode: `float wp_jzpq_encode(float v) { if (v <= 0.0) { return 0.0; } float y = pow(v / 10000.0, ${f(PQ_M1)}); return pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1.0 + ${f(PQ_C3)} * y), ${f(JZ_RHO)}); }`,
      rec2100pq_decode: `float wp_rec2100pq_decode(float v) { if (v <= 0.0) { return 0.0; } float e = pow(v, ${f(1 / PQ_M2)}); return 10000.0 * pow(max(e - ${f(PQ_C1)}, 0.0) / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}) / ${f(YW)}; }`,
      rec2100pq_encode: `float wp_rec2100pq_encode(float v) { float n = v * ${f(YW)}; if (n <= 0.0) { return 0.0; } float y = pow(n / 10000.0, ${f(PQ_M1)}); return pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1.0 + ${f(PQ_C3)} * y), ${f(PQ_M2)}); }`,
      rec2100hlg_decode: `float wp_rec2100hlg_decode(float v) { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${f(HLG_SCALE)}; } return ((exp((v - ${f(HLG_C)}) / ${f(HLG_A)}) + ${f(HLG_B)}) / 12.0) * ${f(HLG_SCALE)}; }`,
      rec2100hlg_encode: `float wp_rec2100hlg_encode(float v) { if (v <= 0.0) { return 0.0; } float x = v / ${f(HLG_SCALE)}; if (x <= ${f(1 / 12)}) { return sqrt(3.0 * x); } return ${f(HLG_A)} * log(12.0 * x - ${f(HLG_B)}) + ${f(HLG_C)}; }`,
    };
  }
  return {
    srgb_decode: `fn wp_srgb_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + 0.055) / 1.055, 2.4), a / 12.92, a <= 0.04045); return select(m, -m, v < 0.0); }`,
    srgb_encode: `fn wp_srgb_encode(v: f32) -> f32 { let a = abs(v); let m = select(1.055 * pow(a, ${f(1 / 2.4)}) - 0.055, 12.92 * a, a <= 0.0031308); return select(m, -m, v < 0.0); }`,
    a98_decode: `fn wp_a98_decode(v: f32) -> f32 { let m = pow(abs(v), ${f(A98_GAMMA)}); return select(m, -m, v < 0.0); }`,
    a98_encode: `fn wp_a98_encode(v: f32) -> f32 { let m = pow(abs(v), ${f(1 / A98_GAMMA)}); return select(m, -m, v < 0.0); }`,
    prophoto_decode: `fn wp_prophoto_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow(a, 1.8), a / 16.0, a <= ${f(16 * PROPHOTO_ET)}); return select(m, -m, v < 0.0); }`,
    prophoto_encode: `fn wp_prophoto_encode(v: f32) -> f32 { let a = abs(v); let m = select(16.0 * a, pow(a, ${f(1 / 1.8)}), a >= ${f(PROPHOTO_ET)}); return select(m, -m, v < 0.0); }`,
    rec2020_decode: `fn wp_rec2020_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${f(REC2020_ALPHA - 1)}) / ${f(REC2020_ALPHA)}, ${f(1 / 0.45)}), a / 4.5, a < ${f(REC2020_BETA * 4.5)}); return select(m, -m, v < 0.0); }`,
    rec2020_encode: `fn wp_rec2020_encode(v: f32) -> f32 { let a = abs(v); let m = select(${f(REC2020_ALPHA)} * pow(a, 0.45) - ${f(REC2020_ALPHA - 1)}, 4.5 * a, a < ${f(REC2020_BETA)}); return select(m, -m, v < 0.0); }`,
    labF: `fn wp_labF(t: f32) -> f32 { return select((t * ${f(LAB_KAPPA)} + 16.0) / 116.0, pow(t, ${THIRD}), t > ${f(LAB_EPSILON)}); }`,
    labFInv: `fn wp_labFInv(t: f32) -> f32 { return select((116.0 * t - 16.0) / ${f(LAB_KAPPA)}, t * t * t, t > ${f(LAB_CBRT_EPSILON)}); }`,
    cbrt: `fn wp_cbrt(v: f32) -> f32 { return sign(v) * pow(abs(v), ${THIRD}); }`,
    bt709_decode: `fn wp_bt709_decode(v: f32) -> f32 { let a = abs(v); let m = select(pow((a + ${f(BT709_ALPHA - 1)}) / ${f(BT709_ALPHA)}, ${f(1 / 0.45)}), a / 4.5, a < ${f(BT709_BETA * 4.5)}); return select(m, -m, v < 0.0); }`,
    bt709_encode: `fn wp_bt709_encode(v: f32) -> f32 { let a = abs(v); let m = select(${f(BT709_ALPHA)} * pow(a, 0.45) - ${f(BT709_ALPHA - 1)}, 4.5 * a, a < ${f(BT709_BETA)}); return select(m, -m, v < 0.0); }`,
    gamma26_decode: `fn wp_gamma26_decode(v: f32) -> f32 { let m = pow(abs(v), 2.6); return select(m, -m, v < 0.0); }`,
    gamma26_encode: `fn wp_gamma26_encode(v: f32) -> f32 { let m = pow(abs(v), ${f(1 / 2.6)}); return select(m, -m, v < 0.0); }`,
    acescc_decode: `fn wp_acescc_decode(v: f32) -> f32 { if (v < ${f(ACESCC_LO)}) { return (exp2(v * 17.52 - 9.72) - ${f(P2_N16)}) * 2.0; } if (v < ${f(ACESCC_HI)}) { return exp2(v * 17.52 - 9.72); } return 65504.0; }`,
    acescc_encode: `fn wp_acescc_encode(v: f32) -> f32 { if (v <= 0.0) { return ${f(ACESCC_MIN)}; } if (v < ${f(P2_N15)}) { return (log2(${f(P2_N16)} + v * 0.5) + 9.72) / 17.52; } return (log2(v) + 9.72) / 17.52; }`,
    acescct_decode: `fn wp_acescct_decode(v: f32) -> f32 { if (v > ${f(ACESCCT_BREAK)}) { return exp2(v * 17.52 - 9.72); } return (v - ${f(ACESCCT_B)}) / ${f(ACESCCT_A)}; }`,
    acescct_encode: `fn wp_acescct_encode(v: f32) -> f32 { if (v <= 0.0078125) { return ${f(ACESCCT_A)} * v + ${f(ACESCCT_B)}; } return (log2(v) + 9.72) / 17.52; }`,
    pqabs_decode: `fn wp_pqabs_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${f(1 / PQ_M2)}); return 10000.0 * pow(max(e - ${f(PQ_C1)}, 0.0) / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}); }`,
    pqabs_encode: `fn wp_pqabs_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${f(PQ_M1)}); return pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1.0 + ${f(PQ_C3)} * y), ${f(PQ_M2)}); }`,
    jzpq_decode: `fn wp_jzpq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${f(1 / JZ_RHO)}); return 10000.0 * pow(max(e - ${f(PQ_C1)}, 0.0) / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}); }`,
    jzpq_encode: `fn wp_jzpq_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let y = pow(v / 10000.0, ${f(PQ_M1)}); return pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1.0 + ${f(PQ_C3)} * y), ${f(JZ_RHO)}); }`,
    rec2100pq_decode: `fn wp_rec2100pq_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let e = pow(v, ${f(1 / PQ_M2)}); return 10000.0 * pow(max(e - ${f(PQ_C1)}, 0.0) / (${f(PQ_C2)} - ${f(PQ_C3)} * e), ${f(1 / PQ_M1)}) / ${f(YW)}; }`,
    rec2100pq_encode: `fn wp_rec2100pq_encode(v: f32) -> f32 { let n = v * ${f(YW)}; if (n <= 0.0) { return 0.0; } let y = pow(n / 10000.0, ${f(PQ_M1)}); return pow((${f(PQ_C1)} + ${f(PQ_C2)} * y) / (1.0 + ${f(PQ_C3)} * y), ${f(PQ_M2)}); }`,
    rec2100hlg_decode: `fn wp_rec2100hlg_decode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } if (v <= 0.5) { return ((v * v) / 3.0) * ${f(HLG_SCALE)}; } return ((exp((v - ${f(HLG_C)}) / ${f(HLG_A)}) + ${f(HLG_B)}) / 12.0) * ${f(HLG_SCALE)}; }`,
    rec2100hlg_encode: `fn wp_rec2100hlg_encode(v: f32) -> f32 { if (v <= 0.0) { return 0.0; } let x = v / ${f(HLG_SCALE)}; if (x <= ${f(1 / 12)}) { return sqrt(3.0 * x); } return ${f(HLG_A)} * log(12.0 * x - ${f(HLG_B)}) + ${f(HLG_C)}; }`,
  };
}

export const HELPERS = {
  js: buildHelpers('js'),
  glsl: buildHelpers('glsl'),
  wgsl: buildHelpers('wgsl'),
};

export { fmt };

// ---- per-op statement renderers ----

function mat3Stmt(m, b, lang, f) {
  const off = (i) => (b ? ` + ${f(b[i])}` : '');
  const row = (i) => `${f(m[i * 3])} * v.x + ${f(m[i * 3 + 1])} * v.y + ${f(m[i * 3 + 2])} * v.z${off(i)}`;
  if (lang === 'glsl') return `  v = vec3(${row(0)}, ${row(1)}, ${row(2)});`;
  return `  v = vec3<f32>(${row(0)}, ${row(1)}, ${row(2)});`;
}

function jsMat3Stmt(m, b) {
  const off = (i) => (b ? ` + ${b[i]}` : '');
  return `  { const r0 = ${m[0]} * v0 + ${m[1]} * v1 + ${m[2]} * v2${off(0)};\n` +
         `    const r1 = ${m[3]} * v0 + ${m[4]} * v1 + ${m[5]} * v2${off(1)};\n` +
         `    const r2 = ${m[6]} * v0 + ${m[7]} * v1 + ${m[8]} * v2${off(2)};\n` +
         `    v0 = r0; v1 = r1; v2 = r2; }`;
}

function renderOp(op, lang, helpers) {
  const f = (n) => fmt(n, lang);
  if (lang === 'js') {
    switch (op.k) {
      case 'mat3': return jsMat3Stmt(op.m);
      case 'affine': return jsMat3Stmt(op.m, op.b);
      case 'transfer': {
        const h = `${op.name}_${op.dir}`;
        helpers.add(h);
        return `  v0 = wp_${h}(v0); v1 = wp_${h}(v1); v2 = wp_${h}(v2);`;
      }
      case 'cbrt3': return `  v0 = Math.cbrt(v0); v1 = Math.cbrt(v1); v2 = Math.cbrt(v2);`;
      case 'cube3': return `  v0 = v0 * v0 * v0; v1 = v1 * v1 * v1; v2 = v2 * v2 * v2;`;
      case 'labF3': helpers.add('labF'); return `  v0 = wp_labF(v0); v1 = wp_labF(v1); v2 = wp_labF(v2);`;
      case 'labFInv3': helpers.add('labFInv'); return `  v0 = wp_labFInv(v0); v1 = wp_labFInv(v1); v2 = wp_labFInv(v2);`;
      case 'divW': return `  v0 /= ${op.w[0]}; v1 /= ${op.w[1]}; v2 /= ${op.w[2]};`;
      case 'mulW': return `  v0 *= ${op.w[0]}; v1 *= ${op.w[1]}; v2 *= ${op.w[2]};`;
      case 'clamp0': return `  v0 = Math.max(v0, 0); v1 = Math.max(v1, 0); v2 = Math.max(v2, 0);`;
      case 'jzFwd': return `  v0 = (${1 + JZ_D} * v0) / (1 + ${JZ_D} * v0) - ${JZ_D0};`;
      case 'jzInv': return `  { const t = v0 + ${JZ_D0}; v0 = t / (${1 + JZ_D} - ${JZ_D} * t); }`;
      case 'polarToRect': return `  { const h = v2 * ${DEG2RAD}; const c = v1; v1 = c * Math.cos(h); v2 = c * Math.sin(h); }`;
      case 'rectToPolar': return `  { const c = Math.sqrt(v1 * v1 + v2 * v2); let h = Math.atan2(v2, v1) * ${RAD2DEG}; if (h < 0) h += 360; v1 = c; v2 = h; }`;
      default: throw new Error(`codegen: unknown op "${op.k}"`);
    }
  }
  const vec = lang === 'glsl' ? 'vec3' : 'vec3<f32>';
  switch (op.k) {
    case 'mat3': return mat3Stmt(op.m, null, lang, f);
    case 'affine': return mat3Stmt(op.m, op.b, lang, f);
    case 'transfer': {
      const h = `${op.name}_${op.dir}`;
      helpers.add(h);
      return `  v = ${vec}(wp_${h}(v.x), wp_${h}(v.y), wp_${h}(v.z));`;
    }
    case 'cbrt3': helpers.add('cbrt'); return `  v = ${vec}(wp_cbrt(v.x), wp_cbrt(v.y), wp_cbrt(v.z));`;
    case 'cube3': return `  v = v * v * v;`;
    case 'labF3': helpers.add('labF'); return `  v = ${vec}(wp_labF(v.x), wp_labF(v.y), wp_labF(v.z));`;
    case 'labFInv3': helpers.add('labFInv'); return `  v = ${vec}(wp_labFInv(v.x), wp_labFInv(v.y), wp_labFInv(v.z));`;
    case 'divW': return `  v = v / ${vec}(${f(op.w[0])}, ${f(op.w[1])}, ${f(op.w[2])});`;
    case 'mulW': return `  v = v * ${vec}(${f(op.w[0])}, ${f(op.w[1])}, ${f(op.w[2])});`;
    case 'clamp0': return `  v = max(v, ${vec}(0.0));`;
    case 'jzFwd': return `  v.x = (${f(1 + JZ_D)} * v.x) / (1.0 + ${f(JZ_D)} * v.x) - ${f(JZ_D0)};`;
    case 'jzInv':
      return lang === 'glsl'
        ? `  { float t = v.x + ${f(JZ_D0)}; v.x = t / (${f(1 + JZ_D)} - ${f(JZ_D)} * t); }`
        : `  { let t = v.x + ${f(JZ_D0)}; v.x = t / (${f(1 + JZ_D)} - ${f(JZ_D)} * t); }`;
    case 'polarToRect':
      return lang === 'glsl'
        ? `  { float h = v.z * ${DEG2RAD}; v = vec3(v.x, v.y * cos(h), v.y * sin(h)); }`
        : `  { let h = v.z * ${DEG2RAD}; v = vec3<f32>(v.x, v.y * cos(h), v.y * sin(h)); }`;
    case 'rectToPolar':
      return lang === 'glsl'
        ? `  { float c = length(v.yz); float h = degrees(atan(v.z, v.y)); if (h < 0.0) h += 360.0; v = vec3(v.x, c, h); }`
        : `  { let c = length(v.yz); var h = degrees(atan2(v.z, v.y)); if (h < 0.0) { h = h + 360.0; } v = vec3<f32>(v.x, c, h); }`;
    default: throw new Error(`codegen: unknown op "${op.k}"`);
  }
}

/**
 * Render a fused op chain as a self-contained function in the target language.
 * Returns the complete source (helpers + function).
 */
export function emitFunction(ops, name, lang) {
  const helpers = new Set();
  const body = ops.map((op) => renderOp(op, lang, helpers)).join('\n');
  const helperSrc = [...helpers].map((h) => {
    const src = HELPERS[lang][h];
    if (!src) throw new Error(`codegen: no ${lang} helper "${h}"`);
    return src;
  }).join('\n');

  if (lang === 'js') {
    return `${helperSrc}${helperSrc ? '\n' : ''}function ${name}(c, out = [0, 0, 0]) {\n` +
           `  let v0 = c[0], v1 = c[1], v2 = c[2];\n${body ? body + '\n' : ''}` +
           `  out[0] = v0; out[1] = v1; out[2] = v2;\n  return out;\n}`;
  }
  if (lang === 'glsl') {
    return `${helperSrc}${helperSrc ? '\n' : ''}vec3 ${name}(vec3 c) {\n  vec3 v = c;\n${body ? body + '\n' : ''}  return v;\n}`;
  }
  return `${helperSrc}${helperSrc ? '\n' : ''}fn ${name}(c: vec3<f32>) -> vec3<f32> {\n  var v = c;\n${body ? body + '\n' : ''}  return v;\n}`;
}
