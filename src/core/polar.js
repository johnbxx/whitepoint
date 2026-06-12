// Shared polar ↔ rectangular helpers for the L/C/H family.
// Hue is degrees in [0, 360). Hue of an achromatic color (C = 0) is
// mathematically undefined; we return 0 and document it, per CSS convention.

/** Degrees → radians. */
export const DEG2RAD = Math.PI / 180;
/** Radians → degrees. */
export const RAD2DEG = 180 / Math.PI;

/** [L, a, b] → [L, C, H] */
export function rectToPolar(v, out = [0, 0, 0]) {
  const a = v[1], b = v[2];
  let h = Math.atan2(b, a) * RAD2DEG;
  if (h < 0) h += 360;
  out[0] = v[0];
  out[1] = Math.sqrt(a * a + b * b);
  out[2] = h;
  return out;
}

/** [L, C, H] → [L, a, b] */
export function polarToRect(v, out = [0, 0, 0]) {
  const hRad = v[2] * DEG2RAD;
  const c = v[1];
  out[0] = v[0];
  out[1] = c * Math.cos(hRad);
  out[2] = c * Math.sin(hRad);
  return out;
}
