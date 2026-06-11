// HDR perceptual spaces: ICtCp, Jzazbz, JzCzhz — differential against culori
// (which inherits the colorjs derivations), round-trips, PQ exactness.

import test from 'node:test';
import assert from 'node:assert';
import { convert, pqEncode, pqDecode } from '../src/index.js';
import { converter } from 'culori';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

test('PQ round-trips and hits its exact rational anchors', () => {
  for (const nits of [0.1, 1, 10, 100, 203, 1000, 10000]) {
    const rt = pqDecode(pqEncode(nits));
    assert.ok(Math.abs(rt - nits) / nits < 1e-12, `${nits} nits → ${rt}`);
  }
  assert.strictEqual(pqEncode(0), 0);
  assert.strictEqual(pqDecode(0), 0);
  assert.ok(Math.abs(pqEncode(10000) - 1) < 1e-12, 'peak luminance encodes to 1');
});

const N = 300;

test('ICtCp agrees with culori itp', () => {
  const toItp = converter('itp');
  const rand = mulberry32(0x17C9);
  let worst = 0;
  for (let n = 0; n < N; n++) {
    const c = [rand(), rand(), rand()];
    const ours = convert(c, 'srgb', 'ictcp');
    const t = toItp({ mode: 'rgb', r: c[0], g: c[1], b: c[2] });
    worst = Math.max(worst,
      Math.abs(ours[0] - t.i), Math.abs(ours[1] - t.t), Math.abs(ours[2] - t.p));
  }
  assert.ok(worst < 1e-6, `worst diff vs culori: ${worst.toExponential(2)}`);
});

test('Jzazbz agrees with culori jab', () => {
  const toJab = converter('jab');
  const rand = mulberry32(0x4A2B);
  let worst = 0;
  for (let n = 0; n < N; n++) {
    const c = [rand(), rand(), rand()];
    const ours = convert(c, 'srgb', 'jzazbz');
    const t = toJab({ mode: 'rgb', r: c[0], g: c[1], b: c[2] });
    worst = Math.max(worst,
      Math.abs(ours[0] - t.j), Math.abs(ours[1] - t.a), Math.abs(ours[2] - t.b));
  }
  assert.ok(worst < 1e-6, `worst diff vs culori: ${worst.toExponential(2)}`);
});

test('JzCzhz agrees with culori jch (rectangular comparison)', () => {
  const toJch = converter('jch');
  const rand = mulberry32(0x9C42);
  const D2R = Math.PI / 180;
  let worst = 0;
  for (let n = 0; n < N; n++) {
    const c = [0.1 + rand() * 0.9, rand(), rand()];
    const ours = convert(c, 'srgb', 'jzczhz');
    const t = toJch({ mode: 'rgb', r: c[0], g: c[1], b: c[2] });
    const th = ((t.h ?? 0) % 360) * D2R;
    worst = Math.max(worst,
      Math.abs(ours[0] - t.j),
      Math.abs(ours[1] * Math.cos(ours[2] * D2R) - t.c * Math.cos(th)),
      Math.abs(ours[1] * Math.sin(ours[2] * D2R) - t.c * Math.sin(th)));
  }
  assert.ok(worst < 1e-6, `worst diff vs culori: ${worst.toExponential(2)}`);
});

test('HDR spaces round-trip from in-gamut sRGB within 1e-9', () => {
  const rand = mulberry32(0x4D12);
  for (const id of ['ictcp', 'jzazbz', 'jzczhz']) {
    let worst = 0;
    for (let n = 0; n < N; n++) {
      const c = [0.01 + rand() * 0.99, 0.01 + rand() * 0.99, 0.01 + rand() * 0.99];
      const back = convert(convert(c, 'srgb', id), id, 'srgb');
      for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(c[i] - back[i]));
    }
    assert.ok(worst < 1e-9, `${id}: worst round-trip ${worst.toExponential(2)}`);
  }
});

test('HDR lightness is monotone in luminance', () => {
  let prevI = -Infinity, prevJ = -Infinity;
  for (let y = 0.05; y <= 1; y += 0.05) {
    const g = [y, y, y]; // gray in srgb
    const i = convert(g, 'srgb', 'ictcp')[0];
    const j = convert(g, 'srgb', 'jzazbz')[0];
    assert.ok(i > prevI, `ICtCp I not monotone at ${y}`);
    assert.ok(j > prevJ, `Jz not monotone at ${y}`);
    prevI = i; prevJ = j;
  }
});

test('achromatic colors have near-zero chroma components', () => {
  const gray = convert([0.5, 0.5, 0.5], 'srgb', 'ictcp');
  assert.ok(Math.abs(gray[1]) < 1e-5 && Math.abs(gray[2]) < 1e-5, `ICtCp gray: ${gray}`);
  // Jzazbz's published constants leave ~1.2e-4 residual chroma on D65 gray —
  // a property of the space (culori agrees to 1e-6), not of this code.
  const jab = convert([0.5, 0.5, 0.5], 'srgb', 'jzazbz');
  assert.ok(Math.abs(jab[1]) < 5e-4 && Math.abs(jab[2]) < 5e-4, `Jzazbz gray: ${jab}`);
});
