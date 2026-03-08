const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const BLOCK_SIZE=50;
const JUMP_SPEED=-15;
const GRAVITY=0.7;

let keys={}, score=0, bestScore=0, lastTime=0, gameStarted=false, animationId=null;
let crashPieces=[], particles=[];
let baseColors=[{r:255,g:0,b:0},{r:255,g:153,b:0},{r:255,g:255,b:0},{r:0,g:255,g:0},{r:0,g:255,b:255},{r:0,g:0,b:255},{r:153,g:0,b:255}];
let colorIndex=0, platformColor={r:255,g:0,b:0}, nextColor=baseColors[1], colorLerp=0;
let globalTime=0;

let player={
    x:100, y:0, width:50, height:50,
    color:"#0ff", vy:0, speed:5,
    hitboxScale:0.6, jumpsLeft:1, onGround:false, visible:true
};

let platforms=[], spikes=[], lines=[];

// Input
window.addEventListener("keydown", e=>{ if(["KeyW","ArrowUp","Space"].includes(e.code)) jump(); keys[e.code]=true; });
window.addEventListener("keyup", e=>keys[e.code]=false);
window.addEventListener("mousedown", ()=>jump());
window.addEventListener("touchstart", ()=>jump());

function jump(){
    if(!player.visible) return;
    if(player.jumpsLeft>0){
        player.vy=JUMP_SPEED;
        spawnParticles(player.x+player.width/2, player.y+player.height, player.jumpsLeft===2?"jump":"double");
        player.jumpsLeft--;
    }
}

function resetGame(){
    if(animationId) cancelAnimationFrame(animationId);

    score=0; colorLerp=0; globalTime=0;
    player.x=100; 
    player.y=canvas.height/2-player.height; 
    player.vy=0; 
    player.speed=12;
    player.jumpsLeft=1; 
    player.onGround=false;
    player.visible=true;

    platforms=[]; spikes=[]; crashPieces=[]; particles=[]; lines=[];
    platformColor={...baseColors[0]}; colorIndex=0; nextColor=baseColors[1];

    // Starting platform: 10 blocks
    platforms.push({x:0,y:player.y+player.height,width:BLOCK_SIZE*10,height:BLOCK_SIZE,color:{...platformColor}});
    lastPlatformX=0; lastPlatformY=player.y+player.height;

    lastTime=performance.now();
    hideStartScreen();
    gameStarted=true;
    update(lastTime);
}

function generateBlockPlatform(lastX,lastY){
    // Platform length: 1~8, shorter more probable
    let blockCount=Math.floor(Math.random()*8)+1;
    if(Math.random()<0.7) blockCount=Math.min(blockCount,Math.floor(Math.random()*3+1));

    let gap=Math.floor(Math.random()*5+3)*BLOCK_SIZE;
    let x=lastX+gap;
    let y=lastY+(Math.floor(Math.random()*3)-1)*BLOCK_SIZE;
    y=Math.max(BLOCK_SIZE, Math.min(canvas.height-3*BLOCK_SIZE, y));

    for(let i=0;i<blockCount;i++){
        platforms.push({x:x+i*BLOCK_SIZE,y,width:BLOCK_SIZE,height:BLOCK_SIZE,color:{...platformColor}, passed:false});
        if(Math.random()<0.08) spikes.push({x:x+i*BLOCK_SIZE+BLOCK_SIZE*0.2,y:y-BLOCK_SIZE+BLOCK_SIZE*0.2,width:BLOCK_SIZE*0.6,height:BLOCK_SIZE*0.6, baseY:y-BLOCK_SIZE+BLOCK_SIZE*0.2, hit:true, passed:false});
    }
    return {x:x+blockCount*BLOCK_SIZE,y};
}

