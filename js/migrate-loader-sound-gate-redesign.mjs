#!/usr/bin/env node
/* Redesign the universal jqrg-loader sound gate.
 *
 * This patches every inlined jqrg-loader instance. Behavior stays the same:
 * the button still provides the required browser user gesture, dispatches
 * `jqrg-user-gesture`, and then starts the logo splash. Only the presentation
 * and markup change.
 *
 * The script also normalizes an earlier partial redesign if it is present.
 * Idempotent: files already containing jqrg-sound-gate-card are skipped.
 */
import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MARKER = 'jqrg-sound-gate-card';

const CSS_PATTERN =
  /      '#jqrg-loader-sound-gate\{[\s\S]*?      '@media \(max-width:480px\)\{#jqrg-loader-sound-gate[^\n]*\}',/;

const TEXT_JS = "    btn.textContent = 'Click me to enable sounds';";
const FIRST_PASS_JS_PATTERN =
  /    btn\.innerHTML = '[^\n]*jqrg-sound-gate-inner[^\n]*';/;
const INNER_JS_PATTERN =
  /    btn\.innerHTML = '[\s\S]*?';\n    btn\.setAttribute\('aria-label', 'Click me to enable sounds'\);/;

const NEW_CSS =
  "      '#jqrg-loader-sound-gate{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;appearance:none;-webkit-appearance:none;border:0;background:transparent;color:#fff;font:inherit;padding:0;cursor:pointer;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;max-width:min(90vw,460px);text-align:left;isolation:isolate}',\n" +
  "      '#jqrg-loader-sound-gate::before{content:\"\";position:absolute;inset:-34px -42px;border-radius:40px;background:radial-gradient(circle at 50% 50%,rgba(176,122,255,.34),rgba(73,200,255,.14) 36%,rgba(136,65,214,.08) 58%,rgba(0,0,0,0) 75%);filter:blur(13px);opacity:.9;z-index:-2;animation:jqrg-sound-aura 3.8s ease-in-out infinite}',\n" +
  "      '#jqrg-loader-sound-gate::after{content:\"\";position:absolute;inset:-1px;border-radius:30px;background:linear-gradient(135deg,rgba(255,255,255,.48),rgba(176,122,255,.2) 31%,rgba(73,200,255,.26) 64%,rgba(255,255,255,.36));opacity:.9;z-index:-1;transition:opacity .18s ease,filter .18s ease,transform .18s ease}',\n" +
  "      '#jqrg-loader-sound-gate:hover{transform:translate(-50%,calc(-50% - 3px))}',\n" +
  "      '#jqrg-loader-sound-gate:hover::before{opacity:1;filter:blur(15px)}',\n" +
  "      '#jqrg-loader-sound-gate:hover::after{opacity:1;filter:brightness(1.12);transform:scale(1.01)}',\n" +
  "      '#jqrg-loader-sound-gate:active{transform:translate(-50%,calc(-50% + 1px)) scale(.99)}',\n" +
  "      '#jqrg-loader-sound-gate:focus-visible::after{box-shadow:0 0 0 3px rgba(255,255,255,.78),0 0 0 8px rgba(176,122,255,.34)}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-card{position:relative;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;min-width:min(86vw,390px);padding:18px 20px;border-radius:29px;background:linear-gradient(180deg,rgba(18,15,34,.88),rgba(8,7,18,.92));box-shadow:0 30px 90px rgba(0,0,0,.62),0 16px 44px rgba(136,65,214,.24),inset 0 1px 0 rgba(255,255,255,.18),inset 0 -1px 0 rgba(255,255,255,.08);overflow:hidden;backdrop-filter:blur(18px) saturate(135%);-webkit-backdrop-filter:blur(18px) saturate(135%)}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-card::before{content:\"\";position:absolute;inset:0;background:linear-gradient(105deg,transparent 0%,rgba(255,255,255,.12) 28%,transparent 47%);transform:translateX(-120%);animation:jqrg-sound-sheen 4.2s ease-in-out infinite;pointer-events:none}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-card::after{content:\"\";position:absolute;inset:1px;border-radius:28px;border:1px solid rgba(255,255,255,.09);pointer-events:none}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-icon{position:relative;display:grid;grid-template-columns:repeat(3,4px);align-items:center;justify-content:center;gap:4px;width:50px;height:50px;border-radius:18px;background:linear-gradient(135deg,#9b6cff,#49c8ff);box-shadow:0 12px 30px rgba(91,132,255,.38),inset 0 1px 0 rgba(255,255,255,.42)}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-icon span{display:block;width:4px;border-radius:99px;background:#fff;box-shadow:0 0 10px rgba(255,255,255,.5);animation:jqrg-sound-bars 1.25s ease-in-out infinite}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-icon span:nth-child(1){height:15px;animation-delay:-.22s}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-icon span:nth-child(2){height:24px;animation-delay:-.08s}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-icon span:nth-child(3){height:18px;animation-delay:-.34s}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-copy{position:relative;display:flex;flex-direction:column;gap:5px;min-width:0}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-title{font-size:18px;font-weight:850;line-height:1.08;letter-spacing:.005em;color:#fff;text-shadow:0 1px 12px rgba(0,0,0,.45);white-space:nowrap}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-subtitle{font-size:12px;font-weight:700;line-height:1.2;letter-spacing:.1em;text-transform:uppercase;color:rgba(226,221,255,.72);white-space:nowrap}',\n" +
  "      '#jqrg-loader-sound-gate .jqrg-sound-gate-arrow{position:relative;display:grid;place-items:center;width:28px;height:28px;border-radius:999px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.82);font-size:18px;font-weight:800;line-height:1;transition:transform .18s ease,background .18s ease,color .18s ease}',\n" +
  "      '#jqrg-loader-sound-gate:hover .jqrg-sound-gate-arrow{transform:translateX(2px);background:rgba(255,255,255,.15);color:#fff}',\n" +
  "      '@keyframes jqrg-sound-aura{0%,100%{opacity:.64;transform:scale(.96)}50%{opacity:1;transform:scale(1.045)}}',\n" +
  "      '@keyframes jqrg-sound-sheen{0%,55%{transform:translateX(-120%)}76%,100%{transform:translateX(120%)}}',\n" +
  "      '@keyframes jqrg-sound-bars{0%,100%{transform:scaleY(.65);opacity:.72}50%{transform:scaleY(1.08);opacity:1}}',\n" +
  "      '@media (prefers-reduced-motion:reduce){#jqrg-loader-sound-gate::before,#jqrg-loader-sound-gate .jqrg-sound-gate-card::before,#jqrg-loader-sound-gate .jqrg-sound-gate-icon span{animation:none}}',\n" +
  "      '@media (max-width:480px){#jqrg-loader-sound-gate .jqrg-sound-gate-card{min-width:min(88vw,340px);grid-template-columns:auto 1fr;gap:12px;padding:15px 16px;border-radius:24px}#jqrg-loader-sound-gate::after{border-radius:25px}#jqrg-loader-sound-gate .jqrg-sound-gate-icon{width:44px;height:44px;border-radius:16px}#jqrg-loader-sound-gate .jqrg-sound-gate-title{font-size:16px;white-space:normal}#jqrg-loader-sound-gate .jqrg-sound-gate-subtitle{font-size:10px;letter-spacing:.085em;white-space:normal}#jqrg-loader-sound-gate .jqrg-sound-gate-arrow{display:none}}',";

const NEW_JS =
  "    btn.innerHTML = '<span class=\"jqrg-sound-gate-card\"><span class=\"jqrg-sound-gate-icon\" aria-hidden=\"true\"><span></span><span></span><span></span></span><span class=\"jqrg-sound-gate-copy\"><span class=\"jqrg-sound-gate-title\">Click me to enable sounds</span><span class=\"jqrg-sound-gate-subtitle\">Unlock audio, then start</span></span><span class=\"jqrg-sound-gate-arrow\" aria-hidden=\"true\">&gt;</span></span>';\n" +
  "    btn.setAttribute('aria-label', 'Click me to enable sounds');";

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
  let patched = 0;
  let already = 0;
  let noLoader = 0;
  const failed = [];

  for (const abs of walk(ROOT)) {
    let src;
    try { src = await fs.readFile(abs, 'utf8'); }
    catch (e) {
      failed.push({ rel: path.relative(ROOT, abs), reason: 'read', error: e.message });
      continue;
    }
    if (!src.includes('jqrg-loader.js') || !src.includes('jqrg-loader-sound-gate')) {
      noLoader++;
      continue;
    }
    if (src.includes(MARKER)) {
      already++;
      continue;
    }

    let out = src;
    if (!CSS_PATTERN.test(out)) {
      failed.push({ rel: path.relative(ROOT, abs), reason: 'missing-css-anchor' });
      continue;
    }
    out = out.replace(CSS_PATTERN, NEW_CSS);

    if (out.includes(TEXT_JS)) {
      out = out.replace(TEXT_JS, NEW_JS);
    } else if (FIRST_PASS_JS_PATTERN.test(out)) {
      out = out.replace(FIRST_PASS_JS_PATTERN, NEW_JS);
    } else if (INNER_JS_PATTERN.test(out)) {
      out = out.replace(INNER_JS_PATTERN, NEW_JS);
    } else {
      failed.push({ rel: path.relative(ROOT, abs), reason: 'missing-js-anchor' });
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
