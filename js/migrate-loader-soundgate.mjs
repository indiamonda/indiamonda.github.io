#!/usr/bin/env node
/* One-shot migration that injects the "Click me to enable sounds" gate
 * into every inlined copy of jqrg-loader. The gate sits between
 * complete() and the splash sequence: when loading hits 100% we hide
 * the progress bar, show a single button, and only kick off the splash
 * (and fire the `jqrg-user-gesture` event) once the user clicks it.
 *
 * The migration is idempotent - it bails out on a file that already has
 * `startSoundGate` defined, so re-running is safe.
 *
 * The two anchor edits below were verified against both the canonical
 * loader (used by 230 game pages) and silksong's customized fork (which
 * has the indeterminate-mode "Extracting Assets" extension). Both share
 * the exact context lines we patch on, so a single migration handles
 * everything.
 */
import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SCAN_ROOTS = ['jg'];

const CSS_OLD =
  "      '#jqrg-loader.jqrg-splash #jqrg-loader-content{opacity:0;transition:opacity .2s linear;pointer-events:none}',\n" +
  "      'html.jqrg-loader-active body,html.jqrg-loader-active>body{visibility:visible}',";

const CSS_NEW =
  "      '#jqrg-loader.jqrg-splash #jqrg-loader-content{opacity:0;transition:opacity .2s linear;pointer-events:none}',\n" +
  "      '#jqrg-loader-sound-gate{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;appearance:none;-webkit-appearance:none;border:1px solid rgba(255,255,255,.5);background:linear-gradient(180deg,rgba(136,65,214,.85),rgba(176,122,255,.85));color:#fff;font:600 18px/1.2 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;padding:14px 26px;border-radius:999px;cursor:pointer;letter-spacing:.02em;text-shadow:0 1px 2px rgba(0,0,0,.5);box-shadow:0 6px 24px rgba(136,65,214,.45),0 0 0 1px rgba(255,255,255,.06) inset;transition:transform .15s ease-out,box-shadow .15s ease-out,background .15s linear;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}',\n" +
  "      '#jqrg-loader-sound-gate:hover{transform:translate(-50%,calc(-50% - 1px));box-shadow:0 8px 28px rgba(136,65,214,.55),0 0 0 1px rgba(255,255,255,.08) inset}',\n" +
  "      '#jqrg-loader-sound-gate:active{transform:translate(-50%,calc(-50% + 1px));box-shadow:0 3px 14px rgba(136,65,214,.4),0 0 0 1px rgba(255,255,255,.06) inset}',\n" +
  "      '@media (max-width:480px){#jqrg-loader-sound-gate{font-size:16px;padding:12px 20px}}',\n" +
  "      'html.jqrg-loader-active body,html.jqrg-loader-active>body{visibility:visible}',";

const FN_OLD =
  "      refreshUI();\n" +
  "    }\n" +
  "    startSplash();\n" +
  "  }\n" +
  "\n" +
  "  // ---------- Splash sequence -----------------------------------------------";

const FN_NEW =
  "      refreshUI();\n" +
  "    }\n" +
  "    startSoundGate();\n" +
  "  }\n" +
  "\n" +
  "  // ---------- Sound gate ----------------------------------------------------\n" +
  "  // Hold the splash until the user clicks once. Browsers gate Web Audio\n" +
  "  // (and many engine startup paths) behind a real user gesture; we use\n" +
  "  // this same click to unlock TurboWarp's scaffolding.start() etc by\n" +
  "  // dispatching `jqrg-user-gesture` on window. The first dismissal sets\n" +
  "  // window.__jqrgUserGestureFired so subsequent navigations within the\n" +
  "  // same document (rare, but possible with hash-routed pages) skip the\n" +
  "  // gate.\n" +
  "  function startSoundGate() {\n" +
  "    if (disposed || !overlay) { cleanup(); return; }\n" +
  "    if (window.__jqrgUserGestureFired) { startSplash(); return; }\n" +
  "    var content = document.getElementById('jqrg-loader-content');\n" +
  "    if (content) content.style.display = 'none';\n" +
  "    var btn = document.createElement('button');\n" +
  "    btn.id = 'jqrg-loader-sound-gate';\n" +
  "    btn.type = 'button';\n" +
  "    btn.textContent = 'Click me to enable sounds';\n" +
  "    overlay.appendChild(btn);\n" +
  "    function dismiss(e) {\n" +
  "      if (e && e.cancelable && typeof e.preventDefault === 'function') {\n" +
  "        try { e.preventDefault(); } catch (_) {}\n" +
  "      }\n" +
  "      if (!btn) return;\n" +
  "      try { btn.removeEventListener('click', dismiss); } catch (_) {}\n" +
  "      try { btn.removeEventListener('touchend', dismiss); } catch (_) {}\n" +
  "      try { btn.parentNode && btn.parentNode.removeChild(btn); } catch (_) {}\n" +
  "      btn = null;\n" +
  "      window.__jqrgUserGestureFired = true;\n" +
  "      try { window.dispatchEvent(new Event('jqrg-user-gesture')); } catch (_) {}\n" +
  "      startSplash();\n" +
  "    }\n" +
  "    btn.addEventListener('click', dismiss);\n" +
  "    btn.addEventListener('touchend', dismiss, { passive: false });\n" +
  "    try { btn.focus(); } catch (_) {}\n" +
  "  }\n" +
  "\n" +
  "  // ---------- Splash sequence -----------------------------------------------";

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
  let skipped = 0;
  let missing = 0;
  const failed = [];

  for (const abs of files) {
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch { continue; }
    if (!src.includes('__JqrgLoaderLoaded')) continue;
    if (src.includes('startSoundGate')) { skipped++; continue; }

    const hasFnAnchor = src.includes(FN_OLD);
    const hasCssAnchor = src.includes(CSS_OLD);
    if (!hasFnAnchor || !hasCssAnchor) {
      missing++;
      failed.push({ rel: path.relative(ROOT, abs), css: hasCssAnchor, fn: hasFnAnchor });
      continue;
    }

    const next = src.replace(FN_OLD, FN_NEW).replace(CSS_OLD, CSS_NEW);
    if (next === src) { failed.push({ rel: path.relative(ROOT, abs), reason: 'no-op' }); continue; }
    await fs.writeFile(abs, next);
    patched++;
  }

  console.log(`Patched : ${patched}`);
  console.log(`Already : ${skipped}`);
  console.log(`Missing : ${missing}`);
  if (failed.length) {
    console.log('Files needing manual review:');
    for (const f of failed) console.log('  ' + JSON.stringify(f));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
