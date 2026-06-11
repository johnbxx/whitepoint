// Gamut mapping: property tests (in-gamut result, idempotence on in-gamut
// input, chroma monotonicity, hue preservation, lightness extremes) plus
// cross-checks against culori's CSS-method implementation and texel's deltaEOK.

import test from 'node:test';
import assert from 'node:assert';
import { convert, toGamut, inGamut, deltaEOK, findCusp, findCuspNumerical } from '../src/index.js';
import * as texel from '@texel/color';
import { toGamut as culoriToGamut } from 'culori';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const METHODS = ['css', 'cusp', 'clip'];
const GAMUTS = ['srgb', 'display-p3'];

test('mapped colors are inside the target gamut', () => {
  const rand = mulberry32(0x6A3B);
  for (const gamut of GAMUTS) {
    for (const method of METHODS) {
      for (let n = 0; n < 200; n++) {
        const c = [0.05 + rand() * 0.9, 0.05 + rand() * 0.45, rand() * 360];
        const mapped = toGamut(c, 'oklch', { gamut, method });
        assert.ok(inGamut(mapped, 'oklch', gamut, 1e-6),
          `${method}/${gamut}: ${c} → ${mapped} out of gamut`);
      }
    }
  }
});

test('in-gamut colors pass through (nearly) unchanged', () => {
  const rand = mulberry32(0x1DEA);
  for (const method of METHODS) {
    for (let n = 0; n < 200; n++) {
      const srgb = [rand(), rand(), rand()];
      const lch = convert(srgb, 'srgb', 'oklch');
      const mapped = toGamut(lch, 'oklch', { gamut: 'srgb', method });
      const back = convert(mapped, 'oklch', 'srgb');
      for (let i = 0; i < 3; i++) {
        assert.ok(Math.abs(back[i] - srgb[i]) < 1e-9,
          `${method}: in-gamut color moved by ${Math.abs(back[i] - srgb[i])}`);
      }
    }
  }
});

test('css and cusp methods never increase chroma and roughly preserve hue', () => {
  const rand = mulberry32(0xFADE);
  for (const method of ['css', 'cusp']) {
    for (let n = 0; n < 200; n++) {
      const c = [0.3 + rand() * 0.5, 0.2 + rand() * 0.3, rand() * 360];
      const mapped = toGamut(c, 'oklch', { gamut: 'srgb', method });
      assert.ok(mapped[1] <= c[1] + 1e-6, `${method}: chroma increased ${c[1]} → ${mapped[1]}`);
      if (mapped[1] > 0.02) {
        let dh = Math.abs(mapped[2] - c[2]);
        if (dh > 180) dh = 360 - dh;
        // The css method's final clip may move the color anywhere within a
        // JND-radius OKLab ball: at chroma C that allows 2·asin(JND/2C) of
        // hue. The cusp method preserves hue up to the safety clip.
        const RAD2DEG = 180 / Math.PI;
        const allowed = method === 'css'
          ? 2 * Math.asin(Math.min(1, 0.02 / (2 * mapped[1]))) * RAD2DEG + 0.1
          : 0.5;
        assert.ok(dh < allowed, `${method}: hue shifted ${dh}° (allowed ${allowed.toFixed(2)}°) at ${c}`);
      }
    }
  }
});

test('extreme lightness maps to white / black per CSS Color 4', () => {
  for (const method of ['css', 'cusp']) {
    const w = toGamut([1.2, 0.3, 120], 'oklch', { gamut: 'srgb', method });
    const wSrgb = convert(w, 'oklch', 'srgb');
    const b = toGamut([-0.1, 0.3, 120], 'oklch', { gamut: 'srgb', method });
    const bSrgb = convert(b, 'oklch', 'srgb');
    for (let i = 0; i < 3; i++) {
      assert.ok(Math.abs(wSrgb[i] - 1) < 1e-6, `${method}: L≥1 → ${wSrgb}`);
      assert.ok(Math.abs(bSrgb[i]) < 1e-6, `${method}: L≤0 → ${bSrgb}`);
    }
  }
});

test('css method agrees with culori toGamut within search tolerance', () => {
  const map = culoriToGamut('rgb'); // culori implements the CSS §13 approach
  const cases = [
    [0.7, 0.25, 30], [0.5, 0.3, 150], [0.6, 0.2, 250],
    [0.85, 0.3, 90], [0.4, 0.25, 330], [0.55, 0.35, 200],
  ];
  for (const c of cases) {
    const ours = convert(toGamut(c, 'oklch', { gamut: 'srgb', method: 'css' }), 'oklch', 'srgb');
    const theirs = map({ mode: 'oklch', l: c[0], c: c[1], h: c[2] });
    for (const [i, ch] of ['r', 'g', 'b'].entries()) {
      assert.ok(Math.abs(ours[i] - theirs[ch]) < 5e-3,
        `oklch(${c}) [${ch}]: ours ${ours[i]} vs culori ${theirs[ch]}`);
    }
  }
});

