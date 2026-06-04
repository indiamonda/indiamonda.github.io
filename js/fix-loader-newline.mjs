#!/usr/bin/env node
/* Repair every inlined jqrg-loader script in the repo.
 *
 * The original `js/jqrg-loader.js` ended its style array with
 *   ].join('\n');
 * (an escaped backslash-n inside a string literal). When the loader was
 * inlined into 200+ game HTML files, the editor/build step interpreted
 * the `\n` as a real newline, producing
 *   ].join('
 *   ');
 * which is a SyntaxError because single-quoted JS string literals cannot
 * contain raw newlines. The first inlined <script> throws on parse, so
 * the loader IIFE never runs and no game shows the splash/progress UI.
 *
 * This script walks every .html / .htm file under known game roots and
 * repairs the broken sequence in place. Idempotent on already-fixed
 * files.
 */
import { promises as fs } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const ROOTS = [
  'jg',
  'info',
  'about',
  'html',
  'tools',
  'unblocks',
  'HTML-unblocker',
  'IndexedDB-reader',
  'chat',
  'join',
  'lx',
  'strategies',
];
const TOP_FILES = [
  '403.html',
  '404.html',
  '404-safe.html',
  '404-building.html',
  '67.html',
  'appel.html',
  'nostalgia.html',
];

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const out = [];
  for (const e of entries) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (/\.html?$/i.test(e.name)) out.push(full);
  }
  return out;
}

async function main() {
  const files = new Set();
  for (const rel of ROOTS) {
    const abs = path.join(ROOT, rel);
    try {
      if (statSync(abs).isDirectory()) walk(abs).forEach((f) => files.add(f));
    } catch {}
  }
  for (const rel of TOP_FILES) {
    const abs = path.join(ROOT, rel);
    try {
      if (statSync(abs).isFile()) files.add(abs);
    } catch {}
  }

  // Two known broken patterns produced by the migration:
  //   1) "].join('\n   ')"  with a real newline followed by the closing quote
  //   2) "].join('\n')"     same shape, no leading whitespace before the close
  // Use a regex that only matches the literal-newline case and never the
  // already-correct escaped form. The backslash-n form has no real \n inside
  // the quotes, so it is always safe to leave alone.
  const broken = /\]\.join\('\n[ \t]*'\);/g;
  const fixed = "].join('\\n');";

  let totalFiles = 0;
  let totalReplacements = 0;
  for (const abs of [...files].sort()) {
    let src;
    try {
      src = await fs.readFile(abs, 'utf8');
    } catch {
      continue;
    }
    if (!src.includes("].join('")) continue;
    const updated = src.replace(broken, fixed);
    if (updated !== src) {
      await fs.writeFile(abs, updated, 'utf8');
      // Count occurrences just for the log.
      const count = (src.match(broken) || []).length;
      totalReplacements += count;
      totalFiles++;
      console.log(path.relative(ROOT, abs), '→', count);
    }
  }
  console.log('\nFixed', totalReplacements, 'occurrences across', totalFiles, 'files.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
