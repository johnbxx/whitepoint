// Per-space conversion chains as declarative op descriptors, built from the
// SAME constants the JS functions use. The emitters (emit.js) render these
// into JS, GLSL, or WGSL — this is the "single-sourced constants" guarantee:
// there is no second copy of any matrix anywhere in the pipeline.
//
// Op kinds:
//   { k: 'mat3',   m }          3×3 multiply
//   { k: 'affine', m, b }       3×3 multiply plus offset
//   { k: 'transfer', name, dir} per-channel transfer function ('decode'|'encode')
//   { k: 'cbrt3' } / { k: 'cube3' }
//   { k: 'labF3' } / { k: 'labFInv3' }
//   { k: 'divW', w } / { k: 'mulW', w }   per-channel divide/multiply by white
//   { k: 'polarToRect' } / { k: 'rectToPolar' }   L/C/H° ↔ L/a/b
//
// HSL and HWB are deliberately absent from v0 codegen (max/min/branch-heavy;
// they'll land with the gamut-mapping shader work).

import {
  sRGB, sRGBLinear, DisplayP3, A98RGB, ProPhotoRGB, Rec2020,
  BT709, DCIP3, ACES2065_1, ACEScg, ACEScc, ACEScct, Rec2100PQ, Rec2100HLG,
} from '../spaces/rgb.js';
import { XYZ_TO_LMS, LMS_TO_XYZ, OKLAB_M2_INV } from '../spaces/oklab.js';
import { OKLAB_M2 } from '../constants/oklab.js';
import { adaptMatrix } from '../lab/adapt.js';
import { CSS_D65, CSS_D50, CSS_D50_XYZ } from '../constants/whitepoints.js';
import {
  ICTCP_XYZ_TO_LMS, ICTCP_LMS_TO_XYZ, ITP_TO_LMS,
  JZ_LMS_TO_XYZP, JZ_IAB_TO_LMS,
} from '../spaces/hdr.js';
import { ICTCP_LMS_TO_ITP, JZ_XYZ_TO_LMS, JZ_LMS_TO_IAB, JZ_B, JZ_G, YW } from '../constants/hdr.js';
import { invert } from '../core/mat3.js';

function rgbChains(space) {
  const toXyzOps = [];
  if (space.transferName !== 'linear') toXyzOps.push({ k: 'transfer', name: space.transferName, dir: 'decode' });
  toXyzOps.push({ k: 'mat3', m: space.m.toXyz });
  const fromXyzOps = [{ k: 'mat3', m: space.m.fromXyz }];
  if (space.transferName !== 'linear') fromXyzOps.push({ k: 'transfer', name: space.transferName, dir: 'encode' });
  return { toXyzOps, fromXyzOps };
}

const oklabChains = {
  toXyzOps: [
    { k: 'mat3', m: OKLAB_M2_INV },
    { k: 'cube3' },
    { k: 'mat3', m: LMS_TO_XYZ },
  ],
  fromXyzOps: [
    { k: 'mat3', m: XYZ_TO_LMS },
    { k: 'cbrt3' },
    { k: 'mat3', m: OKLAB_M2 },
  ],
};

const M_D65_TO_D50 = adaptMatrix(CSS_D65, CSS_D50);
const M_D50_TO_D65 = adaptMatrix(CSS_D50, CSS_D65);

// Lab's linear shell as affine ops (the nonlinear core is labF3/labFInv3):
// forward:  [fx,fy,fz] → [116fy−16, 500(fx−fy), 200(fy−fz)]
// inverse:  [L,a,b] → [L/116 + a/500 + 16/116, L/116 + 16/116, L/116 − b/200 + 16/116]
const LAB_FWD = { m: [0, 116, 0, 500, -500, 0, 0, 200, -200], b: [-16, 0, 0] };
const LAB_INV = { m: [1 / 116, 1 / 500, 0, 1 / 116, 0, 0, 1 / 116, 0, -1 / 200], b: [16 / 116, 16 / 116, 16 / 116] };

