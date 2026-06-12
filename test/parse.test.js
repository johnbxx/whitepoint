// CSS Color 4 input parsing. Three layers: the spec's own syntactic
// variety (modern/legacy, units, percentages with their per-channel
// reference ranges, none), the parse∘serialize round trip across every
// space serialize supports, and the never-throws contract on garbage.

import test from 'node:test';
import assert from 'node:assert';
import { parse, parseTo, NAMED_COLORS, convert, serialize } from '../src/index.js';

function close(got, want, tol, msg) {
  assert.ok(got.length === want.length && got.every((v, i) =>
    (Number.isNaN(v) && Number.isNaN(want[i]))
    || Math.abs(v - want[i]) < tol * (1 + Math.abs(want[i]))),
  `${msg}: [${got}] vs [${want}]`);
}

test('hex forms', () => {
  close(parse('#ff8800').coords, [1, 0x88 / 255, 0], 1e-12, '#rrggbb');
  assert.strictEqual(parse('#ff8800').space, 'srgb');
  close(parse('#f80').coords, [1, 0x88 / 255, 0], 1e-12, '#rgb');
  assert.ok(Math.abs(parse('#ff880080').alpha - 0x80 / 255) < 1e-12, '#rrggbbaa alpha');
  assert.ok(Math.abs(parse('#f808').alpha - 0x88 / 255) < 1e-12, '#rgba alpha');
  assert.strictEqual(parse('#ff88'.repeat(3)), null, 'bad length');
  assert.strictEqual(parse('#ggg'), null, 'bad digits');
});

test('named colors, the full table', () => {
  assert.strictEqual(Object.keys(NAMED_COLORS).length, 148);
  close(parse('rebeccapurple').coords, [0x66 / 255, 0x33 / 255, 0x99 / 255], 1e-12, 'rebeccapurple');
  close(parse('White').coords, [1, 1, 1], 1e-12, 'case-insensitive');
  const t = parse('transparent');
  assert.strictEqual(t.alpha, 0);
  // every named color parses to in-range srgb
  for (const name of Object.keys(NAMED_COLORS)) {
    const p = parse(name);
    assert.ok(p && p.coords.every((v) => v >= 0 && v <= 1), name);
  }
});

test('rgb(): modern, legacy, percentages, alpha', () => {
  close(parse('rgb(255 136 0)').coords, [1, 0x88 / 255, 0], 1e-12, 'modern');
  close(parse('rgb(255, 136, 0)').coords, [1, 0x88 / 255, 0], 1e-12, 'legacy');
  close(parse('rgba(255, 136, 0, 0.5)').coords, [1, 0x88 / 255, 0], 1e-12, 'rgba legacy');
  assert.strictEqual(parse('rgba(255, 136, 0, 0.5)').alpha, 0.5);
  close(parse('rgb(100% 50% 0%)').coords, [1, 0.5, 0], 1e-12, 'percentages');
  assert.strictEqual(parse('rgb(255 136 0 / 25%)').alpha, 0.25, 'slash percentage alpha');
  assert.ok(Number.isNaN(parse('rgb(none 136 0)').coords[0]), 'none → NaN');
  assert.ok(parse('rgb(300 -20 0)').coords[0] > 1, 'out of range survives unclamped');
});

test('hsl()/hwb(): hue units and percentage channels', () => {
  close(parse('hsl(120 50% 25%)').coords, [120, 0.5, 0.25], 1e-12, 'hsl modern');
  close(parse('hsl(120, 50%, 25%)').coords, [120, 0.5, 0.25], 1e-12, 'hsl legacy');
  close(parse('hsl(0.5turn 50% 25%)').coords, [180, 0.5, 0.25], 1e-12, 'turn');
  close(parse('hsl(200grad 50% 25%)').coords, [180, 0.5, 0.25], 1e-12, 'grad');
  close(parse(`hsl(${Math.PI}rad 50% 25%)`).coords, [180, 0.5, 0.25], 1e-9, 'rad');
  close(parse('hsl(-90deg 50% 25%)').coords, [-90, 0.5, 0.25], 1e-12, 'negative angle kept');
  assert.strictEqual(parse('hsl(120 -10% 25%)').coords[1], 0, 'negative saturation clamps');
  close(parse('hwb(90 10% 20%)').coords, [90, 0.1, 0.2], 1e-12, 'hwb');
});

