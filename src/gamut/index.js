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
import { OKLAB_M2_INV, LMS_TO_XYZ } from '../spaces/oklab.js';
import { mul } from '../core/mat3.js';
import { transfer } from '../constants/transfer.js';

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

// ---- OKLab ↔ linear-RGB boundary evaluator ----
//
// For a fixed hue direction (a̅, b̅), LMS′ is affine in (L, C):
//   lms′ᵢ = αᵢ·L + kᵢ·C        (αᵢ = M2⁻¹ column 0, kᵢ = M2⁻¹·(0, a̅, b̅))
// so each linear RGB channel is Σᵢ Mⱼᵢ(αᵢL + kᵢC)³ — evaluable in ~20 flops
// without polar trig, transfer encoding, or function dispatch. Gamma encoding
// is monotone, so [0,1] bounds tested here are the gamut bounds.

const _okParams = new Map();

function okParams(G) {
  let p = _okParams.get(G.id);
  if (!p) {
    p = {
      M: mul(G.m.fromXyz, LMS_TO_XYZ), // LMS → linear G-RGB, precomposed
      al: OKLAB_M2_INV[0], am: OKLAB_M2_INV[3], as: OKLAB_M2_INV[6],
      l1: OKLAB_M2_INV[1], l2: OKLAB_M2_INV[2],
      m1: OKLAB_M2_INV[4], m2: OKLAB_M2_INV[5],
      s1: OKLAB_M2_INV[7], s2: OKLAB_M2_INV[8],
    };
    _okParams.set(G.id, p);
  }
  return p;
}

// linear RGB of OKLab(L, C·a̅, C·b̅) → out. No encode, no clamp.
function linRgbAtLC(p, kl, km, ks, L, C, out) {
  let l = p.al * L + kl * C;
  let m = p.am * L + km * C;
  let s = p.as * L + ks * C;
  l = l * l * l; m = m * m * m; s = s * s * s;
  const M = p.M;
  out[0] = M[0] * l + M[1] * m + M[2] * s;
  out[1] = M[3] * l + M[4] * m + M[5] * s;
  out[2] = M[6] * l + M[7] * m + M[8] * s;
  return out;
}

// ---- Numerical cusp (ground truth; kept for verification) ----

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

/**
 * Ground-truth cusp by golden-section search over L with bisection on C,
 * using full library conversions. Slow; exists to verify findCusp.
 */
export function findCuspNumerical(h, gamut) {
  const G = resolveRgbGamut(gamut, 'findCuspNumerical');
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
  return [L, maxChroma(L, h, G, 1e-6)];
}

// ---- Exact cusp ----
//
// At saturation s = C/L, lms′ᵢ = L(αᵢ + kᵢs), so channel j is
// L³·gⱼ(s) with gⱼ(s) = Σᵢ Mⱼᵢ(αᵢ + kᵢs)³ — independent of L. The cusp
// saturation is the smallest positive root of minⱼ gⱼ (a cubic per channel);
// the cusp lightness then scales the brightest channel to 1:
//   L_cusp = (1 / maxⱼ gⱼ(s*))^(1/3),  C_cusp = s*·L_cusp.
// Exact in the derive-don't-fit sense: no fitted coefficients anywhere
// (after Ottosson 2021, who fits only to seed his iteration — we bracket
// and bisect the cubic instead). Verified against findCuspNumerical in CI.

const _cuspCache = new Map();

export function findCusp(h, gamut) {
  const G = resolveRgbGamut(gamut, 'findCusp');
  const key = G.id + '|' + Math.round(h * 100);
  let cusp = _cuspCache.get(key);
  if (cusp) return cusp;

  const p = okParams(G);
  const hr = h * DEG2RAD;
  const a = Math.cos(hr), b = Math.sin(hr);
  const kl = p.l1 * a + p.l2 * b;
  const km = p.m1 * a + p.m2 * b;
  const ks = p.s1 * a + p.s2 * b;
  const M = p.M;

  // gⱼ(s) for all channels; returns [min, max] across j.
  const g = (s) => {
    let l = p.al + kl * s, m = p.am + km * s, q = p.as + ks * s;
    l = l * l * l; m = m * m * m; q = q * q * q;
    const r0 = M[0] * l + M[1] * m + M[2] * q;
    const r1 = M[3] * l + M[4] * m + M[5] * q;
    const r2 = M[6] * l + M[7] * m + M[8] * q;
    return [Math.min(r0, r1, r2), Math.max(r0, r1, r2)];
  };

  // g(0) = white = [1,1,1] by construction; march out geometrically to
  // bracket the first channel-zero crossing, then bisect.
  let lo = 0, hi = 0.05;
  while (g(hi)[0] > 0) {
    lo = hi;
    hi *= 2;
    if (hi > 16) throw new Error(`whitepoint: no cusp found for hue ${h} in "${G.id}"`);
  }
  for (let i = 0; i < 52; i++) {
    const mid = 0.5 * (lo + hi);
    if (g(mid)[0] > 0) lo = mid; else hi = mid;
  }
  const s = lo;
  const L = Math.cbrt(1 / g(s)[1]);
  cusp = [L, s * L];
  _cuspCache.set(key, cusp);
  return cusp;
}

const _lin = [0, 0, 0];

function cuspMap(oklch, G, outGamutCoords) {
  if (oklch[0] >= 1) { outGamutCoords[0] = 1; outGamutCoords[1] = 1; outGamutCoords[2] = 1; return outGamutCoords; }
  if (oklch[0] <= 0) { outGamutCoords[0] = 0; outGamutCoords[1] = 0; outGamutCoords[2] = 0; return outGamutCoords; }

  const p = okParams(G);
  const hr = oklch[2] * DEG2RAD;
  const a = Math.cos(hr), b = Math.sin(hr);
  const kl = p.l1 * a + p.l2 * b;
  const km = p.m1 * a + p.m2 * b;
  const ks = p.s1 * a + p.s2 * b;
  const enc = transfer[G.transferName].encode;
  const L0 = oklch[0], C0 = oklch[1];

  linRgbAtLC(p, kl, km, ks, L0, C0, _lin);
  if (inRange(_lin, 0)) {
    outGamutCoords[0] = enc(_lin[0]); outGamutCoords[1] = enc(_lin[1]); outGamutCoords[2] = enc(_lin[2]);
    return outGamutCoords;
  }

  const [Lc] = findCusp(oklch[2], G);

  // P(t) = lerp((L0, C0) → (Lc, 0)); bisect for the boundary crossing using
  // the direct linear-RGB evaluator (~20 flops/test instead of a full convert).
  // 14 iterations resolve t to ~6e-5 — chroma error ≤ C·6e-5, three orders
  // below the 0.02 JND. (A guarded-Newton cubic intersection can replace the
  // bisection entirely; tracked in the optimization task.)
  let lo = 0, hi = 1; // t=0 out of gamut (checked above), t=1 on the L axis: in
  for (let i = 0; i < 14; i++) {
    const t = 0.5 * (lo + hi);
    linRgbAtLC(p, kl, km, ks, L0 + t * (Lc - L0), C0 * (1 - t), _lin);
    if (inRange(_lin, 0)) hi = t;
    else lo = t;
  }
  linRgbAtLC(p, kl, km, ks, L0 + hi * (Lc - L0), C0 * (1 - hi), _lin);
  clip(_lin, _lin);
  outGamutCoords[0] = enc(_lin[0]); outGamutCoords[1] = enc(_lin[1]); outGamutCoords[2] = enc(_lin[2]);
  return outGamutCoords;
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
