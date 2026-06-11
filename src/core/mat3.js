// 3×3 matrix utilities over flat row-major arrays [m00,m01,m02, m10,m11,m12, m20,m21,m22].
// All functions accept an optional `out` to avoid allocation in hot paths.

export function mulVec(m, v, out = [0, 0, 0]) {
  const x = v[0], y = v[1], z = v[2];
  out[0] = m[0] * x + m[1] * y + m[2] * z;
  out[1] = m[3] * x + m[4] * y + m[5] * z;
  out[2] = m[6] * x + m[7] * y + m[8] * z;
  return out;
}

export function mul(a, b, out = new Array(9)) {
  const a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  const b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  out[0] = a0 * b0 + a1 * b3 + a2 * b6;
  out[1] = a0 * b1 + a1 * b4 + a2 * b7;
  out[2] = a0 * b2 + a1 * b5 + a2 * b8;
  out[3] = a3 * b0 + a4 * b3 + a5 * b6;
  out[4] = a3 * b1 + a4 * b4 + a5 * b7;
  out[5] = a3 * b2 + a4 * b5 + a5 * b8;
  out[6] = a6 * b0 + a7 * b3 + a8 * b6;
  out[7] = a6 * b1 + a7 * b4 + a8 * b7;
  out[8] = a6 * b2 + a7 * b5 + a8 * b8;
  return out;
}

export function invert(m, out = new Array(9)) {
  const a = m[0], b = m[1], c = m[2];
  const d = m[3], e = m[4], f = m[5];
  const g = m[6], h = m[7], i = m[8];

  const A = e * i - f * h;
  const B = f * g - d * i;
  const C = d * h - e * g;

  const det = a * A + b * B + c * C;
  if (det === 0) throw new Error('mat3: singular matrix');
  const s = 1 / det;

  out[0] = A * s;
  out[1] = (c * h - b * i) * s;
  out[2] = (b * f - c * e) * s;
  out[3] = B * s;
  out[4] = (a * i - c * g) * s;
  out[5] = (c * d - a * f) * s;
  out[6] = C * s;
  out[7] = (b * g - a * h) * s;
  out[8] = (a * e - b * d) * s;
  return out;
}

export function diag(x, y, z, out = new Array(9)) {
  out[0] = x; out[1] = 0; out[2] = 0;
  out[3] = 0; out[4] = y; out[5] = 0;
  out[6] = 0; out[7] = 0; out[8] = z;
  return out;
}
