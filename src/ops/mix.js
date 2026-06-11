// Color interpolation per CSS Color 4 §12 — in any supported space, with the
// four spec-defined hue interpolation methods (§12.4), plus the premultiplied
// alpha form (§12.3) as a separate, consistently 4-channel entry point.
//
// Coordinates must already be in `space`; mix() does not convert. This keeps
// the operation exact, composable, and allocation-free.

import { resolve } from '../core/convert.js';

const HUE_CHANNEL = {
  hsl: 0, hwb: 0, hsv: 0, hsi: 0, okhsl: 0, okhsv: 0,
  lch: 2, oklch: 2, lchuv: 2, jzczhz: 2,
};

function norm360(h) {
  return ((h % 360) + 360) % 360;
}

/** Hue delta per CSS Color 4 §12.4, from normalized hues. */
export function hueDelta(ha, hb, method) {
  const d0 = norm360(hb - ha); // [0, 360)
  switch (method) {
    case 'shorter':
      return d0 > 180 ? d0 - 360 : d0;
    case 'longer':
      if (d0 === 0) return 360;
      return d0 < 180 ? d0 - 360 : d0;
    case 'increasing':
      return d0;
    case 'decreasing':
      return d0 === 0 ? 0 : d0 - 360;
    default:
      throw new Error(`whitepoint: unknown hue method "${method}" (have: shorter, longer, increasing, decreasing)`);
  }
}

/**
 * Mix two colors (both in `space`) at parameter t per CSS Color 4 §12.
 *
 * @param {number[]} a - coordinates in `space`
 * @param {number[]} b - coordinates in `space`
 * @param {number} t - 0 → a, 1 → b
 * @param {object|string} space
 * @param {{hue?: 'shorter'|'longer'|'increasing'|'decreasing'}} [opts]
 * @param {number[]} [out]
 */
export function mix(a, b, t, space, opts, out = [0, 0, 0]) {
  const S = resolve(space);
  const hc = HUE_CHANNEL[S.id] ?? -1;
  for (let i = 0; i < 3; i++) {
    if (i === hc) {
      const ha = norm360(a[i]);
      out[i] = norm360(ha + t * hueDelta(ha, norm360(b[i]), opts?.hue ?? 'shorter'));
    } else {
      out[i] = a[i] + t * (b[i] - a[i]);
    }
  }
  return out;
}

/**
 * Premultiplied-alpha mix per CSS Color 4 §12.3. Inputs and output are
 * length-4: [c0, c1, c2, alpha]. Non-hue coordinates are weighted by alpha
 * before interpolation and unweighted after; hue is never premultiplied.
 * When the interpolated alpha is 0, coordinates interpolate unweighted
 * (the spec's 0/0 case — the color is fully transparent either way).
 */
export function mixAlpha(a, b, t, space, opts, out = [0, 0, 0, 0]) {
  const S = resolve(space);
  const hc = HUE_CHANNEL[S.id] ?? -1;
  const aA = a[3], aB = b[3];
  const alpha = aA + t * (aB - aA);
  for (let i = 0; i < 3; i++) {
    if (i === hc) {
      const ha = norm360(a[i]);
      out[i] = norm360(ha + t * hueDelta(ha, norm360(b[i]), opts?.hue ?? 'shorter'));
    } else if (alpha === 0) {
      out[i] = a[i] + t * (b[i] - a[i]);
    } else {
      const pa = a[i] * aA;
      out[i] = (pa + t * (b[i] * aB - pa)) / alpha;
    }
  }
  out[3] = alpha;
  return out;
}

export { HUE_CHANNEL };