test('lab()/lch()/oklab()/oklch(): percentage reference ranges', () => {
  close(parse('lab(50 -20 30)').coords, [50, -20, 30], 1e-12, 'lab numbers');
  close(parse('lab(50% -20% 30%)').coords, [50, -25, 37.5], 1e-12, 'lab %: a/b ref ±125');
  close(parse('lch(52.2% 72.2% 50)').coords, [52.2, 108.3, 50], 1e-9, 'lch %: C ref 150');
  close(parse('oklab(40% 0.1 -0.1)').coords, [0.4, 0.1, -0.1], 1e-12, 'oklab L%→0–1');
  close(parse('oklch(70% 50% 250)').coords, [0.7, 0.2, 250], 1e-12, 'oklch %: C ref 0.4');
  close(parse('oklch(0.7 0.15 250deg)').coords, [0.7, 0.15, 250], 1e-12, 'angle unit on hue');
  assert.ok(Number.isNaN(parse('oklch(70% none 250)').coords[1]), 'none chroma');
});

test('color(): predefined spaces, xyz alias, HDR draft ids', () => {
  const p = parse('color(display-p3 1 0.5 0)');
  assert.strictEqual(p.space, 'display-p3');
  close(p.coords, [1, 0.5, 0], 1e-12, 'p3');
  assert.strictEqual(parse('color(xyz 0.3 0.4 0.2)').space, 'xyz-d65', 'xyz alias');
  close(parse('color(srgb 100% 50% 0%)').coords, [1, 0.5, 0], 1e-12, 'percentages');
  assert.strictEqual(parse('color(rec2100-pq 0.5 0.4 0.3)').space, 'rec2100-pq', 'HDR draft id');
  assert.strictEqual(parse('color(notaspace 1 1 1)'), null, 'unknown id');
});

test('parse ∘ serialize round-trips every serializable space', () => {
  const SPACES = ['srgb', 'hsl', 'hwb', 'lab', 'lch', 'oklab', 'oklch',
    'srgb-linear', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec2020',
    'xyz-d65', 'xyz-d50', 'ictcp', 'jzazbz', 'rec2100-pq', 'rec2100-hlg'];
  const seeds = [[0.2, 0.5, 0.8], [0.9, 0.1, 0.3], [0.5, 0.5, 0.5]];
  for (const space of SPACES) {
    for (const srgb of seeds) {
      const coords = convert(srgb, 'srgb', space);
      const str = serialize(coords, space, { precision: 10 });
      const back = parse(str);
      assert.ok(back !== null, `${space}: "${str}" failed to parse`);
      assert.strictEqual(back.space, space === 'xyz-d65' ? 'xyz-d65' : back.space);
      close(back.coords, coords, 1e-8, `${space} round trip via "${str}"`);
    }
  }
});

test('parseTo: string straight to any space', () => {
  const direct = parseTo('#ff8800', 'oklch');
  const manual = convert([1, 0x88 / 255, 0], 'srgb', 'oklch');
  close(direct, manual, 1e-12, 'parseTo == parse + convert');
  assert.strictEqual(parseTo('not a color', 'oklch'), null);
});

test('garbage strings return null, never throw', () => {
  const GARBAGE = ['', '   ', 'foo', '#', '#12345', 'rgb(', 'rgb()', 'rgb(1 2)',
    'rgb(1 2 3 4 5)', 'oklch(a b c)', 'color()', 'color(srgb 1 2)', 'hsl(1deg 2% 3% / )',
    'rgb(1 2 3 / 0.5 / 0.6)', 'calc(1 + 2)', 'oklch(calc(0.5) 0.1 30)', 'rgb(1,2,3', null,
    42, undefined, 'lab(50 20 30 extra)', '#ffffff extra'];
  for (const g of GARBAGE) {
    let r;
    assert.doesNotThrow(() => { r = parse(g); }, `parse(${JSON.stringify(g)})`);
    assert.strictEqual(r, null, `parse(${JSON.stringify(g)}) → null`);
  }
});
