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
- **Issue**: Broken cloud URL in index.html line 227:
  `https://jimmyqrg.github.io/jqrg-games/undertale/simulators/asriel-i.sb3` → 404
  - Wrapped in try-catch, won't break gameplay, but logs error
  - Would need Turbowarp repackaging to fix properly
- **Added to _D1** (line 3958): `{n:_('T3N1'),img:_("b3N1"),url:_("L3EvZy9vc3Uv"),tags:[]}`
- **jqrg-loader added**: Complete loader with loading bar, sound gate button, banner animation, and cycling tips

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

## Files
- `/Users/Benran/Downloads/Round and Wound.html` — FIXED game (needs animations added)
- `q/g/round-and-wound/index.html` — committed version (has animations, game is broken)
- `agent.md` — this file