// Hunter Lab (Hunter 1948; HunterLab AN 1005.00) and XYB (JPEG XL,
// ISO/IEC 18181-1 §Annex — the libjxl color encoding).

import { CSS_D65_XYZ } from '../constants/whitepoints.js';
import { sRGB } from './rgb.js';
import { mulVec, invert } from '../core/mat3.js';

// ---- Hunter Lab, D65-referenced ----
// Ka = 175/198.04·(Xn+Yn), Kb = 70/218.11·(Yn+Zn) generalize Hunter's
// illuminant-C constants (175, 70) to other whites.

const HXN = CSS_D65_XYZ[0] * 100, HYN = 100, HZN = CSS_D65_XYZ[2] * 100;
const KA = (175 / 198.04) * (HXN + HYN);
const KB = (70 / 218.11) * (HYN + HZN);

export const HunterLab = {
  id: 'hunter-lab',
  fromXyz(xyz, out = [0, 0, 0]) {
    const X = xyz[0] * 100, Y = xyz[1] * 100, Z = xyz[2] * 100;
    const yr = Y / HYN;
    if (yr <= 0) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
    const sq = Math.sqrt(yr);
    out[0] = 100 * sq;
    out[1] = (KA * (X / HXN - yr)) / sq;
    out[2] = (KB * (yr - Z / HZN)) / sq;
    return out;
  },
  toXyz(lab, out = [0, 0, 0]) {
    const sq = lab[0] / 100;
    const yr = sq * sq;
    if (yr <= 0) { out[0] = 0; out[1] = 0; out[2] = 0; return out; }
    out[0] = (HXN * ((lab[1] * sq) / KA + yr)) / 100;
    out[1] = (HYN * yr) / 100;
    out[2] = (HZN * (yr - (lab[2] * sq) / KB)) / 100;
    return out;
  },
};

// ---- XYB (JPEG XL) ----
// Linear sRGB is mixed into biased LMS, cube-rooted, then rotated into
// opponent channels (X = (L−M)/2, Y = (L+M)/2, B = S − Y). The forward mix
// matrix and bias are the libjxl constants; the inverse mix is COMPUTED.

const XYB_BIAS = 0.00379307325527544933;
const XYB_BIAS_CBRT = Math.cbrt(XYB_BIAS);

const XYB_MIX = [
  0.3, 0.622, 0.078,
  0.23, 0.692, 0.078,
  0.24342268924547819, 0.20476744424496821, 0.5518098665095536,
];
const XYB_UNMIX = invert(XYB_MIX);

const LIN = [0, 0, 0];

export const XYB = {
  id: 'xyb',
  fromXyz(xyz, out = [0, 0, 0]) {
    // hub → linear sRGB (no transfer) → biased LMS
    mulVec(sRGB.m.fromXyz, xyz, LIN);
    mulVec(XYB_MIX, LIN, LIN);
    const l = Math.cbrt(LIN[0] + XYB_BIAS) - XYB_BIAS_CBRT;
    const m = Math.cbrt(LIN[1] + XYB_BIAS) - XYB_BIAS_CBRT;
    const s = Math.cbrt(LIN[2] + XYB_BIAS) - XYB_BIAS_CBRT;
    out[0] = (l - m) / 2;
    out[1] = (l + m) / 2;
    out[2] = s - (l + m) / 2;
    return out;
  },
  toXyz(xyb, out = [0, 0, 0]) {
    const cube = (v) => {
      const t = v + XYB_BIAS_CBRT;
      return t * t * t - XYB_BIAS;
    };
    LIN[0] = cube(xyb[1] + xyb[0]);
    LIN[1] = cube(xyb[1] - xyb[0]);
    LIN[2] = cube(xyb[2] + xyb[1]);
    mulVec(XYB_UNMIX, LIN, LIN);
    return mulVec(sRGB.m.toXyz, LIN, out);
  },
};
