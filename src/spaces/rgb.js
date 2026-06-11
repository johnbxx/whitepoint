// The predefined RGB spaces. Matrices are derived from cited primaries at
// module load (core/derive.js); ProPhoto's native-D50 matrix is precomposed
// with a Bradford adaptation into the XYZ-D65 hub so every space exposes the
// same { toXyz, fromXyz } contract against one hub.

import { deriveRgbMatrices } from '../core/derive.js';
import { rgbSpaceDefs } from '../constants/primaries.js';
import { transfer } from '../constants/transfer.js';
import { adaptMatrix } from '../lab/adapt.js';
import { mul, invert } from '../core/mat3.js';
import { CSS_D50, CSS_D65 } from '../constants/whitepoints.js';

function makeRgbSpace(id, M, Minv, transferName) {
  const { decode, encode } = transfer[transferName];
  const m00 = M[0], m01 = M[1], m02 = M[2],
        m10 = M[3], m11 = M[4], m12 = M[5],
        m20 = M[6], m21 = M[7], m22 = M[8];
  const i00 = Minv[0], i01 = Minv[1], i02 = Minv[2],
        i10 = Minv[3], i11 = Minv[4], i12 = Minv[5],
        i20 = Minv[6], i21 = Minv[7], i22 = Minv[8];

  return {
    id,
    transferName,
    // Linear part (including any white-point precomposition) — consumed by
    // route precomposition, codegen, and the verification rig.
    m: { toXyz: M, fromXyz: Minv },
    toXyz(v, out = [0, 0, 0]) {
      const r = decode(v[0]), g = decode(v[1]), b = decode(v[2]);
      out[0] = m00 * r + m01 * g + m02 * b;
      out[1] = m10 * r + m11 * g + m12 * b;
      out[2] = m20 * r + m21 * g + m22 * b;
      return out;
    },
    fromXyz(xyz, out = [0, 0, 0]) {
      const x = xyz[0], y = xyz[1], z = xyz[2];
      out[0] = encode(i00 * x + i01 * y + i02 * z);
      out[1] = encode(i10 * x + i11 * y + i12 * z);
      out[2] = encode(i20 * x + i21 * y + i22 * z);
      return out;
    },
  };
}

function build(id, defId = id) {
  const def = rgbSpaceDefs[defId];
  let { toXyz, fromXyz } = deriveRgbMatrices(def);
  if (def.white !== CSS_D65) {
    // Native non-D65 space (ProPhoto): fold the Bradford adaptation into the
    // linear matrix so the hub stays XYZ-D65 with zero extra cost per call.
    toXyz = mul(adaptMatrix(def.white, CSS_D65), toXyz);
    fromXyz = invert(toXyz);
  }
  return { toXyz, fromXyz, transfer: def.transfer };
}

const _srgb = build('srgb');
const _p3 = build('display-p3');
const _a98 = build('a98-rgb');
const _prophoto = build('prophoto-rgb');
const _rec2020 = build('rec2020');
const _dci = build('dci-p3');
const _ap0 = build('aces2065-1');
const _ap1 = build('acescg');

export const sRGB = makeRgbSpace('srgb', _srgb.toXyz, _srgb.fromXyz, 'srgb');
export const sRGBLinear = makeRgbSpace('srgb-linear', _srgb.toXyz, _srgb.fromXyz, 'linear');
export const DisplayP3 = makeRgbSpace('display-p3', _p3.toXyz, _p3.fromXyz, 'srgb');
export const A98RGB = makeRgbSpace('a98-rgb', _a98.toXyz, _a98.fromXyz, 'a98');
export const ProPhotoRGB = makeRgbSpace('prophoto-rgb', _prophoto.toXyz, _prophoto.fromXyz, 'prophoto');
export const Rec2020 = makeRgbSpace('rec2020', _rec2020.toXyz, _rec2020.fromXyz, 'rec2020');

// Film & broadcast family. BT.709 shares sRGB's primaries (and therefore its
// derived matrices — asserted in CI) but encodes with the scene OETF.
export const BT709 = makeRgbSpace('bt709', _srgb.toXyz, _srgb.fromXyz, 'bt709');
export const DCIP3 = makeRgbSpace('dci-p3', _dci.toXyz, _dci.fromXyz, 'gamma26');
export const ACES2065_1 = makeRgbSpace('aces2065-1', _ap0.toXyz, _ap0.fromXyz, 'linear');
export const ACEScg = makeRgbSpace('acescg', _ap1.toXyz, _ap1.fromXyz, 'linear');
export const ACEScc = makeRgbSpace('acescc', _ap1.toXyz, _ap1.fromXyz, 'acescc');
export const ACEScct = makeRgbSpace('acescct', _ap1.toXyz, _ap1.fromXyz, 'acescct');

export { CSS_D50, CSS_D65 };
