// Primaries and white points for the predefined RGB spaces, as CIE 1931 xy.
// These are the *only* RGB colorimetry constants in the library — every
// RGB↔XYZ matrix is derived from this table at module load (see core/derive.js)
// and checked against published spec matrices in CI.
//
// Values per CSS Color 4 §10.2, which inherits them from the originating
// standards cited per space.

import { CSS_D65, CSS_D50 } from './whitepoints.js';

export const rgbSpaceDefs = {
  // IEC 61966-2-1:1999
  srgb: {
    r: [0.640, 0.330],
    g: [0.300, 0.600],
    b: [0.150, 0.060],
    white: CSS_D65,
    transfer: 'srgb',
  },

  // SMPTE EG 432-1:2010 primaries with D65 white ("Display P3")
  'display-p3': {
    r: [0.680, 0.320],
    g: [0.265, 0.690],
    b: [0.150, 0.060],
    white: CSS_D65,
    transfer: 'srgb', // P3 reuses the sRGB curve
  },

  // Adobe RGB (1998), §4.3
  'a98-rgb': {
    r: [0.6400, 0.3300],
    g: [0.2100, 0.7100],
    b: [0.1500, 0.0600],
    white: CSS_D65,
    transfer: 'a98',
  },

  // ROMM RGB, ISO 22028-2:2013 — native D50 white point
  'prophoto-rgb': {
    r: [0.734699, 0.265301],
    g: [0.159597, 0.840403],
    b: [0.036598, 0.000105],
    white: CSS_D50,
    transfer: 'prophoto',
  },

  // ITU-R BT.2020-2
  rec2020: {
    r: [0.708, 0.292],
    g: [0.170, 0.797],
    b: [0.131, 0.046],
    white: CSS_D65,
    transfer: 'rec2020',
  },
};
