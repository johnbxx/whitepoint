// CIE 1976 L*u*v* and its cylindrical form LCHuv (CIE 15).
// D50-referenced via the CSS Color 4 white point, matching the CSS Lab
// convention and culori's 'luv' mode (verified differentially). For other
// reference whites, adapt() upstream.

import { adaptMatrix } from '../lab/adapt.js';
import { rectToPolar, polarToRect } from '../core/polar.js';
import { CSS_D50, CSS_D65, CSS_D50_XYZ } from '../constants/whitepoints.js';

const EPSILON = 216 / 24389;
const KAPPA = 24389 / 27;

const M_D65_TO_D50 = adaptMatrix(CSS_D65, CSS_D50);
const M_D50_TO_D65 = adaptMatrix(CSS_D50, CSS_D65);

const WX = CSS_D50_XYZ[0], WY = CSS_D50_XYZ[1], WZ = CSS_D50_XYZ[2];
const UN = (4 * WX) / (WX + 15 * WY + 3 * WZ);
const VN = (9 * WY) / (WX + 15 * WY + 3 * WZ);

const TMP = [0, 0, 0];

export const Luv = {
  id: 'luv',
  fromXyz(xyz, out = [0, 0, 0]) {
    const X = M_D65_TO_D50[0] * xyz[0] + M_D65_TO_D50[1] * xyz[1] + M_D65_TO_D50[2] * xyz[2];
    const Y = M_D65_TO_D50[3] * xyz[0] + M_D65_TO_D50[4] * xyz[1] + M_D65_TO_D50[5] * xyz[2];
    const Z = M_D65_TO_D50[6] * xyz[0] + M_D65_TO_D50[7] * xyz[1] + M_D65_TO_D50[8] * xyz[2];
    const den = X + 15 * Y + 3 * Z;
    const up = den === 0 ? UN : (4 * X) / den;
    const vp = den === 0 ? VN : (9 * Y) / den;
    const yr = Y / WY;
    const L = yr > EPSILON ? 116 * Math.cbrt(yr) - 16 : KAPPA * yr;
    out[0] = L;
    out[1] = 13 * L * (up - UN);
    out[2] = 13 * L * (vp - VN);
    return out;
  },
  toXyz(luv, out = [0, 0, 0]) {
    const L = luv[0];
    if (L === 0) {
      out[0] = 0; out[1] = 0; out[2] = 0;
      return out;
    }
    const up = luv[1] / (13 * L) + UN;
    const vp = luv[2] / (13 * L) + VN;
    const Y = WY * (L > 8 ? Math.pow((L + 16) / 116, 3) : L / KAPPA);
    const X = (Y * 9 * up) / (4 * vp);
    const Z = (Y * (12 - 3 * up - 20 * vp)) / (4 * vp);
    TMP[0] = X; TMP[1] = Y; TMP[2] = Z;
    out[0] = M_D50_TO_D65[0] * TMP[0] + M_D50_TO_D65[1] * TMP[1] + M_D50_TO_D65[2] * TMP[2];
    out[1] = M_D50_TO_D65[3] * TMP[0] + M_D50_TO_D65[4] * TMP[1] + M_D50_TO_D65[5] * TMP[2];
    out[2] = M_D50_TO_D65[6] * TMP[0] + M_D50_TO_D65[7] * TMP[1] + M_D50_TO_D65[8] * TMP[2];
    return out;
  },
};

const PTMP = [0, 0, 0];

export const LCHuv = {
  id: 'lchuv',
  fromXyz(xyz, out = [0, 0, 0]) {
    return rectToPolar(Luv.fromXyz(xyz, PTMP), out);
  },
  toXyz(lch, out = [0, 0, 0]) {
    return Luv.toXyz(polarToRect(lch, PTMP), out);
  },
};
