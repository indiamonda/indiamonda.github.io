#!/usr/bin/env node
/* Bridd Jump only: suppress the universal jqrg-loader (loading bar +
 * sound gate + logo splash) when the user is just hopping between
 * pages inside the game.
 *
 * The flow we want to skip is:
 *   - main menu  -> version page  (PLAY)
 *   - version    -> settings.html (SETTINGS)
 *   - settings   -> version page  (back / save)
 *   - any back/forward navigation between bridd-jump pages
 *
 * Detection strategy: document.referrer. If the previous page is on
 * the same origin and lives under /jg/g/bridd-jump/ we
 * mark `window.__JqrgLoaderLoaded = true` *before* the loader IIFE
 * runs, which trips the loader's existing early-bail and prevents it
 * from creating any DOM, timers, or animations.
 *
 * Fresh entries (typed URL, link from outside, brand-new tab) still
 * have an empty referrer or an off-site one, so the loader behaves
 * normally and the splash plays once.
 *
 * The shim is idempotent: if a marker comment is already present we
 * leave the file alone.
 */
import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GAME_ROOT = path.join(ROOT, 'jg', 'g', 'bridd-jump');

// Anchor: the loader IIFE is the very first <script> in <head> of every
// bridd-jump page that ships the universal loader, opening with this
// exact sequence (head -> blank line -> <script> -> /* jqrg-loader.js).
// Insert our shim right before that <script>.
const ANCHOR = '<script>\n/* jqrg-loader.js';

const SHIM_MARKER = '__jqrgBriddSkipSplashShim';
const SHIM = '<script>\n' +
  '// jqrg fork: bridd-jump-only splash skipper. Runs before the universal\n' +
  '// loader IIFE so the IIFE\'s early-bail (`if (__JqrgLoaderLoaded) return`)\n' +
  '// fires when we set the flag here. Skips the loader when the user is\n' +
  '// navigating between bridd-jump pages (PLAY -> version, version ->\n' +
  '// settings, settings -> version, and back/forward between any of\n' +
  '// those). Fresh entries keep the splash because document.referrer is\n' +
  '// empty / off-origin / outside the bridd-jump tree.\n' +
  '(function ' + SHIM_MARKER + '() {\n' +
  '  try {\n' +
  '    var ref = document.referrer || \'\';\n' +
  '    if (!ref) return;\n' +
  '    var u;\n' +
  '    try { u = new URL(ref); } catch (_) { return; }\n' +
  '    if (u.origin !== location.origin) return;\n' +
  '    if (u.pathname.indexOf(\'/jg/g/bridd-jump/\') !== 0) return;\n' +
  '    window.__JqrgLoaderLoaded = true;\n' +
  '  } catch (_) {}\n' +
  '})();\n' +
  '</script>\n\n';

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); }
  catch { return []; }
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
  const files = walk(GAME_ROOT);
  let patched = 0;
  let skipped = 0;
  let missing = 0;
  const failed = [];

  for (const abs of files) {
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch (e) { failed.push({ rel: path.relative(ROOT, abs), reason: 'read', error: e.message }); continue; }

    if (src.includes(SHIM_MARKER)) { skipped++; continue; }
    if (!src.includes(ANCHOR)) {
      missing++;
      failed.push({ rel: path.relative(ROOT, abs), reason: 'no-anchor' });
      continue;
    }

    const next = src.replace(ANCHOR, SHIM + ANCHOR);
    if (next === src) { failed.push({ rel: path.relative(ROOT, abs), reason: 'no-op' }); continue; }
    await fs.writeFile(abs, next);
    patched++;
  }

  console.log(`Patched : ${patched}`);
  console.log(`Already : ${skipped}`);
  console.log(`Missing : ${missing}`);
  if (failed.length) {
    console.log('Files needing review:');
    for (const f of failed) console.log('  ' + JSON.stringify(f));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
