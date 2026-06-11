// OKLab constants, from Björn Ottosson, "A perceptual color space for image
// processing" (2020), https://bottosson.github.io/posts/oklab/
//
// M1 maps linear sRGB → LMS; M2 maps non-linearized LMS′ (cube roots) → Lab.
// We transcribe only the two forward matrices from the source publication and
// compute everything else (inverses; the XYZ-side composition with the derived
// sRGB matrix). Ottosson's published inverse coefficients are themselves
// rounded to 10 digits and are NOT the exact inverses of his published forward
// matrices; computing inverses keeps our round trips exact to float64 instead
// of inheriting that rounding mismatch.

export const OKLAB_M1 = [
  0.4122214708, 0.5363325363, 0.0514459929,
  0.2119034982, 0.6806995451, 0.1073969566,
  0.0883024619, 0.2817188376, 0.6299787005,
];

export const OKLAB_M2 = [
  0.2104542553,  0.7936177850, -0.0040720468,
  1.9779984951, -2.4285922050,  0.4505937099,
  0.0259040371,  0.7827717662, -0.8086757660,
];
