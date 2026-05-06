#!/usr/bin/env node
/* Inject the cycling-tip footer into every game page that ships the
 * inlined jqrg-loader IIFE.
 *
 * The footer:
 *   - Reads its lines from /js/jqrg-loader-lines.js (kept under
 *     py/lines.py — run `python3 py/lines.py` to regenerate).
 *   - Loads asynchronously after the overlay paints, so the loader is
 *     never blocked on it. The lines file is excluded from the
 *     PerformanceObserver byte counter so its bytes don't pollute the
 *     game's "X / Y" readout.
 *   - Shuffles the array per page load and rotates one line at a time
 *     with a fade transition.
 *   - Hides cleanly during the splash phase (jqrg-splash) and is torn
 *     down with the rest of the overlay in cleanup().
 *
 * Idempotent: skips files that already contain `#jqrg-loader-tip`.
 */
import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const MARKER = '#jqrg-loader-tip';

// ----- Anchor A: PerformanceObserver skip list ---------------------------
const SKIP_OLD =
  "      if (e.name.indexOf('/js/jqrg-auth-ui.js') !== -1) continue;";
const SKIP_NEW = SKIP_OLD + '\n' +
  "      // The cycling-tip data file is loader infrastructure, not game\n" +
  "      // bytes — keep it out of the X / Y readout.\n" +
  "      if (e.name.indexOf('/js/jqrg-loader-lines.js') !== -1) continue;";

// ----- Anchor B: state variables ----------------------------------------
const STATE_OLD = '  var bannerEl = null;';
const STATE_NEW = STATE_OLD + '\n' +
  '  // Cycling tip footer state. tipEl holds the DOM node, tipTimer\n' +
  '  // schedules the next rotation, tipTransitionTimer holds the fade-out\n' +
  '  // -> swap-text -> fade-in handoff, tipLines is the shuffled copy of\n' +
  '  // window.__JqrgLoaderLines once it loads, and tipIndex walks it.\n' +
  '  var tipEl = null;\n' +
  '  var tipTimer = null;\n' +
  '  var tipTransitionTimer = null;\n' +
  '  var tipLines = null;\n' +
  '  var tipIndex = 0;';

// ----- Anchor C: CSS for the tip footer ---------------------------------
// Inject right before the body-visibility rule so the rule order in
// devtools matches the visual stacking (overlay → banner → content →
// gate → tip → final viz toggle).
const CSS_OLD =
  "      '@media (max-width:480px){#jqrg-loader-sound-gate{font-size:16px;padding:12px 20px}}',";
const CSS_NEW = CSS_OLD + '\n' +
  "      '#jqrg-loader-tip{position:absolute;left:0;right:0;bottom:24px;text-align:center;padding:0 24px;color:rgba(255,255,255,.78);font-size:14px;font-weight:400;line-height:1.35;letter-spacing:.01em;text-shadow:0 1px 6px rgba(0,0,0,.6);opacity:0;transition:opacity .35s ease;pointer-events:none;z-index:2;-webkit-font-smoothing:antialiased}',\n" +
  "      '#jqrg-loader-tip.jqrg-tip-show{opacity:1}',\n" +
  "      '@media (max-width:480px){#jqrg-loader-tip{font-size:12px;bottom:18px;padding:0 18px}}',\n" +
  "      '#jqrg-loader.jqrg-splash #jqrg-loader-tip{opacity:0!important;transition:opacity .25s linear;pointer-events:none}',";

// ----- Anchor D: DOM creation inside ensureOverlay() --------------------
const DOM_OLD =
  '    bannerEl.decoding = \'async\';\n' +
  '    overlay.appendChild(bannerEl);\n' +
  '\n' +
  '    var target = document.body || document.documentElement;';
