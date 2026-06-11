// Coordinate operations: mix (CSS §12), serialization, WCAG 2 contrast,
// CIEDE2000 — fixtures from the specs, differential oracles where they exist,
// and emitter parity for the shader-side mixers.

import test from 'node:test';
import assert from 'node:assert';
import {
  mix, mixAlpha, serialize, wcagLuminance, contrastWCAG2, deltaE2000, convert,
} from '../src/index.js';
import { jsMix, glslMix, wgslMix } from '../src/codegen/index.js';
import { interpolate, differenceCiede2000 } from 'culori';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- mix: spec hue arc fixtures (CSS Color 4 §12.4) ----

test('hue arcs match the CSS Color 4 §12.4 table', () => {
  // h1=350, h2=10 at t=0.5 — the spec's illustrative wraparound case
  const a = [0.5, 0.1, 350], b = [0.5, 0.1, 10];
  assert.strictEqual(mix(a, b, 0.5, 'oklch', { hue: 'shorter' })[2], 0);
  assert.strictEqual(mix(a, b, 0.5, 'oklch', { hue: 'longer' })[2], 180);
  assert.strictEqual(mix(a, b, 0.5, 'oklch', { hue: 'increasing' })[2], 0);
  assert.strictEqual(mix(a, b, 0.5, 'oklch', { hue: 'decreasing' })[2], 180);
  // equal hues: longer goes all the way around
  const c = [0.5, 0.1, 90], d = [0.5, 0.1, 90];
  assert.strictEqual(mix(c, d, 0.25, 'oklch', { hue: 'longer' })[2], 180);
  assert.strictEqual(mix(c, d, 0.5, 'oklch', { hue: 'shorter' })[2], 90);
  // hsl's hue lives in channel 0
  assert.strictEqual(mix([350, 0.5, 0.5], [10, 0.5, 0.5], 0.5, 'hsl')[0], 0);
});

test('mix agrees with culori (oklch, shorter arc)', () => {
  const rand = mulberry32(0x111A);
  for (let n = 0; n < 200; n++) {
    const a = [0.2 + rand() * 0.6, rand() * 0.25, rand() * 360];
    const b = [0.2 + rand() * 0.6, rand() * 0.25, rand() * 360];
    const t = rand();
    const ours = mix(a, b, t, 'oklch');
    const f = interpolate([
      { mode: 'oklch', l: a[0], c: a[1], h: a[2] },
      { mode: 'oklch', l: b[0], c: b[1], h: b[2] },
    ], 'oklch');
    const theirs = f(t);
    assert.ok(Math.abs(ours[0] - theirs.l) < 1e-9, `L: ${ours[0]} vs ${theirs.l}`);
    assert.ok(Math.abs(ours[1] - theirs.c) < 1e-9, `C: ${ours[1]} vs ${theirs.c}`);
    let dh = Math.abs(ours[2] - ((theirs.h % 360) + 360) % 360);
    if (dh > 180) dh = 360 - dh;
    assert.ok(dh < 1e-9, `H: ${ours[2]} vs ${theirs.h}`);
  }
});

test('mixAlpha premultiplies per CSS §12.3', () => {
  // transparent red → opaque blue at t=0.5: premultiplication means the
  // result's coordinates are entirely the blue's (red contributed 0 weight).
  const red = [1, 0, 0, 0], blue = [0, 0, 1, 1];
  const m = mixAlpha(red, blue, 0.5, 'srgb');
  assert.deepStrictEqual(m, [0, 0, 1, 0.5]);
  // equal alphas reduce to plain lerp with that alpha
  const m2 = mixAlpha([1, 0, 0, 0.5], [0, 0, 1, 0.5], 0.5, 'srgb');
  assert.deepStrictEqual(m2, [0.5, 0, 0.5, 0.5]);
  // both fully transparent: coordinates lerp unweighted, alpha stays 0
  const m3 = mixAlpha([1, 0, 0, 0], [0, 0, 1, 0], 0.5, 'srgb');
  assert.deepStrictEqual(m3, [0.5, 0, 0.5, 0]);
  // hue channel is never premultiplied
  const m4 = mixAlpha([0.6, 0.2, 350, 0], [0.6, 0.2, 10, 1], 0.5, 'oklch');
  assert.strictEqual(m4[2], 0);
});

// ---- serialization ----

test('serialize emits CSS Color 4 forms', () => {
  assert.strictEqual(serialize([1, 0, 0], 'srgb'), 'rgb(255 0 0)');
  assert.strictEqual(serialize([0.7, 0.15, 250], 'oklch'), 'oklch(0.7 0.15 250)');
  assert.strictEqual(serialize([0.7, 0.15, 250], 'oklch', { alpha: 0.5 }), 'oklch(0.7 0.15 250 / 0.5)');
  assert.strictEqual(serialize([120, 0.5, 0.25], 'hsl'), 'hsl(120 50% 25%)');
  assert.strictEqual(serialize([0.21, 0.46, 0.88], 'display-p3'), 'color(display-p3 0.21 0.46 0.88)');
  assert.strictEqual(serialize([0.5, 0.4, 0.3], 'xyz-d65'), 'color(xyz-d65 0.5 0.4 0.3)');
  assert.strictEqual(serialize([50, -20.5, 30.25], 'lab'), 'lab(50 -20.5 30.25)');
  // alpha = 1 is omitted; -0 normalizes
  assert.strictEqual(serialize([1, 0, 0], 'srgb', { alpha: 1 }), 'rgb(255 0 0)');
  assert.strictEqual(serialize([0, -0, 0], 'oklab'), 'oklab(0 0 0)');
  assert.throws(() => serialize([NaN, 0, 0], 'srgb'), /non-finite/);
});

