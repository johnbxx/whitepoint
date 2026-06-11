// CSS string serialization (output only — input parsing is a permanent
// anti-goal; parse with a parser library and convert here).
//
// Forms follow CSS Color 4 serialization conventions: dedicated functional
// notation where one exists (rgb/hsl/hwb/lab/lch/oklab/oklch), color() for
// the predefined RGB and XYZ spaces. Numbers are emitted to 6 significant
// digits (configurable), trimmed.

import { resolve } from '../core/convert.js';

function fmtNum(v, precision) {
  if (!Number.isFinite(v)) throw new Error(`whitepoint: cannot serialize non-finite value ${v}`);
  const n = Number(v.toPrecision(precision));
  return String(n === 0 ? 0 : n); // normalize -0
}

const COLOR_FN_IDS = {
  'srgb-linear': 'srgb-linear',
  'display-p3': 'display-p3',
  'a98-rgb': 'a98-rgb',
  'prophoto-rgb': 'prophoto-rgb',
  'rec2020': 'rec2020',
  'xyz-d65': 'xyz-d65',
  'xyz-d50': 'xyz-d50',
  // CSS Color HDR draft predefined spaces
  'ictcp': 'ictcp',
  'jzazbz': 'jzazbz',
  'rec2100-pq': 'rec2100-pq',
  'rec2100-hlg': 'rec2100-hlg',
};

/**
 * Serialize coordinates in `space` to a CSS color string.
 *
 * @param {number[]} coords
 * @param {object|string} space
 * @param {{alpha?: number, precision?: number}} [opts]
 */
export function serialize(coords, space, opts = {}) {
  const S = resolve(space);
  const p = opts.precision ?? 6;
  const n = (v) => fmtNum(v, p);
  const al = opts.alpha !== undefined && opts.alpha < 1 ? ` / ${n(opts.alpha)}` : '';

  switch (S.id) {
    case 'srgb':
      return `rgb(${n(coords[0] * 255)} ${n(coords[1] * 255)} ${n(coords[2] * 255)}${al})`;
    case 'hsl':
      return `hsl(${n(coords[0])} ${n(coords[1] * 100)}% ${n(coords[2] * 100)}%${al})`;
    case 'hwb':
      return `hwb(${n(coords[0])} ${n(coords[1] * 100)}% ${n(coords[2] * 100)}%${al})`;
    case 'lab':
      return `lab(${n(coords[0])} ${n(coords[1])} ${n(coords[2])}${al})`;
    case 'lch':
      return `lch(${n(coords[0])} ${n(coords[1])} ${n(coords[2])}${al})`;
    case 'oklab':
      return `oklab(${n(coords[0])} ${n(coords[1])} ${n(coords[2])}${al})`;
    case 'oklch':
      return `oklch(${n(coords[0])} ${n(coords[1])} ${n(coords[2])}${al})`;
    default: {
      const id = COLOR_FN_IDS[S.id];
      if (!id) throw new Error(`whitepoint: no CSS serialization for space "${S.id}"`);
      return `color(${id} ${n(coords[0])} ${n(coords[1])} ${n(coords[2])}${al})`;
    }
  }
}
