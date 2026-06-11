#!/usr/bin/env node
// Installs the whitepoint agent skill into a Claude Code skills directory.
//
//   npx whitepoint-skill            → ./.claude/skills/whitepoint (this project)
//   npx whitepoint-skill --user     → ~/.claude/skills/whitepoint (all projects)
//
// The skill teaches coding agents whitepoint's conventions, API map, and the
// pitfalls that produce wrong colors. One markdown file; remove the directory
// to uninstall.

import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const src = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills', 'whitepoint');
const user = process.argv.includes('--user') || process.argv.includes('--global');
const destRoot = user
  ? join(homedir(), '.claude', 'skills')
  : join(process.cwd(), '.claude', 'skills');
const dest = join(destRoot, 'whitepoint');

if (!existsSync(src)) {
  console.error('whitepoint-skill: bundled skill not found (broken install?)');
  process.exit(1);
}
mkdirSync(destRoot, { recursive: true });
cpSync(src, dest, { recursive: true });
console.log(`✔ installed whitepoint skill → ${dest}`);
console.log(user
  ? '  available in every project for this user.'
  : '  available in this project. Use --user to install for all projects.');