function checkSpikeCollision(spike){
    if(!spike.hit) return false;
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

function tryDie(spike){
    if(!player.visible) return;
    if(player.onGround || player.vy>0){
        player.visible=false;
        if(spike) spike.hit=false;
        createCrash();
        gameStarted=false; 
        if(score>bestScore) bestScore=Math.floor(score);
    }
}

function showStartScreen(){ 
    document.getElementById("bestScore").innerText="Best Score: "+bestScore;
    document.getElementById("startScreen").style.display="flex"; 
}
function hideStartScreen(){document.getElementById("startScreen").style.display="none";}

function addLine(){ 
    if(Math.random()>0.15) return;
    lines.push({x:canvas.width, y:Math.random()*canvas.height, width:Math.random()*100+20, speed:(player.speed+5)*5}); 
}

function lerpColor(c1,c2,t){return {r:c1.r+(c2.r-c1.r)*t, g:c1.g+(c2.g-c1.g)*t, b:c1.b+(c2.b-c1.b)*t};}
function rgb(c){return `rgb(${Math.floor(c.r)},${Math.floor(c.g)},${Math.floor(c.b)})`; }

function update(time){
    let delta=(time-lastTime)/1000; lastTime=time;
    globalTime+=delta;

    if(gameStarted && player.visible){
        player.speed+=0.002;

        colorLerp+=delta/5;
        if(colorLerp>=1){
            colorIndex=(colorIndex+1)%baseColors.length;
            nextColor=baseColors[(colorIndex+1)%baseColors.length];
            colorLerp=0;
        }
        platformColor=lerpColor(baseColors[colorIndex],nextColor,colorLerp);

        player.y+=player.vy; player.vy+=GRAVITY;
        player.x+=player.speed;

        player.onGround=false;
        for(let plat of platforms){
            // Platform collision
            if(player.x+player.width>plat.x && player.x<plat.x+plat.width &&
               player.y+player.height>plat.y && player.y+player.height<plat.y+plat.height+player.vy){
                if(player.vy>=0){
                    player.y=plat.y-player.height; player.vy=0; player.onGround=true; player.jumpsLeft=2;
                    spawnParticles(player.x+player.width/2, player.y+player.height, "land");
                }
            }
            // Score by passing platform
            if(!plat.passed && player.x>plat.x+plat.width){
                score+=1;
                plat.passed=true;
            }
        }
        if(player.y>canvas.height) {player.jumpsLeft=1; tryDie();}

        for(let spike of spikes){
            if(checkSpikeCollision(spike)) tryDie(spike);
            // Score by passing spike
            if(!spike.passed && player.x>spike.x+spike.width){
                score+=1;
                spike.passed=true;
            }
        }

        let lastPlatform = platforms[platforms.length-1];
        if(lastPlatform.x < player.x + canvas.width){
            generateBlockPlatform(lastPlatform.x, lastPlatform.y);
        }

        addLine();
    }

    const targetCamX=player.x-150;
    const targetCamY=player.y - canvas.height/2 + player.height*1.5;
    cameraX = (typeof cameraX!=='undefined'?cameraX:targetCamX)*0.9 + targetCamX*0.1;
    cameraY = (typeof cameraY!=='undefined'?cameraY:targetCamY)*0.9 + targetCamY*0.1;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#fff"; ctx.font="40px sans-serif";
    ctx.fillText(score,20,50);

    for(let plat of platforms){
        let glow = Math.sin(globalTime*3)*10 + 15;
        ctx.shadowColor=plat.color; ctx.shadowBlur=plat===platforms[0]?glow:0;
        for(let y=plat.y; y<canvas.height; y+=BLOCK_SIZE){
            let darkFactor = y===plat.y?1:0.3;
            ctx.fillStyle = `rgba(${Math.floor(plat.color.r*darkFactor)},${Math.floor(plat.color.g*darkFactor)},${Math.floor(plat.color.b*darkFactor)},1)`;
            ctx.fillRect(plat.x-cameraX, y-cameraY, plat.width, BLOCK_SIZE);
        }
        ctx.shadowBlur=0;
    }

    for(let spike of spikes){
        let pulse = Math.sin(globalTime*5 + spike.x)*5;
        ctx.fillStyle="red"; ctx.beginPath();
        ctx.moveTo(spike.x-cameraX,spike.baseY+spike.height-cameraY+pulse);
        ctx.lineTo(spike.x-cameraX+spike.width/2,spike.baseY-cameraY+pulse);
        ctx.lineTo(spike.x-cameraX+spike.width,spike.baseY+spike.height-cameraY+pulse);
        ctx.closePath(); ctx.fill();
    }

    if(player.visible){
        ctx.shadowColor="#0ff"; ctx.shadowBlur=20;
        ctx.fillStyle=player.color; ctx.fillRect(player.x-cameraX,player.y-cameraY,player.width,player.height);
        ctx.strokeStyle="#fff"; ctx.lineWidth=6;
        ctx.strokeRect(player.x-cameraX,player.y-cameraY,player.width,player.height);
        ctx.shadowBlur=0;
    }

    for(let i=lines.length-1;i>=0;i--){
        let line=lines[i];
        line.x -= line.speed; 
        ctx.strokeStyle="#fff"; ctx.lineWidth=2;
        ctx.beginPath(); ctx.moveTo(line.x, line.y); ctx.lineTo(line.x+line.width, line.y); ctx.stroke();
        if(line.x+line.width<0) lines.splice(i,1);
    }

    for(let i=crashPieces.length-1;i>=0;i--){
        let p=crashPieces[i];
        p.vy+=GRAVITY*0.5;
        p.x+=p.vx; p.y+=p.vy;
        ctx.fillStyle=p.color; ctx.fillRect(p.x-cameraX,p.y-cameraY,p.size,p.size);
        if(p.y>canvas.height) crashPieces.splice(i,1);
    }

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

