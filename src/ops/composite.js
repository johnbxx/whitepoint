// Porter-Duff compositing (Porter & Duff 1984; W3C Compositing & Blending
// Level 1) and the W3C blend modes — exact algebra on coordinates.
//
// Precision design:
//  - composite() and overStack() are PREMULTIPLIED-NATIVE: the one precision
//    sink in compositing is un-premultiplication (relative error amplifies as
//    1/alpha), so the pipeline keeps colors premultiplied and divides once,
//    at the boundary, by explicit unpremultiply().
//  - overStack() evaluates the N-layer closed form
//      P_out = Σᵢ Pᵢ·Πⱼ₍ⱼ<ᵢ₎(1 − αⱼ)
//    as a single front-to-back accumulation — strictly fewer roundings than
//    pairwise folding (verified within ulp bounds in CI).
//
// Space semantics: compositing is per-channel algebra and only physically
// meaningful in linear-light spaces (light adds linearly). Gamma sRGB is
// supported because CSS/Canvas composite there (spec-de-facto). Polar spaces
// are refused — Porter-Duff arithmetic on a hue angle is undefined.

import { resolve } from '../core/convert.js';

const POLAR = new Set(['hsl', 'hwb', 'lch', 'oklch']);

function checkSpace(space, caller) {
  const S = resolve(space);
  if (POLAR.has(S.id)) {
    throw new Error(`whitepoint: ${caller} is undefined on polar coordinates ("${S.id}") — use a rectangular space (linear-light recommended)`);
  }
  return S;
}

/** Straight [c0,c1,c2,a] → premultiplied. */
export function premultiply(c, out = [0, 0, 0, 0]) {
  const a = c[3];
  out[0] = c[0] * a; out[1] = c[1] * a; out[2] = c[2] * a; out[3] = a;
  return out;
}

/**
 * Premultiplied → straight. The division amplifies relative error by 1/alpha;
 * at alpha = 0 the color is undefined and channels are passed through.
 */
export function unpremultiply(c, out = [0, 0, 0, 0]) {
  const a = c[3];
  if (a === 0) {
    out[0] = c[0]; out[1] = c[1]; out[2] = c[2]; out[3] = 0;
    return out;
  }
  out[0] = c[0] / a; out[1] = c[1] / a; out[2] = c[2] / a; out[3] = a;
  return out;
}

// Porter-Duff factor pairs [Fs(as,ad), Fd(as,ad)]. With premultiplied colors
// every operator is P_out = Fs·P_s + Fd·P_d (alpha included — same form).
const PORTER_DUFF = {
  'clear':            [() => 0, () => 0],
  'copy':             [() => 1, () => 0],
  'destination':      [() => 0, () => 1],
  'source-over':      [() => 1, (as) => 1 - as],
  'destination-over': [(as, ad) => 1 - ad, () => 1],
  'source-in':        [(as, ad) => ad, () => 0],
  'destination-in':   [() => 0, (as) => as],
  'source-out':       [(as, ad) => 1 - ad, () => 0],
  'destination-out':  [() => 0, (as) => 1 - as],
  'source-atop':      [(as, ad) => ad, (as) => 1 - as],
  'destination-atop': [(as, ad) => 1 - ad, (as) => as],
  'xor':              [(as, ad) => 1 - ad, (as) => 1 - as],
  'lighter':          [() => 1, () => 1], // Porter-Duff "plus"; may exceed 1, not clamped (HDR-safe)
};

export const porterDuffOperators = Object.keys(PORTER_DUFF);

/**
 * Porter-Duff compositing of PREMULTIPLIED colors.
 *
 * @param {number[]} srcP - premultiplied [c0,c1,c2,a]
 * @param {number[]} dstP - premultiplied [c0,c1,c2,a]
 * @param {string} [op] - operator (default 'source-over')
 * @param {object|string} [space] - rectangular space (default 'srgb-linear')
 * @param {number[]} [out]
 */
export function composite(srcP, dstP, op = 'source-over', space = 'srgb-linear', out = [0, 0, 0, 0]) {
  checkSpace(space, 'composite');
  const f = PORTER_DUFF[op];
  if (!f) throw new Error(`whitepoint: unknown Porter-Duff operator "${op}" (have: ${porterDuffOperators.join(', ')})`);
  const as = srcP[3], ad = dstP[3];
  const fs = f[0](as, ad), fd = f[1](as, ad);
  out[0] = srcP[0] * fs + dstP[0] * fd;
  out[1] = srcP[1] * fs + dstP[1] * fd;
  out[2] = srcP[2] * fs + dstP[2] * fd;
  out[3] = as * fs + ad * fd;
  return out;
}

/**
 * Source-over of an entire layer stack (layers[0] on top), PREMULTIPLIED,
 * via the closed form — one accumulation, no intermediate composites.
 */
export function overStack(layers, space = 'srgb-linear', out = [0, 0, 0, 0]) {
  checkSpace(space, 'overStack');
  out[0] = 0; out[1] = 0; out[2] = 0; out[3] = 0;
  let t = 1; // transmittance of everything above the current layer
  for (let i = 0; i < layers.length && t > 0; i++) {
    const L = layers[i];
    out[0] += t * L[0];
    out[1] += t * L[1];
    out[2] += t * L[2];
    out[3] += t * L[3];
    t *= 1 - L[3];
  }
  return out;
}

// ---- W3C blend modes (Compositing & Blending Level 1, §blending) ----

function softLightD(x) {
  return x <= 0.25 ? ((16 * x - 12) * x + 4) * x : Math.sqrt(x);
}