const DOM_NEW =
  '    bannerEl.decoding = \'async\';\n' +
  '    overlay.appendChild(bannerEl);\n' +
  '\n' +
  '    tipEl = document.createElement(\'div\');\n' +
  '    tipEl.id = \'jqrg-loader-tip\';\n' +
  '    overlay.appendChild(tipEl);\n' +
  '\n' +
  '    var target = document.body || document.documentElement;';

// ----- Anchor E: kick off tip-line fetch after refreshUI() --------------
// refreshUI() is the last call inside ensureOverlay(); slipping the tip
// loader call in right after it keeps overlay creation tidy.
const KICK_OLD =
  '    target.appendChild(overlay);\n' +
  '    document.documentElement.classList.add(\'jqrg-loader-active\');\n' +
  '\n' +
  '    refreshUI();\n' +
  '  }';
const KICK_NEW =
  '    target.appendChild(overlay);\n' +
  '    document.documentElement.classList.add(\'jqrg-loader-active\');\n' +
  '\n' +
  '    refreshUI();\n' +
  '    loadTipLines();\n' +
  '  }';

// ----- Anchor F: cleanup() teardown -------------------------------------
const CLEAN_OLD =
  '    overlay = barFillEl = sizeTextEl = pctTextEl = bgEl = bannerEl = null;\n' +
  '    document.documentElement.classList.remove(\'jqrg-loader-active\');\n' +
  '    seenResources = null;';
const CLEAN_NEW =
  '    if (tipTimer) { clearTimeout(tipTimer); tipTimer = null; }\n' +
  '    if (tipTransitionTimer) { clearTimeout(tipTransitionTimer); tipTransitionTimer = null; }\n' +
  '    tipEl = null;\n' +
  '    tipLines = null;\n' +
  '    overlay = barFillEl = sizeTextEl = pctTextEl = bgEl = bannerEl = null;\n' +
  '    document.documentElement.classList.remove(\'jqrg-loader-active\');\n' +
  '    seenResources = null;';

// ----- Anchor G: insert the three tip helpers ---------------------------
// We hang them off the existing "// ---------- Polling fallbacks" comment
// because:
//   - it's the first comment after cleanup(), so the helpers sit beside
//     other lifecycle plumbing rather than buried near the engine hooks;
//   - the comment is unique in the file so the regex anchor is stable;
//   - JS function declarations inside the IIFE are hoisted, so callers
//     in ensureOverlay() resolve regardless of definition order.
const HELPERS_OLD =
  '  // ---------- Polling fallbacks ---------------------------------------------';
