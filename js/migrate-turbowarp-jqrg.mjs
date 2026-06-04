#!/usr/bin/env node
/* TurboWarp packager fork-up. For every TurboWarp-packaged game on the
 * site (HTML created by https://packager.turbowarp.org/) we:
 *
 *  1. Replace the loading-screen text "Click anywhere to enable sound(s)"
 *     / "Press anywhere to enable sounds" with a plain "Loading". The
 *     universal jqrg-loader overlay normally covers this view, but when
 *     it tears down before scaffolding fully resolves we don't want the
 *     upstream wording flashing through.
 *
 *  2. Replace the launcher's gating block, which natively shows the
 *     green-flag #launch screen and waits for a click before calling
 *     scaffolding.start(). Our universal "Click me to enable sounds"
 *     button already collected the user gesture, so we instead wait for
 *     the `jqrg-user-gesture` event the loader fires on dismiss and call
 *     scaffolding.start() from there. Audio policies are satisfied
 *     because the listener is invoked synchronously within the
 *     dispatched event chain (which itself originates in the click
 *     handler).
 *
 * The migration is idempotent - it skips files whose tail already binds
 * to `jqrg-user-gesture`, so it is safe to re-run.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const FILES = [
  'jg/games/appel/index.html',
  'jg/games/round-and-wound/index.html',
  'jg/games/asriel-i/index.html',
  'jg/games/gaster-fight/index.html',
  'jg/games/flowey-i/index.html',
  'jg/games/flowey/index.html',
  'jg/games/3/index.html',
  'jg/games/asriel/index.html',
];

// ---------- 1. Loading text ------------------------------------------------
const LOADING_TEXT_PATTERNS = [
  '<h1 class="loading-text">Click anywhere to enable sounds</h1>',
  '<h1 class="loading-text">Click anywhere to enable sound</h1>',
  '<h1 class="loading-text">Press anywhere to enable sounds</h1>',
  '<h1 class="loading-text">Press anywhere to enable sound</h1>',
];
const LOADING_TEXT_NEW = '<h1 class="loading-text">Loading</h1>';

// ---------- 2. Launcher gate ----------------------------------------------
// Both variants ("if (true)" auto-start and "if (false)" green-flag-gated)
// resolve to the same jqrg-user-gesture wiring after the migration.
const GATE_VARIANTS = [
  // if (true) auto-start variant
  '      if (true) {\n' +
    '        scaffolding.start();\n' +
    '      } else {\n' +
    '        launchScreen.hidden = false;\n' +
    '        launchScreen.addEventListener(\'click\', () => {\n' +
    '          launchScreen.hidden = true;\n' +
    '          scaffolding.start();\n' +
    '        });\n' +
    '        launchScreen.focus();\n' +
    '      }',
  // if (false) gated variant
  '      if (false) {\n' +
    '        scaffolding.start();\n' +
    '      } else {\n' +
    '        launchScreen.hidden = false;\n' +
    '        launchScreen.addEventListener(\'click\', () => {\n' +
    '          launchScreen.hidden = true;\n' +
    '          scaffolding.start();\n' +
    '        });\n' +
    '        launchScreen.focus();\n' +
    '      }',
];

const GATE_NEW =
  '      // jqrg fork: skip the green-flag launchScreen. The universal\n' +
  '      // jqrg-loader\'s "Click me to enable sounds" button already\n' +
  '      // collected the user gesture; we listen for `jqrg-user-gesture`\n' +
  '      // and run scaffolding.start() from there. If the gesture has\n' +
  '      // already fired (e.g. instant cache hit) start synchronously.\n' +
  '      launchScreen.hidden = true;\n' +
  '      if (window.__jqrgUserGestureFired) {\n' +
  '        scaffolding.start();\n' +
  '      } else {\n' +
  '        window.addEventListener(\'jqrg-user-gesture\', () => {\n' +
  '          scaffolding.start();\n' +
  '        }, { once: true });\n' +
  '      }';

// ---------- 3. Defensive launchScreen-hidden CSS --------------------------
// Add `#launch { display: none !important; }` near the other style rules
// so the green flag never flashes through if a future TurboWarp upstream
// drift breaks our launcher patch. The `[hidden]` rule already handles
// `launchScreen.hidden = true` but we belt-and-suspender via display:none.
const CSS_OLD = '    [hidden] {\n      display: none !important;\n    }';
const CSS_NEW =
  '    [hidden] {\n      display: none !important;\n    }\n' +
  '    /* jqrg fork: hide the green-flag launchScreen unconditionally;\n' +
  '       scaffolding.start() runs from our jqrg-user-gesture handler. */\n' +
  '    #launch { display: none !important; }';

async function main() {
  let totalText = 0;
  let totalGate = 0;
  let totalCss = 0;
  const summary = [];

  for (const rel of FILES) {
    const abs = path.join(ROOT, rel);
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch (e) { summary.push({ rel, error: e.message }); continue; }

    let next = src;
    let textChanged = false;
    let gateChanged = false;
    let cssChanged = false;

    // 1. Loading text
    if (!next.includes(LOADING_TEXT_NEW)) {
      for (const pat of LOADING_TEXT_PATTERNS) {
        if (next.includes(pat)) {
          next = next.replace(pat, LOADING_TEXT_NEW);
          textChanged = true;
          break;
        }
      }
    }

    // 2. Launcher gate
    // Use a marker string that can only appear *after* this migration
    // (the comment + addEventListener literal). The plain
    // `jqrg-user-gesture` token is now also present from the universal
    // sound-gate migration's startSoundGate function, so it's no longer
    // a reliable "already done" signal here.
    if (!next.includes('jqrg fork: skip the green-flag launchScreen')) {
      for (const gate of GATE_VARIANTS) {
        if (next.includes(gate)) {
          next = next.replace(gate, GATE_NEW);
          gateChanged = true;
          break;
        }
      }
    }

    // 3. CSS belt-and-suspenders (only once per file)
    if (!next.includes('#launch { display: none !important; }')) {
      if (next.includes(CSS_OLD)) {
        next = next.replace(CSS_OLD, CSS_NEW);
        cssChanged = true;
      }
    }

    if (next !== src) await fs.writeFile(abs, next);
    if (textChanged) totalText++;
    if (gateChanged) totalGate++;
    if (cssChanged) totalCss++;
    summary.push({ rel, textChanged, gateChanged, cssChanged });
  }

  console.log(`Loading text rewritten: ${totalText}/${FILES.length}`);
  console.log(`Launcher gate rewired : ${totalGate}/${FILES.length}`);
  console.log(`CSS guard added       : ${totalCss}/${FILES.length}`);
  console.log('Per-file:');
  for (const s of summary) console.log('  ' + JSON.stringify(s));
}

main().catch((e) => { console.error(e); process.exit(1); });
