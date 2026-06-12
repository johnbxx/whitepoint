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

// solar-disc probes: views on and just off the disc (radius ~0.00445 rad),
// band edges and interior, the turbidity bracket extremes
const S_ELEV = [0.05, 0.3, 1.4];
const S_TURB = [1, 2.7, 4, 9.9];
const S_GAMMA = [0, 0.002, 0.0044, 0.006];
const S_WL = [320, 391.5, 555, 700, 720];

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

  /* solar disc: emitted as a second JSON array on the next line */
  double s_elev[] = {${S_ELEV.join(', ')}};
  double s_turb[] = {${S_TURB.join(', ')}};
  double s_gamma[] = {${S_GAMMA.join(', ')}};
  double s_wl[] = {${S_WL.join(', ')}};
  printf("[\\n");
  first = 1;
  for (int e = 0; e < ${S_ELEV.length}; e++)
  for (int t = 0; t < ${S_TURB.length}; t++) {
    ArHosekSkyModelState *s = arhosekskymodelstate_alloc_init(s_elev[e], s_turb[t], 0.33);
    for (int g = 0; g < ${S_GAMMA.length}; g++)
    for (int w = 0; w < ${S_WL.length}; w++) {
      double theta = (3.14159265358979323846 / 2.0) - s_elev[e];
      double r = arhosekskymodel_solar_radiance(s, theta, s_gamma[g], s_wl[w]);
      if (!first) printf(",\\n");
      first = 0;
      printf("[%d,%d,%d,%d,%.17g]", e, t, g, w, r);
    }
    arhosekskymodelstate_free(s);
  }
  printf("\\n]\\n");
  return 0;
}
`;
writeFileSync(join(work, 'main.c'), main);
execFileSync('cc', ['-O0', '-o', join(work, 'oracle'), join(work, 'main.c'), join(work, 'ArHosekSkyModel.c'), '-lm'], { stdio: 'inherit' });
const raw = execFileSync(join(work, 'oracle'), { encoding: 'utf8', maxBuffer: 1 << 26 });
// each emitted array ends with "\n]\n", so the split strips every closing
// bracket — append it back unconditionally (a data row's own trailing "]"
// must not be mistaken for the array's)
const arrays = raw.split('\n]\n').filter((s) => s.trim()).map((s) => JSON.parse(s + '\n]'));
const [rows, solarRows] = arrays;

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

const solarFixture = {
  source: fixture.source,
  generator: fixture.generator,
  elevations: S_ELEV, turbidities: S_TURB, gammas: S_GAMMA, wavelengths: S_WL, albedo: 0.33,
  // rows: [elevIdx, turbIdx, gammaIdx, wlIdx, radiance] — solar_radiance = disc + sky
  rows: solarRows,
};
writeFileSync(new URL('../test/fixtures/hosek-solar-oracle.json', import.meta.url),
  JSON.stringify(solarFixture));
console.log(`oracle fixtures: ${rows.length} sky + ${solarRows.length} solar reference radiances`);
