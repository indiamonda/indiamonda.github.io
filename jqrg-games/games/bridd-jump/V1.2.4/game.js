/* ===========================
   BRIDD JUMP - game.js
   Complete game logic with 20+ EXTREME effects
   Will lag significantly at Ultra++ and Highest settings
   =========================== */

/* ---------- Sound System ---------- */
const sounds = {
  firstJump: new Audio('../sounds/first-jump.mp3'),
  secondJump: new Audio('../sounds/second-jump.mp3'),
  triggerDrop: new Audio('../sounds/trigger-drop.mp3'),
  land: new Audio('../sounds/land.mp3'),
  die: new Audio('../sounds/die.mp3'),
  collectGem: new Audio('../sounds/collect-gem.mp3'),
  startChooseVersion: new Audio('../sounds/start-chooseversion.mp3'),
  applySave: new Audio('../sounds/apply-save.mp3'),
  menuClick: new Audio('../sounds/menu-click.mp3'),
  background: new Audio('../sounds/background.mp3')
};

// Set background music to loop
sounds.background.loop = true;

// Base volumes (0-1 range, will be multiplied by volume settings)
const baseVolumes = {
  firstJump: 0.7,
  secondJump: 0.7,
  triggerDrop: 0.6,
  land: 0.6,
  die: 0.8,
  collectGem: 0.7,
  startChooseVersion: 0.6,
  applySave: 0.6,
  menuClick: 0.5,
  background: 0.5
};

// Function to update all sound volumes based on settings
function updateSoundVolumes() {
  const currentSettings = readSettings();
  const volumeSettings = currentSettings.volume || { master: 100, music: 50, soundEffects: 100 };
  
  // Master volume multiplier (0-1)
  const masterMul = volumeSettings.master / 100;
  
  // Music volume multiplier (0-1)
  const musicMul = volumeSettings.music / 100;
  
  // Sound effects volume multiplier (0-1)
  const soundEffectsMul = volumeSettings.soundEffects / 100;
  
  // Update background music (update even if already playing)
  if(sounds.background) {
    sounds.background.volume = baseVolumes.background * masterMul * musicMul;
  }
  
  // Update all sound effects (update even if already playing)
  if(sounds.firstJump) sounds.firstJump.volume = baseVolumes.firstJump * masterMul * soundEffectsMul;
  if(sounds.secondJump) sounds.secondJump.volume = baseVolumes.secondJump * masterMul * soundEffectsMul;
  if(sounds.triggerDrop) sounds.triggerDrop.volume = baseVolumes.triggerDrop * masterMul * soundEffectsMul;
  if(sounds.land) sounds.land.volume = baseVolumes.land * masterMul * soundEffectsMul;
  if(sounds.die) sounds.die.volume = baseVolumes.die * masterMul * soundEffectsMul;
  if(sounds.collectGem) sounds.collectGem.volume = baseVolumes.collectGem * masterMul * soundEffectsMul;
  if(sounds.startChooseVersion) sounds.startChooseVersion.volume = baseVolumes.startChooseVersion * masterMul * soundEffectsMul;
  if(sounds.applySave) sounds.applySave.volume = baseVolumes.applySave * masterMul * soundEffectsMul;
  if(sounds.menuClick) sounds.menuClick.volume = baseVolumes.menuClick * masterMul * soundEffectsMul;
}

// Initialize volumes - called after settings initialization (see line 3716)

// Check if sound is enabled (set by the button that opens V1.2.3)
const soundEnabled = localStorage.getItem('soundEnabled') === 'true';

// Function to enable audio context (called on user interaction)
function enableAudio() {
  if (!soundEnabled) return;
  
  // Unlock audio context by playing a silent sound
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = 0; // Silent
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.001);
  } catch(err) {
    console.log('Error enabling audio:', err);
  }
}

// Function to play sound with error handling
function playSound(soundName) {
  if (!soundEnabled) return; // Don't play sounds if not enabled
  
  // Update volumes before playing to ensure they're current
  updateSoundVolumes();
  
  try {
    const sound = sounds[soundName];
    if(sound) {
      sound.currentTime = 0; // Reset to start
      sound.play().catch(err => {
        // If autoplay is blocked, try to enable audio
        enableAudio();
        // Try playing again
        sound.play().catch(err2 => {
          console.log('Sound play prevented:', err2);
        });
      });
    }
  } catch(err) {
    console.log('Error playing sound:', err);
  }
}

