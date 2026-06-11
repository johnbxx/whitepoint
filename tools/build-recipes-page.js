// Generates docs/recipes.html from RECIPES.md — a minimal converter for the
// markdown subset the recipes use (headings, fenced code, paragraphs, lists,
// inline code/bold/links). Keeps the site self-contained instead of bouncing
// visitors to GitHub. Usage: node tools/build-recipes-page.js

import { readFileSync, writeFileSync } from 'node:fs';

const md = readFileSync(new URL('../RECIPES.md', import.meta.url), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) => esc(s)
  .replace(/`([^`]+)`/g, '<code class="inline">$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

const lines = md.split('\n');
let html = '';
let i = 0;
let inList = false;
const closeList = () => { if (inList) { html += '</ul>\n'; inList = false; } };

while (i < lines.length) {
  const line = lines[i];
  if (line.startsWith('```')) {
    closeList();
    let code = '';
    i++;
    while (i < lines.length && !lines[i].startsWith('```')) code += lines[i++] + '\n';
    html += `<pre>${esc(code.trimEnd())}</pre>\n`;
  } else if (line.startsWith('## ')) {
    closeList();
    html += `<h2>${inline(line.slice(3))}</h2>\n`;
  } else if (line.startsWith('# ')) {
    // page supplies its own h1
  } else if (line.startsWith('- ')) {
    if (!inList) { html += '<ul>\n'; inList = true; }
    // gather continuation lines (indented)
    let item = line.slice(2);
    while (i + 1 < lines.length && /^ {2,}\S/.test(lines[i + 1])) item += ' ' + lines[++i].trim();
    html += `<li>${inline(item)}</li>\n`;
  } else if (line.trim() === '') {
    closeList();
  } else {
    closeList();
    let para = line;
    while (i + 1 < lines.length && lines[i + 1].trim() !== '' && !/^(#|```|- )/.test(lines[i + 1])) para += ' ' + lines[++i];
    html += `<p>${inline(para)}</p>\n`;
  }
  i++;
}
closeList();

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>whitepoint — recipes</title>
<meta name="description" content="Job-to-be-done recipes for the whitepoint color library: gradients, gamut mapping, illuminants, HCT palettes, shaders, spectra, compositing.">
<style>
  :root {
    --bg: #0c0d10; --panel: #14161b; --edge: #23262e;
    --text: #e8eaf0; --dim: #9aa0ae; --accent: #4ba3f7;
    --mono: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  * { box-sizing: border-box; margin: 0; }
  body { background: var(--bg); color: var(--text); font: 16px/1.6 system-ui, -apple-system, sans-serif; padding-bottom: 6rem; }
  main { max-width: 880px; margin: 0 auto; padding: 0 1.25rem; }
  nav { position: sticky; top: 0; background: rgba(12,13,16,0.85); backdrop-filter: blur(8px); border-bottom: 1px solid var(--edge); z-index: 10; }
  .navin { max-width: 880px; margin: 0 auto; display: flex; justify-content: space-between; align-items: baseline; padding: 0.65rem 1.25rem; }
  .brand { font-weight: 650; color: var(--text); text-decoration: none; }
  .navlinks a { color: var(--dim); margin-left: 1.1rem; font-size: 0.9rem; text-decoration: none; }
  .navlinks a:hover, .navlinks a.here { color: var(--text); }
  h1 { font-size: 2rem; letter-spacing: -0.02em; padding: 3rem 0 0.25rem; }
  h2 { font-size: 1.2rem; margin: 2.4rem 0 0.6rem; letter-spacing: -0.01em; }
  p { color: var(--dim); max-width: 46rem; margin-bottom: 0.6rem; }
  p strong { color: var(--text); }
  ul { color: var(--dim); margin: 0.4rem 0 0.8rem 1.2rem; max-width: 46rem; }
  li { margin-bottom: 0.35rem; }
  li strong { color: var(--text); }
  pre, code { font-family: var(--mono); font-size: 0.85rem; }
  pre { background: var(--panel); border: 1px solid var(--edge); border-radius: 10px; padding: 1rem 1.25rem; overflow-x: auto; line-height: 1.5; margin: 0.6rem 0 1rem; }
  code.inline { background: var(--panel); padding: 0.1em 0.4em; border-radius: 5px; }
  a { color: var(--accent); }
</style>
</head>
<body>
<nav><div class="navin">
  <a class="brand" href="./index.html">whitepoint</a>
  <div class="navlinks">
    <a href="./index.html">demos</a>
    <a href="./light.html">light lab</a>
    <a href="./accuracy.html">accuracy</a>
    <a class="here" href="./recipes.html">recipes</a>
    <a href="https://www.npmjs.com/package/whitepoint">npm</a>
    <a href="https://github.com/johnbxx/whitepoint">github</a>
  </div>
</div></nav>
<main>
<h1>Recipes</h1>
${html}
</main>
</body>
</html>
`;

writeFileSync(new URL('../docs/recipes.html', import.meta.url), page);
console.log('docs/recipes.html written');
