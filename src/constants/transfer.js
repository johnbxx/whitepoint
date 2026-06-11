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
export const A98_GAMMA = 563 / 256;
function a98Decode(v) {
  const m = Math.pow(Math.abs(v), A98_GAMMA);
  return v < 0 ? -m : m;
}
function a98Encode(v) {
  const m = Math.pow(Math.abs(v), 1 / A98_GAMMA);
  return v < 0 ? -m : m;
}

// ROMM RGB (ISO 22028-2): gamma 1.8 with a linear segment below Et = 1/512.
export const PROPHOTO_ET = 1 / 512;
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
export const REC2020_ALPHA = 1.09929682680944;
export const REC2020_BETA = 0.018053968510807;
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

// ITU-R BT.709-6 §1.2 OETF (scene-referred; the display-side BT.1886 EOTF is
// a different curve — this space encodes camera signal per the standard).
const BT709_ALPHA = 1.099;
const BT709_BETA = 0.018;
function bt709Decode(v) {
  const a = Math.abs(v);
  const m = a < BT709_BETA * 4.5 ? a / 4.5 : Math.pow((a + BT709_ALPHA - 1) / BT709_ALPHA, 1 / 0.45);
  return v < 0 ? -m : m;
}
function bt709Encode(v) {
  const a = Math.abs(v);
  const m = a < BT709_BETA ? 4.5 * a : BT709_ALPHA * Math.pow(a, 0.45) - (BT709_ALPHA - 1);
  return v < 0 ? -m : m;
}

// SMPTE RP 431-2 (DCI-P3 cinema): pure 2.6 gamma.
function gamma26Decode(v) {
  const m = Math.pow(Math.abs(v), 2.6);
  return v < 0 ? -m : m;
}
function gamma26Encode(v) {
  const m = Math.pow(Math.abs(v), 1 / 2.6);
  return v < 0 ? -m : m;
}

// ACEScc (AMPAS S-2014-003): pure-log encoding of AP1 scene-linear.
const ACESCC_MIN = (Math.log2(Math.pow(2, -16)) + 9.72) / 17.52; // encode(x ≤ 0)
function acesccDecode(v) {
  if (v < (9.72 - 15) / 17.52) return (Math.pow(2, v * 17.52 - 9.72) - Math.pow(2, -16)) * 2;
  if (v < (Math.log2(65504) + 9.72) / 17.52) return Math.pow(2, v * 17.52 - 9.72);
  return 65504;
}
function acesccEncode(v) {
  if (v <= 0) return ACESCC_MIN;
  if (v < Math.pow(2, -15)) return (Math.log2(Math.pow(2, -16) + v * 0.5) + 9.72) / 17.52;
  return (Math.log2(v) + 9.72) / 17.52;
}

// ACEScct (AMPAS S-2016-001): ACEScc with a linear toe.
const ACESCCT_A = 10.5402377416545;
const ACESCCT_B = 0.0729055341958355;
function acescctDecode(v) {
  if (v > 0.155251141552511) return Math.pow(2, v * 17.52 - 9.72);
  return (v - ACESCCT_B) / ACESCCT_A;
}
function acescctEncode(v) {
  if (v <= 0.0078125) return ACESCCT_A * v + ACESCCT_B;
  return (Math.log2(v) + 9.72) / 17.52;
}

const identity = (v) => v;

export const transfer = {
  srgb:     { decode: srgbDecode,     encode: srgbEncode },
  a98:      { decode: a98Decode,      encode: a98Encode },
  prophoto: { decode: prophotoDecode, encode: prophotoEncode },
  rec2020:  { decode: rec2020Decode,  encode: rec2020Encode },
  bt709:    { decode: bt709Decode,    encode: bt709Encode },
  gamma26:  { decode: gamma26Decode,  encode: gamma26Encode },
  acescc:   { decode: acesccDecode,   encode: acesccEncode },
  acescct:  { decode: acescctDecode,  encode: acescctEncode },
  linear:   { decode: identity,       encode: identity },
};
