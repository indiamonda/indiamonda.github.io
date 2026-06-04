#!/usr/bin/env node
/* update-inject.mjs
 * Rewrites the content between the JQRG_CLOUD_INJECT markers in every HTML file the original
 * injector touched. This is what lets us roll out new script tags (e.g. jqrg-auth-ui.js) without
 * adding duplicate injections. Idempotent – files already matching the new payload are left alone.
 */
import { promises as fs } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const MARKER_BEGIN = '<!-- JQRG_CLOUD_INJECT_BEGIN -->';
const MARKER_END = '<!-- JQRG_CLOUD_INJECT_END -->';
const NEW_PAYLOAD = '<script src="/js/jqrg-cloud.js" defer></script><script src="/js/jqrg-auth-ui.js" defer></script>';

const MARKER_RE = /<!-- JQRG_CLOUD_INJECT_BEGIN -->([\s\S]*?)<!-- JQRG_CLOUD_INJECT_END -->/g;

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return []; }
  const out = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    if (entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && /\.html?$/i.test(entry.name)) out.push(full);
  }
  return out;
}

async function main() {
  const files = walk(ROOT);
  let changed = 0, skipped = 0;
  for (const absPath of files) {
    let html;
    try { html = await fs.readFile(absPath, 'utf8'); } catch { continue; }
    if (!html.includes(MARKER_BEGIN)) continue;
    const wanted = `${MARKER_BEGIN}${NEW_PAYLOAD}${MARKER_END}`;
    const patched = html.replace(MARKER_RE, wanted);
    if (patched === html) { skipped++; continue; }
    await fs.writeFile(absPath, patched, 'utf8');
    changed++;
    console.log('updated', path.relative(ROOT, absPath));
  }
  console.log(`\nDone. ${changed} files updated, ${skipped} already current.`);
}

main().catch((err) => { console.error(err); process.exit(1); });
