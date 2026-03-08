const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const BLOCK_SIZE=50;
const JUMP_SPEED=-15;
const GRAVITY=0.7;

let keys={}, score=0, bestScore=0, lastTime=0, gameStarted=false, animationId=null;
let crashPieces=[], particles=[];
let rainbowColors=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]; 
let rainbowIndex=0, colorTimer=0, platformColor=rainbowColors[0];
let scoreTimer=0;

let player={
    x:100, y:0, width:50, height:50,
    color:"#0ff", vy:0, speed:10,
    hitboxScale:0.6, jumpsLeft:1, onGround:false
};

let platforms=[], spikes=[], lines=[];

// Input
window.addEventListener("keydown", e=>{ if(["KeyW","ArrowUp","Space"].includes(e.code)) jump(); keys[e.code]=true; });
window.addEventListener("keyup", e=>keys[e.code]=false);
window.addEventListener("mousedown", ()=>jump());
window.addEventListener("touchstart", ()=>jump());

function jump(){
    if(player.jumpsLeft>0){
        player.vy=JUMP_SPEED;
        spawnParticles(player.x+player.width/2, player.y+player.height, player.jumpsLeft===2?"jump":"double");
        player.jumpsLeft--;
    }
}

function resetGame(){
    if(animationId) cancelAnimationFrame(animationId);

    score=0; scoreTimer=0; colorTimer=0;
    player.x=100; 
    player.y=canvas.height/2-player.height; 
    player.vy=0; 
    player.speed=10;
    player.jumpsLeft=1; 
    player.onGround=false;

    platforms=[]; spikes=[]; crashPieces=[]; particles=[]; lines=[];
    rainbowIndex=0; platformColor=rainbowColors[0];

    // Starting platform
    platforms.push({x:0,y:player.y+player.height,width:BLOCK_SIZE*3,height:BLOCK_SIZE,color:platformColor});
    lastPlatformX=0;
    lastPlatformY=player.y+player.height;

    lastTime=performance.now();
    hideStartScreen();
    gameStarted=true;
    update(lastTime);
}

function generateBlockPlatform(lastX,lastY){
    let blockCount=Math.floor(Math.random()*2+1); // shorter platforms
    let gap=Math.floor(Math.random()*5+3)*BLOCK_SIZE; // larger gaps
    let x=lastX+gap;
    let y=lastY+(Math.floor(Math.random()*3)-1)*BLOCK_SIZE;
    y=Math.max(BLOCK_SIZE, Math.min(canvas.height-3*BLOCK_SIZE, y));

    for(let i=0;i<blockCount;i++){
        platforms.push({x:x+i*BLOCK_SIZE,y,width:BLOCK_SIZE,height:BLOCK_SIZE,color:platformColor});
        if(Math.random()<0.05) spikes.push({x:x+i*BLOCK_SIZE+BLOCK_SIZE*0.2,y:y-BLOCK_SIZE+BLOCK_SIZE*0.2,width:BLOCK_SIZE*0.6,height:BLOCK_SIZE*0.6});
    }
    return {x:x+blockCount*BLOCK_SIZE,y};
}

function checkSpikeCollision(spike){
    const hbW=player.width*player.hitboxScale;
    const hbH=player.height*player.hitboxScale;
    const hbX=player.x+(player.width-hbW)/2;
    const hbY=player.y+(player.height-hbH)/2;
    return hbX+hbW>spike.x && hbX<spike.x+spike.width && hbY+hbH>spike.y && hbY<spike.y+spike.height;
}

function createCrash(){
    const pieceCount=20;
    for(let i=0;i<pieceCount;i++){
        crashPieces.push({
            x:player.x+Math.random()*player.width,
            y:player.y+Math.random()*player.height,
            vx:(Math.random()-0.5)*15,
            vy:(Math.random()-1)*15,
            size:Math.random()*player.width/4+5,
            color:player.color
        });
    }
}

function spawnParticles(x,y,type){
    const color = type==="jump"?"#0ff":type==="double"?"#ff0":"#fff";
    for(let i=0;i<15;i++){
        particles.push({x,y,vx:(Math.random()-0.5)*5,vy:(Math.random()-1.5)*5,life:Math.random()*30+20,color});
    }
}

function tryDie(){
    if(player.onGround || player.vy>0) {createCrash(); gameStarted=false; if(score>bestScore) bestScore=Math.floor(score);}
}

function showStartScreen(){ 
    document.getElementById("bestScore").innerText="Best Score: "+bestScore;
    document.getElementById("startScreen").style.display="flex"; 
}
function hideStartScreen(){document.getElementById("startScreen").style.display="none";}

// Horizontal lines
function addLine(){ lines.push({x:canvas.width, y:Math.random()*canvas.height, width:canvas.width, speed:Math.random()*5+2}); }

