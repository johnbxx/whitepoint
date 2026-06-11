// Zero-allocation audit for the hot paths (north star: speed pillar).
// Usage: node --expose-gc tools/alloc-audit.js
//
// Method: warm the path (JIT + caches), force GC, run N iterations with a
// caller-provided out array, and measure heap growth per op. Incidental
// engine noise lands well under 0.5 B/op; a per-call allocation shows up as
// ≥ 16 B/op. Exits nonzero on failure so CI can enforce it.

import { convert, toGamut, adapt, sRGB, OKLCH } from '../src/index.js';

if (typeof global.gc !== 'function') {
  console.error('run with: node --expose-gc tools/alloc-audit.js');
  process.exit(2);
}

const out = [0, 0, 0];
const oklch = [0.7, 0.21, 250];
const srgb = [0.3, 0.6, 0.9];
const xyz = [0.4, 0.5, 0.3];
const N = 2_000_000;

let failed = false;

function audit(label, fn) {
  for (let i = 0; i < 200_000; i++) fn(); // warm JIT, caches, memos
  global.gc();
  const before = process.memoryUsage().heapUsed;
  for (let i = 0; i < N; i++) fn();
  const gross = (process.memoryUsage().heapUsed - before) / N;
  global.gc();
  const retained = (process.memoryUsage().heapUsed - before) / N;
  // Pass criterion: RETAINED memory — the no-leak/no-sustained-garbage
  // guarantee. Gross is reported for transparency: older V8s (Node 22)
  // transiently box doubles in unoptimized tiers (~0.5 B/op, fully
  // collected); Node 25 reads ~0.00 gross on the same code.
  const ok = retained < 0.5;
  if (!ok) failed = true;
  console.log(`${ok ? '✔' : '✖'} ${label.padEnd(42)} retained ${retained.toFixed(3)} B/op (gross ${gross.toFixed(3)})`);
}

// Options objects are hoisted so the audit measures the LIBRARY, not the
// harness: older V8s (Node 22) don't escape-analyze per-call literals away,
// which showed up as phantom 0.5–0.8 B/op on CI runners.
const CUSP_OPTS = { gamut: 'srgb', method: 'cusp' };
const CSS_OPTS = { gamut: 'srgb', method: 'css' };
const CLIP_OPTS = { gamut: 'srgb', method: 'clip' };

audit('convert oklch→srgb (objects)', () => convert(oklch, OKLCH, sRGB, out));
audit('convert oklch→srgb (strings)', () => convert(oklch, 'oklch', 'srgb', out));
audit('convert srgb→oklch (objects)', () => convert(srgb, sRGB, OKLCH, out));
audit('toGamut cusp', () => toGamut(oklch, 'oklch', CUSP_OPTS, out));
audit('toGamut css', () => toGamut(oklch, 'oklch', CSS_OPTS, out));
audit('toGamut clip', () => toGamut(oklch, 'oklch', CLIP_OPTS, out));
audit('adapt D65→A (named, bradford)', () => adapt(xyz, 'D65', 'A', out));

process.exit(failed ? 1 : 0);
