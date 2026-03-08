/* ===========================
   BRIDD JUMP - game.js
   - Complete game logic separated from index.html
   - Memory management: removes off-screen blocks
   - Improved trail effect with 3 tick delay before fade
   - Optimized performance
   - Enhanced death animation
   =========================== */

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
const TICKS_PER_SECOND = 60;
const TICK_INTERVAL = 1000 / TICKS_PER_SECOND;
const DELETE_OFFSET = BLOCK_SIZE * 6; // Delete blocks 6 blocks off-screen

/* Player object blueprint */
let player = {
  x: 100, y: 0, width: 50, height: 50, vy: 0, speed: 11,
  color: "#0ff", hitboxScale: 0.6, jumpsLeft: 2, onGround:false, visible:true,
  horizMultiplier:1, vertMultiplier:1, accountEmail: "player@example.com"
};

/* world arrays */
let platforms = [], spikes = [], gems = [], particles = [], crashPieces = [], trail = [], lines = [];
let shockwaves = [], screenShake = 0, screenFlash = 0, screenDust = [], bloomParticles = [];

/* gameplay */
let keys = {}, score = 0, bestScore = localStorage.getItem("bestScore") ? parseInt(localStorage.getItem("bestScore")) : 0;
let gameRunning = false;
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
let cheats = { float:false, invincible:false, infiniteJump:false };

/* ---------- Settings loading from localStorage ---------- */
const LS_KEY = "briddSettings";

const defaultSettings = {
  maxFPS: 0, // 0 => unlimited
  qualityPreset: "Extreme+",
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
    screenDistortion: 100
  }
};

const qualityPresets = {
  "Potato":      { blockTexture:1, jumpEffect:0, walkEffect:0, dieEffect:0, horizontalLines:0, trail:0, glow:0, lines:false, shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0 },
  "Low":         { blockTexture:1, jumpEffect:5, walkEffect:0, dieEffect:0, horizontalLines:0, trail:0, glow:0, lines:false, shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0 },
  "Medium":      { blockTexture:1, jumpEffect:10, walkEffect:0, dieEffect:10, horizontalLines:0, trail:0, glow:0, lines:false, shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0 },
  "Medium+":     { blockTexture:1, jumpEffect:15, walkEffect:15, dieEffect:15, horizontalLines:0, trail:0, glow:0, lines:false, shockwaves:0, screenShake:0, bloomParticles:0, particleTrails:0, screenDistortion:0 },
  "High":        { blockTexture:1, jumpEffect:15, walkEffect:15, dieEffect:15, horizontalLines:15, trail:0, glow:0, lines:true, shockwaves:10, screenShake:10, bloomParticles:0, particleTrails:0, screenDistortion:0 },
  "High+":       { blockTexture:1, jumpEffect:33, walkEffect:33, dieEffect:33, horizontalLines:33, trail:0, glow:0, lines:true, shockwaves:25, screenShake:25, bloomParticles:10, particleTrails:10, screenDistortion:0 },
  "Extreme":     { blockTexture:1, jumpEffect:60, walkEffect:60, dieEffect:60, horizontalLines:60, trail:0, glow:0, lines:true, shockwaves:50, screenShake:50, bloomParticles:25, particleTrails:25, screenDistortion:10 },
  "Extreme+":    { blockTexture:1, jumpEffect:64, walkEffect:64, dieEffect:64, horizontalLines:64, trail:1, glow:1, lines:true, shockwaves:75, screenShake:75, bloomParticles:50, particleTrails:50, screenDistortion:25 },
  "Ultra":       { blockTexture:1, jumpEffect:100, walkEffect:100, dieEffect:100, horizontalLines:100, trail:0, glow:1, lines:true, shockwaves:100, screenShake:100, bloomParticles:75, particleTrails:75, screenDistortion:50 },
  "Ultra+":      { blockTexture:1, jumpEffect:120, walkEffect:120, dieEffect:120, horizontalLines:120, trail:1, glow:1, lines:true, shockwaves:120, screenShake:120, bloomParticles:100, particleTrails:100, screenDistortion:75 },
  "Ultra++":     { blockTexture:1, jumpEffect:200, walkEffect:200, dieEffect:200, horizontalLines:200, trail:1, glow:1.5, lines:true, shockwaves:150, screenShake:150, bloomParticles:150, particleTrails:150, screenDistortion:100 },
  "Highest":     { blockTexture:1, jumpEffect:200, walkEffect:200, dieEffect:200, horizontalLines:200, trail:1, glow:2, lines:true, shockwaves:200, screenShake:200, bloomParticles:200, particleTrails:200, screenDistortion:200 }

};

