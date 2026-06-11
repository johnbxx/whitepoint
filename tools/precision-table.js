// Generates the precision-bounds table for the README (north star: error
// bounds are measured, published, and enforced — never implied).
// Usage: npm run precision

import { convert } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const SPACE_IDS = [
  'srgb', 'srgb-linear', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec2020',
  'oklab', 'oklch', 'lab', 'lch', 'hsl', 'hwb', 'xyz-d65', 'xyz-d50',
];

const N = 20000;
const rand = mulberry32(0x57A7_1C);

console.log('| space | srgb → space → srgb (max err) | oklch → space → oklch (max err) |');
console.log('|---|---|---|');

for (const id of SPACE_IDS) {
  let a = 0;
  for (let n = 0; n < N; n++) {
    const c = [rand(), rand(), rand()];
    const back = convert(convert(c, 'srgb', id), id, 'srgb');
    for (let i = 0; i < 3; i++) a = Math.max(a, Math.abs(c[i] - back[i]));
  }
  let b = 0;
  for (let n = 0; n < N; n++) {
    const c = [0.2 + rand() * 0.6, 0.03 + rand() * 0.12, rand() * 360];
    const back = convert(convert(c, 'oklch', id), id, 'oklch');
    let dh = Math.abs(c[2] - back[2]);
    if (dh > 180) dh = 360 - dh;
    b = Math.max(b, Math.abs(c[0] - back[0]), Math.abs(c[1] - back[1]), dh);
  }
  console.log(`| ${id} | ${a.toExponential(1)} | ${b.toExponential(1)} |`);
}

console.log(`\n_${N} samples per cell, mulberry32 seed 0x57A71C, Node ${process.version}._`);
