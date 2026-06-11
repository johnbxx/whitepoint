// Porter-Duff compositing and W3C blend modes: spec anchors, algebraic
// properties (associativity of over; closed-form stack vs pairwise fold),
// and emitter parity.

import test from 'node:test';
import assert from 'node:assert';
import {
  premultiply, unpremultiply, composite, overStack, blend,
  porterDuffOperators,
} from '../src/index.js';
import { jsComposite, glslComposite, wgslComposite, jsBlend, glslBlend, wgslBlend } from '../src/codegen/index.js';
import { blend as libBlend, blendModes } from '../src/index.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const randP = (rand) => {
  const a = rand();
  return [rand() * a, rand() * a, rand() * a, a]; // valid premultiplied
};

test('premultiply/unpremultiply round-trip; alpha-0 passthrough', () => {
  const c = [0.8, 0.4, 0.2, 0.5];
  const rt = unpremultiply(premultiply(c));
  for (let i = 0; i < 4; i++) assert.ok(Math.abs(rt[i] - c[i]) < 1e-15);
  assert.deepStrictEqual(unpremultiply([0.3, 0.2, 0.1, 0]), [0.3, 0.2, 0.1, 0]);
});

test('Porter-Duff anchors', () => {
  const src = [0.5, 0.25, 0.1, 0.5]; // premultiplied
  const dst = [0.2, 0.6, 0.3, 1.0];
  // opaque source over anything = source
  assert.deepStrictEqual(composite([0.3, 0.4, 0.5, 1], dst, 'source-over'), [0.3, 0.4, 0.5, 1]);
  // fully transparent source over dst = dst
  assert.deepStrictEqual(composite([0, 0, 0, 0], dst, 'source-over'), dst);
  // source-atop preserves backdrop alpha
  assert.strictEqual(composite(src, dst, 'source-atop')[3], dst[3]);
  // xor of two opaque layers is fully transparent
  assert.strictEqual(composite([0.3, 0.3, 0.3, 1], [0.5, 0.5, 0.5, 1], 'xor')[3], 0);
  // lighter adds (and is allowed to exceed 1 — no clamping)
  assert.deepStrictEqual(composite([0.8, 0, 0, 1], [0.8, 0, 0, 1], 'lighter'), [1.6, 0, 0, 2]);
  // clear is transparent black
  assert.deepStrictEqual(composite(src, dst, 'clear'), [0, 0, 0, 0]);
  assert.throws(() => composite(src, dst, 'nope'), /unknown Porter-Duff/);
});

test('compositing on polar coordinates is refused', () => {
  assert.throws(() => composite([0, 0, 0, 1], [0, 0, 0, 1], 'source-over', 'oklch'), /polar/);
  assert.throws(() => blend([0, 0, 0, 1], [0, 0, 0, 1], 'multiply', 'hsl'), /polar/);
});

test('over is associative in premultiplied form (within float64 ulps)', () => {
  const rand = mulberry32(0xACC0);
  for (let n = 0; n < 300; n++) {
    const a = randP(rand), b = randP(rand), c = randP(rand);
    const left = composite(composite(a, b), c);
    const right = composite(a, composite(b, c));
    for (let i = 0; i < 4; i++) {
      assert.ok(Math.abs(left[i] - right[i]) < 1e-15, `assoc[${i}]: ${left[i]} vs ${right[i]}`);
    }
  }
});

test('overStack closed form matches pairwise folding within ulp bounds', () => {
  const rand = mulberry32(0x57AC);
  for (let n = 0; n < 100; n++) {
    const layers = Array.from({ length: 8 }, () => randP(rand));
    const closed = overStack(layers);
    // pairwise: fold from the bottom up
    let acc = layers[layers.length - 1];
    for (let i = layers.length - 2; i >= 0; i--) acc = composite(layers[i], acc);
    for (let i = 0; i < 4; i++) {
      assert.ok(Math.abs(closed[i] - acc[i]) < 1e-14, `stack[${i}]: ${closed[i]} vs ${acc[i]}`);
    }
  }
  // an opaque top layer is the whole answer
  const top = [0.3, 0.2, 0.1, 1];
  assert.deepStrictEqual(overStack([top, [0.9, 0.9, 0.9, 0.7]]), top);
});

