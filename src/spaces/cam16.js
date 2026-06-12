// CAM16 color appearance model (Li et al. 2017; CIE 248:2022), CAM16-UCS,
// and HCT (Google Material: CAM16 hue/chroma + CIE L* tone).
//
// The formulation follows the HCT reference implementation
// (@material/material-color-utilities), which is the normative definition of
// HCT and a faithful CAM16: it omits the classical +0.1 adaptation offset and
// the −0.305 achromatic offset, re-adding 0.305 where it matters (the t
// denominator and the inverse's gamma) — algebraically equivalent for the
// correlates. Differentially verified against that implementation in CI.
//
// Registry spaces use default viewing conditions (D65 white, La ≈ 11.73
// cd/m², 50 L* background, average surround, no discounting — Material's
// defaults, so 'hct' matches Material HCT). For arbitrary conditions use
// cam16ViewingConditions() with the function forms.

import { cats } from '../constants/cats.js';
import { mulVec, invert } from '../core/mat3.js';
import { CSS_D65_XYZ } from '../constants/whitepoints.js';
import { DEG2RAD, RAD2DEG } from '../core/polar.js';

const M16 = cats.cat16;
const M16_INV = invert(M16);

const EPSILON = 216 / 24389;
const KAPPA = 24389 / 27;

function yFromLstar(l) {
  const fy = (l + 16) / 116;
  return 100 * (fy > 6 / 29 ? fy * fy * fy : (116 * fy - 16) / KAPPA);
}
function lstarFromY(y) {
  const yr = y / 100;
  return yr > EPSILON ? 116 * Math.cbrt(yr) - 16 : KAPPA * yr;
}

const SURROUNDS = {
  average: [1.0, 0.69, 1.0],
  dim: [0.9, 0.59, 0.9],
  dark: [0.8, 0.525, 0.8],
};

/**
 * Precompute CAM16 viewing conditions.
 * @param {{white?: number[], adaptingLuminance?: number, backgroundLstar?: number,
 *          surround?: 'average'|'dim'|'dark', discounting?: boolean}} [opts]
 *   white is XYZ scaled to Y=100.
 */
export function cam16ViewingConditions(opts = {}) {
  const white = opts.white ?? [CSS_D65_XYZ[0] * 100, 100, CSS_D65_XYZ[2] * 100];
  const La = opts.adaptingLuminance ?? (200 / Math.PI) * (yFromLstar(50) / 100);
  const bgLstar = opts.backgroundLstar ?? 50;
  const surround = SURROUNDS[opts.surround ?? 'average'];
  if (!surround) throw new Error(`whitepoint: unknown surround "${opts.surround}" (have: average, dim, dark)`);
  const [F, c, Nc] = surround;

  const rW = mulVec(M16, white, [0, 0, 0]);
  let D = opts.discounting ? 1 : F * (1 - (1 / 3.6) * Math.exp((-La - 42) / 92));
  D = D > 1 ? 1 : D < 0 ? 0 : D;

  const k = 1 / (5 * La + 1);
  const k4 = k * k * k * k;
  const fl = k4 * La + 0.1 * (1 - k4) * (1 - k4) * Math.cbrt(5 * La);

  const n = yFromLstar(bgLstar) / white[1];
  const z = 1.48 + Math.sqrt(n);
  const nbb = 0.725 / Math.pow(n, 0.2);

  const rgbD = [
    D * (100 / rW[0]) + 1 - D,
    D * (100 / rW[1]) + 1 - D,
    D * (100 / rW[2]) + 1 - D,
  ];

  const aw = (() => {
    let a = 0;
    const w = [2, 1, 0.05];
    const acc = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      const f = Math.pow((fl * rgbD[i] * rW[i]) / 100, 0.42);
      acc[i] = (400 * f) / (f + 27.13);
      a += w[i] * acc[i];
    }
    return a * nbb;
  })();

  return { fl, fl25: Math.pow(fl, 0.25), n, z, c, nc: Nc, nbb, ncb: nbb, aw, rgbD, cz: c * z };
}

/** The registry default viewing conditions — cam16ViewingConditions() with no overrides. */
export const CAM16_DEFAULT_VC = cam16ViewingConditions();

const RGB = [0, 0, 0];

/** XYZ (Y scale 0–100) → CAM16 [J, C, h] under viewing conditions vc. */
export function xyzToCam16(xyz100, vc = CAM16_DEFAULT_VC, out = [0, 0, 0]) {
  mulVec(M16, xyz100, RGB);
  for (let i = 0; i < 3; i++) {
    const d = vc.rgbD[i] * RGB[i];
    const f = Math.pow((vc.fl * Math.abs(d)) / 100, 0.42);
    RGB[i] = (Math.sign(d) * 400 * f) / (f + 27.13);
  }
  const rA = RGB[0], gA = RGB[1], bA = RGB[2];
  const a = (11 * rA - 12 * gA + bA) / 11;
  const b = (rA + gA - 2 * bA) / 9;
  let h = Math.atan2(b, a) * RAD2DEG;
  if (h < 0) h += 360;
  const u = (20 * rA + 20 * gA + 21 * bA) / 20;
  const ac = ((40 * rA + 20 * gA + bA) / 20) * vc.nbb;
  const J = 100 * Math.pow(ac / vc.aw, vc.cz);
  const eHue = 0.25 * (Math.cos(h * DEG2RAD + 2) + 3.8);
  const p1 = ((50000 / 13) * eHue * vc.nc * vc.ncb);
  const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305);
  const alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, vc.n), 0.73);
  out[0] = J;
  out[1] = alpha * Math.sqrt(J / 100);
  out[2] = h;
  return out;
}