// ---- WCAG 2 contrast ----

test('WCAG 2 contrast: spec anchors', () => {
  assert.strictEqual(contrastWCAG2([1, 1, 1], [0, 0, 0]), 21); // white/black, exactly
  assert.strictEqual(contrastWCAG2([1, 0, 0], [1, 0, 0]), 1);  // identical
  // pure red on white: L_red = 0.2126 exactly (WCAG truncated coefficient)
  const redWhite = contrastWCAG2([1, 0, 0], [1, 1, 1]);
  assert.ok(Math.abs(redWhite - 1.05 / 0.2626) < 1e-12, `red/white = ${redWhite}`);
  // order-independent
  assert.strictEqual(contrastWCAG2([1, 1, 1], [1, 0, 0]), redWhite);
  // accepts other spaces via conversion
  const viaOklch = contrastWCAG2(
    convert([1, 0, 0], 'srgb', 'oklch'),
    convert([1, 1, 1], 'srgb', 'oklch'),
    'oklch',
  );
  assert.ok(Math.abs(viaOklch - redWhite) < 1e-9);
});

// ---- CIEDE2000 ----

test('deltaE2000 reproduces Sharma 2005 reference pairs', () => {
  // Sharma, Wu & Dalal (2005), Table 1 — pair 1 and the hue-discontinuity pair 7.
  assert.ok(Math.abs(deltaE2000([50, 2.6772, -79.7751], [50, 0, -82.7485]) - 2.0425) < 1e-4);
  assert.ok(Math.abs(deltaE2000([50, -1.3802, -84.2814], [50, 0, -82.7485]) - 1.0000) < 1e-4);
  assert.strictEqual(deltaE2000([50, 10, -10], [50, 10, -10]), 0);
  // symmetric
  const a = [42, 13.5, -29.1], b = [60, -8.2, 14.7];
  assert.ok(Math.abs(deltaE2000(a, b) - deltaE2000(b, a)) < 1e-12);
});

test('deltaE2000 agrees with culori across random Lab pairs', () => {
  const diff = differenceCiede2000();
  const rand = mulberry32(0x2E2E);
  let worst = 0;
  for (let n = 0; n < 300; n++) {
    const a = [rand() * 100, rand() * 160 - 80, rand() * 160 - 80];
    const b = [rand() * 100, rand() * 160 - 80, rand() * 160 - 80];
    const ours = deltaE2000(a, b);
    // culori computes ciede2000 on Lab-D65 coordinates; pass lab65 so both
    // implementations see identical numbers (the formula is whitepoint-blind).
    const theirs = diff(
      { mode: 'lab65', l: a[0], a: a[1], b: a[2] },
      { mode: 'lab65', l: b[0], a: b[1], b: b[2] },
    );
    worst = Math.max(worst, Math.abs(ours - theirs));
  }
  assert.ok(worst < 1e-9, `worst diff vs culori: ${worst.toExponential(2)}`);
});

// ---- shader-side mix parity ----

test('emitted JS mixers agree with the library across spaces and arcs', () => {
  const rand = mulberry32(0x3A3A);
  for (const space of ['oklch', 'lch', 'hsl', 'hwb', 'oklab', 'srgb']) {
    for (const hue of ['shorter', 'longer', 'increasing', 'decreasing']) {
      const name = `wp_mix_${space}_${hue}`.replace(/-/g, '_');
      const fn = new Function(`${jsMix(space, { hue })}\nreturn ${name};`)();
      for (let n = 0; n < 50; n++) {
        const a = [rand(), rand(), rand() * 360];
        const b = [rand(), rand(), rand() * 360];
        const t = rand();
        const expected = mix(a, b, t, space, { hue });
        const got = fn(a, b, t);
        for (let i = 0; i < 3; i++) {
          assert.ok(Math.abs(expected[i] - got[i]) < 1e-12,
            `${space}/${hue}: ${got} vs ${expected}`);
        }
      }
    }
  }
});

test('emitted GLSL/WGSL mixers are structurally sound', () => {
  const g = glslMix('oklch', { hue: 'longer' });
  assert.ok(g.includes('vec3 wp_mix_oklch_longer(vec3 a, vec3 b, float t)'), g);
  const w = wgslMix('hsl', { hue: 'decreasing' });
  assert.ok(w.includes('fn wp_mix_hsl_decreasing(a: vec3<f32>, b: vec3<f32>, t: f32) -> vec3<f32>'), w);
  const plain = glslMix('oklab');
  assert.ok(plain.includes('return mix(a, b, t);'), 'non-hue spaces use native mix');
});
