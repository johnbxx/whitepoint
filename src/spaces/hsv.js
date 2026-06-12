// HSV and HSI, defined on gamma sRGB (hexcone hue shared with HSL).
// HSI per the standard derivation (S = 1 − min/I, I = mean), matching
// culori's conventions (verified differentially).

import { sRGB } from './rgb.js';
import { srgbToHsl } from './hsl.js';

const TMP = [0, 0, 0];

/** sRGB → HSV (hue degrees, s/v 0–1), the direct hexcone route. */
export function srgbToHsv(rgb, out = [0, 0, 0]) {
  const max = Math.max(rgb[0], rgb[1], rgb[2]);
  const min = Math.min(rgb[0], rgb[1], rgb[2]);
  srgbToHsl(rgb, out); // hue is shared
  out[1] = max === 0 ? 0 : (max - min) / max;
  out[2] = max;
  return out;
}

/** HSV → sRGB, inverse of srgbToHsv. */
export function hsvToSrgb(hsv, out = [0, 0, 0]) {
  const h = ((hsv[0] % 360) + 360) % 360;
  const s = hsv[1], v = hsv[2];
  const f = (n) => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
  };
  out[0] = f(5);
  out[1] = f(3);
  out[2] = f(1);
  return out;
}

/** sRGB → HSI (intensity = mean of channels — the classic image-processing variant). */
export function srgbToHsi(rgb, out = [0, 0, 0]) {
  const sum = rgb[0] + rgb[1] + rgb[2];
  const min = Math.min(rgb[0], rgb[1], rgb[2]);
  srgbToHsl(rgb, out); // hexcone hue
  out[1] = sum === 0 ? 0 : 1 - (3 * min) / sum;
  out[2] = sum / 3;
  return out;
}

/** HSI → sRGB, inverse of srgbToHsi. */
export function hsiToSrgb(hsi, out = [0, 0, 0]) {
  const h = ((hsi[0] % 360) + 360) % 360;
  const s = hsi[1], i = hsi[2];
  const f = Math.abs(((h / 60) % 2) - 1);
  const big = i * (1 + s * (3 / (2 - f) - 1));
  const mid = i * (1 + s * ((3 * (1 - f)) / (2 - f) - 1));
  const low = i * (1 - s);
  switch (Math.floor(h / 60) % 6) {
    case 0: out[0] = big; out[1] = mid; out[2] = low; break;
    case 1: out[0] = mid; out[1] = big; out[2] = low; break;
    case 2: out[0] = low; out[1] = big; out[2] = mid; break;
    case 3: out[0] = low; out[1] = mid; out[2] = big; break;
    case 4: out[0] = mid; out[1] = low; out[2] = big; break;
    default: out[0] = big; out[1] = low; out[2] = mid; break;
  }
  return out;
}

export const HSV = {
  id: 'hsv',
  toXyz(c, out = [0, 0, 0]) { return sRGB.toXyz(hsvToSrgb(c, TMP), out); },
  fromXyz(xyz, out = [0, 0, 0]) { return srgbToHsv(sRGB.fromXyz(xyz, TMP), out); },
};

export const HSI = {
  id: 'hsi',
  toXyz(c, out = [0, 0, 0]) { return sRGB.toXyz(hsiToSrgb(c, TMP), out); },
  fromXyz(xyz, out = [0, 0, 0]) { return srgbToHsi(sRGB.fromXyz(xyz, TMP), out); },
};
