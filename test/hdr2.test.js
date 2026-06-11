// rec2100-pq / rec2100-hlg (colorjs oracle) and DIN99o (culori oracle).

import test from 'node:test';
import assert from 'node:assert';
import Color from 'colorjs.io';
import { converter } from 'culori';
import { convert, transfer } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

test('HLG spec anchors: media white at ~0.75, 18% grey at ~0.38', () => {
  const enc = transfer.rec2100hlg.encode;
  // The CSS HDR draft's scale constant (3.7743) is itself rounded: the
  // spec's own value places media white at 0.7499905, not exactly the 0.75
  // it was chosen to hit. We implement the cited constant as written.
  assert.ok(Math.abs(enc(1) - 0.75) < 1e-4, `HLG(media white) = ${enc(1)}`);
  assert.ok(Math.abs(enc(0.18) - 0.38) < 5e-3, `HLG(18% grey) = ${enc(0.18)}`);
  assert.strictEqual(enc(0), 0);
});

test('rec2100-pq media white anchors at the documented PQ signal', () => {
  // 203 cd/m² → PQ signal ≈ 0.5807 (the BT.2408 anchor)
  const w = convert([1, 1, 1], 'srgb', 'rec2100-pq');
  for (const ch of w) assert.ok(Math.abs(ch - 0.5807) < 5e-4, `PQ white: ${w}`);
});

test('rec2100 spaces agree with colorjs.io', () => {
  const rand = mulberry32(0x2100);
  let worstPq = 0, worstHlg = 0;
  for (let n = 0; n < 200; n++) {
    const c = [rand(), rand(), rand()];
    const pq = convert(c, 'srgb', 'rec2100-pq');
    const hlg = convert(c, 'srgb', 'rec2100-hlg');
    const jsPq = new Color('srgb', c).to('rec2100pq').coords;
    const jsHlg = new Color('srgb', c).to('rec2100hlg').coords;
    for (let i = 0; i < 3; i++) {
      worstPq = Math.max(worstPq, Math.abs(pq[i] - jsPq[i]));
      worstHlg = Math.max(worstHlg, Math.abs(hlg[i] - jsHlg[i]));
    }
  }
  assert.ok(worstPq < 1e-6, `rec2100-pq vs colorjs: ${worstPq.toExponential(2)}`);
  assert.ok(worstHlg < 1e-6, `rec2100-hlg vs colorjs: ${worstHlg.toExponential(2)}`);
});

test('DIN99o agrees with culori dlab/dlch', () => {
  const toDlab = converter('dlab');
  const toDlch = converter('dlch');
  const rand = mulberry32(0xD199);
  const D2R = Math.PI / 180;
  let worst = 0;
  for (let n = 0; n < 300; n++) {
    const c = [rand(), rand(), rand()];
    const ours = convert(c, 'srgb', 'din99o');
    const t = toDlab({ mode: 'rgb', r: c[0], g: c[1], b: c[2] });
    worst = Math.max(worst,
      Math.abs(ours[0] - t.l), Math.abs(ours[1] - t.a), Math.abs(ours[2] - t.b));
    const lch = convert(c, 'srgb', 'din99o-lch');
    const tc = toDlch({ mode: 'rgb', r: c[0], g: c[1], b: c[2] });
    const th = ((tc.h ?? 0) % 360) * D2R;
    worst = Math.max(worst,
      Math.abs(lch[0] - tc.l),
      Math.abs(lch[1] * Math.cos(lch[2] * D2R) - tc.c * Math.cos(th)),
      Math.abs(lch[1] * Math.sin(lch[2] * D2R) - tc.c * Math.sin(th)));
  }
  // culori's dlab routes through its lab65, inheriting its transcribed sRGB
  // constants; agreement bounded by that, not by either implementation.
  assert.ok(worst < 1e-4, `din99o vs culori: ${worst.toExponential(2)}`);
});

test('new spaces round-trip within 1e-9', () => {
  const rand = mulberry32(0x6021);
  const failures = [];
  for (const id of ['rec2100-pq', 'rec2100-hlg', 'din99o', 'din99o-lch']) {
    let worst = 0;
    for (let n = 0; n < 300; n++) {
      const c = [0.01 + rand() * 0.98, 0.01 + rand() * 0.98, 0.01 + rand() * 0.98];
      const back = convert(convert(c, 'srgb', id), id, 'srgb');
      for (let i = 0; i < 3; i++) worst = Math.max(worst, Math.abs(c[i] - back[i]));
    }
    if (worst >= 1e-9) failures.push(`${id}: ${worst.toExponential(2)}`);
  }
  assert.deepStrictEqual(failures, []);
});
