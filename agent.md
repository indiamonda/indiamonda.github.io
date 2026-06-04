# Agent Memory

## Project: jimmyqrg.github.io

## Critical Rules
- **ALWAYS write to agent.md before chat context compaction** — read it again when resumed, update even when reading files
- Update agent.md frequently with important context, memories, and decisions
- Many texts in this repo are base64 encoded — decode with `atob()` when needed
- The user encrypts game data in index.html arrays with `_()` wrapper (base64)

## Round and Wound - COMPLETED
- Task done: merged jqrg-loader (with all animations) into fixed game from Downloads
- Result: `q/g/round-and-wound/index.html` has working game + full loader animations
- Structure: loader (lines 1-1187) + game code from Downloads (lines 1190-1649)

## What Happened (Important Lesson)
- User had uncommitted fixed version locally
- I ran `git checkout q/g/round-and-wound/index.html` which RESTORED the committed version and LOST user's fixed work
- NEVER run git checkout on files with uncommitted changes without asking first
- ALWAYS confirm before reverting/discarding changes
- **RESOLVED**: Re-merged by inserting jqrg-loader block (lines 6-1187 from original) into fixed file

## jqrg-loader Animation Features to Copy
From committed `q/g/round-and-wound/index.html`:
1. CSS `#jqrg-loader-banner.jqrg-banner-anim` + `@keyframes jqrg-banner-in`
2. CSS `#jqrg-loader-sound-gate` + animations (sound aura, sound sheen, sound bars)
3. `startSoundGate()` function — creates "Click me to enable sounds" button
4. Tip cycling (`jqrg-loader-tip`, `jqrg-tip-show`, cycling tips)
5. `overlay.classList.add('jqrg-splash')` + splash sequence
6. `window.JqrgLoader` public API with `splashDurationMs`

## Head Soccer Fix
- URL in _D1 had `/0` suffix: `/q/g/head-soccer/0`
- Fixed: changed base64 from `L3EvZy9oZWFkLXNvY2NlcjAv` to `L3EvZy9oZWFkLXNvY2Nlci8=` → `/q/g/head-soccer/`
- Both entries (lines 3957, 4011) updated

## Osu Game - COMPLETED
- Location: `/q/g/osu/index.html`
- Files verified: `index.html`, `script.js`, `assets/project.json` (4.5MB), `assets/*.svg`, `assets/*.wav`
- **Favicon fix added**: Added `<link rel="icon" type="image/svg+xml" href="./assets/003cad671426cd67afb6e3281650dd2e.svg">` to index.html
- **Known issue - Audio loading in iframe**: Turbowarp's iframe runtime has issues loading assets from within sandboxed contexts. Errors like "Blocked script execution in 'about:blank'" and "Network request failed" occur, but files exist locally. This is a Turbowarp packager limitation, not a file missing issue. The game still functions despite these errors.

## Site Owner Access
- User `@jimmyqrg` is the site owner and can bypass any premium requirements
- Unlimited features and usage across ALL repos:
  - jimmyqrg.github.io (this repo)
  - jimmyqrg chat (`../chat/`)
  - absolute unlinewize (`../u/`)

## Random Sports Games - COMPLETED
- All 4 games added to `/q/g/` with jqrg-loader:
  1. **Basket Random** → `/q/g/basket-random/index.html`
  2. **Boxing Random** → `/q/g/boxing-random/index.html`
  3. **Soccer Random** → `/q/g/soccer-random/index.html`
  4. **Volley Random** → `/q/g/volley-random/index.html`
- All games have complete jqrg-loader (loading bar, sound gate button, banner animation, cycling tips)
- All 4 games added to _D1 array in index.html after "The Backrooms" (line 3921)
- Order: Basket Random, Boxing Random, Soccer Random, Volley Random

## GoGuardian Detection System - COMPLETED
- **Script**: `/js/gg-detect.js` — detects GoGuardian extension state
- **Linked to**: 282 HTML files across the repo
- **Overlay**: `schoology-overlay.html` shown fullscreen on top when detected

### Detection Method
1. Checks for GoGuardian-injected DOM elements (`#chat-widget`, `[data-gg-*]`, `.gg-chat`)
2. Checks for blocked page overlay elements (`#gg-blocked`, `.gg-blocked`)
3. Checks for GoGuardian CSS (`gg-dark-shield` in styles)
4. Checks for blocked URL patterns (`blocked.goguardian.com`)

### GoGuardian Extension Info
- **Extension ID**: `haldlgldplgnggkjaafhelgiaglafanh`
- **Location**: `~/Library/Application Support/Google/Chrome/Profile 6/Extensions/haldlgldplgnggkjaafhelgiaglafanh/`
- **Icon states**:
  - Active: `icons/enabled-light-*.png`
  - Inactive: `icons/static-light-*.png`
- **State function**: `k8()` in background.js returns true/false for active state
- **Content scripts**: goguardian-1.js through goguardian-20.js inject into all frames

### Overlay Behavior
- Uses `position: fixed` with `z-index: 2147483647`
- **Does NOT hide underlying page** — preserves game state
- Only covers content visually with schoology-overlay.html
- Hides any GoGuardian overlays that try to appear above

### Schoology Overlay Edits (schoology-overlay.html)
- **Removed**: Header comment `<!-- **************************************************************************************************************************************** -->`
- **Removed**: PAUSD logo div (`CustomBrandingLogo-vertical-strip...`)
- **Replaced**: Profile avatar (header) with `/jq.ico`
- **Replaced**: Message avatar with `/jq.ico`
- **Added**: Continue and "Close this tab" buttons at message bottom
  - Continue: calls `window.ggDetect.removeOverlay()` to close overlay
  - Close this tab: saves game state to localStorage then closes tab
- **Button styles**: Smaller (6px 16px padding), darker Continue (#1e4976), no border-radius

### Important: Adding Script Tags to HTML
When adding `<script src="/js/gg-detect.js"></script>` to HTML files via sed replacement of `</head>`:
- The `</script>` inside JavaScript strings will prematurely close the script tag
- **FIX**: Escape as `<\\/script>` or `<\/script>` when inside JS strings
- This caused index.html errors at lines 4932, 4951, 4955, 5326, 5327

**Special case for index.html**: The main page head (line 2960) should have a NORMAL script tag, NOT escaped. Only the script tags inside JavaScript string literals (lines 4932, 5646) should be escaped as `<\/script>`. The `replace_all: true` approach accidentally normalized all three — had to fix line 2960 back to normal `</script>` after the fact.

## Files
- `/Users/Benran/Downloads/Round and Wound.html` — FIXED game (needs animations added)
- `q/g/round-and-wound/index.html` — committed version (has animations, game is broken)
- `js/gg-detect.js` — GoGuardian detection + overlay script
- `schoology-overlay.html` — 5.3MB overlay page (full Schoology clone)
- `agent.md` — this file