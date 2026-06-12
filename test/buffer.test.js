// convertBuffer: the image-pipeline path. Must agree exactly with the
// single-call API across every route type (direct, precomposed RGB↔RGB,
// hub), in place and out of place, on plain and typed arrays.

import test from 'node:test';
import assert from 'node:assert';
import { convert, convertBuffer } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const PAIRS = [
  ['oklch', 'srgb'],        // direct precomposed route
  ['srgb', 'display-p3'],   // lazy RGB↔RGB precomposition
  ['lab', 'jzazbz'],        // hub route
  ['hsl', 'okhsv'],         // hub route through solver space
];

test('convertBuffer agrees with per-call convert on every route type', () => {
  const rand = mulberry32(0xb0ffe2);
  for (const [from, to] of PAIRS) {
    const n = 257; // odd count, exercises non-power-of-two loops
    const src = new Float64Array(n * 3);
    for (let i = 0; i < n; i++) {
      const c = convert([0.05 + rand() * 0.9, 0.05 + rand() * 0.9, 0.05 + rand() * 0.9], 'srgb', from);
      src[i * 3] = c[0]; src[i * 3 + 1] = c[1]; src[i * 3 + 2] = c[2];
    }
    const dst = convertBuffer(src.slice(), from, to, new Float64Array(n * 3));
    for (let i = 0; i < n; i++) {
      const expected = convert([src[i * 3], src[i * 3 + 1], src[i * 3 + 2]], from, to);
      for (let k = 0; k < 3; k++) {
        assert.ok(Math.abs(dst[i * 3 + k] - expected[k]) < 1e-12,
          `${from}→${to} px ${i} ch ${k}: ${dst[i * 3 + k]} vs ${expected[k]}`);
      }
    }
  }
});

test('convertBuffer works in place and on plain arrays', () => {
  const src = [0.7, 0.1, 250, 0.5, 0.2, 30];
  const expected = [
    ...convert([0.7, 0.1, 250], 'oklch', 'srgb'),
    ...convert([0.5, 0.2, 30], 'oklch', 'srgb'),
  ];
  convertBuffer(src, 'oklch', 'srgb'); // dst defaults to src
  for (let i = 0; i < 6; i++) {
    assert.ok(Math.abs(src[i] - expected[i]) < 1e-12, `in-place [${i}]`);
  }
});

test('convertBuffer same-space is a copy', () => {
  const src = Float64Array.from([1, 2, 3, 4, 5, 6]);
  const dst = convertBuffer(src, 'srgb', 'srgb', new Float64Array(6));
  assert.deepStrictEqual([...dst], [...src]);
});

test('convertBuffer validates lengths', () => {
  assert.throws(() => convertBuffer([1, 2, 3, 4], 'srgb', 'oklab'), RangeError);
  assert.throws(() => convertBuffer([1, 2, 3, 4, 5, 6], 'srgb', 'oklab', [0, 0, 0]), RangeError);
});

test('Float32Array round trip stays within single precision', () => {
  const n = 64;
  const src = new Float32Array(n * 3);
  const rand = mulberry32(0xf32);
  for (let i = 0; i < src.length; i++) src[i] = 0.05 + rand() * 0.9;
  const there = convertBuffer(src.slice(), 'srgb', 'oklab', new Float32Array(n * 3));
  const back = convertBuffer(there, 'oklab', 'srgb', new Float32Array(n * 3));
  for (let i = 0; i < src.length; i++) {
    assert.ok(Math.abs(back[i] - src[i]) < 1e-5, `f32 round trip [${i}]: ${back[i]} vs ${src[i]}`);
  }
});