function readSettings(){
  try {
    let raw = localStorage.getItem(LS_KEY);
    if(!raw) return JSON.parse(JSON.stringify(defaultSettings));
    const parsed = JSON.parse(raw);
    const merged = JSON.parse(JSON.stringify(defaultSettings));
    if(parsed.maxFPS !== undefined) merged.maxFPS = parsed.maxFPS;
    if(parsed.qualityPreset) merged.qualityPreset = parsed.qualityPreset;
    if(parsed.quality) merged.quality = {...merged.quality, ...parsed.quality};
    if(parsed.advanced) merged.advanced = {...merged.advanced, ...parsed.advanced};
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
    screenDistortionMul: 1
  },
  glowEnabled: true,
  linesEnabled: true,
  trailEnabled: true,
  shockwavesEnabled: true,
  screenShakeEnabled: true,
  bloomEnabled: true,
  particleTrailsEnabled: true,
  distortionEnabled: true
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

  const preset = qualityPresets[settings.qualityPreset] || {};
  const pct = (v) => (Number(v) || 0) / 100;

  // FIXED: Texture should be OFF when value is 0, ON when value is 1 or more
  runtime.effects.blockTextureMul = pct(settings.quality.blockTexture) || (preset.blockTexture >= 1 ? 1 : 0);
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

  // save canonical
  writeSettings(settings);
}

/* initial apply */
applySettings(settings);

/* ---------- World initialization & reset ---------- */
let lastPlatformX = 0, lastPlatformY = 0;

function resetWorld(){
  // clear arrays
  platforms = [];
  spikes = [];
  gems = [];
  particles = [];
  crashPieces = [];
  trail = [];
  lines = [];
  shockwaves = [];
  screenDust = [];
  bloomParticles = [];
  
  screenShake = 0;
  screenFlash = 0;

  // reset player
  player.x = 100;
  player.y = canvas.height/2 - player.height;
  player.vy = 0;
  player.speed = 11;
  player.jumpsLeft = 2;
  player.onGround = false;
  player.visible = true;
  player.horizMultiplier = 1; player.vertMultiplier = 1;

  // reset score and color cycling
  score = 0; colorLerp = 0; globalTime = 0;
  colorIndex = 0; platformColor = {...baseColors[0]}; nextColor = baseColors[1];

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
  
  // Generate additional initial platforms to ensure player has ground
  const initialBlocksNeeded = 25;
  while(platforms.length < initialBlocksNeeded) {
    const out = generateBlockPlatform(lastPlatformX, lastPlatformY);
    lastPlatformX = out.x;
    lastPlatformY = out.y;
  }
}

