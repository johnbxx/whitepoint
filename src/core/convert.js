// convert(coords, from, to, out) — the generic engine.
//
// Routing policy, in order:
//   1. same space → copy
//   2. registered direct route (definitional pairs like hsl↔srgb and
//      precomposed hot paths like oklch→srgb)
//   3. RGB↔RGB → lazily precompose the two linear matrices into one
//   4. hub: to.fromXyz(from.toXyz(c))
//
// Spaces are plain objects; strings are resolved through the registry.

import {
  sRGB, sRGBLinear, DisplayP3, A98RGB, ProPhotoRGB, Rec2020,
  BT709, DCIP3, ACES2065_1, ACEScg, ACEScc, ACEScct,
  Rec2100PQ, Rec2100HLG,
} from '../spaces/rgb.js';
import { DIN99o, DIN99oLCH } from '../spaces/din99o.js';
import { CAM16JCh, CAM16UCS, HCT } from '../spaces/cam16.js';
import { HSLuv, HPLuv } from '../spaces/hsluv.js';
import { HunterLab, XYB } from '../spaces/misc.js';
import { YCbCr601Full, YCbCr709Limited } from '../spaces/ycbcr.js';
import { OKLab, OKLCH, oklabToRgbDirect } from '../spaces/oklab.js';
import { Lab, LCH } from '../spaces/cielab.js';
import { HSL, HWB, hslToSrgb, srgbToHsl, hwbToSrgb, srgbToHwb } from '../spaces/hsl.js';
import { XYZD65, XYZD50 } from '../spaces/xyz.js';
import { ICtCp, Jzazbz, JzCzhz } from '../spaces/hdr.js';
import { Luv, LCHuv } from '../spaces/luv.js';
import { HSV, HSI, hsvToSrgb, srgbToHsv, hsiToSrgb, srgbToHsi } from '../spaces/hsv.js';
import { OKHSL, OKHSV } from '../spaces/okhsl.js';
import { rectToPolar, polarToRect } from './polar.js';
import { transfer } from '../constants/transfer.js';
import { mul } from './mat3.js';

/** The space registry: every id convert() accepts, mapped to its space object. */
export const spaces = {
  'srgb': sRGB,
  'srgb-linear': sRGBLinear,
  'display-p3': DisplayP3,
  'a98-rgb': A98RGB,
  'prophoto-rgb': ProPhotoRGB,
  'rec2020': Rec2020,
  'oklab': OKLab,
  'oklch': OKLCH,
  'lab': Lab,
  'lch': LCH,
  'hsl': HSL,
  'hwb': HWB,
  'xyz-d65': XYZD65,
  'xyz': XYZD65,
  'xyz-d50': XYZD50,
  'ictcp': ICtCp,
  'jzazbz': Jzazbz,
  'jzczhz': JzCzhz,
  'luv': Luv,
  'lchuv': LCHuv,
  'hsv': HSV,
  'hsi': HSI,
  'okhsl': OKHSL,
  'okhsv': OKHSV,
  'bt709': BT709,
  'dci-p3': DCIP3,
  'aces2065-1': ACES2065_1,
  'acescg': ACEScg,
  'acescc': ACEScc,
  'acescct': ACEScct,
  'rec2100-pq': Rec2100PQ,
  'rec2100-hlg': Rec2100HLG,
  'din99o': DIN99o,
  'din99o-lch': DIN99oLCH,
  'cam16': CAM16JCh,
  'cam16-ucs': CAM16UCS,
  'hct': HCT,
  'hsluv': HSLuv,
  'hpluv': HPLuv,
  'hunter-lab': HunterLab,
  'xyb': XYB,
  // No bare 'ycbcr' — by design. See spaces/ycbcr.js and makeYCbCr().
  'ycbcr-601-full': YCbCr601Full,
  'ycbcr-709-limited': YCbCr709Limited,
};

/** Resolve a space id string to its registry object. Throws on unknown ids. */
export function resolve(space) {
  if (typeof space === 'string') {
    const s = spaces[space];
    if (!s) throw new Error(`whitepoint: unknown color space "${space}" (have: ${Object.keys(spaces).join(', ')})`);
    return s;
  }
  return space;
}

const routes = new Map();

/** Register a precomposed direct conversion for a space pair, bypassing the XYZ hub. */
export function registerRoute(fromId, toId, fn) {
  routes.set(fromId + '|' + toId, fn);
}

// --- Definitional direct routes (never touch the hub) ---

registerRoute('hsl', 'srgb', hslToSrgb);
registerRoute('srgb', 'hsl', srgbToHsl);
registerRoute('hwb', 'srgb', hwbToSrgb);
registerRoute('srgb', 'hwb', srgbToHwb);

const HTMP = [0, 0, 0];
registerRoute('hsl', 'hwb', (c, out) => srgbToHwb(hslToSrgb(c, HTMP), out));
registerRoute('hwb', 'hsl', (c, out) => srgbToHsl(hwbToSrgb(c, HTMP), out));
registerRoute('hsv', 'srgb', hsvToSrgb);
registerRoute('srgb', 'hsv', srgbToHsv);
registerRoute('hsi', 'srgb', hsiToSrgb);
registerRoute('srgb', 'hsi', srgbToHsi);

