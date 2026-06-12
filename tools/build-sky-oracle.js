// Generates test/fixtures/hosek-oracle.json by compiling and running the
// Hosek–Wilkie REFERENCE implementation (tools/data/ArHosekSkyModel.c,
// v1.4a) on a grid of conditions. The fixture lets `npm test` verify
// whitepoint's port against the authors' own code digit-for-digit without
// requiring a C compiler at test time.
//
// Usage: node tools/build-sky-oracle.js   (requires cc in PATH)

import { writeFileSync, mkdtempSync, mkdirSync, cpSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const dataDir = new URL('./data/', import.meta.url).pathname;
const work = mkdtempSync(join(tmpdir(), 'hosek-oracle-'));
for (const f of [
  'ArHosekSkyModel.c', 'ArHosekSkyModel.h',
  'ArHosekSkyModelData_Spectral.h', 'ArHosekSkyModelData_CIEXYZ.h', 'ArHosekSkyModelData_RGB.h',
]) cpSync(join(dataDir, f), join(work, f));

// The probe grid: elevations from grazing to high sun, the turbidity
// extremes plus a fractional value (exercises the bracket blend), both
// albedo extremes plus mid, views from zenith to near-horizon at several
// sun-relative angles, wavelengths on- and off-band (exercises the 40 nm
// interpolation) including the out-of-range edges.
const ELEV = [0.05, 0.3, Math.PI / 4, 1.4];
const TURB = [1, 2.7, 4, 9.9];
const ALB = [0, 0.33, 1];
const VIEW = [[0, 0.5], [0.4, 0.1], [1.0, 1.2], [1.5, 2.8]]; // [theta, gamma]
const WL = [320, 380, 391.5, 460, 555, 589, 620, 700, 720, 745];

const main = `
#include "ArHosekSkyModel.h"
#include <stdio.h>
#include <math.h>
int main(void) {
  double elev[] = {${ELEV.join(', ')}};
  double turb[] = {${TURB.join(', ')}};
  double alb[] = {${ALB.join(', ')}};
  double view[][2] = {${VIEW.map(([t, g]) => `{${t}, ${g}}`).join(', ')}};
  double wl[] = {${WL.join(', ')}};
  printf("[\\n");
  int first = 1;
  for (int e = 0; e < ${ELEV.length}; e++)
  for (int t = 0; t < ${TURB.length}; t++)
  for (int a = 0; a < ${ALB.length}; a++) {
    ArHosekSkyModelState *s = arhosekskymodelstate_alloc_init(elev[e], turb[t], alb[a]);
    for (int v = 0; v < ${VIEW.length}; v++)
    for (int w = 0; w < ${WL.length}; w++) {
      double r = arhosekskymodel_radiance(s, view[v][0], view[v][1], wl[w]);
      if (!first) printf(",\\n");
      first = 0;
      printf("[%d,%d,%d,%d,%d,%.17g]", e, t, a, v, w, r);
    }
    arhosekskymodelstate_free(s);
  }
  printf("\\n]\\n");
  return 0;
}
`;
writeFileSync(join(work, 'main.c'), main);
execFileSync('cc', ['-O0', '-o', join(work, 'oracle'), join(work, 'main.c'), join(work, 'ArHosekSkyModel.c'), '-lm'], { stdio: 'inherit' });
const rows = JSON.parse(execFileSync(join(work, 'oracle'), { encoding: 'utf8', maxBuffer: 1 << 26 }));

const fixture = {
  source: 'ArHosekSkyModel.c v1.4a (Hosek & Wilkie, Charles University in Prague)',
  generator: 'tools/build-sky-oracle.js',
  elevations: ELEV, turbidities: TURB, albedos: ALB, views: VIEW, wavelengths: WL,
  // rows: [elevIdx, turbIdx, albIdx, viewIdx, wlIdx, radiance W·m⁻²·sr⁻¹·nm⁻¹]
  rows,
};
mkdirSync(new URL('../test/fixtures/', import.meta.url), { recursive: true });
writeFileSync(new URL('../test/fixtures/hosek-oracle.json', import.meta.url),
  JSON.stringify(fixture));
console.log(`oracle fixture: ${rows.length} reference radiances`);
