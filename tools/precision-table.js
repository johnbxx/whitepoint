// Generates the precision-bounds table for the README across the FULL
// catalog (north star: error bounds are measured, published, enforced).
// Usage: npm run precision

import { convert, spaces } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// † spaces are only defined (or only invertible) within their container
// gamut: signal-domain spaces clamp negative linear light (PQ/log encodings
// are undefined below zero), and OKHSL's s>0.8 rational mapping has a pole
// beyond the sRGB boundary it is defined on. Sampled in-domain.
const IN_DOMAIN = new Set(['ictcp', 'jzazbz', 'jzczhz', 'rec2100-pq', 'rec2100-hlg', 'acescc', 'acescct', 'okhsl']);
// Iterative inverses (documented solver tolerances, not closed-form ulps)
const ITERATIVE = new Set(['hct', 'okhsl', 'okhsv']);

const IDS = Object.keys(spaces).filter((id) => id !== 'xyz');
const N = 10000;
const rand = mulberry32(0x57A7_1C);

console.log('| space | srgb → space → srgb | oklch → space → oklch |');
console.log('|---|---|---|');

for (const id of IDS) {
  let a = 0;
  for (let n = 0; n < N; n++) {
    const c = [0.005 + rand() * 0.99, 0.005 + rand() * 0.99, 0.005 + rand() * 0.99];
    const back = convert(convert(c, 'srgb', id), id, 'srgb');
    for (let i = 0; i < 3; i++) a = Math.max(a, Math.abs(c[i] - back[i]));
  }
  let b = 0;
  const clamped = IN_DOMAIN.has(id);
  for (let n = 0; n < N; n++) {
    // clamping spaces are sampled within sRGB (their containers contain it);
    // others get the wider chromatic fuzz
    const c = clamped
      ? convert([0.05 + rand() * 0.9, 0.05 + rand() * 0.9, 0.05 + rand() * 0.9], 'srgb', 'oklch')
      : [0.2 + rand() * 0.6, 0.03 + rand() * 0.12, rand() * 360];
    const back = convert(convert(c, 'oklch', id), id, 'oklch');
    let dh = Math.abs(c[2] - back[2]);
    if (dh > 180) dh = 360 - dh;
    b = Math.max(b, Math.abs(c[0] - back[0]), Math.abs(c[1] - back[1]), dh * Math.max(c[1], 1e-3));
  }
  const mark = (clamped ? '†' : '') + (ITERATIVE.has(id) ? '‡' : '');
  console.log(`| ${id}${mark} | ${a.toExponential(1)} | ${b.toExponential(1)} |`);
}

console.log(`
_${N} samples per cell, mulberry32 seed 0x57A71C, Node ${process.version}. Hue
error weighted by chroma. † defined or clamped within a container gamut
(signal-domain clamping, or OKHSL's sRGB-bounded mapping); out-of-domain
colors don't round-trip by design, so sampling is in-domain.
‡ iterative inverse (solver tolerance, not closed-form ulps)._`);
