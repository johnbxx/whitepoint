// Gamut checking and gamut mapping.
//
// Three mapping methods, in fidelity/speed order:
//
//  'clip' — per-channel clamp in the gamut space. Fast, hue-distorting;
//           the reference baseline everything else is judged against.
//  'css'  — CSS Color 4 §13 gamut mapping: binary-search chroma reduction in
//           OKLCH with a deltaEOK ≤ JND(0.02) early-out to clipped candidates.
//           The interoperable reference method.
//  'cusp' — project toward (L_cusp, C=0) in the OKLCH plane of constant hue
//           (after Ottosson 2021; texel's MapToCuspL is the same family).
//           The cusp here is found NUMERICALLY from the gamut definition —
//           derive, don't fit. Fitted fast paths belong to the optimization
//           pass, verified against this ground truth.
//
// All methods take/return coordinates in `space`, mapping into `gamut`.

import { convert, resolve } from '../core/convert.js';
import { polarToRect, DEG2RAD } from '../core/polar.js';

const JND = 0.02;   // CSS Color 4 §13.1.1 "just noticeable difference" in OKLab
const EPS = 1e-4;   // CSS Color 4 chroma binary-search termination

const TMP = [0, 0, 0];

/**
 * Is a color inside the gamut of a bounded RGB space?
 */
export function inGamut(coords, space, gamut = space, epsilon = 1e-6) {
  const G = resolveRgbGamut(gamut, 'inGamut');
  const c = convert(coords, space, G, TMP);
  return inRange(c, epsilon);
}

function inRange(c, epsilon = 1e-6) {
  return c[0] >= -epsilon && c[0] <= 1 + epsilon
      && c[1] >= -epsilon && c[1] <= 1 + epsilon
      && c[2] >= -epsilon && c[2] <= 1 + epsilon;
}

function resolveRgbGamut(gamut, caller) {
  const G = resolve(gamut);
  if (!G.m || G.transferName === undefined) {
    throw new Error(`whitepoint: ${caller} needs a bounded RGB gamut space (got "${G.id}")`);
  }
  return G;
}

/** Per-channel clamp to [0, 1] (in gamut-space coordinates). */
export function clip(coords, out = [0, 0, 0]) {
  out[0] = coords[0] < 0 ? 0 : coords[0] > 1 ? 1 : coords[0];
  out[1] = coords[1] < 0 ? 0 : coords[1] > 1 ? 1 : coords[1];
  out[2] = coords[2] < 0 ? 0 : coords[2] > 1 ? 1 : coords[2];
  return out;
}

/** Euclidean distance in OKLab — the deltaE of CSS Color 4 gamut mapping. */
export function deltaEOK(a, b) {
  const dL = a[0] - b[0], da = a[1] - b[1], db = a[2] - b[2];
  return Math.sqrt(dL * dL + da * da + db * db);
}

// ---- CSS Color 4 §13 reference method ----

const _lch = [0, 0, 0];
const _gc = [0, 0, 0];
const _clipped = [0, 0, 0];
const _labA = [0, 0, 0];
const _labB = [0, 0, 0];

function cssMap(oklch, G, outGamutCoords) {
  if (oklch[0] >= 1) { outGamutCoords[0] = 1; outGamutCoords[1] = 1; outGamutCoords[2] = 1; return outGamutCoords; }
  if (oklch[0] <= 0) { outGamutCoords[0] = 0; outGamutCoords[1] = 0; outGamutCoords[2] = 0; return outGamutCoords; }

  convert(oklch, 'oklch', G, outGamutCoords);
  if (inRange(outGamutCoords, 0)) return outGamutCoords;

  let min = 0, max = oklch[1], minInGamut = true;
  const current = _lch;
  current[0] = oklch[0]; current[1] = oklch[1]; current[2] = oklch[2];

  while (max - min > EPS) {
    current[1] = (min + max) / 2;
    convert(current, 'oklch', G, _gc);
    if (minInGamut && inRange(_gc, 0)) {
      min = current[1];
      continue;
    }
    clip(_gc, _clipped);
    convert(_clipped, G, 'oklab', _labA);
    polarToRect(current, _labB);
    const E = deltaEOK(_labA, _labB);
    if (E < JND) {
      if (JND - E < EPS) {
        outGamutCoords[0] = _clipped[0]; outGamutCoords[1] = _clipped[1]; outGamutCoords[2] = _clipped[2];
        return outGamutCoords;
      }
      minInGamut = false;
      min = current[1];
    } else {
      max = current[1];
    }
  }
  convert(current, 'oklch', G, _gc);
  return clip(_gc, outGamutCoords);
}

