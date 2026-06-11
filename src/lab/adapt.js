// Chromatic adaptation between arbitrary illuminants.
//
// Model: von Kries scaling in a cone-like response space,
//   M = CAT⁻¹ · diag(dst_cone / src_cone) · CAT
// with the cone matrix chosen by `cat` (Bradford by default — the ICC/CSS
// standard). See Fairchild, "Color Appearance Models", ch. 9.

import { mul, mulVec, invert, diag } from '../core/mat3.js';
import { cats } from '../constants/cats.js';
import { illuminants, xyToXyz } from '../constants/whitepoints.js';

// Computed CAT inverses, cached per cat name.
const _catInv = new Map();
function catInverse(name) {
  let inv = _catInv.get(name);
  if (!inv) {
    inv = invert(cats[name]);
    _catInv.set(name, inv);
  }
  return inv;
}

/**
 * Resolve a white point argument to XYZ (Y = 1) plus a stable cache key.
 * Accepts: an illuminant name ('D65', 'A', …), an [x, y] chromaticity,
 * or a full [X, Y, Z] tristimulus.
 */
function resolveWhite(w) {
  if (typeof w === 'string') {
    const xy = illuminants[w];
    if (!xy) throw new Error(`whitepoint: unknown illuminant "${w}" (have: ${Object.keys(illuminants).join(', ')})`);
    return { key: w, xyz: xyToXyz(xy) };
  }
  if (w.length === 2) {
    return { key: `xy:${w[0]},${w[1]}`, xyz: xyToXyz(w) };
  }
  return { key: `xyz:${w[0]},${w[1]},${w[2]}`, xyz: w };
}

const _matrixCache = new Map();

/**
 * The 3×3 adaptation matrix from one white point to another.
 * Cached per (cat, src, dst). Useful directly for precomposition.
 */
export function adaptMatrix(from, to, cat = 'bradford') {
  if (!cats[cat]) throw new Error(`whitepoint: unknown CAT "${cat}" (have: ${Object.keys(cats).join(', ')})`);
  const src = resolveWhite(from);
  const dst = resolveWhite(to);
  const key = `${cat}|${src.key}|${dst.key}`;
  let m = _matrixCache.get(key);
  if (!m) {
    const C = cats[cat];
    const srcCone = mulVec(C, src.xyz);
    const dstCone = mulVec(C, dst.xyz);
    m = mul(mul(catInverse(cat), diag(dstCone[0] / srcCone[0], dstCone[1] / srcCone[1], dstCone[2] / srcCone[2])), C);
    _matrixCache.set(key, m);
  }
  return m;
}

/**
 * Adapt XYZ tristimulus values from one illuminant to another.
 *
 * @param {number[]} xyz - input XYZ
 * @param {string|number[]} from - source white point (name, [x,y], or [X,Y,Z])
 * @param {string|number[]} to   - destination white point
 * @param {number[]} [out]       - optional output array
 * @param {{cat?: 'bradford'|'cat02'|'cat16'|'vonkries'|'xyz-scaling'}} [opts]
 */
export function adapt(xyz, from, to, out = [0, 0, 0], opts) {
  const src = resolveWhite(from);
  const dst = resolveWhite(to);
  if (src.key === dst.key) {
    out[0] = xyz[0]; out[1] = xyz[1]; out[2] = xyz[2];
    return out;
  }
  return mulVec(adaptMatrix(from, to, opts?.cat ?? 'bradford'), xyz, out);
}
