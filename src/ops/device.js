// Device-model boundary utilities. These are deliberately NOT registry
// spaces: the registry is trichromatic (three coordinates, invertible);
// CMYK has four device channels and ANSI codes are palette indices
// (lossy quantizations). Same policy as alpha — supported exactly where
// they have defined semantics, as explicit boundary functions.

import { convert } from '../core/convert.js';
import { deltaEOK } from '../gamut/index.js';

// ---- naive CMYK (device-independent approximation, NOT ICC) ----

/** gamma sRGB → naive [C, M, Y, K]. */
export function cmykFromSrgb(rgb, out = [0, 0, 0, 0]) {
  const k = 1 - Math.max(rgb[0], rgb[1], rgb[2]);
  if (k >= 1) { out[0] = 0; out[1] = 0; out[2] = 0; out[3] = 1; return out; }
  const d = 1 - k;
  out[0] = (1 - rgb[0] - k) / d;
  out[1] = (1 - rgb[1] - k) / d;
  out[2] = (1 - rgb[2] - k) / d;
  out[3] = k;
  return out;
}

/** naive [C, M, Y, K] → gamma sRGB. */
export function srgbFromCmyk(cmyk, out = [0, 0, 0]) {
  const d = 1 - cmyk[3];
  out[0] = (1 - cmyk[0]) * d;
  out[1] = (1 - cmyk[1]) * d;
  out[2] = (1 - cmyk[2]) * d;
  return out;
}

// ---- ANSI terminal palettes ----

// xterm's standard 16-color palette. Indices 0–15 in real terminals are
// theme-dependent; these are the de-facto defaults.
const ANSI16 = [
  [0, 0, 0], [128, 0, 0], [0, 128, 0], [128, 128, 0],
  [0, 0, 128], [128, 0, 128], [0, 128, 128], [192, 192, 192],
  [128, 128, 128], [255, 0, 0], [0, 255, 0], [255, 255, 0],
  [0, 0, 255], [255, 0, 255], [0, 255, 255], [255, 255, 255],
].map((c) => c.map((v) => v / 255));

const CUBE = [0, 95, 135, 175, 215, 255].map((v) => v / 255);

/** ANSI-256 index → gamma sRGB. */
export function srgbFromAnsi256(index, out = [0, 0, 0]) {
  const i = Math.round(index);
  if (i < 0 || i > 255) throw new RangeError(`whitepoint: ANSI-256 index out of range: ${index}`);
  if (i < 16) {
    const c = ANSI16[i];
    out[0] = c[0]; out[1] = c[1]; out[2] = c[2];
    return out;
  }
  if (i < 232) {
    const n = i - 16;
    out[0] = CUBE[Math.floor(n / 36)];
    out[1] = CUBE[Math.floor(n / 6) % 6];
    out[2] = CUBE[n % 6];
    return out;
  }
  const g = (8 + 10 * (i - 232)) / 255;
  out[0] = g; out[1] = g; out[2] = g;
  return out;
}

const A = [0, 0, 0];
const B = [0, 0, 0];

function nearestCubeLevel(v) {
  let best = 0, bestD = Infinity;
  for (let i = 0; i < 6; i++) {
    const d = Math.abs(CUBE[i] - v);
    if (d < bestD) { bestD = d; best = i; }
  }
  return best;
}

/**
 * Quantize gamma sRGB to the nearest ANSI-256 index, choosing between the
 * 6×6×6 cube and the 24-step gray ramp by deltaEOK (perceptual, not
 * channel-wise). Indices 0–15 are never produced — they are theme-dependent
 * in real terminals.
 */
export function ansi256FromSrgb(rgb) {
  const ci = [nearestCubeLevel(rgb[0]), nearestCubeLevel(rgb[1]), nearestCubeLevel(rgb[2])];
  const cubeIdx = 16 + 36 * ci[0] + 6 * ci[1] + ci[2];
  const gAvg = (rgb[0] + rgb[1] + rgb[2]) / 3;
  let gi = Math.round((gAvg * 255 - 8) / 10);
  gi = gi < 0 ? 0 : gi > 23 ? 23 : gi;
  const grayIdx = 232 + gi;

  convert(rgb, 'srgb', 'oklab', A);
  const dCube = deltaEOK(A, convert(srgbFromAnsi256(cubeIdx, B), 'srgb', 'oklab', B));
  const dGray = deltaEOK(A, convert(srgbFromAnsi256(grayIdx, B), 'srgb', 'oklab', B));
  return dGray < dCube ? grayIdx : cubeIdx;
}

/** Nearest standard ANSI-16 index by deltaEOK. */
export function ansi16FromSrgb(rgb) {
  convert(rgb, 'srgb', 'oklab', A);
  let best = 0, bestD = Infinity;
  for (let i = 0; i < 16; i++) {
    const d = deltaEOK(A, convert(ANSI16[i], 'srgb', 'oklab', B));
    if (d < bestD) { bestD = d; best = i; }
  }
  return best;
}
