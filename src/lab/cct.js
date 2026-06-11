// Illuminants from correlated color temperature.
//
// CIE daylight locus (CIE 15:2004 §3.1; Wyszecki & Stiles 2nd ed., Eq. 3(4.7)):
// valid for 4000 K ≤ T ≤ 25000 K. The Planckian (blackbody) locus is not yet
// implemented — published closed-form approximations introduce error we are
// not willing to leave uncharacterized; it will arrive with error bounds or
// not at all.

import { xyToXyz } from '../constants/whitepoints.js';

/**
 * xy chromaticity of CIE standard daylight at correlated color temperature T.
 * @param {number} T - kelvin, 4000–25000
 * @param {number[]} [out]
 */
export function daylightXy(T, out = [0, 0]) {
  if (!(T >= 4000 && T <= 25000)) {
    throw new RangeError(`whitepoint: daylight locus is defined for 4000–25000 K (got ${T})`);
  }
  const t = 1e3 / T, t2 = t * t, t3 = t2 * t;
  const x = T <= 7000
    ? 0.244063 + 0.09911 * t + 2.9678 * t2 - 4.6070 * t3
    : 0.237040 + 0.24748 * t + 1.9018 * t2 - 2.0064 * t3;
  out[0] = x;
  out[1] = -3.000 * x * x + 2.870 * x - 0.275;
  return out;
}

/**
 * XYZ (Y = 1) white point of CIE daylight at temperature T — usable directly
 * as a white point argument to adapt().
 */
export function illuminantFromCCT(T, out = [0, 0, 0]) {
  return xyToXyz(daylightXy(T), out);
}
