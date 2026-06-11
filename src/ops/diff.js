// CIEDE2000 color difference (CIE 015; implementation per Sharma, Wu &
// Dalal 2005, the canonical reference with its published test pairs).
// Inputs are CIE Lab coordinates (L 0–100). Frozen spec, exact computation.

import { convert } from '../core/convert.js';

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
const POW25_7 = Math.pow(25, 7);

const UA = [0, 0, 0];
const UB = [0, 0, 0];

/**
 * CAM16-UCS color difference ΔE′ (Li et al. 2017): Euclidean distance in
 * CAM16-UCS under the default viewing conditions.
 *
 * @param {number[]} a - coordinates in `space`
 * @param {number[]} b - coordinates in `space`
 * @param {object|string} [space] - the space a and b are expressed in
 */
export function deltaECAM16(a, b, space = 'srgb') {
  convert(a, space, 'cam16-ucs', UA);
  convert(b, space, 'cam16-ucs', UB);
  const dJ = UA[0] - UB[0], da = UA[1] - UB[1], db = UA[2] - UB[2];
  return Math.sqrt(dJ * dJ + da * da + db * db);
}

/**
 * @param {number[]} lab1 - CIE Lab
 * @param {number[]} lab2 - CIE Lab
 * @param {{kL?: number, kC?: number, kH?: number}} [weights] - parametric factors (default 1)
 */
export function deltaE2000(lab1, lab2, weights) {
  const kL = weights?.kL ?? 1, kC = weights?.kC ?? 1, kH = weights?.kH ?? 1;
  const L1 = lab1[0], a1 = lab1[1], b1 = lab1[2];
  const L2 = lab2[0], a2 = lab2[1], b2 = lab2[2];

  const C1 = Math.sqrt(a1 * a1 + b1 * b1);
  const C2 = Math.sqrt(a2 * a2 + b2 * b2);
  const Cm = (C1 + C2) / 2;
  const Cm7 = Math.pow(Cm, 7);
  const G = 0.5 * (1 - Math.sqrt(Cm7 / (Cm7 + POW25_7)));

  const a1p = (1 + G) * a1;
  const a2p = (1 + G) * a2;
  const C1p = Math.sqrt(a1p * a1p + b1 * b1);
  const C2p = Math.sqrt(a2p * a2p + b2 * b2);

  const h1p = C1p === 0 ? 0 : (Math.atan2(b1, a1p) * RAD2DEG + 360) % 360;
  const h2p = C2p === 0 ? 0 : (Math.atan2(b2, a2p) * RAD2DEG + 360) % 360;

  const dLp = L2 - L1;
  const dCp = C2p - C1p;

  let dhp;
  if (C1p * C2p === 0) dhp = 0;
  else {
    dhp = h2p - h1p;
    if (dhp > 180) dhp -= 360;
    else if (dhp < -180) dhp += 360;
  }
  const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin((dhp / 2) * DEG2RAD);

  const Lmp = (L1 + L2) / 2;
  const Cmp = (C1p + C2p) / 2;

  let hmp;
  if (C1p * C2p === 0) hmp = h1p + h2p;
  else {
    const d = Math.abs(h1p - h2p);
    const s = h1p + h2p;
    if (d <= 180) hmp = s / 2;
    else if (s < 360) hmp = (s + 360) / 2;
    else hmp = (s - 360) / 2;
  }

  const T = 1
    - 0.17 * Math.cos((hmp - 30) * DEG2RAD)
    + 0.24 * Math.cos((2 * hmp) * DEG2RAD)
    + 0.32 * Math.cos((3 * hmp + 6) * DEG2RAD)
    - 0.20 * Math.cos((4 * hmp - 63) * DEG2RAD);

  const dTheta = 30 * Math.exp(-Math.pow((hmp - 275) / 25, 2));
  const Cmp7 = Math.pow(Cmp, 7);
  const RC = 2 * Math.sqrt(Cmp7 / (Cmp7 + POW25_7));
  const Lm50sq = (Lmp - 50) * (Lmp - 50);
  const SL = 1 + (0.015 * Lm50sq) / Math.sqrt(20 + Lm50sq);
  const SC = 1 + 0.045 * Cmp;
  const SH = 1 + 0.015 * Cmp * T;
  const RT = -Math.sin(2 * dTheta * DEG2RAD) * RC;

  const tL = dLp / (kL * SL);
  const tC = dCp / (kC * SC);
  const tH = dHp / (kH * SH);
  return Math.sqrt(tL * tL + tC * tC + tH * tH + RT * tC * tH);
}
