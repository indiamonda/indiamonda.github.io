#!/usr/bin/env node
/* One-shot migration that fixes the loader on every game page that sets
 * `<base href="https://cdn.../">`. The base tag rewrites every
 * root-absolute path on the page to that CDN host, which silently breaks:
 *
 *   1. The loader's brand image (`<img id="jqrg-loader-brand">`) and the
 *      splash banner — both fetched via `/q/g/<game>/...png` paths that
 *      now resolve against the CDN host and 404.
 *   2. The cloud + auth scripts that ride alongside the loader. The old
 *      `<script src="/js/jqrg-cloud.js" defer>` ends up trying to fetch
 *      `https://cdn.jsdelivr.net/.../js/jqrg-cloud.js` (404), so the
 *      whole sign-in / sync stack is missing on those pages.
 *   3. Splash background `/background.png` and default banner
 *      `/banner.png` (only matters when `jqrg-loader-black-bg` is not
 *      set; for Silksong the background is forced to black anyway, but
 *      e.g. the vex pages do fade in /background.png).
 *
 * The fix has two parts:
 *   - Loader: capture `location.origin` synchronously in the IIFE (before
 *     <base> is parsed) and pin all root-absolute splash paths to it.
 *   - Cloud injector: replace the static <script src="/js/..."> tags
 *     with a JS injector that builds absolute origin URLs at runtime.
 *
 * Both edits are anchored on exact substrings that exist in the
 * pre-fix loader; the migration is idempotent because once it runs the
 * anchors no longer match. Patterned on migrate-loader-soundgate.mjs.
 */
import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SCAN_ROOTS = ['jg'];

/* ------------------------------------------------------------------ *
 *  Anchor 1: loader configuration block — pin BG_URL/BANNER_URL to   *
 *  the document origin instead of root-absolute paths.               *
 * ------------------------------------------------------------------ */
const CFG_OLD =
  "  // ---------- Configuration --------------------------------------------------\n" +
  "  var BG_URL = '/background.png';\n" +
  "  var BANNER_URL = '/banner.png';\n";

const CFG_NEW =
  "  // ---------- Configuration --------------------------------------------------\n" +
  "  // Pages that set `<base href=\"https://cdn.../\">` (Brawl Stars Simulator,\n" +
  "  // Silksong, etc.) reroute every root-absolute path to the CDN host, which\n" +
  "  // 404s our splash assets. Capture the document origin synchronously here\n" +
  "  // (the IIFE runs in <head> before <base> is parsed) so all loader URLs\n" +
  "  // resolve against the site root regardless of <base>.\n" +
  "  var ORIGIN = (function () {\n" +
  "    try {\n" +
  "      var o = (typeof location !== 'undefined') ? location.origin : '';\n" +
  "      return (o && o !== 'null') ? o : '';\n" +
  "    } catch (_) { return ''; }\n" +
  "  })();\n" +
  "  var BG_URL = ORIGIN + '/background.png';\n" +
  "  var BANNER_URL = ORIGIN + '/banner.png';\n";

/* ------------------------------------------------------------------ *
 *  Anchor 2: getBannerUrlOverride — pin root-absolute meta paths to  *
 *  ORIGIN as well. Without this, e.g. Silksong's per-page logo path  *
 *  /q/g/silksong/StreamingAssets/logo.png is rewritten by <base>    *
 *  to https://cdn.../q/g/silksong/StreamingAssets/logo.png (404).   *
 * ------------------------------------------------------------------ */
const META_OLD =
  "      if (/^https?:\\/\\//i.test(raw) || raw.charAt(0) === '/') return raw;\n";

const META_NEW =
  "      if (/^https?:\\/\\//i.test(raw)) return raw;\n" +
  "      // Pin root-absolute paths to the document origin so a <base href> to a\n" +
  "      // CDN does not silently rewrite them.\n" +
  "      if (raw.charAt(0) === '/') return ORIGIN + raw;\n";

/* ------------------------------------------------------------------ *
 *  Anchor 3: cloud / auth script injection. The static <script> tags *
 *  in the JQRG_CLOUD_INJECT block are rewritten to a JS injector     *
 *  that builds absolute origin URLs at runtime.                      *
 * ------------------------------------------------------------------ */