test('blend modes: spec anchors', () => {
  const opaque = (r, g, b) => [r, g, b, 1];
  // multiply by white is identity; screen with black is identity
  const c = opaque(0.3, 0.6, 0.9);
  assert.deepStrictEqual(blend(opaque(1, 1, 1), c, 'multiply').slice(0, 3), c.slice(0, 3));
  assert.deepStrictEqual(blend(opaque(0, 0, 0), c, 'screen').slice(0, 3), c.slice(0, 3));
  // difference is symmetric on opaque colors
  const d1 = blend(opaque(0.2, 0.5, 0.8), opaque(0.7, 0.1, 0.4), 'difference');
  const d2 = blend(opaque(0.7, 0.1, 0.4), opaque(0.2, 0.5, 0.8), 'difference');
  for (let i = 0; i < 3; i++) assert.ok(Math.abs(d1[i] - d2[i]) < 1e-15);
  // overlay(b, s) = hard-light(s, b)
  const o = blend(opaque(0.7, 0.2, 0.9), opaque(0.3, 0.6, 0.1), 'overlay');
  const h = blend(opaque(0.3, 0.6, 0.1), opaque(0.7, 0.2, 0.9), 'hard-light');
  for (let i = 0; i < 3; i++) assert.ok(Math.abs(o[i] - h[i]) < 1e-15);
  // color-dodge / color-burn spec edge cases
  assert.strictEqual(blend(opaque(1, 1, 1), opaque(0, 0, 0), 'color-dodge')[0], 0); // Cb=0 → 0
  assert.strictEqual(blend(opaque(0, 0, 0), opaque(1, 1, 1), 'color-burn')[0], 1);  // Cb=1 → 1
  // luminosity of a color with itself is itself
  const self = blend(c, c, 'luminosity');
  for (let i = 0; i < 3; i++) assert.ok(Math.abs(self[i] - c[i]) < 1e-12);
  // transparent source leaves the backdrop unchanged (any mode)
  for (const mode of ['multiply', 'soft-light', 'hue', 'saturation', 'color', 'luminosity']) {
    const r = blend([0.5, 0.5, 0.5, 0], c, mode);
    for (let i = 0; i < 3; i++) assert.ok(Math.abs(r[i] - c[i]) < 1e-15, `${mode}: ${r}`);
  }
  // normal mode with opaque source is the source
  assert.deepStrictEqual(blend(opaque(0.1, 0.2, 0.3), c, 'normal').slice(0, 3), [0.1, 0.2, 0.3]);
});

test('emitted blends agree with the library for every mode', () => {
  const rand = mulberry32(0xB1E2D);
  for (const mode of blendModes) {
    const name = `wp_blend_${mode}`.replace(/-/g, '_');
    const fn = new Function(`${jsBlend(mode)}\nreturn ${name};`)();
    for (let n = 0; n < 50; n++) {
      const s = [rand(), rand(), rand(), rand()];
      const d = [rand(), rand(), rand(), rand()];
      const expected = libBlend(s, d, mode);
      const got = fn(s, d);
      for (let i = 0; i < 4; i++) {
        assert.ok(Math.abs(expected[i] - got[i]) < 1e-14, `${mode}[${i}]: ${got[i]} vs ${expected[i]}`);
      }
    }
    assert.ok(glslBlend(mode).includes(`vec4 ${name}(vec4 src, vec4 dst)`), `glsl ${mode}`);
    assert.ok(wgslBlend(mode).includes(`fn ${name}(src: vec4<f32>, dst: vec4<f32>) -> vec4<f32>`), `wgsl ${mode}`);
    for (const bad of ['NaN', 'Infinity', 'undefined']) {
      assert.ok(!glslBlend(mode).includes(bad) && !wgslBlend(mode).includes(bad), `${mode} contains ${bad}`);
    }
  }
});

test('emitted compositors agree with the library for every operator', () => {
  const rand = mulberry32(0xC0DE);
  for (const op of porterDuffOperators) {
    const name = `wp_composite_${op}`.replace(/-/g, '_');
    const fn = new Function(`${jsComposite(op)}\nreturn ${name};`)();
    for (let n = 0; n < 50; n++) {
      const s = randP(rand), d = randP(rand);
      const expected = composite(s, d, op);
      const got = fn(s, d);
      for (let i = 0; i < 4; i++) {
        assert.ok(Math.abs(expected[i] - got[i]) < 1e-15, `${op}[${i}]`);
      }
    }
    assert.ok(glslComposite(op).includes(`vec4 ${name}(vec4 src, vec4 dst)`));
    assert.ok(wgslComposite(op).includes(`fn ${name}(src: vec4<f32>, dst: vec4<f32>) -> vec4<f32>`));
  }
});
