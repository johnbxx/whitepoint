// The hub itself (XYZ-D65) and its D50-referenced sibling, connected by
// computed Bradford matrices (CSS Color 4 white points).

import { adaptMatrix } from '../lab/adapt.js';
import { mulVec } from '../core/mat3.js';
import { CSS_D50, CSS_D65 } from '../constants/whitepoints.js';

export const XYZD65 = {
  id: 'xyz-d65',
  toXyz(c, out = [0, 0, 0]) {
    out[0] = c[0]; out[1] = c[1]; out[2] = c[2];
    return out;
  },
  fromXyz(xyz, out = [0, 0, 0]) {
    out[0] = xyz[0]; out[1] = xyz[1]; out[2] = xyz[2];
    return out;
  },
};

const M_D50_TO_D65 = adaptMatrix(CSS_D50, CSS_D65);
const M_D65_TO_D50 = adaptMatrix(CSS_D65, CSS_D50);

export const XYZD50 = {
  id: 'xyz-d50',
  m: { toXyz: M_D50_TO_D65, fromXyz: M_D65_TO_D50 },
  toXyz(c, out = [0, 0, 0]) { return mulVec(M_D50_TO_D65, c, out); },
  fromXyz(xyz, out = [0, 0, 0]) { return mulVec(M_D65_TO_D50, xyz, out); },
};
