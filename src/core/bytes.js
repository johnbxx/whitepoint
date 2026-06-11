// The ONLY place rounding is allowed to exist (north star principle #3).
// Conversions never round; pixels do.

/** 0–1 float channels → 0–255 integers (clamped, rounded). */
export function toBytes(coords, out = [0, 0, 0]) {
  for (let i = 0; i < 3; i++) {
    const v = coords[i];
    out[i] = v <= 0 ? 0 : v >= 1 ? 255 : Math.round(v * 255);
  }
  return out;
}

/** 0–255 integers → 0–1 float channels. */
export function fromBytes(bytes, out = [0, 0, 0]) {
  out[0] = bytes[0] / 255;
  out[1] = bytes[1] / 255;
  out[2] = bytes[2] / 255;
  return out;
}

/** Hex string ('#aabbcc' or '#abc') → 0–1 float sRGB channels. */
export function fromHex(hex, out = [0, 0, 0]) {
  let s = hex.startsWith('#') ? hex.slice(1) : hex;
  if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  const n = parseInt(s, 16);
  out[0] = ((n >> 16) & 255) / 255;
  out[1] = ((n >> 8) & 255) / 255;
  out[2] = (n & 255) / 255;
  return out;
}

const BTMP = [0, 0, 0];

/** 0–1 float sRGB channels → '#aabbcc'. */
export function toHex(coords) {
  const b = toBytes(coords, BTMP);
  return '#' + ((1 << 24) | (b[0] << 16) | (b[1] << 8) | b[2]).toString(16).slice(1);
}
