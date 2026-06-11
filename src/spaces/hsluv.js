// HSLuv and HPLuv (Alexei Boronine, hsluv.org) — human-friendly HSL built on
// CIE Luv/LCHuv with a D65 reference. S and L are 0–100 per the reference.
//
// The gamut machinery is the reference's exact line algebra: at lightness L,
// the sRGB boundary in the (u, v) chroma plane is six straight lines (each
// RGB channel at 0 or 1); HSLuv's max chroma is the nearest intersection
// along the hue ray, HPLuv's is the nearest line (hue-independent — the
// largest "safe" pastel radius). The integer coefficients are the reference
// implementation's exact rationals; the sRGB matrix rows are OUR derived
// ones (the reference derives the same values).

import { CSS_D65_XYZ } from '../constants/whitepoints.js';
import { sRGB } from './rgb.js';
import { DEG2RAD, RAD2DEG } from '../core/polar.js';

const EPSILON = 216 / 24389;
const KAPPA = 24389 / 27;

const WX = CSS_D65_XYZ[0], WY = CSS_D65_XYZ[1], WZ = CSS_D65_XYZ[2];
const UN = (4 * WX) / (WX + 15 * WY + 3 * WZ);
const VN = (9 * WY) / (WX + 15 * WY + 3 * WZ);

const M = sRGB.m.fromXyz; // XYZ → linear sRGB rows, derived

// six [slope, intercept] pairs, written into a scratch
const LINES = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];

function getBounds(L) {
  const sub1 = Math.pow(L + 16, 3) / 1560896; // 116³
  const sub2 = sub1 > EPSILON ? sub1 : L / KAPPA;
  for (let ch = 0; ch < 3; ch++) {
    const m1 = M[ch * 3], m2 = M[ch * 3 + 1], m3 = M[ch * 3 + 2];
    for (let t = 0; t < 2; t++) {
      const top1 = (284517 * m1 - 94839 * m3) * sub2;
      const top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t * L;
      const bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t;
      const line = LINES[ch * 2 + t];
      line[0] = top1 / bottom;
      line[1] = top2 / bottom;
    }
  }
  return LINES;
}

function maxChromaForLH(L, hDeg) {
  const hRad = hDeg * DEG2RAD;
  const sinH = Math.sin(hRad), cosH = Math.cos(hRad);
  const lines = getBounds(L);
  let min = Infinity;
  for (let i = 0; i < 6; i++) {
    const d = lines[i][1] / (sinH - lines[i][0] * cosH);
    if (d >= 0 && d < min) min = d;
  }
  return min;
}

function maxSafeChroma(L) {
  const lines = getBounds(L);
  let min = Infinity;
  for (let i = 0; i < 6; i++) {
    const d = Math.abs(lines[i][1]) / Math.sqrt(lines[i][0] * lines[i][0] + 1);
    if (d < min) min = d;
  }
  return min;
}

// D65-referenced Luv/LCH (the hsluv convention; our 'luv' space is D50)
function xyzToLchD65(xyz, out) {
  const den = xyz[0] + 15 * xyz[1] + 3 * xyz[2];
  const up = den === 0 ? UN : (4 * xyz[0]) / den;
  const vp = den === 0 ? VN : (9 * xyz[1]) / den;
  const yr = xyz[1] / WY;
  const L = yr > EPSILON ? 116 * Math.cbrt(yr) - 16 : KAPPA * yr;
  const u = 13 * L * (up - UN);
  const v = 13 * L * (vp - VN);
  out[0] = L;
  out[1] = Math.sqrt(u * u + v * v);
  let h = Math.atan2(v, u) * RAD2DEG;
  if (h < 0) h += 360;
  out[2] = out[1] < 1e-12 ? 0 : h;
  return out;
}

function lchD65ToXyz(lch, out) {
  const L = lch[0];
  if (L <= 1e-8) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
  const hRad = lch[2] * DEG2RAD;
  const u = lch[1] * Math.cos(hRad);
  const v = lch[1] * Math.sin(hRad);
  const up = u / (13 * L) + UN;
  const vp = v / (13 * L) + VN;
  const Y = WY * (L > 8 ? Math.pow((L + 16) / 116, 3) : L / KAPPA);
  out[0] = (Y * 9 * up) / (4 * vp);
  out[1] = Y;
  out[2] = (Y * (12 - 3 * up - 20 * vp)) / (4 * vp);
  return out;
}

const LCH = [0, 0, 0];

function makeHsluvSpace(id, maxChroma) {
  return {
    id,
    // [H, S, L] with S, L in 0–100
    toXyz(hsl, out = [0, 0, 0]) {
      const h = ((hsl[0] % 360) + 360) % 360;
      const l = hsl[2];
      if (l > 99.9999999) { LCH[0] = 100; LCH[1] = 0; }
      else if (l < 1e-8) { LCH[0] = 0; LCH[1] = 0; }
      else {
        LCH[0] = l;
        LCH[1] = (maxChroma(l, h) / 100) * hsl[1];
      }
      LCH[2] = h;
      return lchD65ToXyz(LCH, out);
    },
    fromXyz(xyz, out = [0, 0, 0]) {
      xyzToLchD65(xyz, LCH);
      const L = LCH[0];
      let s;
      if (L > 99.9999999 || L < 1e-8) s = 0;
      else s = (LCH[1] / maxChroma(L, LCH[2])) * 100;
      out[0] = LCH[2];
      out[1] = s;
      out[2] = L;
      return out;
    },
  };
}

export const HSLuv = makeHsluvSpace('hsluv', maxChromaForLH);
export const HPLuv = makeHsluvSpace('hpluv', (l) => maxSafeChroma(l));
