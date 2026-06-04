#!/usr/bin/env node
/* Audit every game HTML page in jg and report which ones lack
 * the inlined universal loader. Output is a list of files we still need
 * to patch. The loader is identified by the marker string used in the
 * IIFE: `__JqrgLoaderLoaded`. */
import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const ROOTS = ['jg'];

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
  const files = [];
  for (const r of ROOTS) walk(path.join(ROOT, r)).forEach((f) => files.push(f));

  const missing = [];
  for (const abs of files) {
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch { continue; }
    if (!/<html[\s>]/i.test(src) && !/<body[\s>]/i.test(src) && !/<head[\s>]/i.test(src)) continue;
    if (src.length < 200) continue;
    if (!src.includes('__JqrgLoaderLoaded')) {
      missing.push(path.relative(ROOT, abs));
    }
  }
  missing.sort();
  console.log(`Loader missing in ${missing.length} files:`);
  for (const m of missing) console.log('  ' + m);
}

main().catch((e) => { console.error(e); process.exit(1); });