const HELPERS_NEW =
  '  // ---------- Tip footer ----------------------------------------------------\n' +
  '  // Pull /js/jqrg-loader-lines.js once per overlay (cached after the\n' +
  '  // first game) and start cycling. window.__JqrgLoaderLines is set as a\n' +
  '  // side effect of that script. If the file errors out we just stay\n' +
  '  // silent — the loader still works.\n' +
  '  function loadTipLines() {\n' +
  '    if (disposed || !tipEl) return;\n' +
  '    if (window.__JqrgLoaderLines && window.__JqrgLoaderLines.length) {\n' +
  '      primeTips(window.__JqrgLoaderLines);\n' +
  '      return;\n' +
  '    }\n' +
  '    try {\n' +
  '      var s = document.createElement(\'script\');\n' +
  '      s.src = \'/js/jqrg-loader-lines.js\';\n' +
  '      s.async = true;\n' +
  '      s.onload = function () {\n' +
  '        if (disposed) return;\n' +
  '        if (window.__JqrgLoaderLines && window.__JqrgLoaderLines.length) {\n' +
  '          primeTips(window.__JqrgLoaderLines);\n' +
  '        }\n' +
  '      };\n' +
  '      (document.head || document.documentElement).appendChild(s);\n' +
  '    } catch (_) {}\n' +
  '  }\n' +
  '\n' +
  '  // Fisher-Yates shuffle so each load shows a different sequence; first\n' +
  '  // line appears immediately, subsequent ones rotate every TIP_HOLD_MS.\n' +
  '  function primeTips(lines) {\n' +
  '    if (disposed || !tipEl) return;\n' +
  '    var arr = lines.slice();\n' +
  '    for (var i = arr.length - 1; i > 0; i--) {\n' +
  '      var j = Math.floor(Math.random() * (i + 1));\n' +
  '      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n' +
  '    }\n' +
  '    tipLines = arr;\n' +
  '    tipIndex = 0;\n' +
  '    showCurrentTip();\n' +
  '  }\n' +
  '\n' +
  '  // Set text, fade in, hold, fade out, advance, repeat. Two timers chain\n' +
  '  // hold -> fade-out so cleanup() can cancel either half cleanly.\n' +
  '  function showCurrentTip() {\n' +
  '    if (disposed || !tipEl || !tipLines || !tipLines.length) return;\n' +
  '    var line = tipLines[tipIndex % tipLines.length];\n' +
  '    tipEl.textContent = line;\n' +
  '    requestAnimationFrame(function () {\n' +
  '      requestAnimationFrame(function () {\n' +
  '        if (tipEl) tipEl.classList.add(\'jqrg-tip-show\');\n' +
  '      });\n' +
  '    });\n' +
  '    tipTimer = setTimeout(function () {\n' +
  '      tipTimer = null;\n' +
  '      if (disposed || !tipEl) return;\n' +
  '      tipEl.classList.remove(\'jqrg-tip-show\');\n' +
  '      tipTransitionTimer = setTimeout(function () {\n' +
  '        tipTransitionTimer = null;\n' +
  '        if (disposed) return;\n' +
  '        tipIndex++;\n' +
  '        showCurrentTip();\n' +
  '      }, 380); // a hair longer than the .35s opacity transition\n' +
  '    }, 4500);\n' +
  '  }\n' +
  '\n' +
  '  // ---------- Polling fallbacks ---------------------------------------------';

const REPLACEMENTS = [
  { name: 'skip-list',     old: SKIP_OLD,    next: SKIP_NEW },
  { name: 'state vars',    old: STATE_OLD,   next: STATE_NEW },
  { name: 'css block',     old: CSS_OLD,     next: CSS_NEW },
  { name: 'overlay dom',   old: DOM_OLD,     next: DOM_NEW },
  { name: 'kick loadTip',  old: KICK_OLD,    next: KICK_NEW },
  { name: 'cleanup',       old: CLEAN_OLD,   next: CLEAN_NEW },
  { name: 'helpers',       old: HELPERS_OLD, next: HELPERS_NEW },
];

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
  const files = [];
  for (const abs of walk(ROOT)) files.push(abs);

  let patched = 0;
  let already = 0;
  let noLoader = 0;
  const failed = [];

  for (const abs of files) {
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch (e) {
      failed.push({ rel: path.relative(ROOT, abs), reason: 'read', error: e.message });
      continue;
    }
    if (!src.includes('jqrg-loader.js') || !src.includes('#jqrg-loader-content')) {
      noLoader++;
      continue;
    }
    if (src.includes(MARKER)) { already++; continue; }

    let out = src;
    const missing = [];
    for (const r of REPLACEMENTS) {
      if (!out.includes(r.old)) { missing.push(r.name); continue; }
      out = out.replace(r.old, r.next);
    }

    if (missing.length) {
      failed.push({ rel: path.relative(ROOT, abs), reason: 'missing-anchor', missing });
      continue;
    }
    if (out === src) {
      failed.push({ rel: path.relative(ROOT, abs), reason: 'no-op' });
      continue;
    }
    await fs.writeFile(abs, out);
    patched++;
  }

  console.log(`Patched   : ${patched}`);
  console.log(`Already   : ${already}`);
  console.log(`No loader : ${noLoader}`);
  if (failed.length) {
    console.log('Files needing review:');
    for (const f of failed) console.log('  ' + JSON.stringify(f));
    process.exitCode = 1;
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
