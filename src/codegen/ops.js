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

import { sRGB, sRGBLinear, DisplayP3, A98RGB, ProPhotoRGB, Rec2020 } from '../spaces/rgb.js';
import { XYZ_TO_LMS, LMS_TO_XYZ, OKLAB_M2_INV } from '../spaces/oklab.js';
import { OKLAB_M2 } from '../constants/oklab.js';
import { adaptMatrix } from '../lab/adapt.js';
import { CSS_D65, CSS_D50, CSS_D50_XYZ } from '../constants/whitepoints.js';

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
};
