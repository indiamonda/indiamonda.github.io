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

## Files
- `/Users/Benran/Downloads/Round and Wound.html` — FIXED game (needs animations added)
- `q/g/round-and-wound/index.html` — committed version (has animations, game is broken)
- `agent.md` — this file