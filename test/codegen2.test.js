// Tier-3 special emitters: OKHSL/OKHSV/HSLuv/HPLuv → sRGB in three
// languages. JS emission parity-tested against the library; the only
// sanctioned divergence is the library's centidegree cusp cache (emitted
// code solves at the exact hue), bounding OK-family agreement near 1e-4.

import test from 'node:test';
import assert from 'node:assert';
import { convert } from '../src/index.js';
import { js, glsl, wgsl, specialPairs } from '../src/codegen/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const TOL = {
  'okhsl|srgb': 5e-4, 'okhsv|srgb': 5e-4, // centidegree cusp cache divergence
  'hsluv|srgb': 1e-9, 'hpluv|srgb': 1e-9,
  'srgb|cam16-ucs': 1e-9, 'cam16-ucs|srgb': 1e-9,
  'hct|srgb': 1e-6, // 48-step bisection, same as the library's
};

test('tier-3 emitted JS agrees with the library', () => {
  const rand = mulberry32(0x7133);
  const failures = [];
  for (const [from, to] of specialPairs()) {
    const name = `wp_${from}_to_${to}`.replace(/-/g, '_');
    const fn = new Function(`${js(from, to)}\nreturn ${name};`)();
    const tol = TOL[`${from}|${to}`];
    let worst = 0;
    for (let n = 0; n < 300; n++) {
      // sample via the library so inputs are always in the source space's domain
      const srgb = [0.03 + rand() * 0.94, 0.03 + rand() * 0.94, 0.03 + rand() * 0.94];
      const input = convert(srgb, 'srgb', from);
      const expected = convert(input, from, to);
      const got = fn(input);
      for (let i = 0; i < 3; i++) {
        worst = Math.max(worst, Math.abs(expected[i] - got[i]) / (1 + Math.abs(expected[i])));
      }
    }
    if (worst >= tol) failures.push(`${from}→${to}: ${worst.toExponential(2)} (tol ${tol})`);
  }
  assert.deepStrictEqual(failures, []);
});

test('tier-3 shader sources are structurally sound', () => {
  for (const [from, to] of specialPairs()) {
    const name = `wp_${from}_to_${to}`.replace(/-/g, '_');
    const g = glsl(from, to);
    const w = wgsl(from, to);
    assert.ok(g.includes(`vec3 ${name}(vec3 c)`), `glsl ${name}`);
    assert.ok(w.includes(`fn ${name}(c: vec3<f32>) -> vec3<f32>`), `wgsl ${name}`);
    for (const bad of ['NaN', 'Infinity', 'undefined', 'object', 'Math.']) {
      assert.ok(!g.includes(bad), `glsl ${name} contains "${bad}"`);
      assert.ok(!w.includes(bad), `wgsl ${name} contains "${bad}"`);
    }
  }
});

test('tier-3 emitted results land in gamut at full saturation', () => {
  const name = 'wp_hsluv_to_srgb';
  const fn = new Function(`${js('hsluv', 'srgb')}\nreturn ${name};`)();
  for (const h of [12, 110, 230, 340]) {
    const rgb = fn([h, 100, 55]);
    assert.ok(rgb.every((v) => v > -1e-7 && v < 1 + 1e-7), `hsluv(${h},100,55) → ${rgb}`);
  }
});
