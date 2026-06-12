// The Hosek–Wilkie solar disc. Physics first: the disc has a hard edge at
// its angular radius, limb darkening dims the rim (more strongly in the
// blue — the astronomy in the data), turbidity extinguishes, and a low sun
// is redder. Then, when the fixture exists, digit-level agreement with the
// compiled reference (tools/build-sky-oracle.js regenerates both fixtures).

import test from 'node:test';
import assert from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import { skyModel, skyRadiance, sunRadiance, sunSPD } from '../src/sky/index.js';
import { spectrumXy } from '../src/spectral/index.js';

const R_SUN = (0.51 * Math.PI / 180) / 2; // ≈ 0.00445 rad

test('the disc has a hard edge at the solar radius', () => {
  const state = skyModel({ elevation: 0.6, turbidity: 3 });
  const theta = Math.PI / 2 - 0.6;
  assert.ok(sunRadiance(state, theta, 0, 555) > 0, 'center is lit');
  assert.ok(sunRadiance(state, theta, R_SUN * 0.95, 555) > 0, 'inside the rim is lit');
  assert.strictEqual(sunRadiance(state, theta, R_SUN * 1.05, 555), 0, 'outside is dark');
  assert.strictEqual(sunRadiance(state, theta, 0.1, 555), 0);
  assert.strictEqual(sunRadiance(state, theta, 0, 300), 0, 'below 320 nm');
  assert.strictEqual(sunRadiance(state, theta, 0, 750), 0, 'above 720 nm');
});

test('limb darkening: dimmer at the rim, more so in the blue', () => {
  const state = skyModel({ elevation: 0.8, turbidity: 2 });
  const theta = Math.PI / 2 - 0.8;
  for (const wl of [400, 555, 680]) {
    const center = sunRadiance(state, theta, 0, wl);
    const rim = sunRadiance(state, theta, R_SUN * 0.98, wl);
    assert.ok(rim < center, `${wl} nm: rim ${rim} < center ${center}`);
  }
  const ratio = (wl) => sunRadiance(state, theta, R_SUN * 0.95, wl) / sunRadiance(state, theta, 0, wl);
  assert.ok(ratio(400) < ratio(680), `blue rim ratio ${ratio(400)} < red ${ratio(680)}`);
});

test('turbidity extinguishes the direct beam; low sun is redder', () => {
  const theta = Math.PI / 2 - 0.6;
  const clear = skyModel({ elevation: 0.6, turbidity: 1.5 });
  const hazy = skyModel({ elevation: 0.6, turbidity: 8 });
  assert.ok(sunRadiance(hazy, theta, 0, 555) < sunRadiance(clear, theta, 0, 555));

  const high = spectrumXy(sunSPD(skyModel({ elevation: 1.4, turbidity: 3 }), Math.PI / 2 - 1.4));
  const low = spectrumXy(sunSPD(skyModel({ elevation: 0.05, turbidity: 3 }), Math.PI / 2 - 0.05));
  assert.ok(low[0] > high[0], `sunset sun x ${low[0]} > noon ${high[0]}`);
});

test('band interpolation is continuous at the seams', () => {
  const state = skyModel({ elevation: 0.7, turbidity: 4 });
  const theta = Math.PI / 2 - 0.7;
  for (const seam of [400, 560, 680]) {
    const a = sunRadiance(state, theta, 0, seam - 0.01);
    const b = sunRadiance(state, theta, 0, seam + 0.01);
    assert.ok(Math.abs(a - b) / (1 + Math.abs(a)) < 1e-3, `seam ${seam}: ${a} vs ${b}`);
  }
});

const fixture = new URL('./fixtures/hosek-solar-oracle.json', import.meta.url);
test('digit-level agreement with the compiled reference (disc + sky)',
  { skip: !existsSync(fixture) && 'rerun tools/build-sky-oracle.js (needs cc) to generate the solar fixture' },
  () => {
    const { elevations, turbidities, gammas, wavelengths, albedo, rows } =
      JSON.parse(readFileSync(fixture, 'utf8'));
    let worst = 0;
    const states = new Map();
    for (const [e, t, g, w, expected] of rows) {
      const key = `${e}|${t}`;
      if (!states.has(key)) {
        states.set(key, skyModel({ elevation: elevations[e], turbidity: turbidities[t], albedo }));
      }
      const state = states.get(key);
      const theta = Math.PI / 2 - elevations[e];
      const got = sunRadiance(state, theta, gammas[g], wavelengths[w])
        + skyRadiance(state, theta, gammas[g], wavelengths[w]);
      worst = Math.max(worst, Math.abs(got - expected) / (1 + Math.abs(expected)));
    }
    assert.ok(worst < 1e-12, `worst relative disagreement ${worst.toExponential(2)}`);
  });
