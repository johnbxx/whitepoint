// Principle #1: derive, don't transcribe — then prove the derivation against
// the published spec matrices. Fixtures are the 10-significant-digit matrices
// from CSS Color 4 sample code (css/css-color-4/conversions.js).

import test from 'node:test';
import assert from 'node:assert';
import { deriveRgbMatrices } from '../src/core/derive.js';
import { rgbSpaceDefs } from '../src/constants/primaries.js';
import { adaptMatrix } from '../src/lab/adapt.js';
import { CSS_D65, CSS_D50 } from '../src/constants/whitepoints.js';

// Most fixtures below are full-precision values from the current CSS Color 4
// sample code (drafts.csswg.org/css-color-4/conversions.js). The sRGB fixture
// uses the spec's exact rationals. Historical note, caught by this very test:
// the older 10-significant-digit matrices that circulate widely (e.g.
// 0.7977604896 for ProPhoto) disagree with the spec's own derivation at ~1e-5;
// we match the derivation, not the folklore.

const TOL = 5e-10;       // for 10-digit printed fixtures
const TOL_EXACT = 1e-12; // for full-precision / rational fixtures

const FIXTURES = {
  srgb: [
    506752 / 1228815, 87881 / 245763, 12673 / 70218,
    87098 / 409605, 175762 / 245763, 12673 / 175545,
    7918 / 409605, 87881 / 737289, 1001167 / 1053270,
  ],
  'display-p3': [
    0.4865709486, 0.2656676932, 0.1982172852,
    0.2289745641, 0.6917385218, 0.0792869141,
    0.0000000000, 0.0451133819, 1.0439443689,
  ],
  'a98-rgb': [
    0.5766690429, 0.1855582379, 0.1882286462,
    0.2973449753, 0.6273635663, 0.0752914585,
    0.0270313614, 0.0706888525, 0.9913375368,
  ],
  // ProPhoto's fixture is its native linear→XYZ-D50 matrix (no adaptation)
  'prophoto-rgb': [
    0.79776664490064230, 0.13518129740053308, 0.03134773412839220,
    0.28807482881940130, 0.71183523424187300, 0.00008993693872564,
    0.00000000000000000, 0.00000000000000000, 0.82510460251046020,
  ],
  rec2020: [
    0.6369580483, 0.1446169036, 0.1688809752,
    0.2627002120, 0.6779980715, 0.0593017165,
    0.0000000000, 0.0280726930, 1.0609850577,
  ],
};

const FIXTURE_TOL = { srgb: TOL_EXACT, 'prophoto-rgb': TOL_EXACT };

for (const [id, expected] of Object.entries(FIXTURES)) {
  test(`derived ${id} matrix matches CSS Color 4 published values`, () => {
    const { toXyz } = deriveRgbMatrices(rgbSpaceDefs[id]);
    const tol = FIXTURE_TOL[id] ?? TOL;
    for (let i = 0; i < 9; i++) {
      assert.ok(Math.abs(toXyz[i] - expected[i]) < tol,
        `${id}[${i}]: derived ${toXyz[i]} vs published ${expected[i]}`);
    }
  });
}

test('computed Bradford D65→D50 matches CSS Color 4 published matrix', () => {
  // Full-precision values from current css-color-4/conversions.js.
  const expected = [
     1.0479297925449969,   0.022946870601609652, -0.05019226628920524,
     0.02962780877005599,  0.9904344267538799,   -0.017073799063418826,
    -0.009243040646204504, 0.015055191490298152,  0.7518742814281371,
  ];
  const m = adaptMatrix(CSS_D65, CSS_D50);
  for (let i = 0; i < 9; i++) {
    assert.ok(Math.abs(m[i] - expected[i]) < TOL_EXACT,
      `bradford[${i}]: computed ${m[i]} vs published ${expected[i]}`);
  }
});
