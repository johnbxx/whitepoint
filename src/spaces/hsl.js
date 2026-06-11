// HSL and HWB, defined relative to gamma-encoded sRGB (CSS Color 4 §7–8).
// Hue in degrees [0, 360); S, L, W, B in 0–1. Achromatic hue is reported as 0.
// These spaces reach the XYZ hub through sRGB; convert() installs direct
// sRGB routes so hsl↔srgb never touches XYZ.

import { sRGB } from './rgb.js';

/** [H, S, L] → gamma sRGB, CSS Color 4 §7.1 algorithm. */
export function hslToSrgb(hsl, out = [0, 0, 0]) {
  const h = ((hsl[0] % 360) + 360) % 360;
  const s = hsl[1], l = hsl[2];
  const a = s * Math.min(l, 1 - l);
  const k0 = (0 + h / 30) % 12;
  const k8 = (8 + h / 30) % 12;
  const k4 = (4 + h / 30) % 12;
  out[0] = l - a * Math.max(-1, Math.min(k0 - 3, 9 - k0, 1));
  out[1] = l - a * Math.max(-1, Math.min(k8 - 3, 9 - k8, 1));
  out[2] = l - a * Math.max(-1, Math.min(k4 - 3, 9 - k4, 1));
  return out;
}

/** gamma sRGB → [H, S, L] */
export function srgbToHsl(rgb, out = [0, 0, 0]) {
  const r = rgb[0], g = rgb[1], b = rgb[2];
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0, s = 0;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g) h = ((b - r) / d + 2) * 60;
    else h = ((r - g) / d + 4) * 60;
  }
  out[0] = h;
  out[1] = s;
  out[2] = l;
  return out;
}

/** gamma sRGB → [H, W, B] */
export function srgbToHwb(rgb, out = [0, 0, 0]) {
  const w = Math.min(rgb[0], rgb[1], rgb[2]);
  const bk = 1 - Math.max(rgb[0], rgb[1], rgb[2]);
  srgbToHsl(rgb, out);
  out[1] = w;
  out[2] = bk;
  return out;
}

/** [H, W, B] → gamma sRGB, CSS Color 4 §8.2 */
export function hwbToSrgb(hwb, out = [0, 0, 0]) {
  const w = hwb[1], bk = hwb[2];
  if (w + bk >= 1) {
    const gray = w / (w + bk);
    out[0] = gray; out[1] = gray; out[2] = gray;
    return out;
  }
  hslToSrgb([hwb[0], 1, 0.5], out);
  const k = 1 - w - bk;
  out[0] = out[0] * k + w;
  out[1] = out[1] * k + w;
  out[2] = out[2] * k + w;
  return out;
}

const TMP = [0, 0, 0];

export const HSL = {
  id: 'hsl',
  toXyz(c, out = [0, 0, 0]) { return sRGB.toXyz(hslToSrgb(c, TMP), out); },
  fromXyz(xyz, out = [0, 0, 0]) { return srgbToHsl(sRGB.fromXyz(xyz, TMP), out); },
};

export const HWB = {
  id: 'hwb',
  toXyz(c, out = [0, 0, 0]) { return sRGB.toXyz(hwbToSrgb(c, TMP), out); },
  fromXyz(xyz, out = [0, 0, 0]) { return srgbToHwb(sRGB.fromXyz(xyz, TMP), out); },
};
