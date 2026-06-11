// YCbCr — a FAMILY, not a space. The name silently encodes three decisions
// (luma matrix, signal range, underlying RGB primaries), so whitepoint
// refuses to register a bare 'ycbcr': the factory requires every choice
// explicitly, and only the two defensible defaults get registry names:
//
//   'ycbcr-601-full'    — what JPEG/JFIF actually stores (601 matrix on sRGB)
//   'ycbcr-709-limited' — what video files actually contain
//
// Luma coefficients are the standards' normative rounded values (BT.601-7
// §2.5.1: 0.299/0.114; BT.709-6 §3: 0.2126/0.0722; BT.2020-2 §4: 0.2627/
// 0.0593) — real systems implement the rounded constants, and CI asserts
// they match our DERIVED RGB matrices' Y rows to the published precision.
// YCbCr operates on gamma-encoded R'G'B' (it is luma, not luminance).
//
// Coordinates are 8-bit-referred normalized code values (code/255): full
// range puts achromatic Cb/Cr at 128/255; limited range maps per the
// standards' 219/224 scalings with exact rationals. Other bit depths scale
// by their own quantization rules — out of scope, documented.

import { sRGB, BT709, Rec2020 } from './rgb.js';

const VARIANTS = {
  '601': { kr: 0.299, kb: 0.114, base: () => sRGB },     // JFIF 1.02 convention
  '709': { kr: 0.2126, kb: 0.0722, base: () => BT709 },
  '2020': { kr: 0.2627, kb: 0.0593, base: () => Rec2020 }, // non-constant-luminance (NCL)
};

const Y_LO = 16 / 255;
const Y_SCALE = 219 / 255;
const C_MID = 128 / 255;
const C_SCALE = 224 / 255;

const TMP = [0, 0, 0];

/**
 * Build a YCbCr space. Both options are REQUIRED — there is no default
 * YCbCr, by design.
 *
 * @param {{matrix: '601'|'709'|'2020', range: 'full'|'limited'}} opts
 */
export function makeYCbCr(opts = {}) {
  const v = VARIANTS[opts.matrix];
  if (!v) throw new Error(`whitepoint: makeYCbCr requires matrix: '601' | '709' | '2020' (got ${JSON.stringify(opts.matrix)})`);
  if (opts.range !== 'full' && opts.range !== 'limited') {
    throw new Error(`whitepoint: makeYCbCr requires range: 'full' | 'limited' (got ${JSON.stringify(opts.range)})`);
  }
  const limited = opts.range === 'limited';
  const { kr, kb } = v;
  const kg = 1 - kr - kb;
  const base = v.base();

  return {
    id: `ycbcr-${opts.matrix}-${opts.range}`,
    toXyz(c, out = [0, 0, 0]) {
      let y, cb, cr;
      if (limited) {
        y = (c[0] - Y_LO) / Y_SCALE;
        cb = (c[1] - C_MID) / C_SCALE;
        cr = (c[2] - C_MID) / C_SCALE;
      } else {
        y = c[0];
        cb = c[1] - C_MID;
        cr = c[2] - C_MID;
      }
      const r = y + 2 * (1 - kr) * cr;
      const b = y + 2 * (1 - kb) * cb;
      TMP[0] = r;
      TMP[1] = (y - kr * r - kb * b) / kg;
      TMP[2] = b;
      return base.toXyz(TMP, out);
    },
    fromXyz(xyz, out = [0, 0, 0]) {
      base.fromXyz(xyz, TMP);
      const y = kr * TMP[0] + kg * TMP[1] + kb * TMP[2];
      const cb = (TMP[2] - y) / (2 * (1 - kb));
      const cr = (TMP[0] - y) / (2 * (1 - kr));
      if (limited) {
        out[0] = Y_LO + Y_SCALE * y;
        out[1] = C_MID + C_SCALE * cb;
        out[2] = C_MID + C_SCALE * cr;
      } else {
        out[0] = y;
        out[1] = C_MID + cb;
        out[2] = C_MID + cr;
      }
      return out;
    },
  };
}

export const YCbCr601Full = makeYCbCr({ matrix: '601', range: 'full' });
export const YCbCr709Limited = makeYCbCr({ matrix: '709', range: 'limited' });
