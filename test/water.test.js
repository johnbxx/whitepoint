// Underwater light: Pope & Fry pure-water absorption + Beer–Lambert
// attenuation. The assertions are the textbook facts of diving: water is
// clearest in the blue around 418 nm, red dies within ~10 m, and the
// deeper you go the bluer the world.

import test from 'node:test';
import assert from 'node:assert';
import {
  WATER_ABSORPTION, attenuate, sampleSpd, spectrumXy, D65_SPD,
} from '../src/spectral/index.js';

test('absorption minimum sits in the blue (Pope & Fry: ~418 nm)', () => {
  let best = Infinity, bestL = 0;
  for (let i = 0; i < WATER_ABSORPTION.values.length; i++) {
    if (WATER_ABSORPTION.values[i] < best) {
      best = WATER_ABSORPTION.values[i];
      bestL = WATER_ABSORPTION.start + i * WATER_ABSORPTION.step;
    }
  }
  assert.ok(bestL >= 410 && bestL <= 425, `minimum at ${bestL} nm`);
  assert.ok(best > 0.004 && best < 0.005, `min absorption ${best} 1/m (expect ≈0.0045)`);
});

test('red dies by 10 m, blue survives', () => {
  const t = (lambda, d) => Math.exp(-sampleSpd(WATER_ABSORPTION, lambda) * d);
  assert.ok(t(660, 10) < 0.02, `red T(10m) = ${t(660, 10)}`);
  assert.ok(t(450, 10) > 0.85, `blue T(10m) = ${t(450, 10)}`);
});

test('attenuate: identity at zero distance, bluer with depth', () => {
  const at0 = attenuate(D65_SPD, WATER_ABSORPTION, 0);
  assert.deepStrictEqual(at0.values, D65_SPD.values);

  let prevX = Infinity;
  for (const d of [0, 2, 5, 10, 20]) {
    const xy = spectrumXy(attenuate(D65_SPD, WATER_ABSORPTION, d));
    assert.ok(xy[0] < prevX, `x not decreasing at ${d} m: ${xy[0]}`);
    prevX = xy[0];
  }
  // 20 m of seawater-blue: strongly below the white point
  const deep = spectrumXy(attenuate(D65_SPD, WATER_ABSORPTION, 20));
  assert.ok(deep[0] < 0.25, `xy at 20 m = ${deep}`);
});
