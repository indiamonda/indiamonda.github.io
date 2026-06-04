#!/usr/bin/env node
/* inject-cloud.mjs
 * Helper that adds the cloud-save + auth UI script bundle to HTML files we host.
 * Loading-screen code is now owned directly by each game HTML page (inlined),
 * so this script only manages the cloud/auth injection markers.
 * The cloud injection is idempotent: running it twice does nothing the second time.
 *
 * Usage:  node js/inject-cloud.mjs           # scan the default roots and patch everything
 *         node js/inject-cloud.mjs --check   # report files that would change but make no edits
 */

import { promises as fs } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DRY_RUN = process.argv.includes('--check');

/** Directory globs that almost certainly contain pages we control. */
const INCLUDE_ROOTS = [
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

/** Top-level HTML files that should also get the injection. `index.html` gets the auth UI
 *  separately so we skip it here to avoid duplicating the script tag. */
const INCLUDE_FILES = [
  '403.html',
  '404.html',
  '404-safe.html',
  '404-building.html',
  '67.html',
  'appel.html',
  'nostalgia.html',
];

const SKIP_BASENAMES = new Set([
  'wrangler.jsonc', 'package.json', 'package-lock.json', 'README.md',
]);

/** Full tag we inject. The BEGIN/END markers make future re-runs a cheap no-op and let us strip
 *  the injection later if we ever need to. jqrg-auth-ui.js depends on jqrg-cloud.js so we keep
 *  them in order; defer ensures both execute after the DOM is parsed. */
const MARKER_BEGIN = '<!-- JQRG_CLOUD_INJECT_BEGIN -->';
const MARKER_END = '<!-- JQRG_CLOUD_INJECT_END -->';
const SCRIPT_TAG = '<script src="/js/jqrg-cloud.js" defer></script><script src="/js/jqrg-auth-ui.js" defer></script>';
const INJECTION = `\n${MARKER_BEGIN}${SCRIPT_TAG}${MARKER_END}\n`;

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); }
  catch { return []; }
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

function shouldInjectCloud(html) {
  if (!html || typeof html !== 'string') return false;
  if (html.includes(MARKER_BEGIN)) return false;
  if (!/<head[\s>]/i.test(html) && !/<!doctype\s+html/i.test(html)) return false;
  return true;
}

function inject(html, payload) {
  // Prefer to sit right before </head> so the script is parsed early; fall back to right after
  // <head>, then inside <html>, then top-of-file.
  if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, payload + '</head>');
  if (/<head[^>]*>/i.test(html)) return html.replace(/<head[^>]*>/i, (m) => m + payload);
  if (/<html[^>]*>/i.test(html)) return html.replace(/<html[^>]*>/i, (m) => m + payload);
  return payload + html;
}

async function processFile(absPath) {
  let html;
  try { html = await fs.readFile(absPath, 'utf8'); }
  catch (err) { return { absPath, status: 'read_failed', reason: err.message }; }

  let patched = html;
  let touched = false;

  if (shouldInjectCloud(patched)) {
    patched = inject(patched, INJECTION);
    touched = true;
  }

  if (!touched) {
    const alreadyHasCloud = html.includes(MARKER_BEGIN);
    if (alreadyHasCloud) return { absPath, status: 'skipped_already' };
    return { absPath, status: 'skipped_structure' };
  }
  if (patched === html) return { absPath, status: 'skipped_noop' };
  if (DRY_RUN) return { absPath, status: 'would_change' };
  await fs.writeFile(absPath, patched, 'utf8');
  return { absPath, status: 'changed' };
}

async function main() {
  const files = new Set();
  for (const rel of INCLUDE_ROOTS) {
    const abs = path.join(ROOT, rel);
    try {
      const st = statSync(abs);
      if (st.isDirectory()) walk(abs).forEach((f) => files.add(f));
    } catch {}
  }
  for (const rel of INCLUDE_FILES) {
    const abs = path.join(ROOT, rel);
    try {
      const st = statSync(abs);
      if (st.isFile()) files.add(abs);
    } catch {}
  }

  const filteredFiles = [...files].filter((f) => !SKIP_BASENAMES.has(path.basename(f)));
  const results = await Promise.all(filteredFiles.map(processFile));
  const counts = {};
  for (const r of results) counts[r.status] = (counts[r.status] || 0) + 1;
  const sortedFiles = results.sort((a, b) => a.absPath.localeCompare(b.absPath));
  for (const r of sortedFiles) {
    const rel = path.relative(ROOT, r.absPath);
    if (r.status === 'changed' || r.status === 'would_change') {
      console.log(r.status.padEnd(15), rel);
    } else if (r.status === 'read_failed') {
      console.warn(r.status.padEnd(15), rel, '-', r.reason);
    }
  }
  console.log('\nSummary:', counts, `(files scanned: ${filteredFiles.length})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
