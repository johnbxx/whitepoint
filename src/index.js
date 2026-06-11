// whitepoint — a research-grade color laboratory for the web.
// Every color space, every illuminant — digit-identical in JS, GLSL, and WGSL.

// Conversion engine
export { convert, spaces, resolve, registerRoute } from './core/convert.js';

// Space objects (tree-shakeable direct use: sRGB.toXyz(c, out) …)
export { sRGB, sRGBLinear, DisplayP3, A98RGB, ProPhotoRGB, Rec2020 } from './spaces/rgb.js';
export { OKLab, OKLCH, oklabToRgbDirect } from './spaces/oklab.js';
export { Lab, LCH } from './spaces/cielab.js';
export { HSL, HWB, hslToSrgb, srgbToHsl, hwbToSrgb, srgbToHwb } from './spaces/hsl.js';
export { XYZD65, XYZD50 } from './spaces/xyz.js';

// The illuminant lab
export { adapt, adaptMatrix } from './lab/adapt.js';
export { daylightXy, illuminantFromCCT } from './lab/cct.js';
export { illuminants, xyToXyz, CSS_D65, CSS_D50, CSS_D65_XYZ, CSS_D50_XYZ } from './constants/whitepoints.js';
export { cats } from './constants/cats.js';

// Gamut
export { inGamut, toGamut, clip, deltaEOK, findCusp, findCuspNumerical } from './gamut/index.js';

// Pixel boundary
export { toBytes, fromBytes, toHex, fromHex } from './core/bytes.js';

// Polar helpers
export { rectToPolar, polarToRect, DEG2RAD, RAD2DEG } from './core/polar.js';

// Low-level (matrix math, derivation) — for advanced/codegen use
export { mulVec, mul, invert } from './core/mat3.js';
export { deriveRgbMatrices } from './core/derive.js';
export { transfer } from './constants/transfer.js';
