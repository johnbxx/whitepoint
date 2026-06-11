// Color vision deficiency simulation — Brettel, Viénot & Mollon (1997),
// derived rather than transcribed: the monochromatic anchors and the white
// come from this library's own CMFs and illuminant table, the LMS transform
// is the cited Hunt–Pointer–Estevez matrix already in the CAT collection,
// and the projection planes are constructed at first use. No fitted
// simulation matrices are copied from anywhere.
//
// Model: a dichromat's missing cone response is reconstructed by projecting
// LMS onto one of two half-planes, each containing the white point and a
// monochromatic anchor that dichromats and trichromats agree on
// (protan/deutan: 475 nm and 575 nm; tritan: 485 nm and 660 nm).
// Anomalous trichromacy is approximated by linear interpolation toward the
// dichromat point (severity 0–1), the standard practice.

import { cats } from '../constants/cats.js';
import { mulVec, invert } from '../core/mat3.js';
import { CSS_D65_XYZ } from '../constants/whitepoints.js';
import { convert } from '../core/convert.js';
import { CMF_1931_2 } from './data.js';

const LMS = cats.vonkries; // Hunt–Pointer–Estevez cone fundamentals
const LMS_INV = invert(LMS);

// XYZ (arbitrary scale) of monochromatic light at λ, from the CMFs.
function monochromeXyz(lambda) {
  const t = (lambda - CMF_1931_2.start) / CMF_1931_2.step;
  const i = Math.floor(t);
  const f = t - i;
  const at = (arr) => arr[i] * (1 - f) + arr[i + 1] * f;
  return [at(CMF_1931_2.x), at(CMF_1931_2.y), at(CMF_1931_2.z)];
}

const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

const TYPES = {
  protanopia: { axis: 0, anchors: [475, 575] },
  deuteranopia: { axis: 1, anchors: [475, 575] },
  tritanopia: { axis: 2, anchors: [485, 660] },
};

const _models = new Map();

function model(type) {
  let m = _models.get(type);
  if (m) return m;
  const def = TYPES[type];
  if (!def) throw new Error(`whitepoint: unknown CVD type "${type}" (have: ${Object.keys(TYPES).join(', ')})`);

  const W = mulVec(LMS, CSS_D65_XYZ, [0, 0, 0]);
  const A1 = mulVec(LMS, monochromeXyz(def.anchors[0]), [0, 0, 0]);
  const A2 = mulVec(LMS, monochromeXyz(def.anchors[1]), [0, 0, 0]);

  // Separation plane: spanned by the white and the missing-cone axis.
  const e = [0, 0, 0];
  e[def.axis] = 1;
  const sep = cross(W, e);
  const side1 = Math.sign(dot(sep, A1));
  const side2 = Math.sign(dot(sep, A2));
  if (side1 === side2 || side1 === 0) {
    throw new Error('whitepoint: CVD anchor construction failed (anchors not on opposite sides)');
  }

  // Projection plane normals (each plane contains the origin, W, and one anchor).
  const n1 = cross(W, A1);
  const n2 = cross(W, A2);
  m = { axis: def.axis, sep, side1, n1, n2 };
  _models.set(type, m);
  return m;
}

const _xyz = [0, 0, 0];
const _lms = [0, 0, 0];

/**
 * Simulate color vision deficiency. Input/output in `space`.
 *
 * @param {number[]} coords
 * @param {object|string} space
 * @param {{type: 'protanopia'|'deuteranopia'|'tritanopia', severity?: number}} opts
 * @param {number[]} [out]
 */
export function simulateCVD(coords, space, opts, out = [0, 0, 0]) {
  const { type, severity = 1 } = opts ?? {};
  const m = model(type);
  convert(coords, space, 'xyz-d65', _xyz);
  mulVec(LMS, _xyz, _lms);

  const n = Math.sign(dot(m.sep, _lms)) === m.side1 ? m.n1 : m.n2;
  const i = m.axis;
  const j = (i + 1) % 3, k = (i + 2) % 3;
  const projected = -(n[j] * _lms[j] + n[k] * _lms[k]) / n[i];
  // anomalous trichromacy: interpolate the affected cone toward the dichromat
  _lms[i] += severity * (projected - _lms[i]);

  mulVec(LMS_INV, _lms, _xyz);
  return convert(_xyz, 'xyz-d65', space, out);
}