const CLOUD_OLD =
  '<!-- JQRG_CLOUD_INJECT_BEGIN --><script src="/js/jqrg-cloud.js" defer></script><script src="/js/jqrg-auth-ui.js" defer></script><!-- JQRG_CLOUD_INJECT_END -->';

const CLOUD_NEW =
  '<!-- JQRG_CLOUD_INJECT_BEGIN --><script>\n' +
  '/* The static <script src="/js/jqrg-cloud.js"> tags below sit after the\n' +
  ' * <base href="https://cdn..."> declared on this page, which would route\n' +
  ' * those root-absolute paths to the CDN host (404). Inject them via JS\n' +
  ' * with an explicit absolute URL so they always resolve against the site\n' +
  ' * origin regardless of <base>. */\n' +
  '(function () {\n' +
  '  try {\n' +
  '    var origin = (typeof location !== \'undefined\' && location.origin && location.origin !== \'null\')\n' +
  '      ? location.origin : \'\';\n' +
  '    if (!origin) return;\n' +
  '    function add(src) {\n' +
  '      var s = document.createElement(\'script\');\n' +
  '      s.src = origin + src;\n' +
  '      s.defer = true;\n' +
  '      (document.head || document.documentElement).appendChild(s);\n' +
  '    }\n' +
  '    add(\'/js/jqrg-cloud.js\');\n' +
  '    add(\'/js/jqrg-auth-ui.js\');\n' +
  '  } catch (_) {}\n' +
  '})();\n' +
  '</script><!-- JQRG_CLOUD_INJECT_END -->';

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
  for (const r of SCAN_ROOTS) walk(path.join(ROOT, r)).forEach((f) => files.push(f));

  let patched = 0;
  let skippedAlreadyFixed = 0;
  let skippedNoBase = 0;
  const failed = [];

  for (const abs of files) {
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch { continue; }

    /* Only process files with `<base href="https://...">` — those are the
     * pages whose root-absolute paths get hijacked to a CDN. */
    if (!/<base\s+href=["']https?:\/\//i.test(src)) {
      skippedNoBase++;
      continue;
    }

    /* Idempotency: a file that already has the fix has the ORIGIN block
     * present and the static cloud tags absent. Either is sufficient to
     * mark it as already-fixed. */
    if (src.includes('var ORIGIN = (function () {') && !src.includes(CLOUD_OLD)) {
      skippedAlreadyFixed++;
      continue;
    }

    let next = src;
    let changed = false;
    const reasons = [];

    if (next.includes(CFG_OLD)) {
      next = next.replace(CFG_OLD, CFG_NEW);
      changed = true;
    } else {
      reasons.push('cfg-anchor-missing');
    }

    if (next.includes(META_OLD)) {
      next = next.replace(META_OLD, META_NEW);
      changed = true;
    } else {
      reasons.push('meta-anchor-missing');
    }

    if (next.includes(CLOUD_OLD)) {
      next = next.replace(CLOUD_OLD, CLOUD_NEW);
      changed = true;
    } else {
      reasons.push('cloud-anchor-missing');
    }

    if (!changed) {
      failed.push({ rel: path.relative(ROOT, abs), reasons });
      continue;
    }

    if (next === src) {
      failed.push({ rel: path.relative(ROOT, abs), reasons: ['no-op'] });
      continue;
    }

    await fs.writeFile(abs, next);
    patched++;
    if (reasons.length) {
      console.log(`Partial: ${path.relative(ROOT, abs)} (${reasons.join(', ')})`);
    } else {
      console.log(`Patched: ${path.relative(ROOT, abs)}`);
    }
  }

  console.log('-'.repeat(60));
  console.log(`Patched : ${patched}`);
  console.log(`Already : ${skippedAlreadyFixed}`);
  console.log(`No <base>: ${skippedNoBase}`);
  if (failed.length) {
    console.log('Files needing manual review:');
    for (const f of failed) console.log('  ' + JSON.stringify(f));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
