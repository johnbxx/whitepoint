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

  // ITU-R BT.709-6 — sRGB primaries, scene-referred OETF
  bt709: {
    r: [0.640, 0.330],
    g: [0.300, 0.600],
    b: [0.150, 0.060],
    white: CSS_D65,
    transfer: 'bt709',
  },

  // SMPTE RP 431-2 — DCI cinema P3: same primaries as Display P3 but the
  // DCI calibration white (~6300 K, greenish) and a pure 2.6 gamma.
  // A non-D65 white handled by the illuminant lab, like ProPhoto's D50.
  'dci-p3': {
    r: [0.680, 0.320],
    g: [0.265, 0.690],
    b: [0.150, 0.060],
    white: [0.314, 0.351],
    transfer: 'gamma26',
  },

  // AMPAS ACES (TB-2014-004). The ACES white point (~D60) is its own
  // chromaticity, not a CIE D-series illuminant. AP0 deliberately spans
  // beyond the spectral locus (note the negative blue y).
  'aces2065-1': {
    r: [0.7347, 0.2653],
    g: [0.0000, 1.0000],
    b: [0.0001, -0.0770],
    white: [0.32168, 0.33767],
    transfer: 'linear',
  },

  // AP1 primaries (ACEScg working space, S-2014-004); also carries
  // ACEScc/ACEScct with their log transfers.
  acescg: {
    r: [0.713, 0.293],
    g: [0.165, 0.830],
    b: [0.128, 0.044],
    white: [0.32168, 0.33767],
    transfer: 'linear',
  },
};
