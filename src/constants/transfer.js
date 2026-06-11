// Electro-optical transfer functions for the predefined RGB spaces.
// All are extended to negative input by sign mirroring, f(-v) = -f(v),
// matching CSS Color 4 sample code, so out-of-gamut values survive round trips.
//
// `decode` maps gamma-encoded → linear-light; `encode` is the inverse.
// Channels are 0–1 floats. No clamping, no rounding — ever.

// IEC 61966-2-1:1999 (sRGB). Display P3 (SMPTE EG 432-1) reuses this curve.
function srgbDecode(v) {
  const a = Math.abs(v);
  const m = a <= 0.04045 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
  return v < 0 ? -m : m;
}
function srgbEncode(v) {
  const a = Math.abs(v);
  const m = a <= 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055;
  return v < 0 ? -m : m;
}

// Adobe RGB (1998), §4.3.1.2: pure power, gamma = 563/256 = 2.19921875 exactly.
const A98_GAMMA = 563 / 256;
function a98Decode(v) {
  const m = Math.pow(Math.abs(v), A98_GAMMA);
  return v < 0 ? -m : m;
}
function a98Encode(v) {
  const m = Math.pow(Math.abs(v), 1 / A98_GAMMA);
  return v < 0 ? -m : m;
}

// ROMM RGB (ISO 22028-2): gamma 1.8 with a linear segment below Et = 1/512.
const PROPHOTO_ET = 1 / 512;
function prophotoDecode(v) {
  const a = Math.abs(v);
  const m = a <= 16 * PROPHOTO_ET ? a / 16 : Math.pow(a, 1.8);
  return v < 0 ? -m : m;
}
function prophotoEncode(v) {
  const a = Math.abs(v);
  const m = a >= PROPHOTO_ET ? Math.pow(a, 1 / 1.8) : 16 * a;
  return v < 0 ? -m : m;
}

// ITU-R BT.2020-2. α and β at the precision used by CSS Color 4 sample code
// (solutions of the C1-continuity conditions for the 0.45 power segment).
const REC2020_ALPHA = 1.09929682680944;
const REC2020_BETA = 0.018053968510807;
function rec2020Decode(v) {
  const a = Math.abs(v);
  const m = a < REC2020_BETA * 4.5 ? a / 4.5 : Math.pow((a + REC2020_ALPHA - 1) / REC2020_ALPHA, 1 / 0.45);
  return v < 0 ? -m : m;
}
function rec2020Encode(v) {
  const a = Math.abs(v);
  const m = a < REC2020_BETA ? 4.5 * a : REC2020_ALPHA * Math.pow(a, 0.45) - (REC2020_ALPHA - 1);
  return v < 0 ? -m : m;
}

const identity = (v) => v;

export const transfer = {
  srgb:     { decode: srgbDecode,     encode: srgbEncode },
  a98:      { decode: a98Decode,      encode: a98Encode },
  prophoto: { decode: prophotoDecode, encode: prophotoEncode },
  rec2020:  { decode: rec2020Decode,  encode: rec2020Encode },
  linear:   { decode: identity,       encode: identity },
};
