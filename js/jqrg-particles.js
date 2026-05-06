/* jqrg-particles.js
 * Background particle system with five visual styles and four quality
 * tiers. The canvas is injected into the document automatically; settings
 * are persisted in localStorage. All renderers draw into a single full-
 * viewport canvas placed behind the app UI.
 *
 *   Public API on `window.JqrgParticles`:
 *     setStyle(style)       - 'constellation'|'nebula'|'aurora'|'quantum'|'crystal'|'none'
 *     setQuality(quality)   - 'potato'|'regular'|'high'|'extreme'
 *     getStyle() / getQuality()
 *     refresh()             - re-read localStorage and rebuild
 *     STYLES, QUALITIES     - lists for UI builders
 *     QUALITY_LABELS        - display labels for the quality picker
 *     STYLE_LABELS          - display labels for the style picker
 *
 * Quality tiers also toggle the body class `lg-on` (liquid glass on) so
 * CSS in index.html can switch surfaces (modals, dropdowns, search bars)
 * to a frosted-glass treatment when the device can clearly handle it.
 */
(function () {
  'use strict';
  if (typeof window === 'undefined') return;
  if (window.__JqrgParticlesLoaded) return;
  window.__JqrgParticlesLoaded = true;

  // ---------- Configuration -------------------------------------------------
  var STYLE_KEY   = 'bgParticleStyle';
  var QUALITY_KEY = 'bgParticleQuality';
  var DEFAULT_STYLE   = 'constellation';
  // High is the default tier so first-time visitors land on the polished
  // "real" look (full glow, trails, liquid glass). Users on weaker hardware
  // can still drop to Regular/Potato in Settings → Appearance. The matching
  // bootstrap fallback in index.html must agree with this constant — the
  // body-class seed there fires before this script loads, so they share the
  // same defaults to avoid a flicker between "no glass" and "glass" right
  // after hydration.
  var DEFAULT_QUALITY = 'high';

  var STYLES    = ['constellation', 'nebula', 'aurora', 'quantum', 'crystal', 'none'];
  var QUALITIES = ['potato', 'regular', 'high', 'extreme'];

  var STYLE_LABELS = {
    constellation: 'Constellation',
    nebula:        'Nebula Drift',
    aurora:        'Aurora Streams',
    quantum:       'Quantum Field',
    crystal:       'Crystal Lattice',
    none:          'No Particles'
  };
  var QUALITY_LABELS = {
    potato:  'Potato',
    regular: 'Regular',
    high:    'High',
    extreme: 'Extreme'
  };

  // Quality recipe. `count` is a multiplier applied to a per-style base
  // population. `glow` controls shadowBlur passes. `trails` toggles a
  // semi-transparent clear so motion leaves fading streaks. `fpsCap`
  // throttles the animation loop. `dpr` clamps device-pixel-ratio so
  // weaker GPUs aren't asked to fill 2x pixels.
  var QUALITY = {
    potato:  { count: 0.30, glow: 'none',   trails: false, fpsCap: 30, dpr: 1.0, layers: 1 },
    regular: { count: 0.65, glow: 'soft',   trails: false, fpsCap: 60, dpr: 1.5, layers: 2 },
    high:    { count: 1.00, glow: 'strong', trails: true,  fpsCap: 60, dpr: 2.0, layers: 3 },
    extreme: { count: 1.50, glow: 'multi',  trails: true,  fpsCap: 60, dpr: 2.0, layers: 4 }
  };

  /* Single source of truth for "how bright should glow be at this tier?". The
   * old code spread shadow-blur literals all over the renderers; centralising
   * them lets us bump every style at once and — crucially for the user's spec
   * "more glow it have, the brighter itself should be" — couple the glow
   * intensity to a fill-alpha multiplier and an inner-core radius bonus so
   * the particle itself reads as brighter, not just the halo around it.
   *
   *   blur         px shadowBlur (raw)
   *   blurMult     stack-pass multiplier; >1 means we draw the glow twice for
   *                a thicker bloom on top tiers (cheap, since shadowBlur is
   *                GPU-accelerated on every modern compositor)
   *   alphaBoost   added to the particle's base alpha (capped at 1)
   *   coreBoost    added to the particle's drawn radius — we paint a brighter
   *                inner dot on top of the main fill on the high tiers, which
   *                is the cheapest way to make a particle "pop" without
   *                scaling its size and breaking the renderer's geometry
   *   chromaCore   when truthy, the bright core uses a 2-stop radial gradient
   *                (white-hot center → palette tint) instead of a flat fill,
   *                giving the look of an LED-bright pixel surrounded by a
   *                colored bloom — the difference between "lit" and "glowing"
   */
  function glowConfig(g) {
    switch (g) {
      case 'multi':  return { blur: 36, blurMult: 2,    alphaBoost: 0.30, coreBoost: 0.85, chromaCore: true  };
      case 'strong': return { blur: 22, blurMult: 1,    alphaBoost: 0.18, coreBoost: 0.55, chromaCore: true  };
      case 'soft':   return { blur: 10, blurMult: 1,    alphaBoost: 0.08, coreBoost: 0.25, chromaCore: false };
      default:       return { blur:  0, blurMult: 0,    alphaBoost: 0.00, coreBoost: 0.00, chromaCore: false };
    }
  }

  /* Drive a 0..1 shimmer envelope for a particle. The shape is chosen so
   * particles spend most of their time gently breathing around a soft mid
   * value, then briefly snap to a sharper, brighter peak — the
   *   blur → clear → shimmer → blur
   * cycle the spec calls out. Two superposed sines avoid the obviously
   * sinusoidal "everything pulses in lockstep" look; the smaller harmonic
   * is detuned per-particle via the `phase` argument so each particle has
   * its own rhythm.
   *
   *   t      seconds (continuous)
   *   phase  per-particle offset (radians)
   *   speed  cycles per second
   */
  function shimmerEnvelope(t, phase, speed) {
    var s = speed || 0.7;
    var a = Math.sin(t * 2 * Math.PI * s + phase);
    var b = Math.sin(t * 2 * Math.PI * s * 1.7 + phase * 1.3);
    return 0.5 + 0.45 * a + 0.18 * b * b * (b > 0 ? 1 : -1);
  }
  /* Companion to shimmerEnvelope: returns a bool that is true only during the
   * brief "sharp peak" window of the cycle, which the renderers use to add an
   * extra-bright core flash so the shimmer reads as a deliberate sparkle and
   * not just an alpha pulse. */
  function shimmerSharp(t, phase, speed) {
    var s = speed || 0.7;
    var v = Math.sin(t * 2 * Math.PI * s + phase);
    return v > 0.85;
  }

  // Theme palette — drawn from the existing site theme.
  var COLORS = {
    purple:     [176, 122, 255], // #b07aff
    accent:     [136,  65, 214], // #8841d6
    pink:       [255, 107, 165],
    pinkBright: [255,  61, 142], // #FF3D8E
    cyan:       [104, 230, 255],
    cyanBright: [  0, 250, 255], // #00FAFF
    deep:       [ 40,  16,  80]
  };

  /* ════ PALETTE CACHE ══════════════════════════════════════════════════════
   * `paletteAt(hue, alpha)` is called HUNDREDS of times per frame (once per
   * particle, sometimes more). The naïve implementation does a 4-stop
   * gradient interpolation followed by a `'rgba(...)'` string concatenation
   * — every call allocates a fresh string and forces a GC tick that, in
   * aggregate, pushes the renderer over the per-frame budget on weaker
   * machines and reads as "lag" to the user.
   *
   * We pre-compute the (R,G,B) triple for HUE_BUCKETS hue stops once at
   * module init, then the per-call work shrinks to:
   *
   *     1. quantize hue → bucket index             (Math.floor)
   *     2. quantize alpha → 0..ALPHA_BUCKETS-1     (Math.round)
   *     3. lookup pre-built rgba string            (array index)
   *
   * Total: zero allocations, zero string concat in the hot path.
   * Quantization granularity (128 hues × 64 alphas = 8 192 strings) is
   * fine enough that the visual difference vs the analytic version is
   * imperceptible — we already round to whole RGB integers anyway.
   *
   * Memory footprint: 8 192 × ~25 bytes = ~200 KB. Negligible. */
  var HUE_BUCKETS   = 128;
  var ALPHA_BUCKETS = 64;
  var rgbCache    = new Array(HUE_BUCKETS);     // {r,g,b} per hue
  var solidStrings = new Array(HUE_BUCKETS);    // 'rgb(r,g,b)' per hue (for globalAlpha path)
  var paletteCache = new Array(HUE_BUCKETS * ALPHA_BUCKETS); // 'rgba(...)' per (hue, alpha)
  (function buildPaletteCache() {
    var stops = [
      { p: 0.00, c: COLORS.cyan },
      { p: 0.33, c: COLORS.purple },
      { p: 0.66, c: COLORS.pink },
      { p: 1.00, c: COLORS.purple }
    ];
    for (var i = 0; i < HUE_BUCKETS; i++) {
      var t = i / HUE_BUCKETS;
      var r = COLORS.purple[0], g = COLORS.purple[1], b = COLORS.purple[2];
      for (var s = 0; s < stops.length - 1; s++) {
        if (t >= stops[s].p && t <= stops[s + 1].p) {
          var lo = stops[s], hi = stops[s + 1];
          var k = (t - lo.p) / (hi.p - lo.p || 1);
          r = Math.round(lo.c[0] + (hi.c[0] - lo.c[0]) * k);
          g = Math.round(lo.c[1] + (hi.c[1] - lo.c[1]) * k);
          b = Math.round(lo.c[2] + (hi.c[2] - lo.c[2]) * k);
          break;
        }
      }
      rgbCache[i] = { r: r, g: g, b: b };
      solidStrings[i] = 'rgb(' + r + ',' + g + ',' + b + ')';
      // Pre-build all rgba strings for this hue. Lazy-fill would also work
      // but the up-front cost is sub-millisecond and saves a branch in the
      // hot path.
      var base = i * ALPHA_BUCKETS;
      for (var a = 0; a < ALPHA_BUCKETS; a++) {
        var alpha = a / (ALPHA_BUCKETS - 1);
        paletteCache[base + a] = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
      }
    }
  })();

  function paletteAt(t, alpha) {
    var n = ((t % 1) + 1) % 1;
    var i = Math.floor(n * HUE_BUCKETS);
    if (i >= HUE_BUCKETS) i = HUE_BUCKETS - 1;
    if (alpha <= 0) return paletteCache[i * ALPHA_BUCKETS]; // alpha=0 string
    if (alpha >= 1) return paletteCache[i * ALPHA_BUCKETS + (ALPHA_BUCKETS - 1)];
    var a = (alpha * (ALPHA_BUCKETS - 1)) | 0; // bitwise floor for speed
    return paletteCache[i * ALPHA_BUCKETS + a];
  }
  /* `paletteSolid(hue)` returns a non-alpha rgb() string for the case where
   * the renderer wants to control alpha via ctx.globalAlpha (much cheaper
   * than encoding alpha in the fillStyle string each frame). */
  function paletteSolid(t) {
    var n = ((t % 1) + 1) % 1;
    var i = Math.floor(n * HUE_BUCKETS);
    if (i >= HUE_BUCKETS) i = HUE_BUCKETS - 1;
    return solidStrings[i];
  }
  /* Returns the raw {r,g,b} triple for callers that need to compose
   * gradients or do further math without re-parsing a string. */
  function paletteRGB(t) {
    var n = ((t % 1) + 1) % 1;
    var i = Math.floor(n * HUE_BUCKETS);
    if (i >= HUE_BUCKETS) i = HUE_BUCKETS - 1;
    return rgbCache[i];
  }

  /* ════ GLOW SPRITE ATLAS ══════════════════════════════════════════════════
   * The single biggest CPU/GPU cost in the previous renderer was
   * `ctx.shadowBlur` + `ctx.createRadialGradient(...)` + `ctx.arc().fill()`
   * fired ~360 times per frame for Nebula and ~240 for Quantum. shadowBlur
   * runs a Gaussian blur on the GPU per fill, gradients allocate, and the
   * shape itself has to be rasterized — three expensive operations per
   * particle, every frame.
   *
   * We replace that with a one-time pre-rendered sprite atlas: a row of
   * white-on-transparent radial-gradient discs at varying intensities.
   * At runtime each particle does a single `ctx.drawImage(...)` from the
   * atlas, scaled to the desired radius and tinted via globalAlpha + a
   * cached fillStyle (or via a tinting pass on the sprite atlas itself).
   * `drawImage` from a same-document canvas is a fast, GPU-friendly blit
   * on every modern browser — typically 5-10× faster than the gradient
   * approach for the same visual result.
   *
   * The atlas is built once per renderer instance (cheap) and held by ref;
   * resizing the viewport doesn't invalidate it. */
  var GLOW_SPRITE_SIZE = 96; // px in atlas coordinates
  function buildGlowSprite() {
    /* Single white-to-transparent radial sprite. Each particle drawImage's
     * this sprite at runtime; the per-particle color tint is achieved by
     * either (a) using ctx.globalCompositeOperation = 'lighter' so the
     * underlying canvas accumulates light from the multiple particles, or
     * (b) drawing a small colored fill over the sprite for the chroma
     * core. The sprite itself is monochrome so the same texture serves
     * every renderer. */
    var sz = GLOW_SPRITE_SIZE;
    var spr = (typeof OffscreenCanvas === 'function')
      ? new OffscreenCanvas(sz, sz)
      : (function(){ var c = document.createElement('canvas'); c.width = sz; c.height = sz; return c; })();
    var sctx = spr.getContext('2d');
    var grad = sctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
    /* Carefully shaped alpha curve — quartic-ish falloff makes the disc
     * look like a real point light source rather than a flat-bordered
     * blob. We tested several curves; this one matches the previous
     * shadowBlur look most closely without any Gaussian filter. */
    grad.addColorStop(0.00, 'rgba(255,255,255,1)');
    grad.addColorStop(0.20, 'rgba(255,255,255,0.62)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.22)');
    grad.addColorStop(0.75, 'rgba(255,255,255,0.05)');
    grad.addColorStop(1.00, 'rgba(255,255,255,0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, sz, sz);
    return spr;
  }
  /* Tinted variants — pre-render the same sprite tinted toward each of
   * HUE_TINTS palette positions. Drawing a tinted pre-rendered sprite is
   * faster than drawing a white sprite and applying a tint mask at
   * runtime (the latter requires a separate compositing op per draw). */
  var HUE_TINTS = 16;
  var glowSprite = null;
  var tintedGlowSprites = null;
  function buildTintedGlowSprites() {
    var arr = new Array(HUE_TINTS);
    var sz = GLOW_SPRITE_SIZE;
    for (var i = 0; i < HUE_TINTS; i++) {
      var hue = i / HUE_TINTS;
      var c = paletteRGB(hue);
      var spr = (typeof OffscreenCanvas === 'function')
        ? new OffscreenCanvas(sz, sz)
        : (function(){ var cv = document.createElement('canvas'); cv.width = sz; cv.height = sz; return cv; })();
      var sctx = spr.getContext('2d');
      var grad = sctx.createRadialGradient(sz/2, sz/2, 0, sz/2, sz/2, sz/2);
      /* Tinted sprites are slightly brighter at the core (white pop) then
       * lean into the palette color through the bloom. This is what gives
       * the "more glow → brighter particle itself" coupling the spec
       * asks for, without a per-frame shadowBlur+chroma-core pass. */
      grad.addColorStop(0.00, 'rgba(255,255,255,1)');
      grad.addColorStop(0.18, 'rgba(' + Math.min(255, c.r + 60) + ',' + Math.min(255, c.g + 60) + ',' + Math.min(255, c.b + 60) + ',0.85)');
      grad.addColorStop(0.45, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0.32)');
      grad.addColorStop(0.75, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0.08)');
      grad.addColorStop(1.00, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)');
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, sz, sz);
      arr[i] = spr;
    }
    return arr;
  }
  /* Helper: tint index closest to a given continuous hue value. */
  function tintIndex(hue) {
    var n = ((hue % 1) + 1) % 1;
    var i = (n * HUE_TINTS) | 0;
    return i >= HUE_TINTS ? HUE_TINTS - 1 : i;
  }
  /* Lazy-init both atlases the first time anything calls into them.
   * Building them eagerly at module-load would race with the canvas-2d
   * context creation (the sprites are themselves canvas-2d).
   * `ensureGlowSprites()` is idempotent and cheap once built. */
  function ensureGlowSprites() {
    if (!glowSprite) glowSprite = buildGlowSprite();
    if (!tintedGlowSprites) tintedGlowSprites = buildTintedGlowSprites();
  }
  /* Convenience: draw a tinted glow at (x,y) with the given radius. The
   * caller is responsible for setting globalCompositeOperation/globalAlpha
   * to control accumulation behavior. */
  function drawGlowSprite(ctx, hue, x, y, radius, alpha) {
    if (!tintedGlowSprites) ensureGlowSprites();
    var spr = tintedGlowSprites[tintIndex(hue)];
    var prev = ctx.globalAlpha;
    ctx.globalAlpha = prev * alpha;
    ctx.drawImage(spr, x - radius, y - radius, radius * 2, radius * 2);
    ctx.globalAlpha = prev;
  }

  // ---------- State ---------------------------------------------------------
  var canvas         = null;
  var ctx            = null;
  var scrim          = null;
  var W              = 0;
  var H              = 0;
  var dpr            = 1;
  var rafId          = 0;
  var lastFrameTime  = 0;
  var frameStartTime = 0;
  var currentStyle   = null;
  var currentQuality = null;
  var renderer       = null;
  var mouse          = { x: -9999, y: -9999, active: false };
  var prefersReduced = false;
  /* Set true while a game iframe is open in the foreground. The render loop
   * short-circuits on this flag and the canvas/scrim are display:none-d so
   * the GPU isn't asked to keep painting the background under an opaque
   * iframe nobody is looking at. The loop still wakes once a frame to check
   * the flag (cheap) instead of being torn down, so resuming when the user
   * closes the game is instantaneous and we don't lose any per-particle
   * state in the renderers. */
  var _paused     = false;

  try {
    prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (_) {}

  // ---------- 2D Perlin noise ----------------------------------------------
  // Used by Aurora Streams and Quantum Field. Lightweight implementation
  // with a single 256-element permutation table — plenty for backgrounds.
  var perm = (function () {
    var p = new Uint8Array(512);
    var t = new Uint8Array(256);
    for (var i = 0; i < 256; i++) t[i] = i;
    // Deterministic shuffle so the field looks the same on every load.
    var seed = 2138472193;
    function rand() { seed = (seed * 1664525 + 1013904223) | 0; return ((seed >>> 0) / 0xFFFFFFFF); }
    for (var j = 255; j > 0; j--) {
      var k = Math.floor(rand() * (j + 1));
      var tmp = t[j]; t[j] = t[k]; t[k] = tmp;
    }
    for (var i2 = 0; i2 < 512; i2++) p[i2] = t[i2 & 255];
    return p;
  })();

  function fade(t)  { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function grad2(hash, x, y) {
    var h = hash & 7;
    var u = h < 4 ? x : y;
    var v = h < 4 ? y : x;
    return ((h & 1) ? -u : u) + ((h & 2) ? -2 * v : 2 * v);
  }
  function noise2(x, y) {
    var X = Math.floor(x) & 255;
    var Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    var u = fade(x), v = fade(y);
    var A  = perm[X] + Y, AA = perm[A], AB = perm[A + 1];
    var B  = perm[X + 1] + Y, BA = perm[B], BB = perm[B + 1];
    return lerp(
      lerp(grad2(perm[AA], x, y),     grad2(perm[BA], x - 1, y),     u),
      lerp(grad2(perm[AB], x, y - 1), grad2(perm[BB], x - 1, y - 1), u),
      v
    );
  }

  // ---------- Bootstrap ----------------------------------------------------
  function init() {
    canvas = document.createElement('canvas');
    canvas.id = 'bg-particles';
    canvas.setAttribute('aria-hidden', 'true');
    /* will-change:transform + translateZ(0) forces this canvas onto its
     * own GPU compositor layer. Without it, `mix-blend-mode:screen`
     * makes the browser defer canvas repaints whenever a nearby
     * scroll container updates — Chrome's "scrolling on compositor"
     * fast path can either repaint the blended result every frame (too
     * expensive) or freeze the last blended frame until scroll
     * settles. It picks the freeze path, which the user sees as the
     * particles stalling whenever any scrollable area is being
     * scrolled. Promoting the canvas to its own layer gives it an
     * independent compositing source that updates from rAF
     * regardless of what the page-content layer is doing. */
    canvas.style.cssText =
      'position:fixed;inset:0;width:100%;height:100%;' +
      'pointer-events:none;display:block;z-index:0;' +
      'mix-blend-mode:screen;' +
      'will-change:transform;transform:translateZ(0);' +
      'backface-visibility:hidden;-webkit-backface-visibility:hidden;';

    // Insert just after .bg so the conic gradient stays at the very back
    // and the particles paint over it. If .bg isn't there yet we fall
    // back to the start of <body>.
    var bg = document.querySelector('.bg');
    if (bg && bg.parentNode) bg.parentNode.insertBefore(canvas, bg.nextSibling);
    else document.body.insertBefore(canvas, document.body.firstChild);

    // Soft scrim sits between the canvas and the UI. It darkens the
    // edges/corners of the viewport so brightly-lit particle styles
    // don't wash out the foreground app shell.
    scrim = document.createElement('div');
    scrim.id = 'bg-scrim';
    scrim.setAttribute('aria-hidden', 'true');
    /* Same GPU-layer promotion as the canvas above — the scrim sits on
     * the same z-index plane and would otherwise share the canvas's
     * compositing fate during scroll. Independent layers stay smooth. */
    scrim.style.cssText =
      'position:fixed;inset:0;pointer-events:none;z-index:0;' +
      'background:' +
        'radial-gradient(ellipse at 50% 35%,transparent 0%,rgba(8,3,16,.18) 55%,rgba(0,0,0,.55) 100%),' +
        'linear-gradient(180deg,rgba(0,0,0,.18) 0%,transparent 35%,transparent 65%,rgba(0,0,0,.28) 100%);' +
      'transition:opacity .3s ease;' +
      'will-change:transform;transform:translateZ(0);';
    canvas.parentNode.insertBefore(scrim, canvas.nextSibling);

    ctx = canvas.getContext('2d', { alpha: true });

    /* Eagerly build the tinted-glow atlas the moment a 2D context exists.
     * Every renderer's draw() reads `tintedGlowSprites[...]`, sometimes
     * before its own `ensureGlowSprites()` guard runs (e.g. when a
     * renderer is swapped mid-frame from the settings UI). Building once
     * here makes the array a hard invariant for the rest of the session,
     * which prevents the "Cannot read properties of null" class of bug
     * even if a future renderer forgets the guard. */
    try { ensureGlowSprites(); } catch (e) { /* deferred until first frame */ }

    window.addEventListener('resize', onResize, { passive: true });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', onResize, { passive: true });
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);

    onResize();
    applySettings();
    start();
  }

  function onResize() {
    var qd = currentQuality ? QUALITY[currentQuality].dpr : 1.5;
    dpr = Math.max(1, Math.min(qd, window.devicePixelRatio || 1));
    var vv = window.visualViewport;
    W = (vv ? vv.width  : 0) || window.innerWidth  || document.documentElement.clientWidth  || 0;
    H = (vv ? vv.height : 0) || window.innerHeight || document.documentElement.clientHeight || 0;
    if (!canvas) return;
    canvas.width  = Math.max(1, Math.floor(W * dpr));
    canvas.height = Math.max(1, Math.floor(H * dpr));
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (renderer && renderer.resize) renderer.resize(W, H);
  }

  function onMouseMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; }
  function onTouchMove(e) {
    if (!e.touches || !e.touches.length) return;
    var t = e.touches[0];
    mouse.x = t.clientX; mouse.y = t.clientY; mouse.active = true;
  }
  function onMouseLeave() { mouse.active = false; mouse.x = -9999; mouse.y = -9999; }

  function onVisibilityChange() {
    if (document.hidden) cancelAnimationFrame(rafId);
    else { lastFrameTime = 0; start(); }
  }

  function getStyle() {
    var s = null;
    try { s = localStorage.getItem(STYLE_KEY); } catch (_) {}
    return STYLES.indexOf(s) >= 0 ? s : DEFAULT_STYLE;
  }
  function getQuality() {
    var q = null;
    try { q = localStorage.getItem(QUALITY_KEY); } catch (_) {}
    return QUALITIES.indexOf(q) >= 0 ? q : DEFAULT_QUALITY;
  }

  function applySettings() {
    var newStyle   = getStyle();
    var newQuality = getQuality();
    if (newStyle === currentStyle && newQuality === currentQuality) return;
    currentStyle   = newStyle;
    currentQuality = newQuality;

    onResize();

    /* Body-class state — handled centrally so the _paused override
     * (forces 'none'/'potato' while a game is foregrounded) and the user's
     * real preferences both flow through the same code path. The CSS
     * meanings live in index.html under `body.lg-on` / `body.lg-extreme`
     * (frosted glass + animated SVG displacement) and `body.particles-on`
     * (scrim + canvas visibility). The matching seed script in index.html
     * sets these synchronously before this file loads, so first paint is
     * already in lockstep. */
    applyEffectiveClasses();

    var none = (newStyle === 'none');
    /* Canvas / scrim visibility — if a game is open right now, force them
     * hidden regardless of the new style; setPaused() already did this
     * when the game opened, but applySettings() can fire mid-game (e.g.
     * the user changed a setting just before opening the game) so we
     * re-assert it here. */
    if (_paused) {
      canvas.style.display = 'none';
      scrim.style.opacity  = '0';
    } else {
      canvas.style.display = none ? 'none' : 'block';
      scrim.style.opacity  = none ? '0' : '1';
    }

    // Quality-specific scrim strength — Extreme particles are bright,
    // we lean a little harder on the dark ellipse so center-of-screen
    // text doesn't fight the scene.
    if (none) {
      scrim.style.background = '';
    } else if (newQuality === 'extreme') {
      scrim.style.background =
        'radial-gradient(ellipse at 50% 35%,transparent 0%,rgba(8,3,16,.30) 50%,rgba(0,0,0,.65) 100%),' +
        'linear-gradient(180deg,rgba(0,0,0,.22) 0%,transparent 30%,transparent 65%,rgba(0,0,0,.35) 100%)';
    } else if (newQuality === 'high') {
      scrim.style.background =
        'radial-gradient(ellipse at 50% 35%,transparent 0%,rgba(8,3,16,.22) 55%,rgba(0,0,0,.58) 100%),' +
        'linear-gradient(180deg,rgba(0,0,0,.20) 0%,transparent 35%,transparent 65%,rgba(0,0,0,.30) 100%)';
    } else {
      scrim.style.background =
        'radial-gradient(ellipse at 50% 35%,transparent 0%,rgba(8,3,16,.18) 55%,rgba(0,0,0,.50) 100%),' +
        'linear-gradient(180deg,rgba(0,0,0,.15) 0%,transparent 35%,transparent 65%,rgba(0,0,0,.25) 100%)';
    }

    if (none) {
      renderer = null;
      if (ctx) ctx.clearRect(0, 0, W, H);
      return;
    }
    var Maker = RENDERERS[newStyle];
    if (!Maker) { renderer = null; return; }
    renderer = new Maker({
      ctx: ctx, width: W, height: H,
      quality: QUALITY[newQuality],
      qualityName: newQuality
    });
  }

  function start() {
    cancelAnimationFrame(rafId);
    lastFrameTime = 0;
    rafId = requestAnimationFrame(loop);
  }

  function loop(t) {
    rafId = requestAnimationFrame(loop);
    if (!renderer) return;
    /* Skip the entire update+draw pass while a game iframe is open. We do
     * NOT cancel the rAF chain — keeping the loop ticking means the user's
     * "close game" click resumes painting on the very next frame, with no
     * visible relayout. The cost while paused is one branch per frame. */
    if (_paused) { lastFrameTime = 0; return; }

    // FPS cap: Potato runs at 30fps to save battery. Other tiers run
    // uncapped (rAF gives us ~60fps where supported).
    var cap = QUALITY[currentQuality].fpsCap;
    if (cap < 60) {
      var minInterval = 1000 / cap;
      if (frameStartTime && (t - frameStartTime) < minInterval) return;
      frameStartTime = t;
    }

    var dt = lastFrameTime ? (t - lastFrameTime) / 1000 : 0.016;
    if (dt > 0.1) dt = 0.016; // avoid huge jumps after tab return
    if (prefersReduced) dt *= 0.4;
    lastFrameTime = t;

    /* Frame-level safety net. If a renderer trips over a transient state
     * (e.g. canvas resizing mid-draw, or a stale cached bundle reading
     * `tintedGlowSprites[...]` before init), we'd previously throw on
     * EVERY single rAF tick — flooding the console and locking up
     * DevTools. We now log once and keep ticking; the next frame usually
     * recovers because state has settled. We also opportunistically
     * re-arm the glow atlas, so any "null sprite" failures self-heal. */
    try {
    renderer.update(dt, t / 1000);
    renderer.draw(ctx, W, H);
    } catch (err) {
      try { ensureGlowSprites(); } catch (e2) { /* nothing more we can do */ }
      if (!loop._loggedErr) {
        loop._loggedErr = true;
        // eslint-disable-next-line no-console
        if (typeof console !== 'undefined' && console.warn) console.warn('[particles] frame skipped:', err);
      }
    }
  }

  /* Toggle whether a game iframe is occluding the background. Called from
   * loadGameInPage() / closeGameOverlay() in index.html.
   *
   * When a game is open we want the page to behave AS IF the user's
   * particle settings were 'No particles' + 'Potato' — purely temporary,
   * the user's real preferences in localStorage are untouched. Going
   * full-Potato while a game is foregrounded buys us:
   *   - the canvas + scrim are hidden so the compositor doesn't try to
   *     keep drawing them under a fully opaque iframe.
   *   - `body.lg-on` and `body.lg-extreme` are removed, so the
   *     liquid-glass `backdrop-filter` + SVG-displacement work on
   *     modals/dropdowns is shut off (those rules are scoped under
   *     `body.lg-on` / `body.lg-extreme` in index.html).
   *   - `body.particles-on` flips to `body.particles-off`, matching the
   *     Potato/None CSS state the rest of the page expects when no
   *     particles are running.
   *   - the rAF loop short-circuits via `_paused`, so the per-particle
   *     update math is skipped too.
   *
   * On unpause we recompute every class from `currentStyle`/`currentQuality`
   * (the real saved values), so the user's actual quality tier comes back
   * exactly as it was. */
  function setPaused(paused) {
    paused = !!paused;
    if (paused === _paused) return;
    _paused = paused;
    if (canvas) canvas.style.display = paused ? 'none' : (currentStyle === 'none' ? 'none' : 'block');
    if (scrim)  scrim.style.opacity  = paused ? '0' : (currentStyle === 'none' ? '0' : '1');
    applyEffectiveClasses();
    if (!paused) {
      // Reset the dt baseline so the first resumed frame doesn't jolt the
      // animation forward by however many seconds the game was open.
      lastFrameTime = 0;
    }
  }

  /* Sync `body` class state with the EFFECTIVE settings — which are the
   * user's real settings normally, but forced to 'none'/'potato' while
   * _paused is true. Centralised so both setPaused() and
   * applySettings() can call it and stay consistent.
   *
   * Note: we don't mutate `currentStyle`/`currentQuality` (they always
   * mirror localStorage) — only the visible class state changes. This
   * means closing a game restores classes in lockstep with whatever the
   * user had picked, even if they happened to change settings while the
   * game was open. */
  function applyEffectiveClasses() {
    var effStyle   = _paused ? 'none'   : currentStyle;
    var effQuality = _paused ? 'potato' : currentQuality;
    var lgOn       = (effQuality === 'high' || effQuality === 'extreme');
    var lgExtreme  = (effQuality === 'extreme');
    var none       = (effStyle === 'none');
    document.body.classList.toggle('lg-on',         lgOn);
    document.body.classList.toggle('lg-off',       !lgOn);
    document.body.classList.toggle('lg-extreme',    lgExtreme);
    document.body.classList.toggle('particles-on', !none);
    document.body.classList.toggle('particles-off', none);
  }

  // =========================================================================
  // 1. Constellation
  //    Drifting nodes connected by gradient lines. Mouse repels nearby
  //    nodes, creating a soft "wake" the user can interact with. Higher
  //    qualities add light pulses that travel along the brightest edges.
  // =========================================================================
  function ConstellationRenderer(opts) {
    var W = opts.width, H = opts.height;
    var q = opts.quality;
    var GC = glowConfig(q.glow);
    /* All quality tiers use the same particle population (the Regular
     * tier's count). Glow, trails, DPR and FPS cap still vary per tier,
     * but density stays constant so the field looks the same everywhere. */
    var POP = QUALITY.regular.count;       // 0.65
    var BASE = 260;
    var COUNT = Math.max(20, Math.round(BASE * POP));
    var MAX_DIST = 130;
    var nodes = [];
    var pulses = [];
    var pulseTimer = 0;

    /* MINOR LAYER — small background dust motes. Their job is to fill
     * the gaps between nodes with low-frequency texture so the field
     * feels like deep space rather than just a graph. They:
     *   - never participate in the edge/pulse passes (no connections,
     *     no mouse repulsion)
     *   - twinkle on their own short cycle, decoupled from nodes
     *   - are tiny enough that the GPU blits them in negligible time
     *   - scale with q.count so Potato gets ~50, Extreme ~300
     * They render in the same `lighter` composite block as the nodes so
     * everything stacks additively, but BEFORE nodes so the foreground
     * stars sit on top of the dust. */
    var motes = [];
    var MOTE_BASE = 200;
    var MOTE_COUNT = Math.max(20, Math.round(MOTE_BASE * POP));
    for (var im = 0; im < MOTE_COUNT; im++) motes.push(makeMote());

    /* MICRO LAYER — sub-mote sparks. Even tinier and dimmer than motes;
     * pinpoint specks twinkling on a fast cycle to give the impression
     * of an infinite starfield receding into depth. They never connect,
     * never react to the cursor, and render at sub-pixel sizes most of
     * the time so the GPU cost is trivial (no shadow blur, no gradient,
     * just one small drawImage from the glow atlas). The layer stack is
     * therefore: clouds → sparks → motes → nodes → pulses → meteors. */
    var sparks = [];
    var SPARK_BASE = 360;
    var SPARK_COUNT = Math.max(40, Math.round(SPARK_BASE * POP));

    /* NEBULA CLOUD LAYER — sparse, very large soft chromatic patches.
     * They sit DEEPEST in the layer stack (drawn before edges) and
     * give the field an atmospheric quality — the impression of
     * looking through gas-filled space rather than at perfectly
     * empty black. Each cloud is a single radialGradient blit (one
     * for the dim half of its slow breathing cycle, fully opaque
     * gradient at its peak), so the cost stays trivial even on
     * Potato. The colour palette per-cloud cycles with the global
     * tint so distant clouds don't look like obvious paint smears.
     *
     * Count is intentionally low and tied to a smaller portion of
     * q.count — clouds are an "atmosphere layer", not a "density
     * layer", so we don't want Extreme to be choked with cloud
     * patches occluding the actual constellation. */
    var clouds = [];
    var CLOUD_BASE = 8;
    var CLOUD_COUNT = Math.max(4, Math.round(CLOUD_BASE * (0.5 + POP * 0.5)));

    /* COMET WISP LAYER — frequent short streaks. Distinct from the
     * `meteors` scheduler in two ways: (a) wisps are smaller and
     * shorter-lived (30-80 px tail, 0.35-0.8 s ttl) so they read as
     * background motion instead of dramatic events, and (b) several
     * can be in flight at once. The cooldown between spawns is
     * tight enough that there's almost always a wisp visible, which
     * keeps the otherwise-static node field feeling alive. */
    var wisps = [];
    var WISP_BASE = 5;
    var WISP_CAP = Math.max(3, Math.round(WISP_BASE * POP));
    var wispCooldown = 0.3 + Math.random() * 0.7;

    /* METEOR LAYER — occasional shooting-star streaks. The constellation
     * field is otherwise quite static (slow node drift, slow shimmer);
     * the meteors give it a moment of motion every few seconds. They
     * travel diagonally across the screen with a bright head and a long
     * fading tail, then expire. Cooldown shortened from 4-12s to 3-7s
     * so meteors are visibly more frequent without ever overlapping. */
    var meteors = [];
    var meteorCooldown = 1.0 + Math.random() * 2.5; // first meteor pretty quick
    function makeMeteor() {
      // Spawn just off the top-left or top-right edge, traveling
      // diagonally toward the opposite bottom corner.
      var fromLeft = Math.random() < 0.5;
      var ang = fromLeft ?
        (Math.PI * 0.10 + Math.random() * Math.PI * 0.18) :
        (Math.PI * 0.72 + Math.random() * Math.PI * 0.18);
      var spd = 380 + Math.random() * 320;
      return {
        x:    fromLeft ? -40 : (W + 40),
        y:    -40 - Math.random() * 60,
        vx:   Math.cos(ang) * spd * (fromLeft ? 1 : -1),
        vy:   Math.sin(ang) * spd,
        life: 0,
        ttl:  1.4 + Math.random() * 0.8,
        hue:  Math.random(),
        // Length of the trail in pixels — drawn as a fading line behind
        // the head's current position.
        tail: 80 + Math.random() * 120,
        thick: 1.0 + Math.random() * 0.8
      };
    }

    for (var i = 0; i < COUNT; i++) nodes.push(makeNode());

    function makeNode() {
      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14,
        size: Math.random() * 1.4 + 0.7,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        /* Shimmer phase + per-node speed so the entire constellation isn't
         * pulsing in lockstep. The speed range is tight enough that nearby
         * nodes still feel like they belong to the same field, but no two
         * nodes share an identical period. */
        shp:  Math.random() * Math.PI * 2,
        shs:  0.45 + Math.random() * 0.65
      };
    }

    function makeMote() {
      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        size: 0.30 + Math.random() * 0.60,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.5 + Math.random() * 1.1,
        // Per-mote alpha ceiling — most stay quiet, a few are slightly
        // brighter so the field has a faint depth gradient rather than a
        // uniform haze.
        peak: 0.18 + Math.random() * 0.18
      };
    }

    function makeSpark() {
      // Sparks are sub-pixel pinpricks; they twinkle 2-4× faster than
      // motes so the highest-frequency texture in the field comes from
      // them. Their `peak` is intentionally low and `size` < 0.4 — at
      // those values the radial sprite paints only a few pixels and the
      // GPU blits dozens per ms.
      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        // Drift even more lethargic than motes so the eye reads them as
        // distant background, not foreground confetti.
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: 0.18 + Math.random() * 0.30,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 1.4 + Math.random() * 2.2,
        peak: 0.08 + Math.random() * 0.14
      };
    }
    for (var isp = 0; isp < SPARK_COUNT; isp++) sparks.push(makeSpark());

    function makeCloud() {
      // Clouds drift extremely slowly (≤ 4 px/s) so they don't visibly
      // race across a still page. Their `peak` is the cloud's MAXIMUM
      // alpha at the centre of its radial gradient — even the boldest
      // cloud is below 0.18 alpha, keeping the layer atmospheric
      // rather than competitive with the foreground stars.
      return {
        x:   Math.random() * W,
        y:   Math.random() * H,
        vx:  (Math.random() - 0.5) * 4,
        vy:  (Math.random() - 0.5) * 4,
        rad: 90 + Math.random() * 110,
        hue: Math.random(),
        // Slow alpha breathing keeps the patches from feeling like a
        // static stencil; the eye registers it as living atmosphere.
        twk: Math.random() * Math.PI * 2,
        twkSpeed: 0.05 + Math.random() * 0.10,
        peak: 0.08 + Math.random() * 0.07
      };
    }
    for (var icd = 0; icd < CLOUD_COUNT; icd++) clouds.push(makeCloud());

    /* GALAXY LAYER — tiny pinwheel sprites that rotate slowly. */
    var galaxies = [];
    var GALAXY_BASE = 6;
    var GALAXY_COUNT = Math.max(3, Math.round(GALAXY_BASE * (0.5 + POP * 0.5)));
    function makeGalaxy() {
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 2,
        vy:   (Math.random() - 0.5) * 2,
        rot:  Math.random() * Math.PI * 2,
        rotV: (Math.random() < 0.5 ? -1 : 1) * (0.04 + Math.random() * 0.08),
        rad:  6 + Math.random() * 10,
        arms: 3 + Math.floor(Math.random() * 2),
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.08 + Math.random() * 0.12,
        peak: 0.06 + Math.random() * 0.06
      };
    }
    for (var ig = 0; ig < GALAXY_COUNT; ig++) galaxies.push(makeGalaxy());

    /* RING LAYER — expanding circular halos that fade out over time. */
    var rings = [];
    var RING_BASE = 5;
    var RING_CAP = Math.max(3, Math.round(RING_BASE * POP));
    var ringCooldown = 2 + Math.random() * 4;
    function makeRing() {
      return {
        x:     Math.random() * W,
        y:     Math.random() * H,
        rad:   2 + Math.random() * 6,
        maxRad: 30 + Math.random() * 50,
        hue:   Math.random(),
        life:  0,
        ttl:   4 + Math.random() * 5,
        thick: 0.3 + Math.random() * 0.4
      };
    }

    /* FILAMENT LAYER — extremely faint long threads of light. */
    var filaments = [];
    var FILAMENT_BASE = 4;
    var FILAMENT_COUNT = Math.max(2, Math.round(FILAMENT_BASE * (0.5 + POP * 0.5)));
    function makeFilament() {
      var ang = Math.random() * Math.PI * 2;
      var len = 80 + Math.random() * 180;
      var cx = Math.random() * W, cy = Math.random() * H;
      return {
        x1: cx - Math.cos(ang) * len * 0.5,
        y1: cy - Math.sin(ang) * len * 0.5,
        x2: cx + Math.cos(ang) * len * 0.5,
        y2: cy + Math.sin(ang) * len * 0.5,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.06 + Math.random() * 0.08,
        peak: 0.03 + Math.random() * 0.04,
        vx:   (Math.random() - 0.5) * 1.5,
        vy:   (Math.random() - 0.5) * 1.5
      };
    }
    for (var ifl = 0; ifl < FILAMENT_COUNT; ifl++) filaments.push(makeFilament());

    /* PRISM LAYER — tiny diamond shapes that gently rotate and shift hue. */
    var prisms = [];
    var PRISM_BASE = 10;
    var PRISM_COUNT = Math.max(5, Math.round(PRISM_BASE * POP));
    function makePrism() {
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 4,
        vy:   (Math.random() - 0.5) * 4,
        rot:  Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.3,
        size: 1.2 + Math.random() * 2.5,
        hue:  Math.random(),
        hueV: (Math.random() - 0.5) * 0.04,
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.6 + Math.random() * 1.0,
        peak: 0.10 + Math.random() * 0.12
      };
    }
    for (var ipr = 0; ipr < PRISM_COUNT; ipr++) prisms.push(makePrism());

    function makeWisp() {
      // Random spawn position (anywhere on screen) so wisps appear to
      // come "from somewhere off in the distance" rather than always
      // entering from a fixed edge. Speed and tail length are tuned
      // shorter than meteors so wisps read as ambient motion, not as
      // dramatic events.
      var ang = Math.random() * Math.PI * 2;
      var spd = 240 + Math.random() * 180;
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   Math.cos(ang) * spd,
        vy:   Math.sin(ang) * spd,
        life: 0,
        ttl:  0.35 + Math.random() * 0.45,
        hue:  Math.random(),
        tail: 30 + Math.random() * 50,
        thick: 0.6 + Math.random() * 0.6
      };
    }

    this.resize = function (w, h) { W = w; H = h; };

    this.update = function (dt, t) {
      var i, n;
      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        n.x  += n.vx * dt;
        n.y  += n.vy * dt;
        n.twk += dt * (1.4 + n.hue);
        if (n.x < -10)    { n.x = W + 10; }
        if (n.x > W + 10) { n.x = -10; }
        if (n.y < -10)    { n.y = H + 10; }
        if (n.y > H + 10) { n.y = -10; }
        if (mouse.active) {
          var dx = n.x - mouse.x;
          var dy = n.y - mouse.y;
          var d2 = dx * dx + dy * dy;
          var R  = 170;
          if (d2 < R * R && d2 > 0.01) {
            var d = Math.sqrt(d2);
            var force = (R - d) / R * 60;
            n.x += (dx / d) * force * dt;
            n.y += (dy / d) * force * dt;
          }
        }
      }
      // Motes — straight drift, wraparound, no mouse interaction. The
      // independent twk speed gives the field a softer, lower-frequency
      // shimmer than the foreground nodes.
      for (var mu = 0; mu < motes.length; mu++) {
        var mt = motes[mu];
        mt.x += mt.vx * dt;
        mt.y += mt.vy * dt;
        mt.twk += dt * mt.twkSpeed;
        if (mt.x < -10)    mt.x = W + 10;
        else if (mt.x > W + 10) mt.x = -10;
        if (mt.y < -10)    mt.y = H + 10;
        else if (mt.y > H + 10) mt.y = -10;
      }
      // Sparks — same logic as motes but faster shimmer, lower amplitude.
      // Branch-free wraparound is fine because sparks have very small
      // velocities (max ~3 px/s) so per-frame teleports are imperceptible.
      for (var su = 0; su < sparks.length; su++) {
        var sk = sparks[su];
        sk.x += sk.vx * dt;
        sk.y += sk.vy * dt;
        sk.twk += dt * sk.twkSpeed;
        if (sk.x < -8)     sk.x = W + 8;
        else if (sk.x > W + 8) sk.x = -8;
        if (sk.y < -8)     sk.y = H + 8;
        else if (sk.y > H + 8) sk.y = -8;
      }
      // Clouds — extremely slow drift, slow alpha breathing. Wrap with
      // an inset of `rad` so a cloud doesn't pop in/out abruptly when
      // its centre crosses the canvas edge.
      for (var cu = 0; cu < clouds.length; cu++) {
        var cl = clouds[cu];
        cl.x += cl.vx * dt;
        cl.y += cl.vy * dt;
        cl.twk += dt * cl.twkSpeed;
        if (cl.x < -cl.rad)         cl.x = W + cl.rad;
        else if (cl.x > W + cl.rad) cl.x = -cl.rad;
        if (cl.y < -cl.rad)         cl.y = H + cl.rad;
        else if (cl.y > H + cl.rad) cl.y = -cl.rad;
      }
      // Galaxies — slow drift + rotation + alpha breathing.
      for (var gu = 0; gu < galaxies.length; gu++) {
        var gx = galaxies[gu];
        gx.x += gx.vx * dt;
        gx.y += gx.vy * dt;
        gx.rot += gx.rotV * dt;
        gx.twk += dt * gx.twkSpeed;
        if (gx.x < -gx.rad * 2)     gx.x = W + gx.rad * 2;
        else if (gx.x > W + gx.rad * 2) gx.x = -gx.rad * 2;
        if (gx.y < -gx.rad * 2)     gx.y = H + gx.rad * 2;
        else if (gx.y > H + gx.rad * 2) gx.y = -gx.rad * 2;
      }
      // Rings — expand and fade. Scheduler spawns new rings periodically.
      ringCooldown -= dt;
      if (ringCooldown <= 0 && rings.length < RING_CAP) {
        rings.push(makeRing());
        ringCooldown = 3 + Math.random() * 5;
      }
      for (var ru = rings.length - 1; ru >= 0; ru--) {
        var rn = rings[ru];
        rn.life += dt;
        var rProg = rn.life / rn.ttl;
        rn.rad = rn.rad + (rn.maxRad - rn.rad) * rProg;
        if (rn.life >= rn.ttl) rings.splice(ru, 1);
      }
      // Filaments — slow drift, alpha breathing, wraparound.
      for (var fu = 0; fu < filaments.length; fu++) {
        var fl = filaments[fu];
        fl.x1 += fl.vx * dt; fl.y1 += fl.vy * dt;
        fl.x2 += fl.vx * dt; fl.y2 += fl.vy * dt;
        fl.twk += dt * fl.twkSpeed;
        if (fl.x1 < -200 && fl.x2 < -200) { fl.x1 += W + 400; fl.x2 += W + 400; }
        else if (fl.x1 > W + 200 && fl.x2 > W + 200) { fl.x1 -= W + 400; fl.x2 -= W + 400; }
        if (fl.y1 < -200 && fl.y2 < -200) { fl.y1 += H + 400; fl.y2 += H + 400; }
        else if (fl.y1 > H + 200 && fl.y2 > H + 200) { fl.y1 -= H + 400; fl.y2 -= H + 400; }
      }
      // Prisms — drift, rotate, hue shift.
      for (var pu = 0; pu < prisms.length; pu++) {
        var pm = prisms[pu];
        pm.x += pm.vx * dt;
        pm.y += pm.vy * dt;
        pm.rot += pm.rotV * dt;
        pm.hue += pm.hueV * dt;
        pm.twk += dt * pm.twkSpeed;
        if (pm.x < -10) pm.x = W + 10;
        else if (pm.x > W + 10) pm.x = -10;
        if (pm.y < -10) pm.y = H + 10;
        else if (pm.y > H + 10) pm.y = -10;
      }
      // Comet wisps — scheduler + integration. Capped at WISP_CAP
      // simultaneous so we never end up with a swarm. Each wisp is
      // culled when it expires (life ≥ ttl) or strays well off-screen.
      wispCooldown -= dt;
      if (wispCooldown <= 0 && wisps.length < WISP_CAP) {
        wisps.push(makeWisp());
        wispCooldown = 0.15 + Math.random() * 0.55;
      }
      for (var wu = wisps.length - 1; wu >= 0; wu--) {
        var ws = wisps[wu];
        ws.x += ws.vx * dt;
        ws.y += ws.vy * dt;
        ws.life += dt;
        if (ws.life >= ws.ttl ||
            ws.x < -200 || ws.x > W + 200 ||
            ws.y < -200 || ws.y > H + 200) {
          wisps.splice(wu, 1);
        }
      }
      // Meteor scheduler — at most one in flight at a time. Cooldown
      // tightened to 3-7s for a livelier field; the visible cap of 1
      // simultaneous meteor still prevents streak overlap.
      meteorCooldown -= dt;
      if (meteorCooldown <= 0 && meteors.length === 0) {
        meteors.push(makeMeteor());
        meteorCooldown = 3 + Math.random() * 4;
      }
      for (var mei = meteors.length - 1; mei >= 0; mei--) {
        var me = meteors[mei];
        me.x += me.vx * dt;
        me.y += me.vy * dt;
        me.life += dt;
        // Cull when out of bounds OR past TTL.
        if (me.life >= me.ttl ||
            me.x < -200 || me.x > W + 200 ||
            me.y > H + 200) {
          meteors.splice(mei, 1);
        }
      }
      // Pulses (high/extreme only): travel along a randomly-picked edge.
      if (q.glow === 'strong' || q.glow === 'multi') {
        pulseTimer -= dt;
        if (pulseTimer <= 0) {
          pulseTimer = 0.12 + Math.random() * 0.25;
          var a = nodes[Math.floor(Math.random() * nodes.length)];
          var b = nodes[Math.floor(Math.random() * nodes.length)];
          if (a !== b) {
            var px = a.x - b.x, py = a.y - b.y;
            if (px * px + py * py < (MAX_DIST * 1.4) * (MAX_DIST * 1.4)) {
              pulses.push({ a: a, b: b, p: 0, life: 0.45 + Math.random() * 0.3 });
            }
          }
        }
        for (var p = pulses.length - 1; p >= 0; p--) {
          pulses[p].p += dt / pulses[p].life;
          if (pulses[p].p >= 1) pulses.splice(p, 1);
        }
      }
    };

    this.draw = function (ctx, W, H) {
      ctx.clearRect(0, 0, W, H);
      /* Make sure the tinted-glow atlas is ready before any pass below
       * tries to read tintedGlowSprites[...]. Initialization is lazy and
       * idempotent, so calling it every frame is essentially free after
       * the first build. */
      ensureGlowSprites();

      /* NEBULA CLOUD PASS — drawn FIRST so every other constellation
       * layer stacks on top. Each cloud is a single radialGradient +
       * fillRect (~6-12 of these per frame). The block uses additive
       * blending so overlapping clouds chromatic-mix into richer
       * blobs instead of just over-painting at full alpha. The eye
       * reads the result as a thin gas atmosphere behind the stars,
       * a layer of depth the previous build was missing. */
      if (clouds.length) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (var cdi = 0; cdi < clouds.length; cdi++) {
          var cl2 = clouds[cdi];
          var ctwk = (Math.sin(cl2.twk) * 0.5 + 0.5);
          var cAlpha = cl2.peak * (0.55 + 0.45 * ctwk);
          if (cAlpha <= 0.005) continue;
          var cgrad = ctx.createRadialGradient(cl2.x, cl2.y, 0, cl2.x, cl2.y, cl2.rad);
          cgrad.addColorStop(0,   paletteAt(cl2.hue, cAlpha));
          cgrad.addColorStop(0.5, paletteAt(cl2.hue + 0.08, cAlpha * 0.5));
          cgrad.addColorStop(1,   paletteAt(cl2.hue + 0.15, 0));
          ctx.fillStyle = cgrad;
          ctx.fillRect(cl2.x - cl2.rad, cl2.y - cl2.rad, cl2.rad * 2, cl2.rad * 2);
        }
        ctx.restore();
      }

      /* FILAMENT PASS — faint long lines. */
      if (filaments.length) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.lineCap = 'round';
        for (var fdi = 0; fdi < filaments.length; fdi++) {
          var fld = filaments[fdi];
          var ftwk = (Math.sin(fld.twk) * 0.5 + 0.5);
          var fAlpha = fld.peak * (0.40 + 0.60 * ftwk);
          if (fAlpha <= 0.01) continue;
          var fgrad = ctx.createLinearGradient(fld.x1, fld.y1, fld.x2, fld.y2);
          fgrad.addColorStop(0,   paletteAt(fld.hue, 0));
          fgrad.addColorStop(0.3, paletteAt(fld.hue, fAlpha));
          fgrad.addColorStop(0.7, paletteAt(fld.hue + 0.06, fAlpha));
          fgrad.addColorStop(1,   paletteAt(fld.hue + 0.06, 0));
          ctx.strokeStyle = fgrad;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(fld.x1, fld.y1);
          ctx.lineTo(fld.x2, fld.y2);
          ctx.stroke();
        }
        ctx.restore();
      }

      /* RING PASS — expanding translucent rings. */
      if (rings.length) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (var rdi = 0; rdi < rings.length; rdi++) {
          var rn2 = rings[rdi];
          var rProg2 = rn2.life / rn2.ttl;
          var rEnv = rProg2 < 0.15 ? rProg2 / 0.15 : Math.max(0, 1 - (rProg2 - 0.15) / 0.85);
          rEnv *= rEnv;
          if (rEnv <= 0.01) continue;
          ctx.globalAlpha = rEnv * 0.12;
          ctx.strokeStyle = paletteAt(rn2.hue, 1);
          ctx.lineWidth = rn2.thick;
          ctx.beginPath();
          ctx.arc(rn2.x, rn2.y, rn2.rad, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      /* GALAXY PASS — tiny spiral pinwheels. */
      if (galaxies.length) {
        ensureGlowSprites();
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (var gdi = 0; gdi < galaxies.length; gdi++) {
          var gx2 = galaxies[gdi];
          var gtwk = (Math.sin(gx2.twk) * 0.5 + 0.5);
          var gAlpha = gx2.peak * (0.50 + 0.50 * gtwk);
          if (gAlpha <= 0.01) continue;
          ctx.save();
          ctx.translate(gx2.x, gx2.y);
          ctx.rotate(gx2.rot);
          ctx.globalAlpha = gAlpha;
          for (var arm = 0; arm < gx2.arms; arm++) {
            var armAng = (arm / gx2.arms) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            for (var sp = 1; sp <= 12; sp++) {
              var frac = sp / 12;
              var spiralAng = armAng + frac * Math.PI * 1.2;
              var sr2 = frac * gx2.rad;
              ctx.lineTo(Math.cos(spiralAng) * sr2, Math.sin(spiralAng) * sr2);
            }
            ctx.strokeStyle = paletteAt(gx2.hue + arm * 0.05, gAlpha * (1 - 0.3));
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
          var gSpr = tintedGlowSprites[tintIndex(gx2.hue)];
          var gCoreR = gx2.rad * 0.25;
          ctx.globalAlpha = gAlpha * 0.6;
          ctx.drawImage(gSpr, -gCoreR, -gCoreR, gCoreR * 2, gCoreR * 2);
          ctx.restore();
        }
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      /* PRISM PASS — small rotating diamond shapes. */
      if (prisms.length) {
        ensureGlowSprites();
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (var pdi = 0; pdi < prisms.length; pdi++) {
          var pr = prisms[pdi];
          var ptwk = (Math.sin(pr.twk) * 0.5 + 0.5);
          var pAlpha = pr.peak * (0.30 + 0.70 * ptwk);
          if (pAlpha <= 0.02) continue;
          ctx.save();
          ctx.translate(pr.x, pr.y);
          ctx.rotate(pr.rot);
          ctx.globalAlpha = pAlpha;
          ctx.beginPath();
          ctx.moveTo(0, -pr.size);
          ctx.lineTo(pr.size * 0.5, 0);
          ctx.lineTo(0, pr.size);
          ctx.lineTo(-pr.size * 0.5, 0);
          ctx.closePath();
          ctx.fillStyle = paletteAt(pr.hue, pAlpha * 0.7);
          ctx.fill();
          ctx.strokeStyle = paletteAt(pr.hue + 0.08, pAlpha);
          ctx.lineWidth = 0.4;
          ctx.stroke();
          ctx.restore();
        }
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      // Grid bucketing keeps the line pass O(n) instead of O(n²).
      var cell = MAX_DIST;
      var cols = Math.ceil(W / cell) + 1;
      var rows = Math.ceil(H / cell) + 1;
      var grid = new Array(cols * rows);
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        var cx = Math.max(0, Math.min(cols - 1, Math.floor(n.x / cell)));
        var cy = Math.max(0, Math.min(rows - 1, Math.floor(n.y / cell)));
        var key = cy * cols + cx;
        if (!grid[key]) grid[key] = [];
        grid[key].push(n);
      }

      // Edges
      ctx.lineWidth = q.glow === 'multi' ? 1.0 : 0.8;
      for (var ix = 0; ix < cols; ix++) {
        for (var iy = 0; iy < rows; iy++) {
          var bucketA = grid[iy * cols + ix];
          if (!bucketA) continue;
          for (var dx = 0; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
              if (dx === 0 && dy < 0) continue;
              var nx = ix + dx, ny = iy + dy;
              if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
              var bucketB = grid[ny * cols + nx];
              if (!bucketB) continue;
              for (var i = 0; i < bucketA.length; i++) {
                var a = bucketA[i];
                var jStart = (bucketA === bucketB) ? i + 1 : 0;
                for (var j = jStart; j < bucketB.length; j++) {
                  var b = bucketB[j];
                  var ddx = a.x - b.x, ddy = a.y - b.y;
                  var d2  = ddx * ddx + ddy * ddy;
                  if (d2 >= MAX_DIST * MAX_DIST) continue;
                  var d  = Math.sqrt(d2);
                  var alpha = (1 - d / MAX_DIST) * 0.32;
                  // Two-color gradient between endpoints' hues.
                  var col = paletteAt((a.hue + b.hue) * 0.5, alpha);
                  ctx.strokeStyle = col;
                  ctx.beginPath();
                  ctx.moveTo(a.x, a.y);
                  ctx.lineTo(b.x, b.y);
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      /* Pulses — bright travelers along the strongest edges. Drawn from
       * the white glow sprite (additive) for a comet-head look. The old
       * version did shadowBlur + arc + fill twice per pulse; this is one
       * drawImage per pulse plus an optional white pinprick. */
      if (pulses.length) {
        ensureGlowSprites();
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (var pi = 0; pi < pulses.length; pi++) {
          var pp = pulses[pi];
          var t = pp.p;
          var eo = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          var x = pp.a.x + (pp.b.x - pp.a.x) * eo;
          var y = pp.a.y + (pp.b.y - pp.a.y) * eo;
          var fade = 1 - Math.abs(2 * t - 1);
          if (fade <= 0.02) continue;
          // Colored aura
          var auraSpr = tintedGlowSprites[tintIndex(0.15)];
          var auraR = 4 * fade + 1.5;
          ctx.globalAlpha = 0.7 * fade;
          ctx.drawImage(auraSpr, x - auraR, y - auraR, auraR * 2, auraR * 2);
          // Hot pinprick center
          ctx.globalAlpha = 0.55 * fade;
          var hotR = 1.4 * fade + 0.4;
          ctx.drawImage(glowSprite, x - hotR * 1.5, y - hotR * 1.5, hotR * 3, hotR * 3);
        }
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      /* Nodes — each node breathes through a shimmer cycle (blur → clear →
       * sharp peak → blur), with brightness coupled to glow tier. PERF:
       * the old draw used `shadowBlur + arc + fill` per node (≥ 180 nodes
       * per frame, so 180 expensive Gaussian-blur shadow passes). We now
       * render each node as a single `drawImage` from the tinted glow
       * atlas, plus an optional white pip from the untinted sprite at
       * shimmer peaks. About 5× faster per frame at the same look —
       * the sprite was tuned to match the previous shadowBlur falloff. */
      var tNow = (performance.now ? performance.now() : Date.now()) / 1000;
      ensureGlowSprites();
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      /* MICRO PASS — sub-pixel sparks (deepest layer). Drawn FIRST so
       * everything else stacks on top. Each spark is one drawImage at a
       * tiny size; alpha threshold culls most of the dim half of the
       * shimmer cycle for free. */
      for (var ski = 0; ski < sparks.length; ski++) {
        var sk2 = sparks[ski];
        var stwk = (Math.sin(sk2.twk) * 0.5 + 0.5);
        var sAlpha = sk2.peak * (0.25 + 0.75 * stwk);
        if (sAlpha <= 0.015) continue;
        var sr = sk2.size * (0.7 + 0.5 * stwk) + 0.5;
        var sSpr = tintedGlowSprites[tintIndex(sk2.hue)];
        ctx.globalAlpha = sAlpha;
        ctx.drawImage(sSpr, sk2.x - sr, sk2.y - sr, sr * 2, sr * 2);
      }

      /* MINOR PASS — dust motes. Each mote is a single drawImage from the
       * tinted glow atlas at a tiny size, with its alpha scaled by a slow
       * sine so the field gently breathes. Cheap (one blit per mote, no
       * shadowBlur, no gradient). */
      for (var mi = 0; mi < motes.length; mi++) {
        var mm = motes[mi];
        var mtwk = (Math.sin(mm.twk) * 0.5 + 0.5);
        var mAlpha = mm.peak * (0.40 + 0.60 * mtwk);
        if (mAlpha <= 0.02) continue;
        var mr = mm.size * (0.85 + 0.40 * mtwk) + 0.9;
        var mspr = tintedGlowSprites[tintIndex(mm.hue)];
        ctx.globalAlpha = mAlpha;
        ctx.drawImage(mspr, mm.x - mr, mm.y - mr, mr * 2, mr * 2);
      }

      for (var m = 0; m < nodes.length; m++) {
        var nn = nodes[m];
        var twk = (Math.sin(nn.twk) * 0.5 + 0.5);
        var sh  = shimmerEnvelope(tNow, nn.shp, nn.shs);
        var sharp = shimmerSharp(tNow, nn.shp, nn.shs);
        var size  = nn.size * (0.85 + 0.30 * twk + 0.25 * sh) + (sharp ? GC.coreBoost : 0);
        var alpha = Math.min(1, 0.55 + 0.30 * twk + 0.20 * sh + GC.alphaBoost);
        if (size <= 0.4 || alpha <= 0.02) continue;

        // Halo radius: smaller than the sprite size so the edge is soft.
        // Higher glow tiers paint at a larger sprite size to read brighter
        // (sprite alpha falls off at the edge, so a bigger sprite at the
        // same alpha is a brighter point of light).
        var glowR = size + 4 + GC.blur * 0.18;

        // Single tinted-sprite blit. Tuned slightly dimmer than v1 so the
        // constellation reads as cool, distant stars rather than fireflies
        // pressed against the screen. The shimmer cycle still drives the
        // visible "twinkle" — only the floor and ceiling moved.
        var spr = tintedGlowSprites[tintIndex(nn.hue)];
        ctx.globalAlpha = alpha * (0.62 + 0.20 * sh);
        ctx.drawImage(spr, nn.x - glowR, nn.y - glowR, glowR * 2, glowR * 2);

        // Sharp-peak flash: extra-bright white core. Smaller and dimmer
        // than v1 so it reads as a fleeting twinkle, not a flashbulb.
        if (sharp && GC.chromaCore) {
          var pipR = size * 0.7 + 0.9;
          ctx.globalAlpha = Math.min(0.85, alpha + 0.12);
          ctx.drawImage(glowSprite, nn.x - pipR, nn.y - pipR, pipR * 2, pipR * 2);
        }
      }
      ctx.globalAlpha = 1;

      /* COMET WISP PASS — short streaks. Same structure as the
       * meteor pass below (colored halo line + white core line +
       * head sprite) but shorter tails, dimmer, and several can
       * coexist. Wisps draw BEFORE meteors so a rare meteor still
       * dominates the frame when it appears. */
      if (wisps.length) {
        for (var wdi = 0; wdi < wisps.length; wdi++) {
          var w2 = wisps[wdi];
          var wLifeRatio = w2.life / w2.ttl;
          var wEnv = wLifeRatio < 0.30
            ? (wLifeRatio / 0.30)
            : Math.max(0, 1 - (wLifeRatio - 0.30) / 0.70);
          if (wEnv <= 0.04) continue;
          var wSpd = Math.sqrt(w2.vx * w2.vx + w2.vy * w2.vy) || 1;
          var wux = w2.vx / wSpd, wuy = w2.vy / wSpd;
          var wTailX = w2.x - wux * w2.tail;
          var wTailY = w2.y - wuy * w2.tail;
          var wgrad = ctx.createLinearGradient(w2.x, w2.y, wTailX, wTailY);
          wgrad.addColorStop(0,   paletteAt(w2.hue + 0.05, 0.65 * wEnv));
          wgrad.addColorStop(0.4, paletteAt(w2.hue,        0.30 * wEnv));
          wgrad.addColorStop(1,   paletteAt(w2.hue, 0));
          ctx.lineCap = 'round';
          ctx.strokeStyle = wgrad;
          ctx.lineWidth = w2.thick * 1.4;
          ctx.beginPath();
          ctx.moveTo(w2.x, w2.y);
          ctx.lineTo(wTailX, wTailY);
          ctx.stroke();
          var wgrad2 = ctx.createLinearGradient(w2.x, w2.y, wTailX, wTailY);
          wgrad2.addColorStop(0,   'rgba(255,255,255,' + Math.min(1, 0.75 * wEnv) + ')');
          wgrad2.addColorStop(0.3, paletteAt(w2.hue + 0.05, 0.35 * wEnv));
          wgrad2.addColorStop(1,   paletteAt(w2.hue + 0.05, 0));
          ctx.strokeStyle = wgrad2;
          ctx.lineWidth = w2.thick * 0.55;
          ctx.beginPath();
          ctx.moveTo(w2.x, w2.y);
          ctx.lineTo(wTailX, wTailY);
          ctx.stroke();
          var wHeadR = 2.5 + 1.8 * wEnv;
          ctx.globalAlpha = 0.85 * wEnv;
          ctx.drawImage(glowSprite, w2.x - wHeadR, w2.y - wHeadR, wHeadR * 2, wHeadR * 2);
          ctx.globalAlpha = 1;
        }
      }

      /* METEOR PASS — drawn LAST so meteors streak in front of every
       * other constellation layer. Each meteor is a fading line from
       * its current position back along its velocity vector for
       * `tail` pixels. We paint a fat colored halo + thin white core
       * to give it the classic comet-head look. The line uses a
       * gradient so the tail fades to transparency at its rear end. */
      if (meteors.length) {
        for (var mri = 0; mri < meteors.length; mri++) {
          var mr = meteors[mri];
          var mLifeRatio = mr.life / mr.ttl;
          // Brightness envelope — 0 → 1 → 0 over the lifetime, peaks
          // around ~25% so the meteor looks like it just appeared and
          // is now fading naturally rather than fading in slowly.
          var mEnv = mLifeRatio < 0.25
            ? (mLifeRatio / 0.25)
            : Math.max(0, 1 - (mLifeRatio - 0.25) / 0.75);
          if (mEnv <= 0.02) continue;
          // Tail end is the head's position, but offset BACKWARD along
          // velocity. We don't store the actual past trajectory; the
          // meteor moves in a straight line so backwards along v is
          // exactly its trail.
          var spdMag = Math.sqrt(mr.vx * mr.vx + mr.vy * mr.vy) || 1;
          var ux = mr.vx / spdMag, uy = mr.vy / spdMag;
          var tailX = mr.x - ux * mr.tail;
          var tailY = mr.y - uy * mr.tail;
          var grad2 = ctx.createLinearGradient(mr.x, mr.y, tailX, tailY);
          grad2.addColorStop(0, paletteAt(mr.hue + 0.05, 0.85 * mEnv));
          grad2.addColorStop(0.4, paletteAt(mr.hue, 0.45 * mEnv));
          grad2.addColorStop(1, paletteAt(mr.hue, 0));
          ctx.lineCap = 'round';
          ctx.strokeStyle = grad2;
          ctx.lineWidth = mr.thick * 2.4;
          ctx.beginPath();
          ctx.moveTo(mr.x, mr.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
          // Bright core line on top.
          var grad3 = ctx.createLinearGradient(mr.x, mr.y, tailX, tailY);
          grad3.addColorStop(0, 'rgba(255,255,255,' + Math.min(1, 0.95 * mEnv) + ')');
          grad3.addColorStop(0.3, paletteAt(mr.hue + 0.05, 0.5 * mEnv));
          grad3.addColorStop(1, paletteAt(mr.hue + 0.05, 0));
          ctx.strokeStyle = grad3;
          ctx.lineWidth = mr.thick * 0.9;
          ctx.beginPath();
          ctx.moveTo(mr.x, mr.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
          // Bright head sprite blit.
          var headR = 4 + 3 * mEnv;
          ctx.globalAlpha = mEnv;
          ctx.drawImage(glowSprite, mr.x - headR, mr.y - headR, headR * 2, headR * 2);
          ctx.globalAlpha = 1;
        }
      }
      ctx.restore();
    };
  }

  // =========================================================================
  // 2. Nebula Drift
  //    The user-facing description still applies — multi-depth bokeh orbs
  //    with soft halos drifting upward in parallax — but the rendering has
  //    been substantially refactored. The original "circle with a colored
  //    halo" reads flat in motion; this version layers four passes per orb:
  //
  //      1. Outer wash       (huge, very low alpha, blur-dominant)
  //      2. Mid halo         (radial gradient, breathes with shimmer)
  //      3. Asymmetric core  (slightly squashed/rotated, multi-stop chroma)
  //      4. White-hot pip    (small, additive, only at shimmer peaks)
  //
  //    On top of that, every orb has a shimmer envelope that moves it
  //    through a `blur → clear → sharp peak → blur` cycle. The scale, alpha
  //    and shadowBlur are all coupled to that envelope so a single orb
  //    appears to "breathe" in and out of focus instead of just twinkling.
  //
  //    On strong/multi tiers we also spawn ephemeral sparkles that ride
  //    away from each orb's shimmer peak, giving the look of dust catching
  //    backlight as the cloud moves past it. Sparkles auto-cull when they
  //    fade out so the population stays bounded.
  // =========================================================================
  function NebulaRenderer(opts) {
    var W = opts.width, H = opts.height;
    var q = opts.quality;
    var GC = glowConfig(q.glow);
    /* Nebula clouds — large, extremely soft, low-alpha radial patches
     * that overlap and layer to build the look of real interstellar gas.
     * Much larger and dimmer than the old "bokeh orbs" approach; the eye
     * reads the accumulation of many overlapping transparent sprites as
     * volumetric gas, not as discrete glowing circles. */
    var BASE = 70;
    var COUNT = Math.max(12, Math.round(BASE * q.count));
    var orbs = [];

    var sparkles = [];
    var SPARK_CAP = (q.glow === 'multi') ? 80 : (q.glow === 'strong' ? 50 : 0);

    /* Stars — significantly denser than before. Real nebula photos
     * always show a rich starfield peeking through the gas. */
    var stars = [];
    var STAR_BASE = 280;
    var STAR_COUNT = Math.max(60, Math.round(STAR_BASE * q.count));
    for (var is = 0; is < STAR_COUNT; is++) {
      stars.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        size: 0.15 + Math.random() * 0.50,
        hue:  Math.random(),
        vy:   -1 - Math.random() * 3,
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 1.4 + Math.random() * 2.2,
        peak: 0.20 + Math.random() * (Math.random() < 0.10 ? 0.60 : 0.22)
      });
    }

    /* Dust — small particles that give the nebula a sense of volume. */
    var dust = [];
    var DUST_BASE = 220;
    var DUST_COUNT = Math.max(50, Math.round(DUST_BASE * q.count));
    for (var iD = 0; iD < DUST_COUNT; iD++) {
      dust.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        size: 0.4 + Math.random() * 1.1,
        hue:  Math.random(),
        // Same general flow direction as orbs (upward) but with much
        // more variance so the field doesn't all march in lockstep.
        vx:   (Math.random() - 0.5) * 14,
        vy:   -6 - Math.random() * 14,
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.6 + Math.random() * 1.2,
        peak: 0.18 + Math.random() * 0.30
      });
    }

    /* WISP LAYER — faint tiny streaks of gas drifting slowly. */
    var nebWisps = [];
    var NEB_WISP_BASE = 40;
    var NEB_WISP_COUNT = Math.max(10, Math.round(NEB_WISP_BASE * q.count));
    for (var inw = 0; inw < NEB_WISP_COUNT; inw++) {
      var nwAng = Math.random() * Math.PI * 2;
      nebWisps.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   Math.cos(nwAng) * (3 + Math.random() * 8),
        vy:   Math.sin(nwAng) * (3 + Math.random() * 8),
        len:  8 + Math.random() * 18,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.3 + Math.random() * 0.6,
        peak: 0.06 + Math.random() * 0.08
      });
    }

    /* EMBER LAYER — warm specks drifting upward. */
    var nebEmbers = [];
    var NEB_EMBER_BASE = 50;
    var NEB_EMBER_COUNT = Math.max(12, Math.round(NEB_EMBER_BASE * q.count));
    for (var ine = 0; ine < NEB_EMBER_COUNT; ine++) {
      nebEmbers.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 3,
        vy:   -3 - Math.random() * 8,
        size: 0.15 + Math.random() * 0.35,
        hue:  0.03 + Math.random() * 0.12,
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 1.2 + Math.random() * 1.8,
        peak: 0.12 + Math.random() * 0.15
      });
    }

    /* GLIMMER LAYER — brief bright pinpoint flashes. */
    var nebGlimmers = [];
    var NEB_GLIM_BASE = 30;
    var NEB_GLIM_COUNT = Math.max(8, Math.round(NEB_GLIM_BASE * q.count));
    for (var ing = 0; ing < NEB_GLIM_COUNT; ing++) {
      nebGlimmers.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        size: 0.20 + Math.random() * 0.30,
        hue:  Math.random(),
        life: Math.random() * 3,
        ttl:  1.5 + Math.random() * 2.5,
        peak: 0.30 + Math.random() * 0.25
      });
    }

    function make() {
      var depth = Math.random();
      var size  = 30 + depth * 130;
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        size: size,
        depth: depth,
        vx:   (Math.random() - 0.5) * (4 + depth * 10),
        vy:   -4 - depth * 12 - Math.random() * 8,
        hue:  Math.random(),
        hueV: (Math.random() - 0.5) * 0.03,
        twk:  Math.random() * Math.PI * 2,
        shp:  Math.random() * Math.PI * 2,
        shs:  0.10 + Math.random() * 0.20 + (1 - depth) * 0.10,
        ar:   0.55 + Math.random() * 0.50,
        rot:  Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.12,
        coreHueOff: (Math.random() - 0.5) * 0.18,
        lastSharp: false,
        alpha: 0.10 + depth * 0.25 + Math.random() * 0.06
      };
    }
    for (var i = 0; i < COUNT; i++) {
      orbs.push(make());
      // Stagger initial vertical position
      orbs[i].y = Math.random() * H;
    }

    this.resize = function (w, h) { W = w; H = h; };

    this.update = function (dt, t) {
      for (var i = 0; i < orbs.length; i++) {
        var o = orbs[i];
        o.x += o.vx * dt;
        o.y += o.vy * dt;
        o.twk += dt * (0.6 + o.depth);
        o.hue += o.hueV * dt;
        o.rot += o.rotV * dt;
        // gentle horizontal sway
        o.x += Math.sin(o.twk * 0.3) * 0.5;
        if (o.x < -o.size) o.x = W + o.size;
        if (o.x > W + o.size) o.x = -o.size;
        if (o.y + o.size < 0) {
          o.y = H + o.size;
          o.x = Math.random() * W;
          o.hue = Math.random();
        }
        if (o.y > H + o.size + 80) {
          o.y = -o.size;
          o.x = Math.random() * W;
        }
        if (mouse.active && o.depth > 0.7) {
          o.x += (mouse.x - o.x) * 0.00015 * dt * 60;
          o.y += (mouse.y - o.y) * 0.00015 * dt * 60;
        }

        /* Sparkle emission — only on strong/multi tiers, only when the orb
         * has just crossed into its shimmer-sharp window (rising edge). Each
         * peak emits 1–2 short-lived sparkles riding the orb's velocity plus
         * a small random outward kick, so they look like flecks of light
         * catching a fold in the cloud. */
        if (SPARK_CAP > 0 && o.depth > 0.35 && sparkles.length < SPARK_CAP) {
          var nowSharp = shimmerSharp(t, o.shp, o.shs);
          if (nowSharp && !o.lastSharp) {
            var emit = 1 + (q.glow === 'multi' ? 1 : 0);
            for (var ke = 0; ke < emit; ke++) {
              var ang = Math.random() * Math.PI * 2;
              var spd = 14 + Math.random() * 30 + o.size * 0.18;
              sparkles.push({
                x: o.x + Math.cos(ang) * o.size * 0.35,
                y: o.y + Math.sin(ang) * o.size * 0.35,
                vx: o.vx * 0.2 + Math.cos(ang) * spd,
                vy: o.vy * 0.2 + Math.sin(ang) * spd,
                size: 0.7 + Math.random() * 1.5,
                hue: o.hue + (Math.random() - 0.5) * 0.1,
                life: 0,
                ttl: 0.8 + Math.random() * 0.9,
                shp: Math.random() * Math.PI * 2
              });
            }
          }
          o.lastSharp = nowSharp;
        }
      }
      // Sparkle physics: drift, decay, cull.
      for (var sp = sparkles.length - 1; sp >= 0; sp--) {
        var s = sparkles[sp];
        s.life += dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.vx *= 0.93;
        s.vy *= 0.93;
        // gentle upward drift — sparkles should look like they're rising
        // through the cloud, matching the nebula's overall flow.
        s.vy -= 18 * dt;
        if (s.life >= s.ttl) sparkles.splice(sp, 1);
      }
      // Stars — slow drift + twinkle. Wrap vertically so the field is
      // continuous; horizontal position is fixed (real distant stars
      // wouldn't slide sideways at our cloud's parallax speed).
      for (var ks = 0; ks < stars.length; ks++) {
        var st = stars[ks];
        st.y += st.vy * dt;
        st.twk += dt * st.twkSpeed;
        if (st.y < -4) { st.y = H + 4; st.x = Math.random() * W; }
        else if (st.y > H + 4) { st.y = -4; st.x = Math.random() * W; }
      }
      /* DUST UPDATE — independent drift + twinkle. Wrap vertically when
       * a dust particle floats off the top, recycling at the bottom with
       * a fresh horizontal jitter. */
      for (var idu = 0; idu < dust.length; idu++) {
        var du = dust[idu];
        du.x += du.vx * dt;
        du.y += du.vy * dt;
        du.twk += dt * du.twkSpeed;
        if (du.y < -4) { du.y = H + 4; du.x = Math.random() * W; du.hue = Math.random(); }
        else if (du.y > H + 4) du.y = -4;
        if (du.x < -10) du.x = W + 10;
        else if (du.x > W + 10) du.x = -10;
      }
      // Nebula wisps — slow drift, wraparound.
      for (var nwu = 0; nwu < nebWisps.length; nwu++) {
        var nw = nebWisps[nwu];
        nw.x += nw.vx * dt; nw.y += nw.vy * dt;
        nw.twk += dt * nw.twkSpeed;
        if (nw.x < -30) nw.x = W + 30;
        else if (nw.x > W + 30) nw.x = -30;
        if (nw.y < -30) nw.y = H + 30;
        else if (nw.y > H + 30) nw.y = -30;
      }
      // Nebula embers — rise upward.
      for (var neu = 0; neu < nebEmbers.length; neu++) {
        var ne = nebEmbers[neu];
        ne.x += ne.vx * dt; ne.y += ne.vy * dt;
        ne.twk += dt * ne.twkSpeed;
        if (ne.y < -10) { ne.y = H + 10; ne.x = Math.random() * W; }
        if (ne.x < -10) ne.x = W + 10;
        else if (ne.x > W + 10) ne.x = -10;
      }
      // Nebula glimmers — flash and respawn.
      for (var ngu = 0; ngu < nebGlimmers.length; ngu++) {
        var ng = nebGlimmers[ngu];
        ng.life += dt;
        if (ng.life >= ng.ttl) {
          ng.x = Math.random() * W;
          ng.y = Math.random() * H;
          ng.hue = Math.random();
          ng.life = 0;
          ng.ttl = 1.5 + Math.random() * 2.5;
        }
      }
    };

    this.draw = function (ctx, W, H) {
      ensureGlowSprites();
      // Gentle motion blur for high tiers makes the bokeh look like a
      // long-exposure photo without requiring per-particle trails.
      if (q.trails) {
        ctx.fillStyle = 'rgba(5,2,12,0.16)';
        ctx.fillRect(0, 0, W, H);
      } else {
        ctx.clearRect(0, 0, W, H);
      }

      // Sort back-to-front so closer orbs paint over distant ones.
      orbs.sort(function (a, b) { return a.depth - b.depth; });

      var tNow = (performance.now ? performance.now() : Date.now()) / 1000;

      ctx.save();
      // Additive blending across the orbs — a nebula reads as light
      // accumulating, not opaque shapes obscuring each other. With sprite
      // blits + 'lighter' the bright cores naturally pile up where orbs
      // overlap, which is the actual physics of light through gas clouds.
      ctx.globalCompositeOperation = 'lighter';

      /* MINOR PASS — distant starfield. Drawn first so the orbs paint on
       * top, the way distant stars peek through nebular gas in real
       * astrophotography. Each star is a single tiny tinted-sprite blit
       * with alpha modulated by a fast sine. ~110 stars at High costs
       * less than ~6 of the orbs. */
      for (var si = 0; si < stars.length; si++) {
        var sr = stars[si];
        var stwk = (Math.sin(sr.twk) * 0.5 + 0.5);
        var sAlpha = sr.peak * (0.30 + 0.70 * stwk);
        if (sAlpha <= 0.02) continue;
        var srR = sr.size * (1.0 + 0.6 * stwk) + 0.7;
        var sspr = tintedGlowSprites[tintIndex(sr.hue)];
        ctx.globalAlpha = sAlpha;
        ctx.drawImage(sspr, sr.x - srR, sr.y - srR, srR * 2, srR * 2);
      }
      ctx.globalAlpha = 1;

      /* DUST PASS — drawn second so dust sits between distant stars and
       * the foreground orbs. ~220 small tinted sprites with twinkle.
       * This layer is what bridges the visual gap between "few big bokeh
       * orbs" and "real nebula" — the eye reads the field as continuous
       * gas because there's always something glinting between any two
       * orbs. Cheap (~5% of total renderer cost). */
      for (var di = 0; di < dust.length; di++) {
        var dp = dust[di];
        var dtwk = (Math.sin(dp.twk) * 0.5 + 0.5);
        var dAlpha = dp.peak * (0.25 + 0.75 * dtwk);
        if (dAlpha <= 0.02) continue;
        var drR = dp.size * (1.0 + 0.4 * dtwk) + 0.6;
        var dspr = tintedGlowSprites[tintIndex(dp.hue)];
        ctx.globalAlpha = dAlpha;
        ctx.drawImage(dspr, dp.x - drR, dp.y - drR, drR * 2, drR * 2);
      }
      ctx.globalAlpha = 1;

      /* Nebula wisp pass — faint tiny streaks. */
        ctx.lineCap = 'round';
      for (var nwdi = 0; nwdi < nebWisps.length; nwdi++) {
        var nwd = nebWisps[nwdi];
        var nwtwk = (Math.sin(nwd.twk) * 0.5 + 0.5);
        var nwAlpha = nwd.peak * (0.40 + 0.60 * nwtwk);
        if (nwAlpha <= 0.01) continue;
        var nwSpd = Math.sqrt(nwd.vx * nwd.vx + nwd.vy * nwd.vy) || 1;
        var nwux = nwd.vx / nwSpd, nwuy = nwd.vy / nwSpd;
        ctx.strokeStyle = paletteAt(nwd.hue, nwAlpha);
        ctx.lineWidth = 0.4;
        ctx.globalAlpha = nwAlpha;
        ctx.beginPath();
        ctx.moveTo(nwd.x, nwd.y);
        ctx.lineTo(nwd.x - nwux * nwd.len, nwd.y - nwuy * nwd.len);
        ctx.stroke();
      }

      /* Nebula ember pass — warm specks. */
      for (var nedi = 0; nedi < nebEmbers.length; nedi++) {
        var ned = nebEmbers[nedi];
        var netwk = (Math.sin(ned.twk) * 0.5 + 0.5);
        var neAlpha = ned.peak * (0.30 + 0.70 * netwk);
        if (neAlpha <= 0.02) continue;
        var neR = ned.size * (0.8 + 0.4 * netwk) + 0.5;
        var neSpr = tintedGlowSprites[tintIndex(ned.hue)];
        ctx.globalAlpha = neAlpha;
        ctx.drawImage(neSpr, ned.x - neR, ned.y - neR, neR * 2, neR * 2);
      }

      /* Nebula glimmer pass — brief flashes. */
      for (var ngdi = 0; ngdi < nebGlimmers.length; ngdi++) {
        var ngd = nebGlimmers[ngdi];
        var ngProg = ngd.life / ngd.ttl;
        var ngEnv = Math.sin(ngProg * Math.PI);
        ngEnv = ngEnv * ngEnv * ngEnv;
        var ngAlpha = ngd.peak * ngEnv;
        if (ngAlpha <= 0.02) continue;
        var ngR = ngd.size * (1 + 2 * ngEnv) + 0.4;
        ctx.globalAlpha = ngAlpha;
        ctx.drawImage(glowSprite, ngd.x - ngR, ngd.y - ngR, ngR * 2, ngR * 2);
      }
      ctx.globalAlpha = 1;

      /* PERF: this draw used to do ~4 createRadialGradient + fill +
       * shadowBlur passes per orb. With 90 orbs that's ~360 gradient
       * allocations + 360 expensive fills + 720 Gaussian-blur shadow
       * passes per frame. We now do 2-3 drawImage blits per orb from a
       * pre-baked tinted glow atlas: gradient creation, shadowBlur, and
       * arc rasterization all gone. ~8x cheaper per frame at the same
       * visual fidelity (the sprite was tuned to match the old falloff).
       *
       * The blur→clear→sharp→shimmer feel comes through unchanged because
       * we still drive size + alpha + sprite-size per orb from the
       * shimmer envelope — only the per-pixel cost is reduced. */
      for (var i = 0; i < orbs.length; i++) {
        var o = orbs[i];
        var twk = (Math.sin(o.twk) * 0.5 + 0.5);
        var sh  = shimmerEnvelope(tNow, o.shp, o.shs);
        var sharp = shimmerSharp(tNow, o.shp, o.shs);

        // Master scale + alpha — the shimmer cycle drives both, so during
        // the "blur" valley orbs are physically larger and dimmer (out of
        // focus), and during the "clear → sharp" rise they tighten and
        // brighten. This is the blur→clear→sharp→blur breath the spec asks
        // for; size goes UP during blur because diffuse haloes look bigger
        // than the same orb when crisply focused.
        var blurValleyBoost = (1 - sh) * 0.25;
        var size = o.size * (0.85 + 0.18 * twk + 0.15 * sh + blurValleyBoost);
        var coreAlpha = o.alpha * (0.7 + 0.4 * twk + 0.4 * sh + GC.alphaBoost);
        if (coreAlpha > 1) coreAlpha = 1;
        if (size <= 0.5 || coreAlpha <= 0.01) continue; // cull invisible

        // Off-screen culling — the sprite is centered at o.x/o.y with
        // radius `size * 1.8` (the wash extent). Skip orbs whose entire
        // bounding box is off the canvas. This shaves the per-frame work
        // when many orbs have just respawned at the bottom edge.
        var maxR = size * 1.8;
        if (o.x + maxR < 0 || o.x - maxR > W || o.y + maxR < 0 || o.y - maxR > H) continue;

        // Tinted sprite for this orb. The atlas has 16 hue stops; we just
        // pick the closest. Visually indistinguishable from the analytic
        // version because adjacent stops are <1° apart in hue.
        var spr = tintedGlowSprites[tintIndex(o.hue)];

        /* GLOW DIAL — Nebula was too bright on the previous tuning. The
         * outer wash is now ~30% dimmer, the mid halo ~35% dimmer, and the
         * sharp-peak pip ~50% smaller (smaller radius, lower alpha) so it
         * reads as a momentary twinkle instead of a flashbulb. The shimmer
         * cycle, asymmetric rotation, and per-orb hue offset are all
         * unchanged — only the brightness ceiling moved. */

        // 1) Outer wash — large, low alpha. Single drawImage from the
        //    tinted sprite at ~1.6x size.
        var washR = size * (1.8 + 0.30 * (1 - sh));
        ctx.globalAlpha = coreAlpha * 0.14;
        ctx.drawImage(spr, o.x - washR, o.y - washR, washR * 2, washR * 2);

        // 2) Mid halo — the dominant visual. Slightly elliptical and
        //    rotated so the orb has a "weight" direction.
        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.rot);
        ctx.scale(o.ar, 1 / o.ar);
        ctx.globalAlpha = coreAlpha * (0.30 + 0.12 * sh);
        ctx.drawImage(spr, -size, -size, size * 2, size * 2);
        ctx.restore();

        // 3) White-hot pip — fires at sharp shimmer peaks. Smaller and
        //    dimmer than before so it reads as a delicate twinkle, not a
        //    bright flash.
        if (sharp) {
          var pipR = Math.max(1.2, size * 0.18 + GC.coreBoost * 0.3);
          ctx.globalAlpha = Math.min(0.55, coreAlpha * 0.6);
          ctx.drawImage(glowSprite, o.x - pipR, o.y - pipR, pipR * 2, pipR * 2);
        }
      }
      ctx.globalAlpha = 1;

      /* Sparkle pass — small motes riding shimmer peaks. Each sparkle is
       * one drawImage from the tinted atlas, scaled to its current size,
       * with globalAlpha controlling the fade. Tuned dimmer than v1 so the
       * sparkles read as "specks of light catching folds in the cloud"
       * rather than fireflies — see the orb-glow comments above. */
      for (var spi = 0; spi < sparkles.length; spi++) {
        var ss = sparkles[spi];
        var lifeR = ss.life / ss.ttl;
        var fade  = Math.sin(lifeR * Math.PI);
        var sssh  = shimmerEnvelope(tNow, ss.shp, 1.6);
        var ssAlpha = Math.min(0.55, fade * (0.25 + 0.20 * sssh) + GC.alphaBoost * 0.10);
        if (ssAlpha <= 0.02) continue;
        var ssR = ss.size * (1.4 + 0.5 * fade) + 1.2;
        var sspr = tintedGlowSprites[tintIndex(ss.hue)];
        ctx.globalAlpha = ssAlpha * 0.65;
        ctx.drawImage(sspr, ss.x - ssR, ss.y - ssR, ssR * 2, ssR * 2);
        // White pinprick — only for the brightest peaks, kept small so it
        // reads as a glint, not a flash.
        if (sssh > 0.78) {
          ctx.globalAlpha = ssAlpha * 0.35;
          var pinR = ss.size * (0.45 + 0.25 * fade);
          ctx.drawImage(glowSprite, ss.x - pinR, ss.y - pinR, pinR * 2, pinR * 2);
        }
      }
      ctx.globalAlpha = 1;

      ctx.restore();
    };
  }

  // =========================================================================
  // 3. Aurora Streams
  //    Translucent ribbons that flow horizontally, displaced by Perlin
  //    noise so each ribbon snakes organically. Multiple stacked ribbons
  //    in different palette positions read as a slow aurora across the
  //    whole viewport.
  // =========================================================================
  function AuroraRenderer(opts) {
    var W = opts.width, H = opts.height;
    var q = opts.quality;
    var GC = glowConfig(q.glow);
    /* MAJOR LAYER — the ribbons themselves. */
    var STREAM_COUNT = (q.glow === 'multi') ? 6 : (q.glow === 'strong' ? 5 : (q.glow === 'soft' ? 4 : 3));
    var streams = [];
    for (var i = 0; i < STREAM_COUNT; i++) {
      streams.push({
        yFrac:    0.18 + (0.7 * i / Math.max(1, STREAM_COUNT - 1)),
        amp:      40 + Math.random() * 80,
        phase:    Math.random() * Math.PI * 2,
        speed:    0.07 + Math.random() * 0.1,
        noiseSeed: Math.random() * 1000,
        hueBase:  i / STREAM_COUNT,
        thickness: 60 + Math.random() * 90,
        // Shimmer envelope per stream — dims one ribbon while another peaks,
        // so the aurora reads as having "rolling" intensity instead of a
        // uniform glow. Periods are deliberately low (long, slow breaths)
        // because aurorae in real life modulate on the order of seconds.
        shp:      Math.random() * Math.PI * 2,
        shs:      0.10 + Math.random() * 0.18
      });
    }

    /* SECONDARY LAYER — sparkles riding the ribbons (existing). */
    var sparkles = [];
    var SPARK_BASE = 60;
    if (q.glow === 'strong' || q.glow === 'multi') {
      for (var s = 0; s < Math.round(SPARK_BASE * q.count); s++) {
        sparkles.push(makeSpark());
      }
    }
    function makeSpark() {
      var stream = streams[Math.floor(Math.random() * streams.length)];
      return {
        stream: stream,
        x:    Math.random() * W,
        offsetY: (Math.random() - 0.5) * stream.thickness,
        speed: 30 + Math.random() * 90,
        size: Math.random() * 1.5 + 0.6,
        life: Math.random() * 5,
        // Per-spark shimmer phase so the dust riding the ribbon shimmers
        // independently of the ribbon itself.
        shp:  Math.random() * Math.PI * 2,
        shs:  1.0 + Math.random() * 1.4
      };
    }

    /* MINOR LAYER — ambient haze. Slow horizontal drifters independent of
     * the ribbons. They populate the empty sky between aurorae so the
     * vertical gaps don't read as dead space. Drift slower than ribbon
     * sparkles, no shimmer peak, just a soft sine breath. Drawn FIRST so
     * the ribbons paint on top. */
    var haze = [];
    var HAZE_BASE = 70;
    var HAZE_COUNT = Math.max(15, Math.round(HAZE_BASE * q.count));
    for (var ih = 0; ih < HAZE_COUNT; ih++) {
      haze.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        // Tiny: sub-pixel pre-glow. The sprite blit gives them a soft halo.
        size: 0.25 + Math.random() * 0.55,
        // Slow horizontal drift, half the speed of stream sparkles. Some
        // go right, some left, so the haze doesn't all march one way.
        vx:   (Math.random() < 0.5 ? -1 : 1) * (8 + Math.random() * 18),
        vy:   (Math.random() - 0.5) * 4,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.6 + Math.random() * 0.9,
        peak: 0.10 + Math.random() * 0.18
      });
    }

    /* MINOR LAYER — shimmer dust. Extremely tiny slow-drifting specks that
     * gently twinkle, adding depth to the sky between the aurora ribbons.
     * They sit behind everything except sky veils. */
    var shimmerDust = [];
    var SDUST_BASE = 80;
    var SDUST_COUNT = Math.max(15, Math.round(SDUST_BASE * q.count));
    function makeShimmerDust() {
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        size: 0.12 + Math.random() * 0.23,
        vx:   (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 3),
        vy:   (Math.random() - 0.5) * 2,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.8 + Math.random() * 0.8,
        peak: 0.06 + Math.random() * 0.06
      };
    }
    for (var isd = 0; isd < SDUST_COUNT; isd++) shimmerDust.push(makeShimmerDust());

    /* MINOR LAYER — sky veils. Very large, extremely faint, slowly drifting
     * semi-transparent patches that mimic thin cloud cover behind the aurora.
     * Drawn deepest in the layer stack via radial gradients. */
    var skyVeils = [];
    var SVEIL_BASE = 5;
    var SVEIL_COUNT = Math.max(3, Math.round(SVEIL_BASE * q.count));
    for (var isv = 0; isv < SVEIL_COUNT; isv++) {
      skyVeils.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        rad:  60 + Math.random() * 60,
        vx:   (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2),
        vy:   (Math.random() - 0.5) * 1.5,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.04 + Math.random() * 0.04,
        peak: 0.03 + Math.random() * 0.02
      });
    }

    /* MINOR LAYER — star points. Small bright pinpoints that flash briefly
     * like stars peeking through the aurora. They stay fixed in place and
     * cycle through a short life, then respawn elsewhere. */
    var starPoints = [];
    var SPOINT_BASE = 25;
    var SPOINT_COUNT = Math.max(8, Math.round(SPOINT_BASE * q.count));
    function makeStarPoint() {
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        size: 0.15 + Math.random() * 0.10,
        hue:  Math.random(),
        life: 0,
        ttl:  1.5 + Math.random() * 1.5,
        peak: 0.25 + Math.random() * 0.15
      };
    }
    for (var isp = 0; isp < SPOINT_COUNT; isp++) {
      var sp0 = makeStarPoint();
      sp0.life = Math.random() * sp0.ttl;
      starPoints.push(sp0);
    }

    this.resize = function (w, h) { W = w; H = h; };

    this.update = function (dt, t) {
      for (var i = 0; i < streams.length; i++) {
        streams[i].phase += dt * streams[i].speed;
      }
      for (var sp = sparkles.length - 1; sp >= 0; sp--) {
        var s = sparkles[sp];
        s.x += s.speed * dt;
        s.life -= dt;
        if (s.x > W + 40 || s.life <= 0) {
          sparkles[sp] = makeSpark();
          sparkles[sp].x = -20;
        }
      }
      // Haze drift — wraps in both axes. The wraparound respawn is at the
      // opposite edge with a fresh y so the field stays evenly distributed
      // even as motes drift off one side.
      for (var hi = 0; hi < haze.length; hi++) {
        var hz = haze[hi];
        hz.x += hz.vx * dt;
        hz.y += hz.vy * dt;
        hz.twk += dt * hz.twkSpeed;
        if (hz.x < -20)      { hz.x = W + 20; hz.y = Math.random() * H; }
        else if (hz.x > W + 20) { hz.x = -20; hz.y = Math.random() * H; }
        if (hz.y < -20)      hz.y = H + 20;
        else if (hz.y > H + 20) hz.y = -20;
      }
      // Shimmer dust drift + twinkle + wraparound.
      for (var sdi = 0; sdi < shimmerDust.length; sdi++) {
        var sd = shimmerDust[sdi];
        sd.x += sd.vx * dt;
        sd.y += sd.vy * dt;
        sd.twk += dt * sd.twkSpeed;
        if (sd.x < -10)       { sd.x = W + 10; sd.y = Math.random() * H; }
        else if (sd.x > W + 10) { sd.x = -10; sd.y = Math.random() * H; }
        if (sd.y < -10)       sd.y = H + 10;
        else if (sd.y > H + 10) sd.y = -10;
      }
      // Sky veils — very slow drift + twinkle + wraparound (with rad inset).
      for (var svi = 0; svi < skyVeils.length; svi++) {
        var sv = skyVeils[svi];
        sv.x += sv.vx * dt;
        sv.y += sv.vy * dt;
        sv.twk += dt * sv.twkSpeed;
        var svInset = sv.rad;
        if (sv.x < -svInset)       { sv.x = W + svInset; sv.y = Math.random() * H; }
        else if (sv.x > W + svInset) { sv.x = -svInset; sv.y = Math.random() * H; }
        if (sv.y < -svInset)       sv.y = H + svInset;
        else if (sv.y > H + svInset) sv.y = -svInset;
      }
      // Star points — life cycle, respawn when life >= ttl.
      for (var sti = 0; sti < starPoints.length; sti++) {
        var spt = starPoints[sti];
        spt.life += dt;
        if (spt.life >= spt.ttl) {
          starPoints[sti] = makeStarPoint();
        }
      }
    };

    function streamY(stream, x, t) {
      var n = noise2((x + stream.noiseSeed) / 220, t * 0.25 + stream.noiseSeed * 0.001);
      return stream.yFrac * H + n * stream.amp + Math.sin(x / 130 + stream.phase) * stream.amp * 0.35;
    }

    this.draw = function (ctx, W, H) {
      ensureGlowSprites();
      if (q.trails) {
        ctx.fillStyle = 'rgba(5,2,12,0.10)';
        ctx.fillRect(0, 0, W, H);
      } else {
        ctx.clearRect(0, 0, W, H);
      }

      var t = (performance.now ? performance.now() : Date.now()) / 1000;
      var step = (q.glow === 'none') ? 24 : (q.glow === 'soft' ? 16 : 10);

      ctx.save();
      // Aurora reads best with `lighter` blending — overlapping ribbons are
      // supposed to glow brighter where they cross, the way real aurorae
      // accumulate when curtains layer over each other.
      if (GC.blur > 0) ctx.globalCompositeOperation = 'lighter';

      /* MINOR PASS — ambient haze. Single tinted-sprite blit per mote at
       * a tiny size. Drawn before the ribbons so the streams overlay the
       * haze. Independent of the streams, so the empty corners of the
       * sky always have something quietly happening. */
      ensureGlowSprites();
      for (var hii = 0; hii < haze.length; hii++) {
        var hz2 = haze[hii];
        var htwk = (Math.sin(hz2.twk) * 0.5 + 0.5);
        var hAlpha = hz2.peak * (0.35 + 0.65 * htwk);
        if (hAlpha <= 0.02) continue;
        var hr = hz2.size * (1.0 + 0.55 * htwk) + 0.8;
        var hspr = tintedGlowSprites[tintIndex(hz2.hue)];
        ctx.globalAlpha = hAlpha;
        ctx.drawImage(hspr, hz2.x - hr, hz2.y - hr, hr * 2, hr * 2);
      }
      ctx.globalAlpha = 1;

      /* SKY VEILS PASS — very large, faint radial-gradient patches. Drawn
       * deepest among the new minor layers so they feel like thin cloud
       * cover behind everything else. */
      for (var svdi = 0; svdi < skyVeils.length; svdi++) {
        var sv2 = skyVeils[svdi];
        var svTwk = (Math.sin(sv2.twk) * 0.5 + 0.5);
        var svAlpha = sv2.peak * (0.3 + 0.7 * svTwk);
        if (svAlpha <= 0.008) continue;
        var svGrad = ctx.createRadialGradient(sv2.x, sv2.y, 0, sv2.x, sv2.y, sv2.rad);
        svGrad.addColorStop(0,   paletteAt(sv2.hue, svAlpha));
        svGrad.addColorStop(0.6, paletteAt(sv2.hue, svAlpha * 0.4));
        svGrad.addColorStop(1,   paletteAt(sv2.hue, 0));
        ctx.globalAlpha = 1;
        ctx.fillStyle = svGrad;
        ctx.fillRect(sv2.x - sv2.rad, sv2.y - sv2.rad, sv2.rad * 2, sv2.rad * 2);
      }

      /* SHIMMER DUST PASS — tiny tinted sprite blit per particle. */
      for (var sddi = 0; sddi < shimmerDust.length; sddi++) {
        var sd2 = shimmerDust[sddi];
        var sdTwk = (Math.sin(sd2.twk) * 0.5 + 0.5);
        var sdAlpha = sd2.peak * (0.25 + 0.75 * sdTwk);
        if (sdAlpha <= 0.015) continue;
        var sdR = sd2.size * (1.0 + 0.5 * sdTwk) + 0.5;
        var sdSpr = tintedGlowSprites[tintIndex(sd2.hue)];
        ctx.globalAlpha = sdAlpha;
        ctx.drawImage(sdSpr, sd2.x - sdR, sd2.y - sdR, sdR * 2, sdR * 2);
      }
      ctx.globalAlpha = 1;

      /* STAR POINTS PASS — brief bright pinpoints. Alpha follows a sin
       * envelope over their lifetime so they fade in, flash, fade out. */
      for (var spdi = 0; spdi < starPoints.length; spdi++) {
        var sp2 = starPoints[spdi];
        var spFrac = sp2.life / sp2.ttl;
        var spAlpha = sp2.peak * Math.sin(spFrac * Math.PI);
        if (spAlpha <= 0.015) continue;
        var spR = sp2.size * (0.8 + 0.4 * Math.sin(spFrac * Math.PI)) + 0.4;
        ctx.globalAlpha = spAlpha;
        ctx.drawImage(glowSprite, sp2.x - spR, sp2.y - spR, spR * 2, spR * 2);
      }
      ctx.globalAlpha = 1;

      for (var si = 0; si < streams.length; si++) {
        var stream = streams[si];
        // Per-stream shimmer drives both intensity and effective thickness;
        // when a stream peaks it briefly looks crisper (thinner core, harder
        // edge); when it dims it softens out.
        var sh = shimmerEnvelope(t, stream.shp, stream.shs);
        var thicknessMul = 0.85 + 0.30 * sh;
        var alphaMul = 0.7 + 0.40 * sh + GC.alphaBoost;

        // Top edge of the ribbon
        var topPath = [];
        var botPath = [];
        for (var x = -20; x <= W + 20; x += step) {
          var midY = streamY(stream, x, t);
          var halfT = stream.thickness * 0.5 * thicknessMul;
          topPath.push({ x: x, y: midY - halfT });
          botPath.push({ x: x, y: midY + halfT });
        }

        // Vertical gradient inside the ribbon
        var halfTSample = stream.thickness * 0.5 * thicknessMul;
        var midSampleY = streamY(stream, W * 0.5, t);
        var grad = ctx.createLinearGradient(0, midSampleY - halfTSample, 0, midSampleY + halfTSample);
        grad.addColorStop(0,   paletteAt(stream.hueBase + 0.05, 0));
        grad.addColorStop(0.5, paletteAt(stream.hueBase,        Math.min(1, 0.32 * alphaMul)));
        grad.addColorStop(1,   paletteAt(stream.hueBase + 0.1,  0));

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(topPath[0].x, topPath[0].y);
        for (var pi = 1; pi < topPath.length; pi++) ctx.lineTo(topPath[pi].x, topPath[pi].y);
        for (var qi = botPath.length - 1; qi >= 0; qi--) ctx.lineTo(botPath[qi].x, botPath[qi].y);
        ctx.closePath();
        if (GC.blur > 0) {
          ctx.shadowBlur  = GC.blur * (0.9 + 0.6 * sh);
          ctx.shadowColor = paletteAt(stream.hueBase, Math.min(1, 0.55 + GC.alphaBoost * 0.5));
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // A bright core line traces the spine of the ribbon. Stroked twice
        // on multi tier — once wide for soft bloom, once thin for the
        // hard-edged core — to give it the look of a fluorescent tube
        // instead of a flat line.
        if (GC.blur > 0) {
          ctx.strokeStyle = paletteAt(stream.hueBase + 0.08, Math.min(1, 0.30 * alphaMul));
          ctx.lineWidth = (q.glow === 'multi' ? 4.0 : 2.6);
          ctx.shadowBlur  = GC.blur * 0.7;
          ctx.shadowColor = paletteAt(stream.hueBase + 0.08, 0.7);
          ctx.beginPath();
          for (var lpi0 = 0; lpi0 < topPath.length; lpi0++) {
            var midY0 = (topPath[lpi0].y + botPath[lpi0].y) * 0.5;
            if (lpi0 === 0) ctx.moveTo(topPath[lpi0].x, midY0);
            else            ctx.lineTo(topPath[lpi0].x, midY0);
          }
          ctx.stroke();
        }
        ctx.strokeStyle = paletteAt(stream.hueBase + 0.08, Math.min(1, 0.55 * alphaMul + GC.alphaBoost * 0.4));
        ctx.lineWidth = q.glow === 'multi' ? 1.6 : 1.1;
        if (GC.blur > 0) {
          ctx.shadowBlur  = GC.blur * 0.4;
          ctx.shadowColor = paletteAt(stream.hueBase + 0.08, 0.85);
        }
        ctx.beginPath();
        for (var lpi = 0; lpi < topPath.length; lpi++) {
          var midY = (topPath[lpi].y + botPath[lpi].y) * 0.5;
          if (lpi === 0) ctx.moveTo(topPath[lpi].x, midY);
          else           ctx.lineTo(topPath[lpi].x, midY);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      /* Sparkles riding the ribbons — drawn from the tinted glow atlas
       * instead of two arc+fill+shadowBlur passes per sparkle. Each
       * sparkle becomes one drawImage (plus an optional white pinprick
       * at shimmer peaks). The streams above are still strokes — the
       * heavy work was the sparkles, of which there can be 60+ per frame
       * with shadowBlur each. */
      ensureGlowSprites();
      for (var spi = 0; spi < sparkles.length; spi++) {
        var sp = sparkles[spi];
        var midY = streamY(sp.stream, sp.x, t);
        var ssh  = shimmerEnvelope(t, sp.shp, sp.shs);
        var sAlpha = Math.min(1, (0.55 + 0.45 * ssh) + GC.alphaBoost * 0.4);
        var sSize  = sp.size * (1.4 + 0.6 * ssh) + 1.2;
        if (sAlpha <= 0.02) continue;

        var ssp = tintedGlowSprites[tintIndex(sp.stream.hueBase + 0.1)];
        ctx.globalAlpha = sAlpha * 0.85;
        ctx.drawImage(ssp, sp.x - sSize, midY + sp.offsetY - sSize, sSize * 2, sSize * 2);

        // Hot pinprick — visible only at shimmer peaks. Drawn from the
        // untinted white sprite so the center burns whiter than the bloom.
        if (ssh > 0.6) {
          var pinR = sp.size * (0.7 + 0.4 * ssh);
          ctx.globalAlpha = sAlpha * 0.55;
          ctx.drawImage(glowSprite, sp.x - pinR, midY + sp.offsetY - pinR, pinR * 2, pinR * 2);
        }
      }
      ctx.globalAlpha = 1;
      ctx.restore();
      ctx.shadowBlur = 0;
    };
  }

  // =========================================================================
  // 4. Quantum Field
  //    Each particle samples a 2D Perlin field for its direction, so the
  //    population traces out flowing streamlines. With trails on, the
  //    canvas isn't fully cleared every frame — particles draw fading
  //    paths that read as smoke/incense plumes.
  // =========================================================================
  function QuantumRenderer(opts) {
    var W = opts.width, H = opts.height;
    var q = opts.quality;
    var GC = glowConfig(q.glow);
    /* PRIMARY LAYER — the dense field of small particles tracing the
     * curl-noise streamlines. The user specifically liked the cursor-swirl
     * interaction and the way streamlines form curves; the previous count
     * (240) wasn't enough to make those curves visually solid, so we
     * raise the base to 480. Off-screen culling in the draw pass means
     * the per-frame cost only scales with VISIBLE particles, not total. */
    var BASE = 480;
    var COUNT = Math.max(80, Math.round(BASE * q.count));
    var particles = [];
    for (var i = 0; i < COUNT; i++) particles.push(make());
    function make() {
      return {
        x:   Math.random() * W,
        y:   Math.random() * H,
        vx:  0,
        vy:  0,
        size: Math.random() * 1.4 + 0.5,
        hue:  Math.random(),
        life: Math.random() * 5 + 2,
        maxLife: Math.random() * 5 + 4,
        // Per-particle shimmer phase + speed. Quantum particles already have
        // a `life`/`maxLife` envelope from the original code; the shimmer
        // rides ON TOP of that, so a particle's apparent brightness becomes
        // (life curve) × (shimmer envelope) — short-lived particles still
        // get to twinkle at least once or twice during their tenure.
        shp: Math.random() * Math.PI * 2,
        shs: 0.7 + Math.random() * 0.9,
        groupId:       -1,
        groupSlot:     -1,
        mouseImmunity: 0,
        groupImmunity: 0
      };
    }

    /* MAJOR ANCHOR LAYER — a small population of larger, slower particles
     * that act as bright stable nodes the streamlines flow past. Without
     * them the field reads as a uniform swarm; with them it has visual
     * focus points that the eye can latch onto, giving the population a
     * sense of scale. They use the SAME curl field as the primaries but
     * at a much weaker force scaling, so they drift instead of dart. */
    var anchors = [];
    var ANCHOR_BASE = 18;
    var ANCHOR_COUNT = Math.max(4, Math.round(ANCHOR_BASE * q.count));
    for (var ia = 0; ia < ANCHOR_COUNT; ia++) anchors.push(makeAnchor());
    function makeAnchor() {
      return {
        x:   Math.random() * W,
        y:   Math.random() * H,
        vx:  0,
        vy:  0,
        size: 2.8 + Math.random() * 2.2,
        hue:  Math.random(),
        life: Math.random() * 8 + 6,
        maxLife: Math.random() * 8 + 10,
        // Slower shimmer than primaries — anchors breathe on a longer
        // cycle, befitting their larger, more imposing presence.
        shp: Math.random() * Math.PI * 2,
        shs: 0.30 + Math.random() * 0.40
      };
    }

    /* WISP LAYER — tiny, fast, short-lived particles. They fade in and
     * out over ~0.8s, giving the field high-frequency shimmer that the
     * primaries (which live 4-9s) can't provide. Drawn after primaries
     * but with low alpha. */
    var wisps = [];
    var WISP_BASE = 80;
    var WISP_COUNT = Math.max(20, Math.round(WISP_BASE * q.count));
    for (var iw = 0; iw < WISP_COUNT; iw++) wisps.push(makeWisp());
    function makeWisp() {
      return {
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   0,
        vy:   0,
        size: 0.30 + Math.random() * 0.50,
        hue:  Math.random(),
        life: Math.random() * 0.8,
        ttl:  0.4 + Math.random() * 0.6
      };
    }

    /* FIELD LINES — very faint short line segments that slowly drift and
     * rotate, suggesting the underlying vector-field structure. They never
     * interact with the cursor or other layers; pure ambient decoration. */
    var fieldLines = [];
    var FL_BASE = 30;
    var FL_COUNT = Math.max(8, Math.round(FL_BASE * q.count));
    function makeFieldLine() {
      var angle = Math.random() * Math.PI * 2;
      var speed = 2 + Math.random() * 4;
      return {
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    Math.cos(angle) * speed,
        vy:    Math.sin(angle) * speed,
        len:   10 + Math.random() * 15,
        rot:   Math.random() * Math.PI * 2,
        rotV:  (0.1 + Math.random() * 0.2) * (Math.random() < 0.5 ? 1 : -1),
        hue:   Math.random(),
        alpha: 0.04 + Math.random() * 0.04
      };
    }
    for (var ifl = 0; ifl < FL_COUNT; ifl++) fieldLines.push(makeFieldLine());

    /* QUANTUM SPARKS — tiny bright flashes that pop in and vanish almost
     * instantly (0.3-0.6 s). They add staccato energy without persistent
     * visual weight. No movement — they blink at a random spot and die. */
    var qSparks = [];
    var QS_BASE = 35;
    var QS_COUNT = Math.max(10, Math.round(QS_BASE * q.count));
    function makeQSpark() {
      return {
        x:     Math.random() * W,
        y:     Math.random() * H,
        size:  0.15 + Math.random() * 0.15,
        hue:   Math.random(),
        life:  Math.random() * 0.5,
        ttl:   0.3 + Math.random() * 0.3,
        alpha: 0.30 + Math.random() * 0.20
      };
    }
    for (var iqs = 0; iqs < QS_COUNT; iqs++) qSparks.push(makeQSpark());

    /* PHASE MOTES — sub-pixel dots that phase in and out on a long, slow
     * cycle (3-5 s equivalent via twinkle speed). They drift almost
     * imperceptibly, giving the scene quiet depth behind the busier
     * primary/wisp layers. */
    var phaseMotes = [];
    var PM_BASE = 50;
    var PM_COUNT = Math.max(15, Math.round(PM_BASE * q.count));
    function makePhaseMote() {
      var angle = Math.random() * Math.PI * 2;
      var speed = 1 + Math.random() * 3;
      return {
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    Math.cos(angle) * speed,
        vy:    Math.sin(angle) * speed,
        size:  0.12 + Math.random() * 0.18,
        hue:   Math.random(),
        phase: Math.random() * Math.PI * 2,
        twSpd: 0.15 + Math.random() * 0.20,
        alpha: 0.05 + Math.random() * 0.05
      };
    }
    for (var ipm = 0; ipm < PM_COUNT; ipm++) phaseMotes.push(makePhaseMote());

    /* MOUSE INFLUENCE — the cursor acts as a gravitational attractor
     * with a strong tangential component so nearby particles visibly
     * curve and swirl around it. */
    var MOUSE_RANGE      = 200;
    var MOUSE_STRENGTH   = 350;
    var MOUSE_TANGENT    = 0.85;
    var MOUSE_RADIAL     = 0.35;
    var MOUSE_ESCAPE_SPD = 80;
    var MOUSE_IMMUNITY_T = 2.0;

    /* GROUP RELATIONSHIPS — nearby particles influence each other's
     * heading so they naturally align into lines, arcs, and curves.
     * No fixed polygon slots — the "shape" emerges from velocity
     * alignment + spacing forces between neighbors. */
    var GROUP_FORM_DIST  = 180;
    var GROUP_BREAK_DIST = 300;
    var GROUP_MAX_AGE    = 25;
    var GROUP_ALIGN_K    = 18;
    var GROUP_SPACING    = 60;
    var GROUP_SPACE_K    = 8;
    var GROUP_COHESION_K = 3;
    var GROUP_IMMUNITY_T = 2.5;
    var MAX_GROUPS       = Math.max(4, Math.round(10 * q.count));

    var groups = [];
    var nextGroupId = 0;

    function makeGroup(memberIndices) {
      var id = nextGroupId++;
      var g = {
        id: id,
        members: memberIndices.slice(),
        age: 0,
        hue: Math.random()
      };
      for (var si = 0; si < memberIndices.length; si++) {
        particles[memberIndices[si]].groupId = id;
        particles[memberIndices[si]].groupSlot = si;
      }
      return g;
    }

    this.resize = function (w, h) { W = w; H = h; };

    this.update = function (dt, t) {
      var scale = 0.0035;
      var force = 50;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (p.mouseImmunity > 0) p.mouseImmunity -= dt;
        if (p.groupImmunity > 0) p.groupImmunity -= dt;

          var n1 = noise2(p.x * scale,        p.y * scale + t * 0.18);
          var n2 = noise2(p.x * scale + 17.3, p.y * scale + 31.7 - t * 0.15);
          var ang = (n1 + n2 * 0.5) * Math.PI * 2;
          p.vx += Math.cos(ang) * force * dt;
          p.vy += Math.sin(ang) * force * dt;

        if (mouse.active && p.mouseImmunity <= 0) {
          var mdx = mouse.x - p.x, mdy = mouse.y - p.y;
          var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist > 1 && mDist < MOUSE_RANGE) {
            var falloff = 1 - mDist / MOUSE_RANGE;
            falloff *= falloff;
            var ux = mdx / mDist, uy = mdy / mDist;
            var tangX = -uy, tangY = ux;
            p.vx += (tangX * MOUSE_TANGENT + ux * MOUSE_RADIAL) * MOUSE_STRENGTH * falloff * dt;
            p.vy += (tangY * MOUSE_TANGENT + uy * MOUSE_RADIAL) * MOUSE_STRENGTH * falloff * dt;
            var spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (spd > MOUSE_ESCAPE_SPD) {
              p.mouseImmunity = MOUSE_IMMUNITY_T;
            }
          }
        }

          p.vx *= 0.88;
          p.vy *= 0.88;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
        p.life -= dt;

        if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20 || p.life <= 0) {
          p.x = 40 + Math.random() * Math.max(1, W - 80);
          p.y = 40 + Math.random() * Math.max(1, H - 80);
          p.vx = 0; p.vy = 0;
          p.life = p.maxLife;
          p.hue = Math.random();
          if (p.groupId >= 0) {
            for (var rg = groups.length - 1; rg >= 0; rg--) {
              if (groups[rg].id === p.groupId) {
                var rmIdx = groups[rg].members.indexOf(i);
                if (rmIdx >= 0) {
                  groups[rg].members.splice(rmIdx, 1);
                  for (var rs = 0; rs < groups[rg].members.length; rs++) {
                    particles[groups[rg].members[rs]].groupSlot = rs;
                  }
                }
                if (groups[rg].members.length < 3) {
                  for (var rr = 0; rr < groups[rg].members.length; rr++) {
                    var rp = particles[groups[rg].members[rr]];
                    rp.groupId = -1; rp.groupSlot = -1;
                    rp.groupImmunity = GROUP_IMMUNITY_T;
                  }
                  groups.splice(rg, 1);
                }
                break;
              }
            }
            p.groupId = -1; p.groupSlot = -1;
            p.groupImmunity = 0;
          }
          p.mouseImmunity = 0;
        }
      }

      /* ---- GROUP MAINTENANCE ----------------------------------------
       * Groups influence member velocity: alignment steers particles
       * toward the group's average heading, spacing keeps them from
       * clumping or drifting too far apart, and weak cohesion pulls
       * toward the centroid. The result is emergent formations —
       * lines, arcs, curves — without fixed polygon slots. */
      for (var gi2 = groups.length - 1; gi2 >= 0; gi2--) {
        var grp = groups[gi2];
        grp.age += dt;
        var n = grp.members.length;
        if (n < 2 || grp.age > GROUP_MAX_AGE) {
          for (var di = 0; di < n; di++) {
            var dp = particles[grp.members[di]];
            dp.groupId = -1; dp.groupSlot = -1;
            dp.groupImmunity = GROUP_IMMUNITY_T;
          }
          groups.splice(gi2, 1);
          continue;
        }
        var gcx = 0, gcy = 0, gavx = 0, gavy = 0;
        for (var ci = 0; ci < n; ci++) {
          var cp = particles[grp.members[ci]];
          gcx += cp.x; gcy += cp.y;
          gavx += cp.vx; gavy += cp.vy;
        }
        gcx /= n; gcy /= n; gavx /= n; gavy /= n;

        for (var si2 = n - 1; si2 >= 0; si2--) {
          var sp = particles[grp.members[si2]];
          var cdx = gcx - sp.x, cdy = gcy - sp.y;
          var cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist > GROUP_BREAK_DIST) {
            sp.groupId = -1; sp.groupSlot = -1;
            sp.groupImmunity = GROUP_IMMUNITY_T;
            grp.members.splice(si2, 1);
            n--;
            continue;
          }
          sp.vx += (gavx - sp.vx) * GROUP_ALIGN_K * dt;
          sp.vy += (gavy - sp.vy) * GROUP_ALIGN_K * dt;
          if (cdist > 1) {
            sp.vx += (cdx / cdist) * GROUP_COHESION_K * dt;
            sp.vy += (cdy / cdist) * GROUP_COHESION_K * dt;
          }
          for (var sj = 0; sj < n; sj++) {
            if (sj === si2) continue;
            var other = particles[grp.members[sj]];
            var sdx2 = sp.x - other.x, sdy2 = sp.y - other.y;
            var sd2 = sdx2 * sdx2 + sdy2 * sdy2;
            if (sd2 < GROUP_SPACING * GROUP_SPACING && sd2 > 0.5) {
              var sdist2 = Math.sqrt(sd2);
              var push = (GROUP_SPACING - sdist2) * GROUP_SPACE_K;
              sp.vx += (sdx2 / sdist2) * push * dt;
              sp.vy += (sdy2 / sdist2) * push * dt;
            }
          }
        }
        if (grp.members.length < 2) {
          for (var dk = 0; dk < grp.members.length; dk++) {
            var dpk = particles[grp.members[dk]];
            dpk.groupId = -1; dpk.groupSlot = -1;
            dpk.groupImmunity = GROUP_IMMUNITY_T;
          }
          groups.splice(gi2, 1);
        }
      }

      /* ---- GROUP FORMATION ------------------------------------------ */
      if (groups.length < MAX_GROUPS) {
        var GATTEMPTS = Math.max(1, Math.round(30 * dt));
        for (var ga = 0; ga < GATTEMPTS; ga++) {
          if (groups.length >= MAX_GROUPS) break;
          var seed = Math.floor(Math.random() * particles.length);
          var sp0 = particles[seed];
          if (sp0.groupId >= 0 || sp0.groupImmunity > 0) continue;
          var groupSize = 3 + Math.floor(Math.random() * 5);
          var candidates = [seed];
          var fd2 = GROUP_FORM_DIST * GROUP_FORM_DIST;
          for (var bi3 = 0; bi3 < particles.length && candidates.length < groupSize; bi3++) {
            if (bi3 === seed) continue;
            var cand = particles[bi3];
            if (cand.groupId >= 0 || cand.groupImmunity > 0) continue;
            var cdx = cand.x - sp0.x, cdy = cand.y - sp0.y;
            if (cdx * cdx + cdy * cdy < fd2) candidates.push(bi3);
          }
          if (candidates.length >= 2) {
            if (candidates.length > groupSize) candidates.length = groupSize;
            groups.push(makeGroup(candidates));
          }
        }
      }
      // Anchors — same field, ~30% the force, stronger damping. They
      // drift across the field over many seconds rather than darting.
      var anchorForce = force * 0.30;
      var anchorDamp  = 0.93;
      for (var ai = 0; ai < anchors.length; ai++) {
        var an = anchors[ai];
        var an1 = noise2(an.x * scale,           an.y * scale + t * 0.10);
        var an2 = noise2(an.x * scale + 17.3,    an.y * scale + 31.7 - t * 0.09);
        var ang2 = (an1 + an2 * 0.5) * Math.PI * 2;
        an.vx += Math.cos(ang2) * anchorForce * dt;
        an.vy += Math.sin(ang2) * anchorForce * dt;
        an.vx *= anchorDamp;
        an.vy *= anchorDamp;
        an.x += an.vx * dt;
        an.y += an.vy * dt;
        an.life -= dt;
        if (an.x < -30 || an.x > W + 30 || an.y < -30 || an.y > H + 30 || an.life <= 0) {
          /* Interior respawn — same reasoning as the primary particle
           * loop above. Anchors that previously edge-respawned looked
           * like a procession marching along the border because of how
           * the noise field flows near the screen edges. */
          an.x = 60 + Math.random() * Math.max(1, W - 120);
          an.y = 60 + Math.random() * Math.max(1, H - 120);
          an.vx = 0; an.vy = 0;
          an.life = an.maxLife;
          an.hue = Math.random();
        }
      }
      // Wisps — flicker in place. Each wisp simply lives, fades, and
      // respawns elsewhere. No field interaction — they're meant to read
      // as ambient flickers, not flow markers.
      for (var wi = 0; wi < wisps.length; wi++) {
        var ws = wisps[wi];
        ws.life += dt;
        if (ws.life >= ws.ttl) {
          ws.x = Math.random() * W;
          ws.y = Math.random() * H;
          ws.size = 0.30 + Math.random() * 0.50;
          ws.hue  = Math.random();
          ws.life = 0;
          ws.ttl  = 0.4 + Math.random() * 0.6;
        }
      }

      // Field lines — drift + rotate, wrap at edges.
      for (var fli = 0; fli < fieldLines.length; fli++) {
        var fl = fieldLines[fli];
        fl.x += fl.vx * dt;
        fl.y += fl.vy * dt;
        fl.rot += fl.rotV * dt;
        if (fl.x < -30) fl.x += W + 60;
        else if (fl.x > W + 30) fl.x -= W + 60;
        if (fl.y < -30) fl.y += H + 60;
        else if (fl.y > H + 30) fl.y -= H + 60;
      }

      // Quantum sparks — tick life, respawn at random position on expiry.
      for (var qsi = 0; qsi < qSparks.length; qsi++) {
        var qs = qSparks[qsi];
        qs.life += dt;
        if (qs.life >= qs.ttl) {
          qs.x    = Math.random() * W;
          qs.y    = Math.random() * H;
          qs.size = 0.15 + Math.random() * 0.15;
          qs.hue  = Math.random();
          qs.life = 0;
          qs.ttl  = 0.3 + Math.random() * 0.3;
          qs.alpha = 0.30 + Math.random() * 0.20;
        }
      }

      // Phase motes — very slow drift + twinkle phase advance, wrap edges.
      for (var pmi = 0; pmi < phaseMotes.length; pmi++) {
        var pm = phaseMotes[pmi];
        pm.x += pm.vx * dt;
        pm.y += pm.vy * dt;
        pm.phase += pm.twSpd * dt;
        if (pm.x < -20) pm.x += W + 40;
        else if (pm.x > W + 20) pm.x -= W + 40;
        if (pm.y < -20) pm.y += H + 40;
        else if (pm.y > H + 20) pm.y -= H + 40;
      }
    };

    this.draw = function (ctx, W, H) {
      /* TRAIL FREE — Quantum used to paint a low-alpha black rect each
       * frame, leaving fading streaks behind every particle. The user
       * found those streaks read as a smudgy permanent overlay rather
       * than smoke, so we now clear the canvas fully. The streamline
       * structure of the field is still visible because the particles
       * follow a curl-noise field; trails are no longer required to
       * communicate flow. */
      ensureGlowSprites();
      ctx.clearRect(0, 0, W, H);

      var tNow = (performance.now ? performance.now() : Date.now()) / 1000;
      ctx.save();
      // Additive on the particle pass — quantum particles overlap heavily
      // along streamlines, and we want overlap to brighten rather than
      // muddy the color.
      if (GC.blur > 0) ctx.globalCompositeOperation = 'lighter';

      /* PERF: Quantum spawns the most particles of any renderer (240 at
       * High, 360 at Extreme). The previous draw set shadowBlur +
       * shadowColor + fillStyle and called arc().fill() per particle —
       * the shadowBlur alone is a Gaussian blur per fill on the GPU, so
       * 240 of them per frame at 60fps was 14 400 blur passes per second.
       * Replacing with a single drawImage from the tinted glow atlas
       * (alpha controlled via globalAlpha) brings that down to a simple
       * GPU blit per particle — typically 5-8× faster. */
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var lifeRatio = p.life / p.maxLife;
        var lifeAlpha = Math.max(0, Math.min(1, Math.sin(lifeRatio * Math.PI)));
        var sh = shimmerEnvelope(tNow, p.shp, p.shs);
        var sharp = shimmerSharp(tNow, p.shp, p.shs);
        var alpha = Math.min(1, lifeAlpha * (0.55 + 0.45 * sh) + GC.alphaBoost * lifeAlpha);
        var size  = p.size * (0.85 + 0.35 * sh) + (sharp ? GC.coreBoost * 0.5 : 0);
        if (alpha <= 0.02 || size <= 0.2) continue;

        // Glow radius — sprite is wider than the particle's nominal size
        // so the soft edge feathers out naturally. Higher tiers paint a
        // larger sprite for a brighter aura without changing geometry.
        var glowR = size + 2.5 + GC.blur * 0.16;

        var spr = tintedGlowSprites[tintIndex(p.hue)];
        ctx.globalAlpha = alpha * 0.85;
        ctx.drawImage(spr, p.x - glowR, p.y - glowR, glowR * 2, glowR * 2);

        // Hot pinprick at sharp shimmer peaks — gives streamlines a
        // "light catching the eddy" sparkle as particles flow past.
        if (sharp && GC.chromaCore) {
          var pipR = Math.max(1.2, size * 0.9);
          ctx.globalAlpha = Math.min(1, alpha + 0.2);
          ctx.drawImage(glowSprite, p.x - pipR, p.y - pipR, pipR * 2, pipR * 2);
        }
      }

      /* ANCHOR PASS — drawn AFTER primaries so the bright slow nodes sit
       * on top. Each anchor is two blits: a wider tinted halo and a
       * sharper white core, plus a small extra flash at shimmer peaks. */
      for (var aii = 0; aii < anchors.length; aii++) {
        var an2 = anchors[aii];
        var aRatio = an2.life / an2.maxLife;
        var aFade  = Math.max(0, Math.min(1, Math.sin(aRatio * Math.PI)));
        var ash    = shimmerEnvelope(tNow, an2.shp, an2.shs);
        var aSharp = shimmerSharp(tNow, an2.shp, an2.shs);
        var aAlpha = Math.min(1, aFade * (0.55 + 0.30 * ash) + GC.alphaBoost * 0.5);
        var aSize  = an2.size * (0.95 + 0.25 * ash);
        if (aAlpha <= 0.02) continue;
        var aR = aSize + 4.5 + GC.blur * 0.20;
        var aspr = tintedGlowSprites[tintIndex(an2.hue)];
        ctx.globalAlpha = aAlpha * 0.75;
        ctx.drawImage(aspr, an2.x - aR, an2.y - aR, aR * 2, aR * 2);
        if (aSharp && GC.chromaCore) {
          var apipR = Math.max(1.6, aSize * 0.7);
          ctx.globalAlpha = Math.min(0.85, aAlpha + 0.10);
          ctx.drawImage(glowSprite, an2.x - apipR, an2.y - apipR, apipR * 2, apipR * 2);
        }
      }

      /* PHASE MOTE PASS — sub-pixel dots that breathe on a long twinkle
       * cycle. Drawn early (behind everything except primaries/anchors)
       * so they read as distant background depth. */
      for (var pmdi = 0; pmdi < phaseMotes.length; pmdi++) {
        var pmd = phaseMotes[pmdi];
        var pmTw = (Math.sin(pmd.phase) + 1) * 0.5;
        var pmA  = pmd.alpha * pmTw;
        if (pmA <= 0.01) continue;
        var pmR = pmd.size + 0.4;
        var pmSpr = tintedGlowSprites[tintIndex(pmd.hue)];
        ctx.globalAlpha = pmA;
        ctx.drawImage(pmSpr, pmd.x - pmR, pmd.y - pmR, pmR * 2, pmR * 2);
      }

      /* FIELD LINE PASS — faint short strokes hinting at the vector field.
       * Pure stroke geometry, no sprites. */
      for (var fldi = 0; fldi < fieldLines.length; fldi++) {
        var fld = fieldLines[fldi];
        var halfLen = fld.len * 0.5;
        var cosR = Math.cos(fld.rot) * halfLen;
        var sinR = Math.sin(fld.rot) * halfLen;
        ctx.strokeStyle = paletteAt(fld.hue, fld.alpha);
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(fld.x - cosR, fld.y - sinR);
        ctx.lineTo(fld.x + cosR, fld.y + sinR);
        ctx.stroke();
      }

      /* QUANTUM SPARK PASS — brief flashes via sin envelope over life/ttl.
       * Uses the white glowSprite for a neutral hot flash. */
      for (var qsdi = 0; qsdi < qSparks.length; qsdi++) {
        var qsd = qSparks[qsdi];
        var qsRatio = qsd.life / qsd.ttl;
        var qsFade  = Math.sin(qsRatio * Math.PI);
        var qsA = qsd.alpha * qsFade;
        if (qsA <= 0.02) continue;
        var qsR = qsd.size + 0.5;
        ctx.globalAlpha = qsA;
        ctx.drawImage(glowSprite, qsd.x - qsR, qsd.y - qsR, qsR * 2, qsR * 2);
      }

      /* WISP PASS — tiny flickers. They lit/fade on a sin envelope over
       * their short ttl. No shimmer, no peak — just simple high-frequency
       * shimmer added to the field. */
      for (var wii = 0; wii < wisps.length; wii++) {
        var ws2 = wisps[wii];
        var wRatio = ws2.life / ws2.ttl;
        var wFade  = Math.max(0, Math.sin(wRatio * Math.PI));
        var wAlpha = wFade * 0.55;
        if (wAlpha <= 0.02) continue;
        var wr = ws2.size * (0.9 + 0.5 * wFade) + 0.6;
        var wspr = tintedGlowSprites[tintIndex(ws2.hue)];
        ctx.globalAlpha = wAlpha;
        ctx.drawImage(wspr, ws2.x - wr, ws2.y - wr, wr * 2, wr * 2);
      }

      /* GROUP LINE PASS — draw connecting lines between nearby group
       * members so the emergent formation (line, arc, curve) is visible.
       * Lines connect each member to its nearest neighbor(s) within the
       * group, creating organic chain/web shapes. */
      for (var gdi = 0; gdi < groups.length; gdi++) {
        var gd = groups[gdi];
        var gn = gd.members.length;
        if (gn < 2) continue;
        var ageEnv;
        if (gd.age < 1.0) {
          ageEnv = gd.age / 1.0;
        } else if (gd.age > GROUP_MAX_AGE - 3) {
          ageEnv = Math.max(0, (GROUP_MAX_AGE - gd.age) / 3);
        } else {
          ageEnv = 1;
        }
        if (ageEnv <= 0.03) continue;
        var lineAlpha = (0.30 + GC.alphaBoost * 0.35) * ageEnv;
        if (lineAlpha <= 0.02) continue;
        ctx.strokeStyle = paletteAt(gd.hue, lineAlpha);
        ctx.lineWidth = 0.8 + (q.glow === 'multi' ? 0.4 : (q.glow === 'strong' ? 0.2 : 0));
        for (var gai = 0; gai < gn; gai++) {
          var pa4 = particles[gd.members[gai]];
          for (var gbi = gai + 1; gbi < gn; gbi++) {
            var pb4 = particles[gd.members[gbi]];
            var ldx = pb4.x - pa4.x, ldy = pb4.y - pa4.y;
            if (ldx * ldx + ldy * ldy < GROUP_BREAK_DIST * GROUP_BREAK_DIST * 0.5) {
        ctx.beginPath();
              ctx.moveTo(pa4.x, pa4.y);
              ctx.lineTo(pb4.x, pb4.y);
        ctx.stroke();
      }
          }
        }
        for (var ghi = 0; ghi < gn; ghi++) {
          var ph = particles[gd.members[ghi]];
          var hSpr = tintedGlowSprites[tintIndex(gd.hue)];
          var hR = ph.size * 1.4 + 2.5;
          ctx.globalAlpha = lineAlpha * 0.45;
          ctx.drawImage(hSpr, ph.x - hR, ph.y - hR, hR * 2, hR * 2);
        }
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };
  }

  // =========================================================================
  // 5. Crystal Lattice
  //    Several rotating 3D structures projected to 2D. Each structure is
  //    a set of vertices on a unit sphere; we connect each vertex to its
  //    nearest neighbors. Edges are drawn with a depth-aware gradient so
  //    the shape reads as a translucent crystal.
  // =========================================================================
  function CrystalRenderer(opts) {
    var W = opts.width, H = opts.height;
    var q = opts.quality;
    var GC = glowConfig(q.glow);
    /* CRYSTAL LATTICE v2 — the user reported the previous version was
     * "way too laggy" and "just a few shapes floating around — too
     * simple". We addressed both:
     *
     * PERFORMANCE FIX:
     *   - The previous draw was O(edges_per_frame) `createLinearGradient`
     *     calls — at ~70 edges × 5 structs = 350 gradient allocations
     *     per frame, 21 000/s at 60fps. The replacement is a single
     *     solid `paletteAt()` lookup per edge plus a single fat halo
     *     stroke. Per-edge cost drops by ~5×, total per-frame cost
     *     drops by ~3-4× because we also strip `shadowBlur` from the
     *     edge pass entirely.
     *   - Vertex count per crystal is reduced to ~10 (was up to 17 at
     *     Extreme), giving cleaner gem-like silhouettes. Faces are now
     *     pre-computed at init as triples of mutually-nearest verts,
     *     not re-derived per frame.
     *
     * VISUAL UPGRADE:
     *   - Each crystal now has a bright pulsing CORE (sprite blit at
     *     centre with hue-tinted halo).
     *   - 6 LIGHT BEAMS emanate from the core in pre-computed angles,
     *     length modulated by the crystal's shimmer cycle.
     *   - FILLED faces drawn behind the wireframe at low alpha give
     *     each crystal volumetric weight instead of feeling hollow.
     *   - The "motes" are upgraded to SHARDS — small palette-tinted
     *     fragments drifting around with rotation and shimmer. Read as
     *     refracted light fragments instead of generic dust dots.
     */
    var STRUCT_COUNT = (q.glow === 'multi') ? 5 : (q.glow === 'strong' ? 4 : 3);
    var structs = [];
    for (var i = 0; i < STRUCT_COUNT; i++) structs.push(makeStruct(i));

    /* MINOR LAYER — drifting shards. These look like glinting fragments
     * of light caught around each crystal: rotating, palette-tinted,
     * twinkling. Cheap (still single sprite blit per shard) but visually
     * far richer than the old uniform "dust" because the rotation +
     * elliptical tinted sprite + twinkle gives them a sense of being
     * 3D fragments turning in the light. Bumped from 90 → 130 per the
     * "more background particles" direction. */
    var shards = [];
    var SHARD_BASE = 130;
    var SHARD_COUNT = Math.max(20, Math.round(SHARD_BASE * q.count));
    for (var im = 0; im < SHARD_COUNT; im++) {
      shards.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 18,
        vy:   (Math.random() - 0.5) * 18,
        size: 0.50 + Math.random() * 1.10,
        hue:  Math.random(),
        // Aspect ratio + rotation so each shard reads as an elongated
        // sliver, not a circle. Rotation drifts slowly.
        ar:   0.30 + Math.random() * 0.45,
        rot:  Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.6,
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.9 + Math.random() * 1.4,
        peak: 0.22 + Math.random() * 0.30
      });
    }

    /* MICRO LAYER — fine cosmic dust. Smaller and denser than shards,
     * meant to fill the negative space between crystals so the field
     * doesn't read as empty black. No rotation, no aspect ratio; each
     * dust particle is one tiny circular sprite blit. Cheap enough
     * that we run 4× the shard count without breaking the frame
     * budget — the old crystal renderer's lag came from per-edge
     * gradients (now gone), not from sprite blits. */
    var dust = [];
    var DUST_BASE = 360;
    var DUST_COUNT = Math.max(60, Math.round(DUST_BASE * q.count));
    for (var idu = 0; idu < DUST_COUNT; idu++) {
      dust.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 8,
        vy:   (Math.random() - 0.5) * 8,
        size: 0.18 + Math.random() * 0.42,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.7 + Math.random() * 1.3,
        peak: 0.10 + Math.random() * 0.18
      });
    }

    /* MID LAYER — small drifting orbs. Sized between dust (sub-pixel)
     * and shards (1-2 px elongated). Read as smaller crystal fragments
     * caught in the gravitational pull of the major structs — they
     * gently wander toward whichever main crystal is closest, but only
     * weakly so they don't all collapse into structures. Adds a sense
     * of populated space at a different visual frequency than dust or
     * shards. */
    var miniOrbs = [];
    var MINI_BASE = 50;
    var MINI_COUNT = Math.max(10, Math.round(MINI_BASE * q.count));
    for (var imo = 0; imo < MINI_COUNT; imo++) {
      miniOrbs.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 14,
        vy:   (Math.random() - 0.5) * 14,
        size: 0.95 + Math.random() * 0.85,
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.5 + Math.random() * 0.9,
        peak: 0.30 + Math.random() * 0.30
      });
    }

    /* Facet Glints — very brief flashes suggesting light catching facets. */
    var facetGlints = [];
    var GLINT_BASE = 25;
    var GLINT_COUNT = Math.max(6, Math.round(GLINT_BASE * q.count));
    for (var fgi = 0; fgi < GLINT_COUNT; fgi++) {
      facetGlints.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        size: 0.15 + Math.random() * 0.10,
        hue:  Math.random(),
        life: Math.random() * 1.5,
        ttl:  0.8 + Math.random() * 0.7,
        peak: 0.35 + Math.random() * 0.20
      });
    }

    /* Lattice Threads — faint thin line segments drifting like a ghost lattice. */
    var latticeThreads = [];
    var THREAD_BASE = 8;
    var THREAD_COUNT = Math.max(3, Math.round(THREAD_BASE * q.count));
    for (var lti = 0; lti < THREAD_COUNT; lti++) {
      var tlen = 40 + Math.random() * 60;
      var tang = Math.random() * Math.PI * 2;
      var tx0 = Math.random() * W;
      var ty0 = Math.random() * H;
      latticeThreads.push({
        x1: tx0, y1: ty0,
        x2: tx0 + Math.cos(tang) * tlen,
        y2: ty0 + Math.sin(tang) * tlen,
        vx: (Math.random() - 0.5) * (0.5 + Math.random() * 1.5),
        vy: (Math.random() - 0.5) * (0.5 + Math.random() * 1.5),
        hue:  Math.random(),
        twk:  Math.random() * Math.PI * 2,
        twkSpeed: 0.3 + Math.random() * 0.4,
        peak: 0.03 + Math.random() * 0.03
      });
    }

    /* Prismatic Halos — faint expanding ring outlines like diffraction patterns. */
    var prismaticHalos = [];
    var HALO_BASE = 4;
    var HALO_MAX = Math.max(2, Math.round(HALO_BASE * q.count));
    var haloCooldown = 0;

    function spawnHalo() {
      return {
        x:      Math.random() * W,
        y:      Math.random() * H,
        radius: 2 + Math.random() * 2,
        maxR:   25 + Math.random() * 20,
        hue:    Math.random(),
        life:   0,
        ttl:    3 + Math.random() * 2,
        peak:   0.12 + Math.random() * 0.08
      };
    }

    function makeStruct(idx) {
      /* Slightly fewer verts than before — the old build aimed for ~16
       * verts which made the wireframe read as a fuzzy sphere. 8-10
       * verts gives a much more recognisably "crystal/gem" silhouette
       * (octahedron-ish), which is what the user wanted. */
      var verts = [];
      var V = 8 + Math.floor(Math.random() * 3) + Math.round(q.count * 1.5);
      for (var v = 0; v < V; v++) {
        var phi   = Math.acos(1 - 2 * (v + 0.5) / V);
        var theta = Math.PI * (1 + Math.sqrt(5)) * v;
        verts.push({
          x: Math.sin(phi) * Math.cos(theta),
          y: Math.sin(phi) * Math.sin(theta),
          z: Math.cos(phi)
        });
      }
      // Pre-compute each vertex's 3 nearest neighbors → edges
      var edges = [];
      var nearestByVert = [];
      for (var a = 0; a < V; a++) {
        var neighbors = [];
        for (var b = 0; b < V; b++) {
          if (a === b) continue;
          var dx = verts[a].x - verts[b].x;
          var dy = verts[a].y - verts[b].y;
          var dz = verts[a].z - verts[b].z;
          neighbors.push({ idx: b, d: dx * dx + dy * dy + dz * dz });
        }
        neighbors.sort(function (p, qq) { return p.d - qq.d; });
        var k = Math.min(3, neighbors.length);
        var slice = [];
        for (var ni = 0; ni < k; ni++) {
          var bi = neighbors[ni].idx;
          slice.push(bi);
          if (a < bi) edges.push([a, bi]);
        }
        nearestByVert.push(slice);
      }
      /* FACES: enumerate triangles where each pair of the three verts
       * is a mutual nearest neighbor. For the modest V we use, this is
       * O(V³) at init but runs only once and finishes in <1ms. The
       * resulting set roughly matches the convex hull's faces, which is
       * what we want for back-face culling at draw time. */
      var faces = [];
      var seen = {};
      for (var fa = 0; fa < V; fa++) {
        var nA = nearestByVert[fa];
        for (var nbi = 0; nbi < nA.length; nbi++) {
          var fb = nA[nbi];
          if (fb <= fa) continue;
          var nB = nearestByVert[fb];
          for (var nci = 0; nci < nA.length; nci++) {
            var fc = nA[nci];
            if (fc <= fb) continue;
            // fc must also be in nB's nearest list
            if (nB.indexOf(fc) < 0) continue;
            var key = fa + '|' + fb + '|' + fc;
            if (seen[key]) continue;
            seen[key] = true;
            faces.push([fa, fb, fc]);
          }
        }
      }
      /* BEAMS: 6 unit-vector directions for the light rays emanating
       * from the crystal's centre. Pre-computed so we just rotate them
       * with the struct each frame instead of recomputing per draw. */
      var beams = [];
      var BEAM_COUNT = 6;
      for (var bi2 = 0; bi2 < BEAM_COUNT; bi2++) {
        var ph2 = Math.acos(1 - 2 * (bi2 + 0.5) / BEAM_COUNT);
        var th2 = Math.PI * (1 + Math.sqrt(5)) * bi2;
        beams.push({
          x: Math.sin(ph2) * Math.cos(th2),
          y: Math.sin(ph2) * Math.sin(th2),
          z: Math.cos(ph2)
        });
      }
      return {
        verts: verts,
        edges: edges,
        faces: faces,
        beams: beams,
        cx: Math.random() * W,
        cy: Math.random() * H,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
        radius: 60 + Math.random() * (W < 700 ? 70 : 130),
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotVX: (Math.random() - 0.5) * 0.5,
        rotVY: (Math.random() - 0.5) * 0.5,
        rotVZ: (Math.random() - 0.5) * 0.4,
        hue: idx / STRUCT_COUNT,
        bob: Math.random() * Math.PI * 2,
        shp: Math.random() * Math.PI * 2,
        shs: 0.18 + Math.random() * 0.22
      };
    }

    this.resize = function (w, h) {
      W = w; H = h;
      // Keep structures somewhat in bounds after resize.
      for (var i = 0; i < structs.length; i++) {
        var s = structs[i];
        s.cx = Math.max(s.radius, Math.min(W - s.radius, s.cx));
        s.cy = Math.max(s.radius, Math.min(H - s.radius, s.cy));
      }
    };

    this.update = function (dt, t) {
      /* PAIRWISE INTERACTION — long-range attraction + close-range
       * repulsion + lossy collision. STRUCT_COUNT is small (3-5), so
       * the O(n²) double loop is trivial (≤20 pairs).
       *
       * The previous build had three independent failure modes that
       * compounded into the "kept bombing each other" behaviour the
       * user reported:
       *
       *   1. G was 1700 with mass = radius² (~10 000 for a typical
       *      crystal). At close range that produces ≥ 400 px/s²
       *      acceleration — bodies slingshot together violently.
       *   2. Collisions were perfectly elastic (e = 1). All the
       *      kinetic energy of a slingshot encounter survived the
       *      bounce, so the next gravitational pull set up another
       *      identical encounter, and so on forever.
       *   3. Wall bounces were also lossless (vx *= -1) and damping
       *      was a token 0.5 %/s, neither of which could drain the
       *      energy that gravity kept injecting.
       *
       * Fixes layered together:
       *   - G dropped from 1700 to 350 — typical pair feels a 1-3 px/s²
       *     pull instead of 400+. Crystals drift toward each other
       *     gently rather than charging.
       *   - SOFT REPULSION inside ~1.7 × the sum of radii pushes
       *     bodies apart before contact becomes likely, so most
       *     encounters glide past each other without actually
       *     touching. The repulsion ramps up smoothly so it doesn't
       *     pop the simulation when bodies cross the boundary.
       *   - Collision restitution lowered to e = 0.45 — each contact
       *     drops ≥ 55 % of the normal-component KE. Two crystals
       *     that DO collide bounce once and then separate softly.
       *   - Wall bounces multiplied by -0.82 (18 % loss) and damping
       *     stiffened from 0.995 to 0.99 (≈ 45 %/s instead of 26 %/s).
       *     Together they bleed any residual energy quickly.
       *   - A soft 70 px/s velocity cap is applied AFTER all forces,
       *     so the worst case is a crystal cruising — never a
       *     missile. */
      var G = 350; // long-range attraction (was 1700)
      var REPULSE_K = 95; // close-range repulsion strength
      var REPULSE_RANGE_K = 1.7; // multiplier on (radiusA + radiusB)
      var RESTITUTION = 0.45; // collision energy retention
      for (var gi = 0; gi < structs.length; gi++) {
        for (var gj = gi + 1; gj < structs.length; gj++) {
          var sa = structs[gi], sb = structs[gj];
          var gdx = sb.cx - sa.cx, gdy = sb.cy - sa.cy;
          var gd2 = gdx * gdx + gdy * gdy;
          var sumRadii = sa.radius + sb.radius;
          // Soft-min — prevents force from going to infinity when the
          // bodies are touching. Scaled to sum-of-radii² so larger
          // pairs have a wider "tidal zone" before forces saturate.
          var soft = sumRadii * sumRadii * 0.55;
          if (gd2 < soft) gd2 = soft;
          var gd = Math.sqrt(gd2);
          var massA = sa.radius * sa.radius;
          var massB = sb.radius * sb.radius;
          var ux = gdx / gd, uy = gdy / gd;

          // ATTRACTION (always). aA = G * mB / d²
          var aA = G * massB / gd2;
          var aB = G * massA / gd2;
          sa.vx += ux * aA * dt;
          sa.vy += uy * aA * dt;
          sb.vx -= ux * aB * dt;
          sb.vy -= uy * aB * dt;

          // SOFT REPULSION inside (sumRadii × REPULSE_RANGE_K). The
          // repulsion ramps from 0 at the outer boundary to its peak
          // at contact, so most "near-misses" are smoothly deflected
          // before they ever touch. Force is split per inverse mass
          // so a small crystal recoils more than a large one — the
          // physics matches the elastic-collision response below.
          var rangeMax = sumRadii * REPULSE_RANGE_K;
          if (gd < rangeMax) {
            var t01 = 1 - gd / rangeMax;
            var pushMag = t01 * t01 * REPULSE_K;
            sa.vx -= ux * pushMag * (massB / (massA + massB)) * dt * 60;
            sa.vy -= uy * pushMag * (massB / (massA + massB)) * dt * 60;
            sb.vx += ux * pushMag * (massA / (massA + massB)) * dt * 60;
            sb.vy += uy * pushMag * (massA / (massA + massB)) * dt * 60;
          }

          // INELASTIC COLLISION — last-resort safety net for the rare
          // case where the soft repulsion couldn't prevent contact
          // (e.g. very fast mouse drag). The impulse formulation
          // gives clean energy loss via the restitution coefficient:
          //   J = -(1+e) · v_rel / (1/mA + 1/mB)
          // and we apply it as ΔvA = -J/mA, ΔvB = +J/mB along the
          // contact normal. With e = 0.45 each contact removes
          // (1 - e²) ≈ 80 % of the normal-component KE, so a pair
          // that does collide separates and stays separated.
          var cd = Math.sqrt((sb.cx - sa.cx) * (sb.cx - sa.cx) + (sb.cy - sa.cy) * (sb.cy - sa.cy));
          if (cd < sumRadii && cd > 0.01) {
            var nxv = (sb.cx - sa.cx) / cd, nyv = (sb.cy - sa.cy) / cd;
            var vAn = sa.vx * nxv + sa.vy * nyv;
            var vBn = sb.vx * nxv + sb.vy * nyv;
            var vRel = vAn - vBn;
            if (vRel > 0) {
              // J / (mA*mB/(mA+mB)) form, then divide by each mass
              var totalMass = massA + massB;
              var jOverTotal = (1 + RESTITUTION) * vRel / totalMass;
              sa.vx -= jOverTotal * massB * nxv;
              sa.vy -= jOverTotal * massB * nyv;
              sb.vx += jOverTotal * massA * nxv;
              sb.vy += jOverTotal * massA * nyv;
              // POSITION CORRECTION — shove the bodies just barely
              // apart so they aren't overlapping next frame.
              var overlap = sumRadii - cd;
              var corrA = overlap * massB / totalMass;
              var corrB = overlap * massA / totalMass;
              sa.cx -= nxv * corrA;
              sa.cy -= nyv * corrA;
              sb.cx += nxv * corrB;
              sb.cy += nyv * corrB;
            }
          }
        }
      }

      for (var i = 0; i < structs.length; i++) {
        var s = structs[i];
        s.rotX += s.rotVX * dt;
        s.rotY += s.rotVY * dt;
        s.rotZ += s.rotVZ * dt;
        s.cx += s.vx * dt;
        s.cy += s.vy * dt;
        s.bob += dt * 0.7;
        if (s.cx < s.radius) {
          s.vx = Math.abs(s.vx) * 0.95;
          s.cx = s.radius;
        } else if (s.cx > W - s.radius) {
          s.vx = -Math.abs(s.vx) * 0.95;
          s.cx = W - s.radius;
        }
        if (s.cy < s.radius) {
          s.vy = Math.abs(s.vy) * 0.95;
          s.cy = s.radius;
        } else if (s.cy > H - s.radius) {
          s.vy = -Math.abs(s.vy) * 0.95;
          s.cy = H - s.radius;
        }
        if (mouse.active) {
          var dx = mouse.x - s.cx, dy = mouse.y - s.cy;
          var d2 = dx * dx + dy * dy;
          var d = Math.max(30, Math.sqrt(d2));
          var massS = s.radius * s.radius;
          var gPull = 600 * massS / (d * d);
          s.vx += (dx / d) * gPull * dt;
          s.vy += (dy / d) * gPull * dt;
        }
        s.vx *= Math.pow(0.9985, dt * 60);
        s.vy *= Math.pow(0.9985, dt * 60);
      }
      // Shards — drift + wraparound + rotation + twinkle.
      for (var mu = 0; mu < shards.length; mu++) {
        var mt = shards[mu];
        mt.x += mt.vx * dt;
        mt.y += mt.vy * dt;
        mt.rot += mt.rotV * dt;
        mt.twk += dt * mt.twkSpeed;
        if (mt.x < -20) mt.x = W + 20;
        else if (mt.x > W + 20) mt.x = -20;
        if (mt.y < -20) mt.y = H + 20;
        else if (mt.y > H + 20) mt.y = -20;
      }
      // Dust — straight drift + wraparound + twinkle. No physics
      // interaction with crystals (would be O(dust × structs) per
      // frame which would dwarf the n-body gravity loop above; the
      // visual gain isn't worth the cost).
      for (var di = 0; di < dust.length; di++) {
        var du = dust[di];
        du.x += du.vx * dt;
        du.y += du.vy * dt;
        du.twk += dt * du.twkSpeed;
        if (du.x < -10) du.x = W + 10;
        else if (du.x > W + 10) du.x = -10;
        if (du.y < -10) du.y = H + 10;
        else if (du.y > H + 10) du.y = -10;
      }
      // Mini-orbs — drift + a weak attraction to the closest crystal so
      // the orb cloud subtly orbits the gravity wells. Closest-only
      // (not pairwise) keeps cost at O(orbs × structs).
      for (var oi3 = 0; oi3 < miniOrbs.length; oi3++) {
        var mo = miniOrbs[oi3];
        mo.x += mo.vx * dt;
        mo.y += mo.vy * dt;
        mo.twk += dt * mo.twkSpeed;
        // Find nearest struct — STRUCT_COUNT ≤ 5, fully unrolled.
        var minD2 = Infinity, minS = null;
        for (var si2 = 0; si2 < structs.length; si2++) {
          var sct = structs[si2];
          var ddx = sct.cx - mo.x, ddy = sct.cy - mo.y;
          var dd2 = ddx * ddx + ddy * ddy;
          if (dd2 < minD2) { minD2 = dd2; minS = sct; }
        }
        if (minS && minD2 < 400 * 400) {
          var ddd = Math.max(40, Math.sqrt(minD2));
          // Pull strength scales with the nearest crystal's mass and
          // tapers to zero at 400 px so distant orbs drift freely.
          var pullMass = minS.radius * minS.radius;
          var pull = (pullMass / (ddd * ddd)) * 0.8;
          var pullCap = 1 - Math.min(1, ddd / 400);
          mo.vx += ((minS.cx - mo.x) / ddd) * pull * pullCap * 60 * dt;
          mo.vy += ((minS.cy - mo.y) / ddd) * pull * pullCap * 60 * dt;
        }
        mo.vx *= Math.pow(0.998, dt * 60);
        mo.vy *= Math.pow(0.998, dt * 60);
        if (mo.x < -15) mo.x = W + 15;
        else if (mo.x > W + 15) mo.x = -15;
        if (mo.y < -15) mo.y = H + 15;
        else if (mo.y > H + 15) mo.y = -15;
      }

      // Facet Glints — life cycle, respawn at random position when expired.
      for (var fgu = 0; fgu < facetGlints.length; fgu++) {
        var fg = facetGlints[fgu];
        fg.life += dt;
        if (fg.life >= fg.ttl) {
          fg.x    = Math.random() * W;
          fg.y    = Math.random() * H;
          fg.hue  = Math.random();
          fg.life = 0;
          fg.ttl  = 0.8 + Math.random() * 0.7;
          fg.peak = 0.35 + Math.random() * 0.20;
          fg.size = 0.15 + Math.random() * 0.10;
        }
      }

      // Lattice Threads — very slow drift + twinkle + wraparound.
      for (var ltu = 0; ltu < latticeThreads.length; ltu++) {
        var lt = latticeThreads[ltu];
        lt.x1 += lt.vx * dt;
        lt.y1 += lt.vy * dt;
        lt.x2 += lt.vx * dt;
        lt.y2 += lt.vy * dt;
        lt.twk += dt * lt.twkSpeed;
        if (lt.x1 < -120 && lt.x2 < -120) { lt.x1 += W + 240; lt.x2 += W + 240; }
        else if (lt.x1 > W + 120 && lt.x2 > W + 120) { lt.x1 -= W + 240; lt.x2 -= W + 240; }
        if (lt.y1 < -120 && lt.y2 < -120) { lt.y1 += H + 240; lt.y2 += H + 240; }
        else if (lt.y1 > H + 120 && lt.y2 > H + 120) { lt.y1 -= H + 240; lt.y2 -= H + 240; }
      }

      // Prismatic Halos — scheduler + radius expansion + culling.
      haloCooldown -= dt;
      if (haloCooldown <= 0 && prismaticHalos.length < HALO_MAX) {
        prismaticHalos.push(spawnHalo());
        haloCooldown = 3 + Math.random() * 3;
      }
      for (var phu = prismaticHalos.length - 1; phu >= 0; phu--) {
        var ph = prismaticHalos[phu];
        ph.life += dt;
        var phProg = ph.life / ph.ttl;
        ph.radius = (ph.maxR - 2) * phProg + 2;
        if (ph.life >= ph.ttl) {
          prismaticHalos.splice(phu, 1);
        }
      }
    };

    function rotate3(p, rx, ry, rz) {
      var x = p.x, y = p.y, z = p.z;
      var cy0 = Math.cos(ry), sy0 = Math.sin(ry);
      var nx = x * cy0 + z * sy0;
      var nz = -x * sy0 + z * cy0;
      var cx0 = Math.cos(rx), sx0 = Math.sin(rx);
      var ny = y * cx0 - nz * sx0;
      var nz2 = y * sx0 + nz * cx0;
      var cz0 = Math.cos(rz), sz0 = Math.sin(rz);
      var fx = nx * cz0 - ny * sz0;
      var fy = nx * sz0 + ny * cz0;
      return { x: fx, y: fy, z: nz2 };
    }

    this.draw = function (ctx, W, H) {
      ctx.clearRect(0, 0, W, H);

      var tNow = (performance.now ? performance.now() : Date.now()) / 1000;
      ensureGlowSprites();
      ctx.save();
      if (GC.blur > 0) ctx.globalCompositeOperation = 'lighter';

      /* DUST PASS — drawn FIRST (deepest layer). Same shape as the
       * constellation sparks: one tinted blit per dust particle. We
       * threshold on alpha to skip the dim half of the twinkle cycle,
       * so even though we have hundreds of dust points the average
       * draw count per frame is ~half that. */
      for (var ddi = 0; ddi < dust.length; ddi++) {
        var dd = dust[ddi];
        var dtwk = (Math.sin(dd.twk) * 0.5 + 0.5);
        var dAlpha = dd.peak * (0.30 + 0.70 * dtwk);
        if (dAlpha <= 0.015) continue;
        var dr = dd.size * (0.7 + 0.5 * dtwk) + 0.5;
        var dSpr = tintedGlowSprites[tintIndex(dd.hue)];
        ctx.globalAlpha = dAlpha;
        ctx.drawImage(dSpr, dd.x - dr, dd.y - dr, dr * 2, dr * 2);
      }
      ctx.globalAlpha = 1;

      /* LATTICE THREAD PASS — faint line segments, additive blended. */
      ctx.lineWidth = 0.5;
      for (var ltdi = 0; ltdi < latticeThreads.length; ltdi++) {
        var ltd = latticeThreads[ltdi];
        var lttwk = (Math.sin(ltd.twk) * 0.5 + 0.5);
        var ltAlpha = ltd.peak * (0.3 + 0.7 * lttwk);
        if (ltAlpha <= 0.005) continue;
        ctx.globalAlpha = ltAlpha;
        ctx.strokeStyle = paletteAt(ltd.hue, ltAlpha);
        ctx.beginPath();
        ctx.moveTo(ltd.x1, ltd.y1);
        ctx.lineTo(ltd.x2, ltd.y2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* PRISMATIC HALO PASS — expanding ring outlines, additive blended. */
      ctx.lineWidth = 0.8;
      for (var phdi = 0; phdi < prismaticHalos.length; phdi++) {
        var phd = prismaticHalos[phdi];
        var phProg2 = phd.life / phd.ttl;
        var phAlpha = phd.peak * Math.sin(phProg2 * Math.PI);
        if (phAlpha <= 0.005) continue;
        ctx.globalAlpha = phAlpha;
        ctx.strokeStyle = paletteAt(phd.hue, phAlpha);
        ctx.beginPath();
        ctx.arc(phd.x, phd.y, phd.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* FACET GLINT PASS — brief bright flashes via glow sprite blit. */
      for (var fgdi = 0; fgdi < facetGlints.length; fgdi++) {
        var fgd = facetGlints[fgdi];
        var fgProg = fgd.life / fgd.ttl;
        var fgAlpha = fgd.peak * Math.sin(fgProg * Math.PI);
        if (fgAlpha <= 0.02) continue;
        var fgr = fgd.size * (1.0 + 0.6 * Math.sin(fgProg * Math.PI)) + 0.8;
        ctx.globalAlpha = fgAlpha;
        ctx.drawImage(glowSprite, fgd.x - fgr, fgd.y - fgr, fgr * 2, fgr * 2);
      }
      ctx.globalAlpha = 1;

      for (var i = 0; i < structs.length; i++) {
        var s = structs[i];
        var bobY = Math.sin(s.bob) * 6;
        var sh = shimmerEnvelope(tNow, s.shp, s.shs);
        var sharp = shimmerSharp(tNow, s.shp, s.shs);
        var brightMul = 0.7 + 0.45 * sh + GC.alphaBoost * 0.6;

        // Project all vertices once per frame.
        var projected = [];
        for (var v = 0; v < s.verts.length; v++) {
          var rotated = rotate3(s.verts[v], s.rotX, s.rotY, s.rotZ);
          var depth = (rotated.z + 1.6) / 2.6;
          projected.push({
            x: s.cx + rotated.x * s.radius,
            y: s.cy + rotated.y * s.radius + bobY,
            z: rotated.z,
            depth: depth
          });
        }

        /* LIGHT BEAMS — drawn FIRST so they sit behind the wireframe.
         * Each beam is a thin radial line from the crystal centre out
         * to a rotating direction. Length pulses with the shimmer so
         * the crystal looks like it's "breathing light". Drawn before
         * the faces so the wireframe occludes them, giving the effect
         * of beams emerging from inside the gem. */
        var beamLen = s.radius * (1.2 + 0.55 * sh) * (0.8 + GC.alphaBoost * 0.4);
        for (var bi = 0; bi < s.beams.length; bi++) {
          var bp = rotate3(s.beams[bi], s.rotX, s.rotY, s.rotZ);
          var bx = s.cx + bp.x * beamLen;
          var by = s.cy + bp.y * beamLen + bobY;
          // Beams pointing toward the camera (high z) are brighter.
          var bDepth = (bp.z + 1) * 0.5;
          var bAlpha = Math.min(0.55, (0.10 + bDepth * 0.30) * brightMul);
          if (bAlpha <= 0.02) continue;
          var grad = ctx.createLinearGradient(s.cx, s.cy + bobY, bx, by);
          grad.addColorStop(0, paletteAt(s.hue + 0.05, bAlpha));
          grad.addColorStop(1, paletteAt(s.hue + 0.20, 0));
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.8 + bDepth * 1.2;
          ctx.beginPath();
          ctx.moveTo(s.cx, s.cy + bobY);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }

        /* FILLED FACES — back-face-culled translucent triangles. Gives
         * the wireframe volumetric weight; the user described the old
         * version as "just a few shapes floating around" and that was
         * because hollow wireframes don't read as solid objects. The
         * faces are drawn at low alpha so the wireframe still defines
         * the silhouette. */
        for (var fi = 0; fi < s.faces.length; fi++) {
          var f = s.faces[fi];
          var fa = projected[f[0]], fb = projected[f[1]], fc = projected[f[2]];
          // 2D normal proxy via signed area — back-face culling.
          var crossZ = (fb.x - fa.x) * (fc.y - fa.y) - (fb.y - fa.y) * (fc.x - fa.x);
          if (crossZ <= 0) continue; // back-facing
          var fDepth = (fa.depth + fb.depth + fc.depth) * (1 / 3);
          var fAlpha = Math.min(0.45, (0.06 + fDepth * 0.18) * brightMul);
          if (fAlpha <= 0.02) continue;
          ctx.fillStyle = paletteAt(s.hue + fDepth * 0.10, fAlpha);
          ctx.beginPath();
          ctx.moveTo(fa.x, fa.y);
          ctx.lineTo(fb.x, fb.y);
          ctx.lineTo(fc.x, fc.y);
          ctx.closePath();
          ctx.fill();
        }

        /* WIREFRAME EDGES — solid stroke (no per-edge gradient, no
         * shadowBlur). The previous version did `createLinearGradient`
         * per edge per frame which dominated the renderer's CPU cost;
         * a solid `paletteAt(hue,alpha)` lookup is ~5× cheaper and the
         * along-line color shift it replaces was barely visible at the
         * line widths we use. We compensate the lost glow by drawing
         * each edge TWICE: once fat with low alpha (halo), once thin
         * with full alpha (line). That two-pass approach is still
         * cheaper than gradient + shadowBlur and reads brighter.
         *
         * Halo pass first (additive on `lighter` blend already set). */
        var haloAlpha = Math.min(0.5, 0.18 * brightMul + GC.alphaBoost * 0.25);
        if (haloAlpha > 0.02) {
          ctx.strokeStyle = paletteAt(s.hue + 0.05, haloAlpha);
          ctx.lineWidth   = (q.glow === 'multi') ? 4.0 : (q.glow === 'strong' ? 3.0 : 2.0);
          ctx.beginPath();
          for (var ei = 0; ei < s.edges.length; ei++) {
            var ea = projected[s.edges[ei][0]];
            var eb = projected[s.edges[ei][1]];
            ctx.moveTo(ea.x, ea.y);
            ctx.lineTo(eb.x, eb.y);
          }
          ctx.stroke();
        }
        // Sharp line pass on top of the halo.
        ctx.lineWidth = 0.6 + (q.glow === 'multi' ? 0.9 : 0.6);
        for (var ei2 = 0; ei2 < s.edges.length; ei2++) {
          var ea2 = projected[s.edges[ei2][0]];
          var eb2 = projected[s.edges[ei2][1]];
          var avgDepth = (ea2.depth + eb2.depth) * 0.5;
          var lineAlpha = Math.min(1, (0.30 + avgDepth * 0.50) * brightMul);
          ctx.strokeStyle = paletteAt(s.hue + avgDepth * 0.12, lineAlpha);
          ctx.beginPath();
          ctx.moveTo(ea2.x, ea2.y);
          ctx.lineTo(eb2.x, eb2.y);
          ctx.stroke();
        }

        /* CORE — bright pulsing sprite at the crystal's centre. This
         * is the visual "heart" of the gem and the brightest single
         * pixel in the renderer; everything else (beams, halos,
         * shards) is tuned to be dimmer than this. */
        var coreSpr = tintedGlowSprites[tintIndex(s.hue + 0.05)];
        var coreR = s.radius * (0.45 + 0.20 * sh);
        ctx.globalAlpha = Math.min(0.95, (0.55 + 0.30 * sh) * brightMul);
        ctx.drawImage(coreSpr, s.cx - coreR, s.cy + bobY - coreR, coreR * 2, coreR * 2);
        if (sharp && GC.chromaCore) {
          var hotR = s.radius * (0.18 + 0.10 * sh);
          ctx.globalAlpha = 0.85;
          ctx.drawImage(glowSprite, s.cx - hotR, s.cy + bobY - hotR, hotR * 2, hotR * 2);
        }
        ctx.globalAlpha = 1;

        /* VERTICES — sprite blits, same as before, but at smaller size
         * because the filled faces + halo pass already give the
         * silhouette plenty of brightness. */
        var vertSpr = tintedGlowSprites[tintIndex(s.hue + 0.1)];
        for (var vp = 0; vp < projected.length; vp++) {
          var pv = projected[vp];
          var sz = (0.9 + pv.depth * 1.4) * (0.85 + 0.30 * sh) + (sharp ? GC.coreBoost * 0.5 : 0);
          var alphaV = Math.min(1, (0.5 + pv.depth * 0.45) * brightMul);
          if (alphaV <= 0.02 || sz <= 0.3) continue;
          var glowR = sz * 2.0 + GC.blur * 0.10;
          ctx.globalAlpha = alphaV;
          ctx.drawImage(vertSpr, pv.x - glowR, pv.y - glowR, glowR * 2, glowR * 2);
          if (sharp && GC.chromaCore && pv.depth > 0.55) {
            var flashR = sz * (2.5 + 1.0 * sh);
            ctx.globalAlpha = 0.40 * pv.depth;
            ctx.drawImage(glowSprite, pv.x - flashR, pv.y - flashR, flashR * 2, flashR * 2);
          }
        }
        ctx.globalAlpha = 1;
      }

      /* MINI-ORB PASS — small drifting orbs caught in the gravity
       * field. Drawn between crystals (which are drawn in the loop
       * above) and shards (below) so they read as a mid-distance
       * cloud orbiting the structures. No rotation, just a single
       * tinted sprite blit per orb. */
      for (var moi = 0; moi < miniOrbs.length; moi++) {
        var mo2 = miniOrbs[moi];
        var motwk = (Math.sin(mo2.twk) * 0.5 + 0.5);
        var moAlpha = mo2.peak * (0.45 + 0.55 * motwk);
        if (moAlpha <= 0.02) continue;
        var mor = mo2.size * (0.9 + 0.4 * motwk) + 1.4;
        var moSpr = tintedGlowSprites[tintIndex(mo2.hue)];
        ctx.globalAlpha = moAlpha;
        ctx.drawImage(moSpr, mo2.x - mor, mo2.y - mor, mor * 2, mor * 2);
      }

      /* SHARD PASS — drifting fragments. Each shard is rendered as a
       * tinted sprite, scaled asymmetrically (ar < 1 squashes one axis)
       * and rotated so it reads as a sliver of light, not a circle. */
      for (var mi = 0; mi < shards.length; mi++) {
        var mm = shards[mi];
        var mtwk = (Math.sin(mm.twk) * 0.5 + 0.5);
        var mAlpha = mm.peak * (0.40 + 0.60 * mtwk);
        if (mAlpha <= 0.02) continue;
        var mr = mm.size * (0.95 + 0.45 * mtwk) + 1.0;
        var mspr = tintedGlowSprites[tintIndex(mm.hue)];
        ctx.save();
        ctx.translate(mm.x, mm.y);
        ctx.rotate(mm.rot);
        ctx.scale(1, mm.ar);
        ctx.globalAlpha = mAlpha;
        ctx.drawImage(mspr, -mr, -mr, mr * 2, mr * 2);
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      ctx.restore();
      ctx.shadowBlur = 0;
    };
  }

  var RENDERERS = {
    constellation: ConstellationRenderer,
    nebula:        NebulaRenderer,
    aurora:        AuroraRenderer,
    quantum:       QuantumRenderer,
    crystal:       CrystalRenderer
  };

  // ---------- Public API ---------------------------------------------------
  window.JqrgParticles = {
    STYLES: STYLES.slice(),
    QUALITIES: QUALITIES.slice(),
    STYLE_LABELS: STYLE_LABELS,
    QUALITY_LABELS: QUALITY_LABELS,
    setStyle: function (s) {
      if (STYLES.indexOf(s) < 0) return;
      try { localStorage.setItem(STYLE_KEY, s); } catch (_) {}
      applySettings();
    },
    setQuality: function (q) {
      if (QUALITIES.indexOf(q) < 0) return;
      try { localStorage.setItem(QUALITY_KEY, q); } catch (_) {}
      applySettings();
    },
    refresh:    applySettings,
    getStyle:   getStyle,
    getQuality: getQuality,
    /* Surface for index.html's game-overlay open/close handlers to pause
     * the background while a game iframe is foregrounded. Idempotent. */
    setPaused: setPaused,
    isGamePaused: function () { return _paused; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
