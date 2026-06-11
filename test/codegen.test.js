// Codegen parity: the JS emitter is evaluated and compared against the
// library's own convert() across every supported space pair. Since all three
// emitters render the same fused op chains with the same formatter, JS parity
// plus structural checks transfers confidence to the GLSL/WGSL strings.
// (True on-GPU parity tests are a planned CI phase.)

import test from 'node:test';
import assert from 'node:assert';
import { convert } from '../src/index.js';
import { js, glsl, wgsl, supported } from '../src/codegen/index.js';
import { XYZ_TO_LMS } from '../src/spaces/oklab.js';

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const DEG2RAD = Math.PI / 180;
function diff(a, b, polar) {
  if (!polar) return Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]), Math.abs(a[2] - b[2]));
  const aa = a[1] * Math.cos(a[2] * DEG2RAD), ab = a[1] * Math.sin(a[2] * DEG2RAD);
  const ba = b[1] * Math.cos(b[2] * DEG2RAD), bb = b[1] * Math.sin(b[2] * DEG2RAD);
  return Math.max(Math.abs(a[0] - b[0]), Math.abs(aa - ba), Math.abs(ab - bb));
}

const SPACES = supported().filter((s) => s !== 'xyz'); // alias of xyz-d65

test('emitted JS agrees with the library across all space pairs', () => {
  const rand = mulberry32(0x9E37);
  const failures = [];
  for (const from of SPACES) {
    for (const to of SPACES) {
      const name = `wp_${from}_to_${to}`.replace(/-/g, '_');
      const src = js(from, to);
      const fn = new Function(`${src}\nreturn ${name};`)();
      const polar = to === 'oklch' || to === 'lch';
      let worst = 0;
      for (let n = 0; n < 100; n++) {
        const srgb = [rand(), rand(), rand()];
        const input = convert(srgb, 'srgb', from);
        const expected = convert(input, from, to);
        const got = fn(input);
        worst = Math.max(worst, diff(expected, got, polar));
      }
      if (worst >= 1e-9) failures.push(`${from} → ${to}: ${worst.toExponential(2)}`);
    }
  }
  assert.deepStrictEqual(failures, []);
});

test('emitted GLSL/WGSL contains the library constants verbatim', () => {
  // The middle LMS coefficient, exactly as the JS engine holds it.
  const probe = String(XYZ_TO_LMS[4]);
  assert.ok(glsl('xyz-d65', 'oklab').includes(probe), `glsl missing ${probe}`);
  assert.ok(wgsl('xyz-d65', 'oklab').includes(probe), `wgsl missing ${probe}`);
});

test('emitted shader sources are structurally sound for all pairs', () => {
  for (const from of SPACES) {
    for (const to of SPACES) {
      const name = `wp_${from}_to_${to}`.replace(/-/g, '_');
      const g = glsl(from, to);
      const w = wgsl(from, to);
      assert.ok(g.includes(`vec3 ${name}(vec3 c)`), `glsl signature ${name}`);
      assert.ok(w.includes(`fn ${name}(c: vec3<f32>) -> vec3<f32>`), `wgsl signature ${name}`);
      for (const bad of ['NaN', 'Infinity', 'undefined', 'null', 'object']) {
        assert.ok(!g.includes(bad), `glsl ${name} contains "${bad}"`);
        assert.ok(!w.includes(bad), `wgsl ${name} contains "${bad}"`);
      }
      // GLSL float literals must not be bare ints in vec3 constructors — the
      // formatter appends .0 (exponent forms like 2e-17 are valid GLSL floats).
      assert.ok(!/(^|[\s(,])\d+ \* v\./.test(g), `glsl ${name} has integer coefficient`);
    }
  }
});

test('custom function names are honored', () => {
  assert.ok(glsl('oklch', 'srgb', { name: 'oklchToSrgb' }).includes('vec3 oklchToSrgb(vec3 c)'));
});
