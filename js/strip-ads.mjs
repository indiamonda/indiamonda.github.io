#!/usr/bin/env node
/**
 * strip-ads.mjs — Remove ad/analytics script tags from game HTML files.
 * Run: node js/strip-ads.mjs [--dry-run]
 */
import { promises as fs } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'jg', 'g');
const DRY_RUN = process.argv.includes('--dry-run');

const AD_HOSTS = [
  'googletagmanager.com',
  'pagead2.googlesyndication.com',
  'static.cloudflareinsights.com',
  'api.gamemonetize.com',
  'imasdk.googleapis.com',
];

// Match <script ...src="https://...(blocked host)..."...>...</script> or self-closing
const TAG_PATTERNS = AD_HOSTS.map(host => {
  const escaped = host.replace(/\./g, '\\.');
  return new RegExp(
    `<script[^>]+(?:src\\s*=\\s*["'](?:https?:)?//[^"']*${escaped}[^"']*["'][^>]*)>(?:[\\s\\S]*?<\\/script>)?`,
    'gi'
  );
});

// Match the inline gtag/dataLayer block that always follows the gtag loader
const GTAG_INLINE_RE = /\s*<script>\s*(?:window\.)?dataLayer\s*=\s*(?:window\.)?dataLayer\s*\|\|\s*\[\];\s*function\s+gtag\(\)\s*\{\s*dataLayer\.push\(arguments\);\s*\}\s*gtag\(['"]js['"]\s*,\s*new\s+Date\(\)\);\s*(?:gtag\(['"]config['"]\s*,\s*['"][^'"]*['"]\);\s*)*<\/script>/gi;

// Match gamemonetize sdk injection: a.src = "https://api.gamemonetize.com/sdk.js"
const GAMEMONETIZE_INLINE_RE = /\s*<script>\s*[\s\S]*?api\.gamemonetize\.com[\s\S]*?<\/script>/gi;

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    try {
      const st = statSync(full);
      if (st.isDirectory()) {
        if (entry === 'node_modules' || entry === '.git' || entry === 'vendor') continue;
        files.push(...walk(full));
      } else if (entry.endsWith('.html') || entry.endsWith('.htm')) {
        files.push(full);
      }
    } catch (_) {}
  }
  return files;
}

async function main() {
  const htmlFiles = walk(ROOT);
  let totalEdited = 0;
  let totalRemoved = 0;

  for (const file of htmlFiles) {
    let src = await fs.readFile(file, 'utf8');
    let modified = src;
    let removals = 0;

    for (const pat of TAG_PATTERNS) {
      pat.lastIndex = 0;
      const before = modified;
      modified = modified.replace(pat, '');
      if (modified !== before) removals++;
    }

    modified = modified.replace(GTAG_INLINE_RE, () => { removals++; return ''; });
    modified = modified.replace(GAMEMONETIZE_INLINE_RE, () => { removals++; return ''; });

    if (removals > 0) {
      const rel = path.relative(ROOT, file);
      if (DRY_RUN) {
        console.log(`[dry-run] ${rel}: ${removals} removals`);
      } else {
        await fs.writeFile(file, modified, 'utf8');
        console.log(`${rel}: ${removals} removals`);
      }
      totalEdited++;
      totalRemoved += removals;
    }
  }

  console.log(`\nTotal: ${totalEdited} files edited, ${totalRemoved} tags/blocks removed${DRY_RUN ? ' (dry-run)' : ''}`);
}

main().catch(err => { console.error(err); process.exit(1); });