// ---- Cusp method (numerical ground truth) ----

// Max in-gamut chroma at a given OKLCH L and hue, by bisection.
function maxChroma(L, h, G, tol = 1e-5) {
  _lch[0] = L; _lch[2] = h;
  let lo = 0, hi = 0.5; // no CSS-4 RGB gamut cusp exceeds C = 0.5
  for (let i = 0; i < 26 && hi - lo > tol; i++) {
    _lch[1] = (lo + hi) / 2;
    convert(_lch, 'oklch', G, _gc);
    if (inRange(_gc, 0)) lo = _lch[1];
    else hi = _lch[1];
  }
  return lo;
}

const _cuspCache = new Map();

/**
 * The gamut's cusp (L, C of maximum chroma) for a given OKLCH hue, found by
 * golden-section search over L with bisection on C. Cached per (gamut, ~hue).
 */
export function findCusp(h, gamut) {
  const G = resolveRgbGamut(gamut, 'findCusp');
  const key = G.id + '|' + Math.round(h * 100);
  let cusp = _cuspCache.get(key);
  if (cusp) return cusp;

  const PHI = (Math.sqrt(5) - 1) / 2;
  let lo = 0.01, hi = 0.99;
  let x1 = hi - PHI * (hi - lo), x2 = lo + PHI * (hi - lo);
  let f1 = maxChroma(x1, h, G), f2 = maxChroma(x2, h, G);
  while (hi - lo > 1e-4) {
    if (f1 < f2) {
      lo = x1; x1 = x2; f1 = f2;
      x2 = lo + PHI * (hi - lo); f2 = maxChroma(x2, h, G);
    } else {
      hi = x2; x2 = x1; f2 = f1;
      x1 = hi - PHI * (hi - lo); f1 = maxChroma(x1, h, G);
    }
  }
  const L = (lo + hi) / 2;
  cusp = [L, maxChroma(L, h, G, 1e-6)];
  _cuspCache.set(key, cusp);
  return cusp;
}

function cuspMap(oklch, G, outGamutCoords) {
  if (oklch[0] >= 1) { outGamutCoords[0] = 1; outGamutCoords[1] = 1; outGamutCoords[2] = 1; return outGamutCoords; }
  if (oklch[0] <= 0) { outGamutCoords[0] = 0; outGamutCoords[1] = 0; outGamutCoords[2] = 0; return outGamutCoords; }
  convert(oklch, 'oklch', G, outGamutCoords);
  if (inRange(outGamutCoords, 0)) return outGamutCoords;

  const [Lc] = findCusp(oklch[2], G);
  const L0 = oklch[0], C0 = oklch[1];

  // P(t) = lerp((L0, C0) → (Lc, 0)); bisect for the boundary crossing.
  let lo = 0, hi = 1; // t=0 out of gamut (checked above), t=1 on the L axis: in
  for (let i = 0; i < 24; i++) {
    const t = (lo + hi) / 2;
    _lch[0] = L0 + t * (Lc - L0);
    _lch[1] = C0 * (1 - t);
    _lch[2] = oklch[2];
    convert(_lch, 'oklch', G, _gc);
    if (inRange(_gc, 0)) hi = t;
    else lo = t;
  }
  _lch[0] = L0 + hi * (Lc - L0);
  _lch[1] = C0 * (1 - hi);
  _lch[2] = oklch[2];
  convert(_lch, 'oklch', G, _gc);
  return clip(_gc, outGamutCoords);
}

// ---- public entry ----

const _in = [0, 0, 0];
const _mapped = [0, 0, 0];

/**
 * Map a color into a bounded RGB gamut. Input and output are in `space`.
 *
 * @param {number[]} coords
 * @param {object|string} space - the space `coords` is expressed in
 * @param {{gamut?: object|string, method?: 'css'|'cusp'|'clip'}} [opts]
 * @param {number[]} [out]
 */
export function toGamut(coords, space, opts = {}, out = [0, 0, 0]) {
  const { gamut = 'srgb', method = 'css' } = opts;
  const G = resolveRgbGamut(gamut, 'toGamut');
  const S = resolve(space);

  if (method === 'clip') {
    convert(coords, S, G, _mapped);
    clip(_mapped, _mapped);
    return convert(_mapped, G, S, out);
  }

  convert(coords, S, 'oklch', _in);
  if (method === 'css') cssMap(_in, G, _mapped);
  else if (method === 'cusp') cuspMap(_in, G, _mapped);
  else throw new Error(`whitepoint: unknown gamut mapping method "${method}" (have: css, cusp, clip)`);
  return convert(_mapped, G, S, out);
}
