// HDR perceptual spaces: ICtCp (BT.2100-2) and Jzazbz/JzCzhz (Safdar 2017).
//
// Both run through absolute luminance (relative Y = 1 → 203 cd/m², BT.2408)
// and the ST 2084 quantizer. Negative linear-light values are clamped to 0
// before PQ encoding (the quantizer is undefined below zero) — colors outside
// the Rec.2020 gamut therefore do not round-trip exactly; this matches
// BT.2100 signal semantics and ecosystem behavior. All inverse matrices are
// computed, never transcribed.

import { mul, invert, mulVec } from '../core/mat3.js';
import { rectToPolar, polarToRect } from '../core/polar.js';
import { Rec2020 } from './rgb.js';
import {
  YW, pqEncode, pqDecode, jzPqEncode, jzPqDecode,
  ICTCP_RGB_TO_LMS, ICTCP_LMS_TO_ITP,
  JZ_XYZ_TO_LMS, JZ_LMS_TO_IAB,
  JZ_B, JZ_G, JZ_D, JZ_D0,
} from '../constants/hdr.js';

// ---- ICtCp ----

// XYZ-D65 (relative) → LMS, with the BT.2100 RGB→LMS exact rationals
// composed onto our derived rec2020 matrix. Scale by YW folds in linearly.
const ICTCP_XYZ_TO_LMS = mul(ICTCP_RGB_TO_LMS, Rec2020.m.fromXyz).map((v) => v * YW);
const ICTCP_LMS_TO_XYZ = invert(ICTCP_XYZ_TO_LMS);
const ITP_TO_LMS = invert(ICTCP_LMS_TO_ITP);

const TMP = [0, 0, 0];

export const ICtCp = {
  id: 'ictcp',
  fromXyz(xyz, out = [0, 0, 0]) {
    mulVec(ICTCP_XYZ_TO_LMS, xyz, TMP);
    TMP[0] = pqEncode(TMP[0]);
    TMP[1] = pqEncode(TMP[1]);
    TMP[2] = pqEncode(TMP[2]);
    return mulVec(ICTCP_LMS_TO_ITP, TMP, out);
  },
  toXyz(itp, out = [0, 0, 0]) {
    mulVec(ITP_TO_LMS, itp, TMP);
    TMP[0] = pqDecode(TMP[0]);
    TMP[1] = pqDecode(TMP[1]);
    TMP[2] = pqDecode(TMP[2]);
    return mulVec(ICTCP_LMS_TO_XYZ, TMP, out);
  },
};

// ---- Jzazbz ----

const JZ_LMS_TO_XYZP = invert(JZ_XYZ_TO_LMS);
const JZ_IAB_TO_LMS = invert(JZ_LMS_TO_IAB);

export const Jzazbz = {
  id: 'jzazbz',
  fromXyz(xyz, out = [0, 0, 0]) {
    const X = Math.max(xyz[0] * YW, 0);
    const Y = Math.max(xyz[1] * YW, 0);
    const Z = Math.max(xyz[2] * YW, 0);
    const xp = JZ_B * X - (JZ_B - 1) * Z;
    const yp = JZ_G * Y - (JZ_G - 1) * X;
    const l = jzPqEncode(JZ_XYZ_TO_LMS[0] * xp + JZ_XYZ_TO_LMS[1] * yp + JZ_XYZ_TO_LMS[2] * Z);
    const m = jzPqEncode(JZ_XYZ_TO_LMS[3] * xp + JZ_XYZ_TO_LMS[4] * yp + JZ_XYZ_TO_LMS[5] * Z);
    const s = jzPqEncode(JZ_XYZ_TO_LMS[6] * xp + JZ_XYZ_TO_LMS[7] * yp + JZ_XYZ_TO_LMS[8] * Z);
    const iz = 0.5 * l + 0.5 * m;
    out[0] = ((1 + JZ_D) * iz) / (1 + JZ_D * iz) - JZ_D0;
    out[1] = JZ_LMS_TO_IAB[3] * l + JZ_LMS_TO_IAB[4] * m + JZ_LMS_TO_IAB[5] * s;
    out[2] = JZ_LMS_TO_IAB[6] * l + JZ_LMS_TO_IAB[7] * m + JZ_LMS_TO_IAB[8] * s;
    return out;
  },
  toXyz(jab, out = [0, 0, 0]) {
    const jz = jab[0] + JZ_D0;
    const iz = jz / (1 + JZ_D - JZ_D * jz);
    TMP[0] = iz; TMP[1] = jab[1]; TMP[2] = jab[2];
    mulVec(JZ_IAB_TO_LMS, TMP, TMP);
    const l = jzPqDecode(TMP[0]);
    const m = jzPqDecode(TMP[1]);
    const s = jzPqDecode(TMP[2]);
    const xp = JZ_LMS_TO_XYZP[0] * l + JZ_LMS_TO_XYZP[1] * m + JZ_LMS_TO_XYZP[2] * s;
    const yp = JZ_LMS_TO_XYZP[3] * l + JZ_LMS_TO_XYZP[4] * m + JZ_LMS_TO_XYZP[5] * s;
    const Z = JZ_LMS_TO_XYZP[6] * l + JZ_LMS_TO_XYZP[7] * m + JZ_LMS_TO_XYZP[8] * s;
    const X = (xp + (JZ_B - 1) * Z) / JZ_B;
    const Y = (yp + (JZ_G - 1) * X) / JZ_G;
    out[0] = X / YW;
    out[1] = Y / YW;
    out[2] = Z / YW;
    return out;
  },
};

const PTMP = [0, 0, 0];

export const JzCzhz = {
  id: 'jzczhz',
  fromXyz(xyz, out = [0, 0, 0]) {
    return rectToPolar(Jzazbz.fromXyz(xyz, PTMP), out);
  },
  toXyz(jch, out = [0, 0, 0]) {
    return Jzazbz.toXyz(polarToRect(jch, PTMP), out);
  },
};