const labChains = {
  toXyzOps: [
    { k: 'affine', m: LAB_INV.m, b: LAB_INV.b },
    { k: 'labFInv3' },
    { k: 'mulW', w: CSS_D50_XYZ },
    { k: 'mat3', m: M_D50_TO_D65 },
  ],
  fromXyzOps: [
    { k: 'mat3', m: M_D65_TO_D50 },
    { k: 'divW', w: CSS_D50_XYZ },
    { k: 'labF3' },
    { k: 'affine', m: LAB_FWD.m, b: LAB_FWD.b },
  ],
};

function polarize(chains) {
  return {
    toXyzOps: [{ k: 'polarToRect' }, ...chains.toXyzOps],
    fromXyzOps: [...chains.fromXyzOps, { k: 'rectToPolar' }],
  };
}

export const codegenSpaces = {
  'srgb': rgbChains(sRGB),
  'srgb-linear': rgbChains(sRGBLinear),
  'display-p3': rgbChains(DisplayP3),
  'a98-rgb': rgbChains(A98RGB),
  'prophoto-rgb': rgbChains(ProPhotoRGB),
  'rec2020': rgbChains(Rec2020),
  'oklab': oklabChains,
  'oklch': polarize(oklabChains),
  'lab': labChains,
  'lch': polarize(labChains),
  'xyz-d65': { toXyzOps: [], fromXyzOps: [] },
  'xyz': { toXyzOps: [], fromXyzOps: [] },
  'xyz-d50': {
    toXyzOps: [{ k: 'mat3', m: M_D50_TO_D65 }],
    fromXyzOps: [{ k: 'mat3', m: M_D65_TO_D50 }],
  },

  // Film & broadcast (Tier 1: transfer + derived matrices)
  'bt709': rgbChains(BT709),
  'dci-p3': rgbChains(DCIP3),
  'aces2065-1': rgbChains(ACES2065_1),
  'acescg': rgbChains(ACEScg),
  'acescc': rgbChains(ACEScc),
  'acescct': rgbChains(ACEScct),
  'rec2100-pq': rgbChains(Rec2100PQ),
  'rec2100-hlg': rgbChains(Rec2100HLG),

  // HDR perceptual (Tier 2: matrix → PQ → matrix chains)
  'ictcp': {
    toXyzOps: [
      { k: 'mat3', m: ITP_TO_LMS },
      { k: 'transfer', name: 'pqabs', dir: 'decode' },
      { k: 'mat3', m: ICTCP_LMS_TO_XYZ },
    ],
    fromXyzOps: [
      { k: 'mat3', m: ICTCP_XYZ_TO_LMS },
      { k: 'transfer', name: 'pqabs', dir: 'encode' },
      { k: 'mat3', m: ICTCP_LMS_TO_ITP },
    ],
  },
};

// Jzazbz pre-adaptation (xp = bX + (1−b)Z, yp = (1−g)X + gY) as a matrix —
// fused with the LMS matrix at emission time.
const JZ_PRE = [JZ_B, 0, 1 - JZ_B, 1 - JZ_G, JZ_G, 0, 0, 0, 1];

codegenSpaces['jzazbz'] = {
  toXyzOps: [
    { k: 'jzInv' },
    { k: 'mat3', m: JZ_IAB_TO_LMS },
    { k: 'transfer', name: 'jzpq', dir: 'decode' },
    { k: 'mat3', m: JZ_LMS_TO_XYZP },
    { k: 'mat3', m: invert(JZ_PRE) },
    { k: 'mulW', w: [1 / YW, 1 / YW, 1 / YW] },
  ],
  fromXyzOps: [
    { k: 'mulW', w: [YW, YW, YW] },
    { k: 'clamp0' },
    { k: 'mat3', m: JZ_PRE },
    { k: 'mat3', m: JZ_XYZ_TO_LMS },
    { k: 'transfer', name: 'jzpq', dir: 'encode' },
    { k: 'mat3', m: JZ_LMS_TO_IAB },
    { k: 'jzFwd' },
  ],
};
codegenSpaces['jzczhz'] = polarize(codegenSpaces['jzazbz']);