/* ---------- Platform generator ---------- */
function generateBlockPlatform(lastX, lastY){
  let blockCount = Math.floor(Math.random()*8)+1;
  if(Math.random()<0.7) blockCount = Math.min(blockCount,Math.floor(Math.random()*3+1));
  let gap = Math.floor(Math.random()*5+3) * BLOCK_SIZE;
  let x = lastX + gap;
  let y = lastY + (Math.floor(Math.random()*3)-1) * BLOCK_SIZE;
  y = Math.max(BLOCK_SIZE, Math.min(canvas.height - 3*BLOCK_SIZE, y));

  for(let i=0;i<blockCount;i++){
    platforms.push({ x: x + i*BLOCK_SIZE, y, width: BLOCK_SIZE, height: BLOCK_SIZE, color: {...platformColor}, passed:false });
    if(Math.random() < 0.2){
      spikes.push({ x: x + i*BLOCK_SIZE + BLOCK_SIZE*0.2, y: y - BLOCK_SIZE + BLOCK_SIZE*0.2, width: BLOCK_SIZE*0.6, height: BLOCK_SIZE*0.6, baseY: y - BLOCK_SIZE + BLOCK_SIZE*0.2, hit:true, passed:false });
    }
  }

  // gems
  for(let i=0;i<blockCount;i++){
    if(Math.random() < 0.1 || gemEveryBlock){
      let gemX = x + i*BLOCK_SIZE + BLOCK_SIZE/4;
      let gemY = y - BLOCK_SIZE*1.5;
      let safe = true;
      for(let s of spikes){ if(Math.abs(gemX - s.x) < BLOCK_SIZE*2) safe=false; }
      if(safe) gems.push({ x: gemX, y: gemY, size: 20, collected:false, floatOffset: Math.random()*Math.PI*2 });
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

/* ---------- ENHANCED PARTICLE EFFECTS ---------- */
function spawnParticlesEarly(x, y, type, amountMul = 1) {
  const color = type === "jump" ? "#0ff" : type === "double" ? "#ff0" : "#fff";
  const baseCount = type === "land" ? 10 : 15;
  const count = Math.max(0, Math.floor(baseCount * amountMul * runtime.effects.jumpEffectMul));
  
  for(let i = 0; i < count; i++) {
    const vx = (Math.random() - 0.5) * (type === "land" ? 8 : 5);
    const vy = (Math.random() - (type === "land" ? 1 : 1.5)) * (type === "land" ? 4 : 5);
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
  
  lines.push({ 
    x: lineStartX, 
    y: Math.random() * canvas.height, 
    width: Math.random() * 150 + 50, // Wider lines
    speed: player.speed * 2.5, // Faster movement
    passed: false 
  });
}

/* ---------- Input handling ---------- */
window.addEventListener('keydown', e => {
  keys[e.code] = true;
  if(["KeyW","ArrowUp","Space"].includes(e.code)) jump();
});
window.addEventListener('keyup', e => { keys[e.code] = false; });
window.addEventListener('mousedown', () => jump());
window.addEventListener('touchstart', () => jump());

function jump(){
  if(!player.visible) return;
  if(cheats.infiniteJump || player.jumpsLeft > 0){
    player.vy = JUMP_SPEED;
    spawnParticlesEarly(player.x + player.width/2, player.y + player.height, 
                       player.jumpsLeft === 2 ? "jump" : "double", 
                       runtime.effects.jumpEffectMul);
    if(!cheats.infiniteJump) player.jumpsLeft--;
    
    // Small screen shake on jump for high quality
    if(runtime.screenShakeEnabled && runtime.advanced.screenShakeMul > 0.5) {
      screenShake = 3 * runtime.advanced.screenShakeMul;
    }
  }
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
}

/* ---------- Fixed TICK SYSTEM (always 60 TPS internally) ---------- */
function gameTick() {
  if(!gameRunning || !player.visible) return;
  
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
  player.vy += GRAVITY * player.vertMultiplier;
  player.x += player.speed * player.horizMultiplier;

  // platform collision
  player.onGround = false;
  for(let plat of platforms){
    if(player.x + player.width > plat.x && player.x < plat.x + plat.width &&
       player.y + player.height > plat.y && player.y + player.height < plat.y + plat.height + player.vy + 1){
      if(player.vy >= 0){
        player.y = plat.y - player.height;
        player.vy = 0;
        player.onGround = true;
        player.jumpsLeft = 2;
        spawnParticlesEarly(player.x + player.width/2, player.y + player.height, "land", runtime.effects.walkEffectMul);
      }
    }
    if(!plat.passed && player.x > plat.x + plat.width){
      score += 1;
      plat.passed = true;
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
      spawnParticlesEarly(g.x + g.size/2, g.y + g.size/2, "double", runtime.effects.jumpEffectMul);
      
      // Screen shake on gem collect
      if(runtime.screenShakeEnabled) {
        screenShake = 8 * runtime.advanced.screenShakeMul;
      }
    }
  }

  // generation
  const lastPlatform = platforms[platforms.length - 1];
  if(lastPlatform && lastPlatform.x < player.x + canvas.width){
    const out = generateBlockPlatform(lastPlatform.x, lastPlatform.y);
    lastPlatformX = out.x; lastPlatformY = out.y;
  }

  addLine();

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
    
    if(p.life <= 0 || p.y > canvas.height + 200 || p.scale <= 0) {
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
  for(let i=lines.length-1;i>=0;i--){
    const l = lines[i];
    // Lines move left very fast (relative to player speed)
    l.x -= l.speed; // Use the speed stored in the line object
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
    if(spike) spike.hit = false;
    createCrashEarly(runtime.effects.dieEffectMul);
    gameRunning = false;
    if(score > bestScore){
      bestScore = Math.floor(score);
      localStorage.setItem('bestScore', bestScore);
    }
    setTimeout(()=> {
      document.getElementById('menu').style.display = 'flex';
      document.getElementById('bestScore').innerText = 'Best Score: ' + bestScore;
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

  // background (plain)
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0,canvas.width,canvas.height);

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

  // platforms
  for(let plat of platforms){
    // FIXED: Texture should be ON when blockTextureMul > 0, OFF when = 0
    const useTexture = runtime.effects.blockTextureMul > 0;
    if(useTexture){
      for(let y = plat.y; y < canvas.height; y += BLOCK_SIZE){
        let dark = (y === plat.y) ? 1 : 0.3;
        const grd = ctx.createLinearGradient(plat.x - cameraX, y - cameraY, plat.x + plat.width - cameraX, y + BLOCK_SIZE - cameraY);
        grd.addColorStop(0, `rgba(${Math.floor(plat.color.r*dark)},${Math.floor(plat.color.g*dark)},${Math.floor(plat.color.b*dark)},1)`);
        grd.addColorStop(1, "rgba(0,0,0,1)");
        ctx.fillStyle = grd;
        if(runtime.glowEnabled){ ctx.shadowColor = `rgba(${plat.color.r},${plat.color.g},${plat.color.b},0.9)`; ctx.shadowBlur = plat === platforms[0] ? 12 : 0; }
        ctx.fillRect(plat.x - cameraX, y - cameraY, plat.width, BLOCK_SIZE);
        ctx.shadowBlur = 0;
      }
    } else {
      ctx.fillStyle = `rgb(${plat.color.r},${plat.color.g},${plat.color.b})`;
      ctx.fillRect(plat.x - cameraX, plat.y - cameraY, plat.width, plat.height);
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
    ctx.rotate(Math.PI/4);
    ctx.fillStyle = "white";
    if(runtime.glowEnabled){ ctx.shadowColor = "white"; ctx.shadowBlur = 20 + 10 * Math.sin(globalTime*5); }
    ctx.fillRect(-g.size/2, -g.size/2, g.size, g.size);
    ctx.restore();
    ctx.shadowBlur = 0;
  }

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

  // player
  if(player.visible){
    if(runtime.glowEnabled){ ctx.shadowColor = "#0ff"; ctx.shadowBlur = 20; }
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - cameraX, player.y - cameraY, player.width, player.height);
    if(runtime.glowEnabled) ctx.shadowBlur = 0;
    ctx.strokeStyle = "#0ff"; ctx.lineWidth = 6; ctx.strokeRect(player.x - cameraX, player.y - cameraY, player.width, player.height);
  }
  
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
  const maxTicksPerFrame = 5; // Prevent spiral of death
  let ticksThisFrame = 0;
  
  while(tickAccumulator >= TICK_INTERVAL && ticksThisFrame < maxTicksPerFrame) {
    gameTick();
    tickAccumulator -= TICK_INTERVAL;
    ticksThisFrame++;
  }
  
  // If we're running behind, reset accumulator to prevent lag buildup
  if(tickAccumulator > TICK_INTERVAL * 10) {
    tickAccumulator = TICK_INTERVAL; // Keep some buffer
  }

  // Camera smoothing - use actual delta time for smoothness
  const targetCamX = player.x - 150;
  const targetCamY = player.y - canvas.height/2 + player.height*1.5;
  const smoothingFactor = 0.1 * (cappedDeltaMs / 16.67); // Adjust for frame rate
  cameraX = cameraX * (1 - smoothingFactor) + targetCamX * smoothingFactor;
  cameraY = cameraY * (1 - smoothingFactor) + targetCamY * smoothingFactor;

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
      setTimeout(()=> { document.getElementById('menu').style.display = 'flex'; }, 500);
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

/* ---------- Start / Reset Game ---------- */
function startGame(){
  document.getElementById('menu').style.display = 'none';
  resetWorld();
  gameRunning = true;
  player.visible = true;
  tickAccumulator = 0; // Reset tick accumulator on restart
  lastLoopTime = performance.now(); // Reset time tracking
}

document.getElementById('startBtn').addEventListener('click', startGame);

/* ---------- Settings button ---------- */
document.getElementById('settingsBtn').addEventListener('click', () => {
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

/* ---------- Game initialization ---------- */
if(!localStorage.getItem(LS_KEY)){
  writeSettings(defaultSettings);
  settings = readSettings();
  applySettings(settings);
} else {
  settings = readSettings();
  applySettings(settings);
}

// init ground/platforms and show menu
resetWorld();
document.getElementById('bestScore').innerText = 'Best Score: ' + bestScore;
document.getElementById('menu').style.display = 'flex';

// start the RAF loop
requestAnimationFrame(mainLoop);