/** CAM16 [J, C, h] → XYZ (Y scale 0–100). */
export function cam16ToXyz(jch, vc = CAM16_DEFAULT_VC, out = [0, 0, 0]) {
  const J = jch[0], C = jch[1], h = jch[2];
  if (J <= 0) {
    out[0] = 0; out[1] = 0; out[2] = 0;
    return out;
  }
  const alpha = C === 0 ? 0 : C / Math.sqrt(J / 100);
  const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, vc.n), 0.73), 1 / 0.9);
  const hRad = h * DEG2RAD;
  const eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
  const ac = vc.aw * Math.pow(J / 100, 1 / vc.cz);
  const p1 = (50000 / 13) * eHue * vc.nc * vc.ncb;
  const p2 = ac / vc.nbb;
  const gamma = (23 * (p2 + 0.305) * t) / (23 * p1 + 11 * t * Math.cos(hRad) + 108 * t * Math.sin(hRad));
  const a = gamma * Math.cos(hRad);
  const b = gamma * Math.sin(hRad);
  RGB[0] = (460 * p2 + 451 * a + 288 * b) / 1403;
  RGB[1] = (460 * p2 - 891 * a - 261 * b) / 1403;
  RGB[2] = (460 * p2 - 220 * a - 6300 * b) / 1403;
  for (let i = 0; i < 3; i++) {
    const ab = Math.abs(RGB[i]);
    const base = Math.max(0, (27.13 * ab) / (400 - ab));
    RGB[i] = (Math.sign(RGB[i]) * (100 / vc.fl) * Math.pow(base, 1 / 0.42)) / vc.rgbD[i];
  }
  return mulVec(M16_INV, RGB, out);
}

// ---- registry spaces (default viewing conditions) ----

const X100 = [0, 0, 0];
const JCH = [0, 0, 0];

export const CAM16JCh = {
  id: 'cam16',
  fromXyz(xyz, out = [0, 0, 0]) {
    X100[0] = xyz[0] * 100; X100[1] = xyz[1] * 100; X100[2] = xyz[2] * 100;
    return xyzToCam16(X100, CAM16_DEFAULT_VC, out);
  },
  toXyz(jch, out = [0, 0, 0]) {
    cam16ToXyz(jch, CAM16_DEFAULT_VC, out);
    out[0] /= 100; out[1] /= 100; out[2] /= 100;
    return out;
  },
};

// CAM16-UCS (Li et al. 2017): J' from J, M' = ln(1 + 0.0228·M)/0.0228.
export const CAM16UCS = {
  id: 'cam16-ucs',
  fromXyz(xyz, out = [0, 0, 0]) {
    CAM16JCh.fromXyz(xyz, JCH);
    const M = JCH[1] * CAM16_DEFAULT_VC.fl25;
    const Mp = Math.log(1 + 0.0228 * M) / 0.0228;
    const hRad = JCH[2] * DEG2RAD;
    out[0] = (1.7 * JCH[0]) / (1 + 0.007 * JCH[0]);
    out[1] = Mp * Math.cos(hRad);
    out[2] = Mp * Math.sin(hRad);
    return out;
  },
  toXyz(ucs, out = [0, 0, 0]) {
    const Jp = ucs[0];
    const Mp = Math.sqrt(ucs[1] * ucs[1] + ucs[2] * ucs[2]);
    const M = (Math.exp(0.0228 * Mp) - 1) / 0.0228;
    JCH[0] = Jp / (1.7 - 0.007 * Jp);
    JCH[1] = M / CAM16_DEFAULT_VC.fl25;
    let h = Math.atan2(ucs[2], ucs[1]) * RAD2DEG;
    if (h < 0) h += 360;
    JCH[2] = h;
    return CAM16JCh.toXyz(JCH, out);
  },
};

// HCT: [hue (CAM16 h), chroma (CAM16 C), tone (CIE L*)]. The inverse solves
// for the J whose CAM16 inverse lands on the requested tone's Y — Y is
// monotone in J at fixed (C, h), so bracketed bisection is exact and safe.
export const HCT = {
  id: 'hct',
  fromXyz(xyz, out = [0, 0, 0]) {
    X100[0] = xyz[0] * 100; X100[1] = xyz[1] * 100; X100[2] = xyz[2] * 100;
    xyzToCam16(X100, CAM16_DEFAULT_VC, JCH);
    out[0] = JCH[2];
    out[1] = JCH[1];
    out[2] = lstarFromY(X100[1]);
    return out;
  },
  toXyz(hct, out = [0, 0, 0]) {
    const t = hct[2];
    if (t <= 0) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
    const targetY = yFromLstar(Math.min(t, 100));
    JCH[1] = hct[1]; JCH[2] = hct[0];
    let lo = 0, hi = 400;
    for (let i = 0; i < 48; i++) {
      JCH[0] = 0.5 * (lo + hi);
      cam16ToXyz(JCH, CAM16_DEFAULT_VC, X100);
      if (X100[1] < targetY) lo = JCH[0]; else hi = JCH[0];
    }
    out[0] = X100[0] / 100; out[1] = X100[1] / 100; out[2] = X100[2] / 100;
    return out;
  },
};