// Separable modes: B(Cb, Cs) per channel, spec-literal.
const SEPARABLE = {
  'normal': (cb, cs) => cs,
  'multiply': (cb, cs) => cb * cs,
  'screen': (cb, cs) => cb + cs - cb * cs,
  'overlay': (cb, cs) => SEPARABLE['hard-light'](cs, cb),
  'darken': (cb, cs) => Math.min(cb, cs),
  'lighten': (cb, cs) => Math.max(cb, cs),
  'color-dodge': (cb, cs) => (cb === 0 ? 0 : cs === 1 ? 1 : Math.min(1, cb / (1 - cs))),
  'color-burn': (cb, cs) => (cb === 1 ? 1 : cs === 0 ? 0 : 1 - Math.min(1, (1 - cb) / cs)),
  'hard-light': (cb, cs) => (cs <= 0.5 ? cb * 2 * cs : cb + (2 * cs - 1) - cb * (2 * cs - 1)),
  'soft-light': (cb, cs) => (cs <= 0.5
    ? cb - (1 - 2 * cs) * cb * (1 - cb)
    : cb + (2 * cs - 1) * (softLightD(cb) - cb)),
  'difference': (cb, cs) => Math.abs(cb - cs),
  'exclusion': (cb, cs) => cb + cs - 2 * cb * cs,
};

// Non-separable modes operate on the color triple, via the spec's
// luminosity/saturation machinery. Coefficients 0.3/0.59/0.11 are the
// SPEC'S, verbatim — not colorimetric Y. Implementing the citation.
function lum(c) {
  return 0.3 * c[0] + 0.59 * c[1] + 0.11 * c[2];
}

function clipColor(c) {
  const l = lum(c);
  const n = Math.min(c[0], c[1], c[2]);
  const x = Math.max(c[0], c[1], c[2]);
  if (n < 0) {
    for (let i = 0; i < 3; i++) c[i] = l + ((c[i] - l) * l) / (l - n);
  }
  if (x > 1) {
    for (let i = 0; i < 3; i++) c[i] = l + ((c[i] - l) * (1 - l)) / (x - l);
  }
  return c;
}

function setLum(c, l) {
  const d = l - lum(c);
  c[0] += d; c[1] += d; c[2] += d;
  return clipColor(c);
}

function sat(c) {
  return Math.max(c[0], c[1], c[2]) - Math.min(c[0], c[1], c[2]);
}

function setSat(c, s) {
  // order channel indices by value: lo ≤ mid ≤ hi
  let lo = 0, mid = 1, hi = 2;
  if (c[lo] > c[mid]) { const t = lo; lo = mid; mid = t; }
  if (c[mid] > c[hi]) { const t = mid; mid = hi; hi = t; }
  if (c[lo] > c[mid]) { const t = lo; lo = mid; mid = t; }
  if (c[hi] > c[lo]) {
    c[mid] = ((c[mid] - c[lo]) * s) / (c[hi] - c[lo]);
    c[hi] = s;
  } else {
    c[mid] = 0; c[hi] = 0;
  }
  c[lo] = 0;
  return c;
}

function blendNonSeparable(mode, cb, cs, out3) {
  const tmp = [0, 0, 0];
  switch (mode) {
    case 'hue':
      tmp[0] = cs[0]; tmp[1] = cs[1]; tmp[2] = cs[2];
      setLum(setSat(tmp, sat(cb)), lum(cb));
      break;
    case 'saturation':
      tmp[0] = cb[0]; tmp[1] = cb[1]; tmp[2] = cb[2];
      setLum(setSat(tmp, sat(cs)), lum(cb));
      break;
    case 'color':
      tmp[0] = cs[0]; tmp[1] = cs[1]; tmp[2] = cs[2];
      setLum(tmp, lum(cb));
      break;
    case 'luminosity':
      tmp[0] = cb[0]; tmp[1] = cb[1]; tmp[2] = cb[2];
      setLum(tmp, lum(cs));
      break;
    default:
      throw new Error(`whitepoint: unknown blend mode "${mode}"`);
  }
  out3[0] = tmp[0]; out3[1] = tmp[1]; out3[2] = tmp[2];
  return out3;
}

export const blendModes = [...Object.keys(SEPARABLE), 'hue', 'saturation', 'color', 'luminosity'];

const _B = [0, 0, 0];

/**
 * W3C blend-then-composite (source-over), on STRAIGHT-alpha colors, per the
 * spec's general formula: Cs′ = (1−αb)·Cs + αb·B(Cb, Cs).
 * The spec defines blending on gamma sRGB (the default here); other
 * rectangular spaces are accepted for deliberate off-label use.
 *
 * @param {number[]} src - straight [c0,c1,c2,a]
 * @param {number[]} dst - straight backdrop [c0,c1,c2,a]
 */
export function blend(src, dst, mode = 'normal', space = 'srgb', out = [0, 0, 0, 0]) {
  checkSpace(space, 'blend');
  const as = src[3], ab = dst[3];
  const sep = SEPARABLE[mode];
  if (!sep) blendNonSeparable(mode, dst, src, _B);

  const ao = as + ab * (1 - as);
  for (let i = 0; i < 3; i++) {
    const b = sep ? sep(dst[i], src[i]) : _B[i];
    const csPrime = (1 - ab) * src[i] + ab * b;
    const co = as * csPrime + ab * (1 - as) * dst[i]; // premultiplied result
    out[i] = ao === 0 ? 0 : co / ao;
  }
  out[3] = ao;
  return out;
}
