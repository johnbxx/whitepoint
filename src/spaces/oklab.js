// OKLab / OKLCH against the XYZ-D65 hub.
//
// Ottosson defines OKLab via linear sRGB. We precompose his M1 with our
// derived sRGB↔XYZ matrices at module load:
//   XYZ_TO_LMS = M1 · (XYZ → linear sRGB)
// so the per-call cost is one 3×3 multiply, three cbrts, and one 3×3 multiply.
// All inverses are computed, not transcribed (see constants/oklab.js).

import { OKLAB_M1, OKLAB_M2 } from '../constants/oklab.js';
import { mul, invert } from '../core/mat3.js';
import { rectToPolar, polarToRect } from '../core/polar.js';
import { sRGB } from './rgb.js';

export const XYZ_TO_LMS = mul(OKLAB_M1, sRGB.m.fromXyz);
export const LMS_TO_XYZ = invert(XYZ_TO_LMS);
export const OKLAB_M2_INV = invert(OKLAB_M2);

const x0 = XYZ_TO_LMS[0], x1 = XYZ_TO_LMS[1], x2 = XYZ_TO_LMS[2],
      x3 = XYZ_TO_LMS[3], x4 = XYZ_TO_LMS[4], x5 = XYZ_TO_LMS[5],
      x6 = XYZ_TO_LMS[6], x7 = XYZ_TO_LMS[7], x8 = XYZ_TO_LMS[8];
const y0 = LMS_TO_XYZ[0], y1 = LMS_TO_XYZ[1], y2 = LMS_TO_XYZ[2],
      y3 = LMS_TO_XYZ[3], y4 = LMS_TO_XYZ[4], y5 = LMS_TO_XYZ[5],
      y6 = LMS_TO_XYZ[6], y7 = LMS_TO_XYZ[7], y8 = LMS_TO_XYZ[8];
const a0 = OKLAB_M2[0], a1 = OKLAB_M2[1], a2 = OKLAB_M2[2],
      a3 = OKLAB_M2[3], a4 = OKLAB_M2[4], a5 = OKLAB_M2[5],
      a6 = OKLAB_M2[6], a7 = OKLAB_M2[7], a8 = OKLAB_M2[8];
const b0 = OKLAB_M2_INV[0], b1 = OKLAB_M2_INV[1], b2 = OKLAB_M2_INV[2],
      b3 = OKLAB_M2_INV[3], b4 = OKLAB_M2_INV[4], b5 = OKLAB_M2_INV[5],
      b6 = OKLAB_M2_INV[6], b7 = OKLAB_M2_INV[7], b8 = OKLAB_M2_INV[8];

export const OKLab = {
  id: 'oklab',
  fromXyz(xyz, out = [0, 0, 0]) {
    const x = xyz[0], y = xyz[1], z = xyz[2];
    const l = Math.cbrt(x0 * x + x1 * y + x2 * z);
    const m = Math.cbrt(x3 * x + x4 * y + x5 * z);
    const s = Math.cbrt(x6 * x + x7 * y + x8 * z);
    out[0] = a0 * l + a1 * m + a2 * s;
    out[1] = a3 * l + a4 * m + a5 * s;
    out[2] = a6 * l + a7 * m + a8 * s;
    return out;
  },
  toXyz(lab, out = [0, 0, 0]) {
    const L = lab[0], A = lab[1], B = lab[2];
    let l = b0 * L + b1 * A + b2 * B;
    let m = b3 * L + b4 * A + b5 * B;
    let s = b6 * L + b7 * A + b8 * B;
    l = l * l * l; m = m * m * m; s = s * s * s;
    out[0] = y0 * l + y1 * m + y2 * s;
    out[1] = y3 * l + y4 * m + y5 * s;
    out[2] = y6 * l + y7 * m + y8 * s;
    return out;
  },
};

const TMP = [0, 0, 0];

export const OKLCH = {
  id: 'oklch',
  fromXyz(xyz, out = [0, 0, 0]) {
    return rectToPolar(OKLab.fromXyz(xyz, TMP), out);
  },
  toXyz(lch, out = [0, 0, 0]) {
    return OKLab.toXyz(polarToRect(lch, TMP), out);
  },
};

/**
 * Build a direct OKLab → RGB-space converter with the LMS→linear-RGB matrix
 * precomposed at build time. This is the hot path for rendering work: one
 * 3×3, three cubes, one 3×3, one transfer encode.
 */
export function oklabToRgbDirect(rgbSpace) {
  const M = mul(rgbSpace.m.fromXyz, LMS_TO_XYZ); // LMS → linear target RGB
  const m0 = M[0], m1 = M[1], m2 = M[2], m3 = M[3], m4 = M[4], m5 = M[5], m6 = M[6], m7 = M[7], m8 = M[8];
  return function (lab, out = [0, 0, 0]) {
    const L = lab[0], A = lab[1], B = lab[2];
    let l = b0 * L + b1 * A + b2 * B;
    let m = b3 * L + b4 * A + b5 * B;
    let s = b6 * L + b7 * A + b8 * B;
    l = l * l * l; m = m * m * m; s = s * s * s;
    out[0] = m0 * l + m1 * m + m2 * s;
    out[1] = m3 * l + m4 * m + m5 * s;
    out[2] = m6 * l + m7 * m + m8 * s;
    return out;
  };
}
