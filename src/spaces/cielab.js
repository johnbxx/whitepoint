// CIE Lab / LCH per CSS Color 4 (D50-referenced, L in 0–100).
// ε and κ are kept as exact rationals (CIE 15; the "intent of the standard"
// values, avoiding the historically truncated 0.008856 / 903.3).

import { adaptMatrix } from '../lab/adapt.js';
import { rectToPolar, polarToRect } from '../core/polar.js';
import { CSS_D50, CSS_D65, CSS_D50_XYZ } from '../constants/whitepoints.js';

const EPSILON = 216 / 24389;       // (6/29)^3
const KAPPA = 24389 / 27;          // (29/3)^3
const CBRT_EPSILON = 6 / 29;       // exact cube root of ε

const M_D65_TO_D50 = adaptMatrix(CSS_D65, CSS_D50);
const M_D50_TO_D65 = adaptMatrix(CSS_D50, CSS_D65);
const f0 = M_D65_TO_D50[0], f1 = M_D65_TO_D50[1], f2 = M_D65_TO_D50[2],
      f3 = M_D65_TO_D50[3], f4 = M_D65_TO_D50[4], f5 = M_D65_TO_D50[5],
      f6 = M_D65_TO_D50[6], f7 = M_D65_TO_D50[7], f8 = M_D65_TO_D50[8];
const g0 = M_D50_TO_D65[0], g1 = M_D50_TO_D65[1], g2 = M_D50_TO_D65[2],
      g3 = M_D50_TO_D65[3], g4 = M_D50_TO_D65[4], g5 = M_D50_TO_D65[5],
      g6 = M_D50_TO_D65[6], g7 = M_D50_TO_D65[7], g8 = M_D50_TO_D65[8];

const WX = CSS_D50_XYZ[0], WY = CSS_D50_XYZ[1], WZ = CSS_D50_XYZ[2];

function labF(t) {
  return t > EPSILON ? Math.cbrt(t) : (KAPPA * t + 16) / 116;
}

function labFInv(t) {
  return t > CBRT_EPSILON ? t * t * t : (116 * t - 16) / KAPPA;
}

export const Lab = {
  id: 'lab',
  fromXyz(xyz, out = [0, 0, 0]) {
    const x = xyz[0], y = xyz[1], z = xyz[2];
    const fx = labF((f0 * x + f1 * y + f2 * z) / WX);
    const fy = labF((f3 * x + f4 * y + f5 * z) / WY);
    const fz = labF((f6 * x + f7 * y + f8 * z) / WZ);
    out[0] = 116 * fy - 16;
    out[1] = 500 * (fx - fy);
    out[2] = 200 * (fy - fz);
    return out;
  },
  toXyz(lab, out = [0, 0, 0]) {
    const fy = (lab[0] + 16) / 116;
    const fx = lab[1] / 500 + fy;
    const fz = fy - lab[2] / 200;
    const x = labFInv(fx) * WX;
    const y = labFInv(fy) * WY;
    const z = labFInv(fz) * WZ;
    out[0] = g0 * x + g1 * y + g2 * z;
    out[1] = g3 * x + g4 * y + g5 * z;
    out[2] = g6 * x + g7 * y + g8 * z;
    return out;
  },
};

const TMP = [0, 0, 0];

export const LCH = {
  id: 'lch',
  fromXyz(xyz, out = [0, 0, 0]) {
    return rectToPolar(Lab.fromXyz(xyz, TMP), out);
  },
  toXyz(lch, out = [0, 0, 0]) {
    return Lab.toXyz(polarToRect(lch, TMP), out);
  },
};