function update(time){
    let delta=(time-lastTime)/1000; lastTime=time;

    if(gameStarted){
        // Speed increase
        player.speed+=0.0015;

        // Update platform color slowly
        colorTimer+=delta;
        if(colorTimer>=0.1){
            rainbowIndex=(rainbowIndex+1)%rainbowColors.length;
            platformColor=rainbowColors[rainbowIndex];
            platforms.forEach(p=>p.color=platformColor);
            colorTimer=0;
        }

        // Score increment
        scoreTimer+=delta;
        if(scoreTimer>=0.05){ score+=1; scoreTimer=0; }

        // Player movement
        player.y+=player.vy; player.vy+=GRAVITY;
        player.x+=player.speed;

        player.onGround=false;
        for(let plat of platforms){
            if(player.x+player.width>plat.x && player.x<plat.x+plat.width &&
               player.y+player.height>plat.y && player.y+player.height<plat.y+plat.height+player.vy){
                if(player.vy>=0){
                    player.y=plat.y-player.height; player.vy=0; player.onGround=true; player.jumpsLeft=2;
                    spawnParticles(player.x+player.width/2, player.y+player.height, "land");
                }
            }
        }
        if(player.y>canvas.height) {player.jumpsLeft=1; tryDie();}

        // Generate platforms when entering screen
        let lastPlatform = platforms[platforms.length-1];
        if(lastPlatform.x < player.x + canvas.width){
            let res = generateBlockPlatform(lastPlatform.x, lastPlatform.y);
        }

        // Add horizontal lines
        if(Math.random()<0.05) addLine();
    }

    // Smooth camera
    const targetCamX=player.x-150;
    const targetCamY=player.y-150+100; // slightly down
    cameraX = (typeof cameraX!=='undefined'?cameraX:targetCamX)*0.9 + targetCamX*0.1;
    cameraY = (typeof cameraY!=='undefined'?cameraY:targetCamY)*0.9 + targetCamY*0.1;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Score display
    ctx.fillStyle="#fff"; ctx.font="40px sans-serif";
    ctx.fillText(score,20,50);

    // Draw platforms
    for(let plat of platforms){
        ctx.shadowColor=plat.color;
        ctx.shadowBlur=20;
        ctx.fillStyle=plat.color;
        ctx.fillRect(plat.x-cameraX,plat.y-cameraY,plat.width,plat.height);
        ctx.shadowBlur=0;
    }

    // Draw spikes (red triangles)
    for(let spike of spikes){
        ctx.fillStyle="red"; ctx.beginPath();
        ctx.moveTo(spike.x-cameraX,spike.y+spike.height-cameraY);
        ctx.lineTo(spike.x-cameraX+spike.width/2,spike.y-cameraY);
        ctx.lineTo(spike.x-cameraX+spike.width,spike.y+spike.height-cameraY);
        ctx.closePath(); ctx.fill();
        if(checkSpikeCollision(spike)) tryDie();
    }

    // Player
    ctx.shadowColor="#0ff"; ctx.shadowBlur=20;
    ctx.fillStyle=player.color; ctx.fillRect(player.x-cameraX,player.y-cameraY,player.width,player.height);
    ctx.strokeStyle="#fff"; ctx.lineWidth=4;
    ctx.strokeRect(player.x-cameraX,player.y-cameraY,player.width,player.height);
    ctx.shadowBlur=0;

    // Draw horizontal lines
    for(let i=lines.length-1;i>=0;i--){
        let line=lines[i];
        line.x -= line.speed;
        ctx.strokeStyle="#fff"; ctx.lineWidth=2;
        ctx.beginPath(); ctx.moveTo(line.x, line.y); ctx.lineTo(line.x+line.width, line.y); ctx.stroke();
        if(line.x+line.width<0) lines.splice(i,1);
    }

    // Crash pieces
    for(let i=crashPieces.length-1;i>=0;i--){
        let p=crashPieces[i];
        p.vy+=GRAVITY*0.5;
        p.x+=p.vx; p.y+=p.vy;
        ctx.fillStyle=p.color; ctx.fillRect(p.x-cameraX,p.y-cameraY,p.size,p.size);
        if(p.y>canvas.height) crashPieces.splice(i,1);
    }

    // Particles
    for(let i=particles.length-1;i>=0;i--){
        let p=particles[i];
        p.x+=p.vx; p.y+=p.vy; p.life--;
        ctx.fillStyle=p.color; ctx.globalAlpha=p.life/50; ctx.fillRect(p.x-cameraX,p.y-cameraY,5,5); ctx.globalAlpha=1;
        if(p.life<=0) particles.splice(i,1);
    }

    if(!gameStarted && crashPieces.length===0) showStartScreen();
    animationId=requestAnimationFrame(update);
}

document.getElementById("startBtn").addEventListener("click", ()=>{resetGame();});
showStartScreen();