test('deltaEOK agrees with @texel/color', (t) => {
  if (typeof texel.deltaEOK !== 'function') return t.skip('texel does not export deltaEOK');
  const rand = mulberry32(0x0DDB);
  for (let n = 0; n < 200; n++) {
    const a = [rand(), rand() - 0.5, rand() - 0.5];
    const b = [rand(), rand() - 0.5, rand() - 0.5];
    assert.ok(Math.abs(deltaEOK(a, b) - texel.deltaEOK(a, b)) < 1e-12);
  }
});

test('emitted gamut mapper agrees with the library within bisection bounds', async () => {
  const { jsGamutMap, glslGamutMap, wgslGamutMap } = await import('../src/codegen/index.js');
  const src = jsGamutMap('srgb');
  const name = 'wp_gamut_map_oklch_to_srgb';
  const fn = new Function(`${src}\nreturn ${name};`)();
  // Reference: the SAME bisection algorithm, run on library convert() — this
  // tests emission parity (emitted code ≡ library math), not equivalence of
  // two different mapping algorithms.
  function referenceBisect(lch, out = [0, 0, 0]) {
    if (lch[0] >= 1) return [1, 1, 1];
    if (lch[0] <= 0) return [0, 0, 0];
    const in01 = (v) => v[0] >= 0 && v[0] <= 1 && v[1] >= 0 && v[1] <= 1 && v[2] >= 0 && v[2] <= 1;
    convert(lch, 'oklch', 'srgb', out);
    if (in01(out)) return out;
    let lo = 0, hi = lch[1];
    const c = [lch[0], 0, lch[2]];
    for (let i = 0; i < 16; i++) {
      c[1] = 0.5 * (lo + hi);
      convert(c, 'oklch', 'srgb', out);
      if (in01(out)) lo = c[1]; else hi = c[1];
    }
    c[1] = lo;
    convert(c, 'oklch', 'srgb', out);
    return out.map((v) => Math.min(1, Math.max(0, v)));
  }

  const rand = mulberry32(0x6F00D);
  for (let n = 0; n < 300; n++) {
    const c = [0.05 + rand() * 0.9, rand() * 0.45, rand() * 360];
    const got = fn(c);
    assert.ok(got.every((v) => v >= 0 && v <= 1), `emitted map out of range: ${got}`);
    const ref = referenceBisect(c);
    for (let i = 0; i < 3; i++) {
      assert.ok(Math.abs(got[i] - ref[i]) < 1e-9,
        `emission parity: ${got} vs ${ref} at ${c}`);
    }
    // Sanity vs the css method: different algorithms, same intent. They
    // diverge most in pointy gamut regions (sRGB blue corner) where the CSS
    // clip-acceptance wanders off the hue plane; keep a loose ceiling.
    const css = convert(toGamut(c, 'oklch', { gamut: 'srgb', method: 'css' }), 'oklch', 'srgb');
    const dE = deltaEOK(convert(got, 'srgb', 'oklab'), convert(css, 'srgb', 'oklab'));
    assert.ok(dE < 0.1, `emitted vs css method deltaEOK ${dE} at ${c}`);
  }
  // shader variants: structural sanity
  const g = glslGamutMap('display-p3');
  assert.ok(g.includes('vec3 wp_gamut_map_oklch_to_display_p3(vec3 lch)'), 'glsl signature');
  const w = wgslGamutMap('rec2020');
  assert.ok(w.includes('fn wp_gamut_map_oklch_to_rec2020(lch: vec3<f32>) -> vec3<f32>'), 'wgsl signature');
});

test('exact cusp matches numerical ground truth', () => {
  // findCusp solves the channel-zero cubic exactly; findCuspNumerical brute-
  // forces the same point through full conversions. The numerical L is only
  // resolved to ~1e-4 (golden-section width); C is much tighter because the
  // chroma derivative vanishes at the maximum.
  for (const gamut of GAMUTS) {
    for (let h = 5; h < 360; h += 36.7) {
      const exact = findCusp(h, gamut);
      const truth = findCuspNumerical(h, gamut);
      assert.ok(Math.abs(exact[0] - truth[0]) < 1e-3,
        `${gamut}@${h.toFixed(1)} L: exact ${exact[0]} vs numerical ${truth[0]}`);
      assert.ok(Math.abs(exact[1] - truth[1]) < 1e-3,
        `${gamut}@${h.toFixed(1)} C: exact ${exact[1]} vs numerical ${truth[1]}`);
    }
  }
});

test('findCusp locates a boundary maximum', () => {
  for (const gamut of GAMUTS) {
    for (const h of [29.23, 110, 200, 320]) {
      const [L, C] = findCusp(h, gamut);
      assert.ok(L > 0 && L < 1 && C > 0.05, `cusp ${gamut}@${h}: L=${L} C=${C}`);
      assert.ok(inGamut([L, C - 1e-4, h], 'oklch', gamut, 1e-6), 'just inside cusp should be in gamut');
      assert.ok(!inGamut([L, C + 2e-3, h], 'oklch', gamut, 0), 'beyond cusp chroma should be out of gamut');
      // The cusp is the global max: chroma at nearby L must not exceed it.
      for (const dL of [-0.08, 0.08]) {
        assert.ok(!inGamut([L + dL, C + 2e-3, h], 'oklch', gamut, 0),
          `chroma above cusp at L${dL > 0 ? '+' : ''}${dL} should be out of gamut`);
      }
    }
  }
});
