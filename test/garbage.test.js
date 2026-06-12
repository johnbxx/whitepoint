// The numerical policy, enforced: garbage in, garbage out — but never a
// throw, never a hang. NaN, ±Infinity, and absurd magnitudes must flow
// through every space, the gamut mapper, and the solvers without wedging;
// in-domain inputs must always produce finite outputs. (API misuse — an
// unknown space id — still throws; that's an error, not a color.)

import test from 'node:test';
import assert from 'node:assert';
import { convert, convertBuffer, spaces, toGamut, mix } from '../src/index.js';
import { cctOf, mesopic, cri } from '../src/spectral/index.js';

const GARBAGE = [
  [NaN, NaN, NaN],
  [Infinity, Infinity, Infinity],
  [-Infinity, -Infinity, -Infinity],
  [1e300, -1e300, 1e300],
  [1e-300, 1e-300, 1e-300],
  [NaN, 0.5, Infinity],
  [0, 0, 0],
];

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

test('every space survives garbage coordinates without throwing or hanging', { timeout: 60000 }, () => {
  for (const id of Object.keys(spaces)) {
    for (const g of GARBAGE) {
      const out = convert(g, id, 'srgb');
      assert.ok(out.length === 3 && out.every((v) => typeof v === 'number'), `${id} ← garbage`);
      const back = convert(g, 'srgb', id);
      assert.ok(back.length === 3 && back.every((v) => typeof v === 'number'), `${id} → garbage`);
    }
  }
});

test('the gamut mapper survives garbage without hanging', { timeout: 60000 }, () => {
  for (const g of GARBAGE) {
    for (const method of ['clip', 'css', 'cusp']) {
      const out = toGamut(g, 'srgb', { method });
      assert.ok(out.every((v) => typeof v === 'number'), `toGamut ${method} ← [${g}]`);
    }
  }
});

test('solvers and spectral entry points survive garbage', { timeout: 60000 }, () => {
  for (const xy of [[NaN, NaN], [Infinity, 0.3], [0, 0], [1e300, -1e300]]) {
    const { cct, duv } = cctOf(xy);
    assert.ok(typeof cct === 'number' && typeof duv === 'number', `cctOf [${xy}]`);
  }
  for (const [p, s] of [[NaN, NaN], [Infinity, 1], [-5, -5], [0, 0]]) {
    const { m } = mesopic(p, s);
    assert.ok(typeof m === 'number', `mesopic(${p}, ${s})`);
  }
  const r = cri({ start: 380, step: 5, values: new Array(81).fill(NaN) });
  assert.ok(typeof r.Ra === 'number', 'cri(NaN SPD)');
  assert.ok(typeof mix(GARBAGE[0], GARBAGE[1], 0.5, 'oklch')[0] === 'number');
  const buf = convertBuffer(Float64Array.from([NaN, Infinity, -1e300]), 'oklch', 'srgb');
  assert.ok(buf.length === 3);
});

test('in-domain inputs always produce finite outputs, every space', { timeout: 60000 }, () => {
  const rand = mulberry32(0x600d);
  const ids = Object.keys(spaces);
  for (let n = 0; n < 50; n++) {
    const srgb = [0.02 + rand() * 0.96, 0.02 + rand() * 0.96, 0.02 + rand() * 0.96];
    for (const id of ids) {
      const fwd = convert(srgb, 'srgb', id);
      assert.ok(fwd.every(Number.isFinite), `srgb→${id}: [${fwd}] from [${srgb}]`);
      const back = convert(fwd, id, 'srgb');
      assert.ok(back.every(Number.isFinite), `${id}→srgb: [${back}]`);
    }
  }
});
