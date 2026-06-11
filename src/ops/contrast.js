// WCAG 2.x contrast, implemented to the letter of the spec.
//
// Pedantic note, on brand: WCAG 2.x defines relative luminance with the OLD
// sRGB linearization threshold (0.03928 instead of IEC's corrected 0.04045)
// and Y coefficients truncated to four digits (0.2126/0.7152/0.0722). The
// numerical difference from colorimetric Y is < 1e-4 and never changes a
// rounded ratio, but "research-grade" means implementing the cited formula
// as written, not the formula we think they meant. Citation: WCAG 2.1,
// "relative luminance" definition.
//
// APCA / WCAG 3 is deliberately absent until its constants freeze
// (north star: constants still moving → wait).

import { convert, resolve } from '../core/convert.js';

function wcagLinear(v) {
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

/** WCAG 2.x relative luminance of gamma sRGB coordinates (0–1, clipped). */
export function wcagLuminance(srgb) {
  const r = Math.min(1, Math.max(0, srgb[0]));
  const g = Math.min(1, Math.max(0, srgb[1]));
  const b = Math.min(1, Math.max(0, srgb[2]));
  return 0.2126 * wcagLinear(r) + 0.7152 * wcagLinear(g) + 0.0722 * wcagLinear(b);
}

const TMP = [0, 0, 0];

/**
 * WCAG 2.x contrast ratio (1–21) between two colors in `space`.
 * WCAG is defined on sRGB; other spaces are converted (and clipped — WCAG
 * has no notion of out-of-gamut color).
 */
export function contrastWCAG2(a, b, space = 'srgb') {
  const S = resolve(space);
  const la = wcagLuminance(S.id === 'srgb' ? a : convert(a, S, 'srgb', TMP));
  const lb = wcagLuminance(S.id === 'srgb' ? b : convert(b, S, 'srgb', TMP));
  const hi = Math.max(la, lb), lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}
