# Shady Bears SWF patcher

This folder contains:

- `medvedi.swf` — the patched SWF actually loaded by `index.html`.
- `medvedi.original.swf` — pristine upstream SWF, used as the base for re-imports.
- `assets/` — patched AS3 sources (the source of truth for our patches).
- `rebuild.sh` — one-command rebuild script.
- `.ffdec/` — local JPEXS decompiler cache (gitignored, downloaded on demand).

## What's patched

`gameLogic.tickScale` (default `0.5`) scales every per-tick movement delta
and counter increment in the SWF. Combined with a Ruffle `frameRate: 60`
override in `../../index.html`, the game renders 60 distinct frames per
second while gameplay still plays at the SWF's authored 30 fps wall-clock
speed.

`MainTimeline.frame1` reads `tickScale` from flashvars, so the HTML can pass
`tickScale=1.0` for the `?fps30` URL fallback (Ruffle native rate, no scaling).

The patched files (relative to `assets/scripts/`):

- `gameLogic.as` — declares `static var tickScale:Number = 0.5;`,
  passes `30 / tickScale`, `15 / tickScale`, `10 / tickScale` as shadow delays.
- `medvedi_fla/MainTimeline.as` — reads `params.tickScale` flashvar.
- `hero.as`, `shadow.as`, `bees.as`, `magnet.as`, `honey.as`, `acorn.as`,
  `screen.as`, `effects.as`, `medvedi_fla/gameOverWindow_56.as` — multiply
  per-tick deltas by `ts = gameLogic.tickScale`.

## Rebuilding

You need Java 8+ on the path. On macOS the script will auto-locate
`/usr/libexec/java_home -v 1.8` if `java` isn't already on `$PATH`.

```bash
cd jg/g/shady-bears/src/swf
./rebuild.sh                 # re-import patches into medvedi.swf
./rebuild.sh decompile       # re-decompile medvedi.original.swf into assets/
                             # (start here if upstream SWF changed)
```

The first run downloads JPEXS Free Flash Decompiler v26.0.0 into `./.ffdec/`
(~85 MB, gitignored). Subsequent runs reuse the cache.

## Adding new patches

1. Edit `assets/scripts/<class>.as` directly.
2. Run `./rebuild.sh`.
3. Reload the game in your browser.

## Re-decompiling against a fresh upstream SWF

If the upstream Shady Bears SWF ever changes:

1. Replace `medvedi.original.swf` with the new pristine SWF.
2. Run `./rebuild.sh decompile` to overwrite `assets/` with fresh sources.
3. Re-apply patches manually (the diff is documented above).
4. Run `./rebuild.sh` to produce the new patched `medvedi.swf`.