// Function to stop sound
function stopSound(soundName) {
  try {
    const sound = sounds[soundName];
    if(sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  } catch(err) {
    console.log('Error stopping sound:', err);
  }
}

/* ---------- Utilities ---------- */
function showToast(msg, ms=1200){
  const d = document.getElementById('debugToast');
  d.innerText = msg;
  d.style.display = 'block';
  clearTimeout(d._timer);
  d._timer = setTimeout(()=> d.style.display = 'none', ms);
}

function lerpColor(c1,c2,t){ 
  return { 
    r: c1.r + (c2.r - c1.r)*t, 
    g: c1.g + (c2.g - c1.g)*t, 
    b: c1.b + (c2.b - c1.b)*t 
  }; 
}

/* ---------- Canvas & resizing ---------- */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

/* ---------- Constants & state ---------- */
const BLOCK_SIZE = 50;
const JUMP_SPEED = -15;
const GRAVITY = 0.7;
// DROP_SPEED is now calculated dynamically as (player.speed/2)*5
let TICKS_PER_SECOND = 60;
let TICK_INTERVAL = 1000 / TICKS_PER_SECOND;

// Function to update tick rate
function setTickRate(rate) {
  TICKS_PER_SECOND = 3 * rate;
  TICK_INTERVAL = 1000 / TICKS_PER_SECOND;
}
const DELETE_OFFSET = BLOCK_SIZE * 6;
const ANIMATION_INTENSITY_BOOST = 1.2;

/* Player object blueprint */
let player = {
  x: 100, y: 0, width: 50, height: 50, vy: 0, speed: 11,
  color: "#0ff", hitboxScale: 0.6, jumpsLeft: 2, onGround:false, visible:true,
  horizMultiplier:1, vertMultiplier:1, accountEmail: "player@example.com",
  isDropping: false, // Track if player is actively dropping
  wasDroppingInAir: false // Track if player was dropping while in the air (not on ground)
};

/* world arrays - EXPANDED WITH 20+ NEW EFFECTS */
let platforms = [], spikes = [], gems = [], particles = [], crashPieces = [], trail = [], lines = [];
let shockwaves = [], screenShake = 0, screenFlash = 0, screenDust = [], bloomParticles = [];
let reflections = [], motionBlurBuffer = [], lightRays = [], chromaticAberration = 0;
let parallaxLayers = [], velocityStreaks = [], impactWaves = [], platformPulses = [];
let windParticles = [], speedLines = [], lensFlares = [], screenTears = [];
let dynamicFog = [], heatDistortions = [], starbursts = [], afterImages = [];
let gravityWaves = [], energyRipples = [], pixelDisplacements = [];
let starRush = [], nebulaDust = [], warpTunnels = [], boostFlares = [], contrailJets = [];
let edgeLightnings = [], compressionRings = [];
let deathImplosions = [], deathGlitches = [], deathVapors = [];

/* gameplay */
let keys = {}, score = 0, bestScore = localStorage.getItem("bestScore") ? parseInt(localStorage.getItem("bestScore")) : 0;
let gameRunning = false;
let isPaused = false;
let pausedMusicState = null; // Tracks music state when paused
let cameraX = 0, cameraY = 0;

/* Tick system */
let tickAccumulator = 0;
let lastFpsUpdateTime = performance.now();

/* color cycling */
let baseColors = [
  {r:255,g:0,b:0},{r:255,g:153,b:0},{r:255,g:255,b:0},
  {r:0,g:255,b:0},{r:0,g:255,b:255},{r:0,g:0,b:255},{r:153,g:0,b:255}
];
let colorIndex = 0, nextColor = baseColors[1], platformColor = {...baseColors[0]}, colorLerp = 0, globalTime = 0;

/* misc */
let testMode = false, gemEveryBlock = false, account = "player", oldAccount = null;
let cheats = { float:false, invincible:false, infiniteJump:false, dropThrough:false };

/* ---------- Settings loading from localStorage ---------- */
const LS_KEY = "briddSettings";

const defaultSettings = {
  maxFPS: 0,
  qualityPreset: "Extreme+",
  showKeyboard: true, // Show keyboard visualization (only if device has keyboard)
  quality: {
    jumpEffect: 64,
    walkEffect: 64,
    dieEffect: 64,
    horizontalLines: 64,
    trail: 64,
    blockTexture: 100,
    glow: 100
  },
  advanced: {
    shockwaves: 100,
    screenShake: 100,
    bloomParticles: 100,
    particleTrails: 100,
    screenDistortion: 100,
    particleCount: 100,
    trailLength: 100,
    screenReflections: 100,
    motionBlur: 0, // Default 0%, not affected by presets
    lightRays: 100,
    parallaxLayers: 100,
    velocityStreaks: 100,
    impactWaves: 100,
    platformPulse: 100,
    colorBleed: 100,
    depthOfField: 100,
    windParticles: 100,
    speedLines: 100,
    timeDilation: 100,
    lensFlare: 100,
    screenTear: 100,
    dynamicFog: 100,
    heatDistortion: 100,
    starbursts: 100,
    afterImages: 100,
    gravityWaves: 100,
    energyRipples: 100,
    pixelDisplacement: 100,
    ambientOcclusion: 100,
    radialBlur: 100,
    starRush: 100,
    nebulaDust: 100,
    warpTunnel: 100,
    boostFlash: 100,
    contrailJets: 100,
    edgeLightning: 100,
    compressionRings: 100,
    deathImplode: 100,
    deathGlitch: 100,
    deathVaporize: 100
  }
};

const qualityPresets = {
  "Potato": {
    blockTexture:1, jumpEffect:0, walkEffect:0, dieEffect:0, horizontalLines:0, trail:0, glow:0, lines:false,
    shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0,
    particleCount:10, trailLength:10, screenReflections:0, motionBlur:0, lightRays:0,
    parallaxLayers:0, velocityStreaks:0, impactWaves:0, platformPulse:0, colorBleed:0,
    depthOfField:0, windParticles:0, speedLines:0, timeDilation:0, lensFlare:0,
    screenTear:0, dynamicFog:0, heatDistortion:0, starbursts:0, afterImages:0,
    gravityWaves:0, energyRipples:0, pixelDisplacement:0, ambientOcclusion:0, radialBlur:0,
    starRush:0, nebulaDust:0, warpTunnel:0, boostFlash:0, contrailJets:0, edgeLightning:0, compressionRings:0,
    deathImplode:0, deathGlitch:0, deathVaporize:0
  },
  "Low": {
    blockTexture:1, jumpEffect:5, walkEffect:0, dieEffect:0, horizontalLines:0, trail:0, glow:0, lines:false,
    shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0,
    particleCount:25, trailLength:25, screenReflections:0, motionBlur:0, lightRays:0,
    parallaxLayers:10, velocityStreaks:0, impactWaves:0, platformPulse:0, colorBleed:0,
    depthOfField:0, windParticles:10, speedLines:10, timeDilation:0, lensFlare:0,
    screenTear:0, dynamicFog:0, heatDistortion:0, starbursts:0, afterImages:0,
    gravityWaves:0, energyRipples:0, pixelDisplacement:0, ambientOcclusion:0, radialBlur:0,
    starRush:10, nebulaDust:5, warpTunnel:0, boostFlash:0, contrailJets:10, edgeLightning:0, compressionRings:0,
    deathImplode:5, deathGlitch:5, deathVaporize:5
  },
  "Medium": {
    blockTexture:1, jumpEffect:10, walkEffect:0, dieEffect:10, horizontalLines:0, trail:0, glow:0, lines:false,
    shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0,
    particleCount:50, trailLength:50, screenReflections:10, motionBlur:0, lightRays:0,
    parallaxLayers:25, velocityStreaks:10, impactWaves:10, platformPulse:10, colorBleed:0,
    depthOfField:10, windParticles:25, speedLines:25, timeDilation:0, lensFlare:0,
    screenTear:0, dynamicFog:0, heatDistortion:0, starbursts:0, afterImages:0,
    gravityWaves:0, energyRipples:0, pixelDisplacement:0, ambientOcclusion:0, radialBlur:0,
    starRush:25, nebulaDust:15, warpTunnel:10, boostFlash:10, contrailJets:25, edgeLightning:10, compressionRings:10,
    deathImplode:15, deathGlitch:15, deathVaporize:15
  },
  "Medium+": {
    blockTexture:1, jumpEffect:15, walkEffect:15, dieEffect:15, horizontalLines:0, trail:0, glow:0, lines:false,
    shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0,
    particleCount:75, trailLength:75, screenReflections:25, motionBlur:10, lightRays:10,
    parallaxLayers:50, velocityStreaks:25, impactWaves:25, platformPulse:25, colorBleed:10,
    depthOfField:25, windParticles:50, speedLines:50, timeDilation:10, lensFlare:10,
    screenTear:0, dynamicFog:10, heatDistortion:10, starbursts:10, afterImages:10,
    gravityWaves:0, energyRipples:0, pixelDisplacement:0, ambientOcclusion:10, radialBlur:10,
    starRush:50, nebulaDust:35, warpTunnel:25, boostFlash:25, contrailJets:50, edgeLightning:25, compressionRings:25,
    deathImplode:25, deathGlitch:25, deathVaporize:25
  },
  "High": {
    blockTexture:1, jumpEffect:15, walkEffect:15, dieEffect:15, horizontalLines:15, trail:0, glow:0, lines:true,
    shockwaves:10, screenShake:10, bloomParticles:0, particleTrails:0, screenDistortion:0,
    particleCount:100, trailLength:100, screenReflections:50, motionBlur:25, lightRays:25,
    parallaxLayers:75, velocityStreaks:50, impactWaves:50, platformPulse:50, colorBleed:25,
    depthOfField:50, windParticles:75, speedLines:75, timeDilation:25, lensFlare:25,
    screenTear:10, dynamicFog:25, heatDistortion:25, starbursts:25, afterImages:25,
    gravityWaves:10, energyRipples:10, pixelDisplacement:10, ambientOcclusion:25, radialBlur:25,
    starRush:75, nebulaDust:50, warpTunnel:50, boostFlash:50, contrailJets:75, edgeLightning:50, compressionRings:50,
    deathImplode:50, deathGlitch:50, deathVaporize:50
  },
  "High+": {
    blockTexture:1, jumpEffect:33, walkEffect:33, dieEffect:33, horizontalLines:33, trail:0, glow:0, lines:true,
    shockwaves:25, screenShake:25, bloomParticles:10, particleTrails:10, screenDistortion:0,
    particleCount:125, trailLength:125, screenReflections:75, motionBlur:50, lightRays:50,
    parallaxLayers:100, velocityStreaks:75, impactWaves:75, platformPulse:75, colorBleed:50,
    depthOfField:75, windParticles:100, speedLines:100, timeDilation:50, lensFlare:50,
    screenTear:25, dynamicFog:50, heatDistortion:50, starbursts:50, afterImages:50,
    gravityWaves:25, energyRipples:25, pixelDisplacement:25, ambientOcclusion:50, radialBlur:50,
    starRush:100, nebulaDust:75, warpTunnel:75, boostFlash:75, contrailJets:100, edgeLightning:75, compressionRings:75,
    deathImplode:75, deathGlitch:75, deathVaporize:75
  },
  "Extreme": {
    blockTexture:1, jumpEffect:60, walkEffect:60, dieEffect:60, horizontalLines:60, trail:0, glow:0, lines:true,
    shockwaves:50, screenShake:50, bloomParticles:25, particleTrails:25, screenDistortion:10,
    particleCount:150, trailLength:150, screenReflections:100, motionBlur:75, lightRays:75,
    parallaxLayers:125, velocityStreaks:100, impactWaves:100, platformPulse:100, colorBleed:75,
    depthOfField:100, windParticles:125, speedLines:125, timeDilation:75, lensFlare:75,
    screenTear:50, dynamicFog:75, heatDistortion:75, starbursts:75, afterImages:75,
    gravityWaves:50, energyRipples:50, pixelDisplacement:50, ambientOcclusion:75, radialBlur:75,
    starRush:125, nebulaDust:100, warpTunnel:100, boostFlash:100, contrailJets:125, edgeLightning:100, compressionRings:100,
    deathImplode:100, deathGlitch:100, deathVaporize:100
  },
  "Extreme+": {
    blockTexture:1, jumpEffect:64, walkEffect:64, dieEffect:64, horizontalLines:64, trail:1, glow:1, lines:true,
    shockwaves:75, screenShake:75, bloomParticles:50, particleTrails:50, screenDistortion:25,
    particleCount:175, trailLength:175, screenReflections:125, motionBlur:100, lightRays:100,
    parallaxLayers:150, velocityStreaks:125, impactWaves:125, platformPulse:125, colorBleed:100,
    depthOfField:125, windParticles:150, speedLines:150, timeDilation:100, lensFlare:100,
    screenTear:75, dynamicFog:100, heatDistortion:100, starbursts:100, afterImages:100,
    gravityWaves:75, energyRipples:75, pixelDisplacement:75, ambientOcclusion:100, radialBlur:100,
    starRush:150, nebulaDust:125, warpTunnel:125, boostFlash:125, contrailJets:150, edgeLightning:125, compressionRings:125,
    deathImplode:125, deathGlitch:125, deathVaporize:125
  },
  "Ultra": {
    blockTexture:1, jumpEffect:100, walkEffect:100, dieEffect:100, horizontalLines:100, trail:0, glow:1, lines:true,
    shockwaves:100, screenShake:100, bloomParticles:75, particleTrails:75, screenDistortion:50,
    particleCount:200, trailLength:200, screenReflections:150, motionBlur:125, lightRays:125,
    parallaxLayers:175, velocityStreaks:150, impactWaves:150, platformPulse:150, colorBleed:125,
    depthOfField:150, windParticles:175, speedLines:175, timeDilation:125, lensFlare:125,
    screenTear:100, dynamicFog:125, heatDistortion:125, starbursts:125, afterImages:125,
    gravityWaves:100, energyRipples:100, pixelDisplacement:100, ambientOcclusion:125, radialBlur:125,
    starRush:175, nebulaDust:150, warpTunnel:150, boostFlash:150, contrailJets:175, edgeLightning:150, compressionRings:150,
    deathImplode:150, deathGlitch:150, deathVaporize:150
  },
  "Ultra+": {
    blockTexture:1, jumpEffect:120, walkEffect:120, dieEffect:120, horizontalLines:120, trail:1, glow:1, lines:true,
    shockwaves:120, screenShake:120, bloomParticles:100, particleTrails:100, screenDistortion:75,
    particleCount:250, trailLength:250, screenReflections:175, motionBlur:150, lightRays:150,
    parallaxLayers:200, velocityStreaks:175, impactWaves:175, platformPulse:175, colorBleed:150,
    depthOfField:175, windParticles:200, speedLines:200, timeDilation:150, lensFlare:150,
    screenTear:125, dynamicFog:150, heatDistortion:150, starbursts:150, afterImages:150,
    gravityWaves:125, energyRipples:125, pixelDisplacement:125, ambientOcclusion:150, radialBlur:150,
    starRush:200, nebulaDust:175, warpTunnel:175, boostFlash:175, contrailJets:200, edgeLightning:175, compressionRings:175,
    deathImplode:175, deathGlitch:175, deathVaporize:175
  },
  "Ultra++": {
    blockTexture:1, jumpEffect:200, walkEffect:200, dieEffect:200, horizontalLines:200, trail:1, glow:1.5, lines:true,
    shockwaves:150, screenShake:150, bloomParticles:150, particleTrails:150, screenDistortion:100,
    particleCount:300, trailLength:300, screenReflections:200, motionBlur:175, lightRays:175,
    parallaxLayers:225, velocityStreaks:200, impactWaves:200, platformPulse:200, colorBleed:175,
    depthOfField:200, windParticles:225, speedLines:225, timeDilation:175, lensFlare:175,
    screenTear:150, dynamicFog:175, heatDistortion:175, starbursts:175, afterImages:175,
    gravityWaves:150, energyRipples:150, pixelDisplacement:150, ambientOcclusion:175, radialBlur:175,
    starRush:225, nebulaDust:200, warpTunnel:200, boostFlash:200, contrailJets:225, edgeLightning:200, compressionRings:200,
    deathImplode:200, deathGlitch:200, deathVaporize:200
  },
  "Highest": {
    blockTexture:1, jumpEffect:200, walkEffect:200, dieEffect:200, horizontalLines:200, trail:1, glow:2, lines:true,
    shockwaves:200, screenShake:200, bloomParticles:200, particleTrails:200, screenDistortion:200,
    particleCount:500, trailLength:500, screenReflections:250, motionBlur:200, lightRays:200,
    parallaxLayers:250, velocityStreaks:250, impactWaves:250, platformPulse:250, colorBleed:200,
    depthOfField:250, windParticles:250, speedLines:250, timeDilation:200, lensFlare:200,
    screenTear:200, dynamicFog:200, heatDistortion:200, starbursts:200, afterImages:200,
    gravityWaves:200, energyRipples:200, pixelDisplacement:200, ambientOcclusion:200, radialBlur:200,
    starRush:250, nebulaDust:225, warpTunnel:225, boostFlash:225, contrailJets:250, edgeLightning:225, compressionRings:225,
    deathImplode:225, deathGlitch:225, deathVaporize:225
  }
};

function readSettings(){
  try {
    let raw = localStorage.getItem(LS_KEY);
    if(!raw) return JSON.parse(JSON.stringify(defaultSettings));
    const parsed = JSON.parse(raw);
    const merged = JSON.parse(JSON.stringify(defaultSettings));
    if(parsed.maxFPS !== undefined) merged.maxFPS = parsed.maxFPS;
    if(parsed.qualityPreset) merged.qualityPreset = parsed.qualityPreset;
    if(parsed.showKeyboard !== undefined) merged.showKeyboard = parsed.showKeyboard;
    if(parsed.quality) merged.quality = {...merged.quality, ...parsed.quality};
    if(parsed.advanced) merged.advanced = {...merged.advanced, ...parsed.advanced};
    if(parsed.volume) merged.volume = parsed.volume;
    return merged;
  } catch(e) {
    console.warn("Failed to read settings:", e);
    return JSON.parse(JSON.stringify(defaultSettings));
  }
}
function writeSettings(s){
  try{ localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch(e){ console.warn("Failed to write settings:", e); }
}

/* runtime settings object derived from storage */
let settings = readSettings();

let runtime = {
  minFrameTime: 0,
  effects: {
    jumpEffectMul: 1,
    walkEffectMul: 1,
    dieEffectMul: 1,
    horizontalLinesMul: 1,
    trailMul: 1,
    blockTextureMul: 1
  },
  advanced: {
    shockwavesMul: 1,
    screenShakeMul: 1,
    bloomParticlesMul: 1,
    particleTrailsMul: 1,
    screenDistortionMul: 1,
    particleCountMul: 1,
    trailLengthMul: 1,
    screenReflectionsMul: 1,
    motionBlurMul: 1,
    lightRaysMul: 1,
    parallaxLayersMul: 1,
    velocityStreaksMul: 1,
    impactWavesMul: 1,
    platformPulseMul: 1,
    colorBleedMul: 1,
    depthOfFieldMul: 1,
    windParticlesMul: 1,
    speedLinesMul: 1,
    timeDilationMul: 1,
    lensFlareMul: 1,
    screenTearMul: 1,
    dynamicFogMul: 1,
    heatDistortionMul: 1,
    starburstsMul: 1,
    afterImagesMul: 1,
    gravityWavesMul: 1,
    energyRipplesMul: 1,
    pixelDisplacementMul: 1,
    ambientOcclusionMul: 1,
    radialBlurMul: 1,
    starRushMul: 1,
    nebulaDustMul: 1,
    warpTunnelMul: 1,
    boostFlashMul: 1,
    contrailJetsMul: 1,
    edgeLightningMul: 1,
    compressionRingsMul: 1,
    deathImplodeMul: 1,
    deathGlitchMul: 1,
    deathVaporizeMul: 1
  },
  glowEnabled: true,
  linesEnabled: true,
  trailEnabled: true,
  shockwavesEnabled: true,
  screenShakeEnabled: true,
  bloomEnabled: true,
  particleTrailsEnabled: true,
  distortionEnabled: true,
  reflectionsEnabled: true,
  motionBlurEnabled: true,
  lightRaysEnabled: true,
  parallaxEnabled: true,
  velocityStreaksEnabled: true,
  impactWavesEnabled: true,
  platformPulseEnabled: true,
  colorBleedEnabled: true,
  depthOfFieldEnabled: true,
  windParticlesEnabled: true,
  speedLinesEnabled: true,
  timeDilationEnabled: true,
  lensFlareEnabled: true,
  screenTearEnabled: true,
  dynamicFogEnabled: true,
  heatDistortionEnabled: true,
  starburstsEnabled: true,
  afterImagesEnabled: true,
  gravityWavesEnabled: true,
  energyRipplesEnabled: true,
  pixelDisplacementEnabled: true,
  ambientOcclusionEnabled: true,
  radialBlurEnabled: true,
  starRushEnabled: true,
  nebulaDustEnabled: true,
  warpTunnelEnabled: true,
  boostFlashEnabled: true,
  contrailJetsEnabled: true,
  edgeLightningEnabled: true,
  compressionRingsEnabled: true,
  deathImplodeEnabled: true,
  deathGlitchEnabled: true,
  deathVaporizeEnabled: true
};

function applySettings(s){
  settings = s || settings;
  // FPS
  if(!settings.maxFPS || settings.maxFPS === 0 || settings.maxFPS === "Unlimited"){
    runtime.minFrameTime = 0;
    settings.maxFPS = 0;
  } else {
    runtime.minFrameTime = 1000 / Number(settings.maxFPS);
  }
  
  // Update keyboard visualization visibility
  updateKeyboardVisualization();
  
  // Update sound volumes
  updateSoundVolumes();

  const preset = qualityPresets[settings.qualityPreset] || {};
  const pct = (v) => (Number(v) || 0) / 100;

  // Basic effects
  // Block texture: 0 = OFF, >0 = ON (convert to 0 or 1)
  if (settings.quality.blockTexture !== undefined && settings.quality.blockTexture !== null) {
    runtime.effects.blockTextureMul = settings.quality.blockTexture > 0 ? 1 : 0;
  } else {
    runtime.effects.blockTextureMul = (preset.blockTexture >= 1 ? 1 : 0);
  }
  runtime.effects.jumpEffectMul = pct(settings.quality.jumpEffect) || (preset.jumpEffect ? preset.jumpEffect/100 : 0);
  runtime.effects.walkEffectMul = pct(settings.quality.walkEffect) || (preset.walkEffect ? preset.walkEffect/100 : 0);
  runtime.effects.dieEffectMul = pct(settings.quality.dieEffect) || (preset.dieEffect ? preset.dieEffect/100 : 0);
  runtime.effects.horizontalLinesMul = pct(settings.quality.horizontalLines) || (preset.horizontalLines ? preset.horizontalLines/100 : 0);
  runtime.effects.trailMul = pct(settings.quality.trail) || (preset.trail ? preset.trail/100 : 0);
  
  // Advanced effects
  runtime.advanced.shockwavesMul = pct(settings.advanced.shockwaves) || (preset.shockwaves ? preset.shockwaves/100 : 0);
  runtime.advanced.screenShakeMul = pct(settings.advanced.screenShake) || (preset.screenShake ? preset.screenShake/100 : 0);
  runtime.advanced.bloomParticlesMul = pct(settings.advanced.bloomParticles) || (preset.bloomParticles ? preset.bloomParticles/100 : 0);
  runtime.advanced.particleTrailsMul = pct(settings.advanced.particleTrails) || (preset.particleTrails ? preset.particleTrails/100 : 0);
  runtime.advanced.screenDistortionMul = pct(settings.advanced.screenDistortion) || (preset.screenDistortion ? preset.screenDistortion/100 : 0);
  runtime.advanced.particleCountMul = pct(settings.advanced.particleCount) || (preset.particleCount ? preset.particleCount/100 : 0);
  runtime.advanced.trailLengthMul = pct(settings.advanced.trailLength) || (preset.trailLength ? preset.trailLength/100 : 0);
  runtime.advanced.screenReflectionsMul = pct(settings.advanced.screenReflections) || (preset.screenReflections ? preset.screenReflections/100 : 0);
  // Motion blur: default 0%, not affected by presets
  runtime.advanced.motionBlurMul = pct(settings.advanced.motionBlur !== undefined ? settings.advanced.motionBlur : 0);
  runtime.advanced.lightRaysMul = pct(settings.advanced.lightRays) || (preset.lightRays ? preset.lightRays/100 : 0);
  runtime.advanced.parallaxLayersMul = pct(settings.advanced.parallaxLayers) || (preset.parallaxLayers ? preset.parallaxLayers/100 : 0);
  runtime.advanced.velocityStreaksMul = pct(settings.advanced.velocityStreaks) || (preset.velocityStreaks ? preset.velocityStreaks/100 : 0);
  runtime.advanced.impactWavesMul = pct(settings.advanced.impactWaves) || (preset.impactWaves ? preset.impactWaves/100 : 0);
  runtime.advanced.platformPulseMul = pct(settings.advanced.platformPulse) || (preset.platformPulse ? preset.platformPulse/100 : 0);
  runtime.advanced.colorBleedMul = pct(settings.advanced.colorBleed) || (preset.colorBleed ? preset.colorBleed/100 : 0);
  runtime.advanced.depthOfFieldMul = pct(settings.advanced.depthOfField) || (preset.depthOfField ? preset.depthOfField/100 : 0);
  runtime.advanced.windParticlesMul = pct(settings.advanced.windParticles) || (preset.windParticles ? preset.windParticles/100 : 0);
  runtime.advanced.speedLinesMul = pct(settings.advanced.speedLines) || (preset.speedLines ? preset.speedLines/100 : 0);
  runtime.advanced.timeDilationMul = pct(settings.advanced.timeDilation) || (preset.timeDilation ? preset.timeDilation/100 : 0);
  runtime.advanced.lensFlareMul = pct(settings.advanced.lensFlare) || (preset.lensFlare ? preset.lensFlare/100 : 0);
  runtime.advanced.screenTearMul = pct(settings.advanced.screenTear) || (preset.screenTear ? preset.screenTear/100 : 0);
  runtime.advanced.dynamicFogMul = pct(settings.advanced.dynamicFog) || (preset.dynamicFog ? preset.dynamicFog/100 : 0);
  runtime.advanced.heatDistortionMul = pct(settings.advanced.heatDistortion) || (preset.heatDistortion ? preset.heatDistortion/100 : 0);
  runtime.advanced.starburstsMul = pct(settings.advanced.starbursts) || (preset.starbursts ? preset.starbursts/100 : 0);
  runtime.advanced.afterImagesMul = pct(settings.advanced.afterImages) || (preset.afterImages ? preset.afterImages/100 : 0);
  runtime.advanced.gravityWavesMul = pct(settings.advanced.gravityWaves) || (preset.gravityWaves ? preset.gravityWaves/100 : 0);
  runtime.advanced.energyRipplesMul = pct(settings.advanced.energyRipples) || (preset.energyRipples ? preset.energyRipples/100 : 0);
  runtime.advanced.pixelDisplacementMul = pct(settings.advanced.pixelDisplacement) || (preset.pixelDisplacement ? preset.pixelDisplacement/100 : 0);
  runtime.advanced.ambientOcclusionMul = pct(settings.advanced.ambientOcclusion) || (preset.ambientOcclusion ? preset.ambientOcclusion/100 : 0);
  runtime.advanced.radialBlurMul = pct(settings.advanced.radialBlur) || (preset.radialBlur ? preset.radialBlur/100 : 0);
  runtime.advanced.starRushMul = pct(settings.advanced.starRush) || (preset.starRush ? preset.starRush/100 : 0);
  runtime.advanced.nebulaDustMul = pct(settings.advanced.nebulaDust) || (preset.nebulaDust ? preset.nebulaDust/100 : 0);
  runtime.advanced.warpTunnelMul = pct(settings.advanced.warpTunnel) || (preset.warpTunnel ? preset.warpTunnel/100 : 0);
  runtime.advanced.boostFlashMul = pct(settings.advanced.boostFlash) || (preset.boostFlash ? preset.boostFlash/100 : 0);
  runtime.advanced.contrailJetsMul = pct(settings.advanced.contrailJets) || (preset.contrailJets ? preset.contrailJets/100 : 0);
  runtime.advanced.edgeLightningMul = pct(settings.advanced.edgeLightning) || (preset.edgeLightning ? preset.edgeLightning/100 : 0);
  runtime.advanced.compressionRingsMul = pct(settings.advanced.compressionRings) || (preset.compressionRings ? preset.compressionRings/100 : 0);
  runtime.advanced.deathImplodeMul = pct(settings.advanced.deathImplode) || (preset.deathImplode ? preset.deathImplode/100 : 0);
  runtime.advanced.deathGlitchMul = pct(settings.advanced.deathGlitch) || (preset.deathGlitch ? preset.deathGlitch/100 : 0);
  runtime.advanced.deathVaporizeMul = pct(settings.advanced.deathVaporize) || (preset.deathVaporize ? preset.deathVaporize/100 : 0);

  // Enable/disable based on settings
  runtime.glowEnabled = (settings.quality && settings.quality.glow !== undefined) ? (settings.quality.glow > 0) : (preset.glow !== undefined ? preset.glow > 0 : true);
  runtime.linesEnabled = preset.lines !== undefined ? preset.lines : true;
  runtime.trailEnabled = (settings.quality && settings.quality.trail !== undefined) ? settings.quality.trail > 0 : preset.trail > 0;
  
  // Advanced effects enabled
  runtime.shockwavesEnabled = runtime.advanced.shockwavesMul > 0;
  runtime.screenShakeEnabled = runtime.advanced.screenShakeMul > 0;
  runtime.bloomEnabled = runtime.advanced.bloomParticlesMul > 0;
  runtime.particleTrailsEnabled = runtime.advanced.particleTrailsMul > 0;
  runtime.distortionEnabled = runtime.advanced.screenDistortionMul > 0;
  runtime.reflectionsEnabled = runtime.advanced.screenReflectionsMul > 0;
  runtime.motionBlurEnabled = runtime.advanced.motionBlurMul > 0;
  runtime.lightRaysEnabled = runtime.advanced.lightRaysMul > 0;
  runtime.parallaxEnabled = runtime.advanced.parallaxLayersMul > 0;
  runtime.velocityStreaksEnabled = runtime.advanced.velocityStreaksMul > 0;
  runtime.impactWavesEnabled = runtime.advanced.impactWavesMul > 0;
  runtime.platformPulseEnabled = runtime.advanced.platformPulseMul > 0;
  runtime.colorBleedEnabled = runtime.advanced.colorBleedMul > 0;
  runtime.depthOfFieldEnabled = runtime.advanced.depthOfFieldMul > 0;
  runtime.windParticlesEnabled = runtime.advanced.windParticlesMul > 0;
  runtime.speedLinesEnabled = runtime.advanced.speedLinesMul > 0;
  runtime.timeDilationEnabled = runtime.advanced.timeDilationMul > 0;
  runtime.lensFlareEnabled = runtime.advanced.lensFlareMul > 0;
  runtime.screenTearEnabled = runtime.advanced.screenTearMul > 0;
  runtime.dynamicFogEnabled = runtime.advanced.dynamicFogMul > 0;
  runtime.heatDistortionEnabled = runtime.advanced.heatDistortionMul > 0;
  runtime.starburstsEnabled = runtime.advanced.starburstsMul > 0;
  runtime.afterImagesEnabled = runtime.advanced.afterImagesMul > 0;
  runtime.gravityWavesEnabled = runtime.advanced.gravityWavesMul > 0;
  runtime.energyRipplesEnabled = runtime.advanced.energyRipplesMul > 0;
  runtime.pixelDisplacementEnabled = runtime.advanced.pixelDisplacementMul > 0;
  runtime.ambientOcclusionEnabled = runtime.advanced.ambientOcclusionMul > 0;
  runtime.radialBlurEnabled = runtime.advanced.radialBlurMul > 0;
  runtime.starRushEnabled = runtime.advanced.starRushMul > 0;
  runtime.nebulaDustEnabled = runtime.advanced.nebulaDustMul > 0;
  runtime.warpTunnelEnabled = runtime.advanced.warpTunnelMul > 0;
  runtime.boostFlashEnabled = runtime.advanced.boostFlashMul > 0;
  runtime.contrailJetsEnabled = runtime.advanced.contrailJetsMul > 0;
  runtime.edgeLightningEnabled = runtime.advanced.edgeLightningMul > 0;
  runtime.compressionRingsEnabled = runtime.advanced.compressionRingsMul > 0;
  runtime.deathImplodeEnabled = runtime.advanced.deathImplodeMul > 0;
  runtime.deathGlitchEnabled = runtime.advanced.deathGlitchMul > 0;
  runtime.deathVaporizeEnabled = runtime.advanced.deathVaporizeMul > 0;

  // save canonical
  writeSettings(settings);
}

/* initial apply */
applySettings(settings);

/* ---------- World initialization & reset ---------- */
let lastPlatformX = 0, lastPlatformY = 0;
let recentPlatformSizes = []; // Track last few platform sizes for consecutive one-block rule
let lastPlatformHadStrikes = false; // Track if previous platform had strikes

function resetWorld(){
  // clear ALL arrays
  platforms = []; spikes = []; gems = []; particles = []; crashPieces = []; trail = []; lines = [];
  shockwaves = []; screenDust = []; bloomParticles = []; reflections = []; motionBlurBuffer = [];
  lightRays = []; parallaxLayers = []; velocityStreaks = []; impactWaves = []; platformPulses = [];
  windParticles = []; speedLines = []; lensFlares = []; screenTears = []; dynamicFog = [];
  heatDistortions = []; starbursts = []; afterImages = []; gravityWaves = []; energyRipples = [];
  pixelDisplacements = []; starRush = []; nebulaDust = []; warpTunnels = []; boostFlares = [];
  contrailJets = []; edgeLightnings = []; compressionRings = [];
  deathImplosions = []; deathGlitches = []; deathVapors = [];
  
  screenShake = 0;
  screenFlash = 0;
  chromaticAberration = 0;

  // reset player
  player.x = 100;
  player.y = canvas.height/2 - player.height;
  player.vy = 0;
  player.speed = 11;
  player.jumpsLeft = 2;
  player.onGround = false;
  player.visible = true;
  player.horizMultiplier = 1; player.vertMultiplier = 1;
  player.isDropping = false; // Reset drop state
  player.wasDroppingInAir = false; // Reset drop-in-air flag
  playerDeathY = null; // Reset death position

  // Reset input flags
  jumpKeyPressed = false;
  dropKeyPressed = false;
  mousePressed = false;
  touchPressed = false;
  isDraggingDown = false;
  touchStartY = null;
  touchStartTime = null;

  // reset score and color cycling
  score = 0; colorLerp = 0; globalTime = 0;
  colorIndex = 0; platformColor = {...baseColors[0]}; nextColor = baseColors[1];
  recentPlatformSizes = []; // Reset recent platform sizes tracking
  lastPlatformHadStrikes = false; // Reset strike tracking

  // Create a guaranteed ground platform
  const groundHeight = BLOCK_SIZE;
  platforms.push({
    x: 0,
    y: Math.max(100, canvas.height - groundHeight * 2),
    width: Math.max(canvas.width, BLOCK_SIZE*10),
    height: groundHeight,
    color: {...platformColor},
    passed: false
  });

  lastPlatformX = platforms[0].x + platforms[0].width;
  lastPlatformY = platforms[0].y;
  
  // Generate additional initial platforms
  const initialBlocksNeeded = 25;
  while(platforms.length < initialBlocksNeeded) {
    const out = generateBlockPlatform(lastPlatformX, lastPlatformY);
    lastPlatformX = out.x;
    lastPlatformY = out.y;
  }
  
  // Initialize parallax layers for forward motion effect
  initializeParallaxLayers();
}

/* ---------- Platform generator ---------- */
function generateBlockPlatform(lastX, lastY){
  let blockCount = Math.floor(Math.random()*8)+1;
  if(Math.random()<0.7) blockCount = Math.min(blockCount,Math.floor(Math.random()*3+1));
  let gap = Math.floor(Math.random()*5+3) * BLOCK_SIZE;
  let x = lastX + gap;
  let y = lastY + (Math.floor(Math.random()*3)-1) * BLOCK_SIZE;
  y = Math.max(BLOCK_SIZE, Math.min(canvas.height - 3*BLOCK_SIZE, y));

  // Track recent platform sizes for consecutive one-block rule
  // Keep only last 2 platforms (to check if current is third in sequence)
  const isOneBlock = blockCount === 1;
  let canHaveStrikes = true;
  
  // Rule: Two platforms with strikes cannot be in a row
  if(lastPlatformHadStrikes) {
    canHaveStrikes = false;
  }
  
  if(isOneBlock && recentPlatformSizes.length >= 2) {
    // Check if previous 2 platforms were also one-block
    const prevTwoAreOneBlock = recentPlatformSizes[recentPlatformSizes.length - 1] === 1 && 
                               recentPlatformSizes[recentPlatformSizes.length - 2] === 1;
    if(prevTwoAreOneBlock) {
      // This is the third one-block platform in a row
      // Only allow strikes on one of the three - randomly choose
      canHaveStrikes = canHaveStrikes && Math.random() < 0.33; // 33% chance (only one of three gets strikes)
    }
  }
  
  // Update recent platform sizes
  if(recentPlatformSizes.length >= 2) {
    recentPlatformSizes.shift();
  }
  recentPlatformSizes.push(blockCount);
  
  // Track if this platform will have strikes (set after generation)
  let thisPlatformHasStrikes = false;

  // Generate platform blocks
  for(let i=0;i<blockCount;i++){
    platforms.push({ 
      x: x + i*BLOCK_SIZE, 
      y, 
      width: BLOCK_SIZE, 
      height: BLOCK_SIZE, 
      color: {...platformColor}, 
      passed:false,
      pulsePhase: Math.random() * Math.PI * 2 // For platform pulse effect
    });
  }

  // Generate spikes with new logic
  if(canHaveStrikes && blockCount > 0) {
    const maxGroups = blockCount >= 7 ? 2 : 1; // At most 2 groups for 7+ blocks, 1 group for 1-6 blocks
    const spikeGroups = [];
    let hasThreeStrikeGroup = false; // Track if we already have a group with 3 strikes
    
    // Generate spike groups
    for(let group = 0; group < maxGroups; group++) {
      const groupSize = hasThreeStrikeGroup ? 
        Math.floor(Math.random() * 2) + 1 : // 1-2 strikes if we already have a 3-strike group
        Math.floor(Math.random() * 3) + 1;  // 1-3 strikes otherwise
      
      if(groupSize === 3) hasThreeStrikeGroup = true;
      
      // Find a valid position for this group (adjacent blocks)
      let attempts = 0;
      let groupStart = -1;
      while(attempts < 50 && groupStart === -1) {
        const candidateStart = Math.floor(Math.random() * (blockCount - groupSize + 1));
        // Check if this position overlaps with existing groups
        let overlaps = false;
        for(let existingGroup of spikeGroups) {
          if(candidateStart < existingGroup.start + existingGroup.size && 
             candidateStart + groupSize > existingGroup.start) {
            overlaps = true;
            break;
          }
        }
        if(!overlaps) {
          groupStart = candidateStart;
        }
        attempts++;
      }
      
      if(groupStart !== -1) {
        spikeGroups.push({ start: groupStart, size: groupSize });
      }
    }
    
    // Create spikes for each group
    for(let group of spikeGroups) {
      for(let offset = 0; offset < group.size; offset++) {
        const blockIndex = group.start + offset;
        
        // Check if there's a platform block under this spike position
        // Spike is at y - BLOCK_SIZE + BLOCK_SIZE*0.2, platform block is at y
        // So we need to check if blockIndex is within the platform (0 to blockCount-1)
        const spikeBlockX = x + blockIndex*BLOCK_SIZE;
        const spikeBlockY = y; // Platform block Y position
        
        // Verify this block is part of the platform (should always be true, but double-check)
        let hasPlatformBelow = false;
        for(let i = 0; i < blockCount; i++) {
          const platX = x + i*BLOCK_SIZE;
          const platY = y;
          // Check if spike is on top of this platform block
          if(Math.abs(spikeBlockX - platX) < BLOCK_SIZE && Math.abs(spikeBlockY - platY) < 1) {
            hasPlatformBelow = true;
            break;
          }
        }
        
        // Only create spike if there's a platform block directly below it
        if(hasPlatformBelow && blockIndex >= 0 && blockIndex < blockCount) {
          spikes.push({ 
            x: x + blockIndex*BLOCK_SIZE + BLOCK_SIZE*0.2, 
            y: y - BLOCK_SIZE + BLOCK_SIZE*0.2, 
            width: BLOCK_SIZE*0.6, 
            height: BLOCK_SIZE*0.6, 
            baseY: y - BLOCK_SIZE + BLOCK_SIZE*0.2, 
            hit:true, 
            passed:false 
          });
          thisPlatformHasStrikes = true;
        }
      }
    }
  }
  
  // Update tracking for next platform
  lastPlatformHadStrikes = thisPlatformHasStrikes;

  // gems
  for(let i=0;i<blockCount;i++){
    if(Math.random() < 0.1 || gemEveryBlock){
      let gemX = x + i*BLOCK_SIZE + BLOCK_SIZE/4;
      let gemY = y - BLOCK_SIZE*1.5;
      let safe = true;
      for(let s of spikes){ if(Math.abs(gemX - s.x) < BLOCK_SIZE*2) safe=false; }
      if(safe) gems.push({ 
        x: gemX, 
        y: gemY, 
        size: 20, 
        collected:false, 
        floatOffset: Math.random()*Math.PI*2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    }
  }

  return { x: x + blockCount*BLOCK_SIZE, y };
}

/* ---------- Collision helpers ---------- */
function checkSpikeCollision(spike){
  if(!spike.hit) return false;
  const hbW = player.width * player.hitboxScale;
  const hbH = player.height * player.hitboxScale;
  const hbX = player.x + (player.width - hbW)/2;
  const hbY = player.y + (player.height - hbH)/2;
  return hbX + hbW > spike.x && hbX < spike.x + spike.width && hbY + hbH > spike.y && hbY < spike.y + spike.height;
}

/* ========== FORWARD MOTION EFFECTS (5 effects that give sense of speed) ========== */

/* 1. PARALLAX LAYERS - Creates depth and forward motion */
function initializeParallaxLayers(){
  if(!runtime.parallaxEnabled) return;
  
  for(let i = 0; i < Math.floor(5 * runtime.advanced.parallaxLayersMul); i++){
    const moveY = Math.random() * (3.00129 - 0.700000) + 0.700000; // Random value between 0.700000~3.00129
    const sizeSpeedFactor = Math.random() * 0.9 + 0.1; // Random value between 0.1~1.0 (lower = larger/faster)
    const baseWidth = 200; // Base width
    const baseSpeed = 0.3 * player.speed * (i + 1) * 0.2; // Base speed
    parallaxLayers.push({
      y: cameraY + (Math.random() - 0.5) * canvas.height * 3, // Expanded 3x height, centered on cameraY
      width: baseWidth / sizeSpeedFactor, // Lower factor = larger width
      height: Math.random() * 3 + 1,
      speed: baseSpeed / sizeSpeedFactor, // Lower factor = faster speed
      x: Math.random() * canvas.width * 2,
      color: `rgba(100, 100, 255, ${Math.random() * 0.1 + 0.05})`,
      depth: i + 1,
      moveY: moveY // Store the parallax movement value
    });
  }
}

function updateParallaxLayers(){
  if(!runtime.parallaxEnabled) return;
  
  const cameraYDelta = cameraY - (parallaxLayers.lastCameraY || cameraY);
  parallaxLayers.lastCameraY = cameraY;
  
  for(let layer of parallaxLayers){
    layer.x -= layer.speed;
    // Apply parallax movement based on camera movement
    if(layer.moveY !== undefined) {
      layer.y += cameraYDelta / (layer.moveY * 2);
    }
    if(layer.x + layer.width < 0){
      layer.x = canvas.width + Math.random() * canvas.width;
      const moveY = Math.random() * (3.00129 - 0.700000) + 0.700000; // Random value between 0.700000~3.00129
      const sizeSpeedFactor = Math.random() * 0.9 + 0.1; // Random value between 0.1~1.0 (lower = larger/faster)
      const baseWidth = 200; // Base width
      const baseSpeed = 0.3 * player.speed * layer.depth * 0.2; // Base speed
      layer.y = cameraY + (Math.random() - 0.5) * canvas.height * 3; // Expanded 3x height, centered on cameraY
      layer.moveY = moveY; // Update the parallax movement value
      layer.width = baseWidth / sizeSpeedFactor; // Lower factor = larger width
      layer.speed = baseSpeed / sizeSpeedFactor; // Lower factor = faster speed
    }
  }
}

function drawParallaxLayers(){
  if(!runtime.parallaxEnabled || parallaxLayers.length === 0) return;
  
  ctx.save();
  for(let layer of parallaxLayers){
    ctx.fillStyle = layer.color;
    ctx.fillRect(layer.x - cameraX * (0.1 * layer.depth), layer.y - cameraY * (0.1 * layer.depth), layer.width, layer.height);
  }
  ctx.restore();
}

/* 2. VELOCITY STREAKS - Speed lines that follow player movement */
function createVelocityStreaks(){
  if(!runtime.velocityStreaksEnabled || Math.random() > 0.3 * runtime.advanced.velocityStreaksMul / ANIMATION_INTENSITY_BOOST) return;
  
  velocityStreaks.push({
    x: player.x + player.width/2,
    y: player.y + player.height/2,
    length: (Math.random() * 100 + 50) * runtime.advanced.velocityStreaksMul * ANIMATION_INTENSITY_BOOST,
    angle: Math.atan2(player.vy, player.speed) + (Math.random() - 0.5) * 0.5,
    width: Math.random() * 3 + 1,
    life: 30,
    alpha: Math.random() * 0.3 + 0.1,
    color: `rgba(0, 255, 255, 0.5)`
  });
}

function updateVelocityStreaks(){
  if(!runtime.velocityStreaksEnabled) return;
  
  for(let i = velocityStreaks.length - 1; i >= 0; i--){
    const streak = velocityStreaks[i];
    streak.life--;
    streak.alpha *= 0.95;
    
    if(streak.life <= 0 || streak.alpha <= 0.01){
      velocityStreaks.splice(i, 1);
    }
  }
}

function drawVelocityStreaks(){
  if(!runtime.velocityStreaksEnabled || velocityStreaks.length === 0) return;
  
  ctx.save();
  for(let streak of velocityStreaks){
    const endX = streak.x - cameraX + Math.cos(streak.angle) * streak.length;
    const endY = streak.y - cameraY + Math.sin(streak.angle) * streak.length;
    
    ctx.globalAlpha = streak.alpha;
    ctx.strokeStyle = streak.color;
    ctx.lineWidth = streak.width;
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    ctx.moveTo(streak.x - cameraX, streak.y - cameraY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
  ctx.restore();
}

/* 3. SPEED LINES - Radial lines emanating from player */
function createSpeedLines(){
  if(!runtime.speedLinesEnabled || Math.random() > 0.4 * runtime.advanced.speedLinesMul / ANIMATION_INTENSITY_BOOST) return;
  
  for(let i = 0; i < Math.floor(3 * runtime.advanced.speedLinesMul * ANIMATION_INTENSITY_BOOST); i++){
    speedLines.push({
      x: player.x + player.width/2,
      y: player.y + player.height/2,
      angle: Math.random() * Math.PI * 2,
      length: (Math.random() * 80 + 40) * runtime.advanced.speedLinesMul * ANIMATION_INTENSITY_BOOST,
      speed: (Math.random() * 10 + 5) * ANIMATION_INTENSITY_BOOST,
      life: 24,
      alpha: 0.45,
      color: '#ffffff'
    });
  }
}

function updateSpeedLines(){
  if(!runtime.speedLinesEnabled) return;
  
  for(let i = speedLines.length - 1; i >= 0; i--){
    const line = speedLines[i];
    line.x += Math.cos(line.angle) * line.speed;
    line.y += Math.sin(line.angle) * line.speed;
    line.life--;
    line.alpha *= 0.9;
    
    if(line.life <= 0 || line.alpha <= 0.01){
      speedLines.splice(i, 1);
    }
  }
}

function drawSpeedLines(){
  if(!runtime.speedLinesEnabled || speedLines.length === 0) return;
  
  ctx.save();
  for(let line of speedLines){
    const endX = line.x - cameraX + Math.cos(line.angle) * line.length;
    const endY = line.y - cameraY + Math.sin(line.angle) * line.length;
    
    ctx.globalAlpha = line.alpha;
    ctx.strokeStyle = line.color;
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    ctx.moveTo(line.x - cameraX, line.y - cameraY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
  ctx.restore();
}

/* 4. WIND PARTICLES - Particles blowing past player */
function createWindParticles(){
  if(!runtime.windParticlesEnabled || Math.random() > 0.5 * runtime.advanced.windParticlesMul / ANIMATION_INTENSITY_BOOST) return;
  
  for(let i = 0; i < Math.floor(5 * runtime.advanced.windParticlesMul * ANIMATION_INTENSITY_BOOST); i++){
    const moveY = Math.random() * (3.00129 - 0.700000) + 0.700000; // Random value between 0.700000~3.00129
    const sizeSpeedFactor = Math.random() * 0.9 + 0.1; // Random value between 0.1~1.0 (lower = larger/faster)
    const baseSize = 2.5; // Base size
    const baseSpeed = 12.5; // Base speed
    windParticles.push({
      x: player.x + canvas.width + Math.random() * 100,
      y: cameraY + (Math.random() - 0.5) * canvas.height * 3, // Expanded 3x height, centered on cameraY
      vx: -(baseSpeed / sizeSpeedFactor) * player.speed * 0.12 * ANIMATION_INTENSITY_BOOST,
      vy: (Math.random() - 0.5) * 4,
      size: baseSize / sizeSpeedFactor,
      life: Math.random() * 100 + 50,
      color: `rgba(200, 220, 255, ${Math.random() * 0.3 + 0.1})`,
      moveY: moveY // Store the parallax movement value
    });
  }
}

function updateWindParticles(){
  if(!runtime.windParticlesEnabled) return;
  
  const cameraYDelta = cameraY - (windParticles.lastCameraY || cameraY);
  windParticles.lastCameraY = cameraY;
  
  for(let i = windParticles.length - 1; i >= 0; i--){
    const particle = windParticles[i];
    particle.x += particle.vx;
    particle.y += particle.vy;
    // Apply parallax movement based on camera movement
    if(particle.moveY !== undefined) {
      particle.y += cameraYDelta / (particle.moveY * 2);
    }
    particle.life--;
    
    if(particle.life <= 0 || particle.x < player.x - 100){
      windParticles.splice(i, 1);
    }
  }
}

function drawWindParticles(){
  if(!runtime.windParticlesEnabled || windParticles.length === 0) return;
  
  ctx.save();
  for(let particle of windParticles){
    ctx.globalAlpha = particle.life / 150;
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x - cameraX, particle.y - cameraY, particle.size, particle.size);
  }
  ctx.restore();
}

/* 5. RADIAL BLUR - Motion blur effect centered on player */
function applyRadialBlur(){
  if(!runtime.radialBlurEnabled || runtime.advanced.radialBlurMul < 0.1) return;
  
  // Simulate radial blur by drawing multiple offset copies
  ctx.save();
  const blurIntensity = runtime.advanced.radialBlurMul * 0.1;
  
  for(let i = 0; i < 3; i++){
    const offset = (i + 1) * blurIntensity * 2;
    const alpha = (i + 1) / 12 * blurIntensity;
    
    ctx.globalAlpha = alpha;
    ctx.translate(offset, 0);
    
    // Re-draw player and nearby effects with offset
    if(player.visible){
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x - cameraX, player.y - cameraY, player.width, player.height);
    }
  }
  ctx.restore();
}

/* ========== ADDITIONAL FORWARD SPEED EFFECTS ========== */

function updateStarRush(){
  if(!runtime.starRushEnabled) return;
  // Spawn new stars streaming past the player
  if(Math.random() < 0.75 * runtime.advanced.starRushMul * ANIMATION_INTENSITY_BOOST){
    const moveY = Math.random() * (3.00129 - 0.700000) + 0.700000; // Random value between 0.700000~3.00129
    const sizeSpeedFactor = Math.random() * 0.9 + 0.1; // Random value between 0.1~1.0 (lower = larger/faster)
    const baseSize = 2.0; // Base size
    const baseSpeed = player.speed * 0.8 + 9; // Base speed
    starRush.push({
      x: player.x + canvas.width + Math.random() * 300,
      y: cameraY + (Math.random() - 0.5) * canvas.height * 3, // Expanded 3x height, centered on cameraY
      vx: -(baseSpeed / sizeSpeedFactor) * 0.6,
      size: baseSize / sizeSpeedFactor,
      life: 120,
      color: Math.random() > 0.5 ? "#aef" : "#6ff",
      moveY: moveY // Store the parallax movement value
    });
  }
  
  const cameraYDelta = cameraY - (starRush.lastCameraY || cameraY);
  starRush.lastCameraY = cameraY;
  
  for(let i = starRush.length - 1; i >= 0; i--){
    const s = starRush[i];
    s.x += s.vx * runtime.advanced.starRushMul * ANIMATION_INTENSITY_BOOST;
    // Apply parallax movement based on camera movement
    if(s.moveY !== undefined) {
      s.y += cameraYDelta / (s.moveY * 2);
    }
    s.life--;
    if(s.life <= 0 || s.x < player.x - canvas.width){
      starRush.splice(i, 1);
    }
  }
}

function drawStarRush(){
  if(!runtime.starRushEnabled || starRush.length === 0) return;
  ctx.save();
  ctx.globalAlpha = 0.9;
  for(let s of starRush){
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.size;
    ctx.beginPath();
    ctx.moveTo(s.x - cameraX, s.y - cameraY);
    ctx.lineTo(s.x - cameraX + s.vx * 3, s.y - cameraY);
    ctx.stroke();
  }
  ctx.restore();
}

function updateNebulaDust(){
  if(!runtime.nebulaDustEnabled) return;
  if(Math.random() < 0.35 * runtime.advanced.nebulaDustMul * ANIMATION_INTENSITY_BOOST){
    const moveY = Math.random() * (3.00129 - 0.700000) + 0.700000; // Random value between 0.700000~3.00129
    const sizeSpeedFactor = Math.random() * 0.9 + 0.1; // Random value between 0.1~1.0 (lower = larger/faster)
    const baseSize = 50; // Base size
    const baseSpeed = 5; // Base speed
    nebulaDust.push({
      x: player.x + canvas.width + Math.random() * 200,
      y: cameraY + (Math.random() - 0.5) * canvas.height * 3, // Expanded 3x height, centered on cameraY
      vx: -(baseSpeed / sizeSpeedFactor),
      vy: (Math.random() - 0.5) * 0.8,
      size: baseSize / sizeSpeedFactor,
      life: 260,
      alpha: Math.random() * 0.25 + 0.1,
      hue: Math.random() * 60 + 190,
      moveY: moveY // Store the parallax movement value
    });
  }
  
  const cameraYDelta = cameraY - (nebulaDust.lastCameraY || cameraY);
  nebulaDust.lastCameraY = cameraY;
  
  for(let i = nebulaDust.length - 1; i >= 0; i--){
    const d = nebulaDust[i];
    d.x += d.vx * runtime.advanced.nebulaDustMul * 0.5;
    d.y += d.vy;
    // Apply parallax movement based on camera movement
    if(d.moveY !== undefined) {
      d.y += cameraYDelta / (d.moveY * 2);
    }
    d.life--;
    if(d.life <= 0 || d.x < player.x - canvas.width * 0.5){
      nebulaDust.splice(i, 1);
    }
  }
}

function drawNebulaDust(){
  if(!runtime.nebulaDustEnabled || nebulaDust.length === 0) return;
  ctx.save();
  for(let d of nebulaDust){
    const gradient = ctx.createRadialGradient(
      d.x - cameraX, d.y - cameraY, d.size * 0.1,
      d.x - cameraX, d.y - cameraY, d.size
    );
    gradient.addColorStop(0, `hsla(${Math.floor(d.hue)}, 80%, 65%, ${d.alpha})`);
    gradient.addColorStop(1, `hsla(${Math.floor(d.hue)}, 80%, 65%, 0)`);
    ctx.fillStyle = gradient;
    ctx.globalAlpha = d.life / 260;
    ctx.beginPath();
    ctx.arc(d.x - cameraX, d.y - cameraY, d.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function spawnWarpTunnel(){
  if(!runtime.warpTunnelEnabled) return;
  if(!player.isDropping) return; // Only spawn tunnel rings when player is using DIG
  if(warpTunnels.length > 10) return;
  warpTunnels.push({
    radius: player.width,
    width: 4,
    alpha: 0.25 * runtime.advanced.warpTunnelMul,
    speed: (12 + player.speed) * runtime.advanced.warpTunnelMul * ANIMATION_INTENSITY_BOOST
  });
}

function updateWarpTunnels(){
  if(!runtime.warpTunnelEnabled) return;
  if(Math.random() < 0.08 * runtime.advanced.warpTunnelMul * ANIMATION_INTENSITY_BOOST){
    spawnWarpTunnel();
  }
  for(let i = warpTunnels.length - 1; i >= 0; i--){
    const t = warpTunnels[i];
    t.radius += t.speed * 0.2;
    t.alpha *= 0.965;
    if(t.radius > canvas.width * 1.2 || t.alpha <= 0.01){
      warpTunnels.splice(i, 1);
    }
  }
}

function drawWarpTunnels(){
  if(!runtime.warpTunnelEnabled || warpTunnels.length === 0) return;
  ctx.save();
  ctx.strokeStyle = "#4df";
  for(let t of warpTunnels){
    ctx.globalAlpha = t.alpha;
    ctx.lineWidth = t.width;
    ctx.beginPath();
    ctx.arc(player.x - cameraX, player.y - cameraY, t.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function createBoostFlash(){
  if(!runtime.boostFlashEnabled) return;
  boostFlares.push({
    life: 18,
    alpha: 0.6 * runtime.advanced.boostFlashMul * ANIMATION_INTENSITY_BOOST
  });
}

function updateBoostFlares(){
  if(!runtime.boostFlashEnabled) return;
  for(let i = boostFlares.length - 1; i >= 0; i--){
    const f = boostFlares[i];
    f.life--;
    f.alpha *= 0.9;
    if(f.life <= 0 || f.alpha <= 0.01){
      boostFlares.splice(i, 1);
    }
  }
}

function drawBoostFlares(){
  if(!runtime.boostFlashEnabled || boostFlares.length === 0) return;
  ctx.save();
  for(let f of boostFlares){
    const gradient = ctx.createLinearGradient(canvas.width, 0, canvas.width * 0.6, 0);
    gradient.addColorStop(0, `rgba(255,255,255,${f.alpha})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.restore();
}

function createContrailJet(){
  if(!runtime.contrailJetsEnabled) return;
  contrailJets.push({
    x: player.x - 10,
    y: player.y + player.height/2 + (Math.random() - 0.5) * 24,
    length: (30 + Math.random() * 20) * runtime.advanced.contrailJetsMul * ANIMATION_INTENSITY_BOOST,
    width: 6,
    life: 32,
    alpha: 0.7
  });
}

function updateContrailJets(){
  if(!runtime.contrailJetsEnabled) return;
  if(Math.random() < 0.7 * runtime.advanced.contrailJetsMul * ANIMATION_INTENSITY_BOOST){
    createContrailJet();
  }
  for(let i = contrailJets.length - 1; i >= 0; i--){
    const c = contrailJets[i];
    c.x -= player.speed * 1.15;
    c.length *= 0.98;
    c.life--;
    c.alpha *= 0.93;
    if(c.life <= 0 || c.alpha <= 0.01){
      contrailJets.splice(i, 1);
    }
  }
}

function drawContrailJets(){
  if(!runtime.contrailJetsEnabled || contrailJets.length === 0) return;
  ctx.save();
  ctx.fillStyle = "rgba(100,255,255,0.5)";
  for(let c of contrailJets){
    ctx.globalAlpha = c.alpha;
    ctx.beginPath();
    ctx.moveTo(c.x - cameraX, c.y - cameraY);
    ctx.lineTo(c.x - cameraX - c.length, c.y - cameraY - c.width);
    ctx.lineTo(c.x - cameraX - c.length, c.y - cameraY + c.width);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function spawnEdgeLightning(){
  if(!runtime.edgeLightningEnabled) return;
  if(Math.random() > 0.18 * runtime.advanced.edgeLightningMul * ANIMATION_INTENSITY_BOOST) return;
  edgeLightnings.push({
    side: Math.random() > 0.5 ? "top" : "bottom",
    x: Math.random() * canvas.width,
    life: 14,
    alpha: 0.8
  });
}

function updateEdgeLightnings(){
  if(!runtime.edgeLightningEnabled) return;
  spawnEdgeLightning();
  for(let i = edgeLightnings.length - 1; i >= 0; i--){
    const e = edgeLightnings[i];
    e.life--;
    e.alpha *= 0.9;
    if(e.life <= 0 || e.alpha <= 0.05){
      edgeLightnings.splice(i, 1);
    }
  }
}

function drawEdgeLightnings(){
  if(!runtime.edgeLightningEnabled || edgeLightnings.length === 0) return;
  ctx.save();
  ctx.strokeStyle = "#8ff";
  ctx.lineWidth = 2;
  for(let e of edgeLightnings){
    ctx.globalAlpha = e.alpha;
    ctx.beginPath();
    const segments = 6;
    const segmentLength = canvas.width / segments;
    for(let i = 0; i <= segments; i++){
      const sx = segmentLength * i + (Math.random() - 0.5) * 8;
      const sy = e.side === "top" ? 0 : canvas.height;
      if(i === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy + (Math.random() - 0.5) * 20);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function createCompressionRing(){
  if(!runtime.compressionRingsEnabled) return;
  compressionRings.push({
    x: player.x + player.width * 2,
    y: player.y + player.height/2,
    radius: 18,
    width: 3,
    alpha: 0.6,
    speed: (12 + player.speed) * runtime.advanced.compressionRingsMul * ANIMATION_INTENSITY_BOOST
  });
}

function updateCompressionRings(){
  if(!runtime.compressionRingsEnabled) return;
  if(Math.random() < 0.1 * runtime.advanced.compressionRingsMul * ANIMATION_INTENSITY_BOOST){
    createCompressionRing();
  }
  for(let i = compressionRings.length - 1; i >= 0; i--){
    const c = compressionRings[i];
    c.radius += c.speed * 0.18;
    c.alpha *= 0.93;
    if(c.alpha <= 0.02 || c.radius > canvas.width){
      compressionRings.splice(i, 1);
    }
  }
}

function drawCompressionRings(){
  if(!runtime.compressionRingsEnabled || compressionRings.length === 0) return;
  ctx.save();
  ctx.strokeStyle = "#9cf";
  for(let c of compressionRings){
    ctx.globalAlpha = c.alpha;
    ctx.lineWidth = c.width;
    ctx.beginPath();
    ctx.arc(c.x - cameraX, c.y - cameraY, c.radius, -0.2, Math.PI + 0.2);
    ctx.stroke();
  }
  ctx.restore();
}

/* ========== VISUAL ENHANCEMENT EFFECTS ========== */

/* 6. PLATFORM PULSE - Platforms pulse with color */
function updatePlatformPulse(){
  if(!runtime.platformPulseEnabled) return;
  
  for(let plat of platforms){
    plat.pulsePhase += 0.1 * runtime.advanced.platformPulseMul;
  }
}

function drawPlatformPulse(){
  if(!runtime.platformPulseEnabled) return;
  
  ctx.save();
  for(let plat of platforms){
    const pulse = Math.sin(plat.pulsePhase) * 0.2 + 0.8;
    const r = Math.floor(plat.color.r * pulse);
    const g = Math.floor(plat.color.g * pulse);
    const b = Math.floor(plat.color.b * pulse);
    
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(plat.x - cameraX, plat.y - cameraY, plat.width, plat.height);
  }
  ctx.restore();
}

/* 7. IMPACT WAVES - Ripple effects on collisions */
function createImpactWave(x, y, intensity = 1){
  if(!runtime.impactWavesEnabled) return;
  
  impactWaves.push({
    x: x,
    y: y,
    radius: 0,
    maxRadius: 120 * intensity * runtime.advanced.impactWavesMul * ANIMATION_INTENSITY_BOOST,
    speed: (5 + 5 * runtime.advanced.impactWavesMul) * ANIMATION_INTENSITY_BOOST,
    life: 1,
    color: '#ffffff',
    width: 2
  });
}

function updateImpactWaves(){
  if(!runtime.impactWavesEnabled) return;
  
  for(let i = impactWaves.length - 1; i >= 0; i--){
    const wave = impactWaves[i];
    wave.radius += wave.speed;
    wave.life = 1 - (wave.radius / wave.maxRadius);
    
    if(wave.radius >= wave.maxRadius){
      impactWaves.splice(i, 1);
    }
  }
}

function drawImpactWaves(){
  if(!runtime.impactWavesEnabled || impactWaves.length === 0) return;
  
  ctx.save();
  for(let wave of impactWaves){
    ctx.globalAlpha = wave.life * 0.5;
    ctx.strokeStyle = wave.color;
    ctx.lineWidth = wave.width;
    
    ctx.beginPath();
    ctx.arc(wave.x - cameraX, wave.y - cameraY, wave.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

/* 8. LENS FLARE - Light effects from bright objects */
function createLensFlare(x, y, intensity = 1){
  if(!runtime.lensFlareEnabled) return;
  
  lensFlares.push({
    x: x,
    y: y,
    size: 30 * intensity * runtime.advanced.lensFlareMul,
    life: 30,
    alpha: 0.5,
    color: '#ffff88'
  });
}

function updateLensFlares(){
  if(!runtime.lensFlareEnabled) return;
  
  for(let i = lensFlares.length - 1; i >= 0; i--){
    const flare = lensFlares[i];
    flare.life--;
    flare.alpha *= 0.95;
    
    if(flare.life <= 0 || flare.alpha <= 0.01){
      lensFlares.splice(i, 1);
    }
  }
}

function drawLensFlares(){
  if(!runtime.lensFlareEnabled || lensFlares.length === 0) return;
  
  ctx.save();
  for(let flare of lensFlares){
    ctx.globalAlpha = flare.alpha;
    ctx.fillStyle = flare.color;
    
    // Draw flare as a circle with gradient
    const gradient = ctx.createRadialGradient(
      flare.x - cameraX, flare.y - cameraY, 0,
      flare.x - cameraX, flare.y - cameraY, flare.size
    );
    gradient.addColorStop(0, 'rgba(255, 255, 200, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 200, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(flare.x - cameraX, flare.y - cameraY, flare.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

/* 9. SCREEN TEAR - Visual distortion at high speeds */
function applyScreenTear(){
  if(!runtime.screenTearEnabled || runtime.advanced.screenTearMul < 0.1) return;
  
  const tearIntensity = runtime.advanced.screenTearMul * 0.1;
  if(Math.random() < tearIntensity * 0.1){
    const tearY = Math.random() * canvas.height;
    const tearHeight = Math.random() * 20 + 5;
    const tearOffset = (Math.random() - 0.5) * 30 * tearIntensity;
    
    ctx.save();
    ctx.globalAlpha = 0.3;
    ctx.drawImage(canvas, 0, tearY, canvas.width, tearHeight, tearOffset, tearY, canvas.width, tearHeight);
    ctx.restore();
  }
}

/* 10. DYNAMIC FOG - Atmospheric depth */
function updateDynamicFog(){
  if(!runtime.dynamicFogEnabled || Math.random() > 0.1 * runtime.advanced.dynamicFogMul) return;
  
  dynamicFog.push({
    x: player.x + canvas.width + Math.random() * 200,
    y: Math.random() * canvas.height,
    size: Math.random() * 100 + 50,
    speed: Math.random() * 3 + 1,
    alpha: Math.random() * 0.1 + 0.05,
    life: 200
  });
}

function drawDynamicFog(){
  if(!runtime.dynamicFogEnabled || dynamicFog.length === 0) return;
  
  ctx.save();
  for(let i = dynamicFog.length - 1; i >= 0; i--){
    const fog = dynamicFog[i];
    fog.x -= fog.speed;
    fog.life--;
    
    if(fog.life <= 0 || fog.x < player.x - 200){
      dynamicFog.splice(i, 1);
      continue;
    }
    
    ctx.globalAlpha = fog.alpha * (fog.life / 200);
    ctx.fillStyle = '#8888aa';
    
    const gradient = ctx.createRadialGradient(
      fog.x - cameraX, fog.y - cameraY, 0,
      fog.x - cameraX, fog.y - cameraY, fog.size
    );
    gradient.addColorStop(0, 'rgba(136, 136, 170, 0.3)');
    gradient.addColorStop(1, 'rgba(136, 136, 170, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(fog.x - cameraX, fog.y - cameraY, fog.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

/* 11. HEAT DISTORTION - Heat waves from friction */
function createHeatDistortion(x, y, intensity = 1){
  if(!runtime.heatDistortionEnabled) return;
  
  heatDistortions.push({
    x: x,
    y: y,
    radius: 0,
    maxRadius: 50 * intensity * runtime.advanced.heatDistortionMul,
    speed: 3,
    life: 1,
    alpha: 0.3
  });
}

function drawHeatDistortion(){
  if(!runtime.heatDistortionEnabled || heatDistortions.length === 0) return;
  
  ctx.save();
  for(let i = heatDistortions.length - 1; i >= 0; i--){
    const heat = heatDistortions[i];
    heat.radius += heat.speed;
    heat.life = 1 - (heat.radius / heat.maxRadius);
    
    if(heat.radius >= heat.maxRadius){
      heatDistortions.splice(i, 1);
      continue;
    }
    
    ctx.globalAlpha = heat.life * heat.alpha;
    ctx.strokeStyle = '#ffaa00';
    ctx.lineWidth = 2;
    
    // Draw wavy circle for heat effect
    ctx.beginPath();
    for(let angle = 0; angle < Math.PI * 2; angle += 0.1){
      const wave = Math.sin(angle * 5 + globalTime * 10) * 5;
      const rad = heat.radius + wave;
      const px = heat.x - cameraX + Math.cos(angle) * rad;
      const py = heat.y - cameraY + Math.sin(angle) * rad;
      
      if(angle === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
}

/* 12. COLOR BLEED - Color smearing effect */
function applyColorBleed(){
  if(!runtime.colorBleedEnabled || runtime.advanced.colorBleedMul < 0.1) return;
  
  // Simplified color bleed by drawing semi-transparent copies
  ctx.save();
  const bleed = runtime.advanced.colorBleedMul * 0.05;
  
  for(let i = 0; i < 2; i++){
    ctx.globalAlpha = bleed * 0.3;
    ctx.translate(bleed * 2, 0);
    
    // Re-draw player with offset
    if(player.visible){
      ctx.fillStyle = '#ff00ff';
      ctx.fillRect(player.x - cameraX, player.y - cameraY, player.width, player.height);
    }
  }
  ctx.restore();
}

/* 13. STARBURSTS - Explosive particle bursts */
function createStarburst(x, y, intensity = 1){
  if(!runtime.starburstsEnabled) return;
  
  for(let i = 0; i < Math.floor(10 * intensity * runtime.advanced.starburstsMul); i++){
    starbursts.push({
      x: x,
      y: y,
      angle: Math.random() * Math.PI * 2,
      distance: 0,
      maxDistance: Math.random() * 100 + 50,
      speed: Math.random() * 5 + 2,
      size: Math.random() * 3 + 1,
      life: 1,
      color: `hsl(${Math.random() * 60 + 300}, 100%, 70%)`
    });
  }
}

function updateStarbursts(){
  if(!runtime.starburstsEnabled) return;
  
  for(let i = starbursts.length - 1; i >= 0; i--){
    const burst = starbursts[i];
    burst.distance += burst.speed;
    burst.life = 1 - (burst.distance / burst.maxDistance);
    
    if(burst.distance >= burst.maxDistance){
      starbursts.splice(i, 1);
    }
  }
}

function drawStarbursts(){
  if(!runtime.starburstsEnabled || starbursts.length === 0) return;
  
  ctx.save();
  for(let burst of starbursts){
    const x = burst.x - cameraX + Math.cos(burst.angle) * burst.distance;
    const y = burst.y - cameraY + Math.sin(burst.angle) * burst.distance;
    
    ctx.globalAlpha = burst.life;
    ctx.fillStyle = burst.color;
    ctx.fillRect(x, y, burst.size, burst.size);
  }
  ctx.restore();
}

/* 14. AFTER IMAGES - Ghost images of fast-moving objects */
function createAfterImage(){
  if(!runtime.afterImagesEnabled || Math.random() > 0.3 * runtime.advanced.afterImagesMul) return;
  
  afterImages.push({
    x: player.x,
    y: player.y,
    width: player.width,
    height: player.height,
    alpha: 0.3,
    life: 20,
    color: player.color
  });
}

function updateAfterImages(){
  if(!runtime.afterImagesEnabled) return;
  
  for(let i = afterImages.length - 1; i >= 0; i--){
    const image = afterImages[i];
    image.life--;
    image.alpha *= 0.9;
    
    if(image.life <= 0 || image.alpha <= 0.01){
      afterImages.splice(i, 1);
    }
  }
}

function drawAfterImages(){
  if(!runtime.afterImagesEnabled || afterImages.length === 0) return;
  
  ctx.save();
  for(let image of afterImages){
    ctx.globalAlpha = image.alpha;
    ctx.fillStyle = image.color;
    ctx.fillRect(image.x - cameraX, image.y - cameraY, image.width, image.height);
  }
  ctx.restore();
}

/* 15. GRAVITY WAVES - Ripples in space-time */
function createGravityWave(x, y, intensity = 1){
  if(!runtime.gravityWavesEnabled) return;
  
  gravityWaves.push({
    x: x,
    y: y,
    radius: 0,
    maxRadius: 150 * intensity * runtime.advanced.gravityWavesMul,
    speed: 2,
    life: 1,
    alpha: 0.2,
    color: '#00ffff'
  });
}

function updateGravityWaves(){
  if(!runtime.gravityWavesEnabled) return;
  
  for(let i = gravityWaves.length - 1; i >= 0; i--){
    const wave = gravityWaves[i];
    wave.radius += wave.speed;
    wave.life = 1 - (wave.radius / wave.maxRadius);
    
    if(wave.radius >= wave.maxRadius){
      gravityWaves.splice(i, 1);
    }
  }
}

function drawGravityWaves(){
  if(!runtime.gravityWavesEnabled || gravityWaves.length === 0) return;
  
  ctx.save();
  for(let wave of gravityWaves){
    ctx.globalAlpha = wave.life * wave.alpha;
    ctx.strokeStyle = wave.color;
    ctx.lineWidth = 1;
    
    // Draw distorted circle for gravity wave
    ctx.beginPath();
    for(let angle = 0; angle < Math.PI * 2; angle += 0.2){
      const distortion = Math.sin(angle * 3 + globalTime * 5) * 10;
      const rad = wave.radius + distortion;
      const px = wave.x - cameraX + Math.cos(angle) * rad;
      const py = wave.y - cameraY + Math.sin(angle) * rad;
      
      if(angle === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
}

/* 16. ENERGY RIPPLES - Energy waves from player actions */
function createEnergyRipple(x, y, intensity = 1){
  if(!runtime.energyRipplesEnabled) return;
  
  energyRipples.push({
    x: x,
    y: y,
    radius: 0,
    maxRadius: 80 * intensity * runtime.advanced.energyRipplesMul,
    speed: 4,
    life: 1,
    color: '#00ff00',
    segments: Math.floor(Math.random() * 8 + 4)
  });
}

function updateEnergyRipples(){
  if(!runtime.energyRipplesEnabled) return;
  
  for(let i = energyRipples.length - 1; i >= 0; i--){
    const ripple = energyRipples[i];
    ripple.radius += ripple.speed;
    ripple.life = 1 - (ripple.radius / ripple.maxRadius);
    
    if(ripple.radius >= ripple.maxRadius){
      energyRipples.splice(i, 1);
    }
  }
}

function drawEnergyRipples(){
  if(!runtime.energyRipplesEnabled || energyRipples.length === 0) return;
  
  ctx.save();
  for(let ripple of energyRipples){
    ctx.globalAlpha = ripple.life * 0.5;
    ctx.strokeStyle = ripple.color;
    ctx.lineWidth = 2;
    
    // Draw segmented circle
    const segmentAngle = (Math.PI * 2) / ripple.segments;
    ctx.beginPath();
    
    for(let i = 0; i < ripple.segments; i++){
      const startAngle = i * segmentAngle;
      const endAngle = (i + 0.5) * segmentAngle;
      
      ctx.arc(
        ripple.x - cameraX, 
        ripple.y - cameraY, 
        ripple.radius, 
        startAngle, 
        endAngle
      );
    }
    ctx.stroke();
  }
  ctx.restore();
}

/* 17. PIXEL DISPLACEMENT - Pixel shatter effect */
function createPixelDisplacement(x, y, intensity = 1){
  if(!runtime.pixelDisplacementEnabled) return;
  
  for(let i = 0; i < Math.floor(20 * intensity * runtime.advanced.pixelDisplacementMul); i++){
    pixelDisplacements.push({
      x: x + (Math.random() - 0.5) * 50,
      y: y + (Math.random() - 0.5) * 50,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      size: Math.random() * 4 + 1,
      life: Math.random() * 30 + 20,
      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
  }
}

function updatePixelDisplacements(){
  if(!runtime.pixelDisplacementEnabled) return;
  
  for(let i = pixelDisplacements.length - 1; i >= 0; i--){
    const pixel = pixelDisplacements[i];
    pixel.x += pixel.vx;
    pixel.y += pixel.vy;
    pixel.vy += 0.1;
    pixel.life--;
    
    if(pixel.life <= 0){
      pixelDisplacements.splice(i, 1);
    }
  }
}

function drawPixelDisplacements(){
  if(!runtime.pixelDisplacementEnabled || pixelDisplacements.length === 0) return;
  
  ctx.save();
  for(let pixel of pixelDisplacements){
    ctx.globalAlpha = pixel.life / 50;
    ctx.fillStyle = pixel.color;
    ctx.fillRect(pixel.x - cameraX, pixel.y - cameraY, pixel.size, pixel.size);
  }
  ctx.restore();
}

/* 18. DEPTH OF FIELD - Blur based on distance */
function applyDepthOfField(){
  if(!runtime.depthOfFieldEnabled || runtime.advanced.depthOfFieldMul < 0.1) return;
  
  // Simplified depth of field - blur distant objects
  ctx.save();
  const blurAmount = runtime.advanced.depthOfFieldMul * 0.02;
  
  // Apply blur to platforms based on distance from player
  for(let plat of platforms){
    const distance = Math.abs(plat.x - player.x);
    if(distance > 300){
      ctx.save();
      ctx.globalAlpha = 0.1 * (distance / 500) * blurAmount;
      ctx.fillStyle = '#000000';
      ctx.fillRect(plat.x - cameraX, plat.y - cameraY, plat.width, plat.height);
      ctx.restore();
    }
  }
  ctx.restore();
}

/* 19. TIME DILATION - Slow motion effect on special events */
let timeScale = 1;
function applyTimeDilation(){
  if(!runtime.timeDilationEnabled || runtime.advanced.timeDilationMul < 0.1) return;
  
  // Random time dilation events
  if(Math.random() < 0.01 * runtime.advanced.timeDilationMul){
    timeScale = 0.3;
    setTimeout(() => {
      timeScale = 1;
    }, 300);
  }
}

/* 20. AMBIENT OCCLUSION - Soft shadows */
function applyAmbientOcclusion(){
  if(!runtime.ambientOcclusionEnabled || runtime.advanced.ambientOcclusionMul < 0.1) return;
  
  ctx.save();
  const occlusion = runtime.advanced.ambientOcclusionMul * 0.05;
  
  // Add subtle shadows under platforms
  for(let plat of platforms){
    ctx.globalAlpha = 0.1 * occlusion;
    ctx.fillStyle = '#000000';
    
    // Shadow under platform
    ctx.fillRect(
      plat.x - cameraX + 3, 
      plat.y - cameraY + plat.height, 
      plat.width, 
      5
    );
    
    // Shadow on side of platform
    ctx.fillRect(
      plat.x - cameraX + plat.width, 
      plat.y - cameraY, 
      3, 
      plat.height
    );
  }
  ctx.restore();
}

/* ---------- ENHANCED PARTICLE EFFECTS ---------- */
function spawnParticlesEarly(x, y, type, amountMul = 1) {
  const color = type === "jump" ? "#0ff" : type === "double" ? "#ff0" : type === "gem" ? "#fff" : "#fff";
  const baseCount = type === "land" ? 10 : 15;
  const count = Math.max(0, Math.floor(baseCount * amountMul * runtime.effects.jumpEffectMul * ANIMATION_INTENSITY_BOOST));
  
  for(let i = 0; i < count; i++) {
    const vx = (Math.random() - 0.5) * (type === "land" ? 8 : 5) * ANIMATION_INTENSITY_BOOST;
    const vy = (Math.random() - (type === "land" ? 1 : 1.5)) * (type === "land" ? 4 : 5) * ANIMATION_INTENSITY_BOOST;
    particles.push({
      x: x + (Math.random() - 0.5) * (type === "land" ? 10 : 5),
      y: y + (Math.random() - 0.5) * (type === "land" ? 10 : 5),
      vx: vx,
      vy: vy,
      life: Math.random() * (type === "land" ? 25 : 30) + (type === "land" ? 15 : 20),
      color: color,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 4 + 3
    });
  }
  
  // Add particle trails effect
  if(runtime.particleTrailsEnabled && Math.random() < 0.3 * runtime.advanced.particleTrailsMul) {
    for(let i = 0; i < Math.floor(count * 0.3); i++) {
      particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 60,
        color: color,
        trail: []
      });
    }
  }
  
  // Add bloom particles for high quality
  if(runtime.bloomEnabled && Math.random() < 0.2 * runtime.advanced.bloomParticlesMul && type !== "land") {
    for(let i = 0; i < Math.floor(3 * runtime.advanced.bloomParticlesMul); i++) {
      bloomParticles.push({
        x: x,
        y: y,
        radius: Math.random() * 15 + 5,
        life: 30,
        color: color,
        alpha: 0.5
      });
    }
  }
  
  // Add starburst effect for high quality
  if(runtime.starburstsEnabled && type === "jump") {
    createStarburst(x, y, 0.5);
  }
  
  // Add impact wave for landing
  if(runtime.impactWavesEnabled && type === "land") {
    createImpactWave(x, y, 0.5);
  }
  
  // Add heat distortion for high speed jumps
  if(runtime.heatDistortionEnabled && type === "double") {
    createHeatDistortion(x, y, 0.3);
  }
  
  // Add after image for double jumps
  if(runtime.afterImagesEnabled && type === "double") {
    createAfterImage();
  }
}

/* ---------- ENHANCED DEATH ANIMATION ---------- */
function createCrashEarly(amountMul = 1) {
  const baseCount = 20;
  const count = Math.max(6, Math.floor(baseCount * amountMul * runtime.effects.dieEffectMul));
  
  for(let i = 0; i < count; i++) {
    crashPieces.push({
      x: player.x + Math.random() * player.width,
      y: player.y + Math.random() * player.height,
      vx: (Math.random() - 0.5) * 36,
      vy: (Math.random() - 1.2) * 24,
      ax: (Math.random() - 0.5) * 0.1,
      ay: (Math.random() - 0.5) * 0.1,
      size: Math.random() * player.width / 2 + 16,
      color: player.color,
      life: 120 + Math.random() * 60,
      rotation: Math.random() * Math.PI * 4,
      rotationSpeed: (Math.random() - 0.5) * 0.6,
      scale: 1,
      scaleSpeed: Math.random() * 0.02 + 0.01
    });
  }
  
  // Add shockwave effect
  if(runtime.shockwavesEnabled) {
    shockwaves.push({
      x: player.x + player.width/2,
      y: player.y + player.height/2,
      radius: 0,
      maxRadius: 400 * runtime.advanced.shockwavesMul,
      speed: 15 + 5 * runtime.advanced.shockwavesMul,
      life: 1,
      color: "#f00"
    });
  }
  
  // Add screen shake
  if(runtime.screenShakeEnabled) {
    screenShake = 30 * runtime.advanced.screenShakeMul;
  }
  
  // Add screen flash
  screenFlash = 20;
  
  // Add screen dust particles
  if(runtime.distortionEnabled) {
    for(let i = 0; i < Math.floor(30 * runtime.advanced.screenDistortionMul); i++) {
      screenDust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 30 + Math.random() * 50,
        size: Math.random() * 3 + 1,
        color: `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`
      });
    }
  }
  
  // Add starburst effect
  if(runtime.starburstsEnabled) {
    createStarburst(player.x + player.width/2, player.y + player.height/2, 2);
  }
  
  // Add gravity waves - only when player is dropping
  if(runtime.gravityWavesEnabled && player.isDropping) {
    createGravityWave(player.x + player.width/2, player.y + player.height/2, 1.5);
  }
  
  // Add energy ripples
  if(runtime.energyRipplesEnabled) {
    createEnergyRipple(player.x + player.width/2, player.y + player.height/2, 1.5);
  }
  
  // Add pixel displacement
  if(runtime.pixelDisplacementEnabled) {
    createPixelDisplacement(player.x + player.width/2, player.y + player.height/2, 2);
  }
  
  // Add lens flare
  if(runtime.lensFlareEnabled) {
    createLensFlare(player.x + player.width/2, player.y + player.height/2, 2);
  }
}

// Extra death visuals
function createDeathImplosion(intensity = 1){
  if(!runtime.deathImplodeEnabled) return;
  const pieces = Math.max(8, Math.floor(18 * runtime.advanced.deathImplodeMul * intensity * ANIMATION_INTENSITY_BOOST));
  for(let i = 0; i < pieces; i++){
    const angle = Math.random() * Math.PI * 2;
    deathImplosions.push({
      x: player.x + player.width/2 + Math.cos(angle) * 80,
      y: player.y + player.height/2 + Math.sin(angle) * 80,
      tx: player.x + player.width/2,
      ty: player.y + player.height/2,
      life: 40,
      alpha: 1,
      color: `hsl(${Math.random()*40+180}, 90%, 60%)`
    });
  }
}

function updateDeathImplosions(){
  for(let i = deathImplosions.length - 1; i >= 0; i--){
    const p = deathImplosions[i];
    p.x += (p.tx - p.x) * 0.25;
    p.y += (p.ty - p.y) * 0.25;
    p.life--;
    p.alpha *= 0.9;
    if(p.life <= 0 || p.alpha <= 0.05){
      deathImplosions.splice(i,1);
    }
  }
}

function drawDeathImplosions(){
  if(deathImplosions.length === 0) return;
  ctx.save();
  for(let p of deathImplosions){
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x - cameraX - 4, p.y - cameraY - 4, 8, 8);
  }
  ctx.restore();
}

function createDeathGlitch(intensity = 1){
  if(!runtime.deathGlitchEnabled) return;
  const glitches = Math.max(6, Math.floor(14 * runtime.advanced.deathGlitchMul * intensity * ANIMATION_INTENSITY_BOOST));
  for(let i = 0; i < glitches; i++){
    deathGlitches.push({
      x: player.x + (Math.random() - 0.5) * 80,
      y: player.y + (Math.random() - 0.5) * 80,
      w: Math.random() * 30 + 10,
      h: Math.random() * 10 + 6,
      life: 24,
      alpha: 0.8,
      shift: (Math.random() - 0.5) * 25
    });
  }
}

function updateDeathGlitches(){
  for(let i = deathGlitches.length - 1; i >= 0; i--){
    const g = deathGlitches[i];
    g.shift *= -1;
    g.life--;
    g.alpha *= 0.9;
    if(g.life <= 0 || g.alpha <= 0.05){
      deathGlitches.splice(i, 1);
    }
  }
}

function drawDeathGlitches(){
  if(deathGlitches.length === 0) return;
  ctx.save();
  for(let g of deathGlitches){
    ctx.globalAlpha = g.alpha;
    ctx.fillStyle = "#0ff";
    ctx.fillRect(g.x - cameraX + g.shift, g.y - cameraY, g.w, g.h);
  }
  ctx.restore();
}

function createDeathVaporize(intensity = 1){
  if(!runtime.deathVaporizeEnabled) return;
  deathVapors.push({
    radius: 20,
    alpha: 0.9,
    life: 26,
    grow: (20 * runtime.advanced.deathVaporizeMul + 40) * intensity * ANIMATION_INTENSITY_BOOST,
    x: player.x + player.width/2,
    y: player.y + player.height/2
  });
}

function updateDeathVapors(){
  for(let i = deathVapors.length - 1; i >= 0; i--){
    const v = deathVapors[i];
    v.radius += v.grow * 0.08;
    v.life--;
    v.alpha *= 0.9;
    if(v.life <= 0 || v.alpha <= 0.02){
      deathVapors.splice(i, 1);
    }
  }
}

function drawDeathVapors(){
  if(deathVapors.length === 0) return;
  ctx.save();
  for(let v of deathVapors){
    const gradient = ctx.createRadialGradient(
      v.x - cameraX, v.y - cameraY, 0,
      v.x - cameraX, v.y - cameraY, v.radius
    );
    gradient.addColorStop(0, `rgba(255,255,255,${v.alpha})`);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(v.x - cameraX, v.y - cameraY, v.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

/* ---------- Lines background ---------- */
function addLine(){
  if(!runtime.linesEnabled) return;
  const chance = Math.min(1, 0.3 * runtime.effects.horizontalLinesMul); // Increased from 0.15 to 0.3
  if(Math.random() > chance) return;
  
  // Generate lines at fixed distance from player's current position
  // 20 blocks to the right of the player
  const playerRightEdge = player.x + player.width;
  const lineStartX = playerRightEdge + (BLOCK_SIZE * 20) + Math.random() * BLOCK_SIZE * 4;
  
  const moveY = Math.random() * (3.00129 - 0.700000) + 0.700000; // Random value between 0.700000~3.00129
  const sizeSpeedFactor = Math.random() * 0.9 + 0.1; // Random value between 0.1~1.0 (lower = larger/faster)
  const baseWidth = 100; // Base width
  const baseSpeed = player.speed * 2.5; // Base speed
  lines.push({ 
    x: lineStartX, 
    y: cameraY + (Math.random() - 0.5) * canvas.height * 3, // Expanded 3x height, centered on cameraY
    width: baseWidth / sizeSpeedFactor, // Lower factor = larger width
    speed: baseSpeed / sizeSpeedFactor, // Lower factor = faster speed
    passed: false,
    moveY: moveY // Store the parallax movement value
  });
}

/* ---------- Input handling ---------- */
// Track touch position for drag detection
let touchStartY = null;
let touchStartTime = null;
let isDraggingDown = false;

// Track if keys/touches are currently pressed to prevent re-triggering
let jumpKeyPressed = false;
let dropKeyPressed = false;
let mousePressed = false;
let touchPressed = false;

window.addEventListener('keydown', e => {
  keys[e.code] = true;
  if(["KeyW","ArrowUp","Space"].includes(e.code)) {
    if(!jumpKeyPressed) {
      jumpKeyPressed = true;
      jump();
    }
    // Update keyboard visualization
    const upKey = document.getElementById('keyboardKeyUp');
    if(upKey) upKey.classList.add('active');
  }
  if(["ArrowDown","KeyS"].includes(e.code)) {
    if(!dropKeyPressed) {
      dropKeyPressed = true;
      drop();
    }
    // Update keyboard visualization
    const downKey = document.getElementById('keyboardKeyDown');
    if(downKey) downKey.classList.add('active');
  }
});
window.addEventListener('keyup', e => { 
  keys[e.code] = false;
  if(["KeyW","ArrowUp","Space"].includes(e.code)) {
    jumpKeyPressed = false;
    // Update keyboard visualization
    const upKey = document.getElementById('keyboardKeyUp');
    if(upKey) upKey.classList.remove('active');
  }
  if(["ArrowDown","KeyS"].includes(e.code)) {
    dropKeyPressed = false;
    stopDrop();
    // Update keyboard visualization
    const downKey = document.getElementById('keyboardKeyDown');
    if(downKey) downKey.classList.remove('active');
  }
});
window.addEventListener('mousedown', () => {
  if(!mousePressed) {
    mousePressed = true;
    jump();
  }
});
window.addEventListener('mouseup', () => {
  mousePressed = false;
});
window.addEventListener('touchstart', (e) => {
  if(!touchPressed) {
    touchPressed = true;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
    isDraggingDown = false;
    // Allow tap to jump
    jump();
  }
});
window.addEventListener('touchmove', (e) => {
  if(touchStartY !== null && touchPressed) {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY;
    
    // If dragging down more than 30px, activate drop
    if(deltaY > 30 && !isDraggingDown) {
      isDraggingDown = true;
      drop();
    }
    // If dragging up, cancel drop
    else if(deltaY < -10 && isDraggingDown) {
      isDraggingDown = false;
      stopDrop();
    }
  }
});
window.addEventListener('touchend', () => {
  touchPressed = false;
  touchStartY = null;
  touchStartTime = null;
  isDraggingDown = false;
  stopDrop();
});

function jump(){
  if(!player.visible) return;
  if(cheats.infiniteJump || player.jumpsLeft > 0){
    player.vy = JUMP_SPEED;
    player.isDropping = false; // Stop dropping when jumping
    player.wasDroppingInAir = false; // Reset drop-in-air flag when jumping
    spawnParticlesEarly(player.x + player.width/2, player.y + player.height, 
                       player.jumpsLeft === 2 ? "jump" : "double", 
                       runtime.effects.jumpEffectMul);
    
    // Play jump sound
    if(player.jumpsLeft === 2) {
      playSound('firstJump');
    } else {
      playSound('secondJump');
    }
    
    if(!cheats.infiniteJump) player.jumpsLeft--;
    
    // Create velocity streaks
    createVelocityStreaks();
    
    // Create speed lines
    createSpeedLines();
    
    // Create wind particles
    createWindParticles();
    
    // Small screen shake on jump for high quality
    if(runtime.screenShakeEnabled && runtime.advanced.screenShakeMul > 0.5) {
      screenShake = 3 * runtime.advanced.screenShakeMul;
    }
  }
}

function drop(){
  if(!player.visible) return;
  if(!player.isDropping) {
    // Only play sound when starting to drop AND player is not on ground
    if(!player.onGround) {
      playSound('triggerDrop');
      player.wasDroppingInAir = true; // Mark that we started dropping while in the air
    }
  }
  player.isDropping = true;
  // Set downward velocity for fast drop (calculated as (player.speed/2)*5)
  const DROP_SPEED = (player.speed / 2) * 5;
  if(player.vy < DROP_SPEED) {
    player.vy = DROP_SPEED;
  }
}

function stopDrop(){
  player.isDropping = false;
}

/* ---------- OPTIMIZED MEMORY MANAGEMENT ---------- */
function cleanupOffScreenObjects() {
  // Keep first 25 blocks (index 0-24) regardless of position
  const MIN_KEEP_BLOCKS = 25;
  
  // Clean up platforms that are 6 blocks off-screen to the left, but keep first 25
  const deleteThreshold = cameraX - DELETE_OFFSET;
  
  for(let i = platforms.length - 1; i >= MIN_KEEP_BLOCKS; i--) { // Start from MIN_KEEP_BLOCKS
    if(platforms[i].x + platforms[i].width < deleteThreshold) {
      platforms.splice(i, 1);
    }
  }
  
  // Clean up spikes (keep spikes associated with first 25 blocks)
  for(let i = spikes.length - 1; i >= 0; i--) {
    if(spikes[i].x + spikes[i].width < deleteThreshold) {
      spikes.splice(i, 1);
    }
  }
  
  // Clean up gems (keep gems associated with first 25 blocks)
  for(let i = gems.length - 1; i >= 0; i--) {
    if(gems[i].x + 20 < deleteThreshold) {
      gems.splice(i, 1);
    }
  }
  
  // Clean up particles
  for(let i = particles.length - 1; i >= 0; i--) {
    if(particles[i].life <= 0 || particles[i].x < deleteThreshold) {
      particles.splice(i, 1);
    }
  }
  
  // Clean up lines that are far behind the player
  const lineDeleteThreshold = cameraX - DELETE_OFFSET * 2;
  for(let i = lines.length - 1; i >= 0; i--) {
    if(lines[i].x + lines[i].width < lineDeleteThreshold) {
      lines.splice(i, 1);
    }
  }
  
  // Clean up shockwaves
  for(let i = shockwaves.length - 1; i >= 0; i--) {
    if(shockwaves[i].life <= 0) {
      shockwaves.splice(i, 1);
    }
  }
  
  // Clean up screen dust
  for(let i = screenDust.length - 1; i >= 0; i--) {
    if(screenDust[i].life <= 0) {
      screenDust.splice(i, 1);
    }
  }
  
  // Clean up bloom particles
  for(let i = bloomParticles.length - 1; i >= 0; i--) {
    if(bloomParticles[i].life <= 0) {
      bloomParticles.splice(i, 1);
    }
  }
  
  // Clean up velocity streaks
  for(let i = velocityStreaks.length - 1; i >= 0; i--) {
    if(velocityStreaks[i].life <= 0) {
      velocityStreaks.splice(i, 1);
    }
  }
  
  // Clean up speed lines
  for(let i = speedLines.length - 1; i >= 0; i--) {
    if(speedLines[i].life <= 0) {
      speedLines.splice(i, 1);
    }
  }
  
  // Clean up wind particles
  for(let i = windParticles.length - 1; i >= 0; i--) {
    if(windParticles[i].life <= 0 || windParticles[i].x < deleteThreshold) {
      windParticles.splice(i, 1);
    }
  }
  
  // Clean up impact waves
  for(let i = impactWaves.length - 1; i >= 0; i--) {
    if(impactWaves[i].life <= 0) {
      impactWaves.splice(i, 1);
    }
  }
  
  // Clean up lens flares
  for(let i = lensFlares.length - 1; i >= 0; i--) {
    if(lensFlares[i].life <= 0) {
      lensFlares.splice(i, 1);
    }
  }
  
  // Clean up dynamic fog
  for(let i = dynamicFog.length - 1; i >= 0; i--) {
    if(dynamicFog[i].life <= 0) {
      dynamicFog.splice(i, 1);
    }
  }
  
  // Clean up heat distortions
  for(let i = heatDistortions.length - 1; i >= 0; i--) {
    if(heatDistortions[i].life <= 0) {
      heatDistortions.splice(i, 1);
    }
  }
  
  // Clean up starbursts
  for(let i = starbursts.length - 1; i >= 0; i--) {
    if(starbursts[i].life <= 0) {
      starbursts.splice(i, 1);
    }
  }
  
  // Clean up after images
  for(let i = afterImages.length - 1; i >= 0; i--) {
    if(afterImages[i].life <= 0) {
      afterImages.splice(i, 1);
    }
  }
  
  // Clean up gravity waves
  for(let i = gravityWaves.length - 1; i >= 0; i--) {
    if(gravityWaves[i].life <= 0) {
      gravityWaves.splice(i, 1);
    }
  }
  
  // Clean up energy ripples
  for(let i = energyRipples.length - 1; i >= 0; i--) {
    if(energyRipples[i].life <= 0) {
      energyRipples.splice(i, 1);
    }
  }
  
  // Clean up pixel displacements
  for(let i = pixelDisplacements.length - 1; i >= 0; i--) {
    if(pixelDisplacements[i].life <= 0) {
      pixelDisplacements.splice(i, 1);
    }
  }

  // Clean up new speed/background effects
  for(let i = starRush.length - 1; i >= 0; i--) {
    if(starRush[i].life <= 0 || starRush[i].x < deleteThreshold) {
      starRush.splice(i, 1);
    }
  }
  for(let i = nebulaDust.length - 1; i >= 0; i--) {
    if(nebulaDust[i].life <= 0 || nebulaDust[i].x < deleteThreshold) {
      nebulaDust.splice(i, 1);
    }
  }
  for(let i = warpTunnels.length - 1; i >= 0; i--) {
    if(warpTunnels[i].alpha <= 0.01) {
      warpTunnels.splice(i, 1);
    }
  }
  for(let i = boostFlares.length - 1; i >= 0; i--) {
    if(boostFlares[i].alpha <= 0.01) {
      boostFlares.splice(i, 1);
    }
  }
  for(let i = contrailJets.length - 1; i >= 0; i--) {
    if(contrailJets[i].alpha <= 0.01) {
      contrailJets.splice(i, 1);
    }
  }
  for(let i = edgeLightnings.length - 1; i >= 0; i--) {
    if(edgeLightnings[i].alpha <= 0.05) {
      edgeLightnings.splice(i, 1);
    }
  }
  for(let i = compressionRings.length - 1; i >= 0; i--) {
    if(compressionRings[i].alpha <= 0.02) {
      compressionRings.splice(i, 1);
    }
  }
  for(let i = deathImplosions.length - 1; i >= 0; i--) {
    if(deathImplosions[i].alpha <= 0.05) {
      deathImplosions.splice(i, 1);
    }
  }
  for(let i = deathGlitches.length - 1; i >= 0; i--) {
    if(deathGlitches[i].alpha <= 0.05) {
      deathGlitches.splice(i, 1);
    }
  }
  for(let i = deathVapors.length - 1; i >= 0; i--) {
    if(deathVapors[i].alpha <= 0.02) {
      deathVapors.splice(i, 1);
    }
  }
}

/* ---------- Fixed TICK SYSTEM (always 60 TPS internally) ---------- */
function gameTick() {
  // Skip if paused
  if(isPaused) return;
  
  // Continue running effects even when gameRunning is false (for death animations)
  // Only skip if game hasn't started yet
  if(!gameRunning && crashPieces.length === 0 && deathImplosions.length === 0 && 
     deathGlitches.length === 0 && deathVapors.length === 0) return;
  
  // Continue running effects even when player is dead, but skip player physics
  if(player.visible && gameRunning) {
    // Update background music volume periodically to ensure it stays current
    if(sounds.background && !sounds.background.paused) {
      const currentSettings = readSettings();
      const volumeSettings = currentSettings.volume || { master: 100, music: 50, soundEffects: 100 };
      const masterMul = volumeSettings.master / 100;
      const musicMul = volumeSettings.music / 100;
      sounds.background.volume = baseVolumes.background * masterMul * musicMul;
    }
    
    player.speed += 0.002;

    // color cycling
    colorLerp += 1/25/TICKS_PER_SECOND;
    if(colorLerp >= 1){
      colorIndex = (colorIndex + 1) % baseColors.length;
      nextColor = baseColors[(colorIndex+1) % baseColors.length];
      colorLerp = 0;
    }
    platformColor = lerpColor(baseColors[colorIndex], nextColor, colorLerp);

    // FIXED PHYSICS: No delta time scaling - runs at fixed 60 TPS
    player.y += player.vy * player.vertMultiplier;
    if(cheats.float && player.vy > 0) player.vy *= 0.5;
    
    // Apply drop speed if actively dropping (calculated as (player.speed/2)*5)
    const DROP_SPEED = (player.speed / 2) * 5;
    if(player.isDropping && player.vy < DROP_SPEED) {
      player.vy = Math.min(player.vy + GRAVITY * 3, DROP_SPEED); // Accelerate faster when dropping
    } else {
      player.vy += GRAVITY * player.vertMultiplier;
    }
    
    player.x += player.speed * player.horizMultiplier;

    // platform collision
    player.onGround = false;
    for(let plat of platforms){
      if(player.x + player.width > plat.x && player.x < plat.x + plat.width &&
         player.y + player.height > plat.y && player.y + player.height < plat.y + plat.height + player.vy + 1){
        // Allow dropping through platforms when actively dropping (only if moving down fast and dropThrough is enabled)
        const canDropThrough = cheats.dropThrough && player.isDropping && player.vy > GRAVITY * 2;
        if(player.vy >= 0 && !canDropThrough){
          player.y = plat.y - player.height;
          player.vy = 0;
          player.onGround = true;
          player.jumpsLeft = 2;
          
          // Play land sound only if player was actually dropping while in the air (not on ground)
          if(player.wasDroppingInAir) {
            playSound('land');
            player.wasDroppingInAir = false; // Reset flag after playing sound
          }
          
          player.isDropping = false; // Stop dropping when landing
          spawnParticlesEarly(player.x + player.width/2, player.y + player.height, "land", runtime.effects.walkEffectMul);
          
          // Create impact wave on landing
          if(runtime.impactWavesEnabled) {
            createImpactWave(player.x + player.width/2, player.y + player.height, 0.3);
          }
        }
      }
      if(!plat.passed && player.x > plat.x + plat.width){
        score += 1;
        plat.passed = true;
        
        // Pulse platform when passed
        if(runtime.platformPulseEnabled) {
          plat.pulsePhase += Math.PI;
        }
      }
    }

    if(player.y > canvas.height + 300){
      player.jumpsLeft = 1;
      tryDie();
    }

    // spikes
    for(let s of spikes){
      if(checkSpikeCollision(s)) tryDie(s);
      if(!s.passed && player.x > s.x + s.width){
        score += 1; s.passed = true;
      }
    }

    // gems
    for(let g of gems){
      if(!g.collected && player.x + player.width > g.x && player.x < g.x + g.size && player.y + player.height > g.y && player.y < g.y + g.size){
        score += 50; g.collected = true;
        playSound('collectGem');
        spawnParticlesEarly(g.x + g.size/2, g.y + g.size/2, "gem", runtime.effects.jumpEffectMul);
        
        // Add rotation to gem
        g.rotation += g.rotationSpeed || 0;
        
        // Create lens flare on gem collect
        if(runtime.lensFlareEnabled) {
          createLensFlare(g.x + g.size/2, g.y + g.size/2, 0.5);
        }
        
        // Create energy ripple on gem collect
        if(runtime.energyRipplesEnabled) {
          createEnergyRipple(g.x + g.size/2, g.y + g.size/2, 0.5);
        }
        
        // Screen shake on gem collect
        if(runtime.screenShakeEnabled) {
          screenShake = 8 * runtime.advanced.screenShakeMul;
        }
      }
    }

    // generation - generate 20 blocks ahead of screen
    const lastPlatform = platforms[platforms.length - 1];
    if(lastPlatform && lastPlatform.x < player.x + canvas.width + (20 * BLOCK_SIZE)){
      const out = generateBlockPlatform(lastPlatform.x, lastPlatform.y);
      lastPlatformX = out.x; lastPlatformY = out.y;
    }

    addLine();
  } else {
    // Continue color cycling even when dead for visual consistency
    colorLerp += 1/25/TICKS_PER_SECOND;
    if(colorLerp >= 1){
      colorIndex = (colorIndex + 1) % baseColors.length;
      nextColor = baseColors[(colorIndex+1) % baseColors.length];
      colorLerp = 0;
    }
    platformColor = lerpColor(baseColors[colorIndex], nextColor, colorLerp);
  }

  // Update all visual effects
  updateParallaxLayers();
  updateStarRush();
  updateNebulaDust();
  updateVelocityStreaks();
  updateSpeedLines();
  updateWindParticles();
  updateWarpTunnels();
  updateBoostFlares();
  updateContrailJets();
  updateEdgeLightnings();
  updateCompressionRings();
  updatePlatformPulse();
  updateImpactWaves();
  updateLensFlares();
  updateDynamicFog();
  updateStarbursts();
  updateAfterImages();
  updateGravityWaves();
  updateEnergyRipples();
  updatePixelDisplacements();
  updateDeathImplosions();
  updateDeathGlitches();
  updateDeathVapors();
  applyTimeDilation();

  // update crash pieces with enhanced physics
  for(let i=crashPieces.length-1;i>=0;i--){
    const p = crashPieces[i];
    p.vx += p.ax || 0;
    p.vy += (p.ay || 0) + GRAVITY * 0.3;
    p.x += p.vx; 
    p.y += p.vy;
    p.rotation += p.rotationSpeed || 0;
    p.scale -= p.scaleSpeed || 0;
    p.life--;
    
    // Check if piece is off-screen (screen borders) or below player death position by 6 blocks
    const screenLeft = cameraX - 50;
    const screenRight = cameraX + canvas.width + 50;
    const screenTop = cameraY - 50;
    const screenBottom = cameraY + canvas.height + 50;
    // Use stored death position if player is dead, otherwise use current position
    const playerYRef = playerDeathY !== null ? playerDeathY : player.y;
    const belowPlayerThreshold = playerYRef + BLOCK_SIZE * 6;
    
    const isOffScreen = p.x < screenLeft || p.x > screenRight || 
                       p.y < screenTop || p.y > screenBottom;
    const isBelowPlayer = p.y > belowPlayerThreshold;
    
    if(p.life <= 0 || p.scale <= 0 || isOffScreen || isBelowPlayer) {
      crashPieces.splice(i,1);
    }
  }

  // update particles with rotation
  for(let i=particles.length-1;i>=0;i--){
    const p = particles[i];
    p.x += p.vx; 
    p.y += p.vy;
    p.rotation += p.rotationSpeed || 0;
    p.life--;
    
    // Add trail to trail particles
    if(p.trail) {
      p.trail.push({x: p.x, y: p.y});
      if(p.trail.length > 5) p.trail.shift();
    }
    
    if(p.life <= 0) {
      particles.splice(i,1);
    }
  }
  
  // update lines array movement
  const cameraYDelta = cameraY - (lines.lastCameraY || cameraY);
  lines.lastCameraY = cameraY;
  
  for(let i=lines.length-1;i>=0;i--){
    const l = lines[i];
    // Lines move left very fast (relative to player speed)
    l.x -= l.speed; // Use the speed stored in the line object
    // Apply parallax movement based on camera movement
    if(l.moveY !== undefined) {
      l.y += cameraYDelta / (l.moveY * 2);
    }
  }
  
  // update shockwaves
  for(let i=shockwaves.length-1;i>=0;i--){
    const s = shockwaves[i];
    s.radius += s.speed;
    s.life = 1 - (s.radius / s.maxRadius);
    
    if(s.radius >= s.maxRadius) {
      shockwaves.splice(i,1);
    }
  }
  
  // update screen shake
  if(screenShake > 0) {
    screenShake *= 0.85;
    if(screenShake < 0.1) screenShake = 0;
  }
  
  // update screen flash
  if(screenFlash > 0) {
    screenFlash *= 0.9;
  }
  
  // update screen dust
  for(let i=screenDust.length-1;i>=0;i--){
    const d = screenDust[i];
    d.x += d.vx;
    d.y += d.vy;
    d.life--;
    
    if(d.life <= 0) {
      screenDust.splice(i,1);
    }
  }
  
  // update bloom particles
  for(let i=bloomParticles.length-1;i>=0;i--){
    const b = bloomParticles[i];
    b.life--;
    b.alpha *= 0.95;
    
    if(b.life <= 0 || b.alpha <= 0.01) {
      bloomParticles.splice(i,1);
    }
  }
  
  // MEMORY MANAGEMENT: Clean up off-screen objects
  cleanupOffScreenObjects();
}

/* ---------- Death / tryDie ---------- */
function tryDie(spike){
  if(!player.visible) return;
  if(cheats.invincible) return;
  if(player.onGround || player.vy > 0){
    player.visible = false;
    playerDeathY = player.y; // Store death position for crash piece cleanup
    if(spike) spike.hit = false;
    playSound('die');
    stopSound('background'); // Stop background music on death
    createCrashEarly(runtime.effects.dieEffectMul);
    createDeathImplosion(runtime.advanced.deathImplodeMul);
    createDeathGlitch(runtime.advanced.deathGlitchMul);
    createDeathVaporize(runtime.advanced.deathVaporizeMul);
    gameRunning = false; // This stops new game actions but effects continue
    if(score > bestScore){
      bestScore = Math.floor(score);
      localStorage.setItem('bestScore', bestScore);
    }
    setTimeout(()=> {
      document.getElementById('menu').style.display = 'flex';
      document.getElementById('bestScore').innerText = 'Best Score: ' + bestScore;
      stopSound('background'); // Stop background music when menu appears
    }, 1200);
  }
}

/* ---------- Rendering ---------- */
let lastRenderTime = performance.now();
let fps = 0;
let frameCount = 0;
let lastFpsDisplayUpdate = performance.now();

function draw(){
  // Apply screen shake
  const shakeX = screenShake > 0 ? (Math.random() - 0.5) * screenShake : 0;
  const shakeY = screenShake > 0 ? (Math.random() - 0.5) * screenShake : 0;
  
  ctx.save();
  ctx.translate(shakeX, shakeY);
  
  // Apply screen flash
  if(screenFlash > 0) {
    ctx.fillStyle = `rgba(255,255,255,${screenFlash * 0.05})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  // clear with potential distortion effect
  if(runtime.distortionEnabled && screenShake > 5) {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  
  // Draw screen dust distortion
  if(runtime.distortionEnabled && screenDust.length > 0) {
    for(let d of screenDust) {
      ctx.globalAlpha = d.life / 100;
      ctx.fillStyle = d.color;
      ctx.fillRect(d.x, d.y, d.size, d.size);
    }
    ctx.globalAlpha = 1;
  }
  
  // Apply time dilation effect
  if(runtime.timeDilationEnabled && timeScale < 1) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }

  // background (plain)
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Deep background particles
  drawNebulaDust();
  drawStarRush();

  // Draw parallax layers first (background)
  drawParallaxLayers();
  
  // Draw dynamic fog
  drawDynamicFog();

  // Warp tunnel rings
  drawWarpTunnels();

  // horizontal lines background
  if(runtime.linesEnabled){
    for(let l of lines){
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(l.x - cameraX, l.y - cameraY);
      ctx.lineTo(l.x + l.width - cameraX, l.y - cameraY);
      ctx.stroke();
      
      // Second parallel line from early version
      ctx.beginPath();
      ctx.moveTo(l.x - 5 - cameraX, l.y + 2 - cameraY);
      ctx.lineTo(l.x + l.width - 5 - cameraX, l.y + 2 - cameraY);
      ctx.stroke();
    }
  }

  // Draw velocity streaks
  drawVelocityStreaks();
  
  // Draw speed lines
  drawSpeedLines();
  
  // Draw wind particles
  drawWindParticles();

  // Jet contrails hugging the player path
  drawContrailJets();

  // Edge lightning flashes
  drawEdgeLightnings();

  // Screen-edge boost flare
  drawBoostFlares();

  // Draw ambient occlusion first (shadows)
  applyAmbientOcclusion();

  // Draw depth of field (blur distant objects)
  applyDepthOfField();

  // platforms
  for(let plat of platforms){
    // Texture should be ON when blockTextureMul > 0, OFF when = 0
    const useTexture = runtime.effects.blockTextureMul > 0;
    if(useTexture){
      // When texture is ON: diagonal gradient from top-left (color) to bottom-right (black)
      // Create diagonal gradient across the entire platform
      const grd = ctx.createLinearGradient(
        plat.x - cameraX, 
        plat.y - cameraY, 
        plat.x + plat.width - cameraX, 
        plat.y + plat.height - cameraY
      );
      grd.addColorStop(0, `rgb(${plat.color.r},${plat.color.g},${plat.color.b})`);
      grd.addColorStop(1, "rgb(0,0,0)");
      ctx.fillStyle = grd;
      if(runtime.glowEnabled){ ctx.shadowColor = `rgba(${plat.color.r},${plat.color.g},${plat.color.b},0.9)`; ctx.shadowBlur = plat === platforms[0] ? 12 : 0; }
      ctx.fillRect(plat.x - cameraX, plat.y - cameraY, plat.width, plat.height);
      ctx.shadowBlur = 0;
    } else {
      // When texture is OFF: full block is solid color (no gradient, no black)
      // Use platform pulse effect if enabled
      if(runtime.platformPulseEnabled) {
        const pulse = Math.sin(plat.pulsePhase) * 0.2 + 0.8;
        const r = Math.floor(plat.color.r * pulse);
        const g = Math.floor(plat.color.g * pulse);
        const b = Math.floor(plat.color.b * pulse);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      } else {
        ctx.fillStyle = `rgb(${plat.color.r},${plat.color.g},${plat.color.b})`;
      }
      if(runtime.glowEnabled){ ctx.shadowColor = `rgba(${plat.color.r},${plat.color.g},${plat.color.b},0.9)`; ctx.shadowBlur = plat === platforms[0] ? 12 : 0; }
      ctx.fillRect(plat.x - cameraX, plat.y - cameraY, plat.width, plat.height);
      ctx.shadowBlur = 0;
    }
  }

  // spikes
  for(let s of spikes){
    let pulse = Math.sin(globalTime*5 + s.x) * 5;
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(s.x - cameraX, s.baseY + s.height - cameraY + pulse);
    ctx.lineTo(s.x - cameraX + s.width/2, s.baseY - cameraY + pulse);
    ctx.lineTo(s.x - cameraX + s.width, s.baseY + s.height - cameraY + pulse);
    ctx.closePath();
    ctx.fill();
  }

  // gems
  for(let g of gems){
    if(g.collected) continue;
    g.floatOffset = g.floatOffset || Math.random()*Math.PI*2;
    let floatY = Math.sin(globalTime*3 + g.floatOffset) * 5;
    ctx.save();
    ctx.translate(g.x + g.size/2 - cameraX, g.y + g.size/2 - cameraY + floatY);
    ctx.rotate(g.rotation || 0);
    ctx.fillStyle = "white";
    if(runtime.glowEnabled){ ctx.shadowColor = "white"; ctx.shadowBlur = 20 + 10 * Math.sin(globalTime*5); }
    ctx.fillRect(-g.size/2, -g.size/2, g.size, g.size);
    ctx.restore();
    ctx.shadowBlur = 0;
  }

  // Draw heat distortion
  drawHeatDistortion();
  
  // Draw gravity waves
  drawGravityWaves();
  
  // Draw energy ripples
  drawEnergyRipples();
  
  // Draw pixel displacements
  drawPixelDisplacements();
  
  // Draw starbursts
  drawStarbursts();
  
  // Draw impact waves
  drawImpactWaves();

  // Draw compression rings blasting forward
  drawCompressionRings();
  
  // Draw lens flares
  drawLensFlares();
  
  // Draw after images
  drawAfterImages();

  /* ---------- TRAIL EFFECT ---------- */
  if(player.visible && runtime.trailEnabled){
    // Add new trail position
    trail.push({ 
      x: player.x, 
      y: player.y, 
      width: player.width, 
      height: player.height, 
      color: player.color,
      age: 0, // Start at age 0
      alpha: 0.6 // Start with some transparency
    });
    
    // Update ages and alpha of existing trails
    for(let i = 0; i < trail.length; i++) {
      const t = trail[i];
      t.age++;
      
      // Smooth fade over time - decrease alpha gradually
      // Start fading after 3 ticks, fade over 30 ticks total
      if(t.age > 3) {
        const fadeProgress = (t.age - 3) / 20;
        t.alpha = 0.6 * (1 - fadeProgress); // Linear fade from 0.6 to 0
      }
    }
    
    // Remove trails that are completely faded
    for(let i = trail.length - 1; i >= 0; i--) {
      if(trail[i].alpha <= 0.01) {
        trail.splice(i, 1);
      }
    }
    
    // Keep reasonable trail length for performance
    const maxTrailLen = Math.max(8, Math.floor(25 * runtime.effects.trailMul));
    if(trail.length > maxTrailLen) {
      // Remove oldest trails
      const toRemove = trail.length - maxTrailLen;
      trail.splice(0, toRemove);
    }
    
    // Draw trails with smooth fade
    for(let i = 0; i < trail.length; i++) {
      const t = trail[i];
      ctx.save();
      
      // Use pre-calculated alpha
      ctx.globalAlpha = t.alpha;
      
      if(runtime.glowEnabled){ 
        ctx.shadowColor = t.color; 
        ctx.shadowBlur = 15 * (t.alpha / 0.6); // Scale blur with alpha
      }
      
      ctx.fillStyle = t.color;
      ctx.fillRect(t.x - cameraX, t.y - cameraY, t.width, t.height);
      ctx.strokeStyle = t.color; 
      ctx.lineWidth = 4 * (t.alpha / 0.6); // Thinner stroke as it fades
      ctx.strokeRect(t.x - cameraX, t.y - cameraY, t.width, t.height);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  } else {
    trail = [];
  }

  // shockwaves
  if(runtime.shockwavesEnabled) {
    for(let s of shockwaves) {
      ctx.save();
      ctx.globalAlpha = s.life * 0.6;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(s.x - cameraX, s.y - cameraY, s.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
  }

  // Death-only overlays
  drawDeathVapors();
  drawDeathImplosions();
  drawDeathGlitches();

  // crash pieces with enhanced animation
  for(let p of crashPieces){
    ctx.save();
    ctx.translate(p.x - cameraX + p.size/2, p.y - cameraY + p.size/2);
    ctx.rotate(p.rotation);
    ctx.scale(p.scale, p.scale);
    ctx.globalAlpha = Math.min(1, p.life / 60);
    ctx.fillStyle = p.color;
    if(runtime.glowEnabled){ 
      ctx.shadowColor = p.color; 
      ctx.shadowBlur = 10 * (p.life / 120); 
    }
    ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
    ctx.restore();
  }

  // particles with rotation
  for(let p of particles){
    if(p.life > 0){
      ctx.save();
      if(p.rotation) {
        ctx.translate(p.x - cameraX + 2.5, p.y - cameraY + 2.5);
        ctx.rotate(p.rotation);
        ctx.translate(-2.5, -2.5);
      }
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / 50;
      ctx.fillRect(p.x - cameraX, p.y - cameraY, p.size || 5, p.size || 5);
      
      // Draw trail for trail particles
      if(p.trail && p.trail.length > 1) {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = p.life / 100;
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x - cameraX + 2.5, p.trail[0].y - cameraY + 2.5);
        for(let j = 1; j < p.trail.length; j++) {
          ctx.lineTo(p.trail[j].x - cameraX + 2.5, p.trail[j].y - cameraY + 2.5);
        }
        ctx.stroke();
      }
      
      ctx.restore();
    }
  }
  
  // bloom particles
  for(let b of bloomParticles){
    ctx.save();
    ctx.globalAlpha = b.alpha;
    ctx.fillStyle = b.color;
    if(runtime.glowEnabled){ 
      ctx.shadowColor = b.color; 
      ctx.shadowBlur = 30; 
    }
    ctx.beginPath();
    ctx.arc(b.x - cameraX, b.y - cameraY, b.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Apply color bleed effect
  applyColorBleed();
  
  // Apply radial blur effect
  applyRadialBlur();

  // player
  if(player.visible){
    if(runtime.glowEnabled){ ctx.shadowColor = "#0ff"; ctx.shadowBlur = 20; }
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - cameraX, player.y - cameraY, player.width, player.height);
    if(runtime.glowEnabled) ctx.shadowBlur = 0;
    ctx.strokeStyle = "#0ff"; ctx.lineWidth = 6; ctx.strokeRect(player.x - cameraX, player.y - cameraY, player.width, player.height);
  }
  
  // Apply screen tear effect
  applyScreenTear();
  
  ctx.restore(); // Restore from screen shake transform

  // HUD
  const hudScore = document.getElementById('scoreHUD');
  hudScore.innerText = 'Score: ' + Math.floor(score);
  
  // FPS counter
  frameCount++;
}

/* ---------- Main loop with proper FPS limiting ---------- */
let lastLoopTime = performance.now();
let accumulated = 0;

function mainLoop(now){
  requestAnimationFrame(mainLoop);
  if(!now) now = performance.now();
  
  const deltaMs = now - lastLoopTime;
  lastLoopTime = now;
  
  // Cap delta time to prevent large jumps (e.g., when tab is inactive)
  const cappedDeltaMs = Math.min(deltaMs, 100); // Max 100ms (10 FPS minimum)
  globalTime += cappedDeltaMs / 1000;

  // Calculate FPS
  fps = 1000 / Math.max(1, cappedDeltaMs);
  
  // Update FPS display only every 0.5 seconds
  if(now - lastFpsDisplayUpdate > 500){
    const fpsLabel = document.getElementById('fpsLabel');
    const maxFPSText = settings.maxFPS === 0 ? 'Unlimited' : settings.maxFPS;
    fpsLabel.innerText = `FPS: ${Math.round(fps)} / ${maxFPSText} — Quality: ${settings.qualityPreset}`;
    lastFpsDisplayUpdate = now;
    frameCount = 0;
  }

  // FPS limiting for rendering
  if(runtime.minFrameTime > 0){
    accumulated += cappedDeltaMs;
    if(accumulated < runtime.minFrameTime) return;
    accumulated = 0;
  }

  // Fixed tick system: always run at 60 TPS regardless of FPS
  // Use cappedDeltaMs to prevent large time jumps
  tickAccumulator += cappedDeltaMs;
  
  // Run exactly one game tick per frame when FPS is 60 or higher
  // When FPS is lower than 60, run multiple ticks to catch up
  // Only run ticks if not paused
  if(!isPaused) {
  const maxTicksPerFrame = 5; // Prevent spiral of death
  let ticksThisFrame = 0;
  
  while(tickAccumulator >= TICK_INTERVAL && ticksThisFrame < maxTicksPerFrame) {
    gameTick();
    tickAccumulator -= TICK_INTERVAL;
    ticksThisFrame++;
    }
  }
  
  // If we're running behind, reset accumulator to prevent lag buildup
  if(tickAccumulator > TICK_INTERVAL * 10) {
    tickAccumulator = TICK_INTERVAL; // Keep some buffer
  }

  // Camera smoothing - use actual delta time for smoothness
  // When player is dead, smoothly stop camera movement instead of following
  if(player.visible) {
    const targetCamX = player.x - 150;
    const targetCamY = player.y - canvas.height/2 + player.height*1.5;
    const smoothingFactor = 0.1 * (cappedDeltaMs / 16.67); // Adjust for frame rate
    cameraX = cameraX * (1 - smoothingFactor) + targetCamX * smoothingFactor;
    cameraY = cameraY * (1 - smoothingFactor) + targetCamY * smoothingFactor;
  } else {
    // Gradually stop camera movement when player is dead (keep current position)
    // Camera stays where it is, no further movement
  }

  // Draw (rendering at monitor refresh rate)
  draw();
}

/* ---------- Command handling (Ctrl+Shift+A) ---------- */
function openCommandPrompt() {
  const input = prompt("Enter command:");
  if(!input) return;
  const args = input.trim().split(/\s+/);
  const command = args[0];
  const root1 = args[1];
  const root2 = args[2];
  const root3 = args[3];

  if(command === '/die'){
    if(player.visible){
      player.visible = false;
      createCrashEarly(runtime.effects.dieEffectMul);
      gameRunning = false;
      if(score>bestScore){ bestScore = Math.floor(score); localStorage.setItem('bestScore', bestScore); }
      setTimeout(()=> { 
        document.getElementById('menu').style.display = 'flex';
        stopSound('background'); // Stop background music when menu appears
      }, 500);
    }
    return;
  }

  if(command === '/score'){
    if(root1 === 'set' && root2 !== undefined){
      const v = Number(root2);
      if(!isNaN(v)) score = v; else alert('Invalid value');
    } else if(root1 === 'add' && root2 !== undefined){
      const v = Number(root2);
      if(!isNaN(v)) score += v; else alert('Invalid value');
    } else alert('Usage: /score set <value>  OR  /score add <value>');
    return;
  }

  if(command === '/clear' && root1 === 'bestScore'){
    bestScore = 0;
    localStorage.setItem('bestScore', 0);
    document.getElementById('bestScore').innerText = 'Best Score: ' + bestScore;
    alert('Best score cleared.');
    return;
  }

  if(command === '/gamerule'){
    switch(root1){
      case 'infiniteJump': cheats.infiniteJump = (root2 === 'true'); break;
      case 'death': cheats.invincible = (root2 === 'false'); break;
      case 'dropThrough': cheats.dropThrough = (root2 === 'true'); break;
      case 'speed':
        if(!player.speedMultiplier) player.speedMultiplier = 1;
        if(root2 === 'reset') player.speedMultiplier = 1;
        if(root2 === 'add' && !isNaN(parseFloat(root3))) player.speedMultiplier += parseFloat(root3);
        if(root2 === 'set' && !isNaN(parseFloat(root3))) player.speedMultiplier = parseFloat(root3);
        break;
      default: alert('Unknown gamerule');
    }
    return;
  }

  if(command === '/tick'){
    if(root1 === 'rate' && root2 !== undefined){
      const rate = Number(root2);
      if(!isNaN(rate) && rate > 0){
        setTickRate(rate);
        alert(`Tick rate set to ${TICKS_PER_SECOND} TPS (3 × ${rate})`);
      } else {
        alert('Invalid tick rate. Must be a positive number.');
      }
    } else {
      alert('Usage: /tick rate <number>\nDefault: 20 (gives 60 TPS)');
    }
    return;
  }

  if(command === '/variable'){
    if(!root1){
      let accountLocal = localStorage.getItem('account') || 'player';
      let isCreator = ['bw55133@pausd.us','ikunbeautiful@gmail.com','benranwu@gmail.com'].includes(accountLocal);
      alert('test mode: '+testMode+'\n'+'infinite jump: '+cheats.infiniteJump+'\n'+'float: '+cheats.float+'\n'+'death: '+(!cheats.invincible)+'\n'+'score: '+score+'\n'+'best score: '+bestScore+'\n'+'account: '+(isCreator?'creator':'player')+'\n'+'player speed: '+player.speed+'\n'+'jump height: '+(-JUMP_SPEED));
    }
    return;
  }

  if(command === '/code'){
    if(root1 === '770709'){ testMode = !testMode; alert(testMode ? 'TEST MODE ON' : 'TEST MODE OFF'); }
    else if(root1 === 'lanseyaoji'){ if(player.speed < 5) player.speed = 5; else player.speed *= 1.5; alert('Player speed: '+player.speed); }
    else if(root1 === 'jinyumantang'){ gemEveryBlock = !gemEveryBlock; alert('Gem generation: '+gemEveryBlock); }
    else if(root1 === 'JiMmYiStHeCoOlEsTgUy|2025.letmecheat|L^UP++0U+L0UD'){
      if(account !== '𐀒𐀒𐀒'){ oldAccount = account; account = '𐀒𐀒𐀒'; } else account = oldAccount || 'player';
      alert('Account toggled: '+account);
    }
    return;
  }

  alert('Unknown command');
}

// Override browser Ctrl+Shift+A and add mobile button
window.addEventListener('keydown', function(e){
  // Prevent browser's Ctrl+Shift+A (Select All) from interfering
  if(e.ctrlKey && e.shiftKey && e.code === 'KeyA'){
    e.preventDefault();
    openCommandPrompt();
    return false;
  }
});

// Mobile command button
document.getElementById('mobileCommandBtn').addEventListener('click', openCommandPrompt);

// How to Play button
document.getElementById('howToPlayBtn').addEventListener('click', () => {
  playSound('menuClick');
  document.getElementById('howToPlayModal').classList.add('show');
});

// Close modal when clicking outside (optional)
document.getElementById('howToPlayModal').addEventListener('click', (e) => {
  if(e.target.id === 'howToPlayModal') {
    document.getElementById('howToPlayModal').classList.remove('show');
  }
});

/* ---------- Pause Screen Functions ---------- */
function pauseMusicForPause() {
  if(!soundEnabled) return;
  pausedMusicState = {
    background: !!(sounds.background && !sounds.background.paused),
    speedUp: !!(sounds.speedUp && !sounds.speedUp.paused),
    speedUpLoop: !!(sounds.speedUpLoop && !sounds.speedUpLoop.paused)
  };
  if(pausedMusicState.background && sounds.background) sounds.background.pause();
  if(pausedMusicState.speedUp && sounds.speedUp) sounds.speedUp.pause();
  if(pausedMusicState.speedUpLoop && sounds.speedUpLoop) sounds.speedUpLoop.pause();
}

function resumeMusicAfterPause() {
  if(!soundEnabled || !pausedMusicState) return;
  if(pausedMusicState.speedUp && sounds.speedUp) {
    sounds.speedUp.play().catch(()=>{});
  } else if(pausedMusicState.speedUpLoop && sounds.speedUpLoop) {
    sounds.speedUpLoop.play().catch(()=>{});
  } else if(pausedMusicState.background && sounds.background) {
    sounds.background.play().catch(()=>{});
  }
  pausedMusicState = null;
}

function pauseGame() {
  if(!gameRunning || isPaused) return; // Don't pause if game isn't running or already paused
  isPaused = true;
  pauseMusicForPause();
  const pauseScreen = document.getElementById('pauseScreen');
  if(pauseScreen) {
    pauseScreen.classList.add('show');
  }
}

function unpauseGame() {
  if(!isPaused) return; // Don't unpause if not paused
  playSound('menuClick');
  isPaused = false;
  resumeMusicAfterPause(); // Resume music that was paused
  const pauseScreen = document.getElementById('pauseScreen');
  if(pauseScreen) {
    pauseScreen.classList.remove('show');
  }
}

function goToMainMenu() {
  playSound('menuClick');
  stopSound('background'); // Stop background music when going to menu
  
  // Check if current score is higher than best score
  if(score > bestScore) {
    // Show best score choice modal
    const modal = document.getElementById('bestScoreModal');
    const scoreValue = document.getElementById('bestScoreValue');
    if(modal && scoreValue) {
      scoreValue.textContent = Math.floor(score);
      modal.classList.add('show');
      
      // Hide pause screen
      const pauseScreen = document.getElementById('pauseScreen');
      if(pauseScreen) {
        pauseScreen.classList.remove('show');
      }
      
      // Wait for user choice - don't proceed yet
      return;
    }
  }
  
  // If no new high score or modal not available, proceed normally
  proceedToMainMenu();
}

function proceedToMainMenu() {
  isPaused = false;
  gameRunning = false;
  const pauseScreen = document.getElementById('pauseScreen');
  if(pauseScreen) {
    pauseScreen.classList.remove('show');
  }
  const modal = document.getElementById('bestScoreModal');
  if(modal) {
    modal.classList.remove('show');
  }
  document.getElementById('menu').style.display = 'flex';
  document.getElementById('bestScore').innerText = 'Best Score: ' + bestScore;
  resetWorld();
}

// Pause screen button handlers
document.getElementById('continueBtn').addEventListener('click', unpauseGame);
document.getElementById('mainMenuBtn').addEventListener('click', goToMainMenu);

// Best score modal button handlers
document.getElementById('keepBestScoreBtn').addEventListener('click', () => {
  bestScore = Math.floor(score);
  localStorage.setItem('bestScore', bestScore);
  proceedToMainMenu();
});

document.getElementById('dontKeepBestScoreBtn').addEventListener('click', () => {
  proceedToMainMenu();
});

// ESC key to pause/unpause
window.addEventListener('keydown', (e) => {
  if(e.code === 'Escape' && gameRunning) {
    if(isPaused) {
      unpauseGame();
    } else {
      pauseGame();
    }
  }
});

// Page Visibility API - pause when user switches tabs/windows
document.addEventListener('visibilitychange', () => {
  if(document.hidden && gameRunning && !isPaused) {
    pauseGame();
  }
});

/* ---------- Start / Reset Game ---------- */
function startGame(){
  // Enable audio on first user interaction (start button click)
  enableAudio();
  
  playSound('startChooseVersion');
  document.getElementById('menu').style.display = 'none';
  resetWorld();
  gameRunning = true;
  isPaused = false; // Ensure not paused when starting
  player.visible = true;
  tickAccumulator = 0; // Reset tick accumulator on restart
  lastLoopTime = performance.now(); // Reset time tracking
  // Start background music
  playSound('background');
}

document.getElementById('startBtn').addEventListener('click', startGame);

/* ---------- Fullscreen button ---------- */
document.getElementById('fullscreenBtn').addEventListener('click', () => {
  playSound('menuClick');
  if (!document.fullscreenElement) {
    // Enter fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
});

// Update button text based on fullscreen state
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
document.addEventListener('msfullscreenchange', updateFullscreenButton);

function updateFullscreenButton() {
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  if (fullscreenBtn) {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      fullscreenBtn.textContent = 'EXIT FULLSCREEN';
    } else {
      fullscreenBtn.textContent = 'FULLSCREEN';
    }
  }
}

/* ---------- Settings button ---------- */
document.getElementById('settingsBtn').addEventListener('click', () => {
  playSound('menuClick');
  fetch('settings.html', { method: 'HEAD' }).then(resp => {
    if(resp.ok) {
      window.location.href = 'settings.html';
    } else {
      alert('settings.html not found');
    }
  }).catch(()=> {
    alert('settings.html not found');
  });
});

// Detect if device has keyboard
function hasKeyboard() {
  // Check if device has keyboard by testing if it's not a touch-only device
  // or by checking if media query matches
  if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
    return true;
  }
  // Fallback: check if we can detect keyboard events reliably
  return !('ontouchstart' in window) || window.navigator.maxTouchPoints === 0;
}

// Initialize keyboard visualization
function initKeyboardVisualization() {
  updateKeyboardVisualization();
}

// Update keyboard visualization visibility when settings change
function updateKeyboardVisualization() {
  const keyboardViz = document.getElementById('keyboardVisualization');
  if (!keyboardViz) return;
  
  const hasKb = hasKeyboard();
  const showKeyboard = settings.showKeyboard !== undefined ? settings.showKeyboard : true;
  
  if (hasKb && showKeyboard) {
    keyboardViz.style.display = 'flex';
  } else {
    keyboardViz.style.display = 'none';
  }
}

/* ---------- Game initialization ---------- */
if(!localStorage.getItem(LS_KEY)){
  writeSettings(defaultSettings);
  settings = readSettings();
  applySettings(settings);
} else {
  settings = readSettings();
  applySettings(settings);
}

// Initialize volumes after settings are loaded
updateSoundVolumes();

// init ground/platforms and show menu
resetWorld();
document.getElementById('bestScore').innerText = 'Best Score: ' + bestScore;
document.getElementById('menu').style.display = 'flex';
// Stop background music if it's playing
stopSound('background');

// Initialize keyboard visualization
initKeyboardVisualization();

// start the RAF loop
requestAnimationFrame(mainLoop);