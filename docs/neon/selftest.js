// ?selftest — the page checks its own claims, the same ones the demo text
// makes out loud. Deterministic: every frame is tick(T) at a fixed clock,
// so these numbers are reproducible to the pixel.

const T = 10.0;

export async function selftest(alley, canvas) {
  const { tick, state, post, gl } = alley;
  const grab = () => {
    const t = document.createElement('canvas');
    t.width = canvas.width; t.height = canvas.height;
    const x = t.getContext('2d');
    x.drawImage(canvas, 0, 0);
    return x.getImageData(0, 0, canvas.width, canvas.height).data;
  };
  const px = (d, fx, fy) => {
    const i = 4 * (Math.round(fy * canvas.height) * canvas.width + Math.round(fx * canvas.width));
    return [d[i], d[i + 1], d[i + 2]];
  };
  const hue = ([r, g, b]) => {
    const M = Math.max(r, g, b), m = Math.min(r, g, b);
    if (M === m) return null;
    let h;
    if (M === r) h = ((g - b) / (M - m)) % 6;
    else if (M === g) h = (b - r) / (M - m) + 2;
    else h = (r - g) / (M - m) + 4;
    return ((h * 60) + 360) % 360;
  };
  const results = [];
  const check = (name, pass, detail) => results.push({ name, pass, detail });

  state.sodiumOnly = false;
  alley.ctx.uMode.value = 0;
  tick(T);
  const dW = grab();

  // The hero's derived chromaticity is the known neon red-orange.
  const hero = alley.ctx.derived.lights[0];
  const [X, Y, Z] = hero.xyz;
  const cx = X / (X + Y + Z);
  check('neon hero lands red-orange (x 0.63–0.70)', hero.gas !== 'neon' || (cx > 0.63 && cx < 0.70), `gas ${hero.gas}, x=${cx.toFixed(3)}`);

  // Sodium-only: every lit pixel collapses to amber (B ≤ 0.25·R).
  state.sodiumOnly = true; tick(T);
  const dS = grab();
  state.sodiumOnly = false;
  let lit = 0, violations = 0;
  for (let i = 0; i < dS.length; i += 16) {
    if (dS[i] + dS[i + 1] + dS[i + 2] > 45) { lit++; if (dS[i + 2] > 0.25 * dS[i]) violations++; }
  }
  check('sodium-only collapses to amber', lit > 1000 && violations === 0, `${lit} lit samples, ${violations} violations`);

  // The toggle changes the picture, measurably and in hue.
  alley.ctx.uMode.value = 1; tick(T);
  const dN = grab();
  alley.ctx.uMode.value = 0; tick(T);
  let diff = 0, n = 0;
  for (let i = 0; i < dN.length; i += 64) { diff += Math.abs(dN[i] - dW[i]); n++; }
  const hW = hue(px(dW, 0.52, 0.27)), hN = hue(px(dN, 0.52, 0.27));
  check('pipelines differ measurably', diff / n > 5, `mean R diff ${(diff / n).toFixed(1)}/255`);
  check('clip shifts hue where cusp holds it', hW !== null && hN !== null && Math.abs(hW - hN) > 1, `whitepoint ${hW?.toFixed(1)}° vs naive ${hN?.toFixed(1)}°`);

  // On P3 displays, the sRGB preview must actually lose something.
  if (gl.drawingBufferColorSpace === 'display-p3') {
    post().output.uniforms.uSrgbPreview.value = 1; tick(T);
    const dP = grab();
    post().output.uniforms.uSrgbPreview.value = 0; tick(T);
    let maxd = 0;
    for (let i = 0; i < dP.length; i += 16) maxd = Math.max(maxd, Math.abs(dP[i] - dW[i]));
    check('sRGB preview visibly compresses P3 reds', maxd > 4, `max R diff ${maxd}/255`);
  }

  // Perf: synchronous frames, GPU fenced — an upper bound on frame cost.
  tick(T); gl.finish();
  const t1 = performance.now();
  for (let k = 0; k < 60; k++) tick(T + k * 0.016);
  gl.finish();
  const ms = (performance.now() - t1) / 60;
  check('frame budget (< 8 ms)', ms < 8, `${ms.toFixed(2)} ms/frame`);

  console.table(results.map(({ name, pass, detail }) => ({ check: name, pass, detail })));
  const el = document.getElementById('derived');
  if (el) {
    el.textContent = results
      .map((r) => `${r.pass ? 'PASS' : 'FAIL'}  ${r.name} — ${r.detail}`)
      .join('\n') + '\n\n' + el.textContent;
  }
  return results;
}