registerRoute('oklab', 'oklch', (c, out) => rectToPolar(c, out));
registerRoute('oklch', 'oklab', (c, out) => polarToRect(c, out));
registerRoute('lab', 'lch', (c, out) => rectToPolar(c, out));
registerRoute('lch', 'lab', (c, out) => polarToRect(c, out));

// --- Precomposed hot paths: OK family → display RGB spaces ---

const PTMP = [0, 0, 0];
for (const target of [sRGB, DisplayP3, Rec2020]) {
  const direct = oklabToRgbDirect(target);
  const { encode } = transfer[target.transferName];
  const wrapped = (lab, out = [0, 0, 0]) => {
    direct(lab, out);
    out[0] = encode(out[0]);
    out[1] = encode(out[1]);
    out[2] = encode(out[2]);
    return out;
  };
  registerRoute('oklab', target.id, wrapped);
  registerRoute('oklch', target.id, (lch, out = [0, 0, 0]) => wrapped(polarToRect(lch, PTMP), out));
}

// --- Lazy RGB↔RGB precomposition ---

function buildRgbRoute(F, T) {
  const M = mul(T.m.fromXyz, F.m.toXyz); // F-linear → T-linear in one matrix
  const m0 = M[0], m1 = M[1], m2 = M[2], m3 = M[3], m4 = M[4], m5 = M[5], m6 = M[6], m7 = M[7], m8 = M[8];
  const { decode } = transfer[F.transferName];
  const { encode } = transfer[T.transferName];
  return (c, out = [0, 0, 0]) => {
    const r = decode(c[0]), g = decode(c[1]), b = decode(c[2]);
    out[0] = encode(m0 * r + m1 * g + m2 * b);
    out[1] = encode(m3 * r + m4 * g + m5 * b);
    out[2] = encode(m6 * r + m7 * g + m8 * b);
    return out;
  };
}

const TMP = [0, 0, 0];

// Hot-path dispatch: no string keys, no allocation. Routes are cached on an
// object-keyed map per source space, with a last-pair memo in front — real
// workloads convert the same pair millions of times in a row.
const _routeCache = new WeakMap();
let _lastF = null, _lastT = null, _lastRoute = null;

function lookupRoute(F, T) {
  let m = _routeCache.get(F);
  if (m === undefined) _routeCache.set(F, (m = new Map()));
  let route = m.get(T);
  if (route === undefined) {
    route = routes.get(F.id + '|' + T.id);
    if (route === undefined) {
      route = (F.m && T.m && F.transferName !== undefined && T.transferName !== undefined)
        ? buildRgbRoute(F, T)
        : null; // null: use the hub
    }
    m.set(T, route);
  }
  _lastF = F; _lastT = T; _lastRoute = route;
  return route;
}

/**
 * Convert coordinates between any two color spaces.
 *
 * @param {number[]} coords - input coordinates (length 3)
 * @param {object|string} from - source space (object or id)
 * @param {object|string} to - destination space (object or id)
 * @param {number[]} [out] - optional output array (zero-allocation hot loops)
 */
export function convert(coords, from, to, out = [0, 0, 0]) {
  const F = typeof from === 'string' ? resolve(from) : from;
  const T = typeof to === 'string' ? resolve(to) : to;
  if (F === T) {
    out[0] = coords[0]; out[1] = coords[1]; out[2] = coords[2];
    return out;
  }
  const route = (F === _lastF && T === _lastT) ? _lastRoute : lookupRoute(F, T);
  if (route !== null) return route(coords, out);
  return T.fromXyz(F.toXyz(coords, TMP), out);
}

/**
 * Convert an interleaved buffer of coordinates — [x0,y0,z0, x1,y1,z1, …] —
 * between two color spaces. The route is resolved once and the loop runs
 * allocation-free: a megapixel converts in one call at the cost of the
 * optimal hand-written zero-alloc loop (~46 ns/px for oklch→srgb), 1.75×
 * faster than the idiomatic fresh-array-per-pixel pattern. The point is
 * that you don't have to know how to write that loop.
 *
 * @param {ArrayLike<number>} src - length must be a multiple of 3
 * @param {object|string} from - source space (object or id)
 * @param {object|string} to - destination space (object or id)
 * @param {number[]|Float32Array|Float64Array} [dst] - defaults to src (in place)
 */
export function convertBuffer(src, from, to, dst = src) {
  if (src.length % 3 !== 0) {
    throw new RangeError(`whitepoint: buffer length ${src.length} is not a multiple of 3`);
  }
  if (dst.length < src.length) {
    throw new RangeError(`whitepoint: dst length ${dst.length} < src length ${src.length}`);
  }
  const F = typeof from === 'string' ? resolve(from) : from;
  const T = typeof to === 'string' ? resolve(to) : to;
  if (F === T) {
    if (dst !== src) for (let i = 0; i < src.length; i++) dst[i] = src[i];
    return dst;
  }
  const route = lookupRoute(F, T);
  const tmp = [0, 0, 0], mid = [0, 0, 0];
  for (let i = 0; i < src.length; i += 3) {
    tmp[0] = src[i]; tmp[1] = src[i + 1]; tmp[2] = src[i + 2];
    if (route !== null) route(tmp, tmp);
    else T.fromXyz(F.toXyz(tmp, mid), tmp);
    dst[i] = tmp[0]; dst[i + 1] = tmp[1]; dst[i + 2] = tmp[2];
  }
  return dst;
}
