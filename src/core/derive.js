// Derivation of RGB↔XYZ matrices from primaries and white point.
//
// Standard construction (SMPTE RP 177; also CSS Color 4 §17 references):
// the columns of M are the XYZ coordinates of the primaries, scaled so that
// RGB (1,1,1) maps exactly to the white point's XYZ.
//
// This is principle #1 of the north star: derive, don't transcribe. The
// derived matrices are asserted against published spec values in CI.

import { invert, mulVec } from './mat3.js';
import { xyToXyz } from '../constants/whitepoints.js';

/**
 * @param {{r:[number,number], g:[number,number], b:[number,number], white:[number,number]}} def
 * @returns {{ toXyz: number[], fromXyz: number[], whiteXyz: number[] }}
 */
export function deriveRgbMatrices(def) {
  const [xr, yr] = def.r;
  const [xg, yg] = def.g;
  const [xb, yb] = def.b;

  // Primaries as XYZ with Y = 1 (columns of the unscaled matrix)
  const P = [
    xr / yr,            xg / yg,            xb / yb,
    1,                  1,                  1,
    (1 - xr - yr) / yr, (1 - xg - yg) / yg, (1 - xb - yb) / yb,
  ];

  const whiteXyz = xyToXyz(def.white);

  // Scale factors so that M * [1,1,1]^T = whiteXyz
  const S = mulVec(invert(P), whiteXyz);

  const toXyz = [
    S[0] * P[0], S[1] * P[1], S[2] * P[2],
    S[0] * P[3], S[1] * P[4], S[2] * P[5],
    S[0] * P[6], S[1] * P[7], S[2] * P[8],
  ];

  return { toXyz, fromXyz: invert(toXyz), whiteXyz };
}
