#!/usr/bin/env node
/* Inline `window.__JqrgLoaderLines` into every game page that hosts the
 * universal jqrg-loader IIFE.
 *
 * Why inline at all:
 *   The loader supports a graceful fallback that lazily script-loads
 *   /js/jqrg-loader-lines.js when the global isn't already set. That
 *   works fine on big games where the splash sits on screen for a
 *   while, but small / cached games can finish loading before the
 *   network has even resolved that fetch. Inlining the payload before
 *   the loader IIFE evaluates means the loader's existing
 *   "is window.__JqrgLoaderLines already set?" guard fires instantly,
 *   so even a 200ms loader still gets a tip line.
 *
 * The migration is idempotent and re-runnable: a second run with a
 * fresh lines payload swaps the old inline block for the new one.
 *
 * Source of truth:
 *   - py/lines.py :: loadingWaitLines (edit there, then
 *     `python3 py/lines.py`)
 *   - which writes /js/jqrg-loader-lines.js (read here)
 */
import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// The unique marker we wrap every inline payload in. Letting the
// migration find an existing block lets us swap-and-stay-idempotent
// when the line list changes.
const OPEN_MARKER = '<!-- jqrg-tip-lines:inline -->';
const CLOSE_MARKER = '<!-- /jqrg-tip-lines:inline -->';

// Loader IIFE in every patched page starts with this exact opener.
// Inserting the inline block right before it keeps the global set
// before the IIFE evaluates and before its `loadTipLines()` runs.
const LOADER_OPEN = '<script>\n/* jqrg-loader.js';

const EXISTING_BLOCK = new RegExp(
  // The existing inline block (and its trailing newline) for swap-
  // out on re-run. Matches non-greedily across lines.
  OPEN_MARKER.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') +
    '[\\s\\S]*?' +
    CLOSE_MARKER.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') +
    '\\n?',
);

async function loadInlineBlock() {
  const src = await fs.readFile(path.join(ROOT, 'js/jqrg-loader-lines.js'), 'utf8');
  const m = src.match(/window\.__JqrgLoaderLines\s*=\s*(\[[\s\S]*?\])\s*;/);
  if (!m) throw new Error('Could not parse js/jqrg-loader-lines.js — regenerate via `python3 py/lines.py`.');
  const lines = JSON.parse(m[1]);
  if (!Array.isArray(lines) || !lines.length) {
    throw new Error('Lines array is empty; nothing to inline.');
  }
  // Compact single-line literal — keeps the inline block tiny in the
  // page source while still surviving copy-paste through JSON.
  const literal = JSON.stringify(lines);
  return (
    OPEN_MARKER + '\n' +
    '<script>window.__JqrgLoaderLines=' + literal + ';</script>\n' +
    CLOSE_MARKER + '\n'
  );
}

function* walk(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); }
  catch { return; }
  for (const e of entries) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (/\.html?$/i.test(e.name)) yield full;
  }
}

async function main() {
  const inlineBlock = await loadInlineBlock();
  let inserted = 0;
  let updated = 0;
  let unchanged = 0;
  let noLoader = 0;
  const failed = [];

  for (const abs of walk(ROOT)) {
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch (e) { failed.push({ rel: path.relative(ROOT, abs), reason: 'read', error: e.message }); continue; }

    if (!src.includes(LOADER_OPEN)) { noLoader++; continue; }

    let next = src;
    let mode;
    if (EXISTING_BLOCK.test(next)) {
      const before = next;
      next = next.replace(EXISTING_BLOCK, inlineBlock);
      mode = next === before ? 'unchanged' : 'updated';
    } else {
      next = next.replace(LOADER_OPEN, inlineBlock + LOADER_OPEN);
      mode = 'inserted';
    }

    if (next === src) { unchanged++; continue; }
    await fs.writeFile(abs, next);
    if (mode === 'inserted') inserted++;
    else updated++;
  }

  console.log(`Inserted  : ${inserted}`);
  console.log(`Updated   : ${updated}`);
  console.log(`Unchanged : ${unchanged}`);
  console.log(`No loader : ${noLoader}`);
  if (failed.length) {
    console.log('Files needing review:');
    for (const f of failed) console.log('  ' + JSON.stringify(f));
    process.exitCode = 1;
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
