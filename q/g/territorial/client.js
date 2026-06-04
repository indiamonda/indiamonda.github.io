"use strict";
    (function () {
var S=["div","100%","⬅️ ","absolute","canvas","none","0.75em","inherit","<br>","rgb(","center","auto","0.8em","rgba(","   ","flex","hidden","1em","span","Data","territorial.io","0.5em"," / ","pre","input","iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==","click","undefined","break-word","50%","0.6em","underline","scroll","pointer","password","middle","function","bold","Value","Escape","Enter","1.5em","0.4em","' target='_blank'>","text","string","rgba(0,0,0,0.8)","pre-wrap","number","nowrap","mouseleave","inline-block","game.territorial.io","focus","blur","Space","Redacted ","Player ","NoStack","Gold Seizure","<a href='","</a>","100,100,100","1.2em","1.0em","0px","0.3em","0.0em 0.9em"," voted with ","  • ","   Gold: ","🔄 Reload","wheel","translate(-50%, -50%)","top","tls7","system-ui","rgba(140,10,10,0.75)","rgba(100,0,0,0.8)","rgba(10,140,10,0.75)","rgba(0,100,0,0.8)","rgba(0,","rgb(10,220,10)","placeholder","mouseover","mouseout","long","logo","loading","keydown","italic ","fixed","file","error","en-US","dotted","data:image/png;base64,","column","break-all","blur(4px)","arena","account","accept","_blank","[Redacted Message]","Seed","Reload","Patreon","Offensive Name","Interest","Hate Speech","False Reporter","Cheater","CRTOR","Bot ","Block Account","Battle Royale","Ban IP","Back","Audit Log","Arial Black, system-ui","ADMIN","@room","255,255,255","1v1","1 Minute","1 Hour","1 Day","0em","000","0.4em 0em","0.2em","0,0,0","/wiki/transactions","/wiki/clans","/privacy",". Duration: x",",0,0.85)"," solid white;}"," Rank: "," / 180"," / 160"," -> ","   Contest"];
function a(){var b;
var c;function d(e){c="";try{window.removeEventListener(S[93],d);c=e.lineno+" "+e.colno+"|"+f(e);
if(performance.memory){var g=[];g.push(Math.floor(performance.memory.jsHeapSizeLimit/100000));
g.push(Math.floor(performance.memory.totalJSHeapSize/100000));
g.push(Math.floor(performance.memory.usedJSHeapSize/100000));
c=c+"|"+g.join(" ");}if(h){c=c+"|R"+h.i+","+h.j+","+h.k.toFixed(2);
}c=c+"|"+e.message;if(l&&l.m===1){c=l.n+"|"+o.p.join(",")+"|"+c;if(e.lineno<43){q();return;}
var r="What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
r+="<br>Error Message: "+c;o.s();
t.u(4,5,new v("🤖 Beep Boop! An error occurred.",r,true,[new w("Close",function(){t.x();t.y.z();}),
new w(S[106],function(){a0.a1.a2();})]));}}catch(e){c="SE|"+c+"|"+e;console.log(c);
alert(c);}q();}function q(){b=new WebSocket("wss://territorial.io/s52/");b.onopen=a3;
b.onclose=function(){a4();};}function f(e){if(!e.error){return S[58];}var stack=e.error.stack;
if(!stack||!stack.length){return S[58];}var a5=new RegExp(":([0-9]+):([0-9]+)","g");
var result=[];var match;while((match=a5.exec(stack))!==null){result.push(parseInt(match[1],10));
result.push(parseInt(match[2],10));}if(!result.length){return S[58];}return result.join(" ");
}function a3(){if(!b||b.readyState!==b.OPEN){return;}var i=new a6();i.a7(1+6+2+1+1+1+7*228);
i.a8(1,0);i.a8(6,7);i.a8(2,a0?a0.id:3);i.a8(1,l.a9?1:0);i.a8(1,l.aA?1:0);i.a8(1,l?l.m:0);
for(var aB=0;aB<c.length&&aB<228;aB++){i.a8(7,c.charCodeAt(aB)%128);}b.send(i.aC);a4();}
function a4(){if(!b){return;}b.onclose=null;b.onopen=null;b=null;}window.addEventListener(S[93],d);
}a();var l;var aD;var aE;var aF;var aG;var aH;var aI;var aJ;var aK;
var aL;var aM;var aN;var aO;var aP;var aQ;var aR;var aS;var aT;var aU;var aV;var aW;var aX;var aY;
var aZ;var aa;var ab;var ac;var ad;var ae;var af;var ag;var ah;var ai;var aj;var ak;var al;var am;
var an;var ao;var ap;var aq;var ar;var at;var au;var av;var aw;var ax;var h;var ay;var az;var b0;
var b1;var b2;var b3;var b4;var b5;var b6;var b7;var b8;var b9;var bA;var bB;var bC;var bD;var bE;
var bF;var bG;var bH;var bI;var bJ;var bK;var bL;var bM;var bN;var bO;var bP;var bQ;var bR;var bS;
var bT;var t;var bU;var bV;var bW;var bX;var bY;var bZ;var ba;var bb;var bc;var bd;var be;var bf;
var bg;var bh;var a0;var bi;var bj;var bk;var o;var bl;var bm;var bn;var bo;var bp;var bq;var br;
var bs;function bt(bu){if(l&&!bu){return;}function bv(){bw();bL=new bx();bK=new by();bA=new bz();
bB=new c0();aD=new c1();b7=new c2();bF=new c3();bG=new c4();aE=new c5();aF=new c6();aG=new c7();
aH=new c8();aI=new c9();aJ=new cA();aK=new cB();aL=new cC();aM=new cD();aN=new cE();aO=new cF();
aP=new cG();aQ=new cH();aR=new cI();aS=new cJ();aT=new cK();aU=new cL();aV=new cM();aW=new cN();
aX=new cO();aY=new cP();aZ=new cQ();aa=new cR();ab=new cS();ac=new cT();ak=new cU();al=new cV();
an=new cW();am=new cX();ad=new cY();ae=new cZ();ah=new ca();af=new cb();ag=new cc();ai=new cd();
az=new ce();aj=new cf();ap=new cg();aq=new ch();ar=new ci();b0=new cj();ay=new ck();ao=new cl();
at=new cm();au=new cn();av=new co();h=new cp();aw=new cq();ax=new cr();b1=new cs();b2=new ct();
b3=new cu();b4=new cv();b5=new cw();b6=new cx();b8=new cy();b9=new cz();bC=new d0();bD=new a6();
bE=new d1();bH=new d2();bI=new d3();bJ=new d4();bM=new d5();bN=new d6();bO=new d7();bP=new d8();
bQ=new d9();bR=new dA();bS=new dB();bT=new dC();t=new dD();bU=new dE();a0=new dF();l=new dG();
bi=new dH();bj=new dI();bg=new dJ();bh=new dK();ba=new dL();bb=new dM();bV=new dN();bW=new dO();
bd=new dP();be=new dQ();bf=new dR();bk=new dS();bc=new dT();o=new dU();bl=new dV();bm=new dW();
bn=new dX();bp=new dY();bq=new dZ();br=new da();bs=new db();}function dc(){l.dd();a0.dd();
h.de();bj.dd();b7.dd();b7.df();bX=new dg();bX.dd();bA.dd();bV.dd();b0.dd();bF.dd();bG.dd();bS.dd();
t.dd();bY=new dh();h.dd();bf.dd();bc.dd();bW.dd();bZ=new di();ay.dd();ae.dj();bU.dd();ap.dd();
aa.dd();aT.dd();ai.dd();bJ.dd();ab.dd();bf.dk=true;setTimeout(function(){bS.a7(2,14071);},0);
t.u(5,5);if(!bI.dl()){a0.a1.dm();}h.dn();}bv();dc();l.m=1;}function dG(){
this.dp=1119;var dq=2;var dr=15;var ds=16;this.rVersion=18;this.dt=0;this.dd=function(){
this.du=2;var dv="";this.n=dq+"."+dr+"."+ds;this.dw="7 Apr 2026 ["+this.n+dv+"]";
var dx=window.location.hostname.toLowerCase();this.a9=dx.indexOf(S[20])>=0;
this.dy=dx.indexOf(S[52])>=0;this.aA=dz();this.e0=(new Date()).getTime()%1048576;
};this.m=0;function dz(){try{return window.self!==window.top;}catch(e){return true;
}}}function e1(){var e2=[L(0),L(1),L(2),L(3),L(4),L(5),L(6)];var e3=[100,60,30,15,6,1];var e4=[
[0,0,0,0,0],[0,1,1,1,1],[1,2,1,1,1],[1,3,2,1,2],[1,4,2,2,3],[1,4,3,3,4],[1,5,3,3,5]];var e5=[
" 👢 kicked "," 🔇 muted "," ✂️ redacted the username of "," deducted x from "," seized x from ",
" 🚩 reported "];var e6=["👢","🔇","✂️","Elo Deduction",S[59],"🚩 Report"];var e7=[".",S[136],
S[136],".",".",". Reason: x"];this.e8=[["","",""],["20 Seconds",S[125],"5 Minutes",S[126],S[127]],
[S[125],S[126],S[127]],["0.1 Elo Points","0.2 Elo Points","0.3 Elo Points"],
["0.5 Gold","1 Gold","2 Gold","5 Gold","10 Gold"],
[S[108],S[110],S[112],S[111]]];var e9=[S[108],S[110],S[115],S[117],S[59]];
this.eA=function(id,eB,eC){var aB=this.eD(eB);return+(e4[aB][id]>eC);};this.eD=function(eB){
for(var aB=0;aB<e3.length;aB++){if(eB>=e3[aB]){return aB;}}return e3.length;};this.eE=function(eB){
return e2[this.eD(eB)];};this.eF=function(id,eG){return e5[id].replace(new RegExp("x","g"),eG);
};this.eH=function(id,eG){return e7[id].replace(new RegExp("x","g"),eG);
};this.eI=function(id,eJ){if(eJ===S[113]||eJ===S[121]){
return e9[id];}return this.e8[5][id];};}function dE(){this.eK=new eL();this.eM=new eN();
this.dd=function(){a0.a1.eO();};this.eP=function(){return bj.eQ.data[160].value;};}function eL(){
var eR=1000*12;this.show=function(eS){if(eS){return false;}if(bU.eP()){return false;}if(a0.id===0){
return bU.eM.show();}if(bf.eT<eR){return false;}var eU=a0.id===1?(12*60*1000):(18*60*1000);
eR=bf.eT+eU;if(l.du!==2){return false;}return a0.a1.eV(Math.floor(eU));
};}function eN(){var eW=null;var eR=1000*20;var eX=0;this.eY=function(){if(bf.eT<eR){
return;}eR=bf.eT+1000*10;if(a0.id!==0){return;}if(eW){return;}if(bU.eP()){return;}if(!b0.y.eZ(0)){
eR=bf.eT+1000*1;return;}b0.ea.eb(5);};this.ec=function(ed){eW=ed;};this.show=function(){if(!eW){
return false;}if(bf.eT<eX){return false;}eX=bf.eT+60*1000;(new ee()).show(eW.ef,eW.colors,eW.id);
eW=null;return true;};}function cX(){this.eg=new eh();}function eh(){this.ei=function(ej){
if(!bS.ek(bS.el)){return 0;}if(!aD.data.passableMountains){return 0;}var em=ac.en(ej);
if(!this.eo(aD.ep,em)&&!this.eq(aD.ep,em)){return 0;}var er=es(bM.et(ej));if(er===0){return 0;
}var eu=bM.ev(er);if(ac.ew(eu)){return er;}var player=ac.ex(eu);if(player===aD.ep){return 0;
}if(bs.ey(player,aD.ep)){return er;}return 0;};this.ez=function(player,er){var ej=bM.ev(er);
if(!ac.f0(ej)){return false;}if(ac.ew(ej)){bO.f1[0]=aD.f2;}else if(ac.ex(ej)!==bO.f1[0]){
return false;}var f3=f4(ej);var f5=f3.length;for(var aB=0;aB<f5;aB++){if(!this.eo(player,f3[aB])&&
!this.eq(player,f3[aB])){continue;}bO.f6[0]=bO.f6[aB];return true;}return false;
};function f4(ej){var f7=ac.f7;var f3=[];loop:for(var f8=3;f8>=0;f8--){var f9=ej+f7[f8];
if(ac.fA(f9)){var id=ac.en(f9);for(var aB=0;aB<f3.length;aB++){if(id===f3[aB]){continue loop;
}}bO.f6[f3.length]=f9;f3.push(id);}}return f3;}function es(fB){var fC=bM.fD(fB);var fE=bM.fF(fB);
var max=Math.max(bS.fG,bS.fH)-2;var fI=max*max;var fJ=false;var fK=0;for(var fL=0;fL<max;fL++){
var er=dl(fC,fE,fL);if(!er){continue;}var fM=bM.fN(fC,fE,er);if(fM<fI){fK=er;fI=fM;if(!fJ){fJ=true;
max=Math.floor(Math.sqrt(fM))+1;}}}return fK;}function dl(fC,fE,fL){for(var aB=0;aB<=fL;aB++){
for(var fO=-1;fO<2;fO+=2){for(var fP=-1;fP<2;fP+=2){for(var ed=0;ed<2;ed++){
var ej=fQ(fC+ed*fO*aB+(1-ed)*fP*fL,fE+ed*fP*fL+(1-ed)*fO*aB);if(ej){return ej;
}}}}}return 0;}function fQ(fC,fE){if(!bM.fR(fC,fE)){return 0;}var er=bM.fS(fC,fE);var ej=bM.ev(er);
if(ac.f0(ej)&&ac.fT(ej)){return er;}return 0;}this.eo=function(player,em){var fU=ag.fU[player];
var f5=fU.length;var fV=Math.max(bL.fW(f5,12),1);var f7=ac.f7;for(var aB=0;aB<f5;aB+=fV){
var eu=fU[aB];for(var f8=3;f8>=0;f8--){var f9=eu+f7[f8];if(ac.fA(f9)&&em===ac.en(f9)){
return true;}}}return false;};this.eq=function(player,em){var fU=ag.fU[player];var f5=fU.length;
var f7=ac.f7;for(var aB=0;aB<f5;aB++){var eu=fU[aB];for(var f8=3;f8>=0;f8--){var f9=eu+f7[f8];
if(ac.fA(f9)&&em===ac.en(f9)){return true;}}}return false;};}self.aiCommand746=function(fX){
if(fX===0){bt();return;}if(fX===1){if(!a0){return;}if(a0.id!==1||a0.dw<14){
return;}bJ.fY();}};function d7(){this.g=new Array(4);this.fZ=new Uint16Array(2);
this.fa=new Uint16Array(2);this.fb=new Int32Array(2);this.fc=new Uint32Array(2);
this.fd=new Uint32Array(2);this.fe=new Uint8Array(4);this.ff=new Uint8Array(4);
this.f6=new Uint32Array(4);this.fg=new Uint32Array(5);this.f1=new Uint32Array(8);
this.fh=new Uint32Array(8);this.fi=new Uint16Array(16);this.fj=new Uint16Array(512);
this.fk=new Uint16Array(512);this.fl=new Uint16Array(512);this.fm=new Uint16Array(0);
this.dd=function(){var f5=bS.fG*bS.fH;if(this.fm.length!==f5){this.fm=new Uint16Array(f5);
}};this.fn=function(g,fo){g[0]=fo;return g;};this.fp=function(g,fo,fq){g[0]=fo;g[1]=fq;return g;
};this.fr=function(g,fo,fq,fs){g[0]=fo;g[1]=fq;g[2]=fs;return g;};this.ft=function(g,fo,fq,fs,fu){
g[0]=fo;g[1]=fq;g[2]=fs;g[3]=fu;return g;};}var fv;var fw;var fx;var fy;var fz;var g0;var g1;
var g2;var g3;var g4;var g5;var g6;var g7;function g8(){g1=0;g2=2048;g3=new Uint32Array(4*g2);
g4=0;g5=new Uint32Array(g2);g6=new Uint8Array(bS.fG*bS.fH);}function g9(player){
fw=player;g7=false;gA();gB();for(var aB=ad.gC(fw)-1;aB>=0;aB--){fv=aB;gD();}if(g7){gE();
}}function gE(){bs.gF();bs.gG();}function gD(){g0=ad.gH(fw,fv);fx=ad.gI(fw,fv);fy=ad.gJ(fw,fv);
gK();if(g1===0){gL();return;}gM();if(!gN()){gL();return;}gO();}function gN(){fz=bL.fW(fx,g1);
if(fz>aD.gP){return true;}if(!fy){return false;}var gQ=g1*(1+aD.gP);fx+=bA.gR.gS(fw,gQ-fx);
fz=bL.fW(fx,g1);return true;}function gM(){var aB;for(aB=g1-1;aB>=0;aB--){g6[bL.fW(g3[aB],4)]=0;
}}function gL(){if(ad.gC(fw)===1){aF.gT(fw);}var eU=bA.gR.gU(fw,fx);bd.gV(fw,fx-eU,12);
ad.gW(fw,fv);}function gA(){var player=fw;var gX=ag.gX;var f5=Math.min(gX[player].length,g2);
var gY=0;var gZ=g5;for(var aB=f5-1;aB>=0;aB--){gZ[gY++]=gX[player][aB];
}g4=gY;}function gB(){var aB;for(aB=ag.gX[fw].length-1;aB>=0;aB--){if(ac.f0(ag.gX[fw][aB])){
ac.ga(ag.gX[fw][aB],fw);}}ag.gX[fw]=[];}function gK(){g1=0;if(g0===aD.f2){gb();}else{
gc();}}function gc(){var gd,ge,f8,aB;var f7=ac.f7;for(f8=3;f8>=0;f8--){for(aB=g4-1;aB>=0;aB--){
gd=g5[aB]+f7[f8];ge=bL.fW(gd,4);if(g6[ge]===0&&ac.gf(gd)&&ac.ex(gd)===g0){g6[ge]=1;g3[g1++]=gd;
}}}}function gb(){var gd,ge,f8,aB;var f7=ac.f7;for(f8=3;f8>=0;f8--){for(aB=g4-1;aB>=0;aB--){
gd=g5[aB]+f7[f8];ge=bL.fW(gd,4);if(g6[ge]===0&&ac.ew(gd)){g6[ge]=1;g3[g1++]=gd;}}}}function gO(){
if(gg()){gh();if(g0!==aD.f2){gi();}}else{gL();}}function gi(){bs.gj();bs.gk(ag.gl[g0]);
bs.gk(ag.gm[g0]);if(bS.ek(bS.el)){bs.gk(ag.fU[g0]);}bs.gn(ag.gX[g0]);bs.go(ag.gm[g0]);
bs.go(ag.fU[g0]);bs.gp();bs.gq();}function gh(){g7=true;ad.gr(fw,fv,fx);ad.gs(fw,fv);ag.gt[fw]+=g1;
bs.gu();gv();}function gg(){if(g0===aD.f2){return gw();}else{return gx();}}function gx(){
var gy=g1*aD.gP;var gz=h0();var h1=h2();var h3=gy+2*gz+h1;var h4=fz*g1;if(h4>h3){fx-=h3;
bd.gV(fw,h3,13);h5(h3-gy,h1);return true;}else{if(fy&&h1===0){fx-=h4;h4+=bA.gR.gS(fw,h3-h4+1);
bd.gV(fw,h4,13);h5(h4-gy,0);return true;}fx-=h4;bd.gV(fw,h4,13);h5(h4-gy,h1);return false;
}}function h5(h4,h1){if(h1>0){if(h4<=h1){bd.gV(g0,h4,13);ad.h6(g0,fw,h1-h4);return;}ad.h6(g0,fw,0);
h4-=h1;}h4=bL.fW(h4,2);h4=Math.min(ag.h7[g0],h4);bd.gV(g0,h4,13);ag.h7[g0]-=h4;}function h2(){
return ad.h8(g0,fw);}function h0(){return bL.fW(g1*ag.h7[g0],1+bL.fW(10*ag.gt[g0],16));
}function gw(){var h9=g1*aD.gP;fx-=h9;bd.gV(fw,h9,13);return true;}function gv(){
for(var aB=g1-1;aB>=0;aB--){ag.gX[fw].push(g3[aB]);ag.gl[fw].push(g3[aB]);ac.ga(g3[aB],fw);
}}function dC(){var hA=0;var hB=0;this.hC=function(fC,fE){hA=fC;hB=fE;};this.hD=function(code){
if(aD.hE||aM.hF){return;}if(!bA.gR.hG(0)&&!bA.gR.hG(1)){return;}if(!bA.gR.hH(aD.ep)){return;
}if(aR.hI(hA,hB)){aR.hJ=false;return;}if(aP.hI(hA,hB)){return;}var hK=bM.hL(hA);var hM=bM.hN(hB);
var er=bM.fS(hK,hM);if(!bM.hO(hK,hM)){return;}if(code===0){hP(er);}else if(code===1){
hQ(er);}else if(code===2){hR(er);}};function hP(er){var hS;if(aD.hT){hS=br.hU(er);
if(hS===-1){return;}b8.hV.hW(er);return;}var ej=bM.ev(er);if(ac.fA(ej)){hS=am.eg.ei(ej);
if(hS){var eu=bM.ev(hS);var hX=ac.ew(eu)?aD.f2:ac.ex(eu);b8.hV.hY(aR.hZ(),hS,hX);}return;
}hS=br.ha(er);if(hS<0){return;}ej=bM.ev(hS);if(ac.ew(ej)){if(bs.hb(aD.ep)){b8.hV.hc(aR.hZ(),aD.f2);
}else if(ad.gC(aD.ep)){b1.hd(aD.f2,aR.hZ());}return;}var player=ac.ex(ej);if(!bs.ey(player,aD.ep)){
return;}if(bs.he(aD.ep,player)){b8.hV.hc(aR.hZ(),player);}else if(ad.gC(aD.ep)){
b1.hd(player,aR.hZ());}}function hQ(er){if(bN.hf.hg(aD.ep,er)){b8.hV.hh(aR.hZ(),bO.fh[7]);
}}function hR(er){if(bN.hi.hj(aD.ep,er)){b8.hV.hk(aR.hZ());}}this.hl=function(){
if(aD.hE||aM.hF){return;}if(!bA.gR.hG(1)){return;}var gd=aD.ep;if(!bA.gR.hH(gd)){return;
}var f5=ad.gC(gd);if(f5<1){hm();return;}var hn=0;var ho=ad.gI(gd,0);for(var aB=1;aB<f5;aB++){
var hp=ad.gI(gd,aB);if(hp<ho){ho=hp;hn=aB;}}b8.hV.hc(aR.hZ(),ad.gH(gd,hn));
};this.hq=function(){if(aD.hE||aM.hF){return;}if(!bA.gR.hH(aD.ep)){return;}
if(!bA.gR.hG(1)){return;}if(aw.hr){if(!aw.hs(aD.ep)){return;}b8.hV.ht(1);return;}if(!aw.hu(aD.ep)){
return;}b8.hV.hq();};function hm(){var gd=aD.ep;if(bs.hb(gd)){b8.hV.hc(aR.hZ(),aD.f2);
return;}var f7=ac.f7;var gl=ag.gl;var f5=gl[gd].length;var hv=Math.floor(Math.random()*f5);
for(var aB=0;aB<f5;aB++){for(var hw=3;hw>=0;hw--){var hx=gl[gd][(aB+hv)%f5]+f7[hw];
if(ac.gf(hx)){var hy=ac.ex(hx);if(hy!==gd&&(!aD.hz||bs.ey(gd,hy))){
b8.hV.hc(aR.hZ(),hy);return;}}}}}}function i0(i1,size,i2,i3,font){function dd(){var aB,i4,i5;
var i6=0.2;var canvas=document.createElement(S[4]);var i7=canvas.getContext("2d",{alpha:false});
canvas.width=i1;canvas.height=i1;i7.font=size+font;i7.textAlign=S[10];i7.textBaseline=S[35];
i7.fillStyle="red";for(aB=0;aB<i2.length;aB++){i7.fillText(i2[aB],0.5*i1,0.5*i1);
}i4=i7.getImageData(0,0,i1,i1);i5=i8(i4);if(i5> -1){i6=(i5-(0.5*i1)+0.1*size)/size;
}return Math.max(i6,0);}function i8(i4){var aB,eB;var f8=i4.data;for(aB=f8.length-4;aB>=0;aB-=4){
eB=f8[aB];if(eB>=i3){return Math.floor(aB/(4*i1));}}return-1;}return dd();}function d5(){
this.i9=new Int16Array(4);this.iA=new Int16Array(4);this.iB=null;this.dd=function(){var aB;
this.i9[0]=-bS.fG;this.i9[1]=1;this.i9[2]=bS.fG;this.i9[3]=-1;this.iB=new Int16Array([-bS.fG,
-bS.fG+1,1,bS.fG+1,bS.fG,bS.fG-1,-1,-bS.fG-1]);for(aB=0;aB<4;aB++){this.iA[aB]=4*this.i9[aB];
}};this.iC=function(){return bL.iD(Math.floor(0.15*(1+0.25*a0.a1.iE())*h.iF/iG),4,128);
};this.iH=function(ej,id){var iI=this.iA;
for(var aB=0;aB<4;aB++){var eu=ej+iI[aB];if(ac.iJ(eu)&&ac.en(eu)===id){return true;}}return false;
};this.iK=function(player,ej){if(ac.ew(ej)){return false;}if(player===ac.ex(ej)){return true;
}return false;};this.fN=function(hK,hM,er){hK-=this.fD(er);hM-=this.fF(er);return hK*hK+hM*hM;
};this.iL=function(iM,iN,iO){var iP=this.iQ(iM)-this.iR(iO);var iS=this.iT(iN)-this.iU(iO);
return Math.sqrt(iP*iP+iS*iS);};this.iV=function(iW,iX){var iP=this.fD(iW)-this.fD(iX);
var iS=this.fF(iW)-this.fF(iX);return ~~Math.sqrt(iP*iP+iS*iS+0.5);};this.iY=function(iW,iX){
var iP=this.fD(iW)-this.fD(iX);var iS=this.fF(iW)-this.fF(iX);return iP*iP+iS*iS;
};this.iZ=function(ia,ib,ic,ie){ia-=ic;ib-=ie;return ia*ia+ib*ib;};this.ig=function(gd,ih){
return bL.fW(ih*ag.h7[gd],1000);};this.iQ=function(iM){return 16*(iM+ii)/iG;};this.iT=function(iN){
return 16*(iN+ij)/iG;};this.ik=function(f8){return 16*f8/iG;};this.hL=function(iM){
return Math.floor((iM+ii)/iG);};this.hN=function(iN){return Math.floor((iN+ij)/iG);
};this.hO=function(hK,hM){return hK>=1&&hM>=1&&hK<bS.fG-1&&hM<bS.fH-1;
};this.fD=function(er){return er%bS.fG;};this.fF=function(er){
return bL.fW(er,bS.fG);};this.fS=function(hK,hM){return hM*bS.fG+hK;};this.il=function(hK,hM){
return 4*(this.fS(hK,hM));};this.im=function(er){return this.fR(this.fD(er),this.fF(er));
};this.fR=function(hK,hM){return hK>0&&hK<bS.fG-1&&hM>0&&hM<bS.fH-1;
};this.ev=function(er){return er<<2;};this.et=function(ej){
return ej>>2;};this.io=function(er){return((bS.fG*this.fF(er))*256)+(this.fD(er)<<4);
};this.ip=function(er){return this.io(er)+8+(bS.fG<<7);
};this.iq=function(iO){return bS.fG*(this.iU(iO)>>4)+(this.iR(iO)>>4);
};this.ir=function(iO){var er=this.iq(iO);return(this.fD(er)>>5)+bN.is.it*(this.fF(er)>>5);
};this.iR=function(iO){return iO%(bS.fG<<4);};this.iU=function(iO){return bL.fW(iO,bS.fG<<4);
};this.iu=function(er,hw){return er+this.i9[hw];};this.iv=function(ej,hw){return ej+this.iA[hw];
};this.iw=function(iW,iX){var iP=this.fD(iX)-this.fD(iW);var iS=this.fF(iX)-this.fF(iW);
if(Math.abs(iP)>=Math.abs(iS)){return 1+2*(iP<0);}return 2*(iS>0);};this.ix=function(player){
return this.fS((ag.iy[player]+ag.iz[player])>>1,(ag.j0[player]+ag.j1[player])>>1);
};this.j2=function(player){
return this.fS(ay.j3(ag.iy[player],ag.iz[player]),ay.j3(ag.j0[player],ag.j1[player]));
};}function cl(){this.j4=new j5();this.j6=new j7();this.j8=new j9();
this.performance=new jA();this.jB=new jC();this.jD=new jE();this.jF=new jG();this.jH=new jI();
this.jJ=new jK();this.dd=function(){this.j4.dd();this.j8.dd();this.performance.dd();
this.jB.dd();this.jD.dd();};this.eY=function(){this.performance.eY();this.j4.eY();
this.j8.jL();};}function jC(){var jM;var jN=8;var jO=new Uint16Array(jN);this.dd=function(){
jM=0;};this.jP=function(player,jQ){bO.f1[1]=ag.gX[player].length;if(bO.f1[0]===aD.f2){
ao.jB.jR(player);}else{this.jS(player,bO.f1[0]);}if(bO.f1[1]===0&&ag.gX[player].length===0){
return false;}if(!jQ&&bO.f1[1]===ag.gX[player].length){return false;}if(bO.f1[0]===aD.f2){
ag.jT[player]++;}else{ag.jU[player]++;}return true;};this.jV=function(player){jW(bO.f1[1],player);
ad.ec(player,bO.fc[0],bO.f1[0]);aF.jX(player,false);};this.jY=function(player,jZ,f5,ho){
var ja=bL.fW(12*ag.h7[player],1024);ho-=ho>=bL.fW(ag.h7[player],2)?ja:0;
jW(f5,player);ad.ec(player,ho,jZ);ag.h7[player]-=ho+ja;aF.jX(player,false);
};this.jS=function(player,jZ){var aB,hw;var f7=ac.f7;for(aB=ag.gl[player].length-1;aB>=0;aB--){
if(ac.jb(ag.gl[player][aB])){for(hw=3;hw>=0;hw--){if(ac.gf(ag.gl[player][aB]+f7[hw])&&
ac.ex(ag.gl[player][aB]+f7[hw])===jZ){ag.gX[player].push(ag.gl[player][aB]);
break;}}}}};function jW(size,player){for(var aB=ag.gX[player].length-1;aB>=size;aB--){
ac.jc(ag.gX[player][aB],player);}}this.jR=function(player){
var f7=ac.f7;for(var aB=ag.gl[player].length-1;aB>=0;aB--){if(ac.jb(ag.gl[player][aB])){
for(var hw=3;hw>=0;hw--){if(ac.ew(ag.gl[player][aB]+f7[hw])){ag.gX[player].push(ag.gl[player][aB]);
break;}}}}};this.jd=function(player,je){var aB,fO,hw,hy;var f5=ag.gl[player].length;
var jf=f5>=256?12:f5>=32?6:1;var jg=f5-1-ay.jh(jf);var f7=ac.f7;jM=0;loop:for(aB=jg;aB>=0;aB-=jf){
for(hw=3;hw>=0;hw--){hy=ac.ew(ag.gl[player][aB]+f7[hw])?aD.f2:ac.ex(ag.gl[player][aB]+f7[hw]);
if(hy===aD.f2||(ac.gf(ag.gl[player][aB]+f7[hw])&&hy!==player&&(je||bs.ey(player,hy)))){
for(fO=jM-1;fO>=0;fO--){if(jO[fO]===hy){
continue loop;}}jO[jM]=hy;if(++jM>=jN){return true;}}}}return jM>0;};this.ji=function(player,je){
var aB,hw,hy;var f7=ac.f7;jM=0;for(aB=ag.gl[player].length-1;aB>=0;aB--){
for(hw=3;hw>=0;hw--){hy=ac.ew(ag.gl[player][aB]+f7[hw])?aD.f2:ac.ex(ag.gl[player][aB]+f7[hw]);
if(hy===aD.f2||(ac.gf(ag.gl[player][aB]+f7[hw])&&hy!==player&&(je||bs.ey(player,hy)))){
jO[jM++]=hy;return true;}}}return false;};this.jj=function(){
var aB,fP;for(aB=jM-1;aB>=0;aB--){if(jO[aB]===aD.f2){jM--;for(fP=aB;fP<jM;fP++){jO[fP]=jO[fP+1];
}return true;}}return false;};this.jk=function(player){var aB,fP;for(aB=jM-1;aB>=0;aB--){
if(ad.jl(player,jO[aB])){jM--;for(fP=aB;fP<jM;fP++){jO[fP]=jO[fP+1];}}}return jM===0;};
this.jm=function(){var aB;for(aB=jM-1;aB>=0;aB--){if(bA.gR.jn(jO[aB])){return true;}}return false;
};this.jo=function(){var aB;for(aB=jM-1;aB>=0;aB--){if(!bA.gR.jn(jO[aB])){jO[aB]=jO[--jM];
}}return jM>0;};this.jp=function(player){var aB,fP;var jq=jO[0];var jr=ag.h7[jq]+ad.h8(jq,player);
for(aB=jM-1;aB>=1;aB--){fP=ag.h7[jO[aB]]+ad.h8(jO[aB],player);if(fP<jr){
jq=jO[aB];jr=fP;}}return jq;};this.js=function(player){var aB,j;var jt=jO[0];if(jM===1){return jt;
}var ju=bL.fW((ag.iz[player]+ag.iy[player]),2);var jv=bL.fW((ag.j1[player]+ag.j0[player]),2);
var fL=jw(ju-bL.fW((ag.iz[jt]+ag.iy[jt]),2))+jw(jv-bL.fW((ag.j1[jt]+ag.j0[jt]),2));
for(aB=jM-1;aB>=1;aB--){
j=jw(ju-bL.fW((ag.iz[jO[aB]]+ag.iy[jO[aB]]),2))+jw(jv-bL.fW((ag.j1[jO[aB]]+ag.j0[jO[aB]]),2));
if(j<fL){fL=j;jt=jO[aB];}}return jt;
};this.jx=function(){var jy=jO;var jz=jy[0];var h7=ag.h7;var k0=h7[jz];for(var aB=jM-1;aB>=1;aB--){
var gd=jy[aB];var fP=h7[gd];if(fP>k0){jz=gd;k0=fP;}}return jz;};this.k1=function(){
return jO[ay.jh(jM)];};}function jE(){this.k2=new Uint8Array(aD.f2);this.dd=function(){
this.k2.fill(0);};this.k3=function(player,ho){if(!ad.k4(player)){return;}var k5=ae.k6(player);
var k7=aE.ho[player];if(k7>=3&&k7<6){ho=Math.max(ag.h7[player]-k5,ho);}var k8=ag.gm[player].length;
var k9=ag.gl[player].length;if(30*ag.gt[player]>aD.kA&&kB[player]<10&&k8>=100*k9){aE.kC(player,10);
}if(aD.hz){kD(player,ho,k7,k5);return;}if(!k9||(k8&&(k8<k9&&!ay.jh(10)||k8>=100*k9&&ay.jh(3)||
!ay.jh(8)))){if(bN.kE.eY(player)){return;}}kF(player,ho,k7);};function kD(player,ho,k7,k5){
var jZ;if(ao.jB.jd(player,false)||ao.jB.ji(player,false)){if(ao.jB.jk(player)){return;
}if(ao.jB.jj()){kG(player,ho);kH(player,aD.f2,k7);return;}if(ay.kI(aE.kJ[k7])){jZ=ao.jB.jp(player);
kK(player,ho,jZ,k7);}else{if(ao.jB.jm()&&ay.kI(aE.kL[k7])){ao.jB.jo();}if(k7===6){
kK(player,ho,ao.jB.k1(),k7);return;}jZ=ao.jB.js(player);kK(player,ho,jZ,k7);}kH(player,jZ,k7);
return;}if(bN.kE.eY(player)){return;}if(ao.jF.eY(player)){return;}kM(player,ho,k7,k5);}
function kH(player,jZ,k7){if(k7>=3&&bf.kN()>2142&&(jZ===aD.f2||ag.h7[jZ]<bL.fW(ag.h7[player],20))){
aE.kC(player,20);}}function kM(player,ho,k7,k5){var k2=ao.jD.k2;k2[player]=0;
var f3=bg.f3;var kO=f3[player];if(kO===0){return;}var h7=ag.h7;var kP=h7[player];var gt=ag.gt;
if(player<aD.kQ){ho=kP;}if(kP<gt[player]){return;}if(k7===5&&kP<k5||k7===4&&kP<bL.fW(k5,2)){
return;}bh.kR(kO);var f5=bO.fa[0];var fj=bO.fj;var aB=ay.jh(f5);for(var fP=0;fP<f5;fP++){
var ed=fj[(fP+aB)%f5];if(k2[ed]){b8.kS.kT(player,ed,ho);return;}}var kU=bN.y.kU;
for(fP=0;fP<f5;fP++){ed=fj[(fP+aB)%f5];if(kU[ed]&&ed!==player){b8.kS.kT(player,ed,ho);return;
}}}function kF(player,ho,k7){if(!ao.jB.jd(player,true)&&!ao.jB.ji(player,true)){ao.jF.eY(player);
return;}if(ao.jB.jk(player)){return;}if(ao.jB.jj()){kG(player,ho);return;}if(ay.kI(aE.kJ[k7])){
kK(player,ho,ao.jB.jp(player),k7);return;}if(k7===5){kK(player,ho,ao.jB.jx(),k7);
return;}if(ao.jB.jm()&&ay.kI(aE.kL[k7])){ao.jB.jo();}if(k7===6){kK(player,ho,ao.jB.k1(),k7);
return;}kK(player,ho,ao.jB.js(player),k7);}function kK(player,ho,jZ,k7){if(k7>=3&&k7<6&&
bL.fW(ag.h7[player],8)>ag.h7[jZ]){ho=Math.max(bL.fW(11*ag.h7[jZ],5),bL.fW(ag.h7[player],10));
}var f5=ag.gX[player].length;ao.jB.jS(player,jZ);ao.jB.jY(player,jZ,f5,ho);}function kG(player,ho){
var jZ=aD.f2;var f5=ag.gX[player].length;ao.jB.jR(player);if(ag.gX[player].length!==f5){
ao.jB.jY(player,jZ,f5,ho);return true;}return false;}}function c5(){var kV=new Uint8Array(aD.f2);
var kW=new Uint16Array(aD.f2);var kX=new Uint16Array(aD.f2);var kY=new Uint8Array(aD.f2);
this.ho=new Uint8Array(aD.f2);var kZ=new Uint16Array(aD.f2);var ka=new Uint16Array(aD.f2);
this.kb=null;this.kL=[97,94,70,40,20,0,100];this.kc=[500,450,400,300,80,50,100];
this.kJ=[0,0,5,25,50,100,0];this.kd=[60,74,112,200,256,512,512];
this.ke=[1,2,3,4,6,8,1];this.kf=[500,450,400,300,80,50,100];this.kg=[100,150,250,400,600,1000,100];
this.de=function(){this.kb=[L(7),L(8),L(9),L(10),L(11),L(12),"H Bot"];
};this.dd=function(){var aB;kV.fill(0);kW.fill(0);kX.fill(0);kY.fill(0);this.ho.fill(0);
kZ.fill(0);ka.fill(0);var kh=aD.kQ;if(aD.ki===9){this.kj();}else if(!aD.kk){var kl=aD.ki===8?1:0;
for(aB=aD.km-1;aB>=0;aB--){this.ho[aB+kh]=kl;}}else{if(aD.data.botDifficultyType===3){
for(aB=aD.km-1;aB>=0;aB--){var hx=aB+kh;this.ho[hx]=aD.data.botDifficultyData[hx];
}}else if(aD.data.botDifficultyType===2){for(aB=aD.km-1;aB>=0;aB--){hx=aB+kh;
this.ho[hx]=aD.data.botDifficultyTeam[bg.kn[bg.f3[hx]]];}}else if(aD.data.botDifficultyType===1){
var ko=this.kb.length;for(aB=aD.km-1;aB>=0;aB--){this.ho[aB+kh]=aB%ko;
}}else{ko=aD.data.botDifficultyValue;for(aB=aD.km-1;aB>=0;aB--){this.ho[aB+kh]=ko;}}
}for(aB=0;aB<kh;aB++){this.ho[aB]=6;}var f5=aD.f2;for(aB=0;aB<f5;aB++){if(this.ho[aB]<=2){kY[aB]=5;
kZ[aB]=ka[aB]=1040;if(this.ho[aB]===0){kW[aB]=980;kX[aB]=980;}else if(this.ho[aB]===1){kW[aB]=980;
kX[aB]=920;kZ[aB]=ka[aB]=1100;}else{kW[aB]=825;kX[aB]=750;}kp(aB);continue;}if(this.ho[aB]<=4){
kY[aB]=1+ay.jh(20);if(this.ho[aB]===3){kW[aB]=kX[aB]=500;kZ[aB]=ka[aB]=1000;}else{
ka[aB]=250+ay.jh(1501);kZ[aB]=500+ay.jh(501);kW[aB]=300+ay.jh(201);kX[aB]=100+ay.jh(201);}kp(aB);
continue;}if(this.ho[aB]<=5){kZ[aB]=1000;ka[aB]=1000;kY[aB]=35+ay.jh(16);kW[aB]=300+ay.jh(201);
kX[aB]=50+ay.jh(101);kp(aB);continue;}kZ[aB]=ka[aB]=800;kY[aB]=5;kW[aB]=10;kX[aB]=250;kp(aB);
}};this.kj=function(){var ej=az.kq;var kh=aD.kQ;for(var aB=ej-1;aB>=0;aB--){this.ho[aB+kh]=0;
}for(var fP=0;fP<6;fP++){for(aB=ej+az.kr[fP]-1;aB>=ej;aB--){this.ho[aB+kh]=fP;}ej+=az.kr[fP];
}};function kp(aB){kV[aB]=1+bL.fW(kZ[aB]*ay.random(),10*ay.value(100));}this.kC=function(gd,value){
kV[gd]=Math.min(value,kV[gd]);};this.eY=function(gd){if(--kV[gd]===0){ks(gd);}};function ks(gd){
kt(gd);ao.jD.k3(gd,bL.fW(kW[gd]*ag.h7[gd],1000));}function kt(gd){if(kZ[gd]!==ka[gd]){
kZ[gd]+=kZ[gd]<ka[gd]?3:-3;}if(kW[gd]!==kX[gd]){kW[gd]+=kW[gd]<kX[gd]?kY[gd]:-kY[gd];
kW[gd]=Math.abs(kW[gd]-kX[gd])<=kY[gd]?kX[gd]:kW[gd];}kV[gd]=bL.fW(kZ[gd],10);
}this.ku=function(gd,gY){kZ[gd]=ka[gd]=gY;};}function j9(){var kv=new Uint16Array(aD.f2);
this.dd=function(){kv.fill(aD.f2);};this.jL=function(){if(bf.kN()%109!==9){
return;}if(al.kw<20){return;}if(!aD.hz){return;}if(bh.kx()<bL.fW(8*aD.kA,10)){return;
}var ky=bh.kz();if(!bg.kn[ky]){return;}bh.l0(ky);var f5=bO.fa[0];if(f5===0){return;}var g=bO.fj;
var l1=al.l1;var kw=al.kw;var l2=kv;var hx=ay.jh(f5);for(var aB=0;aB<kw;aB++){var hX=l1[aB];
var l3=g[hx];if(bA.gR.l4(hX,l3)&&l2[hX]===512){l2[hX]=l3;hx=(hx+1)%f5;}}};this.eY=function(player){
var l5=l6(player);l7(player);if(bO.fa[0]===0){return false;}var l8=bM.j2(player);
var l9=lA(player,l8);var lB=lC(l9,l8);if(lB>0&&bN.lD.lE(player,bN.lF.lG(lB,l8))){
lH(player,l8,l9,l5);return true;}var lI=lJ(player,l8);if(lI>0&&bN.lD.lE(player,bN.lF.lG(lI,l8))){
lH(player,l8,ac.ex(lI<<2),l5);return true;}lB=lC(l5,l8);if(lB>0&&bN.lD.lE(player,bN.lF.lG(lB,l8))){
return true;}return false;};function l7(player){var lK=al.l1;var lL=al.kw;
var f5=Math.min(lL,(lL<17&&ay.jh(20)===5)?1:16);var ge=ay.jh(lL);var fi=bO.fi;var gm=ag.gm;
var gY=0;for(var aB=0;aB<f5;aB++){var gd=lK[(aB+ge)%lL];if(gd!==player&&gm[gd].length){fi[gY++]=gd;
}}bO.fa[0]=gY;}function lA(player,l8){var f5=bO.fa[0];var fi=bO.fi;var lM=-1;var lN=aD.f2;
for(var aB=0;aB<f5;aB++){var gd=fi[aB];if(!bs.ey(player,gd)){continue;}var fL=bM.iY(l8,bM.ix(gd));
if(lM===-1||fL<lM){lM=fL;lN=gd;}}return lN;}function lC(l9,l8){if(l9===aD.f2){
return 0;}var gm=ag.gm[l9];var lL=gm.length;if(lL===0){return 0;}var f5=Math.min(lL,10);var lN=0;
var lM=bM.iY(gm[lN]>>2,l8);for(var aB=0;aB<f5;aB++){var hx=ay.jh(lL);var fL=bM.iY(gm[hx]>>2,l8);
if(fL<lM){lM=fL;lN=hx;}}return gm[lN]>>2;}function lJ(player,l8){var f5=bO.fa[0];var fi=bO.fi;
var l2=kv;var ge=0;for(var aB=0;aB<f5;aB++){var gd=fi[aB];var jZ=l2[gd];if(jZ===aD.f2){continue;
}if(!bA.gR.lO(jZ)){continue;}if(player===jZ){continue;}if(!bs.ey(player,jZ)){continue;}fi[ge++]=jZ;
}bO.fa[0]=ge;if(ge===0){return 0;}var l9=lA(player,l8);return lC(l9,l8);}function l6(player){
var jZ=kv[player];if(jZ===aD.f2){return aD.f2;}if(!bA.gR.lO(jZ)||!ag.gm[jZ]){kv[player]=aD.f2;
return aD.f2;}return jZ;}function lH(player,l8,jZ,lP){if(lP===aD.f2){kv[player]=jZ;return;
}var lQ=bM.ix(jZ);var lR=bM.ix(lP);if(bM.iY(l8,lQ)<bM.iY(l8,lR)){kv[player]=jZ;}}}function jG(){
this.eY=function(player){if(!bS.ek(bS.el)){return false;}if(!aD.data.passableMountains){
return false;}if(ag.fU[player].length===0){return false;}return lS(player);};function lS(player){
var lT=lU(player);if(lT===null){return false;}lV(player);var lW=lX(lT.id);if(lW===null){
return lY(player,lT.id);}lZ(player,lW);return true;}function lY(player,em){var f5=ao.j4.la;
if(f5===0){return false;}var ej=ao.j4.eQ[ay.jh(f5)]<<2;var f7=ac.f7;var f8=ay.jh(4);while(true){
ej+=f7[f8];if(ac.fA(ej)){if(ac.en(ej)===em){lZ(player,{ej:ej,gd:aD.f2});return true;}break;
}if(!ac.ew(ej)){break;}}return false;}function lU(player){var fU=ag.fU[player];var f5=fU.length;
var fV=Math.max(bL.fW(f5,12),1);var f7=ac.f7;var eB=ay.jh(f5);for(var aB=0;aB<f5;aB+=fV){
var eu=fU[(aB+eB)%f5];for(var f8=3;f8>=0;f8--){var f9=eu+f7[f8];if(ac.fA(f9)){
return{ej:f9,id:ac.en(f9),gd:player};}}}return null;}function lV(player){var l1=al.l1;
var kw=al.kw;var f5=Math.min(kw,12);var ge=ay.jh(kw);var fi=bO.fi;var fU=ag.fU;var gY=0;
for(var aB=0;aB<f5;aB++){var gd=l1[(aB+ge)%kw];if(gd!==player&&fU[gd].length&&bs.ey(player,gd)){
fi[gY++]=gd;}}bO.fa[0]=gY;}function lX(em){var f5=bO.fa[0];
var fi=bO.fi;for(var aB=0;aB<f5;aB++){var lb=lU(fi[aB]);if(lb===null){continue;}if(lb.id===em){
return lb;}}return null;}function lZ(player,lb){var ho=bA.gR.lc(player,aE.kf[aE.ho[player]]);
ag.gX[player].push(lb.ej);ad.ec(player,ho,lb.gd);aF.jX(player,true);
}}function j7(){this.eY=function(player){return bN.lD.lE(player,ld(player));};function ld(player){
var f5=ao.j4.la;if(f5===0){return-1;}var lL=Math.min(f5,ao.performance.le?f5:10);var eQ=ao.j4.eQ;
var jg=bL.fW(ay.random()*f5,ay.value(100));var e=jg+lL;var lf=ay.j3(ag.iy[player],ag.iz[player]);
var lg=ay.j3(ag.j0[player],ag.j1[player]);var lN=-1;var fL=bM.iZ(0,0,bS.fG,bS.fH);
for(var aB=jg;aB<e;aB++){var ge=aB%f5;var lh=bM.fN(lf,lg,eQ[ge]);if(lh<fL){fL=lh;
lN=ge;}}if(lN===-1){return-1;}return li(eQ[lN],lf,lg);}function li(er,lf,lg){var hK=bM.fD(er);
var hM=bM.fF(er);var iP=lf-hK;var iS=lg-hM;if(Math.abs(iP)>=Math.abs(iS)){iS=0;iP=Math.sign(iP);
}else{iP=0;iS=Math.sign(iS);}if(iP===iS){iP=1;}while(true){hK+=iP;hM+=iS;if(!bM.fR(hK,hM)){break;}
er=bM.fS(hK,hM);if(ac.iJ(bM.ev(er))){return er;}}return-1;}}function jI(){this.eY=function(player){
var lj=lk(player);if(lj===-1){return false;}var ll=bN.lm.get(lj);if(bN.lF.ln(player,ll)){
return false;}bO.g[0]=ll;return true;};function lk(player){var lm=bN.lm.lo();var f5=lm.length;
var lL=Math.min(f5,32);var hx=ay.jh(f5);for(var aB=0;aB<lL;aB++){var lj=(aB+hx)%f5;
var ll=lm[lj];var iW=ll[0];var iX=ll[ll.length-1];if(bN.lF.lp(player,iW)&&bN.lF.lq(player,iX)){
return lj;}if(bN.lF.lp(player,iX)&&bN.lF.lq(player,iW)){
lj=bN.lm.lr(iX,iW);if(lj>=0){return lj;}if(bN.lm.ls()){
return-1;}return bN.lm.lt(bN.lm.lu(ll));}}return-1;}}function jA(){this.le=0;this.dd=function(){
this.le=0;};this.eY=function(){if(this.le){return;}if(!lv()){return;}lw();};function lv(){
if(bf.kN()%30!==7){return false;}if(bA.gR.lx(90)){ao.performance.le=1;return true;}return false;
}function lw(){if(aD.hz){ly();}lz();}function ly(){var ky=bh.kz();if(!bg.kn[ky]){return;
}bh.kR(ky);var g=bO.fj;var f5=bO.fa[0];if(f5===0){return;}var m0=Math.min(100+(f5-1)*10,400);
for(var aB=0;aB<f5;aB++){aE.ku(g[aB],m0);}}function lz(){aE.ku(m1[0],100);}}function j5(){
var m2=0;var m3=0;var m4=300;var m5=300;var m6=0;this.la=0;this.eQ=new Uint32Array(512);
this.dd=function(){m2=0;m3=0;this.la=0;m6=0;};this.eY=function(){if(!m7()){
return;}if(m2>=m4){m8();return;}m9();};function m8(){var mA=ao.j4.la;if(mA){if(bf.kN()%350!==1){
return;}if(m6!==mA){m6=mA;return;}if(!bA.gR.jn(m1[0])){return;}}else{if(bf.kN()%12!==8){
return;}}if(bA.gR.mB()){return;}ao.j4.dd();}function m7(){var f5=ao.j4.la;if(f5===0){
return true;}var eQ=ao.j4.eQ;if(bf.kN()%35!==6){return f5<eQ.length;}for(var aB=f5-1;aB>=0;aB--){
if(!ac.ew(eQ[aB]<<2)){f5--;eQ[aB]=eQ[f5];}}ao.j4.la=f5;return f5<eQ.length;
}function m9(){var i=bS.fG;var mC=i-2;var f5=mC*(bS.fH-2);var mD=m4;var eQ=ao.j4.eQ;
var lL=ao.j4.la;var mE=eQ.length;var ge=Math.min(m3+mD*((1+19*ao.performance.le)*m5),f5);
var aB;for(aB=m3;aB<ge;aB+=mD){var ej=4*(aB%mC+(bL.fW(aB,mC)+1)*i+1);if(ac.ew(ej)){eQ[lL]=ej>>2;
lL++;if(lL===mE){aB+=mD;break;}}}m3=aB;if(m3>=f5){m2++;m3=m2;}ao.j4.la=lL;}}function jK(){
this.eY=function(){if(bf.kN()%51!==45){return;}mF();};function mF(){var f5=bN.y.mG;var mH=bN.y.mH;
var mI=bN.y.mI;var mJ=bN.y.mJ;var mK=bN.y.mK;var kg=aE.kg;var ho=aE.ho;for(var aB=0;aB<f5;aB++){
var mL=mH[aB];if(mL%64===6){continue;}var ll=mI[aB];var player=bN.lF.mM(ll[ll.length-1]);
if(player<0||!bA.gR.l4(player,mK[aB]>>3)){continue;}if(ay.jh(1000)>=kg[ho[player]]){
continue;}if(!mN(aB,ll)){continue;}var mO=mJ[aB];if(mL>=64&&bN.mP.mQ(player,mO)){continue;
}mR(player,ll,mO,aB,mL);}}function mN(mS,ll){var f5=ll.length-1;var mT=bN.y.mU[mS];var fL=0;
for(var aB=mT+1;aB<f5;aB++){fL+=bM.iV(ll[aB],ll[aB+1]);}fL+=bM.iV(bM.iq(bN.y.mV[mS]),ll[mT+1]);
return fL<=60;}function mR(player,ll,mO,mS,mL){if(!bN.mW.mX(player)){
return;}if(!bA.gR.mY(player,aE.kc[aE.ho[player]],32,0)){return;}bN.y.mH[mS]=64+mL%64;
bN.mP.ec(mO,bN.y.mZ);bO.g[0]=bN.lm.lu(ll);bO.fh[1]=6;bA.gR.ma(player);bN.y.mb(player);
}}function mc(){aN.eY();af.eY();aW.md();b0.y.eY();}function me(){b1.eY();aG.eY();an.eY();
ae.eY();b4.eY();aF.eY();ao.eY();bN.y.eY();al.mf();aV.eY();az.eY();bV.eY();af.eY();af.mg();aW.eY();
bP.eY();aU.eY();aP.eY();aN.eY();b5.eY();aR.eY();aw.eY();bd.eY();bh.eY();b0.y.eY();b0.mh.eY();
t.eY();bU.eM.eY();b9.eY();bf.eY();}function mi(){aH.eY();aX.eY();aQ.eY();av.eY();bC.eY();
ax.mj();}function mk(){aV.ml(false);aP.ml();aW.ml(false);aU.ml();aR.ml();aw.ml();af.ml(false);
bh.mm();}function mn(){if(af.ml(false)){bf.dk=true;}b0.y.eY();}function c6(){var mo;var mp;var mq;
this.dd=function(){mo=0;mp=new Uint16Array(aD.f2);mq=new Uint8Array(aD.f2);};this.eY=function(){
for(var aB=mo-1;aB>=0;aB--){if(mq[mp[aB]]===64){mr(mp[aB]);}else if(mq[mp[aB]]--===0){
mr(mp[aB]);g9(mp[aB]);}}if(ag.gt[m1[0]]>=160000){ms(160000);if(ag.gt[m1[0]]>=300000){ms(300000);
}}mt();};function ms(mu){for(var aB=mo-1;aB>=0;aB--){if(mq[mp[aB]]===0&&ag.gt[mp[aB]]>=mu){
g9(mp[aB]);}}}function mt(){if(!bA.gR.lO(aD.ep)){return;}bd.mv[7]=Math.max(ag.gt[aD.ep],bd.mv[7]);
}function mr(player){if(mq[player]===64){mq[player]=6;}else{var eU=ag.gt[player];
if(eU<1000){mq[player]=3;}else if(eU<10000){mq[player]=2;}else if(eU<60000){mq[player]=1;}else{
mq[player]=0;}}}this.gT=function(player){var fO,aB;for(aB=mo-1;aB>=0;aB--){if(player===mp[aB]){
mo--;for(fO=aB;fO<mo;fO++){mp[fO]=mp[fO+1];}return;}}};this.jX=function(player,mw){
for(var aB=mo-1;aB>=0;aB--){if(player===mp[aB]){return;}}mp[mo++]=player;mq[player]=mw?2:64;
};}function c7(){var size;var kE;this.dd=function(){size=aD.km;kE=new Uint16Array(aD.f2);
var kQ=aD.kQ;for(var aB=aD.km-1;aB>=0;aB--){kE[aB]=kQ+aB;}};this.eY=function(){
ao.jJ.eY();mx();};this.my=function(gd){kE[size++]=gd;};function mx(){for(var aB=size-1;aB>=0;aB--){
if(ag.mz[kE[aB]]===0){n0(aB);continue;}aE.eY(kE[aB]);}}function n0(fO){
size--;kE[fO]=kE[size];}}function c8(){var n1;var n2;var n3;var n4;var n5;var n6;var n7;
var n8;var n9;var nA;var nB;var nC;var nD;var nE=false;var nF=false;function nG(nH){nC=bf.eT;nD=33;
n2=0;n4=0;n3=0;n5=nD/nH;n1=1/(nH/nD/4);n6=(h.i/2+ii)/iG;n7=(h.j/2+ij)/iG;n8=iG;}this.nI=function(){
return nE;};this.nJ=function(){nG(1);this.nK(0,0,bS.fG-1,bS.fH-1);if(!aD.hT&&!aD.hE){
this.nL(aD.ep,3000,true,0.3);}};this.nM=function(player,nN){nO(bN.lF.nP(player,nN));
};function nO(aB){if(aB===-1){return;}var er=bM.iq(bN.y.mV[aB]);var nQ=bM.fD(er)-15;
var nR=bM.fF(er)-15;aH.nK(nQ,nR,nQ+29,nR+29);}this.nL=function(player,nH,nS,zoom){
if(aD.nT||(nE&&!nS&&nF)){return;}if(ag.gt[player]===0){nO(bN.lF.nU(player));return;}aS.nV=false;
nF=nS;nG(nH);nW(player);nX(zoom,player);nE=true;ar.nY();};this.nZ=function(nH){if(aD.hE||aD.nT){
return;}aS.nV=false;nF=false;nG(nH);na(0,0,bS.fG-1,bS.fH-1);nb(7/8);nE=true;ar.nY();
};function nW(player){n9=(ag.iy[player]+ag.iz[player]+1)/2;nA=(ag.j0[player]+ag.j1[player]+1)/2;}
function nX(zoom,player){var iP=ag.iz[player]-ag.iy[player]+1;var iS=ag.j1[player]-ag.j0[player]+1;
var fO=h.i/iP;var fP=h.j/iS;nB=fO<fP?fO:fP;var nc=zoom!==0?zoom:(iP<20&&iS<20)?0.5:0.9;
nB*=nc;nb(7/8);}function nb(eG){if(Math.abs(Math.log(nB/n8))<0.125){
nB=eG*n8;}}function na(nQ,nR,nd,ne){n9=(nQ+nd+1)/2;nA=(nR+ne+1)/2;var iP=nd-nQ+1;
var iS=ne-nR+1;var fO=h.i/iP;var fP=h.j/iS;nB=0.9*(fO<fP?fO:fP);}this.nK=function(nQ,nR,nd,ne){
nE=false;na(nQ,nR,nd,ne);iG=nB;aS.nf(n9,h.i/2);aS.ng(nA,h.j/2);ba.nh();
bf.dk=true;};this.ni=function(){if(nE&&nF){return false;}nE=false;return true;};this.eY=function(){
if(nE){nj();}};function nj(){if(n2<0.5){if(n4<n5){n4+=n5*n1;n3=n2;}}else{if(n2>1-n3){n4-=n5*n1;
n4=n4<n5*n1?n5*n1:n4;}}nC=nC>=bf.eT?bf.eT-1:nC;var f8=bf.eT-nC;if(f8>1000){n2=1;}else{n2+=n4*f8/nD;
n2=n2>1?1:n2;}nC=bf.eT;var nk=iG;var nl=ii;var nm=ij;iG=n8*(Math.pow((nB/n8),n2));var nn=iG/nk;
var no=n8*(Math.pow((nB/n8),(1-n2)));var np=1-((no-n8)/(nB-n8));aS.nf(n6+np*(n9-n6),h.i/2);
aS.ng(n7+np*(nA-n7),h.j/2);af.zoom(nn,(nl*nn-ii)/(1-nn),(nm*nn-ij)/(1-nn));
ba.nh();if(n2>=1){nE=false;bb.nq=true;}bf.dk=true;}}function c0(){var ed=bA.color;
this.nr=ed.ns(0,0,0);this.nt=ed.nu(0,0,0,0.7);this.nv=ed.nu(0,0,0,0.5);this.nw=ed.nu(0,0,0,0.85);
this.nx=ed.nu(0,0,0,0.75);this.ny=ed.nu(0,0,0,0.6);this.nz=ed.nu(0,0,0,0.35);
this.o0=ed.ns(255,255,255);this.o1=ed.nu(255,255,255,0.3);this.o2=ed.nu(255,255,255,0.6);
this.o3=ed.nu(255,255,255,0.4);this.o4=ed.nu(255,255,255,0.25);this.o5=ed.nu(255,255,255,0.85);
this.o6=ed.nu(255,255,255,0.75);this.o7=ed.nu(255,255,255,0.15);this.o8=ed.nu(255,255,255,0.11);
this.o9=ed.ns(128,128,128);this.oA=ed.nu(64,64,64,0.75);this.oB=ed.nu(88,88,88,0.83);
this.oC=ed.nu(60,60,60,0.85);this.oD=ed.nu(80,60,60,0.85);this.oE=ed.ns(170,170,170);
this.oF=ed.ns(200,235,245);this.oG=ed.ns(30,255,30);this.oH=ed.ns(0,200,0);
this.oI=ed.ns(128,255,128);this.oJ=ed.nu(10,65,10,0.75);this.oK=ed.nu(0,255,0,0.6);
this.oL=ed.nu(0,255,0,0.5);this.oM=ed.nu(0,200,0,0.5);this.oN=ed.nu(0,100,0,0.75);
this.oO=ed.nu(0,60,0,0.8);this.oP=ed.nu(0,255,0,0.3);this.oQ=ed.nu(0,180,0,0.6);
this.oR=ed.nu(0,120,0,0.85);this.oS=ed.ns(0,120,0);this.oT=ed.nu(0,70,0,0.85);
this.oU=ed.ns(190,230,190);this.oV=ed.ns(0,255,0);this.oW=ed.ns(255,120,120);
this.oX=ed.ns(255,160,160);this.oY=ed.ns(255,70,70);this.oZ=ed.ns(230,0,0);
this.oa=ed.nu(220,0,0,0.6);this.ob=ed.nu(255,100,100,0.8);this.oc=ed.nu(100,0,0,0.85);
this.od=ed.nu(60,0,0,0.85);this.oe=ed.nu(200,0,0,0.6);this.og=ed.nu(120,0,0,0.85);
this.oh=ed.ns(255,70,10);this.oi=ed.ns(230,190,190);this.oj=ed.ns(255,0,0);
this.ok=ed.ns(255,0,255);this.ol=ed.nu(60,0,60,0.85);this.om=ed.nu(0,60,60,0.85);
this.on=ed.nu(10,60,60,0.9);this.oo=ed.nu(0,96,96,0.75);this.op=ed.ns(0,255,255);
this.oq=ed.ns(160,160,255);this.or=ed.nu(0,40,90,0.75);this.os=ed.nu(0,0,255,0.6);
this.ot=ed.ns(200,200,255);this.ou=ed.nu(50,50,255,0.83);this.ov=ed.nu(20,90,150,0.75);
this.ow=ed.ns(255,120,100);this.ox=ed.nu(255,255,0,0.5);this.oy=ed.nu(255,255,150,0.2);
this.oz=ed.ns(255,255,0);this.p0=ed.ns(255,255,200);this.p1=ed.nu(200,200,0,0.6);
this.p2=ed.nu(140,120,0,0.75);this.p3=ed.nu(180,160,40,0.75);this.p4=ed.nu(70,50,20,0.85);
this.p5=ed.nu(30,30,0,0.85);this.p6=ed.nu(60,60,0,0.85);this.p7=ed.ns(255,255,100);
this.p8=ed.ns(255,255,140);this.p9=ed.nu(255,140,0,0.75);this.pA=ed.nu(70,40,0,0.85);
this.pB=ed.ns(255,150,0);this.pC=ed.nu(255,200,80,0.85);this.pD=ed.nu(0,0,0,0);
this.pE=ed.nu(255,255,255,0);this.pF=ed.nu(254,254,254,0);ed=null;}function cy(){this.hV=new pG();
this.gR=new pH();this.pI=new pJ();this.pK=new pL();this.kS=new pM();}function pG(){
this.hW=function(er){if(aD.kk){b8.pI.hW(aD.ep,er);}else{b0.pN.pO(er);}};this.hc=function(ih,jZ){
if(aD.kk){b8.pI.hc(aD.ep,ih,jZ);}else{b0.pN.pP(ih,jZ);}};this.pQ=function(ih,pR){if(aD.kk){
b8.pI.pS(aD.ep,ih,pR);}else{b0.pN.pT(ih,pR);}};this.hh=function(ih,er){var pU=(er<<3)+bO.fh[6];
if(aD.kk){b8.pI.hh(aD.ep,ih,pU);}else{if(!bN.mW.mX(aD.ep)){return;}b0.pN.pV(ih,pU);
}};this.hk=function(ih){if(ih===849){ih=850;}var nN=bO.fh[3];if(aD.kk){b8.pI.hk(aD.ep,ih,nN);
}else{if(!bN.hi.pW(aD.ep,nN)){return;}b0.pN.pX(ih,nN);}};this.pY=function(nN){
if(aD.kk){b8.pI.pY(aD.ep,nN);}else{b0.pN.pX(849,nN);}};this.pZ=function(jZ){if(aD.kk){
b8.pI.pZ(aD.ep,jZ);}else{b0.pN.pa(jZ);}};this.pb=function(pc){if(aD.kk){b8.pI.pd(aD.ep,pc);
}else{b0.pN.pe(pc);}};this.ht=function(pf){if(aD.kk){b8.pI.ht(aD.ep,pf);}else{b0.pN.pg(pf);
}};this.ph=function(){if(aD.kk){b8.pI.ph(aD.ep);}else{b0.pN.pi();}};this.hq=function(){
if(aD.kk){b8.pI.hq(aD.ep);}else{b0.pN.pa(513);}};this.hY=function(ih,er,jZ){if(aD.kk){
b8.pI.hY(aD.ep,ih,er,jZ);}else{b0.pN.pj(ih,er,jZ);}};}function pM(){this.kT=function(player,pR,ho){
if(!bA.gR.pk(player,ho,pR)){return;}ae.pQ(player,pR);if(!bA.gR.jn(pR)&&ao.jD.k2[pR]){
ao.jD.k2[pR]--;}};this.pl=function(player,pR,ho){if(!bA.gR.pm(ho,pR)){bd.gV(player,ho,12);
return;}if(!an.ec(pR,bO.fc[0])){return;}bq.pn(player,pR,bO.fc[0],1);bA.gR.gU(pR,bO.fc[0]);
bd.po(player,pR);af.pp(pR,bO.fc[0]);};}function pH(){this.pq=function(pc,player){
aN.pb(aD.ep,player,pc);b0.pN.pr(pc,player);};this.ps=function(player){aN.pt(player,0);
b0.pN.pu(player);};this.pv=function(pw,player){aN.px(pw,player);b0.pN.py(pw,player);
};this.pz=function(){if(aD.kk||aD.hE){return;}b0.q0.pz();};}function pL(){this.eY=function(aC){
var id,fo,ni;bH.dd(aC);bH.eC+=2;ni=8*bH.size;while(bH.eC+8<=ni){id=bH.q1(4);fo=bH.q1(9);if(id===0){
this.q2(id,fo,bH.q1(22));}else if(id===1){this.q2(id,fo,bH.q1(10),bH.q1(10));}else if(id===2){
this.q2(id,fo,bH.q1(10),bH.q1(9));}else if(id===3){this.q2(id,fo,bH.q1(10),bH.q1(27));
}else if(id===4){this.q2(id,fo,bH.q1(10),bH.q1(16));}else if(id===5){
this.q2(id,fo,bH.q1(10));}else if(id===6){this.q2(id,fo,bH.q1(10));}else if(id===7){
this.q2(id,fo,bH.q1(1));}else if(id===10){this.q2(id,fo,bH.q1(20),bH.q1(22));}else{this.q2(id,fo);
}}};this.q3=[];this.q4=function(){var q5=0;var q6=0;var q7=0;var q8=0;var q9=0;var qA=0;var qB=0;
var aB;var f5=512;for(aB=0;aB<f5;aB++){q6+=ag.mz[aB];q7+=ag.gt[aB];q8+=ag.h7[aB];q9+=bN.y.kU[aB];
}qA+=bN.y.mG;qB+=al.kw;q5=q6+q7+q9+qA+qB;q5=(q8%1073741824)*4+q5%4;this.q3.push(q5);
};this.q2=function(id,fo,fq,fs){if(id===0){b8.pI.hW(fo,fq);}else if(id===1){b8.pI.hc(fo,fq,fs);
}else if(id===2){b8.pI.pS(fo,fq,fs);}else if(id===3){b8.pI.hh(fo,fq,fs);}else if(id===4){
b8.pI.hk(fo,fq,fs);}else if(id===5){b8.pI.pZ(fo,fq);}else if(id===6){b8.pI.pd(fo,fq);
}else if(id===7){b8.pI.ht(fo,fq);}else if(id===8){b8.pI.ph(fo);}else if(id===9){b8.pI.qC(fo);
}else if(id===10){b8.pI.hY(fo,fq>>10,fs,fq%1024);}};}function pJ(){this.hW=function(player,er){
if(!bA.gR.hG(0)){return;}if(!bA.gR.hH(player)){return;}if(!bM.im(er)){return;}
b9.qD.qE(0,player,er);aD.qF.ec(player,er);};this.hc=function(player,ih,jZ){if(!bA.gR.hG(1)){return;
}if(!bA.gR.hH(player)){return;}if(!bA.gR.qG(player,jZ)){return;}if(!bA.gR.mY(player,ih,12,0)){
return;}if(!bA.gR.qH(player,jZ)){return;}var jQ=ad.jl(player,bO.f1[0]);if(!jQ&&!ad.k4(player)){
return;}ag.qI[player]++;b9.qD.qE(1,player,ih,bO.f1[0]);if(!ao.jB.jP(player,jQ)){
return;}bA.gR.ma(player);bd.qJ(player,ih);ao.jB.jV(player);};this.pS=function(player,ih,pR){
if(!bA.gR.hG(1)){return;}if(!bA.gR.hH(player)){return;}if(!aD.hz){return;}if(!bA.gR.qG(player,pR)){
return;}if(!bA.gR.qK(player,pR)){return;}if(!bA.gR.pk(player,bA.gR.ig(player,ih),pR)){
return;}if(!an.ec(pR,bO.fc[0])){return;}b9.qD.qE(2,player,ih,pR);
ae.pQ(player,pR);};this.hh=function(player,ih,pU){bO.fh[1]=pU&7;var er=pU>>3;if(!bA.gR.hG(1)){
return;}if(!bA.gR.hH(player)){return;}if(!bM.im(er)){return;}if(!bN.mW.mX(player)){
return;}if(!bN.mW.qL(er)){return;}if(!bA.gR.mY(player,ih,32,0)){return;}if(!bN.lD.qM(player,er,1)){
return;}bd.qN(player);b9.qD.qE(3,player,ih,pU);bA.gR.ma(player);bl.qO.hh(player);bN.y.mb(player);
};this.hk=function(player,ih,nN){if(ih===849){this.pY(player,nN);return;}if(!bA.gR.hG(1)){return;
}if(!bA.gR.hH(player)){return;}if(!bA.gR.mY(player,ih,32,0)){return;}if(!bN.hi.qP(player,nN)){
return;}bd.qN(player);b9.qD.qE(4,player,ih,nN);bA.gR.ma(player);bl.qO.hk(player);
bN.y.mb(player);};this.pY=function(player,nN){if(!bA.gR.hG(1)){return;}if(!bA.gR.hH(player)){
return;}if(!bN.qQ.eY(player,nN)){return;}b9.qD.qE(4,player,849,nN);};this.pZ=function(player,jZ){
if(jZ===513){this.hq(player);return;}if(!bA.gR.hG(1)){return;}if(!bA.gR.hH(player)){
return;}jZ=Math.min(jZ,aD.f2);if(!ad.jl(player,jZ)){return;}b9.qD.qE(5,player,jZ);ad.qR(player,jZ);
};this.pd=function(player,pc){if(!bA.gR.hG(1)&&!bA.gR.hG(2)){return;}if(!bA.gR.hH(player)){
return;}pc=bL.iD(pc,0,1023);b9.qD.qE(6,player,pc);af.qS(player,0,pc);};this.ht=function(player,pf){
if(!aw.hs(player)){return;}b9.qD.qE(7,player,pf);aw.qT(player,pf);};this.ph=function(player){
if(!bA.gR.hG(0)&&!bA.gR.hG(1)){return;}if(!bA.gR.hH(player)){return;}if(!aM.qU(player)){
return;}b9.qD.qE(8,player);bQ.ph(player);};this.qC=function(player){b9.qD.qE(9,player);
bQ.qC(player);};this.hq=function(player){if(!aw.hu(player)){return;}b9.qD.qE(5,player,513);
aw.hq(player);};this.hY=function(player,ih,er,jZ){if(!bA.gR.hG(1)){return;}if(!bA.gR.hH(player)){
return;}if(!bA.gR.qG(player,jZ)){return;}if(!bA.gR.qH(player,jZ)){return;}if(!bM.im(er)){
return;}if(!am.eg.ez(player,er)){return;}if(!ad.jl(player,bO.f1[0])&&!ad.k4(player)){return;
}b9.qD.qE(10,player,(ih<<10)+bO.f1[0],er);var ho=bA.gR.lc(player,ih);ag.gX[player].push(bO.f6[0]);
ad.ec(player,ho,bO.f1[0]);aF.jX(player,true);bd.qV(player);};}function qW(){this.qX=[];
this.qY=document.createElement(S[0]);function dd(qY){qY.style.position=S[3];qY.style.height=S[11];
qY.style.padding=S[21];}this.qZ=function(qa,marginTop){var title=document.createElement("h2");
title.textContent=qa;title.style.margin="0";title.style.marginBottom=S[30];
if(marginTop){title.style.marginTop=marginTop;}title.style.fontSize="1.3em";
title.style.overflowWrap=S[28];this.qY.appendChild(title);return title;
};this.qb=function(qa,marginBottom){var qc=document.createElement("p");qc.textContent=qa;
qc.style.fontSize=S[6];qc.style.lineHeight=S[63];qc.style.marginBottom=marginBottom||"0";
this.qY.appendChild(qc);return qc;};this.qd=function(qa){var qe=document.createElement("p");
qe.textContent=qa;qe.style.fontSize=S[17];qe.style.marginBottom="0";
qe.style.whiteSpace=S[47];qe.style.overflowWrap=S[28];this.qY.appendChild(qe);
return qe;};this.qf=function(qg,fontSize){var qY=document.createElement(S[0]);qY.innerHTML=qg;
qY.style.fontSize=fontSize||S[17];qY.style.lineHeight=S[63];this.qY.appendChild(qY);
return qY;};this.qh=function(qi){var aB;var qj=qi.qj;var f5=qj.length;for(aB=0;aB<f5;aB++){
this.qY.appendChild(qj[aB]);}};this.qk=function(ql){this.qX.push(ql);this.qY.appendChild(ql.e);
return ql;};this.resize=function(){var f5=this.qX.length;for(var aB=0;aB<f5;aB++){
if(this.qX[aB].resize){this.qX[aB].resize();}}};dd(this.qY);}function qm(qn,qo){
var qY=document.createElement(S[0]);this.qp=qY;this.qq=qo;function dd(){qY.style.width=S[1];
qY.style.maxWidth=S[1];qn.style.lineHeight=S[41];qn.style.overflowX=S[16];qn.style.overflowY=S[11];
for(var aB=0;aB<qo.length;aB++){qY.appendChild(qo[aB].qY);}qn.appendChild(qY);
}function qr(qs){var i=0.25*bA.qt.qu(0.6)*h.iF;return Math.max(Math.floor(qs/i),1);
}this.resize=function(){qv();qw();qw();};function qv(){var aB;for(aB=0;aB<qo.length;aB++){
qo[aB].resize();}}function qw(){var aB,qx,j,ge,f8;var qs=h.k*qY.offsetWidth;
var qy=new Float64Array(qr(qs));var qz=bc.qz;var r0=(qs-(qy.length+1)*bc.gap)/(qy.length*h.k);
qy.fill(qz);for(aB=0;aB<qo.length;aB++){f8=qo[aB].qY;qx=f8.style;j=bA.r1.min(qy);
ge=qy.indexOf(j);qx.top=bA.qt.r2(j);qx.left=bA.qt.r2(qz+ge*(r0+qz));qx.width=bA.qt.r2(r0);
bA.qt.r3(f8,5);qy[ge]+=f8.offsetHeight+3*qz;}qY.style.height=bA.qt.r2(bA.r1.max(qy)-2*qz);
}dd();}function w(r4,r5,r6,r7,r8){var r9=document.createElement("button");this.button=r9;
this.rA=r5;this.rB=r6;function rC(self){r9.innerHTML=r4;r9.style.color=r8?bB.oz:bB.o0;
r9.style.userSelect=S[5];r9.style.outline=S[5];r9.style.overflowWrap=S[28];
self.rD(r6);r9.style.border=S[5];r9.style.font=S[7];self.rE(0);r9.style.padding="0em 0.3em";
r9.onclick=rF;r9.addEventListener(S[84],rG);r9.addEventListener(S[85],rH);
r9.addEventListener(S[53],rG);r9.addEventListener(S[54],rI);}this.rE=function(rJ){
var rK=1.1-Math.min(0.01*r4.length,0.6)+0.2*rJ;r9.style.fontSize=rK.toFixed(1)+"em";
};this.rD=function(ed){if(!ed){r7=0;ed=bB.nw;}else if(ed===1){ed=bB.oC;}else if(ed===2){
r7=1;ed=bB.oC;}this.rB=r6=ed;r9.style.backgroundColor=ed;};function rG(){if(bJ.rL()){
return;}var rM=bA.color.rN(r6);if(r7!==false){if(rM[0]>0&&rM[0]<255&&rM[0]===rM[1]&&rM[0]===rM[2]){
return;}}if(rM[0]>128&&rM[1]>128&&rM[2]>128){r9.style.backgroundColor=bA.color.rO(r6,-50);
}else{r9.style.backgroundColor=bA.color.rO(r6,(rM[3]&&rM[3]<120)?150:50);
}}function rF(){if(r7){var rM=bA.color.rN(r6);if(rM[0]===rM[1]&&rM[0]===rM[2]){
return;}}if(r5){var rP=r5(this);if(!rP){rQ(this);}else if(rP===2){rG();}}}function rI(){
this.style.backgroundColor=r6;}function rH(){rQ(this);}function rQ(f8){f8.style.backgroundColor=r6;
f8.blur();}rC(this);}function rR(rS,qn){var qY;function dd(){qY=document.createElement(S[0]);
qY.style.display="grid";qY.style.gridTemplateColumns="repeat(auto-fill, minmax(9.5em, 1fr))";
qY.style.overflowY=S[11];qY.style.gridAutoRows="5.3em";
qY.style.maxHeight=S[1];rT();}function rT(){for(var aB=0;aB<rS.length;aB++){
rS[aB].rE(1);qY.appendChild(rS[aB].button);}qn.appendChild(qY);}this.resize=function(){var aB;
for(aB=0;aB<rS.length;aB++){bA.qt.r3(rS[aB].button);}qY.style.gap=qY.style.padding=bA.qt.r2(bc.qz);
};dd();}function rU(rV,rW,rX){this.fC=0;this.fE=0;this.i=0;
this.j=0;this.resize=function(){this.j=Math.min(bA.qt.qu(rX||0.5)*rV[1]*h.iF,h.j-2*bc.gap);
this.i=Math.min(this.j*(rV[0]/rV[1]),h.i-2*bc.gap);
this.j=rV[1]*this.i/rV[0];this.fC=bc.gap+rW[0]*(h.i-this.i-2*bc.gap);
this.fE=bc.gap+rW[1]*(h.j-this.j-2*bc.gap);};this.rY=function(){return this.fC+0.5*this.i;
};}function rZ(ra,rb){var rc=document.createElement(S[0]);var rd=document.createElement(S[0]);
var re=document.createElement(S[0]);var rf=null;this.rg=new rh({value:"",eC:-1},0,ri,rj);
var rk;var rl=0;var rm=1;var rn=0;var ro=1048575;function rC(self){self.rg.e.rp=127;
rc.style.position=S[3];rc.style.left="0";rc.style.width=S[1];rc.style.overflowX=S[16];
rc.style.overflowY=S[11];rc.style.font=S[7];rc.style.backgroundColor=bB.ny;
rc.addEventListener(S[32],function(){rn=rc.scrollTop;if(rn<rc.scrollHeight-rc.clientHeight-2){rm=0;
}else{rm=1;}});rd.style.font=S[7];re.style.position=S[3];re.style.left="0";re.style.width=S[1];
self.rg.e.setAttribute(S[83],L(13));self.rg.e.style.position=S[3];self.rg.e.style.top="0";
self.rg.e.style.left="0";self.rg.e.style.height=S[1];self.rg.e.style.backgroundColor=bB.nv;
self.rg.e.style.textAlign=S[10];rk=new w(L(14),ri);rk.button.top="0";rk.button.style.position=S[3];
rk.button.style.height=S[1];rk.rD(bB.pE);rf=new rq("127",rk.button,1,1);
rc.appendChild(rd);re.appendChild(self.rg.e);re.appendChild(rk.button);
}function ri(){ra();rf.rr.textContent=127;}function rj(e){e.target.value=bA.rs.rt(e.target.value);
rf.rr.textContent=127-e.target.value.length;}this.ru=function(rv){ro=1048575;
rd.textContent="";if(!rv){this.mm();}};this.mm=function(){var rw=bn.y.rx[0];var ry=bn.y.rz[rw];
var s0=ry.s0;var f5=s0.length;var jg=ro===1048575?0:(f5-((ry.s1-ro+1048575)%1048575));
ro=ry.s1;jg=Math.max(jg,0);if(jg>=f5){return;}var s2=document.createDocumentFragment();
for(var aB=jg;aB<f5;aB++){s3(s2,bn.lF.s4(s0[aB],bn.lF.s5(s0[aB])));}rd.appendChild(s2);
s6();};this.s7=function(r){var s2=document.createDocumentFragment();s3(s2,r);rd.appendChild(s2);
s6();};function s3(s2,ql){if(!ql){return;}ql.s8=1;s2.appendChild(bn.s9.transform(ql));
}function s6(bu){if(rm){rc.scrollTop=rc.scrollHeight;}else if(bu){
rc.scrollTop=rn;}}this.show=function(qn){qn.appendChild(rc);qn.appendChild(re);this.resize(qn);
};this.sA=function(qn){t.removeChild(qn,rc);t.removeChild(qn,re);};this.resize=function(qn){
rl=qn?qn.offsetHeight:rl;var sB=bA.qt.sC(0.04,0.75);var sD=Math.max(sB,rl-sB);var sE=h.i/h.k;
var sF=0.7*sE;var sG=bA.qt.r2(rl-sB-sD);re.style.height=bA.qt.r2(sB);rc.style.height=bA.qt.r2(sD);
if(h.j>h.i||a0.a1.iE()){re.style.top=sG;rc.style.top=bA.qt.r2(rl-sD);bA.qt.r3(rc,8);}else{
rc.style.top=sG;re.style.top=bA.qt.r2(rl-sB);bA.qt.r3(rc,2);}this.rg.e.style.width=bA.qt.r2(sF);
this.rg.e.style.fontSize=rk.button.style.fontSize=bA.qt.r2(0.5*sB);bA.qt.r3(this.rg.e,6);
rk.button.style.left=bA.qt.r2(sF);rk.button.style.width=bA.qt.r2(sE-sF);var sH=0.385*sB;
if(a0.a1.iE()){sH*=0.8-(h.i>h.j)*0.12;}rd.style.marginLeft=rd.style.marginRight=bA.qt.r2(0.5*sH);
rd.style.fontSize=bA.qt.r2(sH);s6(1);};rC(this);}function sI(sJ,r4,sK){r4=r4||L(15);
this.e=document.createElement("p");function dd(e){e.textContent=(sJ.value?"🟩 ":"⬜ ")+r4;
e.style.margin="0";e.style.marginBottom=S[21];e.style.cursor=S[33];e.addEventListener(S[26],click);
}function click(){var value=1-sJ.value;this.textContent=(value?"🟩 ":"⬜ ")+r4;if(sJ.eC!==undefined){
bj.sL.sM(sJ.eC,value);}else{sJ.value=value;}sK&&sK(value);}dd(this.e);}function sN(qn,qg){
var qY=document.createElement(S[0]);this.qp=qY;function dd(){qn.style.overflowX=S[16];
qn.style.overflowY=S[11];qY.innerHTML=qg;qn.appendChild(qY);}this.resize=function(){
qY.style.padding=bA.qt.r2(bc.qz);qY.style.lineHeight=bA.qt.r2(bA.qt.sC(0.035));
};dd();}function sO(sP){var qY=document.createElement(S[0]);this.e=qY;this.sQ=sP;function dd(){
var aB;var f5=sP.length;qY.style.width=S[1];qY.style.height="2.7em";qY.style.marginTop=S[30];
qY.style.border=S[7];for(aB=0;aB<f5;aB++){sP[aB].style.verticalAlign=S[74];
sP[aB].style.width=(100/f5).toFixed(2)+"%";sP[aB].style.height=S[1];sP[aB].style.fontSize=S[6];
qY.appendChild(sP[aB]);}}this.resize=function(){var aB;var f5=sP.length;for(aB=1;aB<f5;aB++){
bA.qt.r3(sP[aB],4);}};dd();}function sR(sS,r6,sT){this.qY=document.createElement(S[0]);
this.rS=sS;var sU=0;function rC(sV){sV.qY.style.height=sV.qY.style.maxHeight=S[1];
for(var aB=0;aB<sS.length;aB++){sS[aB].rD(r6);sS[aB].button.style.height=S[1];
sS[aB].button.style.padding=S[67];sS[aB].button.style.whiteSpace=S[23];
sV.qY.appendChild(sS[aB].button);}}this.resize=function(qn,sW){
var f5=sS.length;if(!sT){for(var aB=1;aB<f5;aB++){bA.qt.r3(sS[aB].button,4);}}var sX=0;
for(aB=0;aB<f5;aB++){sX+=sS[aB].button.offsetWidth;}if(qn){sU=qn.offsetWidth;}if(sW&&sX<sU){
for(aB=0;aB<f5;aB++){sS[aB].button.style.width=(100*sS[aB].button.offsetWidth/sX).toFixed(2)+"%";
}}else{for(aB=0;aB<f5;aB++){sS[aB].button.style.width=S[11];}}if(!sW){
this.resize(qn,1);}};rC(this);}function sY(){this.e=document.createElement("hr");function rC(e){
e.style.marginBottom=e.style.marginTop="0.65em";e.style.marginLeft=e.style.marginRight="-4%";
e.style.border=S[5];}this.resize=function(){bA.qt.r3(this.e,8,bB.o9);};
rC(this.e);}function sZ(){var sa=document.createElement(S[0]);var sb=document.createElement(S[0]);
var sc=0;var sd=0;var se,sf;function rC(){sa.style.position=S[3];sa.style.backgroundColor=bB.nw;
sa.style.color=bB.o0;sa.style.pointerEvents=S[5];sa.style.zIndex="5";sa.style.maxWidth=S[1];
sb.style.position=S[3];sb.style.color=bB.o0;sb.style.pointerEvents=S[5];sb.style.zIndex="5";
}this.show=function(fC,fE,qa,sg,sh,ed){if(sc){if(sg){this.sA();}else{return;}}if(fC===fE&&fC===-1){
fC=se;fE=sf;}else{se=fC;sf=fE;}var si=Math.floor(bA.qt.sC(0.018));fC=Math.max(si+2,fC);
if(!sh){sd=sg;}sc=1;var sj=h.i/h.k;sa.style.whiteSpace=S[23];sa.textContent=qa;
bA.qt.r3(sa,5);sa.style.font=bA.qt.sk(0,bA.qt.sC(0.015));sa.style.padding="0.3em 0.6em";
sa.style.left=fC+"px";sa.style.top=S[65];document.body.appendChild(sa);
var jf=fC+sa.offsetWidth-sj;if(jf>0){fC-=jf;fC=Math.max(si+1,fC);sa.style.left=fC+"px";
if(fC<si+2){sa.style.whiteSpace=S[47];}}var sl=sa.offsetHeight;sa.style.top=(fE-sl+sd*bc.sm)+"px";
fC-=si;sb.style.backgroundColor=bA.color.ns((ed>>12)<<2,((ed>>6)&63)<<2,(ed&63)<<2);
sb.style.left=fC+"px";sb.style.top=sa.style.top;sb.style.width=si+"px";
sb.style.height=sl+"px";bA.qt.r3(sb,4);bA.qt.r3(sb,8);bA.qt.r3(sb,2);document.body.appendChild(sb);
};this.sA=function(sn){if(!sc){return 1;}if(sn&&sd){return 0;}sc=0;t.removeChild(document.body,sa);
t.removeChild(document.body,sb);return 1;};rC();}function rh(so,type,sp,sq){
this.e=document.createElement(S[24]);function dd(e){e.type=type?S[48]:S[44];
e.id=S[24]+(t.y.sr++);e.value=so.value;e.style.width=S[1];e.style.userSelect=S[5];
e.style.outline=S[5];e.style.resize=S[5];e.style.border=S[7];e.style.font=S[7];e.style.color=bB.o0;
e.style.backgroundColor=bB.nt;e.style.fontSize=S[17];e.style.padding="0.1em 0.2em";
e.addEventListener(S[53],function(){h.ss++;});e.addEventListener(S[54],function(){
h.ss--;if(so.eC!==-1){bj.sL.sM(so.eC,e.value);}});e.addEventListener("keypress",function(event){
if(event.key===S[40]){event.preventDefault();if(so.eC!==-1){bj.sL.sM(so.eC,e.value);
}if(sp){sp();}else{e.blur();}}});if(sq){e.addEventListener(S[24],function(ql){sq(ql);
});}}dd(this.e);}function st(qn,data,su){var f5=data.sv.length;var sw=document.createElement(S[0]);
var sx=document.createElement(S[0]);var sy=document.createElement(S[0]);
var sz=new Array(f5);var qo=new Array(f5);var t0=new Array(data.t1.length);
var t2=bA.color.nu(70,70,0,0.35);function dd(){qn.style.display=S[15];qn.style.flexDirection=S[97];
sx.style.overflowX=S[16];sx.style.overflowY=S[11];sx.addEventListener(S[32],function(){
this.t3=this.scrollTop;if(su&&su.t4){t.y.t5[su.t4]=this.scrollTop;
}});t6();rT();if(su&&su.t4){sx.t3=t.y.t5[su.t4];}}function t6(){var f8,aB;
var sv=data.sv;var lL=f5?sv[0].length:0;for(aB=0;aB<f5;aB++){sz[aB]=document.createElement(S[0]);
sz[aB].style.backgroundColor=t7(aB);sz[aB].style.width=S[1];sz[aB].style.display=S[15];
qo[aB]=new Array(lL);for(var fO=0;fO<lL;fO++){qo[aB][fO]=f8=document.createElement(S[0]);
f8.style.display=S[15];f8.style.justifyContent=S[10];f8.style.wordBreak=S[98];
f8.style.padding=S[130];f8.style.width=data.t8[fO]+"%";f8.innerHTML=sv[aB][fO].fX;
if(sv[aB][fO].eU===1){f8.name=""+aB;f8.style.color=bB.oz;f8.style.backgroundColor=t2;
f8.addEventListener(S[84],rO);f8.addEventListener(S[85],t9);tA(f8,sv[aB][fO].tB,sv[aB][fO].tC);}
sz[aB].appendChild(f8);}}sw.style.display=S[15];sw.style.backgroundColor=bA.color.nu(0,120,0,0.35);
for(aB=0;aB<t0.length;aB++){t0[aB]=f8=document.createElement(S[0]);f8.style.display=S[15];
f8.style.justifyContent=S[10];f8.style.wordBreak=S[98];f8.style.padding=S[130];
f8.style.width=data.t8[aB]+"%";f8.innerHTML=data.t1[aB];sw.appendChild(f8);}}function tA(f8,tB,tC){
if(tC===2147483647){return;}f8.addEventListener(S[26],function(){bD.a7(30);bD.a8(30,tB);
bH.dd(bD.aC);this.style.backgroundColor=t2;t.u(8,t.tD,new tE(25,{tF:0,tB:bF.tG.tH(bF.tG.tI(5)),
tC:tC}));});}function rO(){this.style.backgroundColor=bA.color.rO(t2,160);
}function t9(){this.style.backgroundColor=t2;}function rT(){
for(var aB=0;aB<f5;aB++){sy.appendChild(sz[aB]);}sx.appendChild(sy);qn.appendChild(sw);
qn.appendChild(sx);}function t7(aB){return aB%2===1?bA.color.nu(130,130,130,0.35):bB.nz;
}this.resize=function(){qw();qw();};function qw(){
var aB,fO;qn.style.font=bA.qt.sk(0,bA.qt.tJ(0.026,0.5,0.03));for(aB=1;aB<t0.length;aB++){
bA.qt.r3(t0[aB],4);}bA.qt.r3(sw,2);if(!f5){return;}var tK=sw.offsetWidth;
var tL=sy.offsetWidth;var hX;for(aB=0;aB<t0.length;aB++){hX=0.01*data.t8[aB]*tL;
t0[aB].style.width=(100*hX/tK).toFixed(2)+"%";}var lL=data.sv[0].length;for(aB=0;aB<f5;aB++){
bA.qt.r3(sz[aB],2);for(fO=1;fO<lL;fO++){bA.qt.r3(qo[aB][fO],4);}}if(sx.t3){sx.scrollTop=sx.t3;
}}dd();}function tM(){var tN=document.createElement(S[0]);var tO=document.createElement(S[0]);
var tP=document.createElement(S[0]);var sy=document.createElement(S[0]);
var rS=[];var tQ;var tR;var e6=[L(16),L(17),L(18),L(19),L(20),L(21),L(22)];
var tS=[1,2,3,0,9,10,11];function dd(){tN.style.position=S[3];tO.style.width="25%";
tO.style.height=S[1];tO.style.backgroundColor=bB.nw;tP.style.position=S[3];tP.style.width="75%";
tP.style.height=S[1];tP.style.backgroundColor=bB.nw;tP.style.top=tP.style.right=bA.qt.r2(0);
bA.qt.tT(tP);sy.style.height=sy.style.maxHeight=S[1];rS.push(new w("",function(){tU(0);},bB.ol));
rS.push(new w("",function(){tU(1);},bB.om));rS.push(new w("",function(){tU(2);},bB.od));
rS.push(new w("",function(){tU(3);},bB.oO));rS.push(new w("",function(){tU(4);},bB.pA));
rS.push(new w("",function(){tU(5);},bB.p6));rS.push(new w("",function(){tU(6);},bB.pA));
tQ=new Array(rS.length);for(var aB=0;aB<rS.length;aB++){rS[aB].button.style.position=S[3];
tQ[aB]=[new tV(e6[aB],rS[aB].button,0.25,0.45),new tV("",rS[aB].button,0.53,0.84,1)
];rS[aB].button.style.height=rS[aB].button.style.maxHeight=S[1];rS[aB].button.top=bA.qt.r2(0);
sy.appendChild(rS[aB].button);}tP.appendChild(sy);tN.appendChild(tO);tN.appendChild(tP);
}function tU(aB){t.u(8,0,new tE(21,{tW:tS[aB],tX:0,tY:10}));}this.show=function(){
this.sM(t.y.tZ);document.body.appendChild(tN);};this.sA=function(){t.removeChild(document.body,tN);
};this.sM=function(tZ){var ta=[3,0,1,2,4,5,6];for(var aB=0;aB<rS.length;aB++){var i=tZ[aB];
i=i?i:"";tQ[ta[aB]][1].rr.textContent=i;}};this.resize=function(){var aB;var tb=bc.gap;
var j=bA.qt.tc(0.085);var i=Math.min(4*j,h.i-2*tb);var f5=rS.length;bA.qt.td(tN,tb,h.j-tb-j,i,j);
bA.qt.r3(tN);bA.qt.r3(tO,6);for(aB=0;aB<f5-1;aB++){bA.qt.r3(rS[aB].button,6);}for(aB=0;aB<f5;aB++){
tQ[aB][0].resize();tQ[aB][1].resize();}rS[0].fC=0;rS[0].button.style.left=bA.qt.r2(rS[0].fC);
rS[0].button.style.width=bA.qt.te(1.7*j);for(aB=1;aB<f5;aB++){
rS[aB].fC=rS[aB-1].fC+rS[aB-1].button.offsetWidth;rS[aB].button.style.left=bA.qt.r2(rS[aB].fC);
}if(!tR){if(!ab.tf()){return;}tR=ab.get(14);tR.style.width="24%";
tR.style.position=S[3];tO.appendChild(tR);}tR.style.left=bA.qt.r2(0);tR.style.top="7%";if(tP.tg){
tP.scrollLeft=tP.tg;}};dd();}function th(ti,tj,tk,tl,ra,rb){var tm=document.createElement(S[0]);
var tn=document.createElement(S[0]);var tp=document.createElement(S[0]);
var tq=document.createElement(S[0]);var tr=document.createElement(S[0]);
var ts=document.createElement(S[0]);var tt=document.createElement(S[0]);
var tu=document.createElement(S[0]);var tv=document.createElement(S[18]);
var tw=document.createElement(S[0]);this.tx=new rZ(ra,rb);this.ty=new tz(rb);
this.u0=[ti,tj,tk,tl];function rC(self){tm.style.position=S[3];tm.style.top="0";tm.style.left="0";
tm.style.width=S[1];tm.style.height=S[1];tm.style.backgroundColor=bB.nz;if(!bJ.rL()){
tm.style.backdropFilter=S[99];tm.style.webkitBackdropFilter=S[99];}tn.style.position=S[3];
tn.style.top="0";tn.style.left="0";tn.style.width=S[1];tn.style.display=S[15];
tn.style.alignItems=S[10];var g=[tp,tq,tr,tw];for(var aB=0;aB<g.length;aB++){
g[aB].style.position=S[3];g[aB].style.left="0";g[aB].style.width=S[1];
bA.qt.tT(g[aB]);}ts.style.position=S[3];ts.style.left="0";ts.style.width=S[1];ts.style.font=S[7];
tt.style.position=S[3];tt.style.left="0";tt.style.width=S[1];tu.style.position=S[3];
tu.style.top="0";tu.style.left="0";tu.style.height=S[1];tu.style.width=S[29];
tu.style.backgroundColor=bB.oM;tv.innerHTML="";tv.style.position=S[3];tv.style.top=S[29];
tv.style.left=S[29];tv.style.transform=S[73];u1();self.ty.show(ts);}function u1(){
tn.appendChild(u2());tp.appendChild(ti.qY);tq.appendChild(tj.qY);tr.appendChild(tk.qY);
tt.appendChild(tu);tt.appendChild(tv);tw.appendChild(tl.qY);tm.appendChild(tn);
tm.appendChild(tp);tm.appendChild(tq);tm.appendChild(tr);tm.appendChild(ts);tm.appendChild(tt);
tm.appendChild(tw);}function u2(){var u3=document.createElement("h1");u3.textContent=L(23);
u3.style.margin="0 auto 0.15em auto";u3.style.fontFamily=S[120];u3.style.fontSize=S[7];
u3.style.fontWeight=S[7];return u3;}this.u4=function(u5){var qa=(u5/10).toFixed(1)+"%";
tu.style.width=qa;tv.innerHTML=qa;};this.u6=function(){this.ty.sA(ts);
this.tx.show(ts);};this.u7=function(){this.tx.sA(ts);this.ty.show(ts);};this.u8=function(){
return tn;};this.show=function(){document.body.appendChild(tm);};this.sA=function(){
t.removeChild(document.body,tm);};this.resize=function(u9){var uA=1-0.4*a0.a1.iE()*(h.i>1.6*h.j);
var uB=bA.qt.sC(uA*0.05);var uC=h.j>h.i;var uD=bA.qt.sC(uA*0.06+0.03*uC);
var uE=bA.qt.sC(uA*0.08+0.03*uC);var uF=bA.qt.sC(0.04+0.02*uC);var uG=bA.qt.sC(uA*0.02+0.01*uC);
var uH=bA.qt.sC(0.025);tm.style.font=bA.qt.sk(0,uH);tr.style.font=bA.qt.sk(0,0.9*uH);
tw.style.font=bA.qt.sk(0,0.9*uH);if(uA<1){var uI=bA.qt.sk(0,uA*uH);tp.style.font=uI;
tr.style.font=uI;tw.style.font=uI;tt.style.font=uI;tq.style.font=uI;}tn.style.height=bA.qt.r2(uB);
tn.style.font=bA.qt.sk(0,0.72*uB);bA.qt.r3(tn,2);tp.style.top=bA.qt.r2(uB);
tp.style.height=bA.qt.r2(uE);bA.qt.r3(tp,2);tq.style.font=bA.qt.sk(0,uA*bA.qt.sC(0.02));
tq.style.top=bA.qt.r2(uB+uE);tq.style.height=bA.qt.r2(uF);
bA.qt.r3(tq,2);tr.style.top=bA.qt.r2(uB+uE+uF);tr.style.height=bA.qt.r2(uD);bA.qt.r3(tr,2);
ts.style.top=bA.qt.r2(uB+uE+uF+uD);ts.style.height=bA.qt.r2(h.j/h.k-uB-uE-2*uD-uF-uG);
tt.style.top=bA.qt.r2(h.j/h.k-uD-uG);tt.style.height=bA.qt.r2(uG);bA.qt.r3(tt,8);
tv.style.font=bA.qt.sk(0,0.8*uG);tw.style.top=bA.qt.r2(h.j/h.k-uD);tw.style.height=bA.qt.r2(uD);
bA.qt.r3(tw,8);ti.resize(tp);tj.resize(tp);tk.resize(tp);tl.resize(tp);if(u9){this.tx.resize(ts);
}else{this.ty.resize();}};rC(this);}function tz(rb){var tm=document.createElement(S[0]);
var ts=document.createElement(S[0]);function rC(){tm.style.top="0";tm.style.left="0";
tm.style.width=tm.style.height=S[1];tm.style.overflowX=S[16];tm.style.overflowY=S[11];
tm.style.font=S[7];ts.style.font=S[7];ts.style.margin=S[42];tm.appendChild(ts);}this.mm=function(){
ts.textContent="";bn.uJ.uK&&bn.uJ.sA(1);var s2=document.createDocumentFragment();
var uL=bn.y.rx[0];var uM=bn.uM.uN[uL];var uO=bn.uM.uO[uL];for(var aB=0;aB<uM.length;aB++){
uP(s2,uM[aB],aB<uO,uL);}ts.appendChild(s2);};function uP(s2,ql,uQ,uL){
var rr=document.createElement(S[18]);rr.textContent=(uQ?"🟢 ":"⚪ ")+bn.lF.uR(ql,uL);
rr.style.color=bn.lF.uS(ql.uT);rr.style.cursor=S[33];rr.style.margin="0.2em 0.2em 0.2em 0.2em";
rr.style.width=rr.style.maxWidth=uL===2?"10em":"9em";rr.style.height=rr.style.maxHeight="1.4em";
rr.style.whiteSpace=S[49];rr.style.overflow=S[16];rr.style.textOverflow="ellipsis";
rr.style.font=S[7];rr.style.display=S[51];bn.lF.uU(ql)&&(rr.style.textDecoration=S[31]);
if(ql.uV){rr.style.textDecorationLine=S[31];rr.style.textDecorationStyle=S[95];}
rr.onclick=function(e){rb(e,ql);};!bJ.rL()&&(rr.onmouseover=function(e){bn.uJ.uW(e.target,ql,1);});
s2.appendChild(rr);}this.show=function(qn){qn.appendChild(tm);};this.sA=function(qn){
t.removeChild(qn,tm);};this.resize=function(){ts.style.fontSize=bA.qt.r2(bA.qt.sC(0.02,0.3));
};rC();}function uX(uY){var tm=document.createElement(S[0]);
var re=document.createElement(S[0]);var uZ=[];function rC(){tm.style.position=S[3];
tm.style.color=bB.o0;tm.style.zIndex="3";tm.style.right="0";tm.style.top="0";
re.style.position=S[3];re.style.height=S[11];re.style.color=bB.o0;re.style.backgroundColor=bB.nw;
re.style.left="0";re.style.width=S[1];re.style.overflowWrap=S[28];tm.appendChild(re);
for(var aB=0;aB<4;aB++){uZ[aB]=document.createElement(S[0]);uZ[aB].style.position=S[3];
uZ[aB].style.backgroundColor=bB.nw;uZ[aB].style.color=bB.o0;uZ[aB].style.top="0";
uZ[aB].style.display=S[15];uZ[aB].style.justifyContent=S[10];uZ[aB].style.alignItems=S[10];
uZ[aB].style.userSelect=S[5];uZ[aB].style.outline=S[5];uZ[aB].style.font=S[7];
uZ[aB].ua=aB;if(aB!==2){uZ[aB].onclick=uY;uZ[aB].onmouseover=rG;uZ[aB].onmouseout=rH;
}tm.appendChild(uZ[aB]);}uZ[0].textContent="◀";uZ[1].textContent="▶";uZ[3].textContent="✖";
}this.sM=function(ub,uc){uZ[2].textContent=(ub+1)+S[22]+uc;};function rG(){if(bJ.rL()){return;
}this.style.backgroundColor=bA.color.rO(bB.nw,50);}function rH(){this.style.backgroundColor=bB.nw;
}this.show=function(ql){ql=bn.lF.s4(ql,bn.lF.s5(ql));re.appendChild(bn.s9.transform(ql));
document.body.appendChild(tm);};this.resize=function(){var j=bA.qt.sC(0.03,0.5);
tm.style.width=(10*j)+"px";tm.style.font=bA.qt.sk(1,0.75*j);bA.qt.r3(tm,4);re.style.top=j+"px";
re.style.font=bA.qt.sk(0,0.55*j);bA.qt.r3(re,2);tm.style.height=(j+re.offsetHeight)+"px";
for(var aB=0;aB<3;aB++){bA.qt.r3(uZ[aB],6);uZ[[0,1,3][aB]].style.width=(2*j)+"px";
}for(aB=0;aB<4;aB++){uZ[aB].style.height=j+"px";bA.qt.r3(uZ[aB],2);
}uZ[2].style.width=(4*j)+"px";uZ[1].style.left=(2*j)+"px";uZ[2].style.left=(4*j)+"px";
uZ[3].style.left=(8*j)+"px";};this.ud=function(){for(var aB=0;aB<4;aB++){uZ[aB].onclick=null;
uZ[aB].onmouseover=null;uZ[aB].onmouseout=null;}t.removeChild(document.body,tm);
tm=re=uZ=null;};rC();}function ue(uY){var sa=document.createElement(S[0]);
function rC(){sa.style.position=S[3];rH();sa.style.color=bB.o0;sa.style.zIndex="3";
sa.style.right="0";sa.style.top="0";sa.style.display=S[15];sa.style.justifyContent=S[10];
sa.style.alignItems=S[10];sa.style.userSelect=S[5];sa.style.outline=S[5];
sa.onclick=uY;sa.onmouseover=rG;sa.onmouseout=rH;}function rG(){if(bJ.rL()){return;
}sa.style.backgroundColor=bA.color.rO(bB.nw,50);}function rH(){sa.style.backgroundColor=bB.nw;
}this.sM=function(uc){sa.textContent=uc;};this.show=function(){document.body.appendChild(sa);
};this.resize=function(){var j=bA.qt.sC(0.03,0.5);sa.style.width=(2*j)+"px";sa.style.height=j+"px";
sa.style.font=bA.qt.sk(1,0.75*j);bA.qt.r3(sa,4);bA.qt.r3(sa,2);};this.ud=function(){
sa.onclick=null;sa.onmouseover=null;sa.onmouseout=null;t.removeChild(document.body,sa);
sa=null;};rC();}function uf(sS){var tm=document.createElement(S[0]);
var ug=document.createElement(S[0]);this.fC=0;this.fE=0;var sc=0;this.rS=sS;function rC(){
for(var aB=0;aB<sS.length;aB++){new rq(""+(1+aB),sS[aB].button,0,1);}tm.style.position=S[91];
tm.style.top="0";tm.style.left="0";tm.style.width=S[1];tm.style.height=S[1];tm.style.zIndex="5";
ug.style.position=S[3];uh();tm.appendChild(ug);tm.addEventListener(S[26],ui);}function ui(){
bn.uj.sA();}function uh(){var uk=(100/sS.length).toFixed(2)+"%";for(var aB=0;aB<sS.length;aB++){
sS[aB].button.style.width=S[1];sS[aB].button.style.height=sS[aB].button.style.maxHeight=uk;
sS[aB].button.style.padding=S[67];ug.appendChild(sS[aB].button);}}this.show=function(fC,fE,ul){
if(sc){return [0,0];}sc=1;this.fC=fC;this.fE=fE;um(this,ul);document.body.appendChild(tm);
};this.sA=function(){if(!sc){return;}sc=0;tm.removeEventListener(S[26],ui);
t.removeChild(document.body,tm);};function um(self,ul){var i=bA.qt.sC(0.16,0.7);
var j=sS.length*i/3;var un=h.i/h.k;var uo=h.j/h.k;var nc=Math.min(1,Math.min(un/i,uo/j));
i*=nc;j*=nc;ul&&(self.fC+=bA.qt.sC(0.03,0.5));self.fC=bL.iD(self.fC,0,un-i);
self.fE=bL.iD(self.fE,0,uo-j);ug.style.left=self.fC+"px";ug.style.top=self.fE+"px";
ug.style.width=i+"px";ug.style.height=j+"px";ug.style.font=bA.qt.sk(0,0.3*j/sS.length);
bA.qt.r3(ug,5);for(var aB=1;aB<sS.length;aB++){bA.qt.r3(sS[aB].button,8);
}}rC();}function ee(){var up;var uq;var ur;this.show=function(ef,colors,id){ur=id;
if(id>=0){if(b0.y.eZ(0)){b0.ea.us(0,id);}}ef=ef.trim();ef=ef.replace(new RegExp("[<>]","g"),"");
ef=ef.replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b","g"),
"<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>");ef=ef.replace(
new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b","g"),
"<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>"
);ef=ef.replace(
new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b","g"),
"<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>");ef=ef.replace(
new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b","g"),
"<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>"
);ef=ef.replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b","g"),
"<a href='https://t.me/$1' target='_blank'>t.me/$1</a>"
);ef=ef.replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b","g"),
"<a href='https://x.com/$1' target='_blank'>x.com/$1</a>");ef=ef.replace(
new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b","g"),
"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>"
);ef=ef.replace(new RegExp("\\r?\\n","g"),S[8]);
ef=ef.replace(new RegExp("\\*\\*(.*?)\\*\\*","g"),"<b>$1</b>");
ef=ef.replace(new RegExp("\\*(.*?)\\*","g"),"<i>$1</i>");
uq=colors;ut();uu(ef);uv();};function ut(){up=document.createElement(S[0]);
up.style.position=S[91];up.style.top="0";up.style.left="0";up.style.width=S[1];
up.style.height=S[1];up.style.backgroundColor=bA.color.nu(uq[0][0],uq[0][1],uq[0][2],0.6);
up.style.zIndex="6";up.onclick=function(e){
if(e.target===up){uw();}};}function uu(ef){var ux=document.createElement(S[0]);
ux.style.position=S[3];ux.style.display=S[15];ux.style.flexDirection=S[97];ux.style.top=S[29];
ux.style.left=S[29];ux.style.backgroundColor=uy(2);var i1;if(a0.a1.iE()){i1=bA.qt.uz(h.min);}else{
i1=bA.qt.sC(0.4);}i1=Math.max(i1,200);ux.style.width=bA.qt.r2(i1);ux.style.height=bA.qt.r2(i1);
ux.style.transform=S[73];v0(ux,i1);v1(ux,ef,i1);v2(ux,i1);up.appendChild(ux);}function v0(ux,i1){
var v3=document.createElement(S[0]);v3.style.flex="0 0 10%";v3.style.overflow=S[16];
v3.style.backgroundColor=uy(1);v3.style.color=v4(1,7);v3.style.font=bA.qt.sk(1,0.05*i1);
v3.style.display=S[15];v3.style.alignItems=S[10];v3.style.justifyContent=S[10];
v3.innerHTML=L(24);ux.appendChild(v3);}function v1(ux,ef,i1){var v5=document.createElement(S[0]);
v5.style.flex="0 0 70%";v5.style.overflowY=S[11];v5.style.overflowX=S[16];
v5.style.whiteSpace=S[47];v5.style.wordWrap=S[28];v5.style.padding=bA.qt.r2(0.02*i1);
v5.style.backgroundColor=uy(2);v5.style.color=v4(2,8);v5.style.font=bA.qt.sk(0,0.07*i1);
v5.innerHTML=ef;v5.innerHTML="<style>a { color: inherit; }</style>"+v5.innerHTML;
ux.appendChild(v5);}function v2(ux,i1){var v6=document.createElement(S[0]);
v6.style.display=S[15];v6.style.flexDirection="row";v6.style.justifyContent="space-between";
v6.style.alignItems="stretch";v6.style.backgroundColor=uy(3);
v6.style.flex="1";v6.style.padding=bA.qt.r2(0.01*i1);v6.style.gap=bA.qt.r2(0.01*i1);
var v7=document.createElement(S[0]);v7.style.flex="0 0 60%";v7.style.height=S[1];
var v8=new w(L(25,0,0,1),function(){uw();},uy(4),false);v8.button.style.width=S[1];
v8.button.style.height=S[1];v8.button.style.color=v4(4,9);v8.button.style.font=bA.qt.sk(1,0.05*i1);
v7.appendChild(v8.button);var v9=document.createElement(S[0]);v9.style.flex="0 0 15%";
v9.style.height=S[1];v9.style.backgroundColor=uy(5);var vA=document.createElement(S[0]);
vA.style.flex="1";vA.style.height=S[1];var vB=new w(L(26),function(e){
bA.qt.vC(e);vD();return true;},uy(6),false);vB.button.style.width=S[1];vB.button.style.height=S[1];
vB.button.style.color=v4(6,10);vB.button.style.font=bA.qt.sk(1,0.035*i1);
vA.appendChild(vB.button);v6.appendChild(v7);v6.appendChild(v9);v6.appendChild(vA);
ux.appendChild(v6);}function vD(){if(ur<0){return;}if(b0.y.eZ(0)){b0.ea.us(1,ur);
ur=-1;}}function uy(aB){return bA.color.ns(uq[aB][0],uq[aB][1],uq[aB][2]);}function v4(fO,fP){
bA.color.vE(uq[fO],uq[fP]);return uy(fP);}function uv(){document.body.appendChild(up);
}function uw(){if(!up){return;}up.remove();up=null;}}function vF(so,vG){
this.qj=[];var vH=this.qj;function dd(){var vI;var f5=so.su.length;for(var aB=0;aB<f5;aB++){
vI=document.createElement("p");vI.textContent="⚪ "+so.su[aB];vI.style.margin="0";
vI.name=""+aB;vI.style.cursor=S[33];vI.style.fontSize=S[17];vI.addEventListener(S[26],click);
vH.push(vI);}vH[so.value].textContent=vH[so.value].textContent.replace("⚪","🟢");}function click(){
for(var aB=0;aB<vH.length;aB++){vH[aB].textContent=vH[aB].textContent.replace("🟢","⚪");
}this.textContent=this.textContent.replace("⚪","🟢");
var eC=parseInt(this.name);if(so.eC!==undefined){bj.sL.sM(so.eC,eC);
}if(vG){vG(eC);}}dd();}function vJ(title,vK,vL){var tN=document.createElement(S[0]);
var vM=document.createElement(S[0]);var sy=document.createElement(S[0]);
var vN=document.createElement(S[0]);var vO=document.createElement(S[0]);
this.vP=sy;this.vQ=vK;function dd(){tN.style.position=S[3];tN.style.top="0";tN.style.left="0";
tN.style.width=S[1];tN.style.height=S[1];vM.style.position=S[3];vM.style.top="0";vM.style.left="0";
vM.style.width=S[1];vM.style.display=S[15];vM.style.backgroundColor=bB.nw;vN.style.position=S[3];
vN.style.left="0";vN.style.width=S[1];bA.qt.tT(vN);vO.style.height=vO.style.maxHeight=S[1];
sy.style.position=S[3];sy.style.width=S[1];sy.style.backgroundColor=bB.nw;vR();rT();}function vR(){
for(var aB=0;aB<vK.length;aB++){vK[aB].button.style.height=S[1];vK[aB].button.style.padding=S[67];}
}function rT(){for(var aB=0;aB<vK.length;aB++){vO.appendChild(vK[aB].button);}vM.appendChild(vS());
vN.appendChild(vO);if(vL!==false){tN.appendChild(sy);tN.appendChild(vM);tN.appendChild(vN);
}}function vS(){var vT=document.createElement("h1");vT.textContent=title;vT.style.margin=S[11];
vT.style.fontSize=(title.length>=18&&h.j>h.i)?"1.8em":"2.3em";vT.style.fontFamily=S[120];
return vT;}this.show=function(){if(vL!==false){document.body.appendChild(tN);
}else{document.body.appendChild(vM);document.body.appendChild(vN);}};this.sA=function(){
if(vL!==false){t.removeChild(document.body,tN);}else{t.removeChild(document.body,vM);
t.removeChild(document.body,vN);}};this.vU=function(){var sD=bA.qt.sC(0.1);
var sB=bA.qt.sC(0.08+0.04*(h.vV<1),0.3);var vW=h.j/h.k-sD-sB;return{sD:sD,sB:sB,vW:vW};
};this.resize=function(sW){var aB,e;var f5=vK.length;var vX=this.vU();var sD=vX.sD;
var sB=vX.sB;vM.style.height=bA.qt.r2(sD);bA.qt.r3(vM,2);vN.style.top=bA.qt.r2(h.j/h.k-sB);
vN.style.height=bA.qt.r2(sB);bA.qt.r3(vN,8);sy.style.top=bA.qt.r2(sD);
sy.style.height=sy.style.maxHeight=bA.qt.r2(vX.vW);vM.style.font=bA.qt.sk(0,bA.qt.sC(0.02,0.15));
vN.style.font=bA.qt.sk(0,bA.qt.sC(0.02,0.7));sy.style.font=bA.qt.sk(0,bA.qt.sC(0.02,0.35));
for(aB=1;aB<f5;aB++){bA.qt.r3(vK[aB].button,4);}var sX=0;
for(aB=0;aB<f5;aB++){sX+=vK[aB].button.offsetWidth;}if(sW&&sX<vN.offsetWidth){for(aB=0;aB<f5;aB++){
e=vK[aB].button;e.style.width=(100*vK[aB].button.offsetWidth/sX).toFixed(2)+"%";
}}else{for(aB=0;aB<f5;aB++){e=vK[aB].button;e.style.width=S[11];
}}if(vN.tg){vN.scrollLeft=vN.tg;}if(!sW){this.resize(true);}};this.vY=function(){
var vX=this.vU();var ed=h.k;vZ.fillStyle=bB.nw;vZ.fillRect(0,ed*vX.sD,h.i,ed*vX.vW);
};dd();}function rq(va,vb,vc,vd){this.rr=document.createElement(S[18]);
function rC(self){self.rr.textContent=va;self.rr.style.color=bB.o0;self.rr.style.position=S[3];
self.rr.style.font=S[7];if(vd){self.rr.style.bottom="0.06em";}else{self.rr.style.top="0.12em";
}if(vc){self.rr.style.left=S[131];}else{self.rr.style.right=S[131];}self.rr.style.fontSize=S[30];
self.rr.style.pointerEvents=S[5];self.rr.style.whiteSpace=S[23];vb.style.position="relative";
vb.style.overflow=S[16];vb.appendChild(self.rr);}rC(this);}function tV(va,vb,ve,vf,vg){
this.rr=document.createElement(S[18]);function rC(self){self.rr.textContent=va;
self.rr.style.color=bB.o0;self.rr.style.font=S[7];self.rr.style.margin="0.1em 0.6em";
self.rr.style.pointerEvents=S[5];vg&&(self.rr.style.fontWeight=S[37]);
self.rr.style.whiteSpace=S[49];self.rr.style.display="block";vb.appendChild(self.rr);
}this.resize=function(){this.rr.style.fontSize=((vf-ve)*vb.offsetHeight).toFixed(1)+"px";
};rC(this);}function vh(vi,vj,vk,vl){var vm=document.createElement("textarea");
this.e=vm;var vn=true;function dd(){vm.setAttribute("id","textArea"+(t.y.sr++));
vm.setAttribute("autocomplete","off");if(vi){vm.setAttribute(S[83],vi);
}vm.style.top="0";vm.style.left="0";vm.style.width=S[1];vm.style.height=S[1];
vm.style.userSelect=S[5];vm.style.outline=S[5];vm.style.resize=S[5];vm.style.border=S[5];
vm.style.color=bB.o0;vm.style.backgroundColor=bB.nt;if(vl){vm.style.fontSize=S[17];
vm.rows=6;vm.style.padding="0.25em";}else{vm.style.padding="0.45em";vm.style.fontSize=S[63];}
if(vk){vm.addEventListener(S[24],function(e){vk(e);});}vm.addEventListener(S[53],function(){h.ss++;
});vm.addEventListener(S[54],function(){h.ss--;});}this.resize=function(){if(vj){bA.qt.r3(vm,5);
}};this.vo=function(ef){vm.value=ef;};this.vp=function(){return vm.value;};this.vq=function(){
vm.select();};this.clear=function(){vm.value="";};this.vr=function(){if(vn&&navigator.clipboard){
vm.select();navigator.clipboard.writeText(vm.value).catch(function(){vn=false;vs();});return;}vs();
};function vs(){vm.select();document.execCommand("copy");}dd();}function dI(){this.rA=new vt();
this.eQ=new vu();this.sL=new vv();this.y=new vw();this.vx=new vy();this.dd=function(){
this.eQ.dd();(new vz()).dd();this.vx.dd();this.y.w0();};}function vu(){this.data=[];
this.dd=function(){w1(0,1,0,5);w1(1,1,1);w1(2,0);w2(3,2);w1(4,1);w2(5,2,S[76],2);w1(6,0);w1(7,0,0);
w1(8,0);w1(9,1,1);w1(10,1);w1(11,1,1);w2(12,2,navigator.language);w1(13);w1(14);w3(100);w2(100,2);
w2(101,2);w2(102,2);w2(103,2);w2(104,2);w2(105,2);w2(106,2);w1(107);w1(108);w1(109);w2(110,2);
w1(111);w1(112);w1(113);w2(114,2);w1(115);w2(116,2);w1(117,1);w2(118,2,"",2);w1(119,1,0,1);
w2(120,2);w1(121,1,~~(Math.random()*262144));w2(122,2,S[57]+Math.floor(Math.random()*1000));
w1(123);w2(124);w1(125,1);w2(126,2);w1(127,0,1);w1(128);w1(129);
w1(130);w1(131);w1(132);w2(133,2);w1(134,0,5);w2(135,2);w2(136,2);w1(137);w1(138);w1(139);w1(140);
w1(141);w1(142);w1(143);w1(144);w2(145,2);w1(146);w1(147);w2(148,2);w1(149);w1(150,0,1);w2(151,2);
w1(152,0,5);w1(153,1);w1(154,1);w2(155,2);w2(156,2);w1(157);w1(158);w1(159);w1(160);w2(161,2);
w1(162,0,1024);w2(163,2,S[132]);w2(164,2,S[62]);w2(165,2,"30,30,30");w2(166,2,"70,70,70");
w2(167,2,S[62]);w2(168,2,"85,85,85");w2(169,2,S[62]);for(var aB=0;aB<4;aB++){w2(170+aB,2,S[123]);
}w2(174,2);w2(175,2);w1(176,0,200);w3(180);w1(180,0);w1(181,0);};this.sM=function(eC,value){
this.data[eC].value=value;};this.w4=function(eC,value){this.sM(eC,value);var qa=String(value);
var f5=qa.length;if(f5>50000){console.log("storage value too large: index "+eC+" size "+f5);
return;}bj.rA.save(eC,qa);bj.rA.save(eC,String(this.data[eC].dw),true);};this.w5=function(eC){
return Number(this.data[eC].value);};this.w6=function(eC){return String(this.data[eC].value);
};function w1(aB,type,w7,dw){bj.eQ.data.push({eC:aB,type:type||0,
value:w7||0,w7:w7||0,dw:dw||0});}function w2(aB,type,w7,dw){bj.eQ.data.push({eC:aB,type:type,
value:w7||"",w7:w7||"",dw:dw||0});}function w3(ni){var aB;for(aB=bj.eQ.data.length;aB<ni;aB++){
bj.eQ.data.push(null);}}}function vy(){var w8=[];this.dd=function(){var qa=bj.eQ.data[161].value;
if(qa.length){w8=qa.split(";");}};this.get=function(){return w8;};this.w9=function(){
return{su:w8,value:0};};this.uV=function(tB){return bA.r1.has(w8,tB);};this.wA=function(tB){
if(wB(tB)){return 0;}wC(tB);return 1;};this.mm=function(tB){if(wB(tB)){wC(tB);}
};function wC(tB){w8.unshift(tB);bj.sL.sM(161,w8.join(";"));}this.wD=function(eC){if(eC<w8.length){
w8.splice(eC,1);bj.sL.sM(161,w8.join(";"));}};function wB(tB){var wE=w8;var f5=wE.length;
for(var aB=0;aB<f5;aB++){if(wE[aB]===tB){wE.splice(aB,1);bj.sL.sM(161,wE.join(";"));
return true;}}return false;}}function vt(){this.wF=function(eC,dw){return Number(this.wG(eC,dw));
};this.wG=function(eC,dw){var fX=null;if(a0.id===0){if(a0.wH){fX=a0.wH.getItem((dw?"v":"d")+eC);
}}else if(a0.id===1){fX=a0.wI.loadString((dw?1000:2000)+eC);}else if(a0.id===2){
fX=a0.wJ[(dw?"v":"d")+eC];}if(!fX||fX.length===0){return null;}return fX;};this.wK=function(f5,wL){
var aB;var g=[];var wM=wL?"e":"l";if(a0.id===0){if(a0.wH){for(aB=0;aB<f5;aB++){
g.push(a0.wH.getItem(wM+aB));}}}else if(a0.id===1){var wN=wL?5000:3000;for(aB=0;aB<f5;aB++){
g.push(a0.wI.loadString(wN+aB));}}else if(a0.id===2){for(aB=0;aB<f5;aB++){g.push(a0.wJ[wM+aB]);
}}return g;};this.save=function(eC,value,dw){var wO=(dw?"v":"d")+eC;if(a0.id===0){
if(a0.wH&&bj.eQ.data[140].value){try{a0.wH.setItem(wO,value);}catch(e){console.log(e);
}}return;}if(a0.id===1){a0.wI.saveString((dw?1000:2000)+eC,value);return;}if(a0.id===2){
a0.wJ[wO]=value;a0.wP.postMessage(wO+" "+value);}};this.wQ=function(g,wL){var aB;var f5=g.length;
var wM=wL?"e":"l";if(a0.id===0){if(a0.wH&&bj.eQ.data[140].value){try{for(aB=0;aB<f5;aB++){
a0.wH.setItem(wM+aB,g[aB]);}}catch(e){console.log(e);}}}else if(a0.id===1){var wN=wL?5000:3000;
for(aB=0;aB<f5;aB++){a0.wI.saveString(wN+aB,g[aB]);}}else if(a0.id===2){for(aB=0;aB<f5;aB++){
a0.wJ[wM+aB]=g[aB];a0.wP.postMessage(wM+aB+" "+g[aB]);}}};}function vz(){this.dd=function(){
wR();wS();};function wR(){var data=bj.eQ.data;if(data[2].dw===0&&(h.j>h.i||a0.id!==0)){
data[2].value=data[2].w7=1;}if(data[100].dw===0){data[100].value=data[100].w7=(a0.id===0?S[57]:
a0.id===1?"Android User ":"iOS User ")+Math.floor(1000*Math.random());
}}function wS(){var aB,fX;var data=bj.eQ.data;
var f5=data.length;for(aB=0;aB<f5;aB++){var wT=bj.rA.wF(aB,true);if(data[aB]&&data[aB].dw===wT){
fX=bj.rA.wG(aB);if(fX===null){data[aB].value=data[aB].w7;continue;}if(data[aB].type===2){
data[aB].value=fX;continue;}var wU=Number(fX);if(isNaN(wU)){data[aB].value=data[aB].w7;
continue;}data[aB].value=wU;}}}}function vw(){this.wV=function(){if(!bj.eQ.data[110].value.length){
return;}bj.eQ.data[106].value=bj.eQ.data[110];bj.sL.sM(110,"");this.wW();
};this.wW=function(){var aB;var g=bj.eQ.data[116].value.split(";");if(g.length%2===1){g.pop();
}g.unshift(bj.eQ.data[106].value);g.unshift(bj.eQ.data[105].value);for(aB=2;aB<g.length;aB+=2){
if(g[aB]===g[0]){g.splice(aB,2);break;}}var wX=[];for(aB=0;aB<g.length;aB+=2){
wX.push(g[aB]);}wY(g);bj.eQ.data[117].value=0;bj.eQ.data[117].su=wX;};this.wZ=function(eC){
bj.eQ.data[117].su.splice(eC,1);bj.eQ.data[117].value=Math.min(eC,bj.eQ.data[117].su.length-1);
var g=bj.eQ.data[116].value.split(";");g.splice(2*eC,2);wY(g);};this.wa=function(eC){
var g=bj.eQ.data[116].value.split(";");return{tB:g[2*eC],password:g[2*eC+1]};};function wY(g){
if(g.length===0){bj.sL.sM(116,"");return;}var wb=g[0];for(var aB=1;aB<g.length;aB++){wb+=";"+g[aB];
}bj.sL.sM(116,wb);}this.wc=function(){var fX=bL.iD(bj.eQ.data[121].value,-1,262143);if(fX===-1){
fX=~~(Math.random()*262144);}return fX;};this.w0=function(){var g=document.cookie.split(";");
for(var aB=0;aB<g.length;aB++){var qa=g[aB].trim();var wd=qa.indexOf("=");
var name=wd>=0?qa.substring(0,wd):qa;document.cookie=name+"=;expires=0;path=/";
document.cookie=name+"=;expires=0;path=/;domain="+location.hostname;
document.cookie=name+"=;expires=0;path=/;domain=."+location.hostname;
}};}function vv(){this.sM=function(eC,value){
if(bj.eQ.data[eC].type!==2){value=Math.floor(value);}if(bj.eQ.data[eC].value===value){
return;}bj.eQ.w4(eC,value);if(eC===0){t.x();b7.dd();t.u(2);return;}if(eC===1){h.dn(1);
return;}if(eC===2){h.dn(0);return;}if(eC===5){bA.qt.we();h.dn(0);return;}};this.wf=function(){
var aB;var data=bj.eQ.data;for(aB=0;aB<100;aB++){if(data[aB]){bj.eQ.w4(aB,data[aB].w7);
}}bA.qt.we();h.dn(1);};this.wg=function(){var data=bj.eQ.data;for(var aB=0;aB<data.length;aB++){
if(data[aB]){bj.eQ.sM(aB,data[aB].w7);}}};this.wh=function(){var aB;var fP=bj.eQ;
for(aB=128;aB<135;aB++){fP.w4(aB,fP.data[aB].w7);}};this.wi=function(data){bj.sL.sM(109,data.tC);
bj.sL.sM(107,data.wj);bj.sL.sM(108,data.wk);bj.sL.sM(112,data.wl);bj.sL.sM(111,data.wm);
bj.sL.sM(113,data.wn);bj.sL.sM(135,data.wo);bj.sL.sM(136,data.wp);bj.sL.sM(137,data.wq);
bj.sL.sM(138,data.wr);bj.sL.sM(139,data.ws);bj.sL.sM(141,data.wt);bj.sL.sM(142,data.wu);
bj.sL.sM(143,data.wv);bj.sL.sM(144,data.ww);};}function c4(){this.tG=new wx();this.wy=new wz();
this.x0=new x1();this.dd=function(){this.tG.dd();};}function wz(){this.x2=function(size){
var x3=bH;var g=[];for(var aB=0;aB<size;aB++){g.push(String.fromCharCode(x3.q1(16)));
}return g.join("");};this.x4=function(qa){qa=qa.trim();if(qa.length>20){return qa.substring(0,20);
}return qa;};}function wx(){var x5=new Uint8Array(78);this.dd=function(){var aB;
x5[50]=37;for(aB=0;aB<10;aB++){x5[aB+3]=aB+1;}for(aB=0;aB<26;aB++){x5[aB+20]=aB+11;x5[aB+52]=aB+38;
}};this.x6=function(qa){return qa.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]","g"),"-");
};this.x7=function(qa,size){qa=this.x6(qa);
if(qa.length>size){return qa.substring(0,size);}while(qa.length<size){qa="-"+qa;}return qa;};
this.x8=function(qa){var x9=x5;var f5=qa.length;var g=new Uint8Array(f5);for(var aB=0;aB<f5;aB++){
g[aB]=x9[qa.charCodeAt(aB)-45];}return g;};this.xA=function(xB){bD.a7(6*xB.length);
this.xC(xB);bH.dd(bD.aC);};this.xC=function(xB){var f5=xB.length;var i=bD;for(var aB=0;aB<f5;aB++){
i.a8(6,xB[aB]);}};this.xD=function(qa){this.xC(this.x8(qa));};this.xE=function(qa,size){
this.xC(this.x8(this.x7(qa,size)));};this.xF=function(qa,size){var g=this.x8(this.x7(qa,size));
var fX=0;var nc=1;for(var aB=g.length-1;aB>=0;aB--){fX+=nc*g[aB];nc*=64;}return fX;
};}function xG(){var i,j;var xH;this.xI=function(qa){var aB,xJ,f5,lL,gd,xK,xL,xM;var x3=bH;
bG.tG.xA(bG.tG.x8(qa));bS.xN.xO[bS.el].i=bS.fG=i=x3.q1(12);bS.xN.xO[bS.el].j=bS.fH=j=x3.q1(12);
xH=[-i,-1,i,1];xP();f5=x3.q1(12);xJ=x3.q1(5);xK=xQ(i*j-1);for(aB=0;aB<f5;aB++){lL=x3.q1(xJ);
gd=x3.q1(xK);xL=x3.q1(1)===1;xM=x3.q1(1)===1;xR(lL,gd,xL,xM);}xS();bS.xT.putImageData(bS.xU,0,0);
bS.xV=true;bS.xW.dd();bf.dk=true;};function xP(){bS.xX=document.createElement(S[4]);
bS.xX.width=bS.fG;bS.xX.height=bS.fH;bS.xT=bS.xX.getContext("2d",{alpha:false});
bS.xU=bS.xY=null;bS.xU=bS.xT.getImageData(0,0,bS.fG,bS.fH);bS.xY=bS.xU.data;bA.r1.xZ(bS.xY);}
function xR(lL,gd,xL,xM){var aB,f8;var x3=bH;var xa=bS.xY;var xb=gd;var xc=gd;var xd=0;var xe=1+xL;
var xf=2-xL;xa[gd<<2]=xe;for(aB=0;aB<lL;aB++){f8=x3.q1(2);gd=xg(gd,f8);if(xa[gd<<2]===xe){
if(xd%2===1){xh(xc,xd+2*xM+3,xf,xM,xa);}}else{xa[gd<<2]=xe;}xh(gd,f8,xf,xM,xa);xh(xc,f8,xf,xM,xa);
xc=gd;xd=f8;}if(xg(gd,0)===xb){xh(gd,0,xf,xM,xa);xh(xb,0,xf,xM,xa);}else if(xg(gd,1)===xb){
xh(gd,0,xf,xM,xa);xh(xb,2,xf,xM,xa);}if(lL===0){xh(xb,0,xf,xM,xa);xh(xb,2,xf,xM,xa);
}}function xh(hX,f8,xf,xM,xa){var l3=xg(hX,(f8+1+2*xM)&3);if(!xi(hX,l3)&&xa[l3<<2]===0){
xa[l3<<2]=xf;}}function xi(hX,l3){return Math.abs(xj(hX)-xj(l3))>1||Math.abs(xk(hX)-xk(l3))>1;
}function xj(gd){return gd%i;}function xk(gd){
return Math.floor((gd+0.5)/i)%j;}function xg(gd,f8){return gd+xH[f8];}function xS(){
var fC,fE,hx,xl,xm,xn;var xa=bS.xY;var xo=true;var xp=bS.xN.xO[bS.el].xp;var xq=bS.xN.xO[bS.el].xq;
for(fE=0;fE<j;fE++){xl=true;xm=xo;xn=0;for(fC=0;fC<i;fC++){hx=4*fE*i+4*fC;
if(fC>=xn&&xa[hx]>0){xm=xa[hx]===2;if(xl){xl=false;if(xm!==xo){xo=xm;xn=fC+1;fC=-1;continue;}
}}if(xm){xa[hx]=xq[0];xa[hx+1]=xq[1];xa[hx+2]=xq[2];xa[hx+3]=255;}else{xa[hx]=xp[0];xa[hx+1]=xp[1];
xa[hx+2]=xp[2];xa[hx+3]=255;}}}}}function x1(){this.xI=function(xr){var x3=bH;var size=x3.q1(xr);
var xs=7+9*x3.q1(1);var g=[];for(var aB=0;aB<size;aB++){g.push(String.fromCharCode(x3.q1(xs)));
}return g.join("");};}function c9(){var se,sf,xt,xu,xv,xw,xx,xy,xz,y0;
this.dd=function(){y0=new Array(12);xy=6;xv=10;xt=bL.fW(bS.fG,xv);xu=bL.fW(bS.fH,xv);
xw=bL.fW((bS.fG-xv*xt),2);xx=bL.fW((bS.fH-xv*xu),2);if(aD.hT){for(var aB=0;aB<aD.kQ;aB++){
xz=aB;y1();ag.mz[xz]=1;}}if(aD.data.spawningType===0){y2();}else if(aD.data.spawningType===1){
y2();y3();}else{y4();}bd.mv[7]=ag.gt[aD.ep];};function y2(){var y5=aD.y5;for(xz=y5;xz<aD.f2;xz++){
y1();}for(xz=(aD.hT?aD.kQ:0);xz<y5;xz++){if(y6()){var y7=xw+se*xv+bL.fW(xv,2);
var y8=xx+sf*xv+bL.fW(xv,2);y9(y7,y8);}else{aD.yA=xz;for(var fP=xz;fP<y5;fP++){xz=fP;
y1();}return;}}}function y3(){var yB=aD.yC;if(!aD.yD){yB++;}if(yB<3){return;}var data=aD.data;
var jg=(aD.hT?aD.kQ:0)+data.teamPlayerCount[0];var ni=aD.yA;var yE=new Uint32Array(yB);
var yF=new Uint32Array(yB);var yG=new Uint16Array(yB);var yH=new Uint16Array(yB);
var f3=bg.f3;var iy=ag.iy;var j0=ag.j0;var iz=ag.iz;var j1=ag.j1;var fk=bO.fk;
var fl=bO.fl;for(var aB=jg;aB<ni;aB++){fk[aB]=(iy[aB]+iz[aB])>>1;fl[aB]=(j0[aB]+j1[aB])>>1;
}for(aB=jg;aB<ni;aB++){var id=f3[aB];yE[id]+=fk[aB];yF[id]+=fl[aB];}var kn=bg.kn;
for(aB=1;aB<yB;aB++){var gY=Math.max(data.teamPlayerCount[kn[aB]],1);yG[aB]=bL.fW(yE[aB],gY);
yH[aB]=bL.fW(yF[aB],gY);}var yI=bg.yI;var yJ=bg.yJ;var yK=bg.yK;var fj=bO.fj;
for(aB=0;aB<512;aB++){fj[aB]=aB;}for(var eB=0;eB<2+(yB>=4);eB++){for(aB=jg;aB<ni;aB++){
var hX=aB;var yL=fj[hX];var yM=1;var fL=bL.yN(fk[yL]-yG[1],fl[yL]-yH[1]);for(var fO=2;fO<yB;fO++){
var yO=bL.yN(fk[yL]-yG[fO],fl[yL]-yH[fO]);if(yO<fL){fL=yO;yM=fO;}}var yP=f3[hX];if(yM===yP){
continue;}if(eB===2&&yB>=4){var yQ=Math.max((yM+1)%yB,1);var yR=bL.yN(fk[yL]-yG[yQ],fl[yL]-yH[yQ]);
for(fO=1;fO<yB;fO++){yO=bL.yN(fk[yL]-yG[fO],fl[yL]-yH[fO]);if(yO>fL&&yO<yR){
yR=yO;yQ=fO;}}if(yQ!==yP&&bL.yN(yG[yP]-yG[yQ],yH[yP]-yH[yQ])<bL.yN(yG[yP]-yG[yM],yH[yP]-yH[yM])){
yM=yQ;}}var yS=kn[yM];var yT=yJ[yS]+(aD.hT?0:yK[yS]);var l3=yI[yT];var yU=fj[l3];
var yV=yJ[yS+1];fL=bL.yN(fk[yU]-yG[yP],fl[yU]-yH[yP]);for(var ed=yT+1;ed<yV;ed++){var yW=yI[ed];
var yX=fj[yW];yO=bL.yN(fk[yX]-yG[yP],fl[yX]-yH[yP]);if(yO<fL){fL=yO;l3=yW;}}if(l3<jg||l3>=ni){
continue;}yU=fj[l3];yE[yP]+=fk[yU]-fk[yL];yF[yP]+=fl[yU]-fl[yL];yE[yM]+=fk[yL]-fk[yU];
yF[yM]+=fl[yL]-fl[yU];gY=data.teamPlayerCount[kn[yP]];yG[yP]=bL.fW(yE[yP],gY);
yH[yP]=bL.fW(yF[yP],gY);gY=data.teamPlayerCount[yS];yG[yM]=bL.fW(yE[yM],gY);
yH[yM]=bL.fW(yF[yM],gY);fj[hX]=yU;fj[l3]=yL;}}yY();}function yY(){var fj=bO.fj;
var iy=ag.iy;var j0=ag.j0;var iz=ag.iz;var j1=ag.j1;var gt=ag.gt;var yZ=ag.yZ;var gl=ag.gl;
var gm=ag.gm;var fU=ag.fU;for(var aB=0;aB<512;aB++){var ya=fj[aB];if(ya===aB){continue;
}yb(iy,aB,ya);yb(j0,aB,ya);yb(iz,aB,ya);yb(j1,aB,ya);yb(gt,aB,ya);yb(yZ,aB,ya);yb(gl,aB,ya);
yb(gm,aB,ya);yb(fU,aB,ya);yc(aB);yc(ya);fj[aB]=aB;var j=ya;var ge=fj[j];while(ge!==aB){
j=ge;ge=fj[ge];}fj[j]=ya;}}function yc(player){var iy=ag.iy;var j0=ag.j0;var iz=ag.iz;
var j1=ag.j1;for(var fE=j0[player];fE<=j1[player];fE++){for(var fC=iy[player];fC<=iz[player];fC++){
var ej=ac.yd(fC,fE);if(!ac.gf(ej)){continue;}if(ac.jb(ej)){ac.ga(ej,player);
}else{ac.ye(ej,player);}}}}function yb(g,tX,tY){var eU=g[tX];g[tX]=g[tY];g[tY]=eU;}function y4(){
var y5=aD.y5;for(xz=y5;xz<aD.f2;xz++){y1();}for(xz=(aD.hT?aD.kQ:0);xz<y5;xz++){if(yf()){continue;
}if(y6()){var y7=xw+se*xv+bL.fW(xv,2);var y8=xx+sf*xv+bL.fW(xv,2);y9(y7,y8);continue;}aD.yA=xz;
for(var fP=xz;fP<y5;fP++){xz=fP;y1();}return;}}function y6(){return yg()||yh();}function yf(){
var spawningData=aD.data.spawningData;var y7=spawningData[2*xz]+1;var y8=spawningData[2*xz+1]+1;
if(y7>3&&y7<bS.fG-5&&y8>3&&y8<bS.fH-5){if(ac.f0(ac.yd(y7,y8))&&yi(y7+3,y8+3)){
y9(y7+1,y8+1);return true;}}return false;}function yg(){var aB;for(aB=0;aB<8;aB++){
se=bL.fW(xt*ay.random(),ay.value(100));sf=bL.fW(xu*ay.random(),ay.value(100));if(yj()){return true;
}}return false;}function yh(){var iP,iS,fO,y8,fP,y7;iP=bL.fW(xt*ay.random(),ay.value(100));
iS=bL.fW(xu*ay.random(),ay.value(100));for(fO=40;fO>=1;fO--){for(y8=xu-fO;y8>=0;y8-=40){
sf=(y8+iS)%xu;for(fP=40;fP>=1;fP--){for(y7=xt-fP;y7>=0;y7-=40){se=(y7+iP)%xt;if(yj()){return true;
}}}}}return false;}function yj(){var gd,yk,yl;var gap=bL.fW((xv-xy),2);var ym=xx+sf*xv+gap;
var yn=xw+se*xv+gap;for(yk=ym+xy-1;yk>=ym;yk--){for(yl=yn+xy-1;yl>=yn;yl--){gd=ac.yd(yl,yk);
if(!ac.f0(gd)||ac.jb(gd)){return false;}}}return true;}function y9(y7,y8){y1();yo(y7-2,y8-2);
}function y1(){ag.mz[xz]=0;ag.gt[xz]=ag.yZ[xz]=0;ag.gX[xz]=[];ag.gl[xz]=[];ag.gm[xz]=[];
ag.fU[xz]=[];ag.iy[xz]=ag.j0[xz]=ag.iz[xz]=ag.j1[xz]=0;}function yo(y7,y8){ag.mz[xz]=1;
ag.iy[xz]=y7+10;ag.j0[xz]=y8+10;ag.j1[xz]=ag.iz[xz]=0;var gd,aB,yp,yq;for(yp=y7;yp<y7+4;yp++){
for(yq=y8;yq<y8+4;yq++){if((yp>y7&&yp<y7+3)||(yq>y8&&yq<y8+3)){gd=ac.yd(yp,yq);if(ac.f0(gd)){
ag.iy[xz]=Math.min(yp,ag.iy[xz]);ag.iz[xz]=Math.max(yp,ag.iz[xz]);ag.j0[xz]=Math.min(yq,ag.j0[xz]);
ag.j1[xz]=Math.max(yq,ag.j1[xz]);y0[ag.gt[xz]]=gd;ag.gt[xz]++;ac.ye(gd,xz);
}}}}ag.yZ[xz]=ag.gt[xz];for(aB=ag.gt[xz]-1;aB>=0;aB--){if(ac.yr(y0[aB],xz)){ac.ga(y0[aB],xz);
ag.gl[xz].push(y0[aB]);}else if(ac.ys(y0[aB])){ac.ga(y0[aB],xz);ag.gm[xz].push(y0[aB]);
}else if(ac.yt(y0[aB])){ac.ga(y0[aB],xz);ag.fU[xz].push(y0[aB]);}}}this.yu=function(jZ,yv,yw){
var aB,y7,y8;xz=jZ;for(aB=0;aB<20;aB++){for(y7=yv+aB;y7>=yv-aB;y7--){for(y8=yw+aB;y8>=yw-aB;y8--){
if(y7===yv+aB||y7===yv-aB||y8===yw+aB||y8===yw-aB){if(y7>3&&y7<bS.fG-5&&y8>3&&y8<bS.fH-5){
if(ac.f0(ac.yd(y7,y8))&&yx(y7+3,y8+3)){if(ag.gt[xz]>0){yy();y1();}yo(y7-1,y8-1);
return true;}}}}}}return false;};function yy(){var gd,se,sf;for(se=ag.iz[xz];se>=ag.iy[xz];se--){
for(sf=ag.j1[xz];sf>=ag.j0[xz];sf--){gd=(sf*bS.fG+se)*4;if(ac.yz(xz,gd)){
ac.z0(gd);ag.gt[xz]--;}}}}this.z1=function(jZ){xz=jZ;if(y6()){var y7=xw+se*xv+bL.fW(xv,2);
var y8=xx+sf*xv+bL.fW(xv,2);y9(y7,y8);}else{y1();}};function yi(y7,y8){var gd,yl,yk;
for(yk=y8;yk>y8-6;yk--){for(yl=y7;yl>y7-6;yl--){gd=ac.yd(yl,yk);if(ac.jb(gd)){return false;
}}}return true;}function yx(y7,y8){var gd,yl,yk;for(yk=y8;yk>y8-6;yk--){for(yl=y7;yl>y7-6;yl--){
gd=ac.yd(yl,yk);if(ac.jb(gd)&&!ac.z2(xz,gd)){return false;}}}return true;}}function z3(){at.z4();
vZ.setTransform(iG,0,0,iG,0,0);vZ.imageSmoothingEnabled=iG<3;vZ.drawImage(bS.xX,aS.z5(),aS.z6());
bP.z7.vY();vZ.drawImage(z8,aS.z5(),aS.z6());at.vY();bN.vY();af.vY();if(aD.nT){bh.vY();bC.vY();
t.vY();return;}aN.vY();aV.vY();aR.vY();bC.vY();aw.vY();aW.vY();aS.vY();aQ.vY();bh.vY();aU.vY();
aP.vY();aM.vY();aL.vY();aX.vY();be.vY();av.vY();t.vY();}function z9(zA,i,j){zA.clearRect(0,0,i,j);
zA.fillStyle=bB.nx;zA.fillRect(0,0,i,j);}function zB(zA,i,j,zC){zA.fillStyle=bB.o0;
zA.fillRect(0,0,i,zC);zA.fillRect(0,0,zC,j);zA.fillRect(i-zC,0,zC,j);zA.fillRect(0,j-zC,i,zC);
}function zD(zA,fC,fE,i1,zC,gd,zE){zA.fillStyle=bB.o0;var tK=Math.floor(i1*gd);tK+=(tK-zC)%2;
var tL=Math.floor((tK-zC)/2);var zF=Math.floor((i1-tK)/2);zA.fillRect(fC+zF,fE+zF+tL,tK,zC);
if(zE){zA.fillRect(fC+zF+tL,fE+zF,zC,tK);}}function zG(){this.dd=function(){if(aD.ki!==8){
return;}aN.zH();};this.zI=function(zJ){var elo=aD.data.elo;var jf=(elo[zJ]-elo[1-zJ])/10;
var zK=8/(1+Math.pow(2,jf/32));zK=Math.floor(10*zK+0.5);var zL=elo[zJ]+zK;
var zM=this.zN(zL);var zO=this.zN(elo[1-zJ]-zK);if(zJ===0){aN.zP(zM,zO,[S[79],S[77]]);}else{
aN.zP(zO,zM,[S[77],S[79]]);}var zQ=(zL*bL.sqrt(zL))>>8;var zR=(((1+aD.zS)*zQ)/100).toFixed(2);
if(zJ===aD.ep){aN.zT(640,L(27,[zR]),40,0,bB.o0,bB.nx,-1,false);
}else{aN.zT(640,L(28,[ag.zU[zJ],zR]),40,0,bB.o0,bB.nx,-1,false);
}};this.zN=function(elo){elo=bL.iD(elo,0,16000);
if(elo===16000){return "Unknown";}return(elo/10).toFixed(1);};}function cf(){this.s9=new zV();
this.xa=new zW();}function zW(){this.hr=false;var nQ,nR,gap,i1,zX;var zY=10;var zZ=1;this.za=[];
this.zb=100;var zc=0;var zd=new Array(9);var ze=[];var zf=[];var zg=0;var zh=0;var zi=0;var zj=0;
this.dd=function(){var aB;var zk=[0,1,2,4,7,8,9,10,11,12,13,14,15,6];for(aB=0;aB<zk.length;aB++){
var color=zk[aB]===6?bB.oQ:bB.ny;this.za.push(bA.canvas.zl(ab.get(3),zk[aB],color));
}for(aB=0;aB<aj.s9.zm;aB++){zf.push(aj.s9.zn-aj.s9.zm+aB);}for(aB=0;aB<aj.s9.zo;aB++){
zf.push(aj.s9.zp+aB);}var zq=aj.s9.zr(bK.zq);for(aB=0;aB<zq.length;aB++){
zf.push(zq[aB]);}zs();};function zs(){var aB;var qa=bj.eQ.data[120].value;
var g=qa.split(",");if(g.length!==18){for(aB=0;aB<9;aB++){zd[aB]={pc:1024-9+aB,kV:0};}return;
}for(aB=0;aB<9;aB++){var fX=parseInt(g[aB]);fX=(fX>=0&&fX<aj.s9.zn)?fX:0;var ed=parseInt(g[aB+9]);
ed=(ed>=0&&ed<1000)?ed:0;zd[aB]={pc:fX,kV:ed};}}function zt(){var aB;ze=[];if(zc===0){
for(aB=0;aB<9;aB++){ze.push(zd[aB].pc);}}else{var fP=49*zc;var fO=fP-49;if(fO>=zf.length){
zc=1;fO=0;fP=49;}fP=Math.min(fP,zf.length);fO=fP-49;for(aB=fO;aB<fP;aB++){ze.push(zf[aB]);
}}ze.push(1024);}function zu(pc){var aB;for(aB=0;aB<9;aB++){zd[aB].kV=Math.floor(zd[aB].kV*0.99);
}for(aB=0;aB<9;aB++){if(pc===zd[aB].pc){zd[aB].kV=Math.min(zd[aB].kV+30,999);
zv();return;}}zd.splice(5,0,{pc:pc,kV:Math.max(zd[4].kV,30)});zd.pop();
zv();}function zv(){var aB;zd.sort(function(fO,fP){return fP.kV-fO.kV;});var qa=""+zd[0].pc;
for(aB=1;aB<9;aB++){qa+=","+zd[aB].pc;}for(aB=0;aB<9;aB++){qa+=","+zd[aB].kV;}bj.eQ.w4(120,qa);
}this.show=function(lf,lg,zw){zg=lf;zh=lg;zc=zw||0;this.hr=true;zt();var gY=ze.length;
i1=Math.floor((a0.a1.iE()?0.075:0.0468)*h.iF);gap=Math.floor(i1/3);zX=i1+gap;zi=zY*zX;if(zi>h.i){
zi=h.i;zX=zi/zY;i1=3*zX/4;gap=zX-i1;}zZ=bL.fW(gY,zY)+!!(gY%zY);zj=zZ*zX;if(zj>h.j){zj=h.j;
zX=zj/zZ;i1=3*zX/4;gap=zX-i1;}var zx=0.5*gap;nQ=Math.min(Math.max(lf-0.5*zi+zx,zx),h.i-zi+zx);
nR=Math.min(Math.max(lg-0.5*zj+zx,zx),h.j-zj+zx);};this.hI=function(lf,lg,player){
if(!this.hr){return false;}if(this.zy(lf,lg)){var eC=bL.iD(bL.fW(lf-nQ+0.5*gap,zX),0,zY-1);
eC+=zY*bL.iD(bL.fW(lg-nR+0.5*gap,zX),0,zY-1);if(eC>=ze.length){aL.sA();return true;
}var pc=ze[eC];if(pc===1024){this.show(zg,zh,zc+1);return true;}zu(pc);if(player===aD.ep){
b8.hV.pb(pc);}else{b8.gR.pq(pc,player);}}aL.sA();return true;};this.zy=function(lf,lg){
return!(lf<nQ-0.5*gap||lg<nR-0.5*gap||lf>=nQ+zi-0.5*gap||lg>=nR+zj-0.5*gap);
};this.vY=function(){vZ.fillStyle=bB.nx;vZ.fillRect(nQ-0.5*gap,nR-0.5*gap,zi,zj);
var hx=0.5*bc.zz;vZ.lineWidth=bc.zz;vZ.strokeStyle=vZ.fillStyle=bB.o0;
vZ.strokeRect(nQ-0.5*gap+hx,nR-0.5*gap+hx,zi-2*hx,zj-2*hx);vZ.imageSmoothingEnabled=true;
var f5=ze.length;for(var aB=0;aB<f5;aB++){this.a00(ze[aB],vZ,nQ+(aB%zY)*zX,nR+bL.fW((aB),zY)*zX,
i1);}vZ.imageSmoothingEnabled=false;};this.a00=function(pc,i7,fC,fE,i1){if(pc>=1024-aj.s9.zm){
var ej=i1/this.zb;i7.setTransform(ej,0,0,ej,fC,fE);i7.drawImage(this.za[pc-1024+aj.s9.zm],0,0);
i7.setTransform(1,0,0,1,0,0);return;}bA.qt.textAlign(i7,1);bA.qt.textBaseline(i7,1);
i7.font=bA.qt.sk(0,0.89*i1);i7.fillText(aj.s9.a01(pc),fC+0.5*i1,fE+(0.56+(0.35-bA.qt.a02))*i1);
};}function zV(){this.emojis=["🥰","😎","😘","😜","🤗","🥳","😇","😊","🥱","🙄","🤔","🥺","😡","😭","😱",
"😞","💀","👹","👋","🙏","👏","💪","🙋‍♂️","🤦‍♂️","⬆️","➡️","⬇️","⬅️","👀","❤️","💔","💥","🔥","🪦","🥇","🥈","🥉",
"🎖️","🏅","👑","🎉","💯","✝️","☪️","🕉️","☸️","✡️","☦️","⚛️"];this.zm=13;this.zo=this.emojis.length;
this.zp=676;this.zn=1024;this.a03=this.emojis.indexOf("💀");this.a04=this.a03+1;
this.a05=this.emojis.indexOf("🥇");this.a06=this.emojis.indexOf("😊");this.a01=function(fX){
if(fX<this.zp){return String.fromCharCode(55356,56806+bL.fW(fX,26),55356,56806+fX%26);
}return this.emojis[Math.min(fX-this.zp,this.zo-1)];};this.zr=function(qa){
var f5=qa.length-2;var g=[];for(var aB=0;aB<f5;aB++){var a07=qa.charCodeAt(aB)-56806;
var a08=qa.charCodeAt(aB+2)-56806;if(a07>=0&&a07<26&&a08>=0&&a08<26){g.push(26*a07+a08);aB+=3;}}
return g;};this.a09=function(fX){return fX<this.zp;};this.a0A=function(fX){return fX>=1024-this.zm;
};this.a0B=function(fX){return fX>=this.zp&&fX<this.zp+this.a04;};}function c3(){
this.tG=new a0C();this.wy=new a0D();this.x0=new a0E();this.dd=function(){this.tG.dd();
};}function a0D(){this.xD=function(qa){var f5=qa.length;var i=bD;for(var aB=0;aB<f5;aB++){
i.a8(16,qa.charCodeAt(aB));}};}function a0C(){var a0F=new Uint8Array(64);this.dd=function(){
var aB;a0F[0]=45;a0F[37]=95;for(aB=0;aB<10;aB++){a0F[aB+1]=48+aB;}for(aB=0;aB<26;aB++){
a0F[aB+11]=65+aB;a0F[aB+38]=97+aB;}};this.tI=function(a0G){var x3=bH;var xB=new Uint8Array(a0G);
for(var aB=0;aB<a0G;aB++){xB[aB]=x3.q1(6);}return xB;};this.tH=function(xB){var f5=xB.length;
var a0H=a0F;var g=[];for(var aB=0;aB<f5;aB++){g.push(String.fromCharCode(a0H[xB[aB]]));
}return g.join("");};this.a0I=function(value,a0J){var a0H=a0F;
var g=[];for(var aB=0;aB<a0J;aB++){g.push(String.fromCharCode(a0H[(value>>((a0J-1-aB)*6))&63]));
}return g.join("");};}function cB(){var a0K;var a0L;var a0M;
function a0N(){a0K=[32,65,191,913,931];a0L=[64,127,688,930,1155];a0M=new Array(a0K.length+1);
for(var aB=0;aB<a0M.length;aB++){a0M[aB]=0;for(var fO=aB-1;fO>=0;fO--){a0M[aB]+=a0L[fO]-a0K[fO];
}}}a0N();this.x4=function(qa){qa=qa.trim();if(qa.indexOf(S[114])===0){return false;
}if(qa.indexOf("[Bot] ")===0){return false;}return a0O(qa,3,20);};function a0O(qa,a0P,a0Q){
qa=qa.trim();var f5=qa.length;if(f5<a0P||f5>a0Q){return false;}var a0R=0;var ed;
for(var aB=0;aB<f5;aB++){ed=qa.charCodeAt(aB);a0R+=((ed>=65&&ed<=90)||(ed>=1040&&ed<=1071))?1:0;
if(a0S(ed)===-1){return false;}}if(a0R>3&&a0R>Math.floor(f5/2)){return false;}return true;
}this.a0T=function(qa){qa=qa.trim();var f5=qa.length;var g=[];var ed;for(var aB=0;aB<f5;aB++){
ed=qa.charCodeAt(aB);var gd=a0S(ed);g.push(a0M[gd]+ed-a0K[gd]);}return g;};this.xI=function(g){
var qa="";var f5=g.length;var ed,fP;for(var aB=0;aB<f5;aB++){for(fP=1;fP<a0M.length;fP++){
if(g[aB]<a0M[fP]){ed=a0K[fP-1]+g[aB]-a0M[fP-1];qa+=String.fromCharCode(ed);break;}}}return qa;
};function a0S(ed){for(var aB=a0K.length-1;aB>=0;aB--){if(ed>=a0K[aB]&&ed<a0L[aB]){return aB;
}}return-1;}this.a0U=function(qa){var g=this.a0T(qa);var result="";for(var aB=0;aB<g.length;aB++){
result+=g[aB]<10?"00":g[aB]<100?"0":"";result+=g[aB].toString(10);}return result;
};this.a0V=function(qa){var g=new Array(Math.floor(qa.length/3));for(var aB=0;aB<qa.length;aB+=3){
g[Math.floor(aB/3)]=parseInt(qa.substring(aB,aB+3));}return this.xI(g);};this.a0W=function(qa){
var aB,fX;var g=[qa.length];for(aB=0;aB<qa.length;aB++){g[aB]=qa.charCodeAt(aB)-48;
}var result="";for(aB=0;aB<qa.length;aB++){if(aB===qa.length-1||g[aB]*10+g[aB+1]>51){
result+=g[aB].toString();}else{fX=g[aB]*10+g[aB+1];result+=String.fromCharCode(fX+(fX<26?65:71));
aB++;}}return result;};this.a0X=function(qa){var result="";var ed;for(var aB=0;aB<qa.length;aB++){
ed=qa.charCodeAt(aB);if(ed>=48&&ed<58){result+=String.fromCharCode(ed);
}else if(ed>=65&&ed<75){result+="0"+(ed-65).toString();}else if(ed>=75&&ed<91){
result+=(ed-65).toString();}else if(ed>=97&&ed<123){result+=(ed-71).toString();
}}return result;};this.a0Y=function(qa){var f5=qa.length;var ed,aB;var g=[];
for(aB=0;aB<f5;aB++){ed=qa.charCodeAt(aB);if(ed<58){g.push(qa[aB]);continue;}else if(ed<91){ed-=65;
}else{ed-=71;}g.push(String(bL.fW(ed,10)));g.push(String(ed-10*bL.fW(ed,10)));}f5=g.length-2;
ed=0;var xB=[];for(aB=0;aB<f5;aB+=3){xB[ed++]=parseInt(g[aB]+g[aB+1]+g[aB+2]);}return xB;};
this.a0Z=function(){var aB,eB;var a0a="";for(aB=0;aB<6;aB++){eB=48+ay.random()%36;eB+=eB>=58?39:0;
a0a+=String.fromCharCode(eB);}return a0a;};}function a0E(){this.a0T=function(qa,xr,a0b){var a0c=[];
var f5=qa.length;var max=0;for(var aB=0;aB<f5;aB++){var fX=qa.charCodeAt(aB);a0c.push(fX);
max=Math.max(max,fX);}var xs=max<128?7:16;a0b.a8(xr,f5);a0b.a8(1,+(xs===16));for(aB=0;aB<f5;aB++){
a0b.a8(xs,a0c[aB]);}};}function dA(){this.a0d=new a0e();this.result=new a0f();this.a0g=new a0h();
this.a0i=new a0j();this.a0k=new a0l();this.a0m=new a0n();this.dd=function(){this.result.dd();};
}function a0h(){this.a0o=function(){var f5=al.kw;var a0p=al.l1;var a0q=[];for(var aB=0;aB<f5;aB++){
var gd=a0p[aB];if(bA.gR.a0r(gd)){a0q.push(gd);}}return a0q;};this.a0s=function(){
if(bg.kn[aD.a0t]===0){return this.a0u();}bh.kR(aD.a0t);var a0q=[];var f5=bO.fa[0];
var fj=bO.fj;for(var aB=0;aB<f5;aB++){var gd=fj[aB];if(bA.gR.a0r(gd)){a0q.push(gd);}}return a0q;};
this.a0u=function(){var gd=m1[0];if(bA.gR.a0r(gd)){return [gd];}return [];};this.a0v=function(a0q){
var f5=a0q.length;var eU=0;var gt=ag.gt;for(var aB=0;aB<f5;aB++){eU+=gt[a0q[aB]];}return eU;
};}function a0e(){this.a0w=function(){if(a0x()){return;}aD.a0y=2;a0z();};this.a10=function(){
if(a0x()){return;}aD.a0y=1;a0z();};function a0x(){if(aD.a11===2){return true;}aw.a12();aD.a11=2;
aD.a13=aD.a14;return false;}function a0z(){bR.a0k.a15();aX.show(aD.a16===1,false,aD.a16===2);
bR.result.a15();bR.a0m.eY();bR.a0i.eY();bR.a0i.a17();aN.a18(true);aN.a19(247);
aN.a19(956);aN.a19(957);aV.ml(true);aW.ml(true);aw.ml();bC.a1A();aD.hE&&bf.a1B.a1C();bf.dk=true;
bb.a1D();a0.a1.setState(0);}}function a0j(){this.eY=function(){if(aD.a0y===2){aN.a1E(0,59);
aH.nZ(2700);return;}if(aD.ki<7){a1F();return;}if(aD.ki===8){a1G();return;}if(aD.ki===9){
a1H();return;}a1I();};function a1G(){if(aD.a16){aN.a1E(aD.a1J,2);}else{aN.a1E(1-aD.ep,3);
}aD.a1K.zI(aD.a1J);aH.nL(aD.a1J,2700,false,0);}function a1F(){var a1L=bg.kn[aD.a0t];
var a1M=bg.a1N[a1L];aQ.a1O(L(29,[a1M]),2,1,12);aN.zT(0,L(30,[a1M]),40,0,bB.o0,bB.nx,-1,false);
aH.nZ(2700);}function a1H(){aN.a1P();aH.nZ(2700);}function a1I(){
aN.a1Q(aD.a1J);aH.nL(aD.a1J,2700,false,0);}this.a17=function(){if(aD.hE){return;}var qa=b0.y.a1R();
if(aD.ki<7){qa+="/log/team";}else if(aD.ki===8){qa+="/log/1v1";}else if(aD.ki===9){
qa+="/log/zombies";}else{qa+="/log/br";}aN.zT(720,qa,736,0,bB.o0,bB.oO,-1,false);};}function a0n(){
this.eY=function(){if(bR.result.a1S===0||bR.result.a0q.length===0||aD.ki===8){if(bA.gR.hH(aD.ep)){
a1T();}return;}var a1U=a1V();a1W(a1U);if(aD.a0y===2||aD.ki>=7){return;}a1X(a1U);
};this.a1Y=function(){if(aD.kk){return;}var a1Z=ag;var xb=aD.ep;if(a1Z.a1a[xb]===0||a1Z.jU[xb]<1||
2*a1Z.qI[xb]>3*(a1Z.jT[xb]+a1Z.jU[xb])){return;}a1T();};function a1b(){if(aD.ki===8){
return 0;}var tb=Math.floor(ag.a1c[aD.ep]/50);tb=Math.min(tb,200);return tb/100;}function a1T(){
var tb=a1b();if(tb===0){return;}aN.zT(440,L(31,[tb.toFixed(2)]),40,0,bB.oI,bB.nx,-1,false);
}function a1V(){aN.zT(520,L(32),40,0,bB.o0,bB.nx,-1,false);
var a0q=bR.result.a0q;var f5=a0q.length;var gt=ag.gt;var g=[];
for(var aB=0;aB<f5;aB++){var gd=a0q[aB];g.push({gd:gd,eU:gt[gd]});}g.sort((fO,fP)=>fP.eU-fO.eU);
var a1N=ag.zU;var eU=bR.result.a1d;var tb=bR.result.a1S;var qa="";var a1e="";var a1U=0;
for(aB=0;aB<f5;aB++){var hp=g[aB].eU*tb/(100*eU);var a1f=a1N[g[aB].gd]+": "+hp.toFixed(2)+S[14];
a1e+=a1f;if(g[aB].gd===aD.ep){a1U=hp;}if(aB>2&&f5!==4){if(aB===3){
qa+="("+L(33,[f5-3])+")";}continue;}qa+=a1f;}aN.zT(560,bA.rs.a1g(qa),40,0,bB.oI,bB.nx,-1,false);
if(a1U){aN.zT(580,L(34,[a1U.toFixed(2)+" + "+a1b().toFixed(2)]),40,0,bB.oI,bB.nx,-1,false);
}else if(bA.gR.hH(aD.ep)){
a1T();}return a1U;}function a1W(a1U){if(aD.ki!==7&&aD.ki!==10){return;}if(aD.a16===0){
return;}if(!a1U){return;}aN.zT(600,L(35,[a1U.toFixed(2)]),40,0,bB.o0,bB.nx,-1,false);
}function a1X(a1U){var a0q=bR.result.a0q;var f5=a0q.length;var a1h=ag.a1h;var gt=ag.gt;var a1i=[];
loop:for(var aB=0;aB<f5;aB++){var gd=a0q[aB];var a1j=bA.rs.a1k(a1h[gd]);if(a1j===null){continue;
}var a1l=gt[gd];for(var fP=a1i.length-1;fP>=0;fP--){if(a1j===a1i[fP].name){a1i[fP].eU+=a1l;
a1i[fP].g.push({gd:gd,eU:a1l});continue loop;}}a1i.push({name:a1j,eU:a1l,g:[{gd:gd,eU:a1l}]});
}if(a1i.length===0){return;}a1i.sort((fO,fP)=>fP.eU-fO.eU);
var g=a1i[0].g;g.sort((fO,fP)=>fP.eU-fO.eU);var a1m="["+a1i[0].name+"]";var tb=bR.result.a1S;
var a1n=8*64*tb/(100*4*65536);aN.zT(0,L(36,[a1m,a1n.toFixed(4)]),40,0,bB.o0,bB.nx,-1,false);
var lL=g.length;var x9=a1i[0].eU;var a1o=10000*a1n;for(aB=0;aB<lL;aB++){if(g[aB].gd===aD.ep){
aN.zT(600,L(37,[(a1o*g[aB].eU/(10*x9)).toFixed(2)]),40,0,bB.o0,bB.nx,-1,false);
aN.zT(640,L(38,[(0.2*a1U).toFixed(2),a1m]),40,0,bB.o0,bB.nx,-1,false);
break;}}}}function a0f(){this.dd=function(){
this.a1p=0;this.a0q=[];this.a1d=0;this.a1S=0;};this.a15=function(){if(aD.kk){return;}a1q(this);
};function a1q(sV){if(aD.a0y===2){sV.a0q=bR.a0g.a0o();}else{if(aD.hz){sV.a0q=bR.a0g.a0s();
}else{sV.a0q=bR.a0g.a0u();}}sV.a1p=bi.a1r.a1s();sV.a1d=Math.max(1,bR.a0g.a0v(sV.a0q));b8.gR.pz();
if(aD.ki===8){a1t();return;}sV.a1S=100*bR.result.a1p*(1+aD.zS);}function a1t(){bR.result.a1S=0;
}}function a0l(){this.a15=function(){if(aD.a0y===2){aD.a16=2;return;}a1u();};function a1u(){
if(aD.ki===8){if(bA.gR.jn(0)||ag.mz[0]===0){aD.a1J=1;}else if(bA.gR.jn(1)||ag.mz[1]===0){aD.a1J=0;
}else{aD.a1J=+(ag.gt[1]>ag.gt[0]);}aD.a16=+(aD.a1J===aD.ep);return;}if(aD.hz){var ky=bh.a1v();
aD.a0t=ky;if(bg.kn[ky]){aD.a16=+(bg.f3[aD.ep]===ky);return;}}aD.a1J=m1[0];aD.a16=+(aD.a1J===aD.ep);
}}function dF(){this.id=0;this.dw=0;this.wH=null;this.wI=null;this.wJ=null;this.wP=null;
this.a1=new a1w();this.dd=function(){a1x(this);a1y(this);a1z(this);};function a1z(self){
var wH;try{wH=window.localStorage;if(!wH){return;}wH.setItem(S[75],"1");wH.removeItem(S[75]);
}catch(error){return;}self.wH=wH;}function a1x(self){var dw;if(typeof Android===S[27]){return;}
if(typeof Android.getVersion!==S[36]){return;}dw=Android.getVersion();if(dw<12){return;}self.dw=dw;
self.id=1;self.wI=Android;}function a1y(self){var dw;if(typeof mwIOSdataX===S[27]){return;
}if(!window.webkit||!window.webkit.messageHandlers||!window.webkit.messageHandlers.iosCommandA){
return;}self.id=2;self.wJ=mwIOSdataX;self.wP=window.webkit.messageHandlers.iosCommandA;
dw=self.wJ["version"];self.dw=dw?Number(dw):0;}}function a1w(){this.a20=function(){bj.sL.wf();
bj.sL.wg();b0.y.close(0,3255);if(a0.id===0){if(a0.wH){a0.wH.clear();}return;}if(a0.id===1){
a0.wI.saveString(199,"");return;}if(a0.id===2){a0.wP.postMessage("clear");}};this.a21=function(){
if(a0.id===2){a0.wP.postMessage("showConsentForm");return;}if(a0.id===1){a0.wI.setState(7);
return;}};this.a22=function(){this.setState(14);};this.iE=function(){return bj.eQ.w5(2)===1;
};this.a23=function(){var qa="";bj.eQ.w4(102,qa);};this.setState=function(a24){
if(a0.id!==1){return;}if(a0.dw>=5){a0.wI.setState(a24);}};this.a2=function(){
var a25;if(a0.id===1&&a0.dw>=7){a0.wI.setState(5);return;}a25=new URL(window.location);
a25.searchParams.set("v",""+Math.floor(Math.random()*1000));window.location.href=a25.toString();
};this.eO=function(){if(a0.id===0){return;}if(a0.id===1){a0.wI.prepareAd("8646194357");
return;}if(a0.id===2){if(a0.dw===0){a0.wP.postMessage("prepare ad 2904813909");
}else{a0.wP.postMessage("loadAds 2904813909");}}};this.eV=function(eU){
if(a0.id===0){return false;}if(a0.id===1){if(a0.dw>=12){a0.wI.presentAd(eU);return true;
}return false;}if(a0.id===2){if(a0.dw===0){}else{a0.wP.postMessage("showAd");return true;
}}return false;};this.dm=function(){if(a0.id===2&&a0.dw<23){t.u(4,1,new v("App Update Required",
"A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='"+bK.a26+
S[43]+bK.a26+S[61],true,[new w(S[2]+L(39),function(){t.u(0);},bB.og)
]));}};}function dU(){this.p=[];this.a27=function(a28,e){this.p.push(e);
if(t.tD===8&&a28===0){if(e===4211){a29(e);}else{if(bn.a2A&&(e===4495||e===4480)&&b0.y.a2B!==a28){
t.a2C();return;}if(aa.a2D()!==8){a2E();}if(e===4480){a2F();return;}var a2G=0;if(t.a2H().a2I===10){
a2G=t.a2H().a2I;}t.u(4,a2G,new v(L(40),a2J(e),true));}return;}var a24=aa.a2D();
if(a24===6){if(e===4211){a29(e);return;}else if(e!==4215&&e!==4516&&e!==4527&&e!==4533&&
e!==4528&&!(e>=4557&&e<=4560)&&e!==4577&&e!==4576){
aZ.a2K(a28);return;}}else if(bn.a2A){if(a28!==b0.y.a2B){
return;}}else if(a24===8){if(a28===b0.y.a2L&&!aD.kk&&aD.a11===1&&!aD.hE){aN.a2M(L(41,[e]));}return;
}else{return;}a2N(e);};this.a2O=function(e){this.p.push(e);if(aa.a2D()===8){if(!aD.kk&&aD.a11===1){
aN.a2M(L(41,[e]));}return;}a2N(e);};this.s=function(){var e=3268;this.p.push(e);
lk(e);};function a2F(){bj.sL.wh();t.u(4,0,new v(L(42),L(43),true));}function a29(e){
lk(e);t.u(4,5,new v("🚀 New Game Update","The game was updated! Please reload the game.",
true,[new w(S[2]+L(39),function(){t.a2C();}),new w(S[71],function(){a0.a1.a2();},bB.oN)
]));}function a2N(e){lk(e);t.u(4,5,new v(L(40),a2J(e),true));}function a2J(e){var qa=" ["+e+"]";
if(e===3249||e===1006){return "No Internet / No Server Response / Server Restart"+qa;}if(e===4527){
return "Player already in lobby"+qa;}if(e===4577){return "Your IP is banned."+qa;}if(e===4530){
return "Lobby Timeout"+qa;}if(e===4528){return "Lobby Kick: Another login detected."+qa;
}if(e===4540){return "You have been kicked."+qa;}if(e===4495){
return "Account doesn't exist.";}if(e===4229){return "Bad Internet / Unresponsive Client"+qa;
}if(e===4555){return "Invalid Account Error. Please Try Again."+qa;
}if(e>=4557&&e<=4560){return "Please try again later!"+qa;
}return "Unknown error"+qa;}function lk(e){a2E(e);t.y.z();}function a2E(e){var a24=aa.a2D();
if(a24===6){b0.y.a2P(e);}else if(bn.a2A){t.x();bn.ud();b0.y.close(b0.y.a2B,3256);}else if(a24===8){
aD.a2Q(true);}}}function d4(){var a2R,a2S;var a2T=-15000;var a2U=false;this.a2V=0;
this.a2W="";this.a2X=false;this.dd=function(){a2Y.addEventListener("mousedown",hI,{passive:false});
a2Y.addEventListener("mousemove",a2Z,{passive:false});
a2Y.addEventListener("mouseup",a2a,{passive:false});
a2Y.addEventListener(S[26],click,{passive:false});
a2Y.addEventListener(S[50],a2b,{passive:false});a2Y.addEventListener(S[72],a2c,{passive:false});
a2Y.addEventListener("touchstart",a2d,{passive:false});
a2Y.addEventListener("touchmove",a2e,{passive:false});
a2Y.addEventListener("touchend",a2f,{passive:false});
a2Y.addEventListener("touchcancel",a2g,{passive:false});
a2Y.addEventListener("dragover",a2h);a2Y.addEventListener("drop",a2i);
a2Y.addEventListener("dblclick",a2j);document.addEventListener("contextmenu",a2k);
document.addEventListener(S[89],a2l);document.addEventListener("keyup",a2m);
document.addEventListener("visibilitychange",a2n);window.addEventListener("resize",resize);
};function hI(e){if(a2o()){return;}a2U=true;a2p(e,1);b0.y.a2q(b0.y.a2L);
a2r(Math.floor(h.k*e.clientX),Math.floor(h.k*e.clientY));}function a2d(e){a2T=bf.eT;
a2p(e,1);b0.y.a2q(b0.y.a2L);if(e.touches.length>0){a2R=Math.floor(h.k*e.touches[0].clientX);
a2S=Math.floor(h.k*e.touches[0].clientY);if(!au.a2d(e)){a2r(a2R,a2S);}}}function a2r(fC,fE){
t.hI(fC,fE);if(aD.a11===0){aa.hI(fC,fE);return;}if(bC.a2s(fC,fE)){return;}if(be.hI(fC,fE)){return;
}if(aX.hI(fC,fE)){return;}if(aL.a2t(fC,fE)){return;}if(aP.hI(fC,fE)){return;}if(aM.hI(fC,fE)>=0){
return;}if(aw.hI(fC,fE)){return;}if(bJ.a2u(fC,fE)){return;}aL.a2v(fC,fE);}this.a2u=function(fC,fE){
if(bC.hI(fC,fE)){return true;}if(aV.hI(fC,fE)){return true;}if(aS.hI(fC,fE)){return true;
}if(aR.hI(fC,fE)){return true;}if(aN.hI(fC,fE)){return true;}return false;};function a2Z(e){
if(a2o()){return;}a2U=true;a2p(e,1);a2w(Math.floor(h.k*e.clientX),Math.floor(h.k*e.clientY));
}function a2e(e){a2T=bf.eT;a2p(e,1);if(e.touches.length>0){
a2R=Math.floor(h.k*e.touches[0].clientX);a2S=Math.floor(h.k*e.touches[0].clientY);
if(!au.a2e(e)){a2w(a2R,a2S);}}}function a2w(fC,fE){t.a2Z(fC,fE);if(aD.a11===0){aa.a2Z(fC,fE);
return;}bT.hC(fC,fE);if(be.a2Z(fC,fE)){return;}aM.a2Z(fC,fE);if(aL.hr()){aL.a2Z(fC,fE);return;
}if(aR.hJ){if(aR.a2Z(fC)){bf.dk=true;}return;}aV.a2Z(fC,fE);if(aS.nV){if(aS.a2Z(fC,fE)){bf.dk=true;
}return;}}function a2b(e){if(a2o()){return;}a2p(e,1);a2x();if(aD.a11===0){aa.click(-1024,-1024);
aT.ru();return;}aV.a2y(-1024,-1024);aM.a2Z(-1024,-1024);aR.a2z();aS.nV=false;}function a2a(e){
if(a2o()){return;}a2p(e,1);a30(Math.floor(h.k*e.clientX),Math.floor(h.k*e.clientY),e.button===2);
if(bJ.a2X){bJ.a2X=false;e.preventDefault();}}function click(e){if(a2o()){return;
}a2p(e,1);}function a2f(e){a2T=bf.eT;a2p(e,1);if(e&&e.touches&&e.touches.length>0&&aD.a11!==0){
aS.nV=false;return;}if(au.a31()){return;}a30(a2R,a2S,false);
if(bJ.a2X){bJ.a2X=false;e.preventDefault();}}function a2g(e){a2T=bf.eT;a2p(e,1);a30(a2R,a2S,false);
if(bJ.a2X){bJ.a2X=false;e.preventDefault();}}function a2h(e){}function a2i(e){}function a2j(e){
if(a2o()){return;}a2p(e,0);}function a30(fC,fE,a32){a2x();if(aD.a11===0){aa.click(fC,fE);
return;}aV.a2y(fC,fE);be.a2y();aR.a2z();aS.nV=false;if(aL.click(fC,fE,a32)){bf.dk=true;
return;}if(aM.a2a(fC,fE)){return;}}function a2x(){t.a2x();}function a2c(e){if(a2o()){return;
}a2p(e,1);b0.y.a2q(b0.y.a2L);var fC=Math.floor(h.k*e.clientX);var fE=Math.floor(h.k*e.clientY);
var deltaY=e.deltaY;if(e.deltaMode===1){deltaY*=16;}t.a2c(fC,fE,deltaY);
if(aD.a11===0){aa.a2c(fC,fE,deltaY);return;}if(aV.a2c(fC,fE,deltaY)){return;}if(aR.a33(fC,fE)){
if(aR.a2c(deltaY)){bf.dk=true;}return;}aS.a2c(fC,fE,deltaY);}function a2k(e){a2p(e,0);
}function a2p(e,id){if(id===0&&(t.hr())){return;}if(a34()){return;}if(aa.a2D()===0){return;
}e.preventDefault();}function a34(){var eB=window.innerWidth/document.documentElement.clientWidth;
return eB<0.999||eB>1.001;}function a2l(e){if(a2o()){return;}if(h.ss>0){return;}var code=e.code;
if(!code||!code.length){return;}if(bX.ed(code,18)){ar.a35(3);}else if(bX.ed(code,22)){ar.a35(0);
}else if(bX.ed(code,20)){ar.a35(1);}else if(bX.ed(code,24)){ar.a35(2);}else if(bX.ed(code,10)){
aR.a36(31/32);}else if(bX.ed(code,8)){aR.a36(32/31);}else if(bX.ed(code,6)){
aR.a36(7/8);}else if(bX.ed(code,4)){aR.a36(8/7);}else if(bX.ed(code,14)){if(aD.a11!==0){
aS.a2c(Math.floor(h.i/2),Math.floor(h.j/2),-200);}}else if(bX.ed(code,16)){if(aD.a11!==0){
aS.a2c(Math.floor(h.i/2),Math.floor(h.j/2),200);}}else if(bX.ed(code,0)){if(!aD.a11){return;}
bT.hD(0);}else if(bX.ed(code,2)){if(!aD.a11){return;}bT.hD(1);}else if(bX.ed(code,30)){if(!aD.a11){
return;}bT.hD(2);}else if(bX.ed(code,26)){if(!aD.a11){return;}bT.hl();}else if(bX.ed(code,28)){
if(!aD.a11){return;}bT.hq();}}function a2m(e){if(a2o()){return;}if(h.ss>0){
return;}if(bf.eT<400){return;}var code=e.code;if(!code||!code.length){return;}if(code===S[40]){
if(t.a37(1)){return;}}if(code===S[55]){if(t.a37(0)){return;}}if(bn.a2A){if(bn.uj.a37(code)){
return;}if(code===S[39]){bJ.fY();}return;}if(aa.a2D()!==8){if(aa.a37(e)){bf.dk=true;
return;}}if(code===S[39]){bJ.fY();}else if(bX.ed(code,18)){ar.a38(3);}else if(bX.ed(code,22)){
ar.a38(0);}else if(bX.ed(code,20)){ar.a38(1);}else if(bX.ed(code,24)){ar.a38(2);
}else if(bX.ed(code,12)){bC.a39(!aD.nT);}else if(code===S[55]){if(!aD.a11){return;}aM.hF&&aM.a3A();
aD.hE&&bC.a3B(false);}}function a2n(){if(document.visibilityState===S[16]){}else{bf.dk=true;
}}function a2o(){return a2T+15000>bf.eT;}this.a3C=function(){return a2o();};this.rL=function(){
return!a2U||a2T>0;};function resize(){h.a3D();}this.fY=function(){if(t.hr()){t.a37(2);return;
}if(aa.a2D()===8){if(aD.nT){bC.a39(false);return;}if(be.hr){be.a3A();return;}aM.a3A();return;
}if(aa.a2D()===7){return;}if(aa.a2D()===6){aZ.a3E();return;}};}function bz(){this.qt=new a3F();
this.r1=new a3G();this.gR=new a3H();this.rs=new a3I();this.zA=new a3J();this.a3K=new a3L();
this.canvas=new a3M();this.color=new a3N();this.a3O=new a3P();this.dd=function(){
this.qt.we();};}function a3G(){this.xZ=function(g){g.fill(0);};this.a3Q=function(g){
var aB;var f5=g.length;for(aB=0;aB<f5;aB++){g[aB]=[];}};this.a3R=function(a07,a3S){var aB;
var a08=bO.ff;for(aB=0;aB<3;aB++){a08[aB]=a3S*a07[aB];}return a08;};this.a3T=function(a07,a08,a3U){
var aB;var jf=0;for(aB=0;aB<3;aB++){jf+=Math.abs(a07[aB]-a08[aB]);}return jf>=a3U;};
this.a3V=function(a07,a3W){var aB;for(aB=0;aB<3;aB++){a07[aB]=bL.iD(a07[aB]+a3W,0,255);}return a07;
};this.a3X=function(g,tX,tY){tX=tX||0;tY=tY||(g.length-1);var a3Y=0;for(var aB=tX;aB<=tY;aB++){
a3Y+=g[aB];}return a3Y;};this.a3Z=function(g,a3a){var fO,aB,a3b;var f5=g.length;
var a3c=[];for(fO=f5-1;fO>=0;fO--){a3b=0;for(aB=0;aB<f5;aB++){if(a3a(g[aB])<a3a(g[a3b])){
a3b=aB;}}f5--;a3c.push(g[a3b]);g[a3b]=g[f5];g.pop();}return a3c;};this.min=function(g){var aB,fX;
var f5=g.length;if(f5===0){return 0;}fX=g[0];for(aB=1;aB<f5;aB++){fX=Math.min(fX,g[aB]);}return fX;
};this.max=function(g){var f5=g.length;if(f5===0){return 0;}var fX=g[0];for(var aB=1;aB<f5;aB++){
fX=Math.max(fX,g[aB]);}return fX;};this.a3d=function(g,fX){var f5=g.length;
var gY=0;for(var aB=0;aB<f5;aB++){gY+=g[aB]>fX;}return gY;};this.a3e=function(a3f,a3g,min){
var f5=a3g[0];for(var aB=f5-1;aB>=0;aB--){if(a3f[aB]<min){f5--;a3f[aB]=a3f[f5];}}a3g[0]=f5;
};this.a3h=function(g,f5,value){for(var aB=0;aB<f5;aB++){g[aB]-=value;}};this.a3i=function(g){
var f5=g.length;for(var aB=0;aB<f5;aB++){if(typeof g[aB]!==S[45]){return false;}}return true;
};this.a3j=function(qa,g,a3k){g.fill(0);var tb=qa.split(",");var f5=Math.min(tb.length,g.length);
for(var aB=0;aB<f5;aB++){g[aB]=Math.min(parseInt(tb[aB]),a3k);}};this.a3l=function(qa,g,rp){
g.fill("");var tb=qa.split("\"");var f5=Math.min(tb.length,2*g.length);var hx=0;
for(var aB=1;aB<f5;aB+=2){g[hx++]=tb[aB].slice(0,rp);}};this.a3m=function(g,gY){if(gY===0){
g.fill(0);return;}var a3Y=this.a3X(g);var f5=g.length;if(a3Y===0){g.fill(bL.fW(gY,f5));}else{
for(var aB=0;aB<f5;aB++){g[aB]=bL.fW(gY*g[aB],a3Y);}}a3Y=this.a3X(g);if(a3Y===0){g[1]=gY;return;
}var hx=0;while(a3Y++ <gY){hx=(hx+1)%f5;if(g[hx]){g[hx]++;}}};this.a3n=function(g){if(!g){return 0;
}var f5=g.length;if(f5===0){return 0;}var fX=g[f5-1];for(var aB=f5-2;aB>=0;aB--){if(g[aB]!==fX){
return aB+2;}}return 1;};this.a3o=function(g){var a3Y=0;for(var aB=0;aB<g.length;aB++){
a3Y+=g[aB].length;}return a3Y;};this.a3p=function(a3q){var g=[];for(var aB=0;aB<a3q.length;aB++){
g=g.concat(a3q[aB]);}return g;};this.has=function(g,fX){var f5=g.length;for(var aB=0;aB<f5;aB++){
if(g[aB]===fX){return true;}}return false;};}function a3M(){this.zl=function(a3r,eC,a3s){
var i1=a3r.height;var a3t=bA.qt.xP(i1,i1);var i7=bA.qt.getContext(a3t);
a3u(i1,i7,a3s);i7.drawImage(a3r,-eC*i1,0);return a3t;};function a3u(i,i7,a3s){i7.fillStyle=a3s;
i7.beginPath();i7.arc(i/2,i/2,i*0.47,0,2*Math.PI);i7.fill();}this.a3v=function(a3w){
var i1=a3w.height;if(a3w.width!==i1){return a3w;}var i7=bA.qt.getContext(a3w,true);
var i4=i7.getImageData(0,0,i1,i1);bA.a3K.a3x(i4.data,i1,i1,0.9);i7.putImageData(i4,0,0);
return a3w;};}function a3N(){this.a3y=function(fX){return [(fX>>12)&63,(fX>>6)&63,fX&63];
};this.a3z=function(fX){var g=this.a3y(fX);for(var aB=0;aB<3;aB++){g[aB]=~~(4.05*g[aB]);
}return g;};this.a40=function(fX){var g=this.a3z(fX);return bA.color.ns(g[0],g[1],g[2]);
};this.a41=function(g){for(var aB=0;aB<3;aB++){g[aB]=~~(g[aB]/4.04);
}return(g[0]<<12)+(g[1]<<6)+g[2];};this.ns=function(eB,tb,fP){return S[9]+eB+","+tb+","+fP+")";
};this.nu=function(eB,tb,fP,fO){return S[13]+eB+","+tb+","+fP+","+fO.toFixed(3)+")";
};this.rN=function(ed){var g=ed.split("(")[1].split(",");
var fe=bO.fe;for(var aB=0;aB<3;aB++){fe[aB]=parseInt(g[aB]);}if(g.length===4){
fe[3]=255*parseFloat(g[3].slice(0,-1));}else{fe[3]=255;}return fe;};this.rO=function(a42,f8){
var qa=a42.slice(a42.indexOf("(")+1,a42.indexOf(")"));var g=qa.split(",");var fe=bO.fe;
for(var aB=0;aB<3;aB++){fe[aB]=bL.iD(parseInt(g[aB].trim(),10)+f8,0,255);}if(g.length===3){
return this.ns(fe[0],fe[1],fe[2]);}var alpha=parseFloat(g[3].trim());alpha=alpha===0?0.3:alpha;
return this.nu(fe[0],fe[1],fe[2],alpha);};this.vE=function(a43,a44){var jf=0;
for(var aB=0;aB<3;aB++){jf+=Math.abs(a44[aB]-a43[aB]);}if(jf>=240){return;}for(aB=0;aB<3;aB++){
a44[aB]=a43[aB]+(a43[aB]<128?80:-80);}};this.a45=function(g){var qa="#";for(var aB=0;aB<3;aB++){
var eB=g[aB].toString(16);qa+=eB.length===1?("0"+eB):eB;}return qa;};this.a46=function(qa){
if(qa.length<7){return bB.nr;}var eB=parseInt(qa.slice(1,3),16);var tb=parseInt(qa.slice(3,5),16);
var fP=parseInt(qa.slice(5,7),16);return this.ns(eB,tb,fP);};}function a3J(){
this.a47=function(qa,font,maxWidth){if(font){vZ.font=font;}var i=vZ.measureText(qa).width;
if(i<=maxWidth){return qa;}var a48="...";for(var aB=qa.length-1;aB>=1;aB--){
qa=qa.substring(0,aB);i=vZ.measureText(qa+a48).width;if(i<=maxWidth){return qa+a48;}}return a48;
};}function a3P(){var a49=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];this.a4A=function(eT){
var a4B,a4C,ge;var qa=(new Date(eT.getTime()-1000*60*eT.getTimezoneOffset())).toUTCString();
if(qa.length<12){return qa;}qa=qa.substring(5,qa.length);a4B=eT.getTimezoneOffset();
if(a4B===0){return qa;}a4C=bL.fW(Math.abs(a4B),60);a4C=(a4B<0?"+":"-")+a4C;
ge=Math.abs(a4B)%60;if(ge===0){return qa+a4C;}return qa+a4C+":"+(ge<10?"0":"")+ge;
};this.a4D=function(eT){var qa=eT.toUTCString();if(qa.length<12){return qa;
}return a4E(eT)+", "+qa.substring(5,qa.length-4);};function a4E(eT){return a49[eT.getUTCDay()];
}}function a3F(){var a4F=null;this.a02=0;this.we=function(){var fX=bj.eQ.data[5].value;
a4F="px "+fX;if(fX!==S[76]){a4F+=", system-ui";}this.a02=i0(32,32,["a","b","m"],200,a4F);
};this.xP=function(i,j){var ed=document.createElement(S[4]);ed.width=i;ed.height=j;
return ed;};this.getContext=function(canvas,alpha){return canvas.getContext("2d",{alpha:alpha});
};this.getImageData=function(zA,i,j){return zA.getImageData(0,0,i,j);
};this.sk=function(type,size){size=size.toFixed(2);if(type===0){return size+a4F;
}else if(type===1){return "bold "+size+a4F;}else if(type===2){return "lighter "+size+a4F;
}else if(type===3){return S[90]+size+a4F;}else if(type===4){return "oblique "+size+a4F;
}else if(type===5){return "small-caps "+size+a4F;}else{return "small-caps bold "+size+a4F;
}};this.textAlign=function(i7,id){if(id===0){i7.textAlign="left";}else if(id===1){
i7.textAlign=S[10];}else{i7.textAlign="right";}};this.textBaseline=function(i7,id){if(id===1){
i7.textBaseline=S[35];}else if(id===2){i7.textBaseline="bottom";}else{i7.textBaseline=S[74];
}};this.r3=function(e,code,color){var fX=this.r2(bc.sm)+" solid "+(color||bB.o0);
code=code||5;if(code===5){e.style.border=fX;}else if(code===4){
e.style.borderLeft=fX;}else if(code===2){e.style.borderBottom=fX;}else if(code===6){
e.style.borderRight=fX;}else{e.style.borderTop=fX;}};this.td=function(e,fC,fE,i,j){
var qx=e.style;qx.left=this.te(fC);qx.top=this.te(fE);qx.width=this.te(i);
qx.height=this.te(j);};this.qu=function(fX){return 1+fX*a0.a1.iE();};this.sC=function(nc,ge){
return nc*this.qu(ge===undefined?0.5:ge)*h.iF/h.k;};this.tc=function(nc,ge){
return nc*this.qu(ge===undefined?0.5:ge)*h.iF;};this.tJ=function(nc,ge,a4G){var a4H=this.qu(ge);
return a4H*Math.min(nc*h.iF,a4G*h.i)/h.k;};this.r2=function(fX){return fX.toFixed(1)+"px";
};this.te=function(fX){return this.uz(fX).toFixed(1)+"px";};this.uz=function(fX){
return fX/h.k;};this.a4I=function(t1,a4J){var aB;var qa="<ul>";var f5=t1.length;
for(aB=0;aB<f5;aB++){qa+="<li>"+t1[aB]+": <a href='"+a4J[aB]+S[43]+a4J[aB]+"</a></li>";
}qa+="</ul>";return qa;};this.a4K=function(a4L){return S[60]+a4L+S[43]+a4L+S[61];
};this.a4M=function(e){if(navigator.clipboard){navigator.clipboard.writeText(e.value);
}};this.vC=function(e){var eU=e.textContent;if(bA.rs.a4N(eU,"✔")){return;}if(eU.length===1){
e.textContent="✔";}else{e.textContent=eU+" ✔";}setTimeout(function(){e.textContent=eU;
},500);};this.measureText=function(qa){return vZ.measureText(qa).width;};this.tT=function(a4O){
a4O.style.overflowX=S[11];a4O.style.overflowY=S[16];a4O.style.whiteSpace=S[49];
a4O.addEventListener(S[72],function(e){if(Math.abs(e.deltaY)<Math.abs(e.deltaX)){
return;}this.scrollLeft+=e.deltaY;this.tg=this.scrollLeft;e.preventDefault();
});a4O.addEventListener(S[32],function(){this.tg=this.scrollLeft;});};}function a3H(){
this.hG=function(a24){if(a24===0){return aD.a11===1&&aD.hT;}if(a24===1){return aD.a11===1&&!aD.hT;
}return aD.a11===2;};this.hH=function(player){return ag.mz[player]!==0&&ag.a4P[player]!==2;
};this.a4Q=function(player){return player===aD.ep&&ag.a4P[player]!==2;
};this.l4=function(player,jZ){return player!==jZ&&(bg.f3[player]===0||bg.f3[player]!==bg.f3[jZ]);
};this.mB=function(){var kw=al.kw;
if(kw<2){return 0;}if(!aD.hz){return ag.gt[m1[1]];}return bh.a4R()>1;};this.a4S=function(){
var kw=al.kw;if(kw===0){return 0;}if(!aD.hz){return!this.jn(m1[0]);}var f3=bg.f3;var ky=bh.kz();
var l1=al.l1;for(var aB=kw-1;aB>=0;aB--){var gd=l1[aB];if(f3[gd]===ky&&!this.jn(gd)){
return 1;}}return 0;};this.a4T=function(player){return player===aD.ep;
};this.a4U=function(jZ,nc){return ag.h7[aD.ep]<nc*ag.h7[jZ];};this.jn=function(player){
return player>=aD.kQ||ag.a4P[player]===2;};this.lO=function(player){return ag.mz[player]!==0;
};this.a0r=function(player){return player<aD.kQ;};this.qG=function(a4V,a4W){
return a4V!==a4W;};this.gU=function(player,fX){fX=this.a4X(player,fX);ag.h7[player]+=fX;
if(ag.a4Y[player]){var min=Math.min(ag.a4Y[player],ag.h7[player]);ag.a4Y[player]-=min;
ag.h7[player]-=min;}return fX;};this.a4X=function(player,fX){var a4Z=ag.h7[player];
fX=Math.min(fX,ag.gt[player]*aD.a4a-a4Z);fX=Math.min(fX,aD.a4b-a4Z);return Math.max(fX,0);
};this.mY=function(player,ih,a4c,a4d){var a4Z=ag.h7[player];var ho=bL.fW(a4Z*(ih+1),1024);
var a4e=bL.fW(a4c*a4Z,1024);ho=Math.min(ho,a4Z-a4e);if(aD.ki===10){ho=b4.a4f(player,ho);
}bO.fc[0]=ho;bO.fc[1]=a4e;return ho>=a4d;};this.pk=function(player,pS,pR){var a4Z=ag.h7[player];
var a4e=bL.fW(64*a4Z,1024);pS=Math.min(pS,a4Z-a4e);pS=this.a4X(pR,pS);bO.fc[0]=pS;bO.fc[1]=a4e;
return pS>=1;};this.a4g=function(player,pS,pR){var a4Z=ag.h7[player];var a4e=bL.fW(64*a4Z,1024);
pS=Math.min(pS,a4Z-a4e);return this.a4X(pR,pS);};this.pm=function(pS,pR){
pS=this.a4X(pR,pS);bO.fc[0]=pS;bO.fc[1]=0;return pS>=1;};this.ig=function(player,a4h){
return bL.fW(ag.h7[player]*(a4h+1),1024);};this.a4i=function(player,a4c){
var a4e=bL.fW(a4c*ag.h7[player],1024);bO.fc[1]=a4e;ag.h7[player]-=a4e;
};this.gS=function(player,a4j){var fP=ag.h7[player];if(a4j<=fP){ag.h7[player]-=a4j;
return a4j;}ag.h7[player]=0;var fo=a4j-fP;var fq=5*(fo>>2);var f8=ag.a4Y[player];
var fs=f8+fq;bd.gV(player,fq-fo,12);if(fs<=aD.a4k){ag.a4Y[player]=fs;return a4j;
}ag.a4Y[player]=aD.a4k;bd.gV(player,fs-aD.a4k,18);return a4j;};this.lc=function(player,ih){
var h7=ag.h7;var a4Z=h7[player];var ho=bL.fW(a4Z*(ih+1),1024);var a4e=Math.max(bL.fW(a4Z,10),1000);
ho=Math.min(ho,a4Z-a4e);if(ho<0){h7[player]=0;a4e=Math.min(1000,a4Z+aD.a4k-ag.a4Y[player]);
bO.fc[1]=a4e;ag.a4Y[player]+=a4e-a4Z;return 0;}bO.fc[1]=a4e;if(aD.ki===10){ho=b4.a4f(player,ho);
}h7[player]-=a4e+ho;return ho;};this.ma=function(player){ag.h7[player]-=bO.fc[0]+bO.fc[1];
};this.qH=function(player,jZ){jZ=Math.min(jZ,aD.f2);if(jZ<aD.f2&&ag.mz[jZ]===0){jZ=aD.f2;
}bO.f1[0]=jZ;return jZ===aD.f2||bs.ey(player,jZ);};this.qK=function(player,pR){if(ag.mz[pR]===0){
return false;}return!bs.ey(player,pR);};this.a4l=function(player,a4m){var aB,gd;var f5=al.kw;
var a4n=0;var a4o=m1;for(aB=0;aB<f5;aB++){gd=a4o[aB];if(!this.jn(gd)){if(player===gd){return true;
}if(++a4n>a4m){return false;}}}return false;};this.lx=function(gd){var a4p;if(aD.hz){a4p=bh.kx();
}else{a4p=ag.gt[m1[0]];}return a4p>=bL.fW(gd*aD.kA,100);};this.a4q=function(fX,min,max){
return Math.floor(bL.iD(isNaN(fX)?0:Number(fX),min,max));};}function a3L(){
this.a4r=function(canvas,a4s,a4t){var i=canvas.width;var j=canvas.height;var ed=bA.qt.xP(i,j);
var i7=bA.qt.getContext(ed,true);i7.drawImage(canvas,0,0);var i4=i7.getImageData(0,0,i,j);
a4s(i4.data,i,j,a4t);i7.putImageData(i4,0,0);return ed;};this.a4u=function(xa,i,j){
for(var fC=i-1;fC>=0;fC--){for(var fE=j-1;fE>=0;fE--){var aB=4*(fC+fE*i);xa[aB+3]=xa[aB];
xa[aB]=xa[aB+1]=xa[aB+2]=255;}}};this.a4v=function(xa,i,j){for(var fC=i-1;fC>=0;fC--){
for(var fE=j-1;fE>=0;fE--){var aB=4*(fC+fE*i);if(xa[aB+1]>xa[aB+2]+10){xa[aB+3]=xa[aB];
xa[aB+1]=xa[aB+2];}}}};this.a4w=function(xa,i,j,a4t){var gap=Math.floor(Math.min(i,j)*a4t);
for(var fC=0;fC<i;fC++){for(var fE=0;fE<j;fE++){if(fC<gap||fE<gap||fC>=i-gap||fE>=j-gap){
var aB=4*(fC+fE*i);xa[aB+3]=255-255*(xa[aB+1]-xa[aB])/(255-xa[aB]);
}}}};this.a4x=function(xa,i,j,a4t){for(var fC=i-1;fC>=0;fC--){
for(var fE=j-1;fE>=0;fE--){var aB=4*(fC+fE*i);xa[aB]=a4t[0];xa[aB+1]=a4t[1];xa[aB+2]=a4t[2];
}}};this.a4y=function(xa,i,j,a4t){var gap=Math.floor(i*a4t);for(var fC=0;fC<i;fC++){
for(var fE=0;fE<j;fE++){if(fC<gap||fE<gap||fC>=i-gap||fE>=j-gap){var aB=4*(fC+fE*i);
xa[aB]=xa[aB+1]=xa[aB+2]=0;}}}};this.a4z=function(xa,i,j){var fC,fE,aB;for(fC=i-1;fC>=0;fC--){
for(fE=j-1;fE>=0;fE--){aB=4*(fC+fE*i);if(xa[aB+1]>200&&xa[aB+1]-20>xa[aB]&&xa[aB+1]-20>xa[aB+2]){
if(xa[aB]+xa[aB+2]<40){xa[aB+3]=0;}else{xa[aB+3]=xa[aB];xa[aB]=255;xa[aB+1]=255;
xa[aB+2]=255;}}else if(xa[aB]<50&&xa[aB+1]<50&&xa[aB+2]<50){if(xa[aB]+xa[aB+1]+xa[aB+2]<50){
xa[aB+3]=180;}else{xa[aB+3]=180+Math.floor(75*(xa[aB]+xa[aB+1]+xa[aB+2]-50)/100);
}}}}};this.a50=function(xa,i,j){var fC,fE,aB;for(fC=i-1;fC>=0;fC--){for(fE=j-1;fE>=0;fE--){
aB=4*(fC+fE*i);if(xa[aB+1]>xa[aB]+20&&xa[aB+1]>xa[aB+2]+20&&xa[aB]+xa[2]<40){
xa[aB+3]=255-xa[aB+1];xa[aB]=xa[aB+1]=xa[aB+2]=xa[aB];
}}}};this.a3x=function(xa,i,j,a4t){var eB=i>>1;for(var fC=0;fC<i;fC++){
for(var fE=0;fE<j;fE++){if(Math.sqrt((fC-eB)*(fC-eB)+(fE-eB)*(fE-eB))>a4t*eB){
xa[4*(fC+fE*i)+3]=0;}}}};}function a3I(){var a51={":joy:":"😂",
":rofl:":"🤣",":sob:":"😭",":sad":"😔",":eyes:":"👀",":skull:":"💀",":fire:":"🔥",":100:":"💯",
":clown:":"🤡",":sunglasses:":"😎",":thinking:":"🤔",":zzz:":"😴",":rage:":"😡",":poop:":"💩",
":thumbsup:":"👍",":thumbsdown:":"👎",":pray:":"🙏",":clap:":"👏",":trophy:":"🏆",":sparkles:":"✨",
":heart:":"❤️",":brokenheart:":"💔",":laughing:":"😆",":grimacing:":"😬",":grinning:":"😀",
":ok:":"👌",":pepehands:":"🙌",":gold:":"🧈"};var a52=new RegExp(":[a-zA-Z0-9_]+:","g");
this.rt=function(ef){return ef.replace(a52,function(match){return a51[match]||match;
});};this.a0I=function(fX){var aB,a53,a54,a55,a56;if(fX<0){return "-"+this.a0I(Math.abs(fX));
}if(fX<1000){return fX.toString();}a53=Math.floor(Math.log(fX+0.5)/Math.log(10))+1;
a54=Math.floor((a53-1)/3);a55=fX.toString();a56=a55.substring(a53-3,a53);for(aB=1;aB<a54;aB++){
a56=a55.substring(a53-3*(aB+1),a53-3*aB)+" "+a56;}return a55.substring(0,a53-3*(a54))+" "+a56;
};this.a57=function(gd,a53){return(gd).toFixed(a53)+"%";};this.a58=function(fX,a59){
return fX.toFixed(bL.iD(Math.floor((a59===undefined?3:a59)-Math.log10(Math.max(fX,1))),0,8));
};this.a5A=function(fX,nc,a53){return(fX*nc).toFixed(a53);};this.a1k=function(username){
var eu,f9;eu=username.indexOf("[");if(eu<0){return null;}f9=username.indexOf("]");
if(f9-eu>1&&f9-eu<=7+1){return username.substring(eu+1,f9).toUpperCase().trim();
}return null;};this.a5B=function(qa){var fO=Math.floor(0.5*qa.length+0.5);
var ni=Math.floor(0.5*(fO-1));for(var aB=0;aB<ni;aB++){for(var fP=-1;fP<2;fP+=2){
var ed=fO+fP*aB;if(qa[ed]===" "){return [this.a1g(qa.substring(0,ed)),this.a5C(qa.substring(ed))];
}}}return [qa.substring(0,fO),qa.substring(fO)];
};this.a5C=function(qa){var f5=qa.length;for(var aB=0;aB<f5;aB++){
if(qa[aB]!==" "){return qa.substring(aB);}}return qa;};this.a1g=function(qa){
var f5=qa.length;for(var aB=f5-1;aB>=0;aB--){if(qa[aB]!==" "){return qa.substring(0,aB+1);
}}return qa;};this.a5D=function(qa,a5E){return qa.split("(")[0]+"(🧈 "+a5E.toFixed(2)+")";
};this.startsWith=function(qa,a5F){return qa.substring(0,a5F.length)===a5F;
};this.a4N=function(qa,a5F){var f5=qa.length;return qa.substring(f5-a5F.length,f5)===a5F;
};this.a5G=function(g,a5H,a5I){var qa="";var f5=g.length-1;a5I=a5I||"";for(var aB=0;aB<f5;aB++){
qa+=a5I+g[aB]+a5I+",";if((aB+1)%a5H===0){qa+="\n";}}qa+=a5I+g[f5]+a5I;return qa;
};this.a5J=function(qa,a07,a08){return qa.replace(new RegExp(a07,"g"),a08);};}function a5K(){
this.ec=function(player,er){if(aI.yu(player,bM.fD(er),bM.fF(er))){bf.dk=true;}aD.kk&&this.eY();
};this.eY=function(){aD.hT=false;for(var aB=0;aB<aD.kQ;aB++){if(ag.mz[aB]!==0&&ag.gt[aB]===0){
aI.z1(aB);}}if(ag.mz[aD.ep]!==0){bd.mv[7]=ag.gt[aD.ep];bd.mv[8]=ag.h7[aD.ep];
aR.a5L();aW.a5M();if(!aD.hE){aH.nK(ag.iy[aD.ep]-5,ag.j0[aD.ep]-5,ag.iz[aD.ep]+5,ag.j1[aD.ep]+5);
}av.dd();}else{aX.show(false,false,false,true);}aN.a5N(18);af.a5O();
af.ml(true);bP.y.a5P();aL.sA();aD.qF=null;bb.a5Q=true;bb.a5R();if(aD.kk){a0.a1.setState(1);
}};}function c1(){this.f2=512;this.a4b=1500000000;this.a5S=1000000000;this.a4k=50000;
this.a5T=512;this.gP=2;this.ep=0;this.kQ=0;this.a14=0;this.km=0;this.a13=0;this.y5=512;this.yA=512;
this.a4a=150;this.kk=true;this.hE=0;this.a11=0;this.kA=0;this.nT=false;this.hT=0;this.a5U=0;
this.hz=false;this.yC=0;this.yD=0;this.ki=0;this.zS=0;this.qF=null;this.a1K=new zG();this.a5V=30;
this.a0y=0;this.a16=0;this.a1J=0;this.a0t=0;this.data=new a5W();this.a5X=new a5Y();this.a5Z=0;
this.a5a="";this.a5b=function(){bO.dd();bR.dd();bq.clear();this.a14=this.kQ=this.data.humanCount;
this.kk=this.a14===1;this.nT=false;this.hE=this.data.isReplay;
this.ki=this.data.gameMode===0?[7,10,8][this.data.battleRoyaleMode]:this.data.isZombieMode?9:(this.data.numberTeams-2);
this.zS=this.data.isContest;this.hz=this.ki<7||this.ki===9;
this.ki=(this.ki===10&&this.kk)?7:this.ki;this.ki=(this.ki===8&&this.kQ!==2)?7:this.ki;az.dd();
this.yC=this.data.numberTeams;if(!this.data.teamPlayerCount){this.yD=0;if(this.hz&&this.kk){
this.data.teamPlayerCount=new Uint16Array(9);this.data.teamPlayerCount.fill(1,1,this.yC+1);
aD.a5X.a5c();}}else{this.yD=+(this.data.teamPlayerCount[0]>0);
}this.a5V=this.kQ<=2?30:this.kQ<=50?40:50;this.a5U=this.hT=this.data.selectableSpawn;
this.qF=this.hT?new a5K():null;if(l.du===1){this.y5=this.kQ;}else{this.y5=this.data.playerCount;
}this.yA=this.y5;this.km=this.y5-this.kQ;this.a13=0;this.ep=this.data.selectedPlayer;
this.a0y=0;this.a16=0;this.a1J=0;this.a0t=0;ay.a5d(this.data.spawningSeed);ae.dd();ag.dd();
an.dd();ai.a5e();b8.pK.q3=[];bg.dd();this.a11=1;bd.dd();a5f();ac.de();ap.a5g();bb.dd();ac.dd();
at.dd();bM.dd();bN.dd();ao.dd();bV.a5h();aE.dd();ai.a7();aI.dd();aJ.dd();al.a5i();b9.dd();bh.dd();
bP.dd();be.dd();a5j.putImageData(a5k,0,0);aV.dd();aS.dd();aR.dd();bC.dd();aw.dd();aU.dd();aW.dd();
aM.dd();aQ.dd();aN.dd();aP.dd();aL.dd();aX.dd();aF.dd();aG.dd();g8();ad.dd();af.dd();b4.dd();
b5.dd();b1.dd();this.a1K.dd();bf.a5h();a5l();av.dd();bf.dk=true;if(!this.hE&&(!this.kk||!this.hT)){
a0.a1.setState(1);}this.a5Z=0;};function a5l(){aH.nJ();if(ag.mz[aD.ep]===0){aX.show(false,true);
}af.ml(true);}this.a2Q=function(eS){if(!b9.qD.a5m.length){this.a5a=b9.a5n.a0T();
}else{this.a5a=b9.qD.a5m;}b0.y.a5o();bq.clear();this.a11=0;bf.a5p();a0.a1.setState(0);
aa.setState(0);bU.eK.show(eS);if(this.a5Z===2){t.y.a5q(0);}else if(this.a5Z===1){t.u(19);
}else{t.u(5,5);}};this.a5r=function(){return(this.hE?(aM.hF||!bC.a5s):(this.kk&&(aM.hF||this.hT)));
};this.a5t=function(){return this.a11===1&&!this.hT;};}function a5W(){this.mapType=0;
this.mapProceduralIndex=2;this.mapRealisticIndex=0;this.mapSeed=14071;this.mapName="";
this.canvas=null;this.passableWater=1;this.passableMountains=1;this.playerCount=512;
this.humanCount=1;this.selectedPlayer=0;this.gameMode=0;this.playerMode=0;this.battleRoyaleMode=0;
this.numberTeams=0;this.isZombieMode=0;this.isContest=0;this.isReplay=0;this.elo=null;
this.colorsType=0;this.colorsPersonalized=1;this.colorsData=null;this.selectableColor=1;
this.teamPlayerCount=null;this.neutralBots=0;this.botDifficultyType=0;this.botDifficultyValue=0;
this.botDifficultyTeam=null;this.botDifficultyData=null;this.spawningType=0;this.spawningSeed=0;
this.spawningData=null;this.selectableSpawn=1;this.playerNamesType=0;this.playerNamesData=null;
this.selectableName=1;this.aIncomeType=0;this.aIncomeValue=0;this.aIncomeData=null;
this.tIncomeType=0;this.tIncomeValue=32;this.tIncomeData=null;this.iIncomeType=0;
this.iIncomeValue=64;this.iIncomeData=null;this.sResourcesType=0;this.sResourcesValue=0;
this.sResourcesData=null;this.a5u=null;}function a5Y(){this.a5c=function(){var a5v=aD.data;
bA.r1.a3m(a5v.teamPlayerCount,a5v.playerCount);a5v.numberTeams=bA.r1.a3d(a5v.teamPlayerCount,0);
if(a5v.teamPlayerCount[0]&&a5v.teamPlayerCount[7]){a5v.teamPlayerCount[7]=0;
this.a5c();}};this.a5w=function(){var a5v=aD.data;if(a5v.mapType<2){bS.a7(bS.a5x(a5v),a5v.mapSeed);
}else{bS.a5y(a5v.canvas);}};this.a5z=function(){var a5v=aD.data;if(!a5v.colorsData){
a5v.colorsData=new Uint32Array(1);}if(a5v.selectableColor){a5v.colorsData[0]=bj.y.wc();
}if(a5v.selectableName){if(!a5v.playerNamesData){a5v.playerNamesData=new Array(1);
}a5v.playerNamesData[0]=bj.eQ.data[122].value;}a5v.a5u=new Uint32Array(1);
a5v.a5u[0]=bG.tG.xF(bj.eQ.data[105].value,5);};this.a60=function(){aD.data=new a5W();
aD.data.aIncomeType=2;aD.data.aIncomeData=new Uint8Array(aD.f2);aD.data.aIncomeData[0]=64;
};}function dZ(){var a61=[];this.pn=function(player,pR,a62,a63){if(player===aD.ep){
return;}if(pR===aD.ep){return;}if(!a63&&bA.gR.jn(player)){return;}if(bA.gR.jn(pR)){return;}
this.zT(ag.zU[player]+" supported "+ag.zU[pR]+" with "+bA.rs.a0I(a62)+" ressource"+(a62===1?".":"s."));
};this.zT=function(qa,pc){var a64={eT:aW.a65(),qa:qa,pc:pc};a61.push(a64);
if(t.tD===30){t.a2H().zT(a64);}};this.clear=function(){a61=[];var tb=t.a66(30);tb&&tb.clear();
};this.a67=function(){return a61;};}function dT(){this.zz=0;this.gap=0;this.sm=0;this.qz=0;
this.dd=function(){this.resize();};this.resize=function(){this.zz=0.0022*bA.qt.qu(0.5)*h.iF;
this.sm=this.zz/h.k;this.gap=Math.max(Math.floor((a0.a1.iE()?0.0114:0.01296)*
h.iF),2);this.qz=this.gap/h.k;};}function dS(){this.a68=function(){return a0.a1.iE()?2:1;
};}function cC(){var rS;var fC,fE,a69;var a6A,a6B;var eT;var a6C;var a6D;var a6E;
var a6F;var gap;var zoom;var pw;var a6G;this.a6H=function(){a6I();};this.a6J=function(){return rS;
};this.dd=function(){pw=[];fC=fE=eT=0;a6A=a6B=-1000;this.resize();};this.resize=function(){
a69=Math.floor((a0.a1.iE()?0.075:0.0468)*h.iF);zoom=a69/ab.get(3).height;gap=Math.floor(a69/3);
};function a6I(){var aB,fP;var f5=10;var a6K=[bB.oQ,bB.oe,bB.ny,bB.p1,bB.os];rS=new Array(f5);
for(aB=0;aB<f5;aB++){rS[aB]={id:aB,hr:false,lN:0,canvas:[],fC:0,fE:0};}rS[0].colors=[0,1,2,3];
rS[0].fC=0;rS[0].fE=0;rS[1].colors=[1,4];rS[1].fC=1;rS[1].fE=0;rS[2].colors=[0,1];
rS[2].fC=-1;rS[2].fE=0;rS[3].colors=[0];rS[3].fC=0;rS[3].fE=0;rS[4].colors=[0,2];rS[4].fC=1;
rS[4].fE=1;rS[5].colors=[3];rS[5].fC=0;rS[5].fE=-1;rS[6].id=20;rS[6].colors=[0];rS[6].fC=1;
rS[6].fE=-1;rS[7].id=21;rS[7].colors=[0];rS[7].fC=0;rS[7].fE=1;rS[8].id=16;rS[8].colors=[0];
rS[8].fC=0;rS[8].fE=0;rS[9].id=10;rS[9].colors=[4];rS[9].fC=2;rS[9].fE=0;for(aB=0;aB<f5;aB++){
for(fP=0;fP<rS[aB].colors.length;fP++){rS[aB].canvas.push(xP(rS[aB].id,a6K[rS[aB].colors[fP]]));
}}}function xP(id,a3s){if(id<20){return bA.canvas.zl(ab.get(3),id,a3s);
}var i1=ab.get(3).height;var a3t=bA.qt.xP(i1,i1);var i7=bA.qt.getContext(a3t);
if(id===20){i7.drawImage(ab.get(18),0,0);}else if(id===21){aj.xa.a00(aj.s9.zp+aj.s9.a06,i7,0,0,i1);
}return a3t;}this.a2t=function(lf,lg){if(!this.hr()){return false;}bf.dk=true;
if(aj.xa.hI(lf,lg,a6D)){return true;}var fP=hI(lf,lg);this.sA();if(fP===2){aj.xa.hr=true;
}return fP>0;};this.a2v=function(lf,lg){if(this.hr()){return;}a6A=lf;a6B=lg;eT=performance.now();
};function hI(lf,lg){a6A=-1000;a6B=-1000;var a6L=a6M(lf,lg);var a6N=a6O(a6L);if(a6N===-1){
return 0;}if(rS[a6N].colors[rS[a6N].lN]===1){return 1;}if(a6N===5){a6P();if(a6Q(a6C)){return 1;}
pw.push(a6C);if(pw.length>16){pw.shift();}return 1;}if(a6N===6){for(var aB=pw.length-1;aB>=0;aB--){
if(ag.mz[pw[aB]]===0){pw.splice(aB,1);}}if(pw.length>0){if(b5.a6R(1,pw,true)){b8.gR.pv(pw,a6C);
}pw=[];}return 1;}if(a6N===2){if(an.hj(a6C)){b8.hV.pQ(aR.hZ(),a6C);}return 1;}if(a6N===3){
if(aD.hT){b8.hV.hW(a6E);}return 1;}if(a6N===0){if(rS[0].lN===0){if(aD.a5U&&aW.a65()<350){
return 1;}bV.a6S(4);b8.hV.hc(aR.hZ(),a6C);}else{b1.hd(a6C,aR.hZ());}return 1;
}if(a6N===1){b8.hV.hh(aR.hZ(),a6E);return 1;}if(a6N===9){b8.hV.hk(aR.hZ());return 1;}if(a6N===7){
bV.a6S(0);aj.xa.show(lf,lg);return 2;}if(a6N===4){if(b5.a6R(0,[a6C],true)){b8.gR.ps(a6C);}
return 1;}if(a6N===8){b8.hV.hY(aR.hZ(),a6F,a6C);return 1;}return 0;}this.click=function(lf,lg,a32){
var hK=bM.hL(lf);var hM=bM.hN(lg);var er=bM.fS(hK,hM);var ej=bM.ev(er);
if(!bM.hO(hK,hM)){return false;}var a6T=(a0.a1.iE()?0.025:0.0144)*h.iF;var eU=performance.now();
if(Math.abs(lf-a6A)>a6T||Math.abs(lg-a6B)>a6T||eU>eT+500){return false;}eT=eU;if(a32){
a6U(lf,lg,ej);return false;}if(aM.hF||this.hr()||!bA.gR.hH(aD.ep)||aD.hE){this.sA();return false;
}if(aD.hT){a6E=br.hU(er);if(a6E>=0){rS[3].hr=true;}return this.a6V(lf,lg);}if(aD.a11===2){
if(!ac.gf(ej)){return this.a6V(lf,lg);}a6C=ac.ex(ej);if(!bA.gR.jn(a6C)){rS[0].hr=true;
rS[0].lN=1;rS[7].hr=true;return this.a6V(lf,lg);}return this.a6V(lf,lg);}if(bN.hi.hj(aD.ep,er)){
rS[0].hr=true;rS[0].lN=1;rS[1].hr=true;rS[1].lN=0;rS[9].hr=true;rS[9].lN=0;}if(bN.hf.hg(aD.ep,er)){
rS[0].hr=true;rS[0].lN=1;rS[1].hr=true;rS[1].lN=1;a6E=bO.fh[7];}if(ac.fA(ej)){a6F=am.eg.ei(ej);
if(a6F){var eu=bM.ev(a6F);rS[8].hr=true;a6C=ac.ew(eu)?aD.f2:ac.ex(eu);}return this.a6V(lf,lg);
}if(ac.yz(aD.ep,ej)){a6D=aD.ep;rS[0].hr=true;rS[0].lN=1;rS[7].hr=true;}var a6W=br.ha(er);
if(a6W===-1){return this.a6V(lf,lg);}if(ac.ew(a6W<<2)){a6C=aD.f2;if(bs.hb(aD.ep)){
rS[0].hr=true;rS[0].lN=0;}else if(ad.gC(aD.ep)){rS[0].hr=true;rS[0].lN=3;}return this.a6V(lf,lg);
}a6C=ac.ex(a6W<<2);rS[0].lN=1;rS[5].hr=a6X(a6C);if(!rS[7].hr&&!bA.gR.jn(a6C)){
a6D=a6C;rS[7].hr=true;}rS[4].hr=!bA.gR.jn(a6C)&&!af.a6Y(a6C)&&b5.a6R(0,[a6C],false);
rS[6].hr=a6Z(a6C);if(bs.ey(a6C,aD.ep)){if(bs.he(aD.ep,a6C)){rS[0].lN=0;rS[0].hr=true;
}else if(ad.gC(aD.ep)){rS[0].lN=3;rS[0].hr=true;}rS[0].hr=this.a6a();return this.a6V(lf,lg);
}rS[2].hr=true;if(an.hj(a6C)){rS[2].lN=0;}else{rS[2].lN=1;}rS[0].hr=true;return this.a6V(lf,lg);};
function a6U(lf,lg,ej){var a6b;if(ac.f0(ej)){aN.a6c(ej);return;}a6b=bN.lF.a6d(lf,lg);if(a6b===-1){
aN.a6c(ej);}else{aN.a6e(a6b);}}function a6P(){var eU=performance.now();if(eU>a6G+4000){
pw=[];}a6G=eU;}function a6X(a6C){return!bA.gR.jn(a6C)&&!a6Q(a6C)&&b5.a6R(1,[a6C],false);
}function a6Z(a6C){if(pw.length===0){return false;}if(performance.now()>a6G+4000){
pw=[];return false;}return!a6Q(a6C)&&!a6f(a6C);}function a6Q(a6C){var aB;
for(aB=pw.length-1;aB>=0;aB--){if(pw[aB]===a6C){return true;}}return false;}function a6f(a6C){
var aB;if(!aD.hz){return false;}for(aB=pw.length-1;aB>=0;aB--){if(!bs.ey(a6C,pw[aB])){
return true;}}return false;}this.a6V=function(lf,lg){fC=lf-Math.floor(a69/2);
fE=lg-Math.floor(a69/2);if(this.hr()){return true;}return false;};this.a2Z=function(lf,lg){
if(!this.hr()){return false;}if(aj.xa.hr){if(aj.xa.zy(lf,lg)){return false;
}aj.xa.hr=false;bf.dk=true;return true;}return a6g(this,lf,lg);};function a6g(sV,lf,lg){
var eC=a6M(lf,lg);if(a6O(eC)>=0){return false;}if((eC===1||eC===6)&&a6O(2)>=0){
return false;}if((eC===6||eC===9)&&a6O(10)>=0){return false;}sV.sA();bf.dk=true;
return true;}function a6O(a6L){var aB,f5;if(a6L===-1){return-1;}f5=rS.length;for(aB=0;aB<f5;aB++){
if(rS[aB].hr&&rS[aB].fC+1===a6L%4&&rS[aB].fE+1===(a6L>>2)){return aB;}}return-1;
}this.sA=function(){for(var aB=rS.length-1;aB>=0;aB--){rS[aB].hr=false;rS[aB].lN=0;}aj.xa.hr=false;
};this.hr=function(){return this.a6a()||aj.xa.hr;};this.a6a=function(){var aB;var f5=rS.length;
for(aB=0;aB<f5;aB++){if(rS[aB].hr){return true;}}return false;};function a6M(lf,lg){
var y7,y8;var tb=gap/2;if(lf<fC-a69-3*tb||lf>fC+3*a69+5*tb||lg<fE-a69-3*tb||lg>fE+2*a69+3*tb){
return-1;}y7=lf<fC-tb?0:lf<fC+a69+tb?1:lf<fC+2*a69+3*tb?2:3;y8=lg<fE-tb?0:lg<fE+a69+tb?1:2;
return y8*4+y7;}this.vY=function(){if(!this.hr()){return;}if(aj.xa.hr){aj.xa.vY();
return;}a6h();};function a6h(){var aB;var i7=vZ;var fP=rS;var f5=fP.length;var a6i=(a69+gap)/zoom;
i7.imageSmoothingEnabled=true;i7.setTransform(zoom,0,0,zoom,fC,fE);for(aB=0;aB<f5;aB++){
if(fP[aB].hr){vZ.drawImage(fP[aB].canvas[fP[aB].lN],fP[aB].fC*a6i,fP[aB].fE*a6i);
}}i7.imageSmoothingEnabled=false;
i7.setTransform(1,0,0,1,0,0);}}function cD(){var j;var canvas;var a6j;var a6k;
var a6l;var a6m=-1;this.hF=false;this.dd=function(){a6k=-1;this.hF=false;a6l=a0.a1.iE()?1.2:0.6;
this.resize();};this.resize=function(){j=aR.j;canvas=document.createElement(S[4]);
canvas.width=j;canvas.height=j;a6j=bA.qt.sk(1,(a0.a1.iE()?0.5:0.45)*j);
a6n();};function a6n(){var a6o;var zA=canvas.getContext("2d",{alpha:true});zA.clearRect(0,0,j,j);
zA.fillStyle=bB.nw;zA.fillRect(0,0,j,j);if(a6k===9){zA.fillStyle=bB.o1;zA.fillRect(0,0,j,j);
}zA.fillStyle=bB.o0;zA.fillRect(0,0,j,1);zA.fillRect(0,0,1,j);zA.fillRect(0,j-1,j,1);
zA.fillRect(j-1,0,1,j);a6o=0.9*j/ab.get(0).width;zA.imageSmoothingEnabled=true;
zA.setTransform(a6o,0,0,a6o,Math.floor((j-a6o*ab.get(0).width)/2),Math.floor((j-a6o*ab.get(0).height)/2));
zA.drawImage(ab.get(0),0,0);
zA.setTransform(1,0,0,1,0,0);}this.a3A=function(){this.hF=!this.hF;if(!this.hF){
a6k=-1;a6n();if(aD.kk&&aD.a11===1&&!aD.hT&&!aD.hE){a0.a1.setState(1);}}else{bC.a39(false);
aD.hE&&bC.a5s&&bC.a3B(true);this.a6p();if(a6k===9){a6k=0;}}bf.dk=true;};this.a6p=function(){
if((aD.kk||aD.hE)&&aD.a11===1){aV.ml(true);if(!aD.hT){setTimeout(function(){bb.a1D();},0);
}a0.a1.setState(0);}};this.hI=function(lf,lg){a6m=a6q(lf,lg);if(a6m>=0){return a6m;}a6r();
return a6m;};function a6r(){if(aM.hF&&!aD.kk&&!aD.hE&&!be.hr){aM.a3A();}}this.a2Z=function(lf,lg){
var lN=a6q(lf,lg);if(lN===a6k){return;}a6k=lN;if(!this.hF){a6n();}bf.dk=true;return;
};this.a2a=function(lf,lg){var lN=a6q(lf,lg);if(lN===-1){return false;}if(a6m!==lN){return false;
}if(this.hF){if(aD.nT){if(lN>=0){bC.a39(false);}return!aD.hE;}if(lN===0){aD.a2Q();return true;
}if(lN===1){this.a3A();return true;}if(lN===2){t.u(1,0);return true;}return true;}if(lN===9){
this.a3A();return true;}return false;};function a6q(lf,lg){if(!aM.hF){if(lf<=j+bc.gap&&lg>=aR.fE){
return 9;}return-1;}if(lf<=4*j+bc.gap){if(lg>=aR.fE){return 0;}if(lg>=aR.fE-j-a6l*bc.gap){
return 2;}}else if(lf<=7*j+bc.gap&&lg>=aR.fE-j-a6l*bc.gap){return 1;}return-1;}this.vY=function(){
if(this.hF){a6s();a6t();vZ.setTransform(1,0,0,1,0,0);}else{vZ.drawImage(canvas,bc.gap,aR.fE);
}};this.qU=function(player){return ag.mz[player]!==0&&aD.a11!==2&&!bA.gR.jn(player);
};function a6s(){var f5;var i=Math.floor(5.5*j);vZ.setTransform(1,0,0,1,bc.gap,aR.fE);
vZ.fillStyle=bB.nw;vZ.fillRect(0,0,i,j);if(a6k===0){vZ.fillStyle=bB.o1;vZ.fillRect(0,0,4*j,j);
}else if(a6k===1){vZ.fillStyle=bB.o1;vZ.fillRect(4*j,0,Math.floor(1.5*j),j);}vZ.fillStyle=bB.o0;
vZ.fillRect(0,0,i,1);vZ.fillRect(0,0,1,j);vZ.fillRect(4*j,0,1,j);vZ.fillRect(0,j-1,i,1);
vZ.fillRect(i-1,0,1,j);vZ.font=a6j;bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,1);
vZ.fillText(L(44),2*j,0.54*j);f5=0.4*j;aM.a6u(bc.gap+4*j+(1.5*j-f5)/2,aR.fE+0.3*j,f5);
}function a6t(){a6v(1);}function a6v(aB){vZ.setTransform(1,0,0,1,bc.gap,aR.fE-aB*a6l*bc.gap-aB*j);
vZ.fillStyle=bB.nw;vZ.fillRect(0,0,4*j,j);if(a6k===aB+1){vZ.fillStyle=bB.o1;
vZ.fillRect(0,0,4*j,j);}vZ.fillStyle=bB.o0;vZ.fillRect(0,0,4*j,1);vZ.fillRect(0,0,1,j);
vZ.fillRect(4*j,0,1,j);vZ.fillRect(0,j-1,4*j,1);vZ.fillText(aB===0?L(44):L(45),2*j,0.54*j);
}this.a6u=function(fC,fE,f5){vZ.setTransform(1,0,0,1,fC,fE);
vZ.lineWidth=bc.zz;vZ.strokeStyle=bB.o0;vZ.beginPath();vZ.moveTo(0,0);
vZ.lineTo(f5,f5);vZ.moveTo(0,f5);vZ.lineTo(f5,0);vZ.stroke();};}function cE(){var a6w;
var j;var a6x;var a6y;var a6z;var a70;var a71;var a72;var a73;this.a74="";this.dd=function(){
a72=0;a71=!a0.a1.iE()?12:7;a70={a0p:[0,0,0],a75:[0,0,0],nH:[220,180,180],vX:[0,0,0],ed:[0,0,0]};
a6w=[];this.resize();if(aD.hT){this.a1E(0,18);}a76();a77(this);if(aD.zS){
a78(340,L(46),6,0,a79(255,200,0),bB.nx,-1,false);}};function a77(self){if(self.a74.length===0){
return;}a78(200,self.a74,0,0,bB.o0,bB.nx,-1,false);self.a74="";}this.resize=function(){var a7A,aB;
j=Math.floor((a0.a1.iE()?0.031:0.0249)*h.iF);j=j<10?10:j;this.fontSize=Math.floor(2*j/3);
this.a6j=bA.qt.sk(1,this.fontSize);a6x=bc.gap;a6y=Math.floor(j/5);if(a6w.length>0){
a7A=a6w;a6w=[];for(aB=a7A.length-1;aB>=0;aB--){a78(a7A[aB].eT,a7A[aB].qa,a7A[aB].id,a7A[aB].player,
a7A[aB].a7B,a7A[aB].a7C,a7A[aB].l3,a7A[aB].a7D,a7A[aB].a7E,a7A[aB].a7F,true);
}}this.a7G();};this.a7G=function(){
a73=document.createElement(S[4]);var qa=L(47);a6z=aQ.measureText(qa,this.a6j)+5*a6y;
a73.height=j;a73.width=a6z;var zA=a73.getContext("2d",{alpha:true});zA.font=this.a6j;
bA.qt.textBaseline(zA,1);bA.qt.textAlign(zA,1);zA.clearRect(0,0,a6z,j);zA.fillStyle=bB.oN;
zA.fillRect(0,0,a6z,j);zA.fillStyle=bB.o0;zA.fillText(qa,Math.floor(a6z/2),Math.floor(j/2));
};this.a7H=function(){if(aw.hr){return aw.i;}var f5=a6w.length;
if(f5===0){return 0;}else if(f5===1){return a6w[0].a7I;}return a7J(a6w[0].a7I,a6w[1].a7I);
};this.a7K=function(){var f5=a6w.length;if(aw.hr){if(f5){return a7J(aw.i,a6w[0].a7I);
}return aw.i;}if(f5===0){return 0;}else if(f5===1){return a6w[0].a7I;}else if(f5===2){
return a7J(a6w[0].a7I,a6w[1].a7I);}return a7J(a7J(a6w[0].a7I,a6w[1].a7I),a6w[2].a7I);
};function z6(){if(aR.a7L(aN.a7H())){if(aw.hr){return aR.fE-aR.j-2*a6x;
}else{return aR.fE-a6x;}}else if(bC.a7L(aN.a7K())){if(aw.hr){return bC.z6()-aR.j-2*a6x;}else{
return bC.z6()-a6x;}}else if(aw.hr){return h.j-aR.j-(bk.a68()+1)*a6x;}return h.j-bk.a68()*bc.gap;
}this.hI=function(fC,fE){var aB,a7M,eU;var a7N=z6();for(aB=a6w.length-1;aB>=0;aB--){
a7M=a7N-(aB+1)*j;if(fE>=a7M&&fE<a7M+j){if(a6w[aB].id===50){if(fC>=h.i-a6z-a6x-a6w[aB].i){
if(fC>=h.i-a6z-a6x){b8.gR.ps(a6w[aB].player);}else{aH.nL(a6w[aB].player,800,false,0);
}return true;}return false;}if(fC>=h.i-a6w[aB].i-a6x){if(a6w[aB].id===736){
window.open("https://"+a6w[aB].qa,S[103]);}else if(a6w[aB].a7D){if(a6w[aB].a7F&&a6w[aB].a7F.fO){
var er=a6w[aB].a7F.er;var nQ=bM.fD(er)-10;var nR=bM.fF(er)-10;aH.nK(nQ,nR,nQ+19,nR+19);
}else if(a6w[aB].a7F&&a6w[aB].a7F.fP){aH.nM(a6w[aB].player,a6w[aB].a7F.nN);
}else{aH.nL(a6w[aB].player,800,false,0);if(a6w[aB].l3>=0){eU=a6w[aB].l3;
a6w[aB].l3=a6w[aB].player;a6w[aB].player=eU;}}}return true;}return false;}}return false;
};this.zT=function(eU,qa,id,gd,a7B,a7C,l3,a7D,a7E,a7F){a78(eU,qa,id,gd,a7B,a7C,l3,a7D,a7E,a7F);
};this.a7O=function(r){a78(300,r,252,0,bB.o0,bB.nx,-1,false);};
function a78(eU,qa,id,gd,a7B,a7C,l3,a7D,a7E,a7F,a7P){var aB,zA,a7I,a3t,ql;var a7Q=a7E!==undefined;
var i=Math.floor(aQ.measureText(qa,aN.a6j)+1.5*a6y+(a7Q?j:(1.5*a6y)));bf.dk=true;
if(!a7P){bq.zT(qa,a7E);}if(i+2*a6x+aR.j>h.i&&!a7Q&&id!==50&&qa.length>20){var g=bA.rs.a5B(qa);
a78(eU,g[0],id,gd,a7B,a7C,l3,a7D,a7E,a7F,true);a78(eU,g[1],id,gd,a7B,a7C,l3,a7D,a7E,a7F,true);
return;}a7I=i+(id===50?a6z:0);a3t=document.createElement(S[4]);a3t.width=i;
a3t.height=j;zA=a3t.getContext("2d",{alpha:true});zA.font=aN.a6j;bA.qt.textBaseline(zA,1);
bA.qt.textAlign(zA,0);zA.clearRect(0,0,i,j);zA.fillStyle=a7C;zA.fillRect(0,0,i,j);zA.fillStyle=a7B;
zA.fillText(qa,Math.floor(1.5*a6y),Math.floor(j/2));if(a7Q){zA.imageSmoothingEnabled=true;
aj.xa.a00(a7E,zA,i-j,0,j);}ql={eT:eU,qa:qa,id:id,player:gd,canvas:a3t,a7B:a7B,a7C:a7C,
i:i,a7I:a7I,l3:l3,a7D:a7D,a7E:a7E,a7F:a7F};if(ql.eT===0||(a6w.length>0&&a6w[0].eT>0)){
a6w.unshift(ql);}else{for(aB=1;aB<a6w.length;aB++){if(a6w[aB].eT>0){a6w.splice(aB,0,ql);
return;}}a6w.push(ql);}}this.a5N=function(id){for(var aB=a6w.length-1;aB>=0;aB--){
if(a6w[aB].id===id){a6w[aB].eT=1;}}};this.a1E=function(player,id){if(id===0){aQ.ec(player,0);
a7R(423,2);a78(160,L(48,[ag.zU[player]]),423,player,S[82],bB.nx,-1,false);}else if(id===1){
a7S(50,aD.f2);aQ.ec(player,1);a78(360,L(49,[ag.zU[player]]),0,player,bB.oh,bB.nx,-1,true);
aH.nL(player,2700,false,0);}else if(id===2){
aQ.ec(player,2);a78(0,L(50),0,player,"rgb(10,255,255)",bB.nx,-1,true);aH.nL(player,2700,false,0);
}else if(id===3){aQ.ec(player,2);a78(0,L(51,[ag.zU[player]]),0,player,bB.o0,bB.nx,-1,true);
aH.nL(player,2700,false,0);}else if(id===4){
this.a7T(1,player,player);}else if(id===5){if(bA.gR.jn(aD.ep)){return;}a7U(1,5);if(af.a7V(player)){
a78(180,L(52,[ag.zU[player]]),1,player,a79(255,200,180),bB.nx,-1,true);}if(!bA.gR.a4U(player,10)){
return;}a7R(573,0);a78(180,L(53,[ag.zU[player]]),573,player,bB.oh,bB.nx,-1,true);
}else if(id===18){a78(255,L(54),18,0,bB.o0,bB.nx,-1,false);}else if(id===21){
a78(220,L(55),id,0,bB.o0,bB.nx,-1,false);}else if(id===22){this.a7T(2,player,player);
}else if(id===59){a78(0,L(56),id,0,bB.p0,bB.nx,0,false);}};this.a2M=function(r){
a78(200,L(57,[r]),94,0,bB.o0,bB.oc,-1,false);};this.a1Q=function(a7W){if(!ag.gt[a7W]){
return;}aQ.ec(a7W,2);if(aD.kQ<100){a78(0,L(51,[ag.zU[a7W]]),3,a7W,bB.o0,bB.nx,-1,true);
}else{a78(0,L(58,[ag.zU[a7W]]),3,a7W,bB.o0,bB.nx,-1,true);
}};this.a6c=function(ej){var qa;var a7X="("+bM.fD(ej>>2)+", "+bM.fF(ej>>2)+")";
var a7D=false;var player=0;if(ac.f0(ej)){if(ac.ew(ej)){a7X=L(59,[a7X]);}else{player=ac.ex(ej);
if(aD.hE){aD.ep=player;}qa=L(60,[bA.zA.a47(ag.a1h[player],bA.qt.sk(0,10),150)])+S[14];
qa+=L(61,[bA.rs.a0I(ag.h7[player])])+S[14];qa+=L(62,[bA.rs.a0I(ag.gt[player])])+S[14];
if(aD.hz){var a7Y=bg.a1N[bg.kn[bg.f3[player]]];qa+=L(63)+": "+a7Y+S[14];}if(bA.gR.jn(player)){
qa+=L(64)+": "+aE.kb[aE.ho[player]]+S[14];}qa+=L(65,[player])+S[14];qa+=L(66,[a7X]);
a7X=qa;a7D=true;}}else if(ac.fA(ej)){a7X=L(67,[a7X])+"   #"+ac.en(ej);}else{a7X=L(68,[a7X]);
}bf.dk=true;a7R(55,0);a78(220,a7X,55,player,bB.o0,bB.nx,-1,a7D,undefined,undefined,true);
};this.a6e=function(a7Z){var lL=bN.y;var player=lL.mK[a7Z]>>3;
bf.dk=true;a7R(55,0);var qa=L(69,[ag.zU[player]])+S[14];qa+=L(61,[bA.rs.a0I(lL.a7a[a7Z])]);
a78(220,qa,55,player,bB.o0,bB.nx,-1,true);};this.pb=function(pN,a7b,pc){
if(pN===aD.ep){a78(175," "+L(70,[ag.zU[a7b]])+": ",1001,a7b,a79(200,255,210),bB.nx,-1,true,pc);
}else{this.a7c(pN,pc);}};this.a7c=function(pN,pc){
a7R(1000,0);a78(175,ag.zU[pN]+": ",1000,pN,bB.o0,"rgba(5,60,25,0.9)",-1,true,pc);
};function a7U(id,mu){var aB;var a7d=0;var f5=a6w.length;for(aB=0;aB<f5;aB++){if(a6w[aB].id===id){
a7d++;if(a7d>=mu){a6w.splice(aB,1);return;}}}}this.a1P=function(){var r;if(aD.a16){
r=L(71);aQ.a1O(L(72),2,1,12);a78(0,r,40,0,S[82],bB.nx,-1,false);}else{r=L(73);aQ.a1O(L(74),2,0,16);
a78(0,r,41,0,bB.o0,bB.nx,-1,false);}};this.zH=function(){var gY=ag.zU;var f8=aD.data;
a78(300,gY[0]+" ["+aD.a1K.zN(f8.elo[0])+"] vs "+gY[1]+" ["+aD.a1K.zN(f8.elo[1])+"]",65,0,bB.nr,"rgba(100,255,255,0.75)",-1,false);
};this.a7e=function(r){
a78(350,r,0,0,"rgb(40,255,200)","rgba(10,60,40,0.9)",-1,false);};this.a7f=function(a7g){
a78(0,a7g?L(75):L(76),247,0,bB.oz,bB.nx,-1,false);};this.zP=function(zM,zO,a7h){var f8=aD.data;
var gY=ag.zU;a78(0,gY[0]+": "+aD.a1K.zN(f8.elo[0])+S[142]+zM,66,0,bB.o0,a7h[0],-1,false);
a78(0,gY[1]+": "+aD.a1K.zN(f8.elo[1])+S[142]+zO,66,1,bB.o0,a7h[1],-1,false);
};this.pt=function(player,id){if(id===0){if(a7S(50,player)){
a78(128,L(77,[ag.zU[player]]),52,player,a79(180,255,180),bB.nx,-1,true);af.qS(player,2,255);}else{
a78(384,L(78,[ag.zU[player]]),51,player,a79(210,210,255),bB.nx,-1,true);}}else{if(a7S(51,player)){
a78(128,L(79,[ag.zU[player]]),52,player,bB.o0,"rgba(60,120,10,0.9)",-1,true);af.qS(player,2,255);
}else{a78(384,L(80,[ag.zU[player]]),50,player,bB.o0,"rgba(90,90,90,0.9)",-1,true);
af.qS(player,2,96);}}};this.px=function(a0p,target){var color=a79(210,255,210);
if(a0p.length>1){a78(230,L(81,[a0p.length,ag.zU[target]]),66,target,color,bB.nx,-1,true);
}else{a78(230,L(82,[ag.zU[a0p[0]],ag.zU[target]]),66,a0p[0],color,bB.nx,target,true);
}};function a79(eB,tb,fP){return S[9]+eB+","+tb+","+fP+")";}this.a7i=function(player,target){
a78(230,L(83,[ag.zU[player],ag.zU[target]]),66,player,bB.o0,"rgba(75,65,5,0.9)",target,true);
};this.a7j=function(id,gY){
a7R(id,gY);};function a7R(id,gY){var aB;var f5=a6w.length;for(aB=0;aB<f5;aB++){
if(a6w[aB].id===id&&(gY--)<=0){a6w.splice(aB,1);aB--;f5--;}}}this.a19=function(id,player){
a7S(id,player===undefined?aD.f2:player);};function a7S(id,player){var fJ=false;
for(var aB=a6w.length-1;aB>=0;aB--){if(a6w[aB].id===id&&(player===aD.f2||a6w[aB].player===player)){
a6w.splice(aB,1);fJ=true;}}return fJ;}this.a7k=function(id){for(var aB=a6w.length-1;aB>=0;aB--){
if(a6w[aB].id===id){return a6w[aB];}}return null;};this.po=function(a62,a7l,player){
if(ag.a4P[aD.ep]===2){return;}var a7m;if(a62===1){a7m=L(84,[ag.zU[player]]);}else{
a7m=L(85,[bA.rs.a0I(a62),ag.zU[player]]);}a78(200,a7m,30,player,"rgb(190,255,190)",bB.nx,-1,true);
};this.a7n=function(a62,player){if(ag.a4P[aD.ep]===2){
return;}a7R(31,0);var a7m=" ("+bA.rs.a0I(a62)+") 💸";if(bA.gR.jn(player)){a7m=L(86)+a7m;
}else{a7m=L(87,[ag.zU[player]])+a7m;}a78(150,a7m,31,player,bB.nr,"rgba(205,205,205,0.9)",-1,true);
};function a76(){if(bS.xN.xO[bS.el].name.length){a7o(L(88,[bS.xN.xO[bS.el].name]));
}a7o(L(89,[(bS.fG-2)+"x"+(bS.fH-2)]));a7o(L(90,[bA.rs.a0I(ap.a7p)]));
if(ap.a7p!==ap.a7q){a7o(L(91,[bA.rs.a0I(ap.a7q)+" ("+bA.rs.a57(100*ap.a7q/ap.a7p,1)+")"]));
}if(ap.a7r>0){a7o(L(68,[bA.rs.a0I(ap.a7r)+" ("+bA.rs.a57(100*ap.a7r/ap.a7p,1)+")"]));
}if(ap.a7s>0){a7o(L(92,[bA.rs.a0I(ap.a7s)+" ("+bA.rs.a57(100*ap.a7s/ap.a7p,1)+")"]));
}if(aD.ki===10){a78(120,L(93),6,0,a79(235,255,120),bB.nx,-1,false);
}}function a7o(qa){a78(340,qa,6,0,a79(215,245,255),bB.nx,-1,false);}this.a18=function(bu){
var aB;var ed=bf.kN();for(aB=2;aB>=0;aB--){if(a70.vX[aB]>0&&(bu||a70.ed[aB]<ed-220)){
this.a7t(aB);}}};this.a7t=function(id){var qa;var f5=a70.vX[id];var player=a70.a0p[id];
a70.vX[id]=0;if(f5===1){if(id===0){qa=L(94,[ag.zU[player],ag.zU[a70.a75[0]]]);}else if(id===1){
qa=L(95,[ag.zU[player]]);}else if(id===2){qa=L(96,[ag.zU[player]]);}else if(id===3){
qa=L(97,[ag.zU[player]]);}a7R(7,0);a78(a70.nH[id],qa,7,a70.a75[id],bB.o0,bB.nx,-1,true);
}else{if(id===0){qa=L(98,[f5]);}else if(id===1){qa=L(99,[f5]);}else{qa=L(100,[f5]);}a7R(7,0);
a78(a70.nH[id],qa,7,player,bB.o0,bB.nx,-1,false);}};this.a7T=function(id,hX,l3){var ed=bf.kN();
var f5=a70.vX[id]+1;a70.vX[id]++;a70.a0p[id]=hX;a70.a75[id]=l3;if(f5===1){a70.ed[id]=ed;}
if(f5===1&&(aD.a14<32||aD.a11===2)){this.a7t(id);return;}if(f5>1&&(a70.ed[id]<ed-140||aD.a11===2)){
this.a7t(id);}};this.eY=function(){b2.eY();var jf=a6w.length-a71;jf=jf<=1?1:jf*jf;
for(var aB=a6w.length-1;aB>=0;aB--){if(a6w[aB].eT>0){a6w[aB].eT-=jf;if(a6w[aB].eT<=0){bf.dk=true;
a6w.splice(aB,1);}}}a7u();this.a18(false);};function a7u(){var gY,aB;if(a72===128){return;
}a72++;if(a72<128){return;}gY=5;for(aB=al.kw-1;aB>=0;aB--){if(ag.a4P[al.l1[aB]]===1&&gY-- >0){
a78(240,L(97,[ag.zU[al.l1[aB]]]),1,al.l1[aB],bB.nr,"rgba(255,255,255,0.75)",-1,true);
}}}this.vY=function(){
var fE=z6();var y8;for(var aB=a6w.length-1;aB>=0;aB--){y8=fE-(aB+1)*j;if(a6w[aB].id===50){
vZ.drawImage(a6w[aB].canvas,h.i-a6w[aB].i-a6z-a6x,y8);vZ.drawImage(a73,h.i-a6z-a6x,y8);
}else{vZ.drawImage(a6w[aB].canvas,h.i-a6w[aB].i-a6x,y8);}}};}function cF(){
var va="";var xt=0;var xu=0;var a7v=-1;var a7w;var a7x;var e6=["Team","Zombie","BR",S[124]];
this.dd=function(){a7x=L(101);};this.resize=function(){xt=Math.floor((a0.a1.iE()?0.53:0.36)*h.iF);
xu=Math.floor(0.065*xt);a7w=bA.qt.sk(1,Math.floor(0.9*xu));
a7v+=1000;a7y();};this.eY=function(){if(a7y()){bf.dk=true;}};function a7y(){var eU=new Date();
var a7z=eU.getUTCMinutes();var a80=eU.getUTCSeconds();var a81=[];var a82=0;for(var aB=0;aB<6;aB++){
a81.push(a82);a81.push(a82+2);a81.push(a82+5);a81.push(a82+7);a82+=10;}var f5=a81.length;
for(aB=1;aB<f5;aB++){if(a7z<a81[aB]){break;}}aB%=f5;a81[0]=60;var a83=60*(a81[aB]-a7z)-a80;
if(a83===a7v){return false;}va=e6[aB%4]+" "+a7x+": "+a84(Math.floor(a83/60))+":"+a84(a83%60);
a7v=a83;xt=aQ.measureText(va,a7w);xt+=Math.floor(0.4*xu);
return true;}function a84(a85){return a85<10?"0"+a85:String(a85);}this.vY=function(fE){
vZ.lineWidth=1+Math.floor(xu/15);vZ.translate(h.i-xu,fE+xt);vZ.rotate(-Math.PI/2);
vZ.fillStyle=bB.o0;vZ.fillRect(0,0,xt,xu);vZ.strokeStyle=bB.nr;vZ.strokeRect(0,0,xt,xu+10);
vZ.fillStyle=bB.nr;vZ.font=a7w;bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,1);
vZ.fillText(va,Math.floor(xt/2),Math.floor(0.59*xu));vZ.setTransform(1,0,0,1,0,0);};
}function cG(){var a61;var a86;var a87;var xu,a88;var a89=0;var a8A=0;this.dd=function(){a89=a8A=0;
a61=[];this.resize();};this.resize=function(){a87=aN.a6j;xu=aN.fontSize+5;xu=Math.floor(1.25*xu);
if(a0.a1.iE()){xu=Math.floor(1.25*xu);}a88=Math.floor(0.15*xu);bS.xT.font=a87;
a86=Math.floor(bS.xT.measureText("02 000 000 0000").width);for(var aB=a61.length-1;aB>=0;aB--){
a8B(a61[aB]);a8C(aB);}};this.ml=function(){for(var aB=a61.length-1;aB>=0;aB--){if(a61[aB].a8D){
a61[aB].a8D=false;a8C(aB);}}};function a8C(aB){var a8E=true;var a07=bB.o0;if(a61[aB].id===1){
a61[aB].zA.fillStyle=bB.ou;}else if(a61[aB].jZ===aD.f2){a61[aB].zA.fillStyle=bB.oB;
}else{ac.a8F(a61[aB].jZ);a61[aB].zA.fillStyle=bA.color.nu(bO.fe[0],bO.fe[1],bO.fe[2],0.87);
if(bA.r1.a3X(bO.fe,0,2)>400){a8E=false;a07=bB.nr;
}}var i=a61[aB].canvas.width;a61[aB].zA.clearRect(0,0,i,xu);a61[aB].zA.fillRect(0,0,i,xu);
a61[aB].zA.fillStyle=a07;a8G(a61[aB].zA,i,xu);if(i>a86+2*xu){a61[aB].zA.fillRect(i-a86-xu,0,1,xu);
a61[aB].zA.fillText(ag.zU[a61[aB].jZ],Math.floor((i-a86)/2),Math.floor(0.57*xu));
}var tK=a61[aB].id!==0?0:xu;
a61[aB].zA.fillText(bA.rs.a0I(a61[aB].ho),Math.floor(i-a86/2-tK),Math.floor(0.57*xu));
a8H(aB,i,tK,a8E);if(a61[aB].id===0){a8I(aB,i,a8E,a07);
a8J(aB,i,a8E);}else{a8I(aB,2*xu,a8E,a07);}}function a8G(zA,i,xu){zA.fillRect(0,0,i,1);
zA.fillRect(0,xu-1,i,1);zA.fillRect(0,0,1,xu);zA.fillRect(i-1,0,1,xu);}function a8H(aB,i,tK,a8E){
a61[aB].zA.fillStyle=a8E?bB.o2:bB.ny;var a8K=Math.floor(a86*a61[aB].ho/a61[aB].a8L);
a61[aB].zA.fillRect(Math.floor(i-a86-tK),xu-a88,a8K,a88);
}function a8I(aB,i,a8E,a07){a61[aB].zA.strokeStyle=a61[aB].a8M?bB.o9:a8E?bB.oY:bB.oZ;
a61[aB].zA.fillStyle=a07;a61[aB].zA.fillRect(i-xu,0,1,xu);
a61[aB].zA.lineWidth=Math.max(Math.floor(xu/12),3);a61[aB].zA.lineCap="round";var f8=0;var nc=0.35;
i=xu+1;a61[aB].zA.beginPath();a61[aB].zA.moveTo(Math.floor(i-nc*xu+f8),Math.floor(nc*xu));
a61[aB].zA.lineTo(Math.floor(i-xu+nc*xu),Math.floor(xu-nc*xu+f8));a61[aB].zA.stroke();
a61[aB].zA.beginPath();a61[aB].zA.moveTo(Math.floor(i-xu+nc*xu),Math.floor(nc*xu));
a61[aB].zA.lineTo(Math.floor(i-nc*xu+f8),Math.floor(xu-nc*xu+f8));
a61[aB].zA.stroke();}function a8J(aB,i,a8E){
a61[aB].zA.strokeStyle=a8E?bB.oI:bB.oS;a61[aB].zA.fillRect(xu,0,1,xu);var f8=0;var nc=0.3;
var yO=i-xu;a61[aB].zA.beginPath();a61[aB].zA.moveTo(Math.floor(nc*xu+yO),Math.floor(xu/2));
a61[aB].zA.lineTo(Math.floor(xu-nc*xu+f8+yO),Math.floor(xu/2));a61[aB].zA.stroke();
a61[aB].zA.beginPath();a61[aB].zA.moveTo(Math.floor(xu/2+yO),Math.floor(nc*xu));
a61[aB].zA.lineTo(Math.floor(xu/2+yO),Math.floor(xu-nc*xu+f8));a61[aB].zA.stroke();
}this.hI=function(lf,lg){if(aD.a11===2||ag.mz[aD.ep]===0||aD.hE||bA.gR.jn(aD.ep)){
return false;}var aB;var a8N;var a8O;var a8P;var a8Q=a0.a1.iE()?xu:0;
var a8R=a0.a1.iE()?Math.floor(0.15*xu):0;for(aB=a61.length-1;aB>=0;aB--){a8N=a8S(aB);a8O=a8T(aB);
a8P=a61[aB].canvas.width;if(lg>=a8O-a8R&&lg<=a8O+xu+a8R){if(lf>=a8N-a8Q&&lf<=a8N+xu+a8Q){
if(!a61[aB].a8M){a61[aB].a8D=true;a61[aB].a8M=true;if(a61[aB].id===0){b8.hV.pZ(a61[aB].jZ);}else{
b8.hV.pY(a61[aB].jZ);}}return true;}else if(a61[aB].id===0&&lf>=a8N+a8P-xu-a8Q&&lf<=a8N+a8P+a8Q){
bV.a6S(3);b8.hV.hc(aR.hZ(),a61[aB].jZ);return true;
}}}return false;};this.eY=function(){if(ag.mz[aD.ep]===0||(bA.gR.jn(aD.ep)&&!aD.hE)){return;
}var a3f=a61.slice(0,a89);var a3g=a61.slice(a89,a89+a8A);a3f=a8U(a3f);a3g=a8V(a3g);a89=a3f.length;
a8A=a3g.length;a61=a3f.concat(a3g);};function a8U(g){var a8W=ad.gC(aD.ep);if(!a8X(g,a8W)){
a8Y(g,a8W);return g;}g=a8Z(g,a8W);a8Y(g,a8W);return g;}function a8V(g){var a8a=bN.y.kU[aD.ep];
if(!a8b(g,a8a)){a8c(g,a8a);return g;}g=a8d(g,a8a);a8c(g,a8a);return g;}function a8X(g,a8W){
if(a89!==a8W){return true;}for(var aB=a8W-1;aB>=0;aB--){if(g[aB].jZ!==ad.gH(aD.ep,aB)){return true;
}}return false;}function a8b(g,a8a){if(a8A!==a8a){return true;}var tX=aD.ep<<3;var mJ=bN.y.mJ;
var a8e=bN.y.a8e;for(var aB=a8a-1;aB>=0;aB--){var a8f=a8e[tX+aB];if(g[aB].jZ!==mJ[a8f]){
return true;}}return false;}function a8Y(g,a8W){var aB,ho;for(aB=a8W-1;aB>=0;aB--){
ho=ad.gI(aD.ep,aB);if(g[aB].ho!==ho){g[aB].ho=ho;g[aB].a8L=Math.max(ho,g[aB].a8L);
g[aB].a8D=true;}}}function a8c(g,a8a){var aB,ho;var tX=aD.ep<<3;var a7a=bN.y.a7a;var mH=bN.y.mH;
var a8e=bN.y.a8e;for(aB=a8a-1;aB>=0;aB--){var a8f=a8e[tX+aB];ho=a7a[a8f];if(g[aB].ho!==ho){
g[aB].ho=ho;g[aB].a8L=Math.max(ho,g[aB].a8L);g[aB].a8D=true;}else if(!g[aB].a8M&&mH[a8f]%64===5){
g[aB].a8M=true;g[aB].a8D=true;}}}function a8Z(g,a8W){var aB,jZ,fP,ho,a64;var a7A=[];
loop:for(aB=0;aB<a8W;aB++){jZ=ad.gH(aD.ep,aB);for(fP=0;fP<g.length;fP++){if(g[fP].jZ===jZ){
a7A.push(g.splice(fP,1)[0]);continue loop;}}ho=ad.gI(aD.ep,aB);a64={jZ:jZ,ho:ho,a8L:ho,id:0,
a8D:true,a8M:false,canvas:null,zA:null};a8B(a64);a7A.push(a64);}return a7A;}function a8d(g,a8a){
var aB,jZ,fP,ho,a64;var a7A=[];var tX=aD.ep<<3;var mJ=bN.y.mJ;var a7a=bN.y.a7a;var a8e=bN.y.a8e;
loop:for(aB=0;aB<a8a;aB++){var a8f=a8e[tX+aB];jZ=mJ[a8f];for(fP=0;fP<g.length;fP++){
if(g[fP].jZ===jZ){a7A.push(g.splice(fP,1)[0]);continue loop;}}ho=a7a[a8f];a64={jZ:jZ,ho:ho,a8L:ho,
id:1,a8D:true,a8M:false,canvas:null,zA:null};a8B(a64);a7A.push(a64);}return a7A;}function a8B(a64){
a64.canvas=document.createElement(S[4]);bS.xT.font=a87;var i=a86;if(a64.jZ<aD.f2&&a64.id===0){
i+=Math.floor(bS.xT.measureText(ag.zU[a64.jZ]+S[129]).width);}i+=xu;if(a64.id===0){
i+=xu;}a64.canvas.width=i;a64.canvas.height=xu;a64.zA=a64.canvas.getContext("2d",{alpha:true});
a64.zA.font=a87;bA.qt.textBaseline(a64.zA,1);bA.qt.textAlign(a64.zA,1);
}function a8S(aB){return aU.a8g()?h.i-a61[aB].canvas.width-bc.gap:aU.fC;}function a8T(aB){
return Math.floor(2*bc.gap+(aU.a8g()?aW.j+bc.gap:0)+aU.j+aB*(1.3*xu));}this.vY=function(){
if(ag.mz[aD.ep]===0||(bA.gR.jn(aD.ep)&&!aD.hE)){return;}for(var aB=a61.length-1;aB>=0;aB--){
vZ.drawImage(a61[aB].canvas,a8S(aB),a8T(aB));}};}function cH(){var a6w;var kV;
var a8h;var a8i;var j;var a6j;var fontSize;var a8j;var a8k;var a8l;var a8m;var canvas,zA;var nC;
var a8n;this.dd=function(){nC=0;kV=4;a8h=a8i=0;a6w=[];a6j=new Array(2);fontSize=new Array(2);
a8j=new Array(2);a8j[0]=0.3;a8j[1]=0.7;a8k=new Array(4);canvas=document.createElement(S[4]);
a8n=bf.eT+2000;this.resize();};function vp(aB){return(aB===0?L(102):aB===1?L(103):aB===2?
L(104):L(105));}this.resize=function(){var aB,i;j=Math.floor((a0.a1.iE()?0.062:0.047)*h.iF);
fontSize[0]=Math.floor(a8j[0]*0.85*j);fontSize[1]=Math.floor(a8j[1]*0.85*j);
a6j[0]=bA.qt.sk(1,fontSize[0]);a6j[1]=bA.qt.sk(1,fontSize[1]);
for(aB=a8k.length-1;aB>=0;aB--){a8k[aB]=this.measureText(vp(aB)+S[129],a6j[0]);
}a8l=Math.floor(1+0.05*j);a8m=Math.floor(0.2*j);if(a6w.length>0){for(aB=a6w.length-1;aB>=0;aB--){
i=this.measureText(a6w[aB].qa+"00",a6j[1]);a6w[aB].width=i<a8k[aB]?a8k[aB]:i;
}a8o();}};this.eY=function(){if(kV===0){return;}a8p();};function a8p(){
if(kV===4){if(bf.eT>a8n){kV=0;if(aD.a11===1){aQ.a1O(bS.xN.xO[bS.el].name,3,1,9);}}}else{
a8q();}}this.measureText=function(qa,a6j){vZ.font=a6j;return Math.floor(vZ.measureText(qa).width);
};this.ec=function(a8r,aB){this.a1O(ag.zU[a8r],aB,1,aB===0?3:7);
};this.a1O=function(qa,a8s,a8t,nH){if(!qa.length){return;}var i=this.measureText(qa+"00",a6j[1]);
i=i<a8k[a8s]?a8k[a8s]:i;a6w.push({qa:qa,width:i,a8s:a8s,a8t:a8t,nH:nH});
if(kV===0){a8h=0;kV=1;nC=bf.eT;}};function a8q(){if(kV===1){if(a8h===0){
a8o();a8h=0.0001;}a8h+=(bf.eT-nC)*0.002;if(a8h>=1){a8i=0;kV=2;a8h=1;}bf.dk=true;}else if(kV===2){
a8i+=(bf.eT-nC)/1000;if(a8i>a6w[0].nH||(a8i>1&&a6w.length>1)){kV=3;}}else if(kV===3){
a8h-=(bf.eT-nC)*0.002;if(a8h<=0){a8h=0;a6w.shift();kV=a6w.length>0?1:0;}bf.dk=true;}nC=bf.eT;}
this.vY=function(){if(kV===0||a8h===0){return;}if(a8h<1){vZ.globalAlpha=a8h;a8u();vZ.globalAlpha=1;
return;}a8u();};function a8u(){if(!aD.hz){vZ.drawImage(canvas,bc.gap,a8v+2*bc.gap);
return;}if(a8v+4*bc.gap+j+bh.a8w()>aR.fE){vZ.drawImage(canvas,2*bc.gap+bh.a8w(),a8v+2*bc.gap);
return;}vZ.drawImage(canvas,bc.gap,a8v+3*bc.gap+bh.a8w());}function a8o(){
canvas.width=a6w[0].width+a8l;canvas.height=j+a8l;zA=canvas.getContext("2d",{alpha:true});
zA.clearRect(0,0,a6w[0].width+a8l,j+a8l);zA.translate(Math.floor(a8l/2),Math.floor(a8l/2));
zA.lineWidth=a8l;zA.fillStyle=a6w[0].a8t===1?bB.o5:bB.nx;
a8x();zA.fill();zA.strokeStyle=a6w[0].a8t===1?bB.nr:bB.o0;a8x();
zA.stroke();bA.qt.textAlign(zA,1);bA.qt.textBaseline(zA,1);zA.fillStyle=a6w[0].a8t===1?bB.nr:bB.o0;
zA.font=a6j[0];zA.fillText(vp(a6w[0].a8s),Math.floor(a6w[0].width/2),
Math.floor(0.72*a8j[0]*j));zA.font=a6j[1];zA.fillText(a6w[0].qa,Math.floor(a6w[0].width/2),
Math.floor((a8j[0]+0.48*a8j[1])*j));}function a8x(){zA.beginPath();zA.moveTo(a8m,0);
zA.lineTo(a6w[0].width-a8m,0);zA.lineTo(a6w[0].width,a8m);zA.lineTo(a6w[0].width,j-a8m);
zA.lineTo(a6w[0].width-a8m,j);zA.lineTo(a8m,j);zA.lineTo(0,j-a8m);zA.lineTo(0,a8m);
zA.closePath();}}function cq(){var j;var canvas;var zA;var a8y;var a8z;var a90;var a91;
var a8D;var a92;var a93;var a94;var a7g=false;this.hr=false;this.i=0;var a95;var a3t=new Array(2);
var a96=0;this.de=function(){for(var aB=0;aB<2;aB++){a3t[aB]=bA.canvas.zl(ab.get(3),8-aB,bB.pD);
a3t[aB]=bA.canvas.a3v(a3t[aB]);}};this.dd=function(){a94=-10000;
a96=0;a93=0;a95=-1;this.hr=false;a7g=false;a8D=false;a92=0;a8y=0;a8z=[0,0];a90=[1,1];a91=[];
this.resize();};this.resize=function(){j=aR.j;this.i=4*j;canvas=document.createElement(S[4]);
canvas.width=this.i;canvas.height=j;zA=canvas.getContext("2d",{alpha:true});
mm();};this.ml=function(){if(!a8D){return;}mm();};function mm(){
var i=aw.i;a8D=false;z9(zA,i,j);var lL=Math.floor(i/2);if(a8y===1){zA.fillStyle=bB.oK;
zA.fillRect(lL,0,lL,j);}else if(a8y===-1){zA.fillStyle=bB.oa;zA.fillRect(0,0,lL,j);}zB(zA,i,j,2);
var tK=Math.floor(0.25*j);tK=tK<2?2:tK;zA.fillStyle=bB.o6;var a7p=Math.floor((j-4)*a8z[1]/a90[1]);
if(a7p>0){zA.fillRect(2,j-2-a7p,tK,a7p);}a7p=Math.floor((j-4)*a8z[0]/a90[0]);
if(a7p>0){zA.fillRect(i-2-tK,j-2-a7p,tK,a7p);}var zC=Math.floor(j/8);
zC=zC<2?2:zC;zD(zA,Math.floor(0.4*j),0,j,zC,0.5,false);zD(zA,Math.floor(i-1.4*j),0,j,zC,0.5,true);
var ej=(1.1*j)/a3t[0].width;zA.imageSmoothingEnabled=true;
zA.setTransform(ej,0,0,ej,(i-ej*a3t[0].width)/2,-0.05*j);zA.drawImage(a3t[+a7g],0,0);
zA.setTransform(1,0,0,1,0,0);}this.hI=function(fC,fE){if(!this.hr){return false;
}if(fC<h.i-this.i-bc.gap){return false;}var nR=z6();if(fE<nR){return false;}if(aD.hE){return true;
}if(!this.hs(aD.ep)){return true;}aM.hF&&aM.a3A();b8.hV.ht((fC>(h.i-bc.gap-this.i/2))?1:0);
return true;};this.eY=function(){if(a93>0){a93--;if(a93===0){
a97();}return;}if(this.hr){a98();}else{if(a99()){return;}if(a95>=0){a9A();a9B();}}};function a9B(){
a95=-1;a7g=ah.a9C();aN.a5N(257);aN.a7f(a7g);aw.hr=true;a8D=true;a92=360;a9D();}function a99(){
var a9E=bf.kN();if(a9E%40!==14){return 0;}if(a96){if(a9E<a96){return 0;}if(a9E<a94+535){
return 0;}a96=a9E+1071;if(!bA.gR.a4S()){return 0;}a9B();return 1;}if(al.kw===1){a96=a9E+535;
return 0;}var a4p;if(aD.hz){a4p=bh.kx();}else{a4p=ag.gt[m1[0]];}if(a4p>=bL.fW(96*aD.kA,100)){
a96=a9E+535;}return 0;}function a9A(){aN.zT(250,L(106,[ag.zU[a95]]),673,a95,
bB.o0,bB.nx,-1,true);}function a9D(){var eU=0;for(var aB=al.kw-1;aB>=0;aB--){
if(!bA.gR.jn(al.l1[aB])){eU+=ag.gt[al.l1[aB]];}}if(a7g){a90[0]=Math.max(bL.fW(3*eU,4),1);
}else{if(aD.hz){var fX;if(aD.ki===9&&bg.kn[bh.kz()]===8){fX=80;}else{
fX=bL.fW(100*bh.kx(),aD.kA);fX=bL.iD(200-2*fX,40,100);}fX=bL.fW(fX*eU,100);a90[0]=Math.max(fX,1);
}else{if(aD.ki===8){a90[0]=Math.max(bL.fW(3*eU,4),1);}else{a90[0]=Math.max(bL.fW(3*eU,5),1);
}}}a90[1]=Math.max(eU-a90[0],1);}function a98(){a92--;if(a92===180&&3*a8z[0]<a90[0]){a97();return;
}if(a8z[0]>=a90[0]){if(a7g){bR.a0d.a0w();}else{bR.a0d.a10();}return;}if(a8z[1]>=a90[1]){a93=4;
return;}if(a92<=0){a97();}}function a97(){a94=bf.kN();a8D=true;a8y=0;a92=0;a91=[];aw.hr=false;
aN.a19(247);a8z[0]=a8z[1]=0;aN.a5N(673);}this.a12=function(){if(this.hr&&a8z[0]<a90[0]){
a97();}};this.qT=function(player,a9F){var a9G;if(a9F){a9G=L(107,[ag.zU[player]]);
}else{a9G=L(108,[ag.zU[player]]);}aN.zT(450,a9G,257,player,a9F?bB.oI:bB.oX,bB.nx,-1,true);
a91.push(player);a8D=true;var eU=aD.kk?Math.max(a90[0],a90[1]):ag.gt[player];
eU=Math.max(eU,1);if(a9F){a8z[0]+=eU;}else{a8z[1]+=eU;}if(player===aD.ep){
a8y=a9F?1:-1;}};function z6(){if(aR.a7L(aN.a7H())){return aR.fE-j-bc.gap;}if(bC.a7L(aN.a7K())){
return bC.z6()-j-bc.gap;}return h.j-j-bk.a68()*bc.gap;}this.vY=function(){if(!this.hr){
return;}var fE=z6();vZ.drawImage(canvas,h.i-this.i-bc.gap,fE);};this.hu=function(player){
if(a92!==0){return false;}if(!bA.gR.hG(1)){return false;}if(!bA.gR.hH(player)){
return false;}if(kB[player]>=10&&!bA.gR.a4l(player,9)){return false;}if(!a9H()){return false;
}return true;};function a9H(){if(aD.kk){return true;}var ed=bf.kN();if(ed<a94+100){return false;
}if(ed<1607){return false;}return true;}this.hs=function(gd){if(!bA.gR.hG(1)){return false;
}if(!bA.gR.hH(gd)){return false;}if(!this.hr){return false;}for(var aB=a91.length-1;aB>=0;aB--){
if(a91[aB]===gd){return false;}}return true;};this.hq=function(player){a95=player;};}function cI(){
var i,fC;var a9I;var canvas;var zA;var hr;var ih;var a5E;var a6j;var a8D;var a9J=11/12;
this.fE=0;this.hJ=false;this.dd=function(){hr=!aD.hT&&!aD.hE;a8D=false;ih=0.5;a5E=0;this.hJ=false;
this.resize();};this.resize=function(){if(a0.a1.iE()&&h.i<0.8*h.j){this.j=Math.floor(0.066*h.iF);
i=h.i-4*bc.gap-this.j;}else{i=Math.floor((a0.a1.iE()?0.65:0.389)*h.iF);i+=(12-i%12);
this.j=Math.floor(i/12);}a9I=Math.floor(3*this.j/2);a6j=bA.qt.sk(1,Math.floor(0.5*this.j));
canvas=document.createElement(S[4]);canvas.width=i;canvas.height=this.j;
zA=canvas.getContext("2d",{alpha:true});zA.font=a6j;bA.qt.textBaseline(zA,1);bA.qt.textAlign(zA,1);
this.a9K();a9L();};this.a9K=function(){if(a0.a1.iE()&&h.i<0.8*h.j){fC=this.j+3*bc.gap;
}else{fC=Math.floor((h.i-i)/2);}this.fE=h.j-this.j-bk.a68()*bc.gap;};this.ml=function(){
if(a8D){a8D=false;a9L();}};function a9M(){var fX;var a9N=130;if(ih<1/3){fX=Math.floor(3*ih*a9N);
return S[13]+fX+","+a9N+S[137];}else if(ih<2/3){fX=Math.floor(3*(ih-1/3)*a9N);
return S[13]+a9N+","+(a9N-fX)+S[137];}else{fX=Math.floor(3*(ih-2/3)*a9N);
return S[13]+a9N+",0,"+fX+",0.85)";}}function a9L(){var a8K=Math.floor(ih*(i-2*a9I));
var a9O=1+Math.floor(0.0625*aR.j);var a9P=1+Math.floor(0.3*aR.j);var a9Q=Math.floor(0.55*aR.j);
zA.clearRect(0,0,i,aR.j);zA.fillStyle=bB.nw;zA.fillRect(0,0,a9I,aR.j);
zA.fillRect(a9I+a8K,0,i-a9I-a8K,aR.j);zA.fillStyle=a9M();zA.fillRect(a9I,0,a8K,aR.j);
zA.fillStyle=bB.o0;zA.fillRect(0,0,i,1);zA.fillRect(0,aR.j-1,i,1);zA.fillRect(0,0,1,aR.j);
zA.fillRect(a9I,0,1,aR.j);zA.fillRect(a9I+a8K,0,1,aR.j);zA.fillRect(i-a9I,0,1,aR.j);
zA.fillRect(i-1,0,1,aR.j);zA.fillRect(Math.floor(0.25*aR.j)+a9P,Math.floor((aR.j-a9O)/2),
aR.j-2*a9P,a9O);zA.fillRect(Math.floor(i-1.25*aR.j)+a9P,Math.floor((aR.j-a9O)/2),
aR.j-2*a9P-a9P%2,a9O);zA.fillRect(Math.floor(i-1.25*aR.j)+Math.floor((aR.j-a9O)/2),a9P,
a9O,aR.j-2*a9P-a9P%2);a5E=bA.gR.ig(aD.ep,aR.hZ());
zA.fillText(bA.rs.a0I(a5E)+" ("+bA.rs.a57(100*ih,+(ih<0.1))+")",Math.floor(0.5*i),a9Q);
}this.hr=function(){return!(!hr||aM.hF&&fC<Math.floor(bc.gap+5.5*this.j));};this.a7L=function(a9R){
if(this.hr()){return fC+i>h.i-a9R-bc.gap;}return false;};this.a5L=function(){hr=!aD.hE;
};this.a97=function(){hr=false;};this.hZ=function(){return bL.iD(Math.floor(ih*1024+0.5)-1,0,1023);
};this.a33=function(lf,lg){return this.hr()&&lf>fC&&lf<fC+i&&lg>this.fE;
};function a9S(lf,lg){return lf>fC&&lf<fC+a9I&&lg>aR.fE;}function a9T(lf,lg){
return lf>fC+i-a9I&&lf<fC+i&&lg>aR.fE;}this.hI=function(lf,lg){if(!this.hr()){return false;
}if(!aR.a33(lf,lg)){return false;}aS.nV=false;if(a9U(this,lf,lg)){bf.dk=true;}return true;
};function a9U(sV,lf,lg){if(a9S(lf,lg)){return a9V(a9J);}if(a9T(lf,lg)){return a9V(1/a9J);
}sV.hJ=true;return a9W(lf);}this.a36=function(nc){if(aD.a11===0||!this.hr()){return;}if(a9V(nc)){
bf.dk=true;}};function a9V(a3S){if(a3S>1&&ih===1){return false;}if(a3S>1&&a3S*ih-ih<1/1024){
a3S=(ih+1/1024)/ih;}else if(a3S<1&&ih-a3S*ih<1/1024){a3S=(ih-1/1024)/ih;}ih=bL.iD(ih*a3S,1/1024,1);
a9L();return true;}function a9W(lf){var eU=ih;ih=bL.iD((lf-fC-a9I)/(i-2*a9I),1/1024,1);if(eU!==ih){
a9L();return true;}return false;}this.a2c=function(deltaY){var nc;if(deltaY===0||!this.hr()){
return false;}if(deltaY>0){nc=400/(400+deltaY);nc=nc<a9J?a9J:nc;}else{nc=(400-deltaY)/400;
nc=nc>1/a9J?1/a9J:nc;}return a9V(nc);};this.a2Z=function(lf){if(this.hJ){return a9W(lf);
}return false;};this.a2z=function(){this.hJ=false;};this.eY=function(){if(!this.hr()){
return;}if(a5E!==bA.gR.ig(aD.ep,this.hZ())){a8D=true;}};this.vY=function(){if(!this.hr()){return;
}vZ.drawImage(canvas,fC,this.fE);};}function d0(){var canvas;var zA;var a9X;var font;var a9Y=0;
var a9Z=false;var a9a=[10,5,3,2,1.5,1,0.75,0.5,0.25];var a9b=5;this.a5s=false;this.dd=function(){
if(!aD.hE){return;}a9b=5;this.a5s=false;a9Z=false;a9X=new rU([0.3,0.3/6],[0.5,1]);
this.resize();};this.a9c=function(){return a9a[a9b];};this.z6=function(){
return a9X.fE;};this.a7L=function(a9R){if(aD.hE){return a9X.fC+a9X.i>h.i-a9R-bc.gap;
}return false;};this.resize=function(){if(!aD.hE){return;}a9X.resize();a9X.fE-=(bk.a68()-1)*bc.gap;
font=bA.qt.sk(0,0.3*a9X.j);canvas=document.createElement(S[4]);canvas.width=Math.floor(a9X.i);
canvas.height=Math.floor(a9X.j);zA=canvas.getContext("2d",{alpha:true});
zA.font=font;bA.qt.textAlign(zA,1);bA.qt.textBaseline(zA,1);
mm(this);};this.a39=function(a9d){if(aD.a11===0||t.hr()){return;}if(a9d===aD.nT){return;}aD.nT=a9d;
bh.resize();bf.dk=true;if(aD.hE){a9Y=bf.eT+2000;mm(this);}};this.hI=function(fC,fE){if(!aD.hE){
return false;}if(fC<a9X.fC||fE<a9X.fE||fC>a9X.fC+a9X.i){return a9Z&&a9e(this,fC,fE);}fC-=a9X.fC;
if(fC<0.3*a9X.i){a9Z=false;this.a39(!aD.nT);return true;}else if(fC<0.7*a9X.i){a9Z=!a9Z;bf.dk=true;
return true;}this.a3B(false);return true;};this.a3B=function(a9f){if(aD.a11===2){this.a39(false);
t.u(3);return;}a9Z=false;this.a5s=!this.a5s;if(this.a5s){if(aM.hF){aM.a3A();}a0.a1.setState(1);
}else{!a9f&&aM.a6p();}bf.dk=true;mm(this);};this.a9g=function(){this.a5s=false;aM.a6p();
bf.dk=true;mm(this);};this.a2s=function(fC,fE){if(!aD.nT){return false;}if(aM.hI(fC,fE)>=0){
return true;}if(!aD.hE){aS.hI(fC,fE);return true;}if(bf.eT>a9Y||!this.hI(fC,fE)){
aS.hI(fC,fE);}bf.dk=true;a9Y=bf.eT+2000;return true;};this.eY=function(){
if(aD.hE&&aD.nT&&bf.eT>a9Y-1000&&bf.eT<a9Y){bf.dk=true;}};this.a1A=function(){if(!aD.hE){
return;}this.a5s=false;bf.dk=true;mm(this);};this.vY=function(){if(!aD.hE){return;}if(aD.nT){
if(bf.eT>a9Y){return;}if(bf.eT>a9Y-1000){vZ.globalAlpha=a9h(0,(1000-(bf.eT-(a9Y-1000)))/1000,1);
a9i();vZ.globalAlpha=1;return;}}a9i();};function a9i(){if(a9Z){a9j();
}vZ.drawImage(canvas,Math.floor(a9X.fC),Math.floor(a9X.fE));}function mm(sV){a9k();a9l();a9m();
!sV.a5s?a9n():a9o();a9p();}function a9k(){zA.clearRect(0,0,Math.floor(a9X.i),Math.floor(a9X.j));
zA.fillStyle=bB.nw;zA.fillRect(0,0,Math.floor(a9X.i),Math.floor(a9X.j));
if(aD.nT){zA.fillStyle=bB.oP;zA.fillRect(0,0,Math.floor(0.3*a9X.i),Math.floor(a9X.j));
}}function a9l(){zA.fillStyle=bB.o0;zA.fillText("Hide UI",0.15*a9X.i,0.5*a9X.j);
zA.fillRect(Math.floor(0.3*a9X.i-0.5),0,2,Math.floor(a9X.j));}function a9m(){
var fC=0.5*a9X.i;zA.fillText("Replay Speed",fC,0.31*a9X.j);zA.fillText(a9q(a9b),fC,0.69*a9X.j);
zA.fillRect(Math.floor(0.7*a9X.i-0.5),0,2,Math.floor(a9X.j));}function a9n(){
var i=Math.floor(0.46*a9X.j);var j=Math.floor(0.23*a9X.j);var fC=Math.floor(0.85*a9X.i-0.5*i+i/12);
var fE=Math.floor(0.5*a9X.j-j);zA.beginPath();zA.moveTo(fC,fE);zA.lineTo(fC+i,fE+j);
zA.lineTo(fC,fE+(j<<1));zA.fill();}function a9o(){var tK=Math.floor(0.02*a9X.i);
var tL=Math.floor(0.025*a9X.i);var nQ=Math.floor(0.85*a9X.i-tK-0.5*tL);
var nR=Math.floor(0.25*a9X.j);var a9Q=Math.floor(a9X.j)-2*nR;zA.fillRect(nQ,nR,tK,a9Q);
zA.fillRect(nQ+tK+tL,nR,tK,a9Q);}function a9p(){zA.fillRect(0,0,Math.floor(a9X.i),2);
zA.fillRect(0,0,2,Math.floor(a9X.j));zA.fillRect(0,Math.floor(a9X.j)-2,Math.floor(a9X.i),2);
zA.fillRect(Math.floor(a9X.i-2),0,2,Math.floor(a9X.j));}function a9j(){var aB;var f5=a9a.length;
var a9Q=Math.floor(0.5*a9X.j);var j=f5*a9Q;var fC=Math.floor(Math.floor(a9X.fC)+0.3*a9X.i-0.5);
var fE=Math.floor(Math.floor(a9X.fE)-j);var i=Math.floor(0.4*a9X.i+2.5);
vZ.fillStyle=bB.nw;vZ.fillRect(fC,fE,i,j);vZ.fillStyle=bB.oP;vZ.fillRect(fC,fE+a9b*a9Q,i,a9Q);
vZ.fillStyle=bB.o0;vZ.fillRect(fC,fE,2,j);vZ.fillRect(fC,fE,i,2);vZ.fillRect(fC+i-2,fE,2,j);
for(aB=1;aB<f5;aB++){vZ.fillRect(fC,fE+aB*a9Q,i,2);}vZ.fillStyle=bB.o0;bA.qt.textAlign(vZ,1);
bA.qt.textBaseline(vZ,1);vZ.font=bA.qt.sk(0,0.6*a9Q);fC=fC+0.5*i;for(aB=0;aB<f5;aB++){
vZ.fillText(a9q(aB),fC,fE+(aB+0.6)*a9Q);}}function a9e(sV,fC,fE){var f5=a9a.length;
var a9Q=Math.floor(0.5*a9X.j);var j=f5*a9Q;var nQ=Math.floor(Math.floor(a9X.fC)+0.3*a9X.i-0.5);
var nR=Math.floor(Math.floor(a9X.fE)-j);var i=Math.floor(0.4*a9X.i+2.5);a9Z=false;
bf.dk=true;if(fC<nQ||fC>nQ+i||fE<nR){return true;}a9b=a9h(0,Math.floor((fE-nR)/a9Q),f5-1);
mm(sV);return true;}function a9q(aB){return aB===5?"Normal":(""+a9a[aB]);
}}var iG;var ii;var ij;function cJ(){var a9r;var a9s;var i;var fC,fE;
var a9t;var a9u;this.dd=function(){a9r=new Array(2);a9s=new Array(2);this.nV=false;ii=0;ij=0;a9t=0;
a9u=0;iG=1;this.resize();};this.resize=function(){i=Math.floor((a0.a1.iE()?0.072:0.0502)*h.iF);
i=i<8?8:i;for(var aB=1;aB>=0;aB--){a9r[aB]=document.createElement(S[4]);
a9r[aB].width=i;a9r[aB].height=i;a9s[aB]=a9r[aB].getContext("2d",{alpha:true});}this.a9K();
a9v();};function a9w(a9x,a7M){return(Math.pow((a9x-(fC+i/2)),2)+Math.pow((a7M-(fE+i/2)),2)<i*i/4||
Math.pow((a9x-(fC+i/2)),2)+Math.pow((a7M-(fE+2*i)),2)<i*i/4);}this.z5=function(){return-ii/iG;};
this.z6=function(){return-ij/iG;};this.nf=function(a9y,iM){ii=iG*a9y-iM;};this.ng=function(a9z,iN){
ij=iG*a9z-iN;};this.hI=function(a9x,a7M){if(!aD.nT&&a9w(a9x,a7M)&&!bj.eQ.data[8].value){
if(a7M<fE+1.25*i){return this.a2c(Math.floor(h.i/2),Math.floor(h.j/2),-200);
}else{return this.a2c(Math.floor(h.i/2),Math.floor(h.j/2),200);
}}else{if(aH.ni()){this.nV=true;a9t=a9x;a9u=a7M;}}return false;
};this.a2Z=function(a9x,a7M){if(!aH.ni()){return true;}var aA0=ii;var aA1=ij;var iP=a9t-a9x;
var iS=a9u-a7M;ii+=iP;ij+=iS;af.a2Z(iP,iS);this.aA2();a9t=a9x;a9u=a7M;return(aA0!==ii||aA1!==ij);
};this.a2c=function(lf,lg,deltaY){var nc;if(!aH.ni()){return true;}if(deltaY>0){
nc=500/(500+deltaY);nc=nc<0.5?0.5:nc;}else if(deltaY<0){nc=(500-deltaY)/500;nc=nc>2?2:nc;}else{
return false;}this.aA3(lf,lg,nc);bf.dk=true;return true;};this.aA3=function(fC,fE,ej){ej=aA4(ej);
af.zoom(ej,fC,fE);aA5(ej,fC,fE);};this.aA2=function(){var aA6=h.i/16;var aA7=0;var aA8=h.j/16;
var aA9=0;if(ii< -h.i+aA6){aA7=-h.i+aA6-ii;}if(ii>iG*bS.fG-aA6){aA7=iG*bS.fG-aA6-ii;}
if(ij< -h.j+aA8){aA9=-h.j+aA8-ij;}if(ij>iG*bS.fH-aA8){aA9=iG*bS.fH-aA8-ij;}ii+=aA7;ij+=aA9;ba.nh();
af.aAA(aA7,aA9);};function aA4(a3S){a3S=a3S*iG>1024?1024/iG:a3S;a3S=a3S*iG<0.125?0.125/iG:a3S;
return a3S;}function aA5(a3S,lf,lg){iG*=a3S;ii=(ii+lf)*a3S-lf;ij=(ij+lg)*a3S-lg;aS.aA2();
}function a9v(){var aAB=Math.floor(1+i/20);for(var aB=1;aB>=0;aB--){a9s[aB].clearRect(0,0,i,i);
a9s[aB].fillStyle=bB.nt;a9s[aB].beginPath();a9s[aB].arc(i/2,i/2,i/2-aAB,0,2*Math.PI);
a9s[aB].fill();a9s[aB].lineWidth=aAB;a9s[aB].fillStyle=bB.o0;a9s[aB].strokeStyle=bB.o0;
a9s[aB].beginPath();a9s[aB].arc(i/2,i/2,i/2-aAB,0,2*Math.PI);a9s[aB].stroke();
zD(a9s[aB],0,0,i,aAB,0.3,aB===0);}}this.a9K=function(){fC=h.i-i-bc.gap;fE=Math.floor(h.j/2-1.25*i);
};this.vY=function(){if(bj.eQ.data[8].value){return;}vZ.drawImage(a9r[0],fC,fE);
vZ.drawImage(a9r[1],fC,Math.floor(fE+3*i/2));};}function cK(){var g;var aAC;var aAD;
var aAE;var gap;var aAF;var aAG;var aAH;var aAI;var aAJ;var a6j;var aAK;var hA;var aAL;var a8K;
var aAM;var aAN;this.aAO=false;this.dd=function(){aAM=-1;aAN=-1;aAL=1;aAI=-1;this.aAP=false;
hA=0;aAK=new Date();aAC=0;gap=0.3;aAQ();g=[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];this.resize();
};this.resize=function(){aAD=Math.floor(0.15*h.j);aAJ=Math.floor((a0.a1.iE()?0.018:0.0137)*h.iF);
aAJ=aAJ<2?2:aAJ;a6j=bA.qt.sk(1,aAJ);aAR();};function aAQ(){
}this.aAS=function(aAT){var aB;this.aAO=true;for(aB=0;aB<aAT.length;aB++){g.unshift(aAT[aB]);
}aAR();bf.dk=true;};function aAR(){aAE=Math.floor((a0.a1.iE()?0.07:0.035)*0.2*h.iF);
aAE=a7J(a0.a1.iE()?3:1,aAE);var aAU=h.i/(g.length+gap);
aAE=aAU>aAE?aAU:aAE;a8K=Math.floor((1-gap)*aAE);aAC=0;aAV();}this.aAW=function(){
aAV();};function aAV(){aAC=aAC< -20?-20:aAC;aAC=aAC>(g.length-15)*aAE?(g.length-15)*aAE:aAC;
aAG=Math.floor(aAC/aAE);aAH=aAG+Math.floor(h.i/aAE);
aAH=aAH>g.length-1?g.length-1:aAH;aAG=aAH<aAG?aAH:aAG;aAG=aAG<0?0:aAG;aAX();
}function aAX(){var lL=aAH;aAF=aAD/g[lL];for(var aB=aAH-1;aB>=aAG;aB--){if(g[aB]>g[lL]){lL=aB;
aAF=aAD/(Math.pow(g[aB],aAL));}}}function aAY(fC){var eU=Math.floor((aAC+h.i-fC-gap*aAE)/aAE);
eU=eU< -1?-1:eU===-1?0:eU>g.length-1?-1:eU;if(eU!==aAI){aAI=eU;if(aAM===-1&&aAI===0&&aT.aAO){
aAM=setInterval(aAZ,100);}return true;}return false;}this.a2Z=function(fC,fE){
if(fE>h.j-0.6*aAD){if(this.aAP){if(fC!==hA){aAC+=fC-hA;hA=fC;aAV();aAY(fC);this.aAP=aAI!==-1;
bf.dk=true;}return;}if(aAY(fC)){bf.dk=true;return;}}else{this.ru();}};this.ru=function(){
if(aAI!==-1){this.aAP=false;aAI=-1;bf.dk=true;}};this.a2c=function(fC,deltaY){if(aAI!==-1){
aAC+=Math.floor(deltaY);aAV();aAY(fC);bf.dk=true;}};this.hI=function(fC,fE){this.a2Z(fC,fE);
if(aAI!==-1){hA=fC;this.aAP=true;}};this.a2y=function(){if(aAI!==-1){this.aAP=false;}};
this.vY=function(){vZ.fillStyle=bB.o3;for(var aB=aAH;aB>=aAG;aB--){aAa(aB);}if(this.aAO&&aAG===0){
vZ.fillStyle=bB.oa;aAa(0);}if(aAI!==-1){vZ.fillStyle=bB.o2;aAa(aAI);}aAb();};function aAa(aB){
var aAc=Math.floor(aAF*(Math.pow(g[aB],aAL)));vZ.fillRect(aAC+h.i-(aB+1)*aAE,h.j-aAc,a8K,aAc);
}function aAb(){if(aAI===-1){return;}vZ.font=a6j;bA.qt.textBaseline(vZ,2);
var eU=new Date();eU.setTime(aAK.getTime()-aAI*1000*60*60*24);var month="month";var aAd="day";
if(typeof Intl!==S[27]){month=new Intl.DateTimeFormat(S[94],{month:S[86]}).format(eU);
aAd=new Intl.DateTimeFormat(S[94],{weekday:S[86]}).format(eU);
}var aAe=aAd+", "+eU.getUTCDate()+" "+month+" "+eU.getFullYear();
var aAf;aAf=g[aAI]===1?L(109):L(110);aAf=bA.rs.a0I(g[aAI])+" "+aAf;
var tK=Math.floor(vZ.measureText(aAe).width);var tL=Math.floor(vZ.measureText(aAf).width);
var aAg=Math.floor(0.5*(tK+aAJ));var aAh=aAC+h.i-(aAI+1)*aAE;
aAh=aAh<aAg?aAg:aAh>h.i-aAg?h.i-aAg:aAh;var nR=h.j-Math.floor(aAF*(Math.pow(g[aAI],aAL)));
var aAi=Math.floor(1.1*aAJ);var aAj=nR>h.j-aAi?h.j-aAi:nR;vZ.fillStyle=bB.nx;
vZ.fillRect(h.i-tL-aAJ,aAj-aAi,tL+aAJ,aAi);vZ.fillRect(aAh-aAg,h.j-aAi,tK+aAJ,aAi);
vZ.fillStyle=bB.o0;bA.qt.textAlign(vZ,2);vZ.fillText(aAf,Math.floor(h.i-0.5*aAJ),aAj);
bA.qt.textAlign(vZ,1);vZ.fillText(aAe,aAh,h.j);vZ.strokeStyle=bB.o4;
vZ.lineWidth=1;vZ.beginPath();vZ.moveTo(0,nR);vZ.lineTo(h.i,nR);vZ.closePath();vZ.stroke();
}function aAZ(){if(aa.a2D()===8){aAI=-1;}if(aAI!==0){aAN=(new Date()).getTime();clearInterval(aAM);
aAM=-1;return;}var gd=g[1]/(24*60*60*10);if(aAN!==-1){var eU=(new Date()).getTime();
gd+=(eU-aAN)*g[1]/(24*60*60*1000);aAN=-1;}if(gd>0){g[0]+=Math.floor(gd);
bf.dk=true;}}}function cL(){this.fC=0;this.j=0;var a6j;var i,fE,aAk;var aAl;var aAm;var canvas;
var zA;var a8D;var a4Z;var aAn;var aAo;var aAp;var aAq;this.dd=function(){aAm=aD.a5T;aAo=S[80];
aAp="rgba(150,0,0,0.8)";aAn=true;a8D=true;a4Z=ag.h7[aD.ep];this.resize();};this.resize=function(){
i=Math.floor((a0.a1.iE()?0.305:0.24)*h.iF);this.j=Math.floor(0.5+0.13*i);i=Math.floor(this.j*6);
a6j=bA.qt.sk(1,Math.floor(0.8*this.j));aAl=bA.qt.sk(1,Math.floor(0.45*this.j));
aAq=Math.floor(0.5*this.j);bS.xT.font=a6j;fE=bc.gap;aAk=Math.floor(1+0.13*this.j);
canvas=document.createElement(S[4]);canvas.width=i;canvas.height=this.j;
zA=canvas.getContext("2d",{alpha:true});bA.qt.textBaseline(zA,1);bA.qt.textAlign(zA,1);this.aAr();
};this.a8g=function(){return a0.a1.iE()&&h.i<1.2*h.j;};this.a9K=function(){if(this.a8g()){
this.fC=h.i-i-bc.gap;}else{this.fC=Math.floor(aV.aAs()+(h.i-aV.aAs()-aW.i-i)/2-0.5*bc.gap);
}};this.ml=function(){if(a8D){a8D=false;this.aAr();}};this.aAr=function(){zA.font=a6j;
zA.clearRect(0,0,i,this.j);zA.fillStyle=aAn?aAo:aAp;zA.fillRect(0,0,i,this.j);zA.fillStyle=bB.o2;
var ed=this.aAt();this.aAu();zA.fillStyle=ag.h7[aD.ep]>=ae.k6(aD.ep)?bB.oX:bB.o0;
var aAv=bA.rs.a0I(a4Z);zA.fillText(aAv,Math.floor(i/2),aAq);var tK=zA.measureText(aAv).width;
zA.font=aAl;zA.fillStyle=ed===9?bB.p7:bB.o0;var aAw=ae.aAx;var aAy="+"+aAw;
var tL=zA.measureText(aAy).width;var aAz=Math.floor(this.j/12);var nQ=0.5*(i+tK)+aAz;
if(nQ+tL+aAk<=i){zA.fillText(aAy,Math.floor(nQ+0.5*tL),Math.floor(0.3*this.j));
}else if(aAw>=1000){aAy="+"+Math.floor(aAw/1000)+"K";tL=zA.measureText(aAy).width;
if(nQ+tL+aAk<=i){zA.fillText(aAy,Math.floor(nQ+0.5*tL),Math.floor(0.3*this.j));
}}zA.fillStyle=bB.o0;zA.fillRect(0,0,i,1);zA.fillRect(0,0,1,this.j);
zA.fillRect(0,this.j-1,i,1);zA.fillRect(i-1,0,1,this.j);};this.aAt=function(){
var ed=bf.kN()%100;ed-=ed%10;ed=9-bL.fW(ed,10);var y8=Math.floor(ed*(this.j-aAk)/9);
zA.fillRect(0,y8,aAk,this.j-y8);zA.fillRect(i-aAk,y8,aAk,this.j-y8);return ed;
};this.aAu=function(){zA.fillRect(aAk,this.j-aAk,Math.floor((i-2*aAk)*ag.h7[aD.ep]/aAm),aAk);
};this.eY=function(){var gd=aD.ep;if(!bA.gR.hH(gd)){return;}var fP=ag.h7[gd]-ag.a4Y[gd];
if(a4Z!==fP){aAm=a7J(fP,aAm);aAn=fP>a4Z&&fP>=10;a4Z=fP;a8D=true;}else if(bf.kN()%10===9){
a8D=true;}};this.vY=function(){if(ag.mz[aD.ep]===0||aD.hT||ag.a4P[aD.ep]===2){
return;}vZ.drawImage(canvas,this.fC,fE);};}var a8v;var m1;var kB;function cM(){var aB0;
var aB1;var aB2;var aB3;var aB4;var aB5;var aB6;var aB7;var aB8;var aB9,aBA;var aBB;var aBC;
var aBD,aBE,aBF;var aBG;var aBH;var aBI;var aBJ;var aBK;var aBL;var position;var aBM;var aBN;
var aBO;var aBP;var aBQ;var aBR=1;var aBS=1;var aBT="";this.dd=function(){var aB;t.y.t5[0]=0;aBM=0;
aBN=false;aBO=0;aBP=0;aBQ=false;aBL=-1;aB4=a0.a1.iE()?6:10;position=0;aBS=bj.eQ.data[11].value;
aBS=aBS===0?10:aBS===1?5:1;aBK=false;aBI=new Uint16Array(aB4+1);aBJ=new Uint32Array(aB4+1);
aB8=aD.f2;m1=new Uint16Array(aB8);kB=new Uint16Array(aB8);for(aB=aB8-1;aB>=0;aB--){m1[aB]=aB;
kB[aB]=aB;}this.resize(true);aBG=new Uint16Array(aD.f2);var aBU=Math.floor(aB0-aBE-aBD-aB7);
aBH=new Array(aD.f2);aB6.font=aB3;for(aB=aD.f2-1;aB>=0;aB--){aBH[aB]=(aB+1)+".";
ag.zU[aB]=bA.zA.a47(ag.a1h[aB],aB3,aBU);aBG[aB]=Math.floor(aB6.measureText(ag.zU[aB]).width);
}aBV();};this.resize=function(dd){if(a0.a1.iE()){
aB0=Math.floor(0.335*h.iF);a8v=Math.floor((aB4*aB0)/8);}else{aB0=Math.floor(0.27*h.iF);
a8v=Math.floor((aB4*aB0)/10);}aB0=Math.floor(0.97*aB0);aB5=document.createElement(S[4]);
aB5.width=aB0;aB5.height=a8v;aB6=aB5.getContext("2d",{alpha:true});
aB9=0.025*aB0;aB2=0.160*aB0;aBA=0.000*aB0;aBB=Math.floor(0.45*aB9+aB2);aBC=(a8v-aB2-2*aB9-aBA)/aB4;
aB1=bA.qt.sk(1,Math.floor(0.55*aB2));aBR=Math.floor((a0.a1.iE()?0.67:0.72)*aBC);
aB3=bA.qt.sk(0,aBR);aB6.font=aB3;aBD=Math.floor(0.04*aB0);
aBE=Math.floor((a0.a1.iE()?0.195:0.18)*aB0);aB7=Math.floor(aB6.measureText("00920600").width);
aB6.font=aB1;aBF=aB0-aBD;if(!dd){aB6.font=aB3;for(var aB=aD.f2-1;aB>=0;aB--){
aBG[aB]=Math.floor(aB6.measureText(ag.zU[aB]).width);}aBV();}aBT=bA.zA.a47(L(111),aB1,0.96*aB0);
};this.aAs=function(){return aB0;};this.ml=function(bu,aBW){if(aBW||(aBK&&(bu||bf.kN()%aBS===0))){
aBK=false;aBV();}};function aBV(){var fO;aB6.clearRect(0,0,aB0,a8v);aB6.fillStyle=aBQ?bB.ov:bB.or;
aB6.fillRect(0,0,aB0,aBB);aB6.fillStyle=bB.nw;aB6.fillRect(0,aBB,aB0,a8v-aBB);
if(kB[aD.ep]>=position){aBX(kB[aD.ep]-position,bB.oP);}if(kB[aD.ep]!==0&&position===0){
aBX(0,bB.oy);}if(aBL!==-1){aBX(aBL,bB.o1);}aB6.fillStyle=bB.o0;aB6.fillRect(0,aBB,aB0,1);
aB6.fillRect(0,0,aB0,bc.zz);aB6.fillRect(0,0,bc.zz,a8v);aB6.fillRect(aB0-bc.zz,0,bc.zz,a8v);
aB6.fillRect(0,a8v-bc.zz,aB0,bc.zz);aB6.font=aB1;bA.qt.textBaseline(aB6,1);bA.qt.textAlign(aB6,1);
aB6.fillText(aBT,Math.floor(aB0/2),Math.floor(aB9+aB2/2));var ge=kB[aD.ep]<position+aB4-1?1:2;
aB6.font=aB3;bA.qt.textAlign(aB6,0);for(fO=aB4-ge;fO>=0;fO--){aBY(m1[fO+position]);
aBZ(fO,fO+position,m1[fO+position]);}bA.qt.textAlign(aB6,2);for(fO=aB4-ge;fO>=0;fO--){
aBY(m1[fO+position]);aBa(fO,m1[fO+position]);}if(ge===2){aBY(aD.ep);bA.qt.textAlign(aB6,0);
aBZ(aB4-1,kB[aD.ep],aD.ep);bA.qt.textAlign(aB6,2);aBa(aB4-1,aD.ep);}if(position===0){
aBb();}}function aBY(player){if(aD.hz){aB6.fillStyle=bg.aBc[bg.aBd[player]];}}function aBX(aB,aBe){
aB6.fillStyle=aBe;aB=aB>aB4-1?aB4-1:aB;var aBf=Math.floor((aB===aB4-1?2:aB===0?1.15:1)*aBC);
aBf=aB===aB4-2?Math.floor(aBB+9.15*aBC)-Math.floor(aBB+8.15*aBC):aBf;
aB6.fillRect(0,Math.floor(aBB+(aB+(aB===0?0:0.15))*aBC),
aB0,aBf);}function aBb(){var a6o=0.7*aBC/ab.get(4).height;
aB6.setTransform(a6o,0,0,a6o,Math.floor(aBD+0.58*aBC+0.5*a6o*ab.get(4).width),Math.floor(aB9+aB2+0.4*aBC));
aB6.imageSmoothingEnabled=true;
aB6.drawImage(ab.get(4),-Math.floor(ab.get(4).width/2),-Math.floor(ab.get(4).height/2));
aB6.setTransform(1,0,0,1,0,0);
}function aBZ(wd,a4n,aB){aB6.fillText(aBH[a4n],aBD,Math.floor(aB9+aB2+(wd+0.5)*aBC));
if(ag.a4P[aB]===1){aB6.font=S[90]+aB3;}var fE=Math.floor(aB9+aB2+(wd+0.5)*aBC);
aB6.fillText(ag.zU[aB],aBE,fE);if(ag.a4P[aB]!==0){aB6.font=aB3;
}if(aB<aD.kQ&&ag.a4P[aB]!==2){return;}aB6.fillRect(aBE,fE+0.35*aBR,aBG[aB],Math.max(1,0.1*aBR));
}function aBa(wd,aB){aB6.fillText(ag.gt[aB],aBF,
Math.floor(aB9+aB2+(wd+0.5)*aBC));}this.eY=function(){aBg();aBh();aBi();aBj();};function aBj(){
for(var aB=aB4-1;aB>=0;aB--){aBI[aB]=m1[aB];aBJ[aB]=ag.gt[m1[aB]];}aBI[aB4]=kB[aD.ep];
aBJ[aB4]=ag.gt[aD.ep];}function aBi(){var eU=aBK;aBK=true;var ge=kB[aD.ep]>=aB4-1?aB4-2:aB4-1;
for(var aB=ge;aB>=0;aB--){if(aBI[aB]!==m1[aB]||aBJ[aB]!==ag.gt[m1[aB]]){return true;
}}if(ge===aB4-2&&(aBI[aB4]!==kB[aD.ep]||aBJ[aB4]!==ag.gt[aD.ep])){return true;}aBK=eU;return eU;
}function aBh(){var aBk;var ni=aB8-1;for(var fO=0;fO<ni;fO++){if(ag.gt[m1[fO]]<ag.gt[m1[fO+1]]){
aBk=m1[fO];m1[fO]=m1[fO+1];m1[fO+1]=aBk;kB[m1[fO]]=fO;kB[m1[fO+1]]=fO+1;
}}}function aBg(){for(var fO=aB8-1;fO>=0;fO--){if(ag.mz[m1[fO]]===0){aBl(fO);}}}function aBl(fO){
var aBm=m1[fO];aB8--;for(var aB=fO;aB<aB8;aB++){m1[aB]=m1[aB+1];kB[m1[aB]]=aB;}m1[aB8]=aBm;
kB[m1[aB8]]=aB8;}this.hI=function(fC,fE){if(zy(fC,fE)){var aBn=aBo(fE);if(aBn>=0){aBM=bf.eT;
aBN=true;aBO=aBP=aBn;if(bJ.a3C()){aBn=a9h(-1,aBP,aB4);aBn=(aBn===aB4)?-1:aBn;if(aBL!==aBn){aBL=aBn;
aBV();bf.dk=true;}}return true;}if(aBQ){aBQ=false;aBV();bf.dk=true;}t.u(10,0,new aBp({aBq:1}));
return true;}return false;};this.a2Z=function(fC,fE){var eU;var aBn=aBo(fE);
var aBr=zy(fC,fE);var aBs=!!(aBn<0&&aBr&&!bJ.a3C());if(aBN){eU=position;position+=aBO-aBn;
position=a9h(0,position,aD.f2-aB4);if(position!==eU){aBQ=aBs;aBO=aBn;aBn=a9h(-1,aBn,aB4);
aBn=(aBn===aB4||!aBr)?-1:aBn;aBL=aBn;aBV();bf.dk=true;}else if(aBQ!==aBs){aBQ=aBs;aBV();bf.dk=true;
}return true;}aBn=a9h(-1,aBn,aB4);aBn=(aBn===aB4||!aBr||bJ.a3C())?-1:aBn;if(aBL!==aBn||aBQ!==aBs){
aBL=aBn;aBQ=aBs;aBV();bf.dk=true;return true;}return false;};this.a2y=function(fC,fE){
if(!aBN){return false;}aBN=false;var aBn=aBo(fE);if(bJ.a3C()&&aBL!==-1){aBL=-1;aBV();
bf.dk=true;}if(bf.eT-aBM<350&&aBP===aBn){aBn=a9h(-1,aBn,aB4);aBn=(aBn===aB4||!zy(fC,fE))?-1:aBn;
if(aBn!==-1){var player=m1[aBn+position];if(aBn===aB4-1&&kB[aD.ep]>=position+aB4-1){player=aD.ep;
}if(ag.mz[player]!==0){aH.nL(player,800,false,0);}}}return true;};this.a2c=function(fC,fE,deltaY){
var aBn;if(aBN||aD.nT){return false;}var aBt=Math.max(Math.floor(Math.abs(deltaY)/40),1);
if(zy(fC,fE)){aBn=aBo(fE);aBn=a9h(-1,aBn,aB4);aBn=(aBn===aB4||bJ.a3C())?-1:aBn;
if(deltaY>0){if(position<aD.f2-aB4){position+=Math.min(aD.f2-aB4-position,aBt);
aBL=aBn;aBV();bf.dk=true;}}else if(position>0){position-=Math.min(position,aBt);
aBL=aBn;aBV();bf.dk=true;}return true;}return false;};function aBo(fE){fE-=bc.gap+aBB;
if(fE<0){return Math.floor(fE/aBC)-1;}else if(fE<(aB4-1)*aBC){return Math.floor(fE/aBC);
}else if(fE<a8v-aBB){return aB4-1;}fE-=a8v-aBB;return aB4+Math.floor(fE/aBC);}
function zy(fC,fE){return fC>=bc.gap&&fC<bc.gap+aB0&&fE>=bc.gap&&fE<bc.gap+a8v;}this.vY=function(){
vZ.drawImage(aB5,bc.gap,bc.gap);};}function cN(){var canvas;var zA;var fC;var fE;var aAc,aBu;
var gap;var aBv;var fontSize;var aBw;var aBx,aBy;var aBz;var aC0;var aC1;var aC2;var aC3;
var aC4;this.dd=function(){aC2=aC3=0;aBx=new Array(8);aBx[0]=L(112);aBx[1]=aD.kk?L(113):L(114);
aBx[2]=L(115);aBx[3]=L(116);aBx[4]=L(117);aBx[5]=L(118,0,S[109]);aBx[6]=L(119);aBx[7]=L(120);
aBy=new Array(aBx.length);aBy.fill("");aBz=new Array(aBx.length);aBz[0]=aD.kk?0:aD.kQ;
aBz[1]=aD.kk?al.kw:aD.km;aBz[2]=aD.a13;aBz[3]=0;aBz[4]=bL.fW(10000*ag.gt[0],Math.max(aD.kA,1));
aBz[5]=(aD.data.iIncomeType===0?700:aD.data.iIncomeType===1?bL.fW(aD.data.iIncomeValue*700,64):
bL.fW(aD.data.iIncomeData[aD.ep]*700,64));aBz[6]=0;aC5();aBz[7]=0;
aC1=aC6(6);aC0=new Array(aBx.length);aC0.fill(true);aC4=0;if(aD.kk){aC0[0]=false;aC0[2]=false;
aC0[3]=false;aC4=3;}else{aC0[3]=false;aC4=1;}aBw=0;this.resize();};this.resize=function(){
this.i=Math.floor((a0.a1.iE()?0.1646:0.126)*h.iF);this.j=Math.floor(1.18*this.i);
aAc=Math.floor(0.04*this.i);gap=Math.floor(0.035*this.i);aBv=0.04*this.i;aBu=this.j;
this.j-=Math.floor(aC4*(this.j-2*aAc)/aBx.length);fontSize=Math.floor(0.7*(aBu-aAc)/aBx.length);
var a6j=bA.qt.sk(1,fontSize);canvas=document.createElement(S[4]);
canvas.width=this.i;canvas.height=this.j;zA=canvas.getContext("2d",{alpha:true});
zA.font=a6j;aC7(a6j,0.575*this.i);bA.qt.textBaseline(zA,1);zA.lineWidth=1;
this.a5M();this.a9K();aU.a9K();aC8();};function aC7(a6j,i){for(var aB=0;aB<aBy.length;aB++){
aBy[aB]=bA.zA.a47(aBx[aB],a6j,i);}}this.a9K=function(){fC=h.i-this.i-bc.gap;};this.aC9=function(){
fE=bc.gap;};this.a5M=function(){fE=bc.gap+((aU.a8g()&&ag.mz[aD.ep]!==0&&!aD.hT)?aU.j+bc.gap:0);
};this.ml=function(bu){if(bu||aBw>=100){aBw=0;aC8();
}};function aC8(){var ej;zA.clearRect(0,0,aW.i,aW.j);zA.fillStyle=bB.nx;zA.fillRect(0,0,aW.i,aW.j);
zA.fillStyle=bB.oK;ej=aC2>0?aC2:(aBz[4]/10000);zA.fillRect(0,aW.j-aAc-1,Math.floor(ej*aW.i),aAc);
zA.fillStyle=bB.o0;zA.fillRect(0,0,aW.i,1);zA.fillRect(0,0,1,aW.j);
zA.fillRect(aW.i-1,0,1,aW.j);zA.fillRect(0,aW.j-1,aW.i,1);zA.fillRect(0,aW.j-aAc-1,aW.i,1);
var eU=0;for(var aB=0;aB<aBy.length;aB++){if(!aC0[aB]){eU++;continue;
}bA.qt.textAlign(zA,0);var aCA=Math.floor(((aBu-aAc)+2*aBv)*(aB-eU+1)/(aBy.length+1)-0.7*aBv);
zA.fillText(aBy[aB],gap,aCA);
bA.qt.textAlign(zA,2);if(aB===5&&ag.mz[aD.ep]!==0&&ag.h7[aD.ep]>=ae.k6(aD.ep)){
zA.fillStyle=bB.ow;zA.fillText(aC6(aB),aW.i-gap,aCA);zA.fillStyle=bB.o0;
}else{zA.fillText(aC6(aB),aW.i-gap,aCA);}}}function aC6(aB){if(aB<3){return aBz[aB].toString();
}else if(aB===3){return bA.rs.a57(aBz[aB]/100,2);}else if(aB===4){return bA.rs.a57(aBz[aB]/100,2);
}else if(aB===5){return bA.rs.a57(aBz[aB]/100,2);}else if(aB<7){return bA.rs.a0I(aBz[aB]);
}else{return aW.aCB(aBz[7]);}}this.a65=function(){return aBz[7];};this.aCB=function(value){
var lL=Math.floor(value/1000/60);var f5=Math.floor((value-1000*60*lL)/1000);
if(f5<10){return lL+":0"+f5;}return lL+":"+f5;};this.eY=function(){aCC();aCD();this.md();
aCE();aC5();aCF();aCG();aCH();};function aCC(){if(!aC0[0]){return;}if(aD.a14-aD.a13===aBz[0]){
return;}aBz[0]=aD.a14-aD.a13;aBw++;}function aCD(){if(al.kw-aBz[0]===aBz[1]){
return;}aBz[1]=al.kw-aBz[0];aBw++;}this.md=function(){if(!aC0[2]){return;}if(aD.a13===aBz[2]){
return;}aBz[2]=aD.a13;aBw+=aD.a11===2?100:1;};function aCG(){var a4p,per;if(aD.hz){a4p=bh.kx();
}else{a4p=ag.gt[m1[0]];}per=bL.fW(10000*a4p,Math.max(aD.kA,1));aBz[3]=a4p;if(aBz[4]===per){return;
}aBw++;aBz[4]=per;}this.aCI=function(){return aBz[3]===aD.kA;};function aCH(){if(aD.ki===8&&aCJ()){
return;}if(aBz[3]<aD.kA){return;}if(!aCK()){return;}if(bN.lF.aCL().length){return;
}if(aD.hz){if(bh.kx(1)<aD.kA){return;}}bR.a0d.a10();}function aCK(){for(var aB=al.kw-1;aB>=0;aB--){
if(ag.gX[al.l1[aB]].length>0){return false;}}return true;}function aCJ(){for(var aB=0;aB<2;aB++){
if(!bA.gR.hH(aB)){bR.a0d.a10();return true;}}return false;}function aCE(){var aCM=ae.aCN(aD.ep);
if(aCM===aBz[5]){return;}aBz[5]=aCM;aBw++;}function aC5(){if(ag.gt[aD.ep]===aBz[6]){
return;}aBz[6]=ag.gt[aD.ep];aBw++;}function aCF(){aBz[7]+=bf.aCO;var qa=aC6(7);
if(aC1!==qa){aC1=qa;aBw+=100;}}this.aCP=function(aB){var tb,aCQ,eU;if(aD.a11===2){return false;}
if(aB%2===1){aV.ml(1,1);bf.dk=true;}if(aB===aD.a5V){aC2=0;aC8();return false;}if(aB===-1&&aC3===0){
return false;}aCQ=aC2;if(aD.hE){aC2=aB/aD.a5V;aC8();return aC2!==aCQ;}eU=performance.now();
if(aB>=0){tb=eU-aB*392;aC3=(aB===0||tb<aC3)?tb:aC3;}aC2=(eU-aC3)/(aD.a5V*392);aC2=aC2>1?1:aC2;
aC8();return aC2!==aCQ;};this.vY=function(){vZ.drawImage(canvas,fC,fE);};}function cO(){var hr;
var aCR;var i;var j;var a9Q;var aCS;var aCT;var a8h;var canvas;var nC;var aCU;this.dd=function(){
hr=false;aCU=false;j=0;a9Q=0.61;aCS=0.07;aCT=0.09;a8h=0;nC=0;};this.resize=function(){
if(!hr){return;}if(a0.a1.iE()){i=Math.floor(0.69*h.iF);}else{i=Math.floor(0.5*h.iF);
}i=aCV(i,a7J(h.i-2*bc.gap,10));i=aCV(i,Math.floor(a7J((h.j-2*bc.gap),3)*3.57));
j=Math.floor(0.28*i);aCW();};this.show=function(fX,aCX,a9C,aCY){
if(hr){return;}if(aCY&&aCU){return;}aCU=true;aCR=a9C?21:(fX?1:2);hr=true;this.resize();aL.sA();
aR.a97();nC=bf.eT;a8h=aCX?1:0;};this.eY=function(){if(!hr||a8h>=1){return;}a8h+=0.0005*(bf.eT-nC);
a8h=a8h>1?1:a8h;nC=bf.eT;bf.dk=true;};this.hI=function(fC,fE){if(!hr||a8h<=0){
return false;}fC-=Math.floor((h.i-i)/2);fE-=z6();if(fC<0||fE<0||fC>i||fE>j){return false;
}if(fC>i-j/3&&fE<j/3){hr=false;bf.dk=true;}return true;};this.vY=function(){if(!hr||a8h<=0){
return;}vZ.globalAlpha=a8h;vZ.drawImage(canvas,Math.floor((h.i-i)/2),z6());vZ.globalAlpha=1;
};function z6(){var fC=Math.floor((h.i-i)/2);if(fC<aR.j+2*bc.gap){return h.j-j-4*bc.gap-aR.j;
}return h.j-j-2*bc.gap;}function aCW(){canvas=document.createElement(S[4]);
canvas.width=i;canvas.height=j;var zA=canvas.getContext("2d",{alpha:true});
var nQ=Math.floor(1+j/40);zA.clearRect(0,0,i,j);zA.fillStyle=bB.nx;
zA.fillRect(nQ,nQ,i-2*nQ,j-2*nQ);zA.lineJoin="bevel";zA.lineWidth=2*nQ;zA.strokeStyle=bB.o0;
zA.strokeRect(nQ,nQ,i-2*nQ,j-2*nQ);zA.imageSmoothingEnabled=false;var ed=ab.get(aCR);
var aCZ=ed.width;var aCa=ed.height;var a6o=(aCR===1?0.85:aCR===21?0.666:0.9)*a9Q*j/aCa;
zA.setTransform(a6o,0,0,a6o,Math.floor((i-a6o*aCZ)/2),Math.floor((j-a6o*aCa)/2));
zA.drawImage(ed,0,0);zA.setTransform(1,0,0,1,Math.floor(i-aCT*j-aCS*j-nQ),Math.floor(nQ+aCS*j));
aCb(zA,Math.floor(aCT*j));zA.setTransform(1,0,0,1,0,0);
}function aCb(zA,f5){zA.lineWidth=Math.floor(1+j/80);zA.strokeStyle=bB.o0;zA.beginPath();
zA.moveTo(0,0);zA.lineTo(f5,f5);zA.moveTo(0,f5);zA.lineTo(f5,0);zA.stroke();}}function dN(){
var aCc;var aCd=new Uint8Array(5);var aCe=new Uint8Array(5);this.aCf=new aCg();this.dd=function(){
var fX=bj.eQ.data[119].value;for(var aB=0;aB<aCd.length;aB++){aCd[aB]=(fX>>(2*aB))%4;
}};this.a5h=function(){aCc=[L(121),"",L(122,[bX.aCh[28]]),L(123,[bX.aCh[26]]),
L(124,[bX.aCh[0]])];this.aCf.dd();};this.eY=function(){this.aCf.eY();};this.a6S=function(id){
if(id>1&&bJ.rL()){return;}if(!aCi(id)){return;}aN.a7O(aCc[id]);};function aCi(eC){
if(aCd[eC]===3||aCe[eC]===1){return false;}aCe[eC]=1;if(Math.random()<0.6){return true;
}aCd[eC]++;var fX=0;for(var aB=0;aB<aCd.length;aB++){fX+=aCd[aB]<<(2*aB);}bj.sL.sM(119,fX);
return true;}}function aCg(){var aCj;this.dd=function(){aCj=false;};this.eY=function(){if(!aCk()){
return;}if(aCl()){return;}if(aCm()){return;}if(aCn()){return;}aCo();};function aCk(){if(aCj){
return true;}if(bf.kN()%30!==9){return false;}if(!bA.gR.lx(90)){return false;}aCj=true;return true;
}function aCl(){var ql=aN.a7k(956);if(!ql){return false;}if(bA.gR.lO(ql.player)){return true;
}aN.a7j(956,0);return false;}function aCm(){var gd=aD.hz?aCp():aCq();if(gd===-1){return false;
}aN.zT(0,L(125,[ag.zU[gd]]),956,gd,bB.o0,bB.nx,-1,true);return true;}function aCq(){var aCr=al.kw;
var lK=al.l1;var aCs=kB;for(var aB=0;aB<aCr;aB++){var gd=lK[aB];if(aCs[gd]!==0){return gd;
}}return-1;}function aCp(){var id=bh.kz();var f5=al.kw;if(!bg.kn[id]){if(f5>1){return m1[f5-1];
}return-1;}var a0p=al.l1;var f3=bg.f3;for(var aB=0;aB<f5;aB++){var gd=a0p[aB];if(f3[gd]!==id){
return gd;}}return-1;}function aCn(){var ql=aN.a7k(957);if(!ql||!ql.a7F){return false;
}if(ac.ew(ql.a7F.er<<2)){return true;}aN.a7j(957,0);return false;}function aCo(){var f5=ao.j4.la;
if(f5===0){return;}var eQ=ao.j4.eQ;for(var aB=0;aB<f5;aB++){var er=eQ[aB];if(ac.ew(er<<2)){
aN.zT(0,L(126,[bM.fD(er),bM.fF(er)]),957,0,bB.o0,bB.nx,-1,true,undefined,{fO:1,er:er});
return;}}}}function dO(){this.aCt=new aCu();this.dd=function(){this.aCt.resize();
};}function aCu(){this.resize=function(){var aB;var aCv=document.head.querySelector("style#ss");
if(!aCv){aCv=document.createElement("style");aCv.id="ss";document.head.appendChild(aCv);
}else{for(aB=aCv.sheet.cssRules.length-1;aB>=0;aB--){aCv.sheet.deleteRule(0);}
}var a9Y="::-webkit-scrollbar";var dx=bA.qt.r2(bc.sm);var i1=bA.qt.r2(Math.max(bA.qt.sC(0.012),8));
try{aCv.sheet.insertRule(a9Y+"{width:"+i1+";height:"+i1+";}",aCv.sheet.cssRules.length);
aCv.sheet.insertRule(a9Y+"-thumb{background-color:white;}",aCv.sheet.cssRules.length);
aCv.sheet.insertRule(a9Y+"-track{background:"+bB.nw+";}",aCv.sheet.cssRules.length);
aCv.sheet.insertRule(a9Y+"-track:horizontal{border-top:"+dx+S[138],aCv.sheet.cssRules.length);
aCv.sheet.insertRule(a9Y+"-track:vertical{border-left:"+dx+S[138],aCv.sheet.cssRules.length);
aCv.sheet.insertRule(a9Y+"-button{display:none;}",aCv.sheet.cssRules.length);
}catch(e){console.log("error 3425: "+e);for(aB=aCv.sheet.cssRules.length-1;aB>=0;aB--){
aCv.sheet.deleteRule(0);}}};}function dM(){this.aCw=false;
this.nq=false;this.a5Q=false;this.aCx=[0,0,0,0];this.aCy=function(){this.a5Q=this.a5Q||this.nq;
if(!this.nq&&(!this.aCw||!this.a5Q)){return;}var nQ=ba.aCz[0];var nR=ba.aCz[1];var nd=ba.aCz[2];
var ne=ba.aCz[3];nQ=nQ<this.aCx[0]?this.aCx[0]:nQ;nR=nR<this.aCx[1]?this.aCx[1]:nR;
nd=nd>this.aCx[2]?this.aCx[2]:nd;ne=ne>this.aCx[3]?this.aCx[3]:ne;this.nq=false;
this.aCw=false;if(nQ===this.aCx[0]&&nR===this.aCx[1]&&nd===this.aCx[2]&&ne===this.aCx[3]){
this.a5R();return;}if(nd>=nQ&&ne>=nR){a5j.putImageData(a5k,0,0,nQ,nR,nd-nQ+1,ne-nR+1);
}};this.a5R=function(){if(this.a5Q&&this.aCx[2]>=this.aCx[0]&&this.aCx[3]>=this.aCx[1]){
a5j.putImageData(a5k,0,0,this.aCx[0],this.aCx[1],this.aCx[2]-this.aCx[0]+1,this.aCx[3]-this.aCx[1]+1);
}this.a5Q=false;};this.a1D=function(){if(this.aCx[2]>=this.aCx[0]&&this.aCx[3]>=this.aCx[1]){
a5j.putImageData(a5k,0,0,this.aCx[0],this.aCx[1],this.aCx[2]-this.aCx[0]+1,this.aCx[3]-this.aCx[1]+1);
}this.a5Q=false;};this.dd=function(){var fC,fE;this.aCw=false;this.nq=false;this.a5Q=false;
this.aCx[0]=bS.fG;this.aCx[1]=bS.fH;this.aCx[2]=this.aCx[3]=0;loop:for(fC=1;fC<bS.fG-1;fC++){
for(fE=bS.fH-2;fE>1;fE--){if(aD0[ac.yd(fC,fE)+2]===1){this.aCx[0]=fC;break loop;}}}loop:
for(fE=1;fE<bS.fH-1;fE++){for(fC=bS.fG-2;fC>1;fC--){if(aD0[ac.yd(fC,fE)+2]===1){this.aCx[1]=fE;
break loop;}}}loop:for(fC=bS.fG-2;fC>0;fC--){for(fE=bS.fH-2;fE>1;fE--){if(aD0[ac.yd(fC,fE)+2]===1){
this.aCx[2]=fC;break loop;}}}loop:for(fE=bS.fH-2;fE>0;fE--){for(fC=bS.fG-2;fC>1;fC--){
if(aD0[ac.yd(fC,fE)+2]===1){this.aCx[3]=fE;break loop;}}}};}function L(value,aD1,w7,aD2){var qa;
if(typeof value===S[48]){qa=b7.aD3[value];}else{qa=value;}if(w7&&b7.aD4()){qa=w7;}if(!aD1){if(aD2){
return qa.replace(new RegExp("\\s*\\{.*?\\}\\s*","g")," ").trim();}return qa;}var f5=aD1.length;
for(var aB=0;aB<f5;aB++){for(var fO=0;fO<3;fO++){qa=qa.replace("{"+(10*fO+aB)+"}",aD1[aB]);
}}return qa;}function c2(){this.data=new aD5();var aD6=(new aD7()).L84;
this.aD3=aD6;this.aD8="en";var aD9=false;this.dd=function(){aD9=false;if(aDA()){return;
}if(aDB()&&aDC()&&aDD()){return;}aD9=true;};this.df=function(){bg.de();aE.de();be.de();bd.de();
aO.dd();bo=new e1();};this.aD4=function(){return this.aD3===aD6||!aD6.length;};function aDA(){
var qa=bj.eQ.data[12].value;if(qa.split("-")[0].toLowerCase()==="en"){b7.aD3=aD6;b7.aD8=qa;
return true;}return false;}function aDB(){return bj.eQ.data[12].value===bj.eQ.data[145].value;
}function aDC(){return bj.eQ.data[146].value>0;}function aDD(){var f5=bj.eQ.data[146].value;
var g=bj.rA.wK(f5,false);if(g.length!==f5){return false;}if(!bA.r1.a3i(g)){
return false;}return aDE(g);}function aDE(g){var f5=g.length;for(var j=0;j<f5;j++){
g[j]=g[j].replace("&#39;","'");}var aDF=bj.rA.wK(f5,true);if(f5!==aDF.length){return false;
}if(!bA.r1.a3i(aDF)){return false;}var lL=aD6.length;var aAT=new Array(lL);var aDG=lL===f5;
var gY=Math.min(f5,lL);for(var aB=0;aB<lL;aB++){aAT[aB]=aD6[aB];if(aB<f5&&aDF[aB]===aAT[aB]){
aAT[aB]=g[aB];continue;}aDG=false;for(var fP=0;fP<gY;fP++){if(aDF[fP]===aAT[aB]){
aAT[aB]=g[fP];break;}}}b7.aD3=aAT;b7.aD8=bj.eQ.data[12].value;return aDG;}this.aDH=function(){
if(!aD9){return false;}aD9=false;if(aD6.length===0){return false;}var aDI=bj.eQ.data[12].value;
b0.ea.aDJ(0,aDI.slice(0,20));return true;};this.aDK=function(g){if(g.length!==aD6.length){
if(t.tD===8){t.a2H().aDL(30,0,1);}return;}this.aD3=g;this.aD8=bj.eQ.data[12].value;
bj.sL.sM(145,this.aD8);bj.sL.sM(146,g.length);bj.rA.wQ(g,false);bj.rA.wQ(aD6,true);
if(t.tD===8){t.a2H().aDL(30);return;}if(aa.a2D()===0&&t.tD===5){t.y.aDM();}};this.aDN=function(){
var g=navigator.languages;if(!g||!g.length){return [0,0];}var wT=Math.max(b7.data.aDO(g[0]),0);
if(g.length===1){return [wT,wT];}return [wT,Math.max(b7.data.aDO(g[1]),0)];};}function aD5(){
this.g=["en","aa","ab","ace","ach","af","ak","alz","am","ar","as","av","awa","ay","az",
"ba","bal","ban","bbc","bci","be","bem","ber","ber-Latn","bew","bg","bho","bik","bm","bm-Nkoo",
"bn","bo","br","bs","bts","btx","bua","ca","ce","ceb","cgg","ch","chk","chm","ckb","cnh","co",
"crh","crs","cs","cv","cy","da","de","din","doi","dov","dv","dyu","dz","ee","el","eo","es","et",
"eu","fa","fa-AF","ff","fi","fj","fo","fon","fr","fur","fy","ga","gaa","gd","gl","gn","gom","gu",
"gv","ha","haw","he","hi","hil","hmn","hr","hrx","ht","hu","hy","iba","id","ig","ilo","is","it",
"iw","ja","jam","jv","jw","ka","kac","kek","kg","kha","kk","kl","km","kn","ko","kr","kri","ktu",
"ku","kv","ky","la","lb","lg","li","lij","lmo","ln","lo","lt","ltg","luo","lus","lv","mad","mai",
"mak","mam","mfe","mg","mh","mi","min","mk","ml","mn","mni-Mtei","mr","ms","ms-Arab","mt","mwr",
"my","ndc-ZW","ne","new","nhe","nl","no","nr","nso","nus","ny","oc","om","or","os","pa","pa-Arab",
"pag","pam","pap","pl","ps","pt","pt-PT","qu","rn","ro","rom","ru","rw","sa","sah","scn","sd","se",
"sg","shn","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sus","sv","sw","szl","ta","tcy",
"te","tet","tg","th","ti","tiv","tk","tl","tn","to","tpi","tr","trp","ts","tt","tum","ty","tyv",
"udm","ug","uk","ur","uz","ve","vec","vi","war","wo","xh","yi","yo","yua","yue","zap","zh","zh-CN",
"zh-TW","zu","nb","fil","sh"];this.aDP=function(){var aB;var aDQ=[];var g=this.g;var f5=g.length;
for(aB=0;aB<f5;aB++){aDQ.push(g[aB]);}var aDR=bj.eQ.data[12].w7;for(aB=0;aB<f5;aB++){
if(aDQ[aB]===aDR){aDQ.splice(aB,1);f5--;break;}}aDQ.sort();f5++;aDQ.unshift(aDR);try{
if(typeof Intl===S[27]){return aDQ;}for(aB=0;aB<f5;aB++){var aDS=new Intl.DisplayNames([aDQ[aB]],{
type:"language"});var qa=aDS.of(aDQ[aB]);if(qa!==aDQ[aB]){aDQ[aB]=aDQ[aB]+": "+qa;}}}catch(e){
console.log("error 3646: "+e);}return aDQ;};this.aDT=function(aDU){var qa=bj.eQ.data[12].value;
var f5=aDU.length;for(var aB=0;aB<f5;aB++){if(qa===aDU[aB].split(":")[0]){return aB;}}return 0;
};this.aDO=function(aDV){if(!aDV||aDV.length<2){return-1;}aDV=(aDV.split("-")[0]).toLowerCase();
var g=this.g;var f5=g.length;for(var aB=0;aB<f5;aB++){if(aDV===g[aB]){return aB;
}}return-1;};}function aD7(){this.L84=["No Admin","Helper","Junior Moderator","Moderator",
"Senior Moderator","Lead Moderator","Head Admin","Very Easy","Easy","Normal","Hard","Very Hard",
"Impossible","Type your message here...","Send","Activated","Top Clan","Best Clan Member",
"Top Admin","Best 1v1 Player","Best Battle Royale Player","Richest Player","Top Patreon","Lobby",
"Propaganda","Close {button}","Report Abuse","You earned {10} gold!","{0} earned {11} gold!",
"Team {0}","Team {0} won the game!","You earned a participation reward of {10} gold.",
"The prize money was distributed as follows:","and {10} more",
"You earned {10} gold.","You earned {10} battle royale points!","Clan {0} gained {11} points. ✨",
"You earned {10} clan points!","You earned an additional {10} gold because you played for {1}.",
"Back","Error","Error {10}","Not Enough Gold!",
"You need more gold to perform this action.","Quit Game","More","This is a contest!",
"Accept","You conquered {0}. 🔥","You were conquered by {0}.","Congratulations! You won the game.",
"{0} won the game.","{0} broke the non-aggression pact.","{0} attacks you! ⚔️",
"Choose your start position!","You surrendered! 🏳️","The game ended in a stalemate!",
"Error: {10}","{0} was immortalized!","Neutral Land: {0}","Player: {0}","Strength: {10}",
"Territory: {10}","Team","Bot Difficulty","Index: {10}","Coordinates: {10}","Mountain: {10}",
"Water: {10}","Ship Owner: {0}","Message to {0}","Humanity triumphs! The undead were defeated.",
"The Resistance","Mankind's era ends, overrun by the relentless tide of the undead.",
"The Virus","If peace is agreed upon, the game ends in a stalemate.",
"If peace is agreed upon, the largest territory holder wins the game.",
"You signed a non-aggression pact with {0}.",
"You asked {0} to sign a non-aggression pact.","{0} accepted the non-aggression pact.",
"{0} requests a non-aggression pact.","You asked {10} players to attack {1}.",
"You asked {0} to attack {1}.","{0} suggests you attack {1}. 🎯",
"You exported 1 resource to {0}.","You exported {10} resources to {1}.",
"Incoming Bot Support!","{0} supported you!","Map: {0}","Dimension: {10}",
"Overall Pixels: {10}","Land: {10}","Mountains: {10}","Full sending is disabled.",
"{0} was conquered by {1}.","{0} left the game.","{0} surrendered.","{0} joined the game.",
"{10} players were conquered.","{10} players left the game.","{10} players surrendered.","Contest",
"YOU CONQUERED","YOU WERE CONQUERED BY","THE GAME WAS WON BY","MAP:","{0} called the peace vote.",
"{0} voted for peace.","{0} rejected peace.","second played","seconds played",
"LEADERBOARD","Humans","Players","Bots","Spectators","Threshold","Percentage","Growth","Income",
"Time","Hint: The top 9 emojis are ordered by usage.","Hint: Call the peace vote by pressing {0}.",
"Hint: Add troops to your weakest ongoing attack with {0}.",
"Hint: Hover with the mouse over a player and press {0} to attack them.",
"{0} still needs to be conquered!",
"A neutral pixel at position ({10}, {11}) still needs to be conquered!",
"You are leaving Territorial.io!","You are leaving Territorial.io.",
"🔑 Show Account","🚩 Report Abuse","💬 Mention","Loading","{0} defeated {1}!",
"White Arena","Black Arena","Island","Mountains 1","Desert","Swamp","White Plains",
"Cliffs","Pond","Halo","Europe","World 1","Caucasia","Africa","Middle East","Scandinavia",
"North America","South America","Asia","Australia","Island Kingdom","Mountains 2","World 2",
"British Isles","Refresh","Public Profile","🧈 Gold","Large Bank","Medium Bank","Small Bank",
"Capitalist","Rich Person","Landowner","Merchant","Taxpayer","Worker","Peasant","Serf",
"Daylaborer","Drifter","Beggar","Account Balance: ","Rank: ","Status: ","Gold Transfer","Confirm",
"Cancel","Account Name","Copy","Password","Show","Hide","Request New Password","Security Tip",
"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.",
"Account Options",
"Log in to a Different Account","Create New Account","Delete Account: ","🗑️ Account Deletion",
"Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.",
"Followed Accounts","➡️ Show","🗑️ Remove","🚨 Remove All Below","Saved Accounts",
"Listed accounts may have been removed in the meantime due to insufficient funds.",
"➡️ Login","1v1 Rating","Elo: ","Played Games: ","Battle Royale Rating",
"Commander","Strategist","Soldier","Recruit","Rating: ","Admin Statistics","Votes: ",
"You are about to purchase {10} votes for {11} Gold with your Account {2}.","User","🟢 Online",
"Browsing the menus.","Watching a replay.","Playing a team game.","Playing a battle royale game.",
"Playing a 1v1 match.","Fighting zombies.","In the lobby.","Playing in single player.",
"🔴 Offline","Last active some seconds ago.","Last active 1 minute ago.",
"Last active {10} minutes ago.","Last active 1 hour ago.","Last active {10} hours ago.",
"Last active 1 day ago.","Last active {10} days ago.","Last active a long time ago.",
"🚫 Unfollow","📥 Follow","You are following this user. ✅","Please choose a respectful username.",
"Offensive Name","Hate Speech","Bio","Upload Bio","Enable Auto Renew",
"Disable Auto Renew","Auto Renew is off. The subscription will end in {10} day(s).",
"Auto Renew is on. The subscription will renew in {10} day(s).",
"The monthly fee is currently {10} gold.",
"Buy","Description","Report Player","Primary Clan Stats","Clan: {0}",
"Monthly Points: {0}","Rank: {0}","Total Points: {0}","Won Games: {0}","Avg. Points per Game: {0}",
"Secondary Clan Stats","Clan Leader Statistics","Clan Leader of {0}","No Clan Leader",
"Elect","Rating: {10}","Rank: {10}","Status: {10}","Active","Inactive","Unlink Account",
"Benefits:","No Ads","Separate Leaderboard","Extra Gold Income","Status: Not Linked",
"Join Territorial.io on Patreon:","Once you have joined, connect your account:",
"If you hide Patreon, no one can share their membership with you.","Additional Income",
"Options","Default","Uniform","Customized","Mixed","Team dependent","Player Count",
"Clan Chart","🛠️ Options","🛠️ Chart Options","Search Terms","Separate search terms with a comma.",
"Load Data","Start Index","End Index","Timeframe","More Options",
"Y-Axis Compression","Choose Your Nation's Color!","National Color","Red: ","Green: ",
"Blue: ","Adjust","Colors","Random","Selectable Color","⏳ Connecting...","Find Server...",
"New Connection...","Reload Required","A game reload is required to apply the new configuration.",
"Custom Scenario","⚔️ Play","Map","Settings",
"Game Mode","Clustered","Player Names","Kingdom Names","Simple Names","Territorial Income",
"Interest Income","Starting Resources","More Settings","Reset Scenario","Open File...",
"Save As File...","📜 Game Log","Multiplayer","My Account","Game Menu","Your Kingdom's Name",
"Clans","Clan Members","Admins","1v1 Players","Battle Royale","Richest Players","Patreon Members",
"🏆 Leaderboards","Previous 10","Next 10","1v1 Player Ranking","Clan Ranking","Clan Member Ranking",
"Admin Ranking","1v1 Reports","Admin Election","Blockchain","Clan Leader Election",
"Bio Reports","Battle Royale Players","Index","Username","Account","Ranking",
"Player","Elo","Clan","Rating","Leader","Time Ago","Accuser","Accused","Voter","Target Account",
"Votes","Sender","Receiver","Amount","Number","Gold","Type","Elo Deducted","Bio Removed",
"🛠️ List Options","Clan Name Search","Username Search","Quantity","Account Name Search",
"1v1","Zombie","Chat","Ready","Next Game","Login","The only official domain is territorial.io",
"If you log in on a different website, your account may be stolen!",
"If you play with the official Android or iOS App, you are fine.",
"📜 Logs","Source Account: {0}","Target Account: {0}",
"Gold to be Sent: {10}","Gold to be Received: {10}","Procedural Map","Realistic Map",
"Custom Map","Passable Water","Passable Mountains","Maximum Dimension","Map File","Select File",
"Map Name","Preview","Selectable Name","📰 Propaganda","Links","Propaganda Text","Reset",
"Language","Launch Campaign","Gold Investment","Launch","▶️ Replay","🔲 Select All","📋 Copy",
"🗑️ Clear","▶️ Launch","Insert the replay data here!","⚙️ Settings","🔄 Reset","Information",
"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.",
"Resolution","Low","Medium","High","Very High","Minimum Font Size",
"Small","Very Small","Text Rendering Speed","Slow","Fast","Large UI","Place Balance Above",
"Hide Zoom Buttons","Font","Message Box","Keep Closed","Is Muted","Multiplayer Connection",
"Automatic (recommended)","Direct","Via Proxy","Shortcut Keys","Spawning","Selectable Spawn",
"🔑 My Account","📈 Clan Charts","🧈 Gold Transfer","⚔️ Join Lobby 2","🔗 Links","ℹ️ Game Version",
"🗑️ Delete Data","Privacy Settings","Force Restart Game","☰ Game Menu","📊 Game Statistics",
"🏳️ Surrender","🕊️ Call Peace Vote","Android App","iOS App","Changelog","Clan Results","Tutorial",
"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
"Please make sure to safely store passwords before performing this action.",
"🗑️ Delete","User Privacy","Check out our Privacy Policy at:",
"Source Account","Send gold only to trusted accounts!","Replay Error",
"Warning","Loading...","Incoming Boat!","Incoming Ship!","Initiate Land Attack At Mouse Pointer",
"Launch Ship Towards Mouse Pointer","Increase Percentage Bar",
"Decrease Percentage Bar","Slightly Increase Percentage Bar","Slightly Decrease Percentage Bar",
"Switch UI Visibility","Zoom In","Zoom Out","Camera Left","Camera Right","Camera Up","Camera Down",
"Add To Weakest Attack","Call Peace Vote","Intercept Ship At Mouse Pointer","Avg. Attack Strength",
"Land Attacks","Ships launched","Bots conquered","Humans conquered","Attacked by Bots",
"Attacked by Humans","Territorial Loss","Received Support","Overall Income","Additional Costs",
"Land War Losses","Naval Losses","Transmitted Support","Overall Expenses","Mountain Attacks",
"Ships landed","Territory","Numbers","Statistics","Neutral","Red","Green","Blue","Yellow",
"Magenta","Cyan","White","Black","Ship launched!","Ship intercepted!","Upcoming Team Contest!",
"Upcoming Battle Royale Contest!","Upcoming 1v1 Contest!","Upcoming Zombie Contest!"
];}function di(){var fC,fE;var j;var uB;var aDW;var aDX;var aDY;var aDZ;var aDa;
var i;var a4L;var aDb;this.hr=false;this.dd=function(qa,aDc){if(a0.id===1&&a0.dw>=13&&a0.dw<18){
if(aDc){a4L=qa;return;}if(a4L!==qa){return;}a0.wI.saveString(200,qa);return;}if(!aDc){return;
}a4L=qa;aDb=document.createElement("a");aDb.appendChild(document.createTextNode(a4L));this.hr=true;
aDb.title=a4L;aDb.target=S[103];aDb.href=a4L;aDb.style.textAlign=S[10];aDb.style.color=bB.o0;
aDb.style.position=S[3];aDb.style.padding=S[65];aDb.style.margin=S[65];this.resize();
document.body.appendChild(aDb);bf.dk=true;};this.sA=function(){if(!this.hr){return false;
}t.removeChild(document.body,aDb);this.hr=false;return true;};this.hI=function(iM,iN){if(!this.hr){
return false;}if(iM<fC||iN<fE||iM>fC+i||iN>fE+j||(iM>fC+i-uB&&iN<fE+uB)){bf.dk=true;this.hr=false;
t.removeChild(document.body,aDb);return true;}return true;};this.resize=function(){if(!this.hr){
return;}aDZ=Math.floor(0.8*(a0.a1.iE()?(h.i>h.j?0.6:0.55):0.4)*h.iF);uB=Math.floor(0.15*aDZ);
aDW=Math.floor(0.35*uB);aDX=Math.floor(0.5*uB);aDY=Math.floor(2.5*aDX);j=uB+aDW+3*aDX;
var a6j=bA.qt.sk(1,aDW/h.k);aDa=Math.floor(h.k*aQ.measureText(a4L,a6j));i=(aDa>aDZ?aDa:aDZ)+2*aDY;
var aDd=i;i=Math.min(i,h.i-2*(a0.a1.iE()?2:1)*bc.gap);a6j=bA.qt.sk(1,(i/aDd)*aDW/h.k);
aDa=Math.floor(h.k*aQ.measureText(a4L,a6j));fC=Math.floor((h.i-i)/2);
fE=Math.floor((h.j-j)/2);aDb.style.font=a6j;aDb.style.top=Math.floor((fE+1.4*aDX+uB)/h.k)+"px";
aDb.style.left=Math.floor((fC+(i-aDa)/2)/h.k)+"px";};this.vY=function(){if(!this.hr){
return;}vZ.fillStyle=bB.nx;vZ.fillRect(fC,fE+uB,i,j-uB);vZ.fillStyle=bB.p9;vZ.fillRect(fC,fE,i,uB);
vZ.fillStyle=bB.o0;vZ.lineWidth=bc.zz;vZ.strokeStyle=bB.o0;vZ.strokeRect(fC,fE,i,j);
vZ.fillRect(fC,fE+uB,i,bc.zz);vZ.font=bA.qt.sk(1,0.48*uB);bA.qt.textAlign(vZ,1);
bA.qt.textBaseline(vZ,1);vZ.fillText(L(127),Math.floor(fC+(i-0.5*uB)/2),Math.floor(fE+0.55*uB));
aM.a6u(Math.floor(fC+i-0.8*uB),Math.floor(fE+0.25*uB),Math.floor(0.5*uB));
vZ.setTransform(1,0,0,1,0,0);
};}function dh(){var gap=0;var fC=[0,0,0,0,0];var fE=[0,0,0,0,0];var nc=[1,1,1,1,1];
var fX=[true,true,true,false,false];this.fs=[true,true,true,false,false];var ed=null;var aBx;
this.aDe=function(a3t,aDf){ed=a3t;fX=aDf;aBx=[bK.aDg,bK.a26,bK.aDh,bK.aDh,bK.aDi];this.dd();
};this.dd=function(){if(!ab.tf()){return;}var aB;var tK=Math.floor((a0.a1.iE()?0.261:0.195)*h.iF);
var tL=Math.floor(0.9*tK);var a9Q=Math.floor(0.17*tL);
gap=a0.a1.iE()?2*bc.gap:bc.gap;nc[0]=tK/ed[0].width;nc[1]=tL/ed[1].width;nc[2]=a9Q/ed[2].height;
nc[3]=a9Q/ed[3].height;nc[4]=a9Q/ed[4].height;nc[2]*=1.7;nc[3]*=1.07;fC[0]=gap;fC[1]=gap;fC[2]=gap;
fC[3]=gap;fC[4]=Math.floor(2*gap+nc[3]*ed[3].width);fE[0]=gap;fE[1]=fE[0]+gap+nc[0]*ed[0].height;
fE[2]=fE[1]+gap+nc[1]*ed[1].height;fE[3]=fE[2]+gap+nc[2]*ed[2].height;fE[4]=fE[3];
if(!fX[0]){for(aB=0;aB<5;aB++){fE[aB]-=nc[0]*ed[0].height+gap;}}if(!fX[1]){for(aB=2;aB<5;aB++){
fE[aB]-=nc[1]*ed[1].height+gap;}}};this.hr=function(){return!(aa.a2D()===7&&a0.a1.iE());
};this.hI=function(iM,iN){if(!ed||!this.hr()){return false;}var aB;for(aB=fX.length-1;aB>=0;aB--){
if(fX[aB]&&this.fs[aB]&&iM>fC[aB]&&iN>fE[aB]&&iM<fC[aB]+nc[aB]*ed[aB].width&&iN<fE[aB]+nc[aB]*ed[aB].height){
t.u(9,t.tD,new aDj(L(128),bA.qt.a4K(aBx[aB])));return true;}}
return false;};this.vY=function(){if(!ed||!this.hr()){return;}vZ.imageSmoothingEnabled=true;var aB;
for(aB=0;aB<5;aB++){if(fX[aB]&&this.fs[aB]){vZ.setTransform(nc[aB],0,0,nc[aB],fC[aB],fE[aB]);
vZ.drawImage(ed[aB],0,0);}}vZ.setTransform(1,0,0,1,0,0);};}function dX(){this.aDk=0;this.aDl=null;
this.uM=null;this.lF=null;this.y=null;this.uj=null;this.uJ=null;this.message=null;this.aDm=null;
this.s9=null;this.aDn=null;this.aDo=new aDp();this.a2A=0;this.aAK=0;this.dd=function(){
this.aAK=bf.eT;this.aDk=bG.tG.xF(bj.eQ.data[105].value,5);this.uM=new aDq();this.lF=new aDr();
this.y=new aDs();this.uj=new aDt();this.uJ=new aDu();this.message=new aDv();this.aDm=new aDw();
this.s9=new aDx();this.aDn=new aDy();this.y.dd();bp.dd();this.a2A=1;a0.a1.setState(1);
aa.setState(0);};this.ud=function(){this.s9&&this.s9.ud();this.aDl=null;this.uM=null;
this.lF=null;this.y=null;this.uj=null;this.uJ=null;this.message=null;this.aDm=null;this.s9=null;
this.aDn=null;this.a2A=0;bp.ud();a0.a1.setState(0);};}function aDq(){this.uN=[[],[],[],[]];
this.uO=[0,0,0,0];this.aDz=[];this.aE0=function(aE1,tB,username,uT,a4n,aE2,elo,color,wn,aE3){
var aE4=this.aE5(tB,username,uT,a4n,aE2,elo,color,wn,aE3);this.uN[aE1].push(aE4);if(bn.aDk===tB){
bn.aDl=aE4;}if(bn.aDn.aE6(tB)){aE4.uV=1;}bn.y.aE7+=t.tD===29&&bn.y.rx[0]===aE1&&bn.y.rx[2]===1;
};this.aE5=function(tB,username,uT,a4n,aE2,elo,color,wn,aE3){
return{tB:tB,username:username,uT:uT,a4n:a4n,
aE2:aE2,elo:elo,color:color,wn:wn,aE3:aE3};};this.aE8=function(eC,aE1,uT,a4n,aE2,elo,wn,color){
var player=this.uN[aE1][eC];player.uT=uT;player.a4n=a4n;player.aE2=aE2;player.elo=elo;
player.wn=wn;player.color=color;bn.y.aE7+=t.tD===29&&bn.y.rx[0]===aE1&&bn.y.rx[2]===1;
};this.aE9=function(eC,aE1,aEA){var player=this.uN[aE1][eC];var aEB=player.username;
var aEC=S[56]+bF.tG.a0I(player.tB,2);if(aEA){player.username="["+bA.rs.a1k(aEB)+"] "+aEC;
}else{player.username=aEC;}if(aEB.indexOf("Redacted")<0){
player.aED=aEB;}bn.s9.aEE(player.tB);bn.y.aE7+=t.tD===29&&bn.y.rx[0]===aE1&&bn.y.rx[2]===1;
};this.aEF=function(eC,aEG,aEH){var player=this.uN[aEG][eC];
this.aEI(eC,aEG);this.uN[aEH].push(player);bn.y.aE7+=t.tD===29&&bn.y.rx[0]===aEH&&bn.y.rx[2]===1;
};this.aEI=function(eC,aEG){var uM=this.uN[aEG];this.aDz.push(uM[eC]);if(this.aDz.length>1000){
this.aDz.shift();}if(eC>=this.uO[aEG]){uM[eC]=uM[uM.length-1];}else{this.uO[aEG]--;if(aEG===2){
uM.splice(this.uO[aEG]+1,0,uM[uM.length-1]);uM.splice(eC,1);}else{uM[eC]=uM[this.uO[aEG]];
uM[this.uO[aEG]]=uM[uM.length-1];}}uM.pop();bn.y.aE7+=t.tD===29&&bn.y.rx[0]===aEG&&bn.y.rx[2]===1;
};this.aEJ=function(eC,rw){bn.y.aE7+=t.tD===29&&bn.y.rx[0]===rw&&bn.y.rx[2]===1;
var uM=this.uN[rw];var ql=uM[eC];if(rw===2){if(eC>=this.uO[rw]){bn.aDn.join(ql);
var aEK=this.uO[rw];var elo=ql.elo;while(aEK&&elo>uM[aEK-1].elo){aEK--;}uM[eC]=uM[this.uO[rw]];
uM.splice(this.uO[rw]++,1);uM.splice(aEK,0,ql);return;}uM.splice(this.uO[rw]--,0,ql);
uM.splice(eC,1);return;}if(eC>=this.uO[rw]){bn.aDn.join(ql);aEL(uM,this.uO[rw]++,eC);
return;}aEL(uM,--this.uO[rw],eC);};function aEL(g,tX,tY){var aEM=g[tX];g[tX]=g[tY];
g[tY]=aEM;}this.aEN=function(tB){var uN=this.uN;var f5=uN.length;for(var aB=0;aB<f5;aB++){
var uM=uN[aB];var lL=uM.length;for(var fO=0;fO<lL;fO++){if(tB===uM[fO].tB){
return uM[fO];}}}return null;};}function aDy(){var aEO=[];var aEP=[];var aEQ=0;this.dd=function(){
var qa=aER(aEP," is"," are"," in the lobby!");if(qa.length){bn.message.aES({id:7,r:qa});}aEO=[];
aEP=[];aEQ=0;};this.aE6=function(aET){if(bn.aDk===aET){return false;}var tB=bF.tG.a0I(aET,5);
if(bj.vx.uV(tB)){aEP.push(tB);return true;}return false;};this.join=function(player){
if(bn.aDk===player.tB){return;}var tB=bF.tG.a0I(player.tB,5);if(bj.vx.uV(tB)){aEO.push(tB);
}};this.aEU=function(){if(++aEQ<3){return;}aEQ=0;var a7m=aER(aEP,"",""," entered the lobby!");
var aEV=aER(aEO,"",""," joined a game!");if(aEV.length){
if(a7m.length){a7m=a7m+" "+aEV;}else{a7m=aEV;}}if(a7m.length){bn.message.aES({id:7,r:a7m});
}aEO=[];aEP=[];};function aER(g,a7m,aEV,aEW){var f5=g.length;if(f5===0){return "";
}var qa="@"+g[0];if(f5===1){return qa+a7m+aEW;}for(var aB=1;aB<f5-1;aB++){qa+=", @"+g[aB];
}return qa+" and @"+g[f5-1]+aEV+aEW;}}function aDp(){this.dl=function(eC){var uO=bn.uM.uO[eC];
if(uO<2){return false;}var ry=bn.y.rz[eC];var aEX=ry.aEY===9?333:512;uO=Math.min(uO,aEX);
if(ry.aEY===8){uO-=uO%2;}var uM=bn.uM.uN[eC];var aEZ=uM.splice(0,uO);bn.uM.uO[eC]-=uO;
var aEa=aEb(aEZ);if(aEa===-1){bn.uM.aDz=bn.uM.aDz.concat(aEZ);if(bn.uM.aDz.length>1000){
bn.uM.aDz.splice(0,bn.uM.aDz.length-1000);}bn.y.aE7+=t.tD===29&&bn.y.rx[0]===eC&&bn.y.rx[2]===1;
return false;}if(ry.aEY===8){ry.aEc=(ry.aEc+(aEa>>1))%1024;var ge=aEa-aEa%2;
aEa=aEa%2;aEZ=aEZ.slice(ge,ge+2);}ax.dd(ry,aEZ,aEa);return true;};this.aEd=function(ry,aEZ,aEa){
var f8=aD.data=new a5W();f8.spawningSeed=ry.spawningSeed;if(ry.aEY<7){
f8.gameMode=1;f8.numberTeams=ry.aEY+2;}else if(ry.aEY===9){f8.gameMode=f8.isZombieMode=1;
f8.numberTeams=2;}else{f8.gameMode=0;f8.battleRoyaleMode=ry.aEY===7?0:(ry.aEY===10?1:2);
}f8.selectedPlayer=aEa;f8.isContest=ry.aEe;f8.mapType=bS.aEf(ry.el)?0:1;bS.aEg(f8,ry.el);
f8.mapSeed=ry.mapSeed;var aEh=f8.humanCount=aEZ.length;f8.selectableSpawn=f8.gameMode===1||aEh<100;
f8.colorsData=new Uint32Array(aEh);f8.playerNamesData=new Array(aEh);f8.a5u=new Uint32Array(aEh);
for(var aB=0;aB<aEh;aB++){f8.colorsData[aB]=aEZ[aB].color;f8.playerNamesData[aB]=aEZ[aB].username;
f8.a5u[aB]=aEZ[aB].tB;}if(f8.battleRoyaleMode===2){f8.elo=new Uint16Array(aEh);
for(aB=0;aB<aEh;aB++){f8.elo[aB]=aEZ[aB].elo;}}aa.setState(8);bS.a7(ry.el,f8.mapSeed);
aD.a5b();aD.a5Z=2;};function aEb(aEZ){if(!bn.aDl){return-1;}var f5=aEZ.length;var tB=bn.aDl.tB;
for(var aB=0;aB<f5;aB++){if(aEZ[aB].tB===tB){return aB;}}return-1;}}function aDr(){var e2=[
"","","","Admin","Clan Leader",S[124],"Clan Member","",S[116],"Wealthy Player","Patreon Member"
];var aEi=[bB.oE,bB.oE,bB.oF,bB.oj,bB.ok,bB.oV,bB.op,bB.oF,bB.pB,bB.oz,bB.p8];var aEj=[
[1],[1],[1.2],[1.4,1.2],[1.7,1.4,1.2],[1.4,1.2],[1.4,1.2],[1.2],[1.4,1.2],[1.4,1.2],[1.4,1.2]
];var aEk=["Your account is too new!","The server couldn't process your request.","Spam detected!",
"You are muted!","Player couldn't be found.","You don't have permission for this operation!",
"Not enough gold!","Action cancelled!","User received this punishment already!",
"Lobby restarts in 2 minutes!","Lobby restarts in 10 seconds!"];this.s5=function(aEl){
var aEm;if(aEl.id<5){aEm="@"+bF.tG.a0I(aEl.tB,5);}if(aEl.id===0){return aEm+": "+aEl.r;
}if(aEl.id===1){var a1l="@"+bF.tG.a0I(aEl.target,5);if(aEl.aEn===0){if(aEl.value>=32768){
return aEm+S[68]+(aEl.value-32768+1)+" gold against "+a1l+" to weaken the latter's admin position. 📉";
}return aEm+S[68]+(aEl.value+1)+" gold for "+a1l+" to strengthen the latter's admin position. 💪";
}else if(aEl.aEn===1){return aEm+" sent "+Math.floor(aEl.value/100)+" 🧈 gold to "+a1l+".";}
return aEm+S[68]+(aEl.value/10).toFixed(1)+" points for "+a1l+" to acknowledge the latter as clan leader. ✅";
}if(aEl.id===2){if(aEl.aEn===0){return aEm+" was 🔇 muted for 1 Hour.";
}if(aEl.aEn===1){return "The username of "+aEm+" was ✂️ redacted. Duration: 1 Day";
}return aEm+" 👢 was kicked.";}if(aEl.id===3){
return aEm+bo.eF(aEl.aEn,bo.e8[aEl.aEn][aEl.value])+"@"+bF.tG.a0I(aEl.target,5)+bo.eH(aEl.aEn,bo.e8[aEl.aEn][aEl.value]);
}if(aEl.id===4){
return aEm+bo.eF(5,bo.e8[5][aEl.aEn])+"@"+bF.tG.a0I(aEl.target,5)+bo.eH(5,bo.e8[5][aEl.aEn]);
}if(aEl.id===5){return aEk[aEl.aEn];}if(aEl.id===6){
return "You are about to mention "+aEl.value+" player"+(aEl.value===1?"":"s")+". This action will cost "+(Math.max(10*aEl.value,10)/100).toFixed(2)+" Gold. Proceed? (yes / no)";
}if(aEl.id===7){return aEl.r;
}};this.s4=function(aEl,aEo){return{aEl:aEl,r:aEo,aEp:0,fontSize:1,s8:0,aEq:aEl.id?bB.oi:bB.o0};};
this.uR=function(player,rw){return(rw===2?"("+(player.elo/10).toFixed(1)+") ":"")+player.username;
};this.uS=function(uT){return aEi[uT];};this.aEr=function(uT,a4n){
if(uT<3||uT===7){return aEj[uT][0];}if(uT===4){return aEj[uT][a4n<1?0:a4n<10?1:2];
}return aEj[uT][a4n<10?0:1];};this.aEs=function(a4n){return a4n===0;};this.aEN=function(rw,tB){
var uN=bn.uM.uN;var uM=uN[rw];var f5=uM.length;for(var aB=0;aB<f5;aB++){if(tB===uM[aB].tB){
return uM[aB];}}for(var fP=0;fP<uN.length;fP++){if(rw===fP){continue;}uM=uN[fP];f5=uM.length;
for(aB=0;aB<f5;aB++){if(tB===uM[aB].tB){return uM[aB];}}}return null;};this.uU=function(ql){
if(!bn.aDl){return false;}return ql.tB===bn.aDl.tB;};this.aEt=function(uM,aEu,aEv){
var a1i=[];loop:for(var aB=aEu;aB<aEv;aB++){var a1j=bA.rs.a1k(uM[aB].username);
if(!a1j){continue;}for(var fP=a1i.length-1;fP>=0;fP--){if(a1j===a1i[fP].name){
a1i[fP].gY++;continue loop;}}a1i.push({name:a1j,gY:1});}a1i.sort(function(fO,fP){
return fP.gY-fO.gY;});if(a1i.length===0){return "";}var qa=a1i[0].name+": "+a1i[0].gY;
for(aB=1;aB<a1i.length;aB++){qa+=S[14]+a1i[aB].name+": "+a1i[aB].gY;
}return qa;};this.aEw=function(uT,a4n,aE2){if(e2[uT].length===0){return "Rank: "+(a4n+1);
}return e2[uT]+S[139]+(a4n+1)+((uT!==3&&aE2<100)?S[14]+(e2[3]+S[139]+(aE2+1)):"");
};this.aEx=function(tB){
var rz=bn.y.rz;for(var aB=0;aB<rz.length;aB++){aEy(rz[aB].s0,tB);}aEy(bn.message.aEz(),tB,1);
bn.s9.aEx(tB);};function aEy(s0,tB,aF0){for(var fP=s0.length-1;fP>=0;fP--){
var ql=s0[fP];if(ql.id===0&&ql.tB===tB){ql.r=S[104];if(aF0){ql.aF1=1;}}}}}function aDu(){var sc=0;
var aF2=0;var aF3=0;var aF4=null;var aF5=null;this.uK=0;this.aF6=function(){if(!sc){return;
}if(aF2===aF7(aF5)&&aF3===aF5.wn){return;}aF3=aF5.wn;aF4.show(-1,-1,aF8(aF5,0,1),1,1,aF5.color);
};this.uW=function(e,ql,aF9){var a9X=e.getBoundingClientRect();
this.show(a9X.left,a9X.top,ql,0,aF9);e.addEventListener(S[50],function remove(){
e.removeEventListener(S[50],remove);bn.uJ&&bn.uJ.sA(1);});this.uK=aF9;
};function aF8(ql,aF9,aFA){var qa=ql.username;qa+=S[14]+bn.lF.aEw(ql.uT,ql.a4n,ql.aE2);qa+=aFB(ql);
qa+="   IP: "+bF.tG.a0I(ql.aE3,2);qa+=S[14]+["🟥 Offline","🟩 Online"][aFA?aF2:aF7(ql,aF9)];
return qa;}function aF7(ql,aF9){if(aF9||bn.uM.aEN(ql.tB)){return(aF2=1);
}return(aF2=0);}function aFB(ql){var tb=ql.wn;if(tb<1000){return S[70]+tb;}tb=tb%1024;
if(tb<1000){return S[70]+tb+"k";}return S[70]+(tb-999)+"M";}this.show=function(fC,fE,ql,sg,aF9){
if(!aF4){aF4=new sZ();}aF5=ql;aF3=aF5.wn;aF4.show(fC,fE,aF8(ql,aF9),sg,0,aF5.color);
sc=1;};this.sA=function(sn){this.uK=0;if(aF4&&aF4.sA(sn)){sc=0;aF5=null;}};}
function aDs(){this.rz=new Array(4);this.rx=[0,0,1,0];this.aE7=0;this.aFC=[0,0];this.dd=function(){
for(var aB=0;aB<this.rz.length;aB++){this.rz[aB]=new aFD();}this.rx[0]=bj.eQ.data[158].value;
};this.aFE=function(){aFF(true);bn.aDn.dd();};this.aEU=function(){bn.aDn.aEU();
aFG();aFF(false);};function aFF(aFH){if(bn.y.aE7&&bn.y.rx[2]===1){t.a66(29).aFI();}bn.y.aE7=0;
t.a66(29).aFJ();t.a66(29).aFK();bn.uJ.aF6();}function aFG(){for(var aB=0;aB<bn.y.rz.length;aB++){
var ry=bn.y.rz[aB];if(ry.u5===0){ry.aFL=0;continue;}ry.aFM=Math.max(ry.aFM-ry.aFL%2,0);ry.aFL++;
}}this.aFN=function(rw){if(this.rx[0]!==rw){return;}if(this.rx[2]){return;}t.a66(29).aFO();
};}function aDw(){var aFP=0;var aFQ="";var aFR=0;var aFS=0;var aFT=0;this.a15=function(r){
if(aFP){aFP=0;var aFU=r.toLowerCase();if(aFU==="yes"||aFU==="y"){aFV(aFQ);return;
}aFW();return;}if(r.indexOf("@")<0){aFV(r);return;}var aFX=aFY(r);if(!aFX){aFV(r);return;}aFQ=r;
var g=aFZ(aFX);var aFa=aFb(aFX);if(aFc(aFX,aFa,r)){return;}if(aFa.length===0){if(aFS||aFd(aFX)){
aFe(g.length);}else{aFV(r);}return;}if(aFX.length===aFT){aFV(r);return;}aFf(g,aFa);
aFe(g.length);};function aFV(aEo){b0.aFg.aFh(3,aEo);}function aFW(){bn.message.aES({id:5,aEn:7});
}function aFe(gY){aFP=1;bn.message.aES({id:6,value:gY});}function aFd(aFX){var f5=aFX.length;
for(var aB=0;aB<f5;aB++){var i=aFX[aB];if(i==="@all"||i==="@everyone"){return 1;}}return 0;
}function aFZ(aFX){var f5=aFX.length;var aFi=[0,0,0,0];for(var aB=0;aB<f5;aB++){var i=aFX[aB];
for(var fO=0;fO<4;fO++){if(i===S[122]+(fO+1)){aFi[fO]=1;}}}aFS=bA.r1.a3X(aFi);if(aFS%4===0){
return bA.r1.a3p(bn.uM.uN);}for(fO=0;fO<4;fO++){if(aFi[fO]){aFi[fO]=bn.uM.uN[fO];}else{
aFi[fO]=[];}}return bA.r1.a3p(aFi);}function aFb(aFX){var aFa=[];aFR=0;aFT=0;var f5=aFX.length;
for(var aB=0;aB<f5;aB++){var i=aFX[aB];var lL=i.length;if(bA.rs.startsWith(i,"@[")){
if(lL<=9&&bA.rs.a4N(i,"]")){aFa.push({id:0,fX:i.substring(2,lL-1).toUpperCase()});
}continue;}if(lL===6){if(bA.rs.startsWith(i,S[122])){
continue;}aFT++;aFa.push({id:1,fX:bG.tG.xF(i.substring(1),5)});continue;
}if(lL>1&&lL<5){var aFj=b7.data.aDO(i.substring(1));if(aFj>=0){aFa.push({id:2,fX:aFj,eC:aB});
aFR=1;}}}return aFa;}function aFc(aFX,aFa,r){if(!aFR){return 0;}var f5=aFa.length;
for(var aB=0;aB<f5;aB++){if(aFa[aB].id===2){r=r.replace(aFX[aFa[aB].eC],"@"+aFa[aB].fX);
}}aFQ=r;aFP=1;aFV(r.slice(0,126)+"|");return 1;}function aFf(g,aFa){var lL=aFa.length;
if(lL===0){return g;}var f5=g.length;loop:for(var aB=f5-1;aB>=0;aB--){for(var fO=0;fO<lL;fO++){
if(aFa[fO].id===0){if(aFa[fO].fX===bA.rs.a1k(g[aB].username)){continue loop;
}continue;}if(aFa[fO].id===1){if(aFa[fO].fX===g[aB].tB){continue loop;}continue;}}g[aB]=g[--f5];
g.pop();}}function aFY(r){var aFk=new RegExp("\\B@[-\\w\\[\\]]+","g");return r.match(aFk);
}this.aFl=function(r){var aFX=aFY(r);if(!aFX){return r;}var a5=new RegExp("^[0-9]+$");
var f5=aFX.length;for(var aB=0;aB<f5;aB++){var i=aFX[aB].substring(1);var lL=i.length;
if(lL>=1&&lL<=3&&a5.test(i)){var aFj=parseInt(i,10);if(!isNaN(aFj)&&aFj>=0&&aFj<b7.data.g.length){
r=r.replace("@"+i,"@"+b7.data.g[aFj]);}}}return r;};}function aDv(){var aFm;var aFn=[];var aFo=-1;
var aFp=0;var aFq=0;this.aES=function(aEl){if(aEl.id===2&&aEl.aEn===3){bn.lF.aEx(aEl.tB);
return;}var ql=bn.lF.s4(aEl,bn.lF.s5(aEl));if(aEl.id===5||aEl.id===6){t.a66(29).aFr().s7(ql);
if(aEl.id!==5){return;}}var aFs=bf.eT<aFp+20000;if(aFo===aFn.length-1||!aFs){
aFo=aFn.length;}aFn.push(aEl);!bj.eQ.data[14].value&&aEl.id!==7&&bp.play();
if(!aFm){return;}if(aFq&&(bj.eQ.data[13].value||aFs)){aFm.sM(aFn.length);
}else{aFt();}};this.show=function(){aFu();};function aFv(){aFp=bf.eT;if(this.ua===3){
aFu();}else{aFo=(aFn.length+aFo+2*this.ua-1)%aFn.length;aFt();}}function aFt(){if(aFn.length===0){
return;}aFq=0;aFm&&aFm.ud();aFm=new uX(aFv);aFm.sM(aFo,aFn.length);aFm.show(aFn[aFo]);
bn.message.resize();}function aFu(){aFq=1;aFm&&aFm.ud();aFm=new ue(aFt);aFm.sM(aFn.length);
aFm.show();bn.message.resize();}this.sA=function(){aFo=aFn.length-1;aFm&&aFm.ud();aFm=null;
};this.resize=function(){aFm&&aFm.resize();};this.aEz=function(){return aFn;};}function aDt(){
var aFw=null;var aFx=null;var aFy=0;var aFz=0;var aG0=null;this.aG1=function(e,ql){aFy=1;
aFx=ql;aFw=new uf([new w(L(129),aG2,ql.uT===0?1:0),new w(L(130),aG3,aG4()),new w(L(131),aG5,0)]);
aG0={clientX:e.clientX,clientY:e.clientY};aG6(aG0.clientX,aG0.clientY,1);};this.a37=function(code){
if(t.tD!==29){return false;}if(!aFx){return false;}if(code.length<1){return true;}if(code===S[39]){
this.sA();return true;}if(!bA.rs.startsWith(code,"Numpad")&&!bA.rs.startsWith(code,"Digit")){
return true;}var fX=parseInt(code[code.length-1],10);if(isNaN(fX)){return true;}if(aFy===0){
this.aG1(aG0,aFx);return true;}if(!aFw){return false;}if(aFy===1){if(fX<=1){aG2();}else if(fX===2){
aG3();}else{aG5();this.sA();}return true;}aG7(aFz,bL.iD(fX-1,0,bo.e8[aFz].length-1));
this.sA();return true;};function aG2(){if(aFx.uT===0){return;}bn.uj.sA();
t.u(8,29,new tE(25,{tF:0,tB:bF.tG.a0I(aFx.tB,5),tC:0},29));}function aG8(){var fC=aFw.fC;
var fE=aFw.fE;bn.uj.sA();aFw=new uf([new w("Kick User",function(){aG7(0,0);},aG9(0,0)),
new w("Block Chat",aGA,aG9(1,0)),new w("Censor Username",aGB,aG9(2,0))
]);aG6(fC,fE);aFy=2;aFz=1;}function aG9(id,eC){if(!bn.aDl){return 1;}if(bn.lF.uU(aFx)){
return 1;}var eB=aFx.a4n;var aE2=bn.aDl.aE2;if(aE2>=eB){return 1;}if(1-bo.eA(id,aE2,eC)){
return 1;}if(aFx.uT===4){if(eB>=50){return+(aE2>=eB);}if(eB>=20){return+(aE2>=(eB/2));
}return+(aE2>=(eB/3));}return 0;}function aG4(){if(!bn.aDl){return 1;}if(bn.lF.uU(aFx)){return 1;
}return 0;}function aGC(){if(!bn.aDl){return 1;}if(bn.lF.uU(aFx)){return 1;}if(bn.aDl.aE2>=100){
return 1;}if(bn.aDl.aE2>=aFx.a4n){return 1;}return 0;}function aG3(){var fC=aFw.fC;
var fE=aFw.fE;bn.uj.sA();var aGD=aG4();aFw=new uf([new w(bo.e8[5][0],function(){aG7(5,0);},aGD),
new w(bo.e8[5][1],function(){aG7(5,1);},aGD),new w(bo.e8[5][2],function(){aG7(5,2);},aGD),
new w(bo.e8[5][3],function(){aG7(5,3);},aGD)]);aG6(fC,fE);aFy=2;
aFz=2;}function aG5(){if(t.tD===29){t.a2H().aDm(bF.tG.a0I(aFx.tB,5));}}function aG7(id,value){
if(id===5){b0.aGE.aGF({tF:3,tB:bF.tG.a0I(aFx.tB,5),value:value});}}function aGA(){var fC=aFw.fC;
var fE=aFw.fE;bn.uj.sA();aFw=new uf([new w(bo.e8[1][0],function(){aG7(1,0);},aG9(1,0)),
new w(bo.e8[1][1],function(){aG7(1,1);},aG9(1,1)),
new w(bo.e8[1][2],function(){aG7(1,2);},aG9(1,2)),
new w(bo.e8[1][3],function(){aG7(1,3);},aG9(1,3)),
new w(bo.e8[1][4],function(){aG7(1,4);},aG9(1,4))
]);aG6(fC,fE);aFy=3;aFz=1;}function aGB(){var fC=aFw.fC;
var fE=aFw.fE;bn.uj.sA();aFw=new uf([new w(bo.e8[2][0],function(){aG7(2,0);},aG9(2,0)),
new w(bo.e8[2][1],function(){aG7(2,1);},aG9(2,1)),
new w(bo.e8[2][2],function(){aG7(2,2);},aG9(2,2))
]);aG6(fC,fE);aFy=3;aFz=2;}function aGG(){var fC=aFw.fC;
var fE=aFw.fE;bn.uj.sA();aFw=new uf([new w(bo.e8[3][0],function(){aG7(3,0);},aG9(3,0)),
new w(bo.e8[3][1],function(){aG7(3,1);},aG9(3,1)),
new w(bo.e8[3][2],function(){aG7(3,2);},aG9(3,2))
]);aG6(fC,fE);aFy=3;aFz=3;}function aGH(){var fC=aFw.fC;
var fE=aFw.fE;bn.uj.sA();aFw=new uf([new w(bo.e8[4][0],function(){aG7(4,0);},aG9(4,0)),
new w(bo.e8[4][1],function(){aG7(4,1);},aG9(4,1)),
new w(bo.e8[4][2],function(){aG7(4,2);},aG9(4,2)),
new w(bo.e8[4][3],function(){aG7(4,3);},aG9(4,3)),
new w(bo.e8[4][4],function(){aG7(4,4);},aG9(4,4))]);aG6(fC,fE);aFy=3;aFz=4;
}function aG6(fC,fE,ul){aFw.show(fC,fE,ul);bn.uJ.show(aFw.fC,aFw.fE,aFx,1);}this.sA=function(){
aFy=0;aFw&&aFw.sA();aFw=null;bn.uJ.sA();};}function aFD(){this.u5=0;this.el=0;this.mapSeed=0;
this.aEY=0;this.aGI=0;this.aGJ=0;this.aGK=0;this.aEe=0;this.aFM=0;this.spawningSeed=0;this.a2L=0;
this.aEc=0;this.s0=[];this.s1=1048575;this.aFL=0;this.aGL=[{el:0,mapSeed:0,aEY:0,eT:100,aEe:0},
{el:1,mapSeed:0,aEY:1,eT:200,aEe:0},{el:2,mapSeed:0,aEY:2,eT:300,aEe:0},
{el:3,mapSeed:0,aEY:3,eT:400,aEe:0},{el:0,mapSeed:0,aEY:9,eT:500,aEe:0},
{el:1,mapSeed:0,aEY:10,eT:600,aEe:0},{el:2,mapSeed:0,aEY:8,eT:700,aEe:0},
{el:3,mapSeed:0,aEY:3,eT:800,aEe:0}];}function aDx(){var aGM=[];var tQ=[];var aGN=[];
this.ud=function(){for(var aB=0;aB<tQ.length;aB++){tQ[aB].onclick=tQ[aB].onmouseover=null;
}tQ=null;aGN=null;};this.transform=function(ql){var qY=document.createElement(S[0]);
var aGO=aGP(ql);for(var aB=0;aB<aGO.length;aB++){qY.appendChild(aGO[aB]);
}if(ql.aEl.id===0){qY.vx143=ql.aEl;aGN.push(qY);}qY.style.margin="0.6em 0.6em";
ql.s8&&(qY.style.marginLeft=qY.style.marginRight=S[7]);qY.style.font=S[7];
var aGQ=ql.aEl.id>0;ql.aEp&&(qY.style.fontWeight=S[37]);aGQ&&(qY.style.paddingLeft="0.7em");
aGQ&&(qY.style.fontStyle="italic");qY.style.fontSize=ql.fontSize.toFixed(2)+"em";
return qY;};function aGP(ql){var r=ql.r;var aGO=[];while(true){var ed=aGR(r,0);
if(ed===-1){aGO.push(aGS(r,ql));break;}if(ed===0){aGO.push(aGT(r.substring(1,6),ql,ed));
}else{aGO.push(aGS(r.substring(0,ed),ql));aGO.push(aGT(r.substring(ed+1,ed+6),ql,ed));
}r=r.substring(ed+6);}return aGO;}function aGT(qa,ql,ed){var aE4=aGU(qa);
if(ed===0&&ql.aEl.id===0&&ql.s8){ql.fontSize=bn.lF.aEr(aE4.uT,aE4.a4n);ql.aEp=bn.lF.aEs(aE4.a4n);
}var rr=document.createElement(S[18]);rr.textContent=aGV(aE4,ql,ed);rr.style.display=S[51];
rr.style.color=bn.lF.uS(aE4.uT);rr.style.cursor=S[33];rr.style.margin="0";rr.style.font=S[7];
rr.style.minWidth=rr.style.minHeight=S[17];bn.lF.uU(aE4)&&(rr.style.textDecoration=S[31]);
if(aE4.uV){rr.style.textDecorationLine=S[31];rr.style.textDecorationStyle=S[95];
}bn.lF.aEs(aE4.a4n)&&(rr.style.fontWeight=S[37]);rr.onclick=function(e){bn.uj.aG1(e,aE4);};
!bJ.rL()&&(rr.onmouseover=function(e){bn.uJ.uW(e.target,aE4);});
tQ.push(rr);return rr;}function aGV(aE4,ql,ed){
if(aE4.aGW){aE4.aGW--;var aGX=(ql.aEl.id===2||((ql.aEl.id===3||ql.aEl.id===4)&&ed!==0));
return aE4.username+(aGX?" ("+aE4.aED+")":"");
}if(ql.aEl.aF1){return S[56]+bF.tG.a0I(aE4.tB,2);}return aE4.username;
}function aGS(r,ql){var rr=document.createElement(S[18]);rr.textContent=r;rr.style.color=ql.aEq;
rr.style.margin="0";rr.style.font=S[7];return rr;}function aGU(qa){var tB=bG.tG.xF(qa,5);
var aE4=bn.uM.aEN(tB);if(aE4){aGM.push(aE4);while(aGM.length>75){aGM.shift();}return aE4;
}var aDz=bn.uM.aDz;for(var aB=aDz.length-1;aB>=0;aB--){aE4=aDz[aB];if(tB===aE4.tB){aGM.push(aE4);
return aE4;}}for(aB=aGM.length-1;aB>=0;aB--){aE4=aGM[aB];if(tB===aE4.tB){aGM.push(aE4);
return aE4;}}return bn.uM.aE5(tB,qa,1,999999,999999,0,0,0,0);}function aGR(r,position){
var aB=r.indexOf("@",position);if(aB<0){return-1;}var qa=r.substring(aB+1,aB+6);
if(qa.length!==5){return aGR(r,aB+1);}if(bA.rs.startsWith(qa,"room")){
return aGR(r,aB+1);}var aGY=new RegExp("^[a-zA-Z0-9_-]+$");if(!aGY.test(qa)){return aGR(r,aB+1);
}var aGZ=r.substring(aB+6,aB+7);if(aGZ.length!==1){return aB;}var aGa=new RegExp("^[ :!.]+$");
if(!aGa.test(aGZ)){return aGR(r,aB+1);}return aB;}this.aGb=function(aGc){
if(!aGc){return;}if(!((aGc.id===2&&aGc.aEn===1)||(aGc.id===3&&aGc.aEn===2))){
return;}var tB=aGc.id===3?aGc.target:aGc.tB;
if(bn.uM.aEN(tB)){return;}var aEC=S[56]+bF.tG.a0I(tB,2);var aDz=bn.uM.aDz;
for(var aB=aDz.length-1;aB>=0;aB--){aGd(aDz[aB],aEC,tB);}for(aB=aGM.length-1;aB>=0;aB--){
aGd(aGM[aB],aEC,tB);}};function aGd(aE4,aEC,tB){if(tB===aE4.tB&&!aE4.aED){
aE4.aED=aE4.username;aE4.username=aEC;}}this.aEE=function(tB){var aGe=aGN;
for(var aB=aGe.length-1;aB>=0;aB--){var f8=aGe[aB];if(f8.vx143.tB===tB){while(f8.firstChild){
t.removeChild(f8,f8.firstChild);}var aGO=aGP(bn.lF.s4(f8.vx143,bn.lF.s5(f8.vx143)));
for(var fO=0;fO<aGO.length;fO++){f8.appendChild(aGO[fO]);
}aGe.splice(aB,1);}}};this.aEx=function(tB){var aGe=aGN;for(var aB=aGe.length-1;aB>=0;aB--){
var f8=aGe[aB];if(f8.vx143.tB===tB){while(f8.firstChild){t.removeChild(f8,f8.firstChild);
}f8.vx143.r=S[104];var aGO=aGP(bn.lF.s4(f8.vx143,bn.lF.s5(f8.vx143)));
for(var fO=0;fO<aGO.length;fO++){f8.appendChild(aGO[fO]);
}aGe.splice(aB,1);}}};}function cP(){var aGf;var aGg;var aGh;this.i=0;this.j=0;this.fE=0;
this.gap=0;this.dd=function(){aGf=-1;aGg=bB.o0;aGh="rgba(255,255,255,0.16)";this.rS=new Array(7);
this.j=Math.floor((a0.a1.iE()?0.123:0.093)*h.iF);this.i=Math.floor((a0.a1.iE()?3.96:4.2)*this.j);
this.gap=Math.floor(0.025*this.i);var aGi=Math.floor(0.26*this.j);var aGj=bA.qt.sk(1,aGi);
this.rS[0]={fC:0,fE:0,i:Math.floor(0.6*this.i-this.gap/2),j:this.j,aEo:"Multiplayer",
font:aGj,aGk:"rgba(22,88,22,0.8)",fontSize:aGi};aGi=Math.floor(0.18*this.j);aGj=bA.qt.sk(1,aGi);
this.rS[1]={fC:0,fE:0,i:this.i-this.rS[0].i-this.gap,j:this.j,aEo:"Single Player",
font:aGj,aGk:"rgba(22,88,88,0.8)",
fontSize:aGi};this.rS[2]={fC:0,fE:0,i:this.i,j:Math.floor(0.3*this.j),aEo:"",
font:this.rS[1].font,aGk:S[78],fontSize:this.rS[1].fontSize};this.rS[3]={
fC:0,fE:0,i:this.i,j:this.j,aEo:S[118],font:this.rS[0].font,aGk:S[46],fontSize:this.rS[0].fontSize
};this.rS[4]={fC:0,fE:0,i:this.i,j:Math.floor(0.3*this.j),aEo:"The game was updated!",
font:this.rS[1].font,aGk:S[78],fontSize:this.rS[1].fontSize
};this.rS[5]={fC:0,fE:0,i:this.rS[0].i,j:Math.floor(0.8*this.j),aEo:S[106],
font:this.rS[0].font,aGk:S[80],fontSize:this.rS[0].fontSize
};this.rS[6]={fC:0,fE:0,i:this.rS[1].i,j:this.rS[5].j,aEo:S[118],font:this.rS[0].font,aGk:S[46],
fontSize:this.rS[0].fontSize};this.aAW();};this.aAW=function(){this.fE=Math.floor(0.54*h.j);
this.rS[0].fC=Math.floor(0.5*h.i-0.5*this.i);this.rS[1].fC=this.rS[0].fC+this.rS[0].i+this.gap;
this.rS[2].fC=this.rS[3].fC=this.rS[0].fC;this.rS[4].fC=this.rS[5].fC=this.rS[0].fC;
this.rS[6].fC=this.rS[1].fC;this.rS[0].fE=Math.floor(0.54*h.j);
this.rS[1].fE=this.rS[0].fE;this.rS[2].fE=Math.floor((h.j-this.rS[2].j-this.rS[3].j-this.gap)/2);
this.rS[3].fE=this.rS[2].fE+this.rS[2].j+this.gap;
this.rS[4].fE=Math.floor((h.j-this.rS[4].j-this.rS[5].j-this.gap)/2);
this.rS[5].fE=this.rS[6].fE=this.rS[4].fE+this.rS[4].j+this.gap;
};this.aGl=function(){aGm(0);aGm(1);};this.aGn=function(){
aGm(2);aGm(3);};this.aGo=function(){aGm(4);aGm(5);aGm(6);};this.a2Z=function(fC,fE,ml){
var aB=-1;if(aa.a2D()===0){aB=this.a33(fC,fE,0,2);}else if(aa.a2D()===3){
aB=this.a33(fC,fE,3,1);}else if(aa.a2D()===5){aB=this.a33(fC,fE,5,2);}if(aGf!==aB){aGf=aB;if(ml){
bf.dk=true;}}if(aB!==-1){aT.ru();return true;}return false;};this.a33=function(fC,fE,aGp,size){
for(var aB=aGp;aB<aGp+size;aB++){if(fC>=this.rS[aB].fC&&fE>=this.rS[aB].fE&&
fC<=this.rS[aB].fC+this.rS[aB].i&&fE<=this.rS[aB].fE+this.rS[aB].j){
return aB;}}return-1;};function aGm(aB){var button=aY.rS[aB];var fC=button.fC;
var fE=button.fE;var i=button.i;var j=button.j;vZ.fillStyle=button.aGk;vZ.fillRect(fC,fE,i,j);
if(aB===aGf){vZ.fillStyle=aGh;vZ.fillRect(fC,fE,i,j);}vZ.lineWidth=bc.zz;vZ.strokeStyle=aGg;
vZ.strokeRect(fC,fE,i,j);aGq(button);}function aGq(button){var fC=button.fC;var fE=button.fE;
var i=button.i;var j=button.j;bA.qt.textAlign(vZ,1);bA.qt.textBaseline(vZ,1);vZ.font=button.font;
vZ.fillStyle=aGg;vZ.fillText(button.aEo,Math.floor(fC+i/2),Math.floor(fE+j/2+0.1*button.fontSize));
}}function cQ(){var aGr;var aGs;var a88,aGt,aGu,aGv,aGw,aGx,aGy;
var a87;var aGz;var aH0;var aH1;var aH2=1;var aH3=0;var aH4=0;this.aH5=1;this.aH6=0;
this.aH7=0;this.dd=function(){aa.setState(6);aGr=0;aGs=1;aGx="rgba(0,220,120,0.4)";aGy=S[46];
this.resize();bf.dk=true;aH2=1;aH3=0;aH1=this.aH5-1;aH4=this.aH6===0?(l.dy?1:0):(this.aH6-1);
aH8(1);};this.resize=function(){aGt=Math.floor((a0.a1.iE()?0.5:0.25)*h.iF);
aGu=aGt+12;a88=Math.floor(0.125*aGt);aGw=a88*3;aGv=Math.floor(0.225*aGt);aGz=Math.floor(0.3*a88);
a87=bA.qt.sk(0,aGz);};function aH8(aH9){if(aH9){aH1=(aH1+1)%b0.y.aHA;}else{b0.y.close(aH1,3280);
if(aH2){aH2=0;}else{aH4=1-aH4;aH3=(aH3+1)%2;if(aH3===0){aH1=(aH1+1)%b0.y.aHA;b0.y.close(aH1,3280);
}}}aH0=bf.eT;aZ.aH7=aH4;if(b0.y.aHB(aH1,4,1)){b0.aFg.aHC(aH1);}}this.a2K=function(a28){
if(a28===aH1){aHD();}};function aHE(){if(bf.eT>aH0+12000){aHD();}}function aHD(){
if(aH1===0){o.a2O(3249);return;}aH8();}this.hI=function(fC,fE){var nQ=Math.floor((h.i-aGu)/2);
var nR=Math.floor(0.5*(h.j-bc.gap-a88-aGv))+a88+bc.gap;if(fC>nQ&&fC<nQ+aGu&&fE>nR&&fE<nR+aGv){
this.a3E();aY.a2Z(fC,fE,false);return true;}return false;};this.a3E=function(){
b0.y.a2P(3260);t.y.z();};this.eY=function(){if(aa.a2D()!==6){return;}aHE();aHF();};function aHF(){
aGr+=aGs*0.07*(aGr<16?(5+aGr):aGr>84?105-aGr:17);if(aGr>100){aGr=100;aGs=-1;}else if(aGr<0){
aGr=0;aGs=1;}aGx=S[81]+Math.floor(190-1.9*aGr)+","+Math.floor(120-1.2*aGr)+","+(0.4+0.004*aGr)+")";
aGy=S[81]+Math.floor(1.9*aGr)+","+Math.floor(1.2*aGr)+","+(0.8-0.004*aGr)+")";
bf.dk=true;}this.vY=function(){var fC=Math.floor((h.i-aGu)/2);
var fE=Math.floor(0.5*(h.j-bc.gap-a88-aGv));aHG(L(132),fE,3,aGr/100);
aHH(fC,fE+a88+bc.gap,aGu,aGv,L(39));};function aHH(fC,fE,i,j,aEo){vZ.fillStyle=bB.nv;
vZ.fillRect(fC,fE,i,j);vZ.lineWidth=3;vZ.strokeStyle=bB.o0;vZ.strokeRect(fC,fE,i,j);
var f5=Math.floor(0.3*j);bA.qt.textAlign(vZ,1);bA.qt.textBaseline(vZ,1);vZ.font=bA.qt.sk(0,f5);
vZ.fillStyle=bB.o0;vZ.fillText(aEo,Math.floor(fC+i/2),Math.floor(fE+j/2+0.1*f5));
}function aHG(title,fE,aAE,u5){vZ.fillStyle=aGy;aHI(fE,aAE,1);vZ.fill();vZ.fillStyle=aGx;
aHI(fE,aAE,u5);vZ.fill();vZ.strokeStyle=bB.o0;aHI(fE,aAE,1);vZ.stroke();aHJ(title,fE);}
function aHJ(aHK,fE){bA.qt.textAlign(vZ,1);bA.qt.textBaseline(vZ,1);vZ.font=a87;vZ.fillStyle=bB.o0;
vZ.fillText(aHK,Math.floor(0.5*h.i),Math.floor(fE+0.58*a88));}function aHI(fE,aAE,u5){
var nQ=Math.floor((h.i-aGt)/2)+aGw;var nd=nQ+Math.floor(u5*(aGt-2*aGw));vZ.lineWidth=aAE;
vZ.beginPath();vZ.moveTo(nQ,fE);vZ.lineTo(nd,fE);vZ.lineTo(Math.floor(nQ-aGw+u5*aGt),fE+a88);
vZ.lineTo(nQ-aGw,fE+a88);vZ.closePath();}}function cR(){var a24=0;this.dd=function(){aY.dd();
a24=0;};this.setState=function(aHL){a24=aHL;};this.a2D=function(){return a24;};this.aHM=function(){
this.setState(8);t.x();};this.a37=function(e){if(!bS.xV){return false;}if(bf.eT<400){
return;}if(e.key===S[40]||e.key===S[39]){if(this.aHN()){return true;}if(e.key===S[40]){
if(a24===0){return true;}else if(a24===7){return true;}}}return false;};this.aHO=function(){
bZ.resize();};this.aHN=function(){if(bZ.sA()){return true;}return false;};this.hI=function(fC,fE){
if(!bS.xV){return;}if(bZ.hI(fC,fE)){return;}if(a24===6&&aZ.hI(fC,fE)){return;
}if(bY.hI(fC,fE)){return;}aT.hI(fC,fE);if(a24===0){}else if(a24===7){}};this.a2Z=function(fC,fE){
if(!aT.aAP){if(aY.a2Z(fC,fE,true)){return;}}aT.a2Z(fC,fE);};this.click=function(fC,fE){
aT.a2y();};this.a2c=function(fC,fE,deltaY){};this.aHP=function(){aY.aAW();
bf.dk=true;};this.vY=function(){if(a24===8||a24===10){return;}vZ.imageSmoothingEnabled=true;
this.z4();if(a24!==0){aT.vY();aO.vY();this.aHQ();bY.vY();}if(a24===0){
}else if(a24===6){aZ.vY();}bZ.vY();t.vY();};this.z4=function(){if(!bS.xV){vZ.fillStyle=bB.nr;
vZ.fillRect(0,0,h.i,h.j);return;}var aHR=h.i/bS.fG;var aHS=h.j/bS.fH;var ej=aHR>aHS?aHR:aHS;
vZ.setTransform(ej,0,0,ej,Math.floor((h.i-ej*bS.fG)/2),Math.floor((h.j-ej*bS.fH)/2));
vZ.drawImage(bS.xX,0,0);vZ.setTransform(1,0,0,1,0,0);vZ.fillStyle=bB.nv;
vZ.fillRect(0,0,h.i,h.j);};this.aHQ=function(){var fE=Math.floor(0.3*h.j);var canvas=ab.aHT(S[20]);
var i6=1.75*h.j/canvas.width;i6=(i6*canvas.width)<(0.98*h.i)?(0.98*h.i/canvas.width):i6;
vZ.globalAlpha=0.15;vZ.imageSmoothingEnabled=false;var fC=Math.floor(0.5*(h.i-i6*canvas.width));
fC=Math.floor(fC/i6);var a7M=Math.floor(fE-0.5*canvas.height*i6);
a7M=Math.floor(a7M/i6);vZ.setTransform(i6,0,0,i6,fC,a7M);vZ.drawImage(canvas,fC,a7M);
vZ.setTransform(1,0,0,1,0,0);vZ.globalAlpha=1;vZ.imageSmoothingEnabled=true;
};}function cr(){this.aEc=0;this.aHU=0;var aHV;var aHW;var aHX;var aHY;var aHZ;var aHa=0;
this.dd=function(ry,aEZ,aEa){t.x();bn.ud();aa.setState(10);aHY=ry;aHZ=aEZ;aHa=aEa;this.aEc=ry.aEc;
this.aHU=aEa;aHV=0;aHW=bf.eT+4500;b0.y.a2L=ry.a2L;if(b0.y.a2B===ry.a2L){console.log("direct pass");
aHX=0;}else{console.log("delayed pass");b0.y.close(b0.y.a2B,3247);aHX=2;if(b0.y.aHB(ry.a2L,5,2)){
b0.pN.aHb();}}aHc();};function aHd(){aHY=aHZ=null;aHa=0;}this.mj=function(){
if(aHX>0&&bf.eT>aHW){mF();}};function mF(){aHX--;aHW+=4500;if(bf.aHe===0&&bf.kN()===0){
b0.y.aHB(b0.y.a2L,5,2);}}this.aHf=function(){if(aa.a2D()!==10){return false;
}bn.aDo.aEd(aHY,aHZ,aHa);aHd();return true;};this.aHg=function(){if(aa.a2D()!==10){return;}aHV++;
if(aHV>=2){bn.aDo.aEd(aHY,aHZ,aHa);aHd();}};function aHc(){vZ.imageSmoothingEnabled=true;aa.z4();
aHh();}function aHh(){var canvas=ab.aHT(S[88]);var nc=(a0.a1.iE()?0.396:0.25)*h.iF/canvas.width;
vZ.setTransform(nc,0,0,nc,Math.floor((h.i-nc*canvas.width)/2),Math.floor((h.j-nc*canvas.height)/2));
vZ.imageSmoothingEnabled=false;
vZ.drawImage(canvas,0,0);vZ.setTransform(1,0,0,1,0,0);}}function cS(){var aHi;var canvas;
var a1N;var aHj;this.dd=function(){if(canvas===undefined){aHk();}};this.get=function(eC){
return canvas[eC];};this.aHT=function(name){for(var aB=a1N.length-1;aB>=0;aB--){if(a1N[aB]===name){
return canvas[aB];}}return aHj;};this.tf=function(){return aHi<=0;};this.aHl=function(){
aHi=0;aHm();};function aHk(){aHi=23;canvas=new Array(aHi);a1N=new Array(aHi);aHn();aHo();
aHp(0,"exit",6,"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
aHp(1,"victory",6,"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg==");
aHp(2,"defeat",6,S[25]);
aHp(3,"orders",6,"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");
aHp(4,"crown",4,"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");
aHp(5,S[100],6,"iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg==");
aHp(6,S[20],6,"iVBORw0KGgoAAAANSUhEUgAAAGMAAAAKAQMAAACaDnJEAAAABlBMVEUAAAD///+l2Z/dAAAAaklEQVQI12P4X1dvP/vvn3+JjxnOP2CA8ZLBPImERIOGxJZDzMoMPApg3gwgL1mZ4QyQV1NvD+T9g/EqbCQSWz6kfwbzEmrsgLwfMF6eOZB3J80YzKtLN56R+OdcmvE3kA11yYZA3jEwDwAD7zy1rz50OAAAAABJRU5ErkJggg==");
aHp(7,"youtube",7,S[25]);
aHp(8,"googleplay",3,"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");
aHp(9,"discord",7,"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
aHp(10,"insta",3,S[25]);
aHp(11,"emojis",4,S[25]);aHp(12,"flags",3,S[25]);aHp(13,"bestTeam",5,S[25]);
aHp(14,"bestPlayer",5,"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");
aHp(15,"zoom",6,"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
aHp(16,"apple",3,"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");
aHp(17,S[88],6,"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC");
aHp(18,"target",7,"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg==");
aHp(19,"members",7,"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC");
aHp(20,"hourglass",7,"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC");
aHp(21,"stalemate",6,"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII=");
aHp(22,S[87],8,"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEW+AAHAIiMAiAfESkosjSx4cMRcnFzPgoGbmNGow6e7ut7ftLTX4dbf3+7u3d7////Ro4BnAAACgklEQVRIx+3VMYgaQRQA0D1SpEizcv0Vg1h7XHHFQQpZUqVdWIRrRBaEQCIWKSxSBWRBDoIIC0J6YZHjCgshdsLCwvYB2cLiCkHLQ5zMz3cl7ow6O1OkSJF/V8lj5s+fP38N43/8s/GqoMUK17fjcVkDttvT9epRAwIGW17rQWBjUwmTXz+Hc2BPSugNbdsZwbal2t3eRRdgORk3TSV0kjTRydOlAtrDID0UTEwFtKtJksqmCjodL5jPAbamAu6s08EEHtVwf6gXLWiPgJW1YCeR7i1CLL3sOEfQAaYHMcuyLvykBb2E6cERrLitL24KEogV55v9btmSQGxMbufXa8hekwjnQhnfAvdGBFfF9slWvJhi3y2kTZGt+GYNXN8dH/o52/kK6CBrkmO44FMMG7EEdvnmmUKvFB/qL8J7bus7oDXynTXPFzxL/nKdQpDBNKd2y7z9ARAS8vGQ9NFdP+y2arPnz1OgUZ2QRvxyHt7DwsSbA/wP/QohpXhbkHT4tnyVjgLatwghxRjGrRvTPIUJu5lCFAHdrYfxHthqtZw0Tzo8YF8QNaKonzpS2g8ldgI9/HVWL1r79TA+7KUAnY7zFTuSuoSLUoSJiHCIY2qOQw3rzEXRdRuDiIfV/eBL6yxGse76hvAMYvyj/jdyGtYBOl4CfiP0B+E7ci7+QC9IYNOzrKJbIXnQwWFLZxLDQ3xV1He1IA1rhKihA2GF6MAqzIgm3NSI3ta0rgcT6GtBfPlU69S7i+5pQax47sUcICaZX3EjG0+byt+FXUXJD/BBUR8jG9+a0FEU0uDmfGjpQDs4evhSiB//vOY1hK9RTwtiljnXzc+eIO9yDOGjTuXwN2h8zFYEBekAAAAAAElFTkSuQmCC");
}function aHn(){aHj=document.createElement(S[4]);aHj.width=1;
aHj.height=1;for(var aB=aHi-1;aB>=0;aB--){canvas[aB]=aHj;}}function aHp(eC,name,aHq,qa){
a1N[eC]=name;canvas[eC]=new Image();canvas[eC].onload=function(){aHr(eC,aHq);
aHs();};canvas[eC].onerror=function(e){console.error("Error loading image at index",eC,"Error:",e);
aHs();};canvas[eC].src=S[96]+qa;}function aHr(eC,aHq){var a4t=null;var a4s;if(aHq===7){
a4s=bA.a3K.a4v;}else if(aHq===8){a4s=bA.a3K.a4y;a4t=0.1;}else if(aHq===3){a4s=bA.a3K.a4w;a4t=0.06;
}else if(aHq===5){a4s=bA.a3K.a4z;}else if(aHq===6){a4s=bA.a3K.a4u;}else if(aHq===4){a4s=bA.a3K.a50;
}canvas[eC]=bA.a3K.a4r(canvas[eC],a4s,a4t);}function aHs(){aHi--;aHm();}function aHm(){if(aHi!==0){
return;}aHi=-1;aHo();bf.dk=true;aHt();if(t.tD===5){t.a2H().aHu.resize();}}function aHo(){aL.a6H();
bY.aDe([canvas[8],canvas[16],canvas[9],canvas[9],canvas[10]],[a0.id!==2,a0.id!==1,true,true,true]);
aj.xa=new zW();aj.xa.dd();
aw.de();}function aHt(){canvas[7]=aHj;canvas[8]=aHj;canvas[9]=aHj;canvas[10]=aHj;}}function cT(){
var aHv=[[100,100,100],[144,0,0],[0,128,0],[0,0,144],[128,128,0],[128,0,128],[0,128,128],[196,196,196],[0,0,0]];
var aHw=[[4,4,4,20],[4,0,0,27],[0,4,0,31],[0,0,4,27],[4,4,0,31],[4,0,4,31],[0,4,4,31],[4,4,4,14],[4,4,4,13]];
var aHx;var aHy;var aHz;
var aI0;var aI1;var aI2;var aI3;var aI4;var aI5;var aI6;var aI7=208;var aI8=224;var aI9=248;
this.f7=new Int32Array(4);this.de=function(){var f7=this.f7;f7[0]=-4*bS.fG;f7[1]=4;f7[2]=-f7[0];
f7[3]=-f7[1];};this.dd=function(){if(!aHx){aHx=new Uint8Array(aD.f2);aHy=new Uint8Array(aD.f2);
aHz=new Uint8Array(aD.f2);aI0=new Uint8Array(aD.f2);aI1=new Uint8Array(aD.f2);
aI2=new Uint8Array(aD.f2);aI3=new Uint8Array(aD.f2);aI4=new Uint8Array(aD.f2);
aI5=new Uint8Array(aD.f2);aI6=new Uint8Array(aD.f2);this.a9N=new Uint8Array(aD.f2);}else{
aHx.fill(0);aHy.fill(0);aHz.fill(0);aI0.fill(0);aI1.fill(0);aI2.fill(0);aI3.fill(0);aI4.fill(0);
aI5.fill(0);aI6.fill(0);this.a9N.fill(0);}if(aD.hz){aIA();}else{if(aD.data.colorsType===0){
if(aD.data.selectableColor){aIB(0,aD.kQ);aIC(aD.kQ,aD.f2);}else{aIC(0,aD.f2);}}else{aIB(0,aD.f2);
}}aID();aIE();this.aIF();aIG();aIH();};this.a8F=function(player){var g=bO.fe;g[0]=aHx[player];
g[1]=aHy[player];g[2]=aHz[player];return g;};function aIC(jg,ni){for(var aB=jg;aB<ni;aB++){
aHx[aB]=4*bL.fW(64*ay.random(),ay.value(100));aHy[aB]=4*bL.fW(64*ay.random(),ay.value(100));
aHz[aB]=4*bL.fW(64*ay.random(),ay.value(100));}}function aIB(jg,ni){
var colorsData=aD.data.colorsData;for(var aB=jg;aB<ni;aB++){var fX=colorsData[aB];
aHx[aB]=4*(fX>>12);aHy[aB]=4*((fX>>6)&63);aHz[aB]=4*(fX&63);}}function aID(){var aB,f8;
for(aB=aD.f2-1;aB>=0;aB--){f8=bL.fW(aHx[aB]+aHy[aB]+aHz[aB],3);aHx[aB]+=aII(f8-aHx[aB],2);
aHy[aB]+=aII(f8-aHy[aB],2);aHz[aB]+=aII(f8-aHz[aB],2);aHx[aB]-=aHx[aB]%4;aHy[aB]-=aHy[aB]%4;
aHz[aB]-=aHz[aB]%4;}}function aIA(){var aBd=bg.aBd;for(var aB=aD.f2-1;aB>=0;aB--){
var ed=aBd[aB];var lL=bL.fW((aHw[ed][3]+1)*ay.random(),ay.value(100));
aHx[aB]=aHv[ed][0]+lL*aHw[ed][0];aHy[aB]=aHv[ed][1]+lL*aHw[ed][1];
aHz[aB]=aHv[ed][2]+lL*aHw[ed][2];}}function aIE(){var f5=aD.f2;var aIJ=aHx;var aIK=aHy;var aIL=aHz;
var aIM=aI0;for(var aB=0;aB<f5;aB++){aIJ[aB]+=aB>>7;aIK[aB]+=(aB>>5)&3;aIL[aB]+=(aB>>3)&3;
aIM[aB]=aB&7;}}function aIG(){var fo=40;var fq=60;var f5=aD.f2;var aIN=aI1;var aIO=aI2;var aIP=aI3;
var aIJ=aHx;var aIK=aHy;var aIL=aHz;for(var aB=0;aB<f5;aB++){var eB=aIJ[aB];var tb=aIK[aB];
var fP=aIL[aB];if(eB+tb+fP>=fq){aIN[aB]=Math.max(eB-fo,eB&3);aIO[aB]=Math.max(tb-fo,tb&3);
aIP[aB]=Math.max(fP-fo,fP&3);}else{aIN[aB]=eB+fo;aIO[aB]=tb+fo;aIP[aB]=fP+fo;}}}function aIH(){
var fo=88;var fq=3*256-80;var f5=aD.f2;var aIQ=aI4;var aIR=aI5;var aIS=aI6;var aIJ=aHx;var aIK=aHy;
var aIL=aHz;for(var aB=0;aB<f5;aB++){var eB=aIJ[aB];var tb=aIK[aB];var fP=aIL[aB];if(eB+tb+fP>=fq){
aIQ[aB]=eB-fo;aIR[aB]=tb-fo;aIS[aB]=fP-fo;}else{aIQ[aB]=Math.min(eB+fo,252+(eB&3));
aIR[aB]=Math.min(tb+fo,252+(tb&3));aIS[aB]=Math.min(fP+fo,252+(fP&3));
}}}this.aIF=function(){for(var aB=aD.f2-1;aB>=0;aB--){this.a9N[aB]=aHx[aB]+aHy[aB]+aHz[aB]<280?0:1;
}};this.z5=function(ej){return bL.fW(ej,4)%bS.fG;};this.z6=function(ej){return bL.fW(ej,4*bS.fG);
};this.yd=function(fC,fE){return Math.floor((fE*bS.fG+fC)*4);};this.yt=function(ej){
var f7=this.f7;return(this.aIT(ej+f7[0])||this.aIT(ej+f7[1])||this.aIT(ej+f7[2])||
this.aIT(ej+f7[3]));};this.fT=function(ej){var f7=this.f7;return(this.fA(ej+f7[0])||
this.fA(ej+f7[1])||this.fA(ej+f7[2])||this.fA(ej+f7[3]));};this.yr=function(ej,player){
var f7=this.f7;return(this.aIU(ej+f7[0],player)||this.aIU(ej+f7[1],player)||
this.aIU(ej+f7[2],player)||this.aIU(ej+f7[3],player));};this.gf=function(ej){
return aD0[ej+3]>=aI7;};this.yz=function(player,ej){return this.gf(ej)&&this.z2(player,ej);
};this.z2=function(player,ej){return player===this.ex(ej);};this.aIV=function(ej){
return aD0[ej+3]>=aI7&&aD0[ej+3]<aI8;};this.jb=function(ej){return aD0[ej+3]>=aI8&&aD0[ej+3]<aI9;
};this.ys=function(ej){var f7=this.f7;for(var aB=3;aB>=0;aB--){if(this.iJ(ej+f7[aB])){return true;
}}return false;};this.f0=function(ej){return this.gf(ej)||this.ew(ej);};this.iJ=function(ej){
return aD0[ej+3]===0&&aD0[ej+2]===2;};this.ew=function(ej){return aD0[ej+3]===0&&aD0[ej+2]===1;
};this.xi=function(ej){return aD0[ej+3]===0&&aD0[ej+2]===3;};this.fA=function(ej){
return aD0[ej+3]===0&&aD0[ej+2]===5;};this.aIT=function(ej){return aD0[ej+3]===0&&aD0[ej+2]>=3;
};this.en=function(ej){return((aD0[ej]>>1)<<8)+aD0[ej+1];};this.aIW=function(ej){return aD0[ej]&1;
};this.aIU=function(ej,player){return this.ew(ej)||this.gf(ej)&&player!==this.ex(ej);
};this.ex=function(ej){return 128*(aD0[ej]%4)+32*(aD0[ej+1]%4)+8*(aD0[ej+2]%4)+aD0[ej+3]%8;
};this.z0=function(ej){aIX(ej,1);
};this.aIY=function(ej){aIX(ej,2);};function aIX(ej,aIZ){aD0[ej]=0;aD0[ej+1]=0;aD0[ej+2]=aIZ;
aD0[ej+3]=0;aIa(ej);}this.ye=function(ej,player){aD0[ej]=aHx[player];aD0[ej+1]=aHy[player];
aD0[ej+2]=aHz[player];aD0[ej+3]=aI7+aI0[player];aIa(ej);};this.ga=function(ej,player){
aD0[ej]=aI1[player];aD0[ej+1]=aI2[player];aD0[ej+2]=aI3[player];aD0[ej+3]=aI8+aI0[player];
aIa(ej);};this.jc=function(ej,player){aD0[ej]=aI4[player];aD0[ej+1]=aI5[player];
aD0[ej+2]=aI6[player];aD0[ej+3]=aI9+aI0[player];aIa(ej);};function aIa(ej){if(bb.nq){return;}
var fC=ac.z5(ej);var fE=ac.z6(ej);bb.nq=fC>=ba.aCz[0]&&fC<=ba.aCz[2]&&fE>=ba.aCz[1]&&fE<=ba.aCz[3];
}}function cs(){var aIb=0;var aIc=2*32;var aId=new Uint16Array(aIc);this.dd=function(){
aIb=0;};this.eY=function(){if(aIb===0){return;}if(ag.mz[aD.ep]===0){aIb=0;return;
}if(ad.gC(aD.ep)===0){aIb=0;return;}aIe();};function aIe(){var aB,jZ,ih;for(aB=aIb-2;aB>=0;aB-=2){
jZ=aId[aB];if(jZ<aD.f2&&ag.mz[jZ]===0){wB(aB);continue;}ih=aId[aB+1];if(jZ>=aD.f2&&bs.aIf(aD.ep)||
jZ<aD.f2&&bs.aIg(aD.ep,jZ)){b8.hV.hc(ih,jZ);wB(aB);}}}function wB(a6L){aIb-=2;
for(var aB=a6L;aB<aIb;aB+=2){aId[aB]=aId[aB+2];aId[aB+1]=aId[aB+3];}}this.hd=function(jZ,ih){
if(aIh(jZ,ih)||aIb===aIc){return;}aId[aIb]=jZ;aId[aIb+1]=ih;aIb+=2;};function aIh(jZ,ih){
for(var aB=0;aB<aIb;aB+=2){if(aId[aB]===jZ){aId[aB+1]=Math.min(aId[aB+1]+ih,1023);
return true;}}return false;}}function cU(){this.dl=function(gd){var eU=ag.gt[gd]+ag.yZ[gd];
if(bN.y.kU[gd]){if(eU){aIi(gd);}return;}if(eU){this.aIj(gd);return;}if(ag.gX[gd].length){return;
}this.aIj(gd);};function aIi(player){aIk(player,ad.aIl(player));aIm(player);af.aIn();aF.gT(player);
ad.clear(player);aIo(player);aIp(player);}function aIp(player){ag.yZ[player]=0;ag.gX[player]=[];
ag.gl[player]=[];ag.gm[player]=[];ag.fU[player]=[];}function aIo(player){if(bA.gR.a4T(player)){
var eU=ag.h7[player]-ag.a4Y[player]+ad.aIq(player);bd.gV(player,Math.abs(eU),eU<0?18:12);
}ag.h7[player]=0;ag.a4Y[player]=0;}this.aIj=function(player){aIr(player);aIm(player);af.aIn();
aIo(player);aIs(player);aF.gT(player);ad.clear(player);bN.aIt.aIu(player);};function aIr(player){
if(!bA.gR.jn(player)){ag.a1c[player]=bi.a1r.aIv();aD.a13++;}var aIw=ad.aIl(player);
if(aIw.length===0){if(bA.gR.a4Q(player)){aIx();}return;}aIk(player,aIw);aIy(player,aIw);
}function aIx(){aX.show(false,false,false,true);aW.aC9();bR.a0m.a1Y();}function aIk(player,aIw){
for(var aB=aIw.length-1;aB>=0;aB--){ad.aIz(aIw[aB],player);}}function aJ0(aIw){
var aB;var eC=0;for(aB=aIw.length-1;aB>=1;aB--){if(ag.gt[aIw[aB]]>ag.gt[aIw[eC]]){
eC=aB;}}return eC;}function aIy(player,aIw){var aJ1=aIw[aJ0(aIw)];
if(aD.ki===9){if(bg.f3[player]===1){if(ay.kI(8)){az.aJ2(aJ1);}}else if(aE.ho[player]){
aN.a7j(765,0);aN.zT(280,L(133,[ag.zU[aJ1],ag.zU[player]]),765,aJ1,bB.nr,bB.pC,-1,true);
}}if(bA.gR.a4Q(player)){aIx(player);aN.a1E(aJ1,1);return;}for(var aB=aIw.length-1;aB>=0;aB--){
if(bA.gR.a4T(aIw[aB])){bd.mv[4-bA.gR.jn(player)]++;if(bA.gR.a4Q(aIw[aB])){aN.a1E(player,0);
return;}}}if(!bA.gR.jn(player)){aN.a7T(0,player,aJ1);}}function aIs(player){ag.mz[player]=0;
ag.gX[player]=null;ag.gl[player]=null;ag.gm[player]=null;ag.fU[player]=null;}function aIm(player){
var iy=ag.iy;var iz=ag.iz;var j0=ag.j0;var j1=ag.j1;var fG=bS.fG;if(ag.gt[player]){
ag.gt[player]=0;var nQ=iy[player];var nR=j0[player];for(var fC=iz[player];fC>=nQ;fC--){
for(var fE=j1[player];fE>=nR;fE--){var gd=(fE*fG+fC)*4;if(ac.yz(player,gd)){
ac.z0(gd);}}}}iz[player]=j1[player]=0;iy[player]=j0[player]=Math.max(fG,bS.fH);
}}function cx(){var input;this.dd=function(){input=document.createElement(S[24]);
input.type=S[92];input.setAttribute(S[102],".png, .jpg, .gif, .jpeg");
input.onchange=aJ3;};this.ud=function(){if(!input){return;}input.onchange=null;
input.value="";input=null;};this.aJ4=function(){input.click();};function aJ3(e){
aJ5(e.target.files);}function aJ5(files){if(files&&files.length>0){b6.aJ6(files[0]);
}}this.aJ6=function(aJ7){var g=aJ7.name.split(".");var aJ8=g[g.length-1].toLowerCase();
if(aJ8==="gif"||aJ8==="jpg"||aJ8==="jpeg"||aJ8==="png"){var aJ9=new FileReader();
aJ9.onload=aJA;aJ9.readAsDataURL(aJ7);}};function aJA(e){var ed=new Image();
ed.onload=aJB;ed.src=e.target.result;}function aJB(e){var aJC=e.target;var i=aJC.width;
var j=aJC.height;var aJD=bj.eQ.data[162].value;var max=Math.min(bS.aJE,aJD);if(a0.id||bJ.rL()){
max=Math.min(1400,aJD);}var nc=max/Math.max(i,j);if(nc<1){i=Math.floor(nc*i+0.125);
j=Math.floor(nc*j+0.125);}if(i>max||j>max||i<10||j<10){var aJF="Invalid Image Dimensions!";
if(a0.wI){a0.wI.showToast(aJF);}else{alert(aJF);}return;}var canvas=document.createElement(S[4]);
canvas.width=i;canvas.height=j;var i7=canvas.getContext("2d");var aJG=document.createElement(S[4]);
aJG.width=aJC.width;aJG.height=aJC.height;var aJH=aJG.getContext("2d");
aJH.drawImage(aJC,0,0);var aJI=aJH.getImageData(0,0,aJG.width,aJG.height);
var aJJ=i7.createImageData(i,j);var src=aJI.data;var aJK=aJJ.data;
var a9y=aJG.width/i;var a9z=aJG.height/j;for(var fE=0;fE<j;fE++){for(var fC=0;fC<i;fC++){
var aJL=Math.floor(fC*a9y);var aJM=Math.floor(fE*a9z);var aJN=(aJM*aJG.width+aJL)*4;
var aJO=(fE*i+fC)*4;aJK[aJO]=src[aJN];aJK[aJO+1]=src[aJN+1];aJK[aJO+2]=src[aJN+2];aJK[aJO+3]=255;
}}i7.putImageData(aJJ,0,0);t.tD===20&&t.a2H().aJB(canvas);}}function cv(){this.aJP=null;
this.dd=function(){if(aD.ki!==10){this.aJP=null;return;}this.aJP=new Uint32Array(aD.f2);
};this.eY=function(){if(aD.ki!==10){return;}this.lF();};this.lF=function(){
var aB,gd,target,aCM;var aJP=this.aJP;var a0p=al.l1;var a4Z=ag.h7;for(aB=al.kw-1;aB>=0;aB--){
gd=a0p[aB];if(gd>=aD.kQ){continue;}target=Math.max(bL.fW(a4Z[gd],4),2048);
aCM=Math.max(ae.aCN(gd),100);aJP[gd]+=bL.fW(aCM*target,10000);if(aJP[gd]>target){
aJP[gd]=target;}}};this.a4f=function(player,ho){if(ho>this.aJP[player]){ho=this.aJP[player];
this.aJP[player]=0;return ho;}this.aJP[player]-=ho;return ho;};}function dW(){this.aJQ=function(){
var input=document.createElement(S[24]);input.type=S[92];input.setAttribute(S[102],".json");
input.onchange=aJR;input.click();};this.aJS=function(){var a64=aD.data;
var keys=Object.keys(a64);var aJT={};for(var aB=0;aB<keys.length;aB++){var key=keys[aB];
if(a64[key] instanceof Uint8Array||a64[key] instanceof Uint16Array||a64[key] instanceof Uint32Array){
aJT[key]=Array.from(a64[key]);
}else{aJT[key]=a64[key];}}if(aJT.mapType===2&&aJT.canvas){aJT.canvas=aJT.canvas.toDataURL();
}else{aJT.canvas=null;}aJU(aJT);};function aJU(aJV){var aJW=JSON.stringify(aJV,null,2);
var aJX=new Blob([aJW],{type:"application/json"});var aDb=document.createElement("a");
aDb.href=URL.createObjectURL(aJX);aDb.download="tt_scenario.json";
aDb.click();}function aJR(e){var files=e.target.files;if(files&&files.length>0){
aJY(files[0]);}}function aJY(aJ7){var g=aJ7.name.split(".");var aJ8=g[g.length-1].toLowerCase();
if(aJ8==="json"){var aJ9=new FileReader();aJ9.onload=aJZ;aJ9.readAsText(aJ7);}}function aJZ(e){
if(aD.a11){return;}aJa(JSON.parse(e.target.result));t.x();t.y.t5[0]=0;t.u(19);}function aJa(aJb){
var aJc=aD.data=new a5W();aJd(aJb,aJc,"mapType",0,2);aJd(aJb,aJc,"mapProceduralIndex",0,255);
aJd(aJb,aJc,"mapRealisticIndex",0,255);aJd(aJb,aJc,"mapSeed",0,16383);
aJe(aJb,aJc,"mapName",20);aJf(aJb,aJc,S[4]);aJd(aJb,aJc,"passableWater",0,1);
aJd(aJb,aJc,"passableMountains",0,1);aJd(aJb,aJc,"playerCount",1,512);
aJd(aJb,aJc,"humanCount",1,1);aJd(aJb,aJc,"selectedPlayer",0,0);aJd(aJb,aJc,"gameMode",0,1);
aJd(aJb,aJc,"playerMode",0,0);aJd(aJb,aJc,"battleRoyaleMode",0,0);aJd(aJb,aJc,"numberTeams",0,8);
aJd(aJb,aJc,"isZombieMode",0,0);aJd(aJb,aJc,"isContest",0,0);aJd(aJb,aJc,"isReplay",0,0);
aJg(aJb,aJc,"elo",16,2,16383);aJd(aJb,aJc,"colorsType",0,1);aJd(aJb,aJc,"colorsPersonalized",0,1);
aJg(aJb,aJc,"colorsData",32,512,262143);aJd(aJb,aJc,"selectableColor",0,1);
aJg(aJb,aJc,"teamPlayerCount",16,9,512);aJd(aJb,aJc,"neutralBots",0,1);
aJd(aJb,aJc,"botDifficultyType",0,3);aJd(aJb,aJc,"botDifficultyValue",0,15);
aJg(aJb,aJc,"botDifficultyTeam",8,9,15);aJg(aJb,aJc,"botDifficultyData",8,512,15);
aJd(aJb,aJc,"spawningType",0,2);aJd(aJb,aJc,"spawningSeed",0,16383);
aJg(aJb,aJc,"spawningData",16,1024,4095);aJd(aJb,aJc,"selectableSpawn",0,1);
aJd(aJb,aJc,"playerNamesType",0,2);aJh(aJb,aJc,"playerNamesData",512,20);
aJd(aJb,aJc,"selectableName",0,1);aJd(aJb,aJc,"aIncomeType",0,2);
aJd(aJb,aJc,"aIncomeValue",0,255);aJg(aJb,aJc,"aIncomeData",8,512,255);
aJd(aJb,aJc,"tIncomeType",0,2);aJd(aJb,aJc,"tIncomeValue",0,255);
aJg(aJb,aJc,"tIncomeData",8,512,255);aJd(aJb,aJc,"iIncomeType",0,2);
aJd(aJb,aJc,"iIncomeValue",0,255);aJg(aJb,aJc,"iIncomeData",8,512,255);
aJd(aJb,aJc,"sResourcesType",0,2);aJd(aJb,aJc,"sResourcesValue",0,2047);
aJg(aJb,aJc,"sResourcesData",16,512,2047);}function aJd(aJb,aJc,ge,min,max){
var fX=aJb[ge];aJc[ge]=(aJi(fX)&&fX>=min&&fX<=max)?Math.floor(fX):aJc[ge];
}function aJi(fX){return typeof fX===S[48];
}function aJe(aJb,aJc,ge,max){var qa=aJb[ge];aJc[ge]=aJj(qa)?qa.slice(0,max):aJc[ge];
}function aJf(aJb,aJc,ge){if(aJc.mapType!==2){return;}var qa=aJb[ge];
if(!aJj(qa)||qa.length<=20){aJc.mapType=0;return;}var aJC=new Image();aJC.onload=function(){
b9.aJk.aJl(aJC,1);aJC.onload=null;aJC=null;};aJC.src=qa;}function aJj(qa){return typeof qa===S[45];
}function aJg(aJb,aJc,ge,aJm,size,max){var a3f=aJb[ge];if(!Array.isArray(a3f)){
return;}var a3g=aJm===8?new Uint8Array(size):aJm===16?new Uint16Array(size):new Uint32Array(size);
var f5=Math.min(a3f.length,size);for(var aB=0;aB<f5;aB++){
a3g[aB]=bL.iD(a3f[aB],0,max);}aJc[ge]=a3g;}function aJh(aJb,aJc,ge,size,max){var a3f=aJb[ge];
if(!Array.isArray(a3f)){return;}var a3g=new Array(size);var f5=Math.min(a3f.length,size);
for(var aB=0;aB<f5;aB++){a3g[aB]=aJj(a3f[aB])?a3f[aB].slice(0,max):"";}a3g.fill("",f5);
aJc[ge]=a3g;}}function cY(){var aJn;var aJo;var size;var jZ;var ho;var aJp;this.dd=function(){
aJn=aD.kQ<16?12:8;aJo=4;var f5=aJq(aD.f2);size=new Uint8Array(aD.f2);jZ=new Uint16Array(f5);
ho=new Uint32Array(f5);aJp=new Uint8Array(f5);};this.qR=function(a8r,aJr){var aJs=this.h8(a8r,aJr);
this.h6(a8r,aJr,0);var aJt=bA.gR.gU(a8r,aJs);bd.gV(a8r,aJs-aJt,12);};function aJq(player){
return player<aD.kQ?aJn*player:aJn*aD.kQ+aJo*(player-aD.kQ);}this.clear=function(player){
size[player]=0;};this.aIz=function(player,aJr){var aB=aJu(player,aJr);if(aB===size[player]){
return;}var aJv=ho[aJq(player)+aB];this.gW(player,aB);this.ec(player,aJv,aD.f2);
};function aJu(player,aJr){var aB;var lL=aJq(player);for(aB=size[player]-1;aB>=0;aB--){
if(jZ[lL+aB]===aJr){return aB;}}return size[player];}this.jl=function(player,aJr){
var aB;var lL=aJq(player);for(aB=size[player]-1;aB>=0;aB--){if(jZ[lL+aB]===aJr){return true;
}}return false;};this.k4=function(player){return player<aD.kQ?size[player]<aJn:size[player]<aJo;
};this.gC=function(player){return size[player];};this.gH=function(player,aB){
return jZ[aJq(player)+aB];};this.gI=function(player,aB){return ho[aJq(player)+aB];
};this.h8=function(player,aJr){var aB;var lL=aJq(player);for(aB=size[player]-1;aB>=0;aB--){
if(jZ[lL+aB]===aJr){return ho[lL+aB];}}return 0;};this.aIq=function(player){
var aB;var lL=aJq(player);var fX=0;for(aB=size[player]-1;aB>=0;aB--){fX+=ho[lL+aB];}return fX;
};this.h6=function(player,aJr,aJv){var aB;var lL=aJq(player);for(aB=size[player]-1;aB>=0;aB--){
if(jZ[lL+aB]===aJr){ho[lL+aB]=aJv;}}};this.gr=function(player,aB,aJv){
ho[aJq(player)+aB]=Math.max(aJv,0);};this.gs=function(player,aB){aJp[aJq(player)+aB]=0;
};this.gJ=function(player,aB){return aJp[aJq(player)+aB];};this.ec=function(player,aJv,aJr){
ao.jD.k2[player]=ao.jD.k2[aJr]=8;if(bA.gR.a4T(aJr)){bd.mv[6-bA.gR.jn(player)]++;
}var lL=aJq(player);for(var aB=size[player]-1;aB>=0;aB--){if(jZ[lL+aB]===aJr){
ho[lL+aB]+=aJv;ho[lL+aB]=ho[lL+aB]>aD.a4b?aD.a4b:ho[lL+aB];return;}}jZ[lL+size[player]]=aJr;
ho[lL+size[player]]=aJv;aJp[lL+size[player]]=1;size[player]++;if(aJr===aD.ep){aN.a1E(player,5);
}else if(player<aD.kQ&&player===aD.ep){af.a7V(aJr);}};this.gW=function(player,eC){var fO,lL;
if(size[player]===0){return;}lL=aJq(player);size[player]--;for(fO=eC;fO<size[player];fO++){
jZ[lL+fO]=jZ[lL+fO+1];ho[lL+fO]=ho[lL+fO+1];aJp[lL+fO]=aJp[lL+fO+1];
}};this.aIl=function(player){var aB,fO,lL;var aIw=[];for(aB=al.kw-1;aB>=0;aB--){
lL=aJq(al.l1[aB]);for(fO=size[al.l1[aB]]-1;fO>=0;fO--){if(jZ[lL+fO]===player){aIw.push(al.l1[aB]);
break;}}}return aIw;};}function cZ(){this.aAx=0;var aJw;this.dj=function(){var f5=aD.f2;
aJw=new Uint16Array(f5);var jg=100;for(var aB=0;aB<f5;aB++){aJw[aB]=jg+aJx(bL.fW(aB*25600,f5-4),9);
}};this.dd=function(){this.aAx=0;if(aD.data.iIncomeType===0){
this.aCN=function(player){return aJy(player);};}else if(aD.data.iIncomeType===1){
this.aCN=function(player){return bL.fW(aD.data.iIncomeValue*aJy(player),64);
};}else{this.aCN=function(player){return bL.fW(aD.data.iIncomeData[player]*aJy(player),64);
};}};this.eY=function(){if(bf.kN()%10!==9){return;}aJz();};function aJy(player){
if(bA.gR.jn(player)&&player<aD.kQ){return 0;}var eB=aJw[bL.fW((aD.f2-1)*ag.gt[player],aD.kA)];
if(bf.kN()<1920){eB=Math.max(bL.fW(100*(13440-6*bf.kN()),1920),eB);}var k5=ae.k6(player);
if(ag.h7[player]>k5){eB-=bL.fW(2*eB*(ag.h7[player]-k5),k5);}return Math.min(Math.max(eB,0),700);
}this.k6=function(player){return Math.min(100*ag.gt[player],aD.a5S);
};this.pQ=function(player,pR){bq.pn(player,pR,bO.fc[0],0);bA.gR.gU(pR,bO.fc[0]);
bd.po(player,pR);af.aK0(player,bO.fc[0]+bO.fc[1]);af.pp(pR,bO.fc[0]);bA.gR.ma(player);
};this.aK1=function(){var f5=al.kw;var a0p=al.l1;var lL=0;var a4Z=ag.h7;for(var aB=0;aB<f5;aB++){
lL+=a4Z[a0p[aB]];}return lL;};this.aK2=function(aK3){var f5=al.kw;var a0p=al.l1;
var lL=0;var a4Z=ag.h7;var f3=bg.f3;var gd;for(var aB=0;aB<f5;aB++){gd=a0p[aB];if(f3[gd]===aK3){
lL+=a4Z[gd];}}return lL;};function aJz(){ae.aAx=0;aK4();aK5();if(bf.kN()%100!==99){
return;}aK6();}function aK4(){aK7();var l1=al.l1;var h7=ag.h7;for(var aB=al.kw-1;aB>=0;aB--){
var gd=l1[aB];var aK8=bL.fW(ae.aCN(gd)*h7[gd],10000);bA.gR.gU(gd,Math.max(aK8,1));}
aK9(9);}function aK6(){aK7();if(aD.data.tIncomeType===0){aKA(32);}else if(aD.data.tIncomeType===1){
aKA(aD.data.tIncomeValue);}else{aKB();}aK9(8);}function aKA(nc){var gt=ag.gt;
var l1=al.l1;for(var aB=al.kw-1;aB>=0;aB--){var gd=l1[aB];bA.gR.gU(gd,bL.fW(nc*gt[gd],32));}}
function aKB(){var gt=ag.gt;var l1=al.l1;var nc=aD.data.tIncomeData;for(var aB=al.kw-1;aB>=0;aB--){
var gd=l1[aB];bA.gR.gU(gd,bL.fW(nc[gd]*gt[gd],32));}}function aK5(){if(aD.data.aIncomeType===0){
return;}aK7();if(aD.data.aIncomeType===1){aKC();}else if(aD.data.aIncomeType===2){
aKD();}aK9(18);}function aKC(){var gt=ag.gt;var l1=al.l1;var nc=aD.data.aIncomeValue;
for(var aB=al.kw-1;aB>=0;aB--){var gd=l1[aB];bA.gR.gU(gd,bL.fW(nc*gt[gd],128));}}function aKD(){
var gt=ag.gt;var l1=al.l1;var nc=aD.data.aIncomeData;for(var aB=al.kw-1;aB>=0;aB--){var gd=l1[aB];
bA.gR.gU(gd,bL.fW(nc[gd]*gt[gd],128));}}function aK7(){var xb=aD.ep;bO.fb[0]=ag.h7[xb]-ag.a4Y[xb];
}function aK9(eC){var xb=aD.ep;var fX=ag.h7[xb]-ag.a4Y[xb]-bO.fb[0];ae.aAx+=fX;
bd.mv[eC]+=fX;}}function cb(){var aKE,aKF;var aKG,aKH;var aKI,aKJ;var aKK;var aKL;var aKM;var aKN;
var aKO;var aKP;var aKQ;var aKR;var aKS,aKT;var aKU;var aKV;var aKW=null;var aKX;var aKY;var aDU;
var aKZ,aKa;var aKb=0.1;var aKc=0;var aKd=false;var aKe=new Float32Array(4);var aKf=0;var aKg;
var aKh;var aBS=112;var aKi=0;this.dd=function(){aKi=bj.eQ.data[7].value||aD.ki===8;aKV=false;
aKR=0.88;aKO=0.5;aKP=1.8;aKQ=12-3*bj.eQ.data[9].value;aKE=0;aKF=0;aKG=new Uint16Array(aD.f2);
aKH=new Uint16Array(aD.f2);aKI=new Uint16Array(aD.f2);aKJ=new Uint16Array(aD.f2);
aKK=new Float32Array(aD.f2);aKL=new Float32Array(aD.f2);aKY=new Uint16Array(2*aD.f2);
aDU=new Uint8Array(5*aD.f2);aKg=new Uint8Array(aD.f2);aKh=new Uint8Array(aD.f2);
aKW=aKW?aKW:document.createElement(S[4]);qw();aKS=0;aKT=0;aKU=1;if(aKi){aKj();aKk();}else{aKj();
}aKl();};this.aK0=function(gd,a62){if(a62>18*ag.gt[gd]){aKh[gd]=6;ac.a9N[gd]=2+(ac.a9N[gd]%2);
}else{aKg[gd]=4;if(ac.a9N[gd]<2||ac.a9N[gd]>3){ac.a9N[gd]=6+(ac.a9N[gd]%2);
}}};this.pp=function(gd,a62){if(a62>6*ag.gt[gd]){aKh[gd]=6;ac.a9N[gd]=4+(ac.a9N[gd]%2);
}else{aKg[gd]=4;if(ac.a9N[gd]<4||ac.a9N[gd]>5){ac.a9N[gd]=8+(ac.a9N[gd]%2);
}}};function aKm(){aKW.width=h.i;aKW.height=h.j;aKX=aKW.getContext("2d",{alpha:true});
bA.qt.textAlign(aKX,1);bA.qt.textBaseline(aKX,1);aKX.imageSmoothingEnabled=true;
}this.resize=function(){qw();aKn(aKX);};function qw(){aKM=Math.floor(1*h.iF);
aKN=Math.floor(0.5*aKM);aKm();}function aKj(){var aB,aKo;vZ.font=bA.qt.sk(1,100*aKO);
aKo=80/Math.floor(vZ.measureText(bA.rs.a0I(aD.a4b)).width);vZ.font=bA.qt.sk(1,100);
for(aB=aD.f2-1;aB>=0;aB--){aKL[aB]=100/Math.floor(vZ.measureText(ag.zU[aB]).width);
aKK[aB]=Math.min(aKo,aKL[aB]);}}function aKk(){
var aB,aKo;vZ.font=bA.qt.sk(1,100);aKo=100/Math.floor(vZ.measureText("900 000").width);
for(aB=aD.f2-1;aB>=0;aB--){aKK[aB]=Math.min(aKo,2*aKL[aB]);
}aKf=aKo;aKe[0]=100/(aKo*Math.floor(vZ.measureText("5 000 000").width));
aKe[1]=100/(aKo*Math.floor(vZ.measureText("50 000 000").width));
aKe[2]=100/(aKo*Math.floor(vZ.measureText("500 000 000").width));
aKe[3]=100/(aKo*Math.floor(vZ.measureText("1 000 000 000").width));
}function aKp(aB){if(!aKi){return 1;}var xJ=ag.h7[aB];if(xJ<1000000){
return 1;}if(xJ<10000000){return aKe[0];}return aKe[Math.min(Math.floor(Math.log10(xJ))-6,3)];
}function aKl(){var aB;for(aB=aD.f2-1;aB>=0;aB--){if(ag.gt[aB]<12){
aKG[aB]=ag.iy[aB]+1;aKH[aB]=ag.j0[aB]+1;aKI[aB]=1;aKJ[aB]=1;}else{aKG[aB]=ag.iy[aB];
aKH[aB]=ag.j0[aB]+1;aKI[aB]=4;aKJ[aB]=2;}}if(aD.hT){for(aB=0;aB<aD.kQ;aB++){aKI[aB]=0;
}}aKZ=ab.get(4).width;aKa=ab.get(4).height;}this.a5O=function(){for(var aB=0;aB<aD.kQ;aB++){
if(ag.iz[aB]-ag.iy[aB]!==3||ag.j1[aB]-ag.j0[aB]!==3){aKG[aB]=ag.iy[aB]+(ag.iz[aB]!==ag.iy[aB]?1:0);
aKH[aB]=ag.j0[aB];aKI[aB]=1;aKJ[aB]=1;}else{aKG[aB]=ag.iy[aB];aKH[aB]=ag.j0[aB]+1;aKI[aB]=4;
aKJ[aB]=2;}}};this.qS=function(player,eC,aKq){aKr(player,eC,aKq);if(aD.a11===2){this.ml(true);
}};function aKr(player,eC,aKq){var hx=player+eC*aD.f2;if(eC===0){if(aKY[hx]===aKq&&aDU[hx]>0){
aDU[hx]=0;return;}aKY[hx]=aKq;aDU[hx]=aj.s9.a09(aKq)?255:64;return;}if(eC===1){
aDU[hx]=64;aKY[hx]=aKq;}else{aDU[hx]=aKq;}}this.vY=function(){if(!aKV){return;}if(aKU!==1){
vZ.imageSmoothingEnabled=true;vZ.setTransform(aKU,0,0,aKU,0,0);vZ.drawImage(aKW,-aKS/aKU,-aKT/aKU);
vZ.setTransform(1,0,0,1,0,0);vZ.imageSmoothingEnabled=false;}else{
vZ.drawImage(aKW,-aKS,-aKT);}};this.aAA=function(iP,iS){aKS+=iP;aKT+=iS;};this.a2Z=function(iP,iS){
af.aAA(iP,iS);};this.zoom=function(a3S,lf,lg){aKU*=a3S;aKS=(aKS+lf)*a3S-lf;aKT=(aKT+lg)*a3S-lg;
};function aKs(){if(aKU!==1||aKS!==0||aKT!==0){return aBS;}if(aD.a5r()||aD.hT||aD.a11===2){
return 1000;}return aBS;}this.ml=function(bu){if(!aKd&&!bu&&bf.eT<aKc+aKs()){return false;
}aKn(aKX);return true;};this.aKt=function(aB){return aKp(aB)*aKK[aB];};this.aKu=function(player){
return aKK[player];};function aKn(i7){aKd=false;aKc=bf.eT;aKV=false;aKU=1;aKS=aKT=0;
i7.clearRect(0,0,h.i,h.j);var nQ=ii/iG;var nR=ij/iG;var nd=(h.i+ii)/iG;var ne=(h.j+ij)/iG;
var aKv,aKw;var aB,aKx;var fontSize;var aKy;var aKz=ag.mz[aD.ep]!==0&&!bA.gR.jn(aD.ep);
for(var fO=al.kw-1;fO>=0;fO--){aB=al.l1[fO];fontSize=Math.floor(aKR*iG*aKp(aB)*aKK[aB]*aKI[aB]);
if(fontSize<aKQ||fontSize>=aKM){continue;}if(!(aKG[aB]+aKI[aB]>nQ&&aKG[aB]<nd&&
aKH[aB]+aKJ[aB]>nR&&aKH[aB]<ne)){continue;}aKv=Math.floor(h.i*(aKG[aB]+aKI[aB]/2-nQ)/(nd-nQ));
aKw=Math.floor(h.j*(aKH[aB]+aKJ[aB]/2-nR)/(ne-nR)-0.1*fontSize);
aKx=ac.a9N[aB];i7.font=bA.qt.sk(ag.a4P[aB]===1?4:1,fontSize);i7.fillStyle=aL0(fontSize,aKx%2);
if(aKi){aL1(i7,aB,fontSize,aKv,aKw,aKx);}else{aL2(aB,fontSize,aKv,aKw,i7);}aKV=true;
if(aDU[aB]>0){aL3(aKv,aKw,fontSize,aB,i7);}else if(kB[aB]===0){aL4(aKv,aKw,fontSize,0,0,i7);
}if(aKz&&(aDU[aB+aD.f2]>0||aDU[aB+2*aD.f2]>0||aDU[aB+3*aD.f2]>0||aDU[aB+4*aD.f2]>0)){
aL5(aKv,aKw,fontSize,aB,i7);}aKy=aKO*fontSize;
if(aKy<aKQ){continue;}i7.font=bA.qt.sk(1,aKy);aKw+=Math.floor(0.78*fontSize);if(aKi){
aL2(aB,aKy,aKv,aKw,i7);}else{aL1(i7,aB,aKy,aKv,aKw,aKx);}}}function aL2(aB,fontSize,fC,fE,i7){
i7.fillText(ag.zU[aB],fC,fE);if(aB<aD.kQ&&ag.a4P[aB]!==2){return;}var aL6=fontSize/aKL[aB];
i7.fillRect(fC-0.5*aL6,fE+bA.qt.a02*fontSize,aL6,Math.max(1,0.1*fontSize));
}function aL1(i7,aB,fontSize,aKv,aKw,aKx){var aL7=bA.rs.a0I(ag.h7[aB]);if((aKx>>1)&1){
i7.lineWidth=0.05*fontSize;i7.strokeStyle=aL0(fontSize,aKx%2);i7.strokeText(aL7,aKv,aKw);
return;}if(aKx>1){i7.lineWidth=0.12*fontSize;i7.strokeStyle=aL0(fontSize,aKx);
i7.strokeText(aL7,aKv,aKw);}i7.fillText(aL7,aKv,aKw);}function aL4(aKv,aKw,fontSize,aL8,aL9,i7){
var a6o=0.95*fontSize/aKa;var y7=aKv-0.5*a6o*aKZ+0.8*aL8*fontSize;
var y8=aKw-1.76*a6o*aKa-(0.7+(0.35-bA.qt.a02))*aL9*fontSize;i7.setTransform(a6o,0,0,a6o,y7,y8);
i7.globalAlpha=aLA(fontSize);i7.drawImage(ab.get(4),0,0);i7.globalAlpha=1;
i7.setTransform(1,0,0,1,0,0);}function aL5(aKv,aKw,fontSize,aB,i7){var ed;var gY=-1;
for(ed=4;ed>=1;ed--){if(aDU[aB+ed*aD.f2]>0){gY++;}}for(ed=1;ed<5;ed++){if(aDU[aB+ed*aD.f2]>0){
aLB(aKv,aKw,fontSize,ed,aB,gY,aDU[aB+ed*aD.f2],i7);gY-=2;}}}function aL3(aKv,aKw,fontSize,aB,i7){
if(kB[aB]===0){if(aj.s9.a09(aKY[aB])){aLC(aKv,aKw,fontSize,aB,aKY[aB],i7);
aL4(aKv,aKw,fontSize,0,0,i7);}else if(aj.s9.a0B(aKY[aB])){aLD(aKv,aKw,fontSize,aKY[aB],0,i7);
aL4(aKv,aKw,fontSize,0,1,i7);}else{aLD(aKv,aKw,fontSize,aKY[aB],1,i7);
aL4(aKv,aKw,fontSize,1,0,i7);}}else{aLD(aKv,aKw,fontSize,aKY[aB],0,i7);}}
function aLD(aKv,aKw,fontSize,pc,aL8,i7){var i1;var a6o;var y7;var y8;i7.globalAlpha=aLA(fontSize);
if(aj.s9.a0A(pc)){i1=aj.xa.zb;a6o=1.1*fontSize/i1;y7=aKv-0.5*a6o*i1-0.8*aL8*fontSize;
y8=aKw-1.55*a6o*i1;i7.setTransform(a6o,0,0,a6o,y7,y8);i7.drawImage(aj.xa.za[pc-1024+aj.s9.zm],0,0);
i7.setTransform(1,0,0,1,0,0);}else{y7=aKv-0.8*aL8*fontSize;y8=aKw-(1+(0.35-bA.qt.a02))*fontSize;
i7.fillText(aj.s9.a01(pc),y7,y8);}i7.globalAlpha=1;}function aLB(aKv,aKw,fontSize,ed,aB,aL8,eU,i7){
var a3t;if(ed===1){var pc=aKY[aB+aD.f2];if(aj.s9.a0A(pc)){a3t=aj.xa.za[pc-1024+aj.s9.zm];
}else{aLE(aKv,aKw,fontSize,pc,aL8,i7);return;}}else if(ed===2){a3t=aL.a6J()[4].canvas[+(eU<255)];
}else if(ed===3){a3t=aL.a6J()[5].canvas[0];}else{a3t=aL.a6J()[6].canvas[0];}var i1=aj.xa.zb;
var a6o=0.8*fontSize/i1;var y7=aKv-0.5*a6o*i1-0.534*aL8*fontSize;var y8=aKw+1.4*a6o*i1;
i7.setTransform(a6o,0,0,a6o,y7,y8);i7.globalAlpha=aLA(fontSize);i7.drawImage(a3t,0,0);
i7.globalAlpha=1;i7.setTransform(1,0,0,1,0,0);}function aLE(aKv,aKw,fontSize,pc,aL8,i7){
i7.globalAlpha=aLA(fontSize);var y7=aKv-0.534*aL8*fontSize;var y8=aKw+1.59*fontSize;
i7.font=bA.qt.sk(0,0.785*fontSize);i7.fillText(aj.s9.a01(pc),y7,y8);i7.globalAlpha=1;
}function aLC(aKv,aKw,fontSize,player,pc,i7){var y8=aKw;i7.globalAlpha=aLA(fontSize);
var i6=aKp(player)*(aKi?aKf:aKL[player]);var y7=aKv-0.5*fontSize/i6-0.9*fontSize;
for(var fP=0;fP<2;fP++){i7.fillText(aj.s9.a01(pc),y7,y8);y7=aKv+0.5*fontSize/i6+0.9*fontSize;
}i7.globalAlpha=1;}function aL0(fontSize,aKx){if(fontSize>=aKN&&fontSize<aKM){
return bg.aLF[aKx]+(aLA(fontSize)).toFixed(3)+")";}return bg.aLG[aKx];
}function aLA(fontSize){if(fontSize>=aKN&&fontSize<aKM){return 1-(fontSize-aKN)/(aKM-aKN);
}return 1;}this.aIn=function(){aKd=true;};this.eY=function(){var aB;if(bf.kN()%10===9){
aKd=aKd||(aD.a5t()&&!aD.a5r());}if(!aD.a5r()&&++aKF>=4){aLH();}var f5=Math.floor(aKb*al.kw);
f5=f5<8?8:f5;f5=f5>al.kw?al.kw:f5;var fO;for(aB=aKE+f5-1;aB>=aKE;aB--){fO=aB%al.kw;
aLI(al.l1[fO]);}aKE+=f5;aKE%=al.kw;};this.mg=function(){var aB,gd,a07,a08;if(bf.kN()%4!==1){return;
}for(aB=al.kw-1;aB>=0;aB--){gd=al.l1[aB];if(ac.a9N[gd]<2){continue;}a07=Math.max(aKg[gd]-1,0);
a08=Math.max(aKh[gd]-1,0);if(a07===a08){if(a07===0){ac.a9N[gd]%=2;}}else if(a08===0&&ac.a9N[gd]<6){
ac.a9N[gd]+=4;}aKg[gd]=a07;aKh[gd]=a08;}};this.a7V=function(player){
var aB=player+2*aD.f2;var eU=aDU[aB];if(eU>0){aN.a19(50,player);aDU[aB]=0;return eU===255;
}return false;};this.a6Y=function(player){return aDU[player+2*aD.f2]===255;};function aLH(){
var aB,fO,fP;aKF=0;for(fP=4;fP>=1;fP--){for(fO=al.kw-1;fO>=0;fO--){aB=al.l1[fO]+fP*aD.f2;
if(aDU[aB]>0&&aDU[aB]<255){aDU[aB]--;}}}if(aD.a11===2){return;}for(fO=al.kw-1;fO>=0;fO--){
aB=al.l1[fO];if(aDU[aB]>0&&aDU[aB]<255){aDU[aB]--;}}}function aLI(aB){var i6=aKp(aB)*aKK[aB];
if(aKI[aB]>0&&aLJ(aB,aKG[aB],aKH[aB],aKI[aB],aKJ[aB])){if(!aLK(aB)&&aLL(aB,i6)){
aLM(aB);}}else if(aLN(aB,i6)){aLM(aB);}else{aLO(aB,i6);}}function aLP(i6,i){
return 1+Math.floor(aKP*i6*i);}function aLK(aB){var ej=false;var fC,fE,i,j;for(var fP=0;fP<8;fP++){
i=aKI[aB]+2;j=aKJ[aB]+2;if(i>ag.iz[aB]-ag.iy[aB]+1||j>ag.j1[aB]-ag.j0[aB]+1){
return ej;}fC=aKG[aB]-1;fE=aKH[aB]-1;if(aLJ(aB,fC,fE,i,j)){
aKG[aB]=fC;aKH[aB]=fE;aKI[aB]=i;aKJ[aB]=j;ej=true;}else{return ej;}}return ej;}function aLL(aB,i6){
var ej=false;var fC,fE,i,j;var aDd=aKI[aB];var nc=1+Math.floor(0.02*aDd);for(var fP=1;fP<5;fP++){
i=aDd+fP*nc;if(i>ag.iz[aB]-ag.iy[aB]+1){return ej;}j=aLP(i6,i);if(j>ag.j1[aB]-ag.j0[aB]+1){
return ej;}fC=ag.iy[aB]+Math.floor(Math.random()*(ag.iz[aB]-ag.iy[aB]+2-i));
fE=ag.j0[aB]+Math.floor(Math.random()*(ag.j1[aB]-ag.j0[aB]+2-j));if(aLJ(aB,fC,fE,i,j)){
aKG[aB]=fC;aKH[aB]=fE;aKI[aB]=i;aKJ[aB]=j;ej=true;}}return ej;}function aLN(aB,i6){
var fC=aKG[aB]+1;var fE=aKH[aB]+1;var i=aKI[aB]-2;var j;while(true){if(i<1){aKI[aB]=0;
break;}j=aLP(i6,i);if(aLJ(aB,fC,fE,i,j)){aKG[aB]=fC;aKH[aB]=fE;aKI[aB]=i;aKJ[aB]=j;return true;}
fC++;fE++;i-=2;}return false;}function aLO(aB,i6){var fC,fE,i,j,fP,ni;var jg=ag.iz[aB]-ag.iy[aB]+1;
var aLQ=Math.floor(0.02*jg);aLQ=aLQ<1?1:aLQ;ni=-6*aLQ;for(fP=jg;fP>=ni;fP-=aLQ){
i=fP>0?fP:1;j=aLP(i6,i);fC=ag.iy[aB]+Math.floor(Math.random()*(ag.iz[aB]-ag.iy[aB]+2-i));
fE=ag.j0[aB]+Math.floor(Math.random()*(ag.j1[aB]-ag.j0[aB]+2-j));
if(aLJ(aB,fC,fE,i,j)){aKG[aB]=fC;aKH[aB]=fE;aKI[aB]=i;aKJ[aB]=j;return;}}}function aLM(aB){var fO;
var left=aKG[aB];for(fO=aKG[aB]-ag.iy[aB]-1;fO>=0;fO--){left--;if(!aLR(aB,left,aKH[aB],aKJ[aB])){
left++;break;}}var right=aKG[aB];for(fO=ag.iz[aB]-aKG[aB]-aKI[aB];fO>=0;fO--){right++;
if(!aLR(aB,right+aKI[aB]-1,aKH[aB],aKJ[aB])){right--;break;}}var fC=Math.floor((left+right)/2);
var top=aKH[aB];for(fO=aKH[aB]-ag.j0[aB]-1;fO>=0;fO--){top--;if(!aLS(aB,fC,top,aKI[aB])){
top++;break;}}var bottom=aKH[aB];for(fO=ag.j1[aB]-aKH[aB]-aKJ[aB];fO>=0;fO--){bottom++;
if(!aLS(aB,fC,bottom+aKJ[aB]-1,aKI[aB])){bottom--;break;}}var fE=Math.floor((top+bottom)/2);
if(aLJ(aB,fC,fE,aKI[aB],aKJ[aB])){aKG[aB]=fC;aKH[aB]=fE;}}function aLJ(player,fC,fE,i,j){
var ed;var f8=Math.floor(0.2*i);f8=f8<1?1:f8;for(ed=fC+i-1;ed>=fC;ed--){if(!aLR(player,ed,fE,j)){
return false;}}f8=Math.floor(0.25*j);f8=f8<1?1:f8;for(ed=fE+j-1-f8;ed>=fE+f8;ed--){
if(!aLS(player,fC,ed,i)){return false;}}return true;}function aLR(player,fC,fE,j){
return(ac.yz(player,(fE*bS.fG+fC)*4)&&ac.yz(player,((fE+j-1)*bS.fG+fC)*4));
}function aLS(player,fC,fE,i){return(ac.yz(player,(fE*bS.fG+fC)*4)&&
ac.yz(player,(fE*bS.fG+fC+i-1)*4));}}function cd(){var aLT;var aLU;var aLV;this.dd=function(){
aLT="Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
aLU="Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer".split(";");
aLV="Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
var a7m=["K "," Y","E "," Z"," z"," s","S "];
var aEV=["Kingdom of "," Kingdom","Empire of "," Empire"," Dynasty"," Sultanate","Sultanate of "];
for(var aB=aLT.length-1;aB>=0;aB--){for(var fO=a7m.length-1;fO>=0;fO--){
aLT[aB]=aLT[aB].replace(a7m[fO],aEV[fO]);}}};this.a5e=function(){
aLW();};this.a7=function(){if(aD.ki===9){aLX();return;}if(aD.data.playerNamesType===2){
aLY();return;}if(aD.data.playerNamesType===1){aLZ();return;}aLa();};function aLW(){
var f5=aD.kQ;var zU=ag.zU;var a1h=ag.a1h;var playerNamesData=aD.data.playerNamesData;
if(!playerNamesData||playerNamesData.length<f5){for(var aB=0;aB<f5;aB++){
zU[aB]=a1h[aB]=S[57]+ay.jh(1000);}return;}for(aB=0;aB<f5;aB++){zU[aB]=a1h[aB]=playerNamesData[aB];
}}function aLX(){var eB=ay.random();var aLb=aLV;var aLc=aLU;var ho=aE.ho;var f5=aLb.length;
var lL=aD.data.teamPlayerCount[7];var zU=ag.zU;var a1h=ag.a1h;for(var aB=lL-1;aB>=aD.kQ;aB--){
zU[aB]=a1h[aB]=aLb[(aB+eB)%f5];}f5=aLc.length-1;for(aB=lL;aB<aD.f2;aB++){
zU[aB]=a1h[aB]=aLc[ho[aB]?f5:(aB%f5)];}}function aLY(){var f5=aD.f2;var zU=ag.zU;
var a1h=ag.a1h;var playerNamesData=aD.data.playerNamesData;for(var aB=aD.kQ;aB<f5;aB++){
zU[aB]=a1h[aB]=playerNamesData[aB];}}function aLZ(){var zU=ag.zU;var a1h=ag.a1h;
for(var aB=aD.kQ;aB<aD.f2;aB++){zU[aB]=a1h[aB]=S[114]+ay.jh(1000);}}function aLa(){var aLd=aLT;
var f5=aLd.length;var eB=ay.random();var zU=ag.zU;var a1h=ag.a1h;for(var aB=aD.kQ;aB<aD.f2;aB++){
zU[aB]=a1h[aB]=aLd[(aB+eB)%f5];}}}function cw(){this.aLe=[];this.aLf=[];this.dd=function(){
this.aLe=[];this.aLf=[];};this.eY=function(){if(this.aLe.length>=0){this.aLg(this.aLe);
}if(this.aLf.length>=0){this.aLg(this.aLf);}};this.aLg=function(g){var aB;var fP=-1;
for(aB=g.length-1;aB>=0;aB--){g[aB].eT--;if(g[aB].eT<=0){fP=aB;break;}}for(aB=fP;aB>=0;aB--){
g.shift();}};this.a6R=function(id,a0p,aLh){return this.fQ(this.aLe,id,a0p,aLh);
};this.aLi=function(id,a0p,aLh){return this.fQ(this.aLf,id,a0p,aLh);};
this.fQ=function(g,id,a0p,aLh){if(aLj(g,id,a0p)){return false;}if(aLh){aLk(g,id,a0p);}return true;
};function aLj(g,id,a0p){var aB,hx;for(aB=a0p.length-1;aB>=0;aB--){for(hx=g.length-1;hx>=0;hx--){
if(g[hx].player===a0p[aB]&&id===g[hx].id){return true;}}}return false;}function aLk(g,id,a0p){
var aB;for(aB=a0p.length-1;aB>=0;aB--){g.push({player:a0p[aB],id:id,eT:384});
}}}function cc(){this.a1h=new Array(aD.f2);this.zU=new Array(aD.f2);this.a4P=new Uint8Array(aD.f2);
this.mz=new Uint8Array(aD.f2);this.iy=new Uint16Array(aD.f2);this.j0=new Uint16Array(aD.f2);
this.iz=new Uint16Array(aD.f2);this.j1=new Uint16Array(aD.f2);this.gt=new Uint32Array(aD.f2);
this.yZ=new Uint32Array(aD.f2);this.h7=new Uint32Array(aD.f2);this.gX=null;this.gl=null;
this.gm=null;this.fU=null;this.qI=new Uint16Array(aD.f2);this.jT=new Uint16Array(aD.f2);
this.jU=new Uint16Array(aD.f2);this.a1c=new Uint16Array(aD.f2);this.a1a=new Uint8Array(aD.f2);
this.a4Y=new Uint16Array(aD.f2);this.dd=function(){this.a1h.fill("");
this.zU.fill("");this.a4P.fill(0);this.mz.fill(0);this.iy.fill(0);this.j0.fill(0);this.iz.fill(0);
this.j1.fill(0);this.gt.fill(0);this.yZ.fill(0);this.h7.fill(0);this.gX=new Array(aD.f2);
this.gl=new Array(aD.f2);this.gm=new Array(aD.f2);this.fU=new Array(aD.f2);
this.qI.fill(0);this.jT.fill(0);this.jU.fill(0);this.a1c.fill(0);this.a1a.fill(0);this.a4Y.fill(0);
};}function cu(){this.aE0=function(player){aG.my(player);aD.a13++;ag.a4P[player]=2;
ag.a1c[player]=bi.a1r.aIv();if(player===aD.ep){aX.show(false,false);aW.aC9();bR.a0m.a1Y();
}af.a7V(player);};}function cV(){this.l1=null;this.kw=0;this.a5i=function(){var aB;this.kw=0;
for(aB=aD.f2-1;aB>=0;aB--){if(ag.mz[aB]!==0){this.kw++;}}this.l1=new Uint16Array(this.kw);var f5=0;
for(aB=0;aB<aD.f2;aB++){if(ag.mz[aB]!==0){this.l1[f5++]=aB;}}};this.mf=function(){aLl();this.aLm();
};this.aLm=function(){var mz=ag.mz;var lK=this.l1;var aCr=this.kw;for(var aB=aCr-1;aB>=0;aB--){
if(mz[lK[aB]]===0){lK[aB]=lK[--aCr];}}this.kw=aCr;};function aLl(){var gt=ag.gt;var yZ=ag.yZ;
var a1a=ag.a1a;var l1=al.l1;for(var aB=al.kw-1;aB>=0;aB--){var gd=l1[aB];var eU=gt[gd];
var lL=yZ[gd];if(eU<=bL.fW(lL,4)){ak.dl(gd);}else if(eU>=lL){yZ[gd]=eU;if(eU>=250){a1a[gd]=1;
}}else{yZ[gd]=lL-Math.max(1,bL.fW(lL-eU,1000));}}}}function cW(){var aLn=new Uint16Array(aD.f2);
var aLo=0;this.dd=function(){aLn.fill(0);aLo=15;};this.hj=function(pR){var player=aD.ep;
if(!bA.gR.qK(player,pR)){return false;}if(!bA.gR.pk(player,bA.gR.ig(player,aR.hZ()),pR)){
return false;}if(!aLp(pR,bO.fc[0])){return false;}return true;
};function aLp(a7b,aLq){if(aLr(a7b)){return true;}if(aLn[a7b]+aLs(a7b,aLq)>aLo){return false;
}return true;}function aLs(a7b,aLq){var ed=bf.kN();if(ed>=3213){return 4+bL.fW(100*aLq,ae.k6(a7b));
}var tb=1+bL.fW(aD.kA,300);if(ed<357){return 2+bL.fW(100*aLq,tb);
}if(ed<714){return 2+bL.fW(100*aLq,4*tb);}if(ed<1071){return 2+bL.fW(100*aLq,10*tb);
}if(ed<2142){return 2+bL.fW(100*aLq,30*tb);}return 2+bL.fW(100*aLq,100*tb);
}this.ec=function(a7b,aLq){if(aLr(a7b)){return true;}var fX=aLs(a7b,aLq);if(aLn[a7b]+fX>aLo){
return false;}aLn[a7b]+=fX;return true;};this.eY=function(){if(bf.kN()%100!==99){
return;}if(bf.kN()<1071){aLo+=4;}else if(bf.kN()<2142){aLo+=6;}else if(bf.kN()<3213){
aLo+=8;}else{aLo+=10;}};function aLr(a7b){return aD.kk||aD.ki>=7||bf.kN()>=4284||bA.gR.jn(a7b);
}}var a2Y;var vZ;function ce(){var aLt;this.kr=null;this.kq=0;this.dd=function(){
aLt=[];if(aD.ki!==9){return;}this.aLu();};this.aLu=function(){this.kr=[0,0,0,0,0,0];
this.kq=0;var aLv=[256,227,170,148,100,0,0,0];var aLw=[0,8,24,30,46,70,256,333];
var aLx=[0,0,3,7,14,22,256,179];var j=aD.kQ;for(var aB=1;aB<aLv.length;aB++){
if(j<=aLw[aB]){this.kq=aLv[aB-1]-bL.fW((j-aLw[aB-1])*(aLv[aB-1]-aLv[aB]),(aLw[aB]-aLw[aB-1]));
this.kr[5]=aLx[aB-1]-bL.fW((j-aLw[aB-1])*(aLx[aB-1]-aLx[aB]),(aLw[aB]-aLw[aB-1]));
this.kr[0]=aD.f2-j-this.kq-this.kr[5];break;
}}aD.km=aD.f2-aD.kQ;aD.data.numberTeams=(aD.kQ>0)+(aD.km>0);aD.data.playerCount=aD.y5=aD.kQ+aD.km;
aD.data.teamPlayerCount=new Uint16Array([0,0,0,0,0,0,0,aD.kQ+this.kq,aD.km-this.kq]);aD.a5X.a5c();
};this.aJ2=function(player){aLt.push({player:player,gY:(14+ay.jh(20))});};this.eY=function(){
if(aD.ki!==9){return;}aLy();};function aLy(){for(var aB=aLt.length-1;aB>=0;aB--){
if(--aLt[aB].gY<=0){af.qS(aLt[aB].player,0,aj.s9.zp+aj.s9.a03);aLt.splice(aB);
}}}}function dB(){this.aLz=24;this.aM0=12;this.aJE=4096;this.fG=0;this.fH=0;this.xX=null;
this.xT=null;this.xU=null;this.xY=null;this.el=0;this.mapSeed=0;this.xV=false;this.xW=new aM1();
this.xN=new aM2();this.a7s=new aM3();this.dd=function(){this.xN.dd();};this.a7=function(map,aM4){
var xO;map=map%this.aLz;if(map===this.el&&(!aM5(this.el)||aM4===this.mapSeed)){
return;}this.xV=false;this.xW.aM6();ay.a5d(map);this.el=map;
this.mapSeed=aM4;if(aM5(map)){bS.xN.xO[map].aM7=aM4;}if(!this.aEf(this.el)){aM8();return;}
xO=bS.xN.xO[this.el];this.fG=xO.i;this.fH=xO.j;ay.a5d(xO.aM7);aq.a7([this.fG,this.fH,xO.n4,xO.n1]);
aM9();ap.aMA();aq.aMB();};this.aMC=function(map,aM4){var fo=aMD();this.a7(map,aM4);
this.xW.aM6();var fq=aMD();aME(fo);return fq;};this.a5y=function(canvas){if(!canvas){
return;}if(this.xX===canvas){return;}this.fG=canvas.width;this.fH=canvas.height;this.xX=canvas;
this.xT=this.xX.getContext("2d",{alpha:false});this.i4=this.xT.getImageData(0,0,this.fG,this.fH);
this.xY=this.i4.data;this.el=this.aMF();this.mapSeed=0;bS.xN.xO[this.el].name=aD.data.mapName;
};function aMD(){return{fG:bS.fG,fH:bS.fH,xX:bS.xX,xT:bS.xT,xU:bS.xU,xY:bS.xY,el:bS.el,
mapSeed:bS.mapSeed,xV:bS.xV};}function aME(fX){bS.fG=fX.fG;bS.fH=fX.fH;bS.xX=fX.xX;bS.xT=fX.xT;
bS.xU=fX.xU;bS.xY=fX.xY;bS.el=fX.el;bS.mapSeed=fX.mapSeed;bS.xV=fX.xV;}this.ek=function(aB){
return aB===3||aB===7||aB===9||aB===21||aB===this.aMF();};this.aMG=function(aB){
return aB===2||aB===7||aB===9||aB===20;};this.aMH=function(aB){return aB===1;};this.aMF=function(){
return this.aLz;};this.aEf=function(aB){return this.xN.xO[aB].aMI===undefined;};function aM5(aB){
return!(aB===1||!bS.aEf(aB)||aB===bS.aMF());}this.a5x=function(ql){if(ql.mapType===0){
return ql.mapProceduralIndex<10?ql.mapProceduralIndex:(10+ql.mapProceduralIndex);
}else if(ql.mapType===1){
return ql.mapRealisticIndex>=10?(22+ql.mapRealisticIndex-10):(ql.mapRealisticIndex+10);
}};this.aEg=function(ql,aMJ){
if(ql.mapType===0){ql.mapProceduralIndex=aMJ<10?aMJ:(aMJ-10);}else if(ql.mapType===1){
ql.mapRealisticIndex=aMJ-(aMJ>=22?12:10);}};}function aM1(){this.aAM=-1;this.a24=0;this.aMK=0;
this.aML=8;this.aMM=32;this.aMN=8;this.aMO=32;this.aMP=[0,0];this.a9N=[0,0,0,0];this.is=null;
this.aMQ=true;this.aMR=false;this.aM6=function(){if(this.aAM!==-1){clearTimeout(this.aAM);
}this.aAM=-1;this.is=null;aq.aMB();};this.dd=function(){if(aa.a2D()===7||this.aMR){
return;}this.aMQ=true;this.a24=0;this.aMK=1;this.aMP=[bS.xN.xO[bS.el].xp[0],bS.xN.xO[bS.el].xq[0]];
this.a9N=[bS.xN.xO[bS.el].aMI[3],bS.xN.xO[bS.el].aMI[4],bS.xN.xO[bS.el].aMI[5],bS.xN.xO[bS.el].aMI[6]];
this.aML=bS.xN.xO[bS.el].aMI[7];this.aMM=bS.xN.xO[bS.el].aMI[8];
this.aMN=bS.xN.xO[bS.el].aMI[9];this.aMO=bS.xN.xO[bS.el].aMI[10];if(this.aMQ){
this.aAM=setTimeout(aMS,16);}else{this.eY();}};function aMS(){bS.xW.eY();}this.eY=function(){
if(aa.a2D()===8&&aH.nI()){this.aAM=setTimeout(aMS,16);return;}if(this.a24===0){var aM7=ay.aMT();
ay.a5d(bS.xN.xO[bS.el].aMI[2]);aq.a7([bS.fG,bS.fH,bS.xN.xO[bS.el].aMI[0],bS.xN.xO[bS.el].aMI[1]]);
ay.a5d(aM7);this.is=aq.aMU();this.a24++;if(this.aMQ){this.aAM=setTimeout(aMS,16);return;}}
var j=!this.aMQ?1000000:10;j=(bS.fH-this.aMK-1)<j?(bS.fH-this.aMK-1):j;var ym=this.aMK+j;var gd,er;
for(var fE=this.aMK;fE<ym;fE++){for(var fC=1;fC<bS.fG-1;fC++){er=fC+fE*bS.fG;gd=4*er;if(iJ(gd)){
this.aMV(gd,er,1);}else{this.aMV(gd,er,0);if(ys(fC,fE,gd)){this.aMW(fC,fE);}}}}this.aMK=ym;
if(this.aMK>=bS.fH-1){bS.xT.putImageData(bS.xU,0,0,1,1,bS.fG-2,bS.fH-2);bf.dk=true;this.aM6();
return;}else{if(this.aMQ){this.aAM=setTimeout(aMS,16);}}return;};this.aMV=function(gd,er,eC){
var aMX=Math.floor(this.aMP[eC]+this.a9N[eC]*this.is[er]/10000)-bS.xY[gd];aMY(gd,aMX);
};this.aMZ=function(gd,eB,aMa,eC,a9N){var aMX=Math.floor(this.aMP[eC]+(1-eB/aMa)*a9N)-bS.xY[gd];
aMY(gd,aMX);};function aMY(gd,aMX){if(aMX>0){bS.xY[gd]+=aMX;bS.xY[gd+1]+=aMX;
bS.xY[gd+2]+=aMX;}}this.aMW=function(lf,lg){var gd,eB,aMa;var aAC=lf-this.aMM;var aMb=lg-this.aMM;
var yn=lf+this.aMM;var ym=lg+this.aMM;aAC=aAC<1?1:aAC;aMb=aMb<1?1:aMb;yn=yn>bS.fG-2?bS.fG-2:yn;
ym=ym>bS.fH-2?bS.fH-2:ym;for(var fE=aMb;fE<=ym;fE++){for(var fC=aAC;fC<=yn;fC++){
gd=4*(fC+fE*bS.fG);if(iJ(gd)){aMa=this.aML+(this.aMM-this.aML)*this.is[fC+bS.fG*fE]/10000;
if(Math.abs(lf-fC)>aMa||Math.abs(lg-fE)>aMa){
continue;}eB=Math.sqrt((lf-fC)*(lf-fC)+(lg-fE)*(lg-fE));
if(eB>=aMa){continue;}this.aMZ(gd,eB,aMa,1,this.a9N[3]);
}else{aMa=this.aMN+(this.aMO-this.aMN)*this.is[fC+bS.fG*fE]/10000;
if(Math.abs(lf-fC)>aMa||Math.abs(lg-fE)>aMa){
continue;}eB=Math.sqrt((lf-fC)*(lf-fC)+(lg-fE)*(lg-fE));
if(eB>=aMa){continue;}this.aMZ(gd,eB,aMa,0,this.a9N[2]);
}}}};function iJ(gd){return bS.xY[gd+2]>bS.xY[gd]&&bS.xY[gd+2]>bS.xY[gd+1];}function ys(fC,fE,gd){
return(fC>1&&iJ(gd-4))||(fC<bS.fG-2&&iJ(gd+4))||(fE>1&&iJ(gd-4*bS.fG))||(fE<bS.fH-2&&iJ(gd+4*bS.fG));
}}function aM9(){var su=aMc(bS.el);if(su){aMd(su[0],su[1],su[2],su[3],su[4]);}
}function aMc(el){if(el===2){return [[256],[256],[0,205,256],[500,500,0],[0,0,0]];}else if(el===7){
return [[512],[512],[0,380,512],[500,500,0],[0,0,0]];}else if(el===8){return [[410],[410],
[0,120,210],[0,80,640],[0,0,0]];}else if(el===9){return [[512],[512],[0,70,180,200,290,420,512],
[500,500,0,0,500,500,0],[0,0,0,0,0,0,0]];}else if(el===20){return [[512],[512],
[0,380,512],[500,500,0],[0,0,0]];}return null;}function aMd(aMe,aMf,aMg,aMh,aMi){
var aB,fC,fE;var iO=aMe.length-1;var aMj=bS.fG+bS.fH;aMj*=aMj;var aMk;
var aMl;var f5=aMg.length;var aMm=Array(f5);for(aB=f5-1;aB>=0;aB--){aMm[aB]=aMg[aB]*aMg[aB];
}var a3S;var aMn;var aMo=new Array(f5);var aDR=new Array(f5);var aMp=new Array(f5);
var fX=aq.aMU();if(aMi===undefined){aMi=new Array(f5);for(aB=f5-1;aB>=0;aB--){
aMi[aB]=0;}}for(aB=1;aB<f5;aB++){aMo[aB]=aMm[aB]-aMm[aB-1];aDR[aB]=aMh[aB]-aMh[aB-1];
aMp[aB]=aMi[aB]-aMi[aB-1];}for(fC=bS.fG-1;fC>=0;fC--){for(fE=bS.fH-1;fE>=0;fE--){
aMk=aMj;for(aB=iO;aB>=0;aB--){aMl=(fC-aMe[aB])*(fC-aMe[aB])+(fE-aMf[aB])*(fE-aMf[aB]);
aMk=aMl<aMk?aMl:aMk;}a3S=aMh[f5-1];aMn=aMi[f5-1];
for(aB=1;aB<f5;aB++){if(aMk<aMm[aB]){a3S=aMh[aB-1]+aII((aMk-aMm[aB-1])*aDR[aB],aMo[aB]);
aMn=aMi[aB-1]+aII((aMk-aMm[aB-1])*aMp[aB],aMo[aB]);
break;}}aMq(bS.fG*fE+fC,a3S,aMn,fX);}}}function aMq(eC,a3S,aMn,fX){if(a3S<500){
fX[eC]=bL.fW(fX[eC]*a3S*2,1000);}else if(a3S>500){fX[eC]+=bL.fW((10000-fX[eC])*2*(a3S-500),1000);
}fX[eC]+=bL.fW(aMn*(10*a3S-fX[eC]),1000);}function cg(){
var aMr;this.a7p=0;this.a7q=0;this.a7r=0;this.a7s=0;this.dd=function(){aMr=new Array(bS.aLz);
aMr[0]={i:[0,5000,8000,10000],eB:[220,250,255,220],tb:[190,220,0,0],fP:[170,200,0,0]
};aMr[1]={i:[0,4000,5000,6000,10000],eB:[25,0,100,0,25],tb:[25,0,0,0,25],fP:[25,0,0,0,25]};aMr[2]={
i:[0,500,2500,2999,3000,3200,4200,5200,5700,8800,10000],eB:[15,15,70,40,48,48,252,40,40,20,30],
tb:[80,80,190,90,46,46,248,180,180,90,140],fP:[120,120,220,110,37,37,217,10,10,10,10]
};aMr[3]={i:[0,400,1899,1900,3200,4500,6000,7700,8499,8500,9500,10000],
eB:[10,10,20,10,30,10,16,40,50,55,230,230],tb:[10,10,40,50,100,40,80,120,80,55,230,230],
fP:[80,80,200,10,60,10,16,40,50,55,230,230]};aMr[4]={i:[0,300,1400,1700,3000,4000,10000],
eB:[10,10,20,10,10,170,212],tb:[20,20,60,100,100,110,170],fP:[70,70,160,30,30,60,120]
};aMr[5]={i:[0,1000,3000,3500,4000,4500,7000,7500,8000,10000],eB:[10,10,20,10,5,10,20,5,20,25],
tb:[30,30,50,100,30,100,140,60,140,200],fP:[80,80,200,10,5,10,20,5,20,25]
};aMr[6]={i:[0,700,2650,3200,5000,8000,10000],eB:[10,10,60,255,255,200,200],
tb:[10,10,60,255,255,200,200],fP:[80,80,255,255,255,200,200]};aMr[7]={
i:[0,400,1999,2000,3200,4000,4700,5500,6500,9500,10000],eB:[10,10,80,255,255,55,6,70,20,155,255],
tb:[10,10,90,245,245,170,80,190,20,155,255],fP:[80,80,255,235,235,55,26,10,20,155,255]
};aMr[8]={i:[0,700,1300,1900,1901,2500,3400,6000,10000],eB:[25,30,30,30,255,255,30,40,20],
tb:[25,30,150,150,245,245,80,150,70],fP:[60,170,170,170,235,235,30,40,40]};aMr[9]={
i:[0,400,2009,2010,3300,4000,5200,6500,8000,9500,10000],eB:[10,10,80,255,255,55,23,36,20,155,255],
tb:[10,10,90,245,245,170,60,160,20,155,255],fP:[80,80,255,235,235,55,9,72,20,155,255]
};aMr[20]={i:[0,5500,6700,6999,7000,7300,7600,8200,10000],eB:[5,5,70,70,255,255,252,10,8],
tb:[20,28,190,190,255,255,248,90,60],fP:[60,80,220,220,220,220,217,10,8]
};aMr[21]={i:[0,1500,3000,4000,5000,5999,6000,9500,10000],eB:[12,30,10,16,40,50,55,170,170],
tb:[45,100,40,80,120,80,55,170,170],fP:[12,60,10,16,40,50,55,170,170]
};};this.aMA=function(){var i4=aMs();aMt(aMr[bS.el].i,aMr[bS.el].eB,aMr[bS.el].tb,aMr[bS.el].fP);
bS.xT.putImageData(i4,0,0);if(bS.aMH(bS.el)){
aMu();}bS.xV=true;bf.dk=true;};function aMs(){var i4;bS.xX=document.createElement(S[4]);
bS.xX.width=bS.fG;bS.xX.height=bS.fH;bS.xT=bS.xX.getContext("2d",{alpha:false});
i4=bS.xT.getImageData(0,0,bS.fG,bS.fH);bS.xY=i4.data;return i4;}function aMt(i,eB,tb,fP){
var aB,fO;var fX=aq.aMU();var f5=i.length-2;var fo;var aMv=new Array(f5+1);
var aMw=new Array(f5+1);var aMx=new Array(f5+1);var aMy=new Array(f5+1);for(fO=f5;fO>=0;fO--){
aMv[fO]=i[fO+1]-i[fO];aMw[fO]=eB[fO+1]-eB[fO];aMx[fO]=tb[fO+1]-tb[fO];aMy[fO]=fP[fO+1]-fP[fO];
}for(aB=bS.fG*bS.fH-1;aB>=0;aB--){for(fO=f5;fO>=0;fO--){if(fX[aB]>=i[fO]){fo=fX[aB]-i[fO];
bS.xY[aB*4]=eB[fO]+aII(aMw[fO]*fo,aMv[fO]);bS.xY[aB*4+1]=tb[fO]+aII(aMx[fO]*fo,aMv[fO]);
bS.xY[aB*4+2]=fP[fO]+aII(aMy[fO]*fo,aMv[fO]);bS.xY[aB*4+3]=255;break;}}
}}function aMu(){if(!ab.tf()||!bS.aMH(bS.el)){return;}var aMz=ab.aHT(S[100]);var aN0=ab.aHT(S[20]);
aN1(aMz,5,0.5,0.5,0.1);aN1(aN0,2,0.5,0.45,0.1);}function aN1(a3t,i6,fC,fE,globalAlpha){
bS.xT.save();bS.xT.globalAlpha=globalAlpha;bS.xT.imageSmoothingEnabled=false;
bS.xT.scale(i6,i6);bS.xT.drawImage(a3t,Math.floor(fC*(bS.fG/i6-a3t.width)),
Math.floor(fE*(bS.fH/i6-a3t.height)));bS.xT.restore();
}this.a5g=function(){var aB,gd,fC,fE,aN2,hv,fq;var a7q=0;var i=bS.fG;var j=bS.fH;var fo=i*j*4;
var aN3=aD0;var aN4=bS.xY;for(aB=i-1;aB>=0;aB--){gd=aB<<2;aN3[gd+2]=aN3[fo-gd-2]=3;}fo=i*4;
for(aB=j-1;aB>=0;aB--){gd=aB*fo;aN3[gd+2]=aN3[gd+fo-2]=3;}aN2=i-1;hv=j-1;for(fE=1;fE<hv;fE++){
fo=fE*i;for(fC=1;fC<aN2;fC++){gd=(fo+fC)<<2;fq=1-(aN4[gd+2]>aN4[gd+1]&&aN4[gd+2]>aN4[gd]);
aN3[gd+2]=6-5*fq;a7q+=fq;}}this.a7p=(i-2)*(j-2);this.a7s=0;if(bS.ek(bS.el)){
bS.a7s.aN5();bS.a7s.aN6(4,5);}this.a7q=aD.kA=a7q-this.a7s;this.a7r=this.a7p-this.a7q-this.a7s;
if(this.a7r){bS.a7s.aN6(6,2);bS.a7s.aN7();}};}function aM8(){var qa;if(bS.el===10){
qa="DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX";
}else if(bS.el===11){
qa="QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk";
}else if(bS.el===12){
qa="JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV";
}else if(bS.el===13){
qa="C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V";
}else if(bS.el===14){
qa="EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs";
}else if(bS.el===15){
qa="CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV";
}else if(bS.el===16){
qa="DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc";
}else if(bS.el===17){
qa="9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc";
}else if(bS.el===18){
qa="DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-";
}else if(bS.el===19){
qa="EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV";
}else if(bS.el===22){
qa="N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ";
}else if(bS.el===23){
qa="FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-";
}(new xG()).xI(qa);
}function aM2(){this.xO=null;this.aN8=null;this.aN9=null;this.dd=function(){this.aNA=[
L(134),L(135),L(136),L(137),L(138),L(139),L(140),L(141),L(142),L(143),L(144),L(145),L(146),
L(147),L(148),L(149),L(150),L(151),L(152),L(153),L(154),L(155),L(156),L(157)];var aNB=[120,105,92];
var cos=[12,12,60];var aNC=[300,300,9827,26,18,36,36,8,32,3,9];var aND=[140,130,120];
var aNE=[12,12,76];var aNF=[240,120,1024,30,19,30,70,8,20,3,9];var aNG=[130,117,106];
var aNH=[12,12,68];var aNI=[270,210,1024,28,19,33,50,8,26,3,9];this.xO=new Array(bS.aLz+1);
this.xO[0]={i:230,j:230,n4:1000,n1:2000,aM7:173};this.xO[1]={i:800,j:800,n4:100,n1:50,aM7:43};
this.xO[2]={i:512,j:512,n4:128,n1:32,aM7:0};this.xO[3]={i:960,j:960,n4:60,n1:8,aM7:0};
this.xO[4]={i:900,j:900,n4:100,n1:5,aM7:0};this.xO[5]={i:1000,j:1000,n4:100,n1:40,aM7:0};
this.xO[6]={i:1000,j:1000,n4:100,n1:20,aM7:0};this.xO[7]={i:1024,j:1024,n4:128,n1:32,aM7:0};
this.xO[8]={i:820,j:820,n4:200,n1:100,aM7:0};this.xO[9]={i:1024,j:1024,n4:128,n1:32,aM7:0};
this.xO[10]={xp:aND,xq:aNE,aMI:aNF};this.xO[11]={xp:aNG,xq:aNH,aMI:aNI};
this.xO[12]={xp:aNG,xq:aNH,aMI:aNI};this.xO[13]={xp:aNB,xq:cos,aMI:aNC};
this.xO[14]={xp:aNB,xq:cos,aMI:aNC};this.xO[15]={xp:aND,xq:aNE,aMI:aNF};
this.xO[16]={xp:aND,xq:aNE,aMI:aNF};this.xO[17]={xp:aNB,xq:cos,aMI:aNC};
this.xO[18]={xp:aNG,xq:aNH,aMI:aNI};this.xO[19]={xp:aNB,xq:cos,aMI:aNC};
this.xO[20]={i:1024,j:1024,n4:128,n1:32,aM7:0};this.xO[21]={i:940,j:940,n4:80,n1:8,aM7:0};
this.xO[22]={xp:aNG,xq:aNH,aMI:aNI};this.xO[23]={xp:aND,xq:aNE,aMI:aNF};
for(var aB=0;aB<bS.aLz;aB++){this.xO[aB].name=this.aNA[aB];}this.xO[bS.aLz]={name:""};
this.aN8=new Uint8Array(12);for(var aB=0;aB<10;aB++){this.aN8[aB]=aB;}this.aN8[10]=20;
this.aN8[11]=21;this.aN9=new Uint8Array(bS.aM0);for(aB=0;aB<10;aB++){this.aN9[aB]=10+aB;
}this.aN9[10]=22;this.aN9[11]=23;};}function aM3(){this.aN5=function(){var gd,fC,fE,fo;
var aN3=aD0;var aN4=bS.xY;var i=bS.fG;var aN2=i-1;var hv=bS.fH-1;var gY=0;for(fE=1;fE<hv;fE++){
fo=fE*i;for(fC=1;fC<aN2;fC++){gd=(fo+fC)<<2;if(aN4[gd]===aN4[gd+1]&&aN4[gd]===aN4[gd+2]){
gY++;aN3[gd+2]=4;}}}ap.a7s=gY;};this.aN6=function(aNJ,aNK){var aN3=aD0;var i=bS.fG;
var aN2=i-1;var hv=bS.fH-1;var id=0;for(var fE=1;fE<hv;fE++){var fo=fE*i;for(var fC=1;fC<aN2;fC++){
var ej=((fo+fC)<<2)+2;if(aN3[ej]===aNJ){aNL(ej,id,aNJ,aNK);id=(id+1)%32768;
}}}};function aNL(ej,id,aNJ,aNK){var f5=1;var aN3=aD0;var f7=ac.f7;var a3f=[ej];var aNM=(id>>8)<<1;
var aNN=id&255;aN3[ej-2]=aNM;aN3[ej-1]=aNN;aN3[ej]=5;while(f5){var a3g=[];for(var aB=0;aB<f5;aB++){
var eu=a3f[aB];for(var f8=3;f8>=0;f8--){var f9=eu+f7[f8];if(aN3[f9]===aNJ){aN3[f9-2]=aNM;
aN3[f9-1]=aNN;aN3[f9]=aNK;a3g.push(f9);}}}a3f=a3g;f5=a3f.length;}}this.aN7=function(){
var aN3=aD0;var i=bS.fG;var fL=3;var aN2=i-fL;var hv=bS.fH-fL;var aNO=fL*4;var aNP=fL*4*i;
for(var fE=fL;fE<hv;fE++){var fo=fE*i;for(var fC=fL;fC<aN2;fC++){var ej=((fo+fC)<<2)+2;
if(aN3[ej]===2&&(aN3[ej-aNO]!==2||aN3[ej+aNO]!==2||aN3[ej-aNP]!==2||aN3[ej+aNP]!==2)){
aN3[ej-2]=aN3[ej-2]|1;}}}};}var z8;var aD0;var a5j;var a5k;
function a5f(){if(z8===undefined){z8=document.createElement(S[4]);}z8.width=bS.fG;z8.height=bS.fH;
a5j=z8.getContext("2d",{alpha:true});a5k=aD0=null;a5k=a5j.getImageData(0,0,bS.fG,bS.fH);
aD0=a5k.data;bA.r1.xZ(aD0);}function ch(){var fX;var i;var j;var max;var aNQ;var n1;var aNR=10000;
var aNS;var aNT;var aNU;var aNV;var aNW;var aNX;var aNY;var aNZ;this.a7=function(a4t){
aNa(a4t);aNb();aNc();aNd();};this.aMU=function(){return fX;};this.aMB=function(){
fX=null;};function aNa(a4t){var aB;i=a4t[0];j=a4t[1];aNQ=a4t[2];n1=a4t[3];fX=new Int16Array(i*j);
max=i>j?i:j;aNS=new Int16Array(max);aNT=[];aNU=[];aNV=[];aNW=new Array(i);aNX=new Array(j);
for(aB=i-1;aB>=0;aB--){aNW[aB]=false;}for(aB=j-1;aB>=0;aB--){aNX[aB]=false;}aNY=new Int16Array(i);
aNZ=new Int16Array(j);}function aNe(f5){var aNf=ay.random()%aNR;var n4=ay.random()%(2*aNQ+1)-aNQ;
aNg(aNf,n4,f5);}function aNh(aNf,f5){var n4=ay.random()%(2*aNQ+1)-aNQ;
aNg(aNf,n4,f5);}function aNg(aNf,n4,f5){var aB;aNS[0]=aNf;for(aB=1;aB<f5;aB++){
aNS[aB]=aNS[aB-1]+n4;if(aNS[aB]>=aNR){aNS[aB]=aNR-1;n4=-n4;}else if(aNS[aB]<0){aNS[aB]=0;n4=-n4;
}else{n4+=ay.random()>=16384?n1:-n1;n4=n4< -aNQ?-aNQ:n4>aNQ?aNQ:n4;}}}function aNi(fC,fE,aNj,f5){
if(aNj){aNk(fC,fE,f5);}else{aNl(fC,fE,f5);}}function aNk(fC,fE,f5){var aB;
for(aB=0;aB<f5;aB++){fX[fE*i+fC+aB]=aNS[aB];}}function aNl(fC,fE,f5){var aB;for(aB=0;aB<f5;aB++){
fX[fE*i+fC+aB*i]=aNS[aB];}}function aNm(value,f5){var aB,aLQ,ej;var jf=value-aNS[f5-1];
if(jf===0){return;}aLQ=1+bL.fW(Math.abs(jf),f5-1);aLQ=jf<0?-aLQ:aLQ;aNS[f5-1]=value;
ej=f5-1-bL.fW(Math.abs(jf),Math.abs(aLQ));ej=ej<1?1:ej>f5-2?f5-2:ej;for(aB=f5-2;aB>=ej;aB--){
aNS[aB]+=jf-(f5-1-aB)*aLQ;}if(jf<0){aNn(f5);}else{aNo(f5);}}function aNo(f5){
var aB;for(aB=f5-2;aB>=1;aB--){if(aNS[aB]>=aNR){aNS[aB]=2*aNR-aNS[aB]-1;}}}function aNn(f5){
var aB;for(aB=f5-2;aB>=1;aB--){if(aNS[aB]<0){aNS[aB]=-aNS[aB]-1;}}}function aNp(a3f,a3g,f5){
var aB;for(aB=0;aB<f5;aB++){a3f[aB]=a3g[aB];}}function aNq(g){var aB;for(aB=0;aB<g.length-1;aB++){
g[aB]=g[aB+1]-g[aB];}g[g.length-1]=g[g.length-3];}function aNr(a6L,gap,hw){aNT.push(a6L);
aNU.push(gap);aNV.push(hw);}function aNs(){var aB;var aNt=aNT.length-1;for(aB=aNt-1;aB>=0;aB--){
if(aNU[aB]>aNU[aNt]){aNt=aB;}}return aNt;}function aNb(){aNe(max);aNp(aNZ,aNS,j);aNi(0,0,true,i);
aNh(fX[0],max);aNp(aNY,aNS,i);aNi(0,0,false,j);aNq(aNY);aNq(aNZ);aNg(fX[i-1],aNY[i-1],j);
aNi(i-1,0,false,j);aNg(fX[i*(j-1)],aNZ[j-1],i);aNm(fX[i*j-1],i);aNi(0,j-1,true,i);
aNW[i-1]=aNW[0]=true;aNX[j-1]=aNX[0]=true;aNr(0,i,true);aNr(0,j,false);}function aNc(){var aNt,a6L;
while(true){aNt=aNs();if(aNU[aNt]<5){return;}a6L=aNT[aNt]+bL.fW(aNU[aNt],2);if(aNV[aNt]){aNu(a6L);
}else{aNv(a6L);}aNr(a6L,aNT[aNt]+aNU[aNt]-a6L,aNV[aNt]);aNU[aNt]=a6L-aNT[aNt]+1;}}function aNv(fE){
var f5,aNw,aB;var aGp=0;var aNx=0;while(aNx<i-1){for(aB=aGp+1;aB<i;aB++){if(aNW[aB]){
aNx=aB;break;}}f5=aNx-aGp+1;aNg(fX[fE*i+aGp],aGp===0?aNZ[fE]:(aNS[aNw-1]-aNS[aNw-2]),f5);
aNm(fX[fE*i+aNx],f5);aNi(aGp,fE,true,f5);aNw=f5;aGp=aNx;}aNX[fE]=true;}function aNu(fC){
var f5,aNw,aB;var aGp=0;var aNx=0;while(aNx<j-1){for(aB=aGp+1;aB<j;aB++){if(aNX[aB]){aNx=aB;break;
}}f5=aNx-aGp+1;aNg(fX[fC+i*aGp],aGp===0?aNY[fC]:(aNS[aNw-1]-aNS[aNw-2]),f5);aNm(fX[aNx*i+fC],f5);
aNi(fC,aGp,false,f5);aNw=f5;aGp=aNx;}aNW[fC]=true;}function aNd(){var fC,fE;for(fC=0;fC<i;fC++){
if(!aNW[fC]){for(fE=0;fE<j;fE++){if(!aNX[fE]){aNy(fC,fE);}}}}}function aNy(fC,fE){
var value=fX[fE*i+fC-1]+fX[(fE-1)*i+fC];var a85=2;if(aNW[fC+1]){a85++;value+=fX[fE*i+fC+1];
}if(aNX[fE+1]){a85++;value+=fX[(fE+1)*i+fC];}fX[fE*i+fC]=bL.fW(value,a85);}}function aII(fO,fP){
return fO>=0?bL.fW(fO,fP):-bL.fW(-fO,fP);}function jw(fX){return fX*fX;}function a7J(fO,fP){
return fO>fP?fO:fP;}function aCV(fO,fP){return fO<fP?fO:fP;}function a9h(fO,fX,fP){
return fX<fO?fO:fX>fP?fP:fX;}function aNz(fX,f5){var ed=bL.fW(fX+1,2);for(var aB=0;aB<f5;aB++){
ed=bL.fW(ed+bL.fW(fX,ed),2);}return ed;}function aJx(fX,f5){if(fX<1){return 0;}return aNz(fX,f5);
}function aO0(nQ,nR,tK,a9Q,nd,ne,tL,u3){return!(nQ+tK<=nd||nR+a9Q<=ne||nQ>=nd+tL||nR>=ne+u3);
}function aO1(nQ,nR,tK,a9Q,nd,ne,tL,u3){return nQ<=nd&&nR<=ne&&nQ+tK>=nd+tL&&nR+a9Q>=ne+u3;
}function xQ(fX){return Math.floor(!!fX*(1+Math.log2(fX+0.5)));
}function bx(){this.fW=function(fO,fP){return Math.floor((fO+0.5)/fP);
};this.aO2=function(fO,fP){return Math.floor(fO*(fP+0.5));};this.sqrt=function(fX){
return ~~Math.sqrt(fX+0.5);};this.pow=function(e){return Math.floor(Math.pow(2,e)+0.5);
};this.iD=function(value,min,max){return Math.min(Math.max(value,min),max);
};this.aO3=function(fo,fq,fs){return Math.max(Math.min(fo,fq),fs);
};this.aO4=function(aO5,aO6,fC,fE){var iP=fC-aO5;var iS=fE-aO6;var aO7=0;if(iP===0){
aO7=iS>=0?Math.PI:0;}else{aO7=Math.atan(iS/iP);aO7+=iP>0?(0.5*Math.PI):(1.5*Math.PI);}return aO7;
};this.log2=function(fX){return Math.floor(!!fX*(1+Math.log2(fX+0.5)));};this.log10=function(fX){
return Math.floor(Math.log10(fX+0.5));};this.aO8=function(aO9,aOA,aOB,aOC,aOD){
return aO9>aOB-aOD&&aO9<aOB+aOD&&aOA>aOC-aOD&&aOA<aOC+aOD;};this.yN=function(aA7,aA9){
return aA7*aA7+aA9*aA9;};}function dD(){this.y=new aOE();this.tD=0;var aOF=new Array(32);
this.dd=function(){var aOG;var aOH=document.body.firstChild;while(aOH){aOG=aOH.nextSibling;
if(document.body.contains(aOH)&&(aOH.tagName==="DIV"||aOH.tagName==="INPUT"||aOH.tagName==="BUTTON")){
t.removeChild(document.body,aOH);
}aOH=aOG;}};this.u=function(eC,a2I,a4t){if(a2I===undefined){a2I=this.tD;
}bf.dk=true;if(eC===0){if(aa.a2D()===0){eC=5;}else{a0.a1.setState(13);}}this.sA();if(this.tD===eC){
a2I=aOF[eC].a2I;aOF[eC]=null;}this.tD=eC;var lL=aOF[eC];if(!lL||eC===4||eC===7||eC===8||
eC===9||eC===10||eC===11||eC===13||eC===15||eC===18||(eC>=20&&eC<=28)||eC===32||eC===33){
if(eC===0){aOI();return;}else if(eC===1){lL=new aOJ();}else if(eC===2){lL=new aOK();
}else if(eC===3){lL=new aOL();}else if(eC===4||eC===9||eC===10||eC===11||eC===13||eC===33){lL=a4t;
}else if(eC===5){lL=new aOM();}else if(eC===6){lL=new aON();}else if(eC===7){lL=new aOO(t.y.aOP);
}else if(eC===8){lL=a4t;}else if(eC===12){lL=new aOQ();}else if(eC===14){lL=new aOR();
}else if(eC===15){lL=new aOO(t.y.aOS);}else if(eC===16){lL=new aOT();}else if(eC===17){
lL=new aOU();}else if(eC===18){lL=new aOV();}else if(eC===19){lL=new aOW();}else if(eC===20){
lL=new aOX();}else if(eC===21){lL=new aOY();}else if(eC===22){lL=new aOZ();}else if(eC===23){
lL=new aOa();}else if(eC===24){lL=new aOb();}else if(eC===25){lL=new aOc();}else if(eC===26){
lL=new aOd();}else if(eC===27){lL=new aOe();}else if(eC===28){lL=new aOf();}else if(eC===29){
lL=new aOg();}else if(eC===30){lL=new aOh();}else if(eC===31){lL=new aOi();}lL.a2I=a2I;
aOF[eC]=lL;}lL.show(a4t);};function aOI(){var f5=aOF.length;for(var aB=0;aB<f5;aB++){aOF[aB]=null;
}}this.a2C=function(){if(!this.hr()){return;}this.aOj(this.a2H().a2I);};this.aOj=function(eC){
if(!this.hr()){return;}if(!aOF[eC]){this.u(eC);return;}this.sA();bf.dk=true;this.tD=eC;
aOF[eC].show();};this.sA=function(){if(!this.hr()){return;}aOF[this.tD].sA();};this.x=function(){
if(!this.hr()){return;}aOF[this.tD].sA();aOI();this.tD=0;a0.a1.setState(13);};this.vY=function(){
if(!this.hr()){return;}var lL=aOF[this.tD];if(lL.vY){lL.vY();}};this.resize=function(){
if(!this.hr()){return false;}aOF[this.tD].resize();};this.hI=function(fC,fE){if(!this.hr()){
return;}var lL=aOF[this.tD];if(lL.hI){lL.hI(fC,fE);}};this.a2Z=function(fC,fE){if(!this.hr()){
return;}var lL=aOF[this.tD];if(lL.a2Z){lL.a2Z(fC,fE);}};this.a2x=function(){if(!this.hr()){return;
}var lL=aOF[this.tD];if(lL.a2x){lL.a2x();}};this.a2c=function(lf,lg,deltaY){if(!this.hr()){return;
}var lL=aOF[this.tD];if(lL.a2c){lL.a2c(lf,lg,deltaY);}};this.a37=function(code){if(!this.hr()){
return false;}var lL=aOF[this.tD];if(lL.a37){lL.a37(code);}return true;};this.eY=function(){
if(!this.hr()){return;}var lL=aOF[this.tD];if(lL&&lL.eY){lL.eY();}};this.hr=function(){
return this.tD>0;};this.a2H=function(){return aOF[this.tD];};this.a66=function(eC){
return aOF[eC];};this.aOk=function(){return aOF;};this.removeChild=function(v6,a4O){try{
v6.removeChild(a4O);}catch(e){console.log("removeChild error "+e);}};}function aOO(data){var aOl;
var aOm;function dd(){aOl=new vJ(data.username,[new w(S[2]+L(39),function(){bI.clear();t.a2C();
}),new w(data.aOn?("🔄 "+L(158)):L(159),function(){t.u(8,data.aOn?t.a2H().a2I:undefined,new tE(25,{
tF:0,tB:data.tB,tC:data.tC}));},0,0,1)]);aOm=new qm(aOl.vP,aOo());}function aOo(){var qo=[];
qo.push(aOp());aOq(qo);aOr(qo);qo.push(aOs());if(data.aOn){qo.push(aOt());}qo.push(aOu());
if(!data.aOn){qo.push(aOv());qo.push(aOw());qo.push(aOx());}qo.push(aOy());qo.push(aOz());aP0(qo);
aP1(qo);qo.push(aP2());aP3(qo);aP4(qo);return qo;}function aOs(){var aP5=new qW();aP5.qZ(L(160));
aP5.qf(b0.y.aP6("/wiki/gold"),S[6]).style.marginBottom=S[12];var aP7=[L(161),L(162),L(163),L(164),
L(165),L(166),L(167),L(168),L(169),L(170),L(171),L(172),L(173),L(174)];var eB=data.aP8;aP5.qf(
L(175)+bA.rs.a5A(data.wn,0.01,2)+S[8]+L(176)+(eB+1)+S[22]+data.wm+S[8]+L(177)+aP7[aP9(eB,data.wn)]
);return aP5;}function aP9(eB,wn){if(eB<10){return 0;}if(eB<30){return 1;
}if(eB<60){return 2;}wn=bL.fW(wn,100);if(wn>=30000){return 3;}if(wn>=12000){return 4;}if(wn>=7000){
return 5;}if(wn>=3000){return 6;}if(wn>=1000){return 7;}if(wn>=500){return 8;}if(wn>=200){return 9;
}if(wn>=70){return 10;}if(wn>=20){return 11;}if(wn>=3){return 12;}return 13;}function aOt(){
var aP5=new qW();aP5.qZ(L(178));aP5.qf(b0.y.aP6(S[133]),S[6]).style.marginBottom=S[12];
var rg=new rh({value:bj.eQ.data[147].value,eC:-1},1,undefined,function(e){
bj.sL.sM(147,aPA(e.target.value));
});aP5.qk(rg);var aPB=new w(L(14),function(e){if(rg.e.readOnly&&b0.y.eZ(0)){
bA.qt.vC(e);aPC();b0.aGE.aGF({tF:0,tB:data.tB,value:parseInt(bj.eQ.data[147].value,10)});
}return true;},1);var aPD=new w(L(179),function(e){if(e.textContent===L(179)){e.textContent=L(180);
rg.e.readOnly=true;aPB.rD(0);aPB.button.style.color=bB.oz;bj.sL.sM(147,rg.e.value);
aPA(bj.eQ.data[147].value);}else{aPC();}return true;});aP5.qk((new sO([aPD.button
])));var qc=aP5.qb();var aPA=function(fX){qc.innerHTML=t.y.aPE(fX,bj.eQ.data[105].value,data.tB);
};var aPC=function(){aPD.button.textContent=L(179);rg.e.readOnly=false;aPB.rD(1);
aPB.button.style.color=bB.o0;};aPA(bj.eQ.data[147].value);aP5.qk((new sO([aPB.button])));
return aP5;}function aOu(){var aP5=new qW();aP5.qZ(L(181));var rg=new rh({value:data.tB,eC:-1});
rg.e.readOnly=true;aP5.qk(rg);aP5.qk((new sO([(new w(L(182),function(e){bA.qt.a4M(rg.e);
bA.qt.vC(e);return true;})).button])));return aP5;}function aOv(){var aP5=new qW();
aP5.qZ(L(183));var aPF=new rh(bj.eQ.data[106]);aPF.e.readOnly=true;aPF.e.type=S[34];aP5.qk(aPF);
aP5.qk((new sO([(new w(L(184),function(e){if(e.textContent===L(184)){e.textContent=L(185);
aPF.e.type=S[44];}else{e.textContent=L(184);aPF.e.type=S[34];}return true;})).button,
(new w(L(182),function(e){bA.qt.a4M(aPF.e);bA.qt.vC(e);return true;})).button])));aP5.qk((new sO([
(new w(L(186),function(){t.u(8,t.a2H().a2I,new tE(15));})).button])));aP5.qZ(L(187),S[12]);
aP5.qb(L(188));aP5.qb(L(189));aP5.qb(L(190));return aP5;}function aOw(){var aP5=new qW();
aP5.qZ(L(191));aP5.qk((new sO([(new w(L(192),function(){t.u(6,t.a2H().a2I);})).button
])));aP5.qk((new sO([(new w(L(193),function(){bj.sL.sM(105,"");t.u(8,t.a2H().a2I,new tE(18));
})).button])));aP5.qk((new sO([(new w(L(194)+bj.eQ.data[105].value,function(){
t.u(4,0,new v(L(195),L(196),true,[new w(S[2]+L(39),function(){t.u(7,t.a66(7).a2I);})
]));},bB.og)).button])));return aP5;}function aP4(qo){
if(data.aOn){return;}if(!bj.vx.get().length){return;}var aP5=new qW();aP5.qZ(L(197));var qi;
var aPG;var eC=0;var aPH=function(){var aCv=bj.vx.get().length;aPG[0].rD(eC===aCv?bB.oC:bB.oN);
aPG[1].rD(eC===aCv?bB.oC:bB.og);aPG[2].rD(eC===aCv||eC>=aCv-1||eC<5?bB.oC:bB.og);
};aPG=[new w(L(198),function(){t.u(8,undefined,new tE(25,{tF:0,tB:bj.vx.get()[eC],
tC:0}));},bB.oC,1),new w(L(199),function(){bj.vx.wD(eC);qi.qj[eC].remove();qi.qj.splice(eC,1);
for(var aB=eC;aB<qi.qj.length;aB++){qi.qj[aB].name=""+aB;}if(bj.vx.get().length){
eC=Math.max(eC-1,0);qi.qj[eC].textContent=qi.qj[eC].textContent.replace("⚪","🟢");}aPH();},bB.oC,1),
new w(L(200),function(){for(var hx=qi.qj.length-1;hx>eC;hx--){bj.vx.wD(hx);qi.qj[hx].remove();
qi.qj.splice(hx,1);}aPH();},bB.oC,1)];aPH();qi=new vF(bj.vx.w9(),function(aB){eC=aB;aPH();});
qi.qj[0].style.marginTop=S[21];aP5.qh(qi);aP5.qk((new sO([aPG[0].button])));
aP5.qk((new sO([aPG[1].button])));aP5.qk((new sO([aPG[2].button])));
qo.push(aP5);}function aOx(){var aP5=new qW();aP5.qZ(L(201));aP5.qb(L(202));bj.y.wW();
var qi;var aPG;var aPH=function(eC){aPG[0].rD(eC===0?bB.oC:bB.oN);aPG[1].rD(eC===0?bB.oC:bB.og);
aPG[2].rD(eC===(qi.qj.length-1)||eC<5?bB.oC:bB.og);};aPG=[new w(L(203),function(){
var eC=Math.min(bj.eQ.data[117].value,qi.qj.length-1);if(eC<1){return;}var data=bj.y.wa(eC);
bj.sL.sM(105,data.tB);bj.sL.sM(106,data.password);t.u(8,t.a2H().a2I,new tE(18));},bB.oC,1),
new w(L(199),function(){var eC=Math.min(bj.eQ.data[117].value,qi.qj.length-1);if(eC<1){return;
}qi.qj[eC].remove();qi.qj.splice(eC,1);for(var aB=eC;aB<qi.qj.length;aB++){qi.qj[aB].name=""+aB;
}bj.y.wZ(eC);eC=bj.eQ.data[117].value;qi.qj[eC].textContent=qi.qj[eC].textContent.replace("⚪","🟢");
aPH(eC);},bB.oC,1),new w(L(200),function(){
var eC=Math.min(bj.eQ.data[117].value,qi.qj.length-1);if(eC===qi.qj.length-1){
return;}for(var aB=qi.qj.length-1;aB>eC;aB--){qi.qj[aB].remove();qi.qj.splice(aB,1);bj.y.wZ(aB);
}aPH(eC);},bB.oC,1)];qi=new vF(bj.eQ.data[117],aPH);aPH(0);qi.qj[0].style.marginTop=S[21];
aP5.qh(qi);aP5.qk((new sO([aPG[0].button])));aP5.qk((new sO([aPG[1].button])));
aP5.qk((new sO([aPG[2].button])));return aP5;}function aOz(){var aP5=new qW();
aP5.qZ(L(204));aP5.qf(L(205)+bA.rs.a5A(data.wj,0.1,1)+S[8]+L(176)+(data.wk+1)+S[22]+
data.wm+S[8]+L(206)+data.wl);return aP5;}function aOy(){var aP5=new qW();aP5.qZ(L(207));
var aP7=[L(208),L(209),L(210),L(211)];var eB=data.aPI;aP5.qf(L(212)+(data.a1U/100).toFixed(2)+
S[8]+L(176)+(eB+1)+S[22]+data.wm+S[8]+L(177)+aP7[eB<10?0:eB<50?1:eB<200?2:3]
);return aP5;}function aP2(){var aP5=new qW();aP5.qZ(L(213));
aP5.qf(L(214)+data.aPJ+S[8]+L(176)+(data.aPK+1)+S[22]+data.wm+S[8]+L(177)+bo.eE(data.aPK)
);if(data.aOn){var rg=new rh({value:bj.eQ.data[157].value,eC:-1},1,undefined,function(e){
bj.sL.sM(157,aPA(e.target.value));
});rg.e.style.marginTop=S[30];aP5.qk(rg);var aPD=new w(L(179),function(e){
if(e.textContent===L(179)){e.textContent=L(180);rg.e.readOnly=true;
aPL[0].rD(0);aPL[1].rD(0);aPL[0].button.style.color=bB.oz;aPL[1].button.style.color=bB.oz;
aPA(bj.eQ.data[157].value);}else{aPC();}return true;});aP5.qk((new sO([
aPD.button])));var aPL=[new w("−",function(e){if(rg.e.readOnly&&b0.y.eZ(0)){bA.qt.vC(e);
aPC();b0.aGE.aGF({tF:2,tB:data.tB,value:bL.iD(parseInt(bj.eQ.data[157].value,10),3,32767)
});}return true;},1),new w("+",function(e){if(rg.e.readOnly&&b0.y.eZ(0)){bA.qt.vC(e);
aPC();b0.aGE.aGF({tF:1,tB:data.tB,value:bL.iD(parseInt(bj.eQ.data[157].value,10),3,32767)
});}return true;},1)];var qc=aP5.qb();var aPA=function(fX){
fX=bA.gR.a4q(fX,3,32767);qc.textContent=L(215,[fX-1,fX,bj.eQ.data[105].value]);
return fX;};aP5.qk(new sO([aPL[0].button,aPL[1].button]));for(var aB=0;aB<2;aB++){
aPL[aB].button.style.fontSize="1.6em";}var aPC=function(){aPD.button.textContent=L(179);
rg.e.readOnly=false;aPL[0].rD(1);aPL[1].rD(1);aPL[0].button.style.color=bB.o0;
aPL[1].button.style.color=bB.o0;};aPA(bj.eQ.data[157].value);}return aP5;}function aOp(){
var aP5=new qW();aP5.qZ(L(216));var a1l=data.aPM;if(a1l<1){aP5.qf(L(217));if(data.aPN===0){
aP5.qb(L(218));}else if(data.aPN===1){aP5.qb(L(219));}else if(data.aPN===2){aP5.qb(L(220));
}else if(data.aPN===3){aP5.qb(L(221));}else if(data.aPN===4){aP5.qb(L(222));}else if(data.aPN===5){
aP5.qb(L(223));}else if(data.aPN===6){aP5.qb(L(224));}else{aP5.qb(L(225));}}else{aP5.qf(L(226));
var a7m;if(a1l<2){a7m=L(227);}else if(a1l<61){if(a1l===2){a7m=L(228);}else{a7m=L(229,[a1l-1]);
}}else if(a1l<84){if(a1l===61){a7m=L(230);}else{a7m=L(231,[a1l-60]);}}else if(a1l<255){
if(a1l===84){a7m=L(232);}else{a7m=L(233,[a1l-83]);}}else{a7m=L(234);}aP5.qb(a7m);}aP5.qk(new sY());
if(data.aOn){var qc=aP5.qb();aP5.qk((new sO([(new w(bj.vx.uV(data.tB)?L(235):L(236),function(e){
if(bj.vx.wA(data.tB)){e.textContent=L(235);aPA(1);}else{e.textContent=L(236);
aPA(0);}return true;})).button])));var aPA=function(fX){qc.textContent=fX?L(237):"";
};if(bj.vx.uV(data.tB)){aPA(1);}aP5.qk(new sY());}var rg=new rh({value:data.username,eC:-1});
rg.e.readOnly=true;aP5.qk(rg);aP5.qk((new sO([(new w(L(182),function(e){
bA.qt.a4M(rg.e);bA.qt.vC(e);return true;})).button])));if(!data.aOn){aP5.qb(L(238));
}else{aP5.qk(new sY());aP5.qf(b0.y.aP6("/wiki/reports"),S[6]).style.marginBottom=S[12];
aP5.qk((new sO([(new w(L(239),function(e){b0.aGE.aGF({
tF:3,tB:data.tB,value:0});bA.qt.vC(e);return true;},bB.og)).button])));aP5.qk((new sO([
(new w(L(240),function(e){b0.aGE.aGF({tF:3,tB:data.tB,value:1});bA.qt.vC(e);return true;
},bB.og)).button])));var aPO=bj.eQ.data[105].value;aPO=aPO===S[113]||aPO===S[121];aP5.qk((new sO([
(new w(aPO?S[115]:S[112],function(e){b0.aGE.aGF({tF:3,tB:data.tB,value:2});bA.qt.vC(e);
return true;},aPO?bB.od:bB.og)).button])));aP5.qk((new sO([(new w(aPO?S[117]:S[111],function(e){
b0.aGE.aGF({tF:3,tB:data.tB,value:3});bA.qt.vC(e);return true;
},aPO?bB.od:bB.og)).button])));if(aPO){aP5.qk((new sO([(new w(S[59],function(e){b0.aGE.aGF({tF:3,
tB:data.tB,value:4});bA.qt.vC(e);return true;},bB.od)).button])));}}return aP5;}function aOq(qo){
if(data.aOn){return;}var aP5=new qW();aP5.qZ(L(241));var qc=aP5.qb(data.aPP.length+S[141]);
qc.style.textAlign=S[10];var aDG=true;var aPQ=new vh(0,1,function(e){
var gY=e.target.value.length;qc.textContent=gY+S[141];if(gY>160){if(aDG){
aDG=false;aPD.rD(1);}}else if(!aDG){aDG=true;aPD.rD(0);}});aPQ.e.rows=6;aPQ.e.style.fontSize=S[17];
aPQ.vo(data.aPP);aP5.qk(aPQ);if(data.aPR!==0){var aPD=new w(L(242),function(){
if(!aDG){return true;}t.u(8,t.a2H().a2I,new tE(29,{tF:1,qa:aPQ.vp().substring(0,160)}));},0,0,1);
aP5.qk((new sO([aPD.button])));aP5.qk((new sO([(new w(data.aPR===1?L(243):L(244),function(){
t.u(8,t.a2H().a2I,new tE(29,{tF:0,qa:""}));},0,0,1)).button])));aP5.qb(data.aPR===1?
L(245,[data.aPS-1]):L(246,[data.aPS-1]));aP5.qb(L(247,[data.aPT]));qo.push(aP5);
return;}var aPB=new w(L(248),function(){if(aPQ.e.readOnly){t.u(8,t.a2H().a2I,new tE(29,{
tF:1,qa:aPQ.vp().substring(0,160)}));return;}return true;},1);var aPD=new w(L(179),function(e){
if(e.textContent===L(179)){if(!aDG){return true;}e.textContent=L(180);aPQ.e.readOnly=true;
aPB.rD(0);aPB.button.style.color=bB.oz;}else{aPC();}return true;});aP5.qk((new sO([
aPD.button])));aP5.qb(L(247,[data.aPT]));var aPC=function(){aPD.button.textContent=L(179);
aPQ.e.readOnly=false;aPB.rD(1);aPB.button.style.color=bB.o0;};aP5.qk((new sO([aPB.button])));
qo.push(aP5);}function aOr(qo){if(!data.aOn){return;}if(data.aPR===0){return;}var aP5=new qW();
aP5.qZ(L(249));aP5.qd(data.aPP);aP5.qk((new sO([(new w(L(250,0,"Report"),function(e){
if(b0.y.eZ(0)){bA.qt.vC(e);b0.aGE.aPU({tF:5,tB:data.tB});}return true;},0,0,1)).button
])));qo.push(aP5);}function aP0(qo){var aP5=new qW();var aPV=data.wq;aP5.qZ(L(251));
aP5.qf(L(252,[(data.wo.length?("["+data.wo+"]"):"-")]));aP5.qf(L(253,[bA.rs.a5A(aPV,0.01,2)]));
aP5.qf(L(254,[(data.ws+1)+S[22]+data.wm]));var aPW=data.wt;aP5.qf(L(255,[bA.rs.a5A(aPW,0.1,1)]));
var aPX=data.wv;aP5.qf(L(256,[aPX]));aP5.qf(L(257,[bA.rs.a5A(aPW/Math.max(aPX,1),0.1,2)]));
aPV=data.wr;aP5.qZ(L(258),S[12]);aP5.qf(L(252,[(data.wp.length?("["+data.wp+"]"):"-")]));
aP5.qf(L(253,[bA.rs.a5A(aPV,0.01,2)]));aPW=data.wu;aP5.qf(L(255,[bA.rs.a5A(aPW,0.1,1)]));
aPX=data.ww;aP5.qf(L(256,[aPX]));aP5.qf(L(257,[bA.rs.a5A(aPW/Math.max(aPX,1),0.1,2)]));
aP5.qf(b0.y.aP6(S[134]),S[6]).style.marginTop=S[12];qo.push(aP5);
}function aP1(qo){var aP5=new qW();aP5.qZ(L(259));aP5.qf(L(212)+(data.aPY/10).toFixed(1)+
S[8]+L(177)+(data.aPZ.length?L(260,[data.aPZ]):L(261)));if(data.aOn){
aP5.qk((new sO([(new w(L(262),function(e){if(b0.y.eZ(0)){bA.qt.vC(e);b0.aGE.aPU({tF:4,tB:data.tB
});}return true;},0,0,1)).button])));}aP5.qf(b0.y.aP6(S[134]),S[6]).style.marginTop=S[12];
qo.push(aP5);}function aP3(qo){if(data.aOn&&!data.aPa){return;}if(a0.id!==0&&!data.aOn&&!data.aPa){
return;}var aP5=new qW();aP5.qZ(S[107]);if(!data.aOn&&data.aPb){
aP5.qk((new sO([(new w(L(184),function(){b0.aGE.aPU({tF:7,tB:data.tB});data.aPb=0;
t.u(7);})).button])));qo.push(aP5);return;}if(data.aPa){aP5.qf(L(263,[(data.aPc/100).toFixed(2)])+
S[8]+L(264,[(1+data.aPd)+S[22]+data.aPe])+S[8]+L(265,[data.aPf?L(266):L(267)])
);if(!data.aOn){aP5.qk((new sO([(new w(L(268),function(){b0.aGE.aPU({
tF:8,tB:data.tB});data.aPa=0;bj.sL.sM(160,0);t.u(7);})).button])));}qo.push(aP5);return;
}aP5.qf(L(269),S[6]).style.marginBottom=S[66];aP5.qf(S[69]+L(270),S[6]).style.whiteSpace=S[23];
aP5.qf(S[69]+L(271),S[6]).style.whiteSpace=S[23];aP5.qf(S[69]+L(272),S[6]).style.whiteSpace=S[23];
aP5.qf(L(273),S[6]).style.marginTop=S[64];aP5.qf(L(274),S[6]).style.marginTop=S[64];
aP5.qf(S[60]+bK.aPg+"' target='_blank'>patreon.com/c/territorial</a>",S[6]).style.marginTop=S[66];
var a4L="https://www.patreon.com/oauth2/authorize?state="+data.tB+"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://"+b0.y.a1R()+"/";
aP5.qf(L(275),S[6]).style.marginTop=S[64];
aP5.qf(S[60]+a4L+"' target='_blank'>patreon.com/oauth2/...</a>",S[6]).style.marginTop=S[66];
if(!data.aOn){aP5.qk(new sY());aP5.qk((new sO([(new w(L(185),function(){b0.aGE.aPU({
tF:6,tB:data.tB});data.aPb=1;t.u(7);})).button])));aP5.qf(L(276),S[6]).style.marginTop=S[6];
}qo.push(aP5);}this.show=function(){if(data.aOn){bI.aPh(S[101],data.tB);
}aOl.show();this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();
aOm.resize();};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};dd();}function aOZ(){var aPi;
var aPj;var aPk;function rC(){aPi=new vJ(L(277),[new w(S[2]+L(39),aPl)]);aPj=new qm(aPi.vP,aPm());
}function aPl(){aPn();if(aD.data.aIncomeType!==2){aD.data.aIncomeData=null;}t.aOk()[19]=null;
t.a2C();}function aPn(){if(aD.data.aIncomeType===2){bA.r1.a3j(aPk.vp(),aD.data.aIncomeData,255);
if(!bA.r1.max(aD.data.aIncomeData)){aD.data.aIncomeType=0;
}}else if(aD.data.aIncomeType===1&&!aD.data.aIncomeValue){aD.data.aIncomeType=0;
}}function aPm(){var qo=[];aPo(qo);aPp(qo);aPq(qo);return qo;}function aPo(qo){var aP5=new qW();
aP5.qZ(L(278));aP5.qh(new vF({su:[L(279),L(280),L(281)],value:aD.data.aIncomeType},
function(eC){aPn();if(eC===2&&!aD.data.aIncomeData){aD.data.aIncomeData=new Uint8Array(aD.f2);
}aD.data.aIncomeType=eC;t.u(22);}));qo.push(aP5);}function aPp(qo){
if(aD.data.aIncomeType!==1){return;}var aP5=new qW();aP5.qZ(S[38]);aP5.qk(new rh({eC:-1,
value:aD.data.aIncomeValue},1,0,function(e){var value=bL.iD(Math.floor(e.target.value),0,255);
e.target.value=aD.data.aIncomeValue=value;}));qo.push(aP5);}function aPq(qo){
if(aD.data.aIncomeType!==2){return;}var aP5=new qW();aP5.qZ(S[19]);aPk=new vh(0,1,0,1);
aPk.vo(bA.rs.a5G(aD.data.aIncomeData,4));aP5.qk(aPk);qo.push(aP5);}this.show=function(){
aPi.show();this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){
aPi.resize();aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};
rC();}function aOc(){var aPi;var aPj;var aPk;function rC(){aPi=new vJ(L(64),[new w(S[2]+L(39),aPl)
]);aPj=new qm(aPi.vP,aPm());}function aPl(){aPn();aPr();t.aOk()[19]=null;t.a2C();}function aPn(){
if(aD.data.botDifficultyType===3){bA.r1.a3j(aPk.vp(),aD.data.botDifficultyData,aE.kb.length-1);
}}function aPr(){if(aD.data.botDifficultyType===3){
if(!bA.r1.a3X(aD.data.botDifficultyData)){aD.data.botDifficultyType=0;
}}if(aD.data.botDifficultyType!==3){aD.data.botDifficultyData=null;}}function aPm(){var qo=[];
aPo(qo);if(aD.data.botDifficultyType===0){aPs(qo,-1);}else if(aD.data.botDifficultyType===2){
for(var aB=0;aB<aD.data.teamPlayerCount.length;aB++){if(aD.data.teamPlayerCount[aB]){aPs(qo,aB);
}}}else if(aD.data.botDifficultyType===3){aPq(qo);}return qo;}function aPo(qo){var aP5=new qW();
aP5.qZ(L(278));var su=[L(280),L(282),L(283),L(281)];var value=aD.data.botDifficultyType;
if(aD.data.gameMode===0){value=Math.min(value,2);su.splice(2,1);}aP5.qh(new vF({su:su,value:value},
function(eC){aPn();aD.data.botDifficultyType=eC;if(aD.data.gameMode===0&&eC===2){
aD.data.botDifficultyType=3;}if(aD.data.botDifficultyType===3&&!aD.data.botDifficultyData){
aD.data.botDifficultyData=new Uint8Array(aD.f2);
}if(aD.data.botDifficultyType===2&&!aD.data.botDifficultyTeam){
aD.data.botDifficultyTeam=new Uint8Array(9);}t.u(25);}));
qo.push(aP5);}function aPs(qo,eC){var aP5=new qW();aP5.qZ(eC<0?L(64):(L(63)+" "+bg.a1N[(eC)%9]));
if(eC>=0){aP5.qf(L(284)+": "+aD.data.teamPlayerCount[eC]).style.marginBottom=S[17];
}var value=eC<0?aD.data.botDifficultyValue:aD.data.botDifficultyTeam[eC];
aP5.qh(new vF({su:aE.kb,value:value},function(hx){if(eC<0){aD.data.botDifficultyValue=hx;
}else{aD.data.botDifficultyTeam[eC]=hx;}}));qo.push(aP5);}function aPq(qo){var aP5=new qW();
aP5.qZ(S[19]);aPk=new vh(0,1,0,1);aPk.vo(bA.rs.a5G(aD.data.botDifficultyData,8));aP5.qk(aPk);
qo.push(aP5);}this.show=function(){aPi.show();this.resize();};this.sA=function(){aPi.sA();};
this.resize=function(){aPi.resize();aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();
}};rC();}function aPt(data){var aOl;var aPu,aPv,aPw,aPx;var aPy,aPz;var colors;var aQ0,aQ1;
var aQ2=0;var aQ3=0;var aQ4=false;var aQ5=false;var aQ6=[1,5,60,4*60,24*60,7*24*60,30*24*60];
function dd(){aQ7();aQ8();aQ9();var aQA=["M1","M5","H1","H4","D1","W1","MN"];
aOl=new vJ(L(285)+", "+aQA[data.aQB]+", "+bA.a3O.a4A(aQ0),[new w(S[2]+L(39),function(){t.u(1);}),
new w(L(286),function(){t.u(14);})],false);}function aQ7(){var aB;var f8=data.data;
var f5=f8.length;var max=1;for(aB=0;aB<f5;aB++){max=Math.max(max,f8[aB].aQC.length);
}for(aB=0;aB<f5;aB++){while(f8[aB].aQC.length<max){f8[aB].aQC.unshift(0);}}}function aQ8(){
var ge;var eU=new Date();var a4B=1000*60*eU.getTimezoneOffset();var hx=eU.getTime()-a4B;
aQ0=new Date(hx);if(data.aQB===6){aQD(eU,a4B);return;}ge=1000*60*aQ6[data.aQB];if(data.aQB<=4){
aQ1=new Date(hx+ge-eU.getTime()%ge);return;}aQ1=new Date(hx+ge-(eU.getTime()+3*24*60*60*1000)%ge);
}function aQD(eU,a4B){var aQE=eU.getUTCFullYear();var month=eU.getUTCMonth()+1;
if(month<12){aQ1=new Date(Date.UTC(aQE,month)-a4B);}else{aQ1=new Date(Date.UTC(aQE+1,0)-a4B);
}}function aQ9(){var ed=bA.color;colors=[bB.o0,ed.ns(255,0,0),ed.ns(0,200,0),
ed.ns(80,80,255),ed.ns(255,255,0),ed.ns(255,0,255),ed.ns(0,255,255),ed.ns(255,140,0),
ed.ns(128,128,128),ed.ns(0,255,140)];}this.show=function(){aQ5=bj.eQ.data[127].value;
aOl.show();this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();
var ed=h.k;var vX=aOl.vU();var aQF=ed*vX.vW;var sD=ed*vX.sD;aPy=bA.qt.tc(0.06);aPz=bA.qt.tc(0.04);
aPu=bA.qt.tc(0.06);aPv=sD+aPy;aPw=h.i-aPu-aPz;aPx=aQF+sD-aPv-aPz;};this.vY=function(){
aOl.vY();aQG();aQH();aQI();};function aQH(){vZ.lineWidth=bc.zz;vZ.strokeStyle=bB.o0;
vZ.beginPath();vZ.moveTo(aPu,aPv);vZ.lineTo(aPu,aPv+aPx);vZ.lineTo(aPu+aPw,aPv+aPx);
vZ.stroke();}function aQG(){var aB,aQC,gY,fC,fO;var g=data.data;var aQJ=1;
var aQK=0.125;var aQL=aQ5?(1<<16):0;for(aB=0;aB<g.length;aB++){aQC=g[aB].aQC;gY=aQC.length;
aQJ=Math.max(gY,aQJ);for(fO=0;fO<gY;fO++){aQK=Math.max(aQC[fO],aQK);aQL=Math.min(aQC[fO],aQL);}}
var nR=aPv+aPx;var yw=aPx/(aQK-aQL);var yv=1/(aQJ-1);vZ.lineWidth=bc.zz;for(aB=0;aB<g.length;aB++){
aQC=g[aB].aQC;gY=aQC.length;fC=aPu;vZ.beginPath();vZ.moveTo(fC+aPw,nR-yw*(aQC[gY-1]-aQL));
for(fO=gY-2;fO>=0;fO--){vZ.lineTo(fC+yv*fO*aPw,nR-yw*(aQC[fO]-aQL));}vZ.strokeStyle=colors[aB];
vZ.stroke();}aQM(aQL,aQK,nR,yw);aQN(aQJ);a6u(aQJ,aQL,aQK);}function aQM(aQL,aQK,nR,yw){
vZ.font=bA.qt.sk(0,0.25*aPu);bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,2);
vZ.fillStyle=colors[0];var fC=0.92*aPu;for(var aB=0;aB<3;aB++){var fX=aQL+aB*(aQK-aQL)/2;
vZ.fillText((fX/1000).toFixed(3),fC,nR-yw*(fX-aQL));}}function aQN(aQJ){var fE=aPv+aPx+0.15*aPz;
vZ.font=bA.qt.sk(0,Math.min(0.4*aPz,0.028*h.i));bA.qt.textBaseline(vZ,0);bA.qt.textAlign(vZ,2);
vZ.fillStyle=colors[0];vZ.fillText(bA.a3O.a4D(aQ0),aPu+aPw,fE);bA.qt.textAlign(vZ,0);
vZ.fillText(bA.a3O.a4D(new Date(aQ1.getTime()-1000*60*(aQJ-1)*aQ6[data.aQB])),aPu,fE);
}function a6u(aQJ,aQL,aQK){
if(!aQ4){return;}if(aQJ<2){return;}var gd=(aQ2-aPu)/aPw;var eC=gd*(aQJ-1);
var aQO=Math.floor(eC);var aQP=Math.floor(eC+1);var aQQ=eC-aQO;var aQR=100000;var aQS=-1;
var aQT=-1;var aQU=aQK-(aQK-aQL)*(aQ3-aPv)/aPx;var g=data.data;for(var aB=0;aB<g.length;aB++){
var aQC=g[aB].aQC;var gY=aQC.length;if(aQP>=gY){continue;}var fX=aQC[aQO]+aQQ*(aQC[aQP]-aQC[aQO]);
var aDR=Math.abs(aQU-fX);if(aDR<aQR){aQR=aDR;aQS=aB;aQT=fX;}}if(aQS===-1){
return;}var aQV=aPv+aPx-(aQT-aQL)/(aQK-aQL)*aPx;vZ.lineWidth=0.5*bc.zz;vZ.strokeStyle=colors[aQS];
vZ.beginPath();vZ.moveTo(aPu,aQV);vZ.lineTo(aQ2,aQV);vZ.lineTo(aQ2,aPv+aPx);
vZ.stroke();vZ.beginPath();vZ.arc(aQ2,aQV,0.10*aPu,0,2*Math.PI);vZ.fillStyle=colors[aQS];
vZ.fill();var aQW=aPv+aPx+0.15*aPz;bA.qt.textAlign(vZ,1);var eU,a9Y;if(eC>aQJ-2){
a9Y=aQ1.getTime()-1000*60*aQ6[data.aQB];eU=new Date(a9Y+(eC-(aQJ-2))*(aQ0.getTime()-a9Y));
}else{eU=new Date(aQ1.getTime()-1000*60*(aQJ-eC-1)*aQ6[data.aQB]);}
var qa=bA.a3O.a4D(eU);var aQX=bA.qt.measureText(qa);var aQY=bL.iD(aQ2,aPu+0.5*aQX,aPu+aPw-0.5*aQX);
vZ.fillStyle=bA.color.ns(70,50,20);vZ.fillRect(aQY-0.52*aQX,aPv+aPx,1.04*aQX,0.55*aPz);
vZ.fillStyle=colors[0];vZ.fillText(qa,aQY,aQW);vZ.font=bA.qt.sk(0,0.25*aPu);
bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,2);aQY=0.92*aPu;qa=(aQT/1000).toFixed(3);
aQX=bA.qt.measureText(qa);var aQZ=aQY-1.04*aQX;vZ.fillStyle=bA.color.ns(70,50,20);
vZ.fillRect(aQZ,aQV-0.65*0.25*aPu,aPu-aQZ,1.1*0.25*aPu);vZ.fillStyle=colors[aQS];
vZ.fillText(qa,aQY,aQV);}function aQI(){var aB;var fontSize=0.5*aPy;vZ.font=bA.qt.sk(0,fontSize);
bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,0);var g=data.data;var f5=g.length;var fE=aPv-0.5*aPy;
var qa="";for(aB=0;aB<f5;aB++){qa+=g[aB].name+"  ";}qa=qa.trim();var aQX=bA.qt.measureText(qa);
var fC=0.5*(h.i-aQX);if(aQX>h.i){fC=0;vZ.font=bA.qt.sk(0,h.i/aQX*fontSize);}for(aB=0;aB<f5;aB++){
vZ.fillStyle=colors[aB];vZ.fillText(g[aB].name,fC,fE);fC+=bA.qt.measureText(g[aB].name+"  ");
}}this.hI=function(lf,lg){aQa(lf,lg);};this.a2Z=function(lf,lg){aQa(lf,lg);};function aQa(lf,lg){
aQ2=lf;aQ3=lg;if(!a33(lf,lg)){if(aQ4){bf.dk=true;}aQ4=false;return;}aQ4=true;bf.dk=true;
}function a33(lf,lg){return lf>aPu&&lf<aPu+aPw&&lg>aPv&&lg<aPv+aPx;}this.a37=function(ed){
if(ed===2){aOl.vQ[0].rA();}};dd();}function aOR(){var aOl;var aOm;function dd(){aOl=new vJ(L(287),
[new w(S[2]+L(39),function(){t.aOj(13);})]);aOm=new qm(aOl.vP,aOo());}function aOo(){
var qo=[];qo.push(aQb());qo.push(aQc());qo.push(aQd());qo.push(aQe());return qo;}function aQb(){
var aP5=new qW();aP5.qZ(L(288));aP5.qb(L(289));var aPD=new w(L(290),function(){bj.sL.sM(130,0);
t.y.aQf();},0,0,1);var rg=new rh(bj.eQ.data[126],0,function(){aPD.button.click();});
aP5.qk(rg);rg.e.placeholder="a,b,c";rg.e.style.marginTop=S[21];aP5.qk((new sO([aPD.button])));
return aP5;}function aQc(){var aP5=new qW();var aPD=new w(L(290),function(){
bj.sL.sM(130,1);t.y.aQf();},0,0,1);var aQg=new rh(bj.eQ.data[129],1,function(){aQg.e.focus();});
var aQh=new rh(bj.eQ.data[128],1,function(){aPD.button.click();});
aP5.qZ(L(291));aP5.qk(aQh);aQh.e.style.marginBottom=S[21];
aP5.qZ(L(292));aP5.qk(aQg);aP5.qk((new sO([aPD.button])));return aP5;}function aQd(){
var aP5=new qW();aP5.qZ(L(293));bj.eQ.data[125].su=["M1","M5","H1","H4","D1","W1","MN"];
aP5.qh(new vF(bj.eQ.data[125]));return aP5;}function aQe(){var aP5=new qW();
aP5.qZ(L(294));aP5.qk(new sI(bj.eQ.data[127],L(295)));return aP5;}this.show=function(){aOl.show();
this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();aOm.resize();
};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};dd();}function aOQ(){var aOl;var aQi;
var aPw;var aQj;var aQk;var aQl;var colors=[0,0,0];var aQm=-1;function dd(){aOl=new vJ(L(296),
[new w(S[2]+L(39),function(){t.y.aDM();})],false);aQi=new rU([0.5,0.25],[0.5,0.5],1);
}this.show=function(){var fX=bj.eQ.data[121].value;colors[0]=(fX>>12)/63;
colors[1]=((fX>>6)&63)/63;colors[2]=(fX&63)/63;aOl.show();this.resize();};this.sA=function(){
bj.sL.sM(121,(aQn(0,64)<<12)+(aQn(1,64)<<6)+aQn(2,64));aOl.sA();};this.resize=function(){
aOl.resize();aQi.resize();var ed=h.k;var vX=aOl.vU();aQi.fE=Math.max(aQi.fE,ed*vX.sD+bc.gap);
var aQo=ed*vX.vW-2*bc.gap;aQi.j=Math.min(aQi.j,aQo);aQi.i=2*aQi.j;
aQi.fE=ed*vX.sD+0.5*(ed*vX.vW-aQi.j);aQi.fC=0.5*(h.i-aQi.i);aPw=0.25*aQi.i;aQj=aQi.fC+aPw+bc.gap;
aQk=aQi.i-aPw-bc.gap;aQl=(aQi.j-2*bc.gap)/3;};this.vY=function(){aOl.vY();vZ.lineWidth=bc.zz;
aQH();aQp(0);aQp(1);aQp(2);};function aQH(){var eB=aQn(0);var tb=aQn(1);var fP=aQn(2);
vZ.fillStyle=S[9]+eB+","+tb+","+fP+")";vZ.fillRect(aQi.fC,aQi.fE,aPw,aQi.j);vZ.strokeStyle=bB.o0;
vZ.strokeRect(aQi.fC,aQi.fE,aPw,aQi.j);vZ.fillStyle=(eB+tb+fP<0.4*(3*255)&&tb<150)?bB.o0:bB.nr;
bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,1);vZ.font=bA.qt.sk(0,0.1*aQi.j);vZ.rotate(-Math.PI/2);
vZ.fillText(L(297),-aQi.fE-0.5*aQi.j,aQi.fC+0.5*aPw);vZ.setTransform(1,0,0,1,0,0);
}function aQp(aB){var eB=aB===0?150:aB===2?30:0;var tb=aB===1?130:aB===2?30:0;
var fP=aB===2?220:0;var aQq=aQi.fE+aB*(bc.gap+aQl);vZ.fillStyle=S[9]+eB+","+tb+","+fP+")";
vZ.fillRect(aQj,aQq,colors[aB]*aQk,aQl);vZ.strokeStyle=bB.o0;vZ.strokeRect(aQj,aQq,aQk,aQl);
vZ.fillStyle=bB.o0;vZ.font=bA.qt.sk(0,0.32*aQl);bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,0);
vZ.fillText((aB===0?L(298):aB===1?L(299):L(300))+aQn(aB),aQj+bc.gap,aQq+0.53*aQl);
}function aQn(aB,aQr){aQr=aQr||256;
return bL.iD(Math.floor(aQr*colors[aB]),0,aQr-1);}this.hI=function(lf,lg){if(!a33(lf,lg)){return;
}aQm=bL.iD(Math.floor((lg-aQi.fE)/(aQl+0.75*bc.gap)),0,2);colors[aQm]=bL.iD((lf-aQj)/aQk,0,1);
bf.dk=true;};function a33(lf,lg){if(lf<aQj||lg<aQi.fE||lf>aQi.fC+aQi.i||lg>aQi.fE+aQi.j){
return false;}return true;}this.a2Z=function(lf){if(aQm===-1){
return;}colors[aQm]=bL.iD((lf-aQj)/aQk,0,1);bf.dk=true;};this.a2c=function(lf,lg,deltaY){
if(!a33(lf,lg)){return;}var eC=bL.iD(Math.floor((lg-aQi.fE)/(aQl+0.75*bc.gap)),0,2);
colors[eC]=bL.iD(colors[eC]+(1-2*(deltaY>0))/256,0,1);
bf.dk=true;};this.a2x=function(){if(aQm>=0){aQm=-1;bf.dk=true;}};this.a37=function(ed){
if(ed===2){aOl.vQ[0].rA();}};dd();}function aOY(){var aPi;var aPj;var aPk;function rC(){
var rS=[new w(S[2]+L(39),aPl)];if(aD.data.gameMode===1){rS.push(new w(L(301),aQs,1,1));
}aPi=new vJ(L(302),rS);aPj=new qm(aPi.vP,aPm());}function aPl(){aPn();if(aD.data.colorsType!==1){
aD.data.colorsData=null;}t.aOk()[19]=null;t.a2C();}function aQs(){aPn();t.u(21);}function aPn(){
if(aD.data.gameMode===1){aD.a5X.a5c();}else if(aD.data.gameMode===0&&aD.data.colorsType===1){
bA.r1.a3j(aPk.vp(),aD.data.colorsData,262143);
}}function aPm(){var qo=[];aPo(qo);if(aD.data.gameMode===0){if(aD.data.colorsType===1){aPq(qo);}
return qo;}aD.a5X.a5c();qo.push(aQt());return qo;}function aPo(qo){var aP5=new qW();aP5.qZ(L(278));
if(aD.data.gameMode===0){aP5.qh(new vF({su:[L(303),L(281)],value:aD.data.colorsType},
function(eC){aPn();aD.data.colorsType=eC;
if(aD.data.colorsType===1&&(!aD.data.colorsData||aD.data.colorsData.length!==aD.f2)){
aD.data.colorsData=new Uint32Array(aD.f2);
}t.u(21);}));aP5.qk(new sY());}aP5.qk(new sI({value:aD.data.selectableColor},L(304),
function(value){aD.data.selectableColor=value;}));qo.push(aP5);}function aPq(qo){var aP5=new qW();
aP5.qZ(S[19]);aPk=new vh(0,1,0,1);aPk.vo(bA.rs.a5G(aD.data.colorsData,1));aP5.qk(aPk);
qo.push(aP5);}function aQt(){var aP5=new qW();aP5.qZ(L(284));for(var aB=0;aB<bg.a1N.length;aB++){
var hx=(aB+1)%bg.a1N.length;var e=aP5.qf((hx===0?"":"Team ")+bg.a1N[hx]);
if(aB){e.style.marginTop=S[21];}aP5.qk(new rh({eC:-1,value:aD.data.teamPlayerCount[hx]
},1,0,function(e){aPi.vQ[1].rD(0);var playerCount=bL.iD(Math.floor(e.target.value),0,512);
e.target.value=playerCount;aD.data.teamPlayerCount[e.target.aQu]=playerCount;
})).e.aQu=hx;}return aP5;}this.show=function(){aPi.show();this.resize();};this.sA=function(){
aPi.sA();};this.resize=function(){aPi.resize();aPj.resize();};this.a37=function(ed){if(ed===2){
aPi.vQ[0].rA();}};rC();}function tE(id,a4t,aQv){var aOl;var aQw;this.aQx=true;this.aQy=id;
function dd(){aOl=new vJ(L(305),[new w(S[2]+L(39),function(){if(aQv){t.u(29);}else{t.y.aDM();
}})]);aQw=new sN(aOl.vP,L(306));}this.show=function(){aOl.show();this.resize();if(id===15){
if(b0.y.aQz(id)){aR0();}else{aR1();}}else if(id===16){if(b0.y.aQz(id)){b0.ea.eb(2);}else{aR1();
}}else if(id===17){if(b0.y.aQz(id)){b0.ea.eb(3);}else{aR1();}}else if(id===18){b0.y.close(0,3253);
b0.y.aHB(0,id,0);aR1();}else if(id===21){if(b0.y.aQz(id)){b0.aR2.aR3(a4t.tW,a4t.tX,a4t.tY);
}else{aR1();}}else if(id===22){if(b0.y.aQz(id)){b0.aR2.aR4(a4t.tW,a4t.aR5,a4t.aR6);
}else{aR1();}}else if(id===23){if(b0.y.aQz(id)){b0.aR2.aR7(a4t.aQB,a4t.a1i);
}else{aR1();}}else if(id===24){if(b0.y.aQz(id)){b0.aR2.aR8(a4t.aQB,a4t.tX,a4t.tY);
}else{aR1();}}else if(id===25){if(b0.y.aQz(id)){b0.aGE.aPU(a4t);}else{aR1();}}else if(id===28){
if(b0.y.aQz(id)){b0.aR2.aR9(a4t.tW,a4t.aR5,a4t.aR6);}else{aR1();}}else if(id===29){
if(b0.y.aQz(id)){b0.aGE.aRA(a4t);}else{aR1();}}else if(id===30){if(b0.y.aQz(id)){if(!b7.aDH()){
aRB();}}else{aR1();}}else if(id===1000){return;}};function aR1(){aQw.qp.innerHTML+=S[8]+L(307);
}this.aRC=function(){if(id===15){aR0();return;}if(id===16){b0.ea.eb(2);
return;}if(id===17){b0.ea.eb(3);return;}if(id===18){t.u(8,this.a2I,new tE(16));return;}if(id===21){
b0.aR2.aR3(a4t.tW,a4t.tX,a4t.tY);return;}if(id===22){b0.aR2.aR4(a4t.tW,a4t.aR5,a4t.aR6);return;
}if(id===23){b0.aR2.aR7(a4t.aQB,a4t.a1i);return;}if(id===24){b0.aR2.aR8(a4t.aQB,a4t.tX,a4t.tY);
return;}if(id===25){b0.aGE.aPU(a4t);return;}if(id===28){b0.aR2.aR9(a4t.tW,a4t.aR5,a4t.aR6);
return;}if(id===29){b0.aGE.aRA(a4t);return;}if(id===30){if(!b7.aDH()){aRB();
}return;}if(id===1000){this.aQy=id=25;b0.aGE.aPU(a4t);return;}};this.aDL=function(code,bu,data){
if(!bu&&code!==id){return;}if(code===15||code===16){t.u(7,this.a2I);return;
}if(code===17){b0.y.close(0,3252);bj.y.wZ(0);if(bj.eQ.data[117].su&&bj.eQ.data[117].su.length>0){
var f8=bj.y.wa(0);bj.sL.sM(105,f8.tB);bj.sL.sM(106,f8.password);t.u(8,this.a2I,new tE(16));
}else{bj.sL.sM(105,"");t.y.aDM();}return;}if(code===21){t.u(10,this.a2I,new aBp(data));
return;}if(code===23){t.u(13,this.a2I,new aPt({data:data,aQB:a4t.aQB}));
return;}if(code===25){t.y.aOS.tB=a4t.tB;bj.vx.mm(a4t.tB);t.u(15,this.a2I);return;
}if(code===30){if(data){t.u(1);return;}aRB();return;}};function aRB(){var fP=1;t.u(4,1,new v(
L(308),L(309),false,[new w(S[71],function(){if(fP){setTimeout(function(){t.u(1);},5000);a0.a1.a2();
}fP=0;},bB.oN)]));}function aR0(){bD.a7(90);bD.a8(30,Math.floor(bL.pow(30)*Math.random()));
bD.a8(30,Math.floor(bL.pow(30)*Math.random()));bD.a8(30,Math.floor(bL.pow(30)*Math.random()));
bH.dd(bD.aC);bj.sL.sM(110,bF.tG.tH(bF.tG.tI(15)));b0.aGE.aRD();}this.sA=function(){
aOl.sA();};this.resize=function(){aOl.resize();aQw.resize();};this.a37=function(ed){
if(ed===2){aOl.vQ[0].rA();}};dd();}function aOW(){var aPi;var aPj;function rC(){
aPi=new vJ("🔧 "+L(310),[new w(S[2]+L(39),aPl),new w(L(311),aRE)]);aRF();aPj=new qm(aPi.vP,aPm());
}function aRF(){aRG();aRH();}function aRH(){if(aD.data.canvas){return;}if(aD.data.mapType===2){
aD.data.canvas=bS.xX;return;}if(aD.data.mapType===1){aD.data.canvas=bS.aMC(bS.a5x(aD.data),0).xX;
return;}aD.data.mapType=0;aD.data.passableWater=aD.data.passableMountains=1;
aD.data.canvas=bS.aMC(bS.a5x(aD.data),aD.data.mapSeed).xX;}function aRG(){if(aD.data.gameMode===1){
if(!aD.data.teamPlayerCount){aD.data.teamPlayerCount=new Uint16Array([0,1,1,0,0,0,0,0,0]);
aD.a5X.a5c();}var gY=bA.r1.a3d(aD.data.teamPlayerCount,0);aD.data.numberTeams=gY;
}else{if(aD.data.botDifficultyType===2){aD.data.botDifficultyType=0;}if(aD.data.spawningType===1){
aD.data.spawningType=0;}}}function aPl(){if(aD.data.gameMode!==1){aD.data.teamPlayerCount=null;
}aRI();aD.data.canvas=null;t.u(5,5);}function aRI(){b9.qD.dd();bj.sL.sM(156,b9.a5n.a0T());
}function aRE(){aD.data.isReplay=0;aRI();aD.a5X.a5z();aa.aHM();aD.a5X.a5w();
aD.data.canvas=aD.data.mapType===2?bS.xX:null;aD.a5b();aD.a5Z=1;}function aPm(){var qo=[];aRJ(qo);
aQt(qo);aRK(qo);qo.push(aRL());qo.push(aRM());qo.push(aRN());aRO(qo);aRP(qo);aRQ(qo);aRR(qo);
aRS(qo);aRT(qo);return qo;}function aRJ(qo){var aP5=new qW();aP5.qZ(L(312));var a3t=aD.data.canvas;
a3t.style.width=S[1];aP5.qk({e:a3t});aP5.qk(new sO([(new w(L(313),function(){t.u(20);
})).button]));qo.push(aP5);}function aQt(qo){var aP5=new qW();aP5.qZ(L(284));aP5.qk(new rh({eC:-1,
value:aD.data.playerCount},1,0,function(e){var playerCount=bL.iD(Math.floor(e.target.value),1,512);
e.target.value=aD.data.playerCount=playerCount;
if(aD.data.gameMode===1){var a8W=bA.r1.a3d(aD.data.teamPlayerCount,0);
aD.a5X.a5c();var a8a=bA.r1.a3d(aD.data.teamPlayerCount,0);
if(a8a!==a8W){aRU();}}}));qo.push(aP5);}function aRK(qo){var aP5=new qW();aP5.qZ(L(314));
aP5.qh(new vF({su:[S[116],"Teams"],value:aD.data.gameMode},function(eC){if(aD.data.gameMode===eC){
return;}aD.data.gameMode=eC;aRU();}));qo.push(aP5);}function aRU(){aRG();var g=[aRL(),aRM(),aRN()];
for(var aB=3;aB<6;aB++){t.removeChild(aPj.qp,aPj.qq[aB].qY);aPj.qq[aB]=g[aB-3];
aPj.qp.appendChild(aPj.qq[aB].qY);}aPj.resize();}function aRL(){var aP5=new qW();
aP5.qZ(L(302));var aRV;if(aD.data.gameMode===0){aRV=[L(303),L(281)][aD.data.colorsType];
}else{aRV=aD.data.numberTeams+" Team"+(aD.data.numberTeams===1?"":"s");
}aP5.qf(aRV);aP5.qk(new sO([new w(L(313),function(){
t.u(21);}).button]));return aP5;}function aRM(){var aP5=new qW();
aP5.qZ(L(64));var g=[L(280)+": "+aE.kb[aD.data.botDifficultyValue],L(282),L(283),L(281)];
aP5.qf(g[aD.data.botDifficultyType]);
aP5.qk(new sO([new w(L(313),function(){t.u(25);}).button]));return aP5;}function aRN(){
var aP5=new qW();aP5.qZ("Spawning");var g=[L(303),L(315),L(281)];aP5.qf(g[aD.data.spawningType]);
aP5.qk(new sO([new w(L(313),function(){t.u(24);}).button]));return aP5;}function aRO(qo){
var aP5=new qW();aP5.qZ(L(316));var g=[L(317),L(318),L(281)];aP5.qf(g[aD.data.playerNamesType]);
aP5.qk(new sO([new w(L(313),function(){t.u(23);}).button]));qo.push(aP5);}function aRP(qo){
var aP5=new qW();aP5.qZ(L(277));var g=[L(279),L(280)+": "+aD.data.aIncomeValue,L(281)];
aP5.qf(g[aD.data.aIncomeType]);aP5.qk(new sO([new w(L(313),function(){
t.u(22);}).button]));qo.push(aP5);}function aRQ(qo){var aP5=new qW();aP5.qZ(L(319));
var g=[L(279),L(280)+": "+aD.data.tIncomeValue,L(281)];aP5.qf(g[aD.data.tIncomeType]);
aP5.qk(new sO([new w(L(313),function(){t.u(26);}).button]));qo.push(aP5);}function aRR(qo){
var aP5=new qW();aP5.qZ(L(320));var g=[L(279),L(280)+": "+aD.data.iIncomeValue,L(281)];
aP5.qf(g[aD.data.iIncomeType]);aP5.qk(new sO([new w(L(313),function(){
t.u(27);}).button]));qo.push(aP5);}function aRS(qo){var aP5=new qW();aP5.qZ(L(321));
var g=[L(279),L(280)+": "+aD.data.sResourcesValue,L(281)];aP5.qf(g[aD.data.sResourcesType]);
aP5.qk(new sO([new w(L(313),function(){t.u(28);}).button]));qo.push(aP5);
}function aRT(qo){var aP5=new qW();aP5.qZ(L(322));aP5.qk(new sO([new w(L(323),function(){
t.x();aD.a5X.a60();t.y.t5[0]=0;t.u(19);}).button]));aP5.qk(new sO([new w(L(324),function(){
bm.aJQ();}).button]));aP5.qk(new sO([new w(L(325),function(){bm.aJS();return true;}).button]));
qo.push(aP5);}this.show=function(){aPi.show();this.resize();aPi.vP.scrollTop=t.y.t5[0];
};this.sA=function(){t.y.t5[0]=aPi.vP.scrollTop;aPi.sA();};this.resize=function(){aPi.resize();
aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};rC();}function aOh(){
var aPi;var rm=true;function rC(){aPi=new vJ(L(326),[new w(S[2]+L(39),function(){t.aOj(1);})
]);aPi.vP.style.overflowY=S[11];aPi.vP.addEventListener(S[32],function(){
rm=aPi.vP.scrollTop>=aPi.vP.scrollHeight-aPi.vP.clientHeight-2;
});}this.clear=function(){aPi.vP.textContent="";};
this.show=function(){this.clear();aRW();aPi.show();this.resize();rm=true;s6();};this.sA=function(){
aPi.sA();};this.resize=function(){aPi.resize();aPi.vP.style.padding="0.4em "+bA.qt.r2(bc.qz);
};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};function aRW(){var a6w=bq.a67();
var f5=a6w.length;var s2=document.createDocumentFragment();for(var aB=0;aB<f5;aB++){s3(s2,a6w[aB]);
}aPi.vP.appendChild(s2);s6();}this.zT=function(a64){var s2=document.createDocumentFragment();
s3(s2,a64);aPi.vP.appendChild(s2);s6();};function s3(s2,a64){var qY=document.createElement(S[0]);
var aRX=document.createElement(S[18]);var aRY=document.createElement(S[18]);
aRX.textContent=aW.aCB(a64.eT)+":";aRX.style.color=bB.oF;aRX.style.paddingRight=S[42];
aRX.style.display="table-cell";aRX.style.width="6ch";aRX.style.textAlign="end";
qY.appendChild(aRX);aRY.textContent=a64.qa;qY.appendChild(aRY);qY.style.display="table";
if(a64.pc){aRZ(qY,a64.pc);}s2.appendChild(qY);}function aRZ(qY,pc){if(pc>=1024-aj.s9.zm){
var aJC=document.createElement("img");aJC.src=aj.xa.za[pc-1024+aj.s9.zm].toDataURL();
aJC.style.width=S[41];aJC.style.height=S[41];aJC.style.verticalAlign=S[35];qY.appendChild(aJC);
}else{var rr=document.createElement(S[18]);rr.textContent=aj.s9.a01(pc);rr.style.display=S[51];
rr.style.fontSize=S[41];rr.style.lineHeight=S[17];rr.style.verticalAlign=S[35];qY.appendChild(rr);
}}function s6(){if(rm){aPi.vP.scrollTop=aPi.vP.scrollHeight;}}rC();}function aOe(){var aPi;
var aPj;var aPk;function rC(){aPi=new vJ(L(320),[new w(S[2]+L(39),aPl)]);aPj=new qm(aPi.vP,aPm());
}function aPl(){aPn();if(aD.data.iIncomeType!==2){aD.data.iIncomeData=null;}t.aOk()[19]=null;
t.a2C();}function aPn(){if(aD.data.iIncomeType===2){bA.r1.a3j(aPk.vp(),aD.data.iIncomeData,255);
}}function aPm(){var qo=[];aPo(qo);aPp(qo);aPq(qo);return qo;}function aPo(qo){var aP5=new qW();
aP5.qZ(L(278));aP5.qh(new vF({su:[L(279),L(280),L(281)],value:aD.data.iIncomeType},
function(eC){aPn();if(eC===2&&!aD.data.iIncomeData){aD.data.iIncomeData=new Uint8Array(aD.f2);
aD.data.iIncomeData.fill(32);}aD.data.iIncomeType=eC;t.u(27);}));qo.push(aP5);}function aPp(qo){
if(aD.data.iIncomeType!==1){return;}var aP5=new qW();aP5.qZ(S[38]);aP5.qk(new rh({eC:-1,
value:aD.data.iIncomeValue},1,0,function(e){var value=bL.iD(Math.floor(e.target.value),0,255);
e.target.value=aD.data.iIncomeValue=value;}));qo.push(aP5);}function aPq(qo){
if(aD.data.iIncomeType!==2){return;}var aP5=new qW();aP5.qZ(S[19]);aPk=new vh(0,1,0,1);
aPk.vo(bA.rs.a5G(aD.data.iIncomeData,4));aP5.qk(aPk);qo.push(aP5);}this.show=function(){
aPi.show();this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){
aPi.resize();aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};rC();
}function aOM(){var aRa;var aRb;var aQi;var rg;var aRc;var sf=0;this.aHu=new tM();function dd(){
aQi=new rU([0.9*0.5,0.9*0.3],[0.5,0.5],2/3);aRb=[new w("⚔️<br>"+L(327),function(){aRd(0);},bB.oT),
new w("🗡️<br>"+L(310),function(){aRd(1);},bB.om),new w("🔑<br>"+L(328),function(){aRd(2);},bB.p4),
new w("☰<br>"+L(329),function(){aRd(3);},bB.oD),new w("",function(){t.u(12);},bB.nw,false)
];rg=new rh(bj.eQ.data[122]);for(var aB=0;aB<aRb.length;aB++){aRb[aB].button.style.position=S[3];
}rg.e.style.position=S[3];rg.e.style.textAlign=S[10];rg.e.placeholder=L(330);
}dd();function aRd(eC){a0.a1.setState(10);if(!ab.tf()){ab.aHl();}if(eC===0){t.y.a5q(1);
}else if(eC===1){if(!b9.aJk.xI(bj.eQ.data[156].value,1)){aD.a5X.a60();}t.u(19);}else if(eC===2){
if(a0.id!==0||bj.eQ.data[140].value){t.u(8,t.tD,new tE(16));}else{t.y.aRe(t.tD,16);
}}else if(eC===3){t.u(1);}}this.show=function(){aa.setState(0);a0.a1.setState(12);this.aHu.show();
aRb[4].rD(bA.color.a40(bj.eQ.data[121].value));this.resize();document.body.appendChild(rg.e);
for(var aB=0;aB<aRb.length;aB++){document.body.appendChild(aRb[aB].button);
}aRf();};function aRf(){if(a0.id!==1){return;}if(a0.dw<5){return;}if(!aRc){aRc=bf.eT;
return;}if(bf.eT>aRc+1000*60*60*4){a0.wI.setState(14);return;}aRc=bf.eT;}this.sA=function(){
this.aHu.sA();t.removeChild(document.body,rg.e);for(var aB=0;aB<aRb.length;aB++){
t.removeChild(document.body,aRb[aB].button);}};this.resize=function(){
this.aHu.resize();this.aHu.resize();aQi.resize();var gap=0.5*bc.gap;var uB=0.84*(10/99)*aQi.i;
var aRg=3*gap;var aRh=0.16*aQi.j;var aA6=0.19*aQi.i;var fC=aQi.fC+aA6;var fE=aQi.fE+uB+aRg;
var i=0.5*(aQi.i-gap)-aA6;var sF=aQi.i-2*aA6-aRh-gap;bA.qt.td(rg.e,fC,fE,sF,aRh);
bA.qt.td(aRb[4].button,fC+sF+gap,fE,aRh,aRh);sf=fE;fE+=aRh+gap;var j=0.5*(aQi.fE+aQi.j-fE-gap);
bA.qt.td(aRb[0].button,fC,fE,i,j);bA.qt.td(aRb[1].button,fC+i+gap,fE,i,j);
bA.qt.td(aRb[2].button,fC,fE+j+gap,i,j);bA.qt.td(aRb[3].button,fC+i+gap,fE+j+gap,i,j);
for(var aB=0;aB<aRb.length;aB++){aRb[aB].button.style.font=bA.qt.sk(0,bA.qt.uz(0.065*aQi.j));
bA.qt.r3(aRb[aB].button,5);}rg.e.style.font=bA.qt.sk(0,bA.qt.uz(0.08*aQi.j));bA.qt.r3(rg.e,5);
};this.vY=function(){aa.aHQ();aT.vY();aRi();aO.vY(sf);bY.vY();aRj();};function aRi(){
var f5=Math.floor((a0.a1.iE()?0.018:0.0137)*h.iF);vZ.font=bA.qt.sk(0,Math.max(5,f5));
bA.qt.textBaseline(vZ,0);bA.qt.textAlign(vZ,2);vZ.fillStyle=bB.o0;vZ.fillText(l.dw,h.i,0);
}function aRj(){if(!ab.tf()){return;}vZ.imageSmoothingEnabled=false;var ed=ab.aHT(S[20]);
var nc=0.84*aQi.i/ed.width;vZ.setTransform(nc,0,0,nc,aQi.fC+0.08*aQi.i,aQi.fE);
if(!aRa){aRa=bA.a3K.a4r(ed,bA.a3K.a4x,[0,0,0]);}for(var fC=-1;fC<=1;fC+=2){
for(var fE=-1;fE<=1;fE+=2){vZ.drawImage(aRa,fC,fE);}}vZ.drawImage(ed,0,0);
vZ.imageSmoothingEnabled=true;var a08=ab.aHT(S[87]);var aRk=0.6666*nc*ed.height/a08.height;
var nd=0.5*h.i;var ne=aQi.fE+0.5*nc*ed.height-0.5*aRk*a08.height;
vZ.setTransform(aRk,0,0,aRk,nd-0.6*nc*ed.width,ne);
vZ.drawImage(a08,0,0);vZ.setTransform(aRk,0,0,aRk,nd+0.6*nc*ed.width-aRk*a08.width,ne);
vZ.drawImage(a08,0,0);vZ.setTransform(1,0,0,1,0,0);vZ.imageSmoothingEnabled=true;}
}function aOT(){var aOl;var aRl;var aRm;function dd(){aRm=[new w(L(331),function(){aRn(1);},0,0,1),
new w(L(332),function(){aRn(2);},0,0,1),new w(L(333),function(){aRn(3);},0,0,1),
new w(L(334),function(){aRn(0);},0,0,1),new w(L(335),function(){aRn(9);},0,0,1),
new w(L(336),function(){aRn(10);},0,0,1),new w(L(337),function(){aRn(11);},0,0,1)
];var vK=[new w(S[2]+L(39),function(){t.a2C();})];aOl=new vJ(L(338),vK);aRl=new rR(aRm,aOl.vP);
}function aRn(aB){t.u(8,t.tD,new tE(21,{tW:aB,tX:0,tY:10}));}this.show=function(){
aOl.show();this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();
aRl.resize();};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};dd();}function aDj(title,qg,aRo){
var aOl;var aQw;function dd(){if(!aRo){aRo=[new w(S[2]+L(39),function(){t.a2C();},bB.og)];
}aOl=new vJ(title,aRo);aQw=new sN(aOl.vP,qg);bA.qt.textAlign(aOl.vP.style,1);}this.show=function(){
aOl.show();this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();
aQw.resize();};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};dd();}function aBp(data){var aOl;
var aRp;function dd(){if(data.aBq){aOl=new vJ(L(113),[new w(S[2]+L(39),function(){t.a2C();})]);
aRq();return;}var ed=data.data.length?0:1;var aRo=[new w(S[2]+L(39),function(){t.a2C();}),
new w(L(339),function(){aRr(-10);},ed,0,1),new w(L(340),function(){aRr(10);},ed,0,1),
new w(L(286),function(){t.u(11,10,new aRs({tW:data.tW}));})
];var t1=[L(341),L(342),L(343),L(344),L(345),L(346),L(347),
L(348),L(349),L(350),L(336),L(337),S[119]];aOl=new vJ(t1[data.tW],aRo);aRt();}function aRq(){
var f8={sv:[],t1:[L(351),L(352),L(353)+" ↗"],t8:[12,50,38]};var a5u=aD.data.a5u;if(!a5u){
aRp=new st(aOl.vP,f8);return;}var f5=a5u.length;var sv=f8.sv;var zU=ag.zU;for(var aB=0;aB<f5;aB++){
sv.push([{fX:((aB+1)+"."),eU:0},{fX:zU[aB],eU:0},{fX:bF.tG.a0I(a5u[aB],5),eU:1,tB:a5u[aB],tC:0}]);
}aRp=new st(aOl.vP,f8,{t4:1});}function aRt(){var aB;var f8={sv:[]};var sv=f8.sv;var aRu=data.data;
var f5=aRu.length;if(f5&&aRu[0][0]===0){var eC=[0,1,2,3,-1,-1,-1,-1,-1,4,5,6,-1][data.tW];
if(eC>=0){t.y.tZ[eC]=aRu[0][1];}}var aRv=[0.1,0.001,0.01,1,100,1,1,0.1,100,0.01,0.01,0.01,1];
var nc=aRv[data.tW];var aRw=[1,3,2,0,0,0,0,1,0,2,2,2,0];var a53=aRw[data.tW];
var t1=[[L(354),L(355)+" ↗",L(356)],[L(354),L(357),L(358),L(359)+" ↗"],[L(354),L(355)+" ↗",L(358)],
[L(354),L(355)+" ↗",L(358)],[L(351),L(360),L(361)+" ↗",L(362)+" ↗",L(117)],
[L(351),L(360),L(363)+" ↗",L(364)+" ↗",L(365)],[L(351),L(360),L(366)+" ↗",L(367)+" ↗",L(368)],
[L(351),L(360),L(363)+" ↗",L(364)+" ↗",L(369)],[L(351),L(360),L(361)+" ↗",L(362)+" ↗",L(117)],
[L(354),L(355)+" ↗",L(358)],[L(354),L(355)+" ↗",L(370)],
[L(354),L(355)+" ↗",L(358)],[L(351),L(360),L(361)+" ↗",L(362)+" ↗",L(371)]
];var t8=[[25,40,35],[15,25,25,35],[25,40,35],[25,40,35],[10,18,30,30,12],[10,18,30,30,12],
[10,18,30,30,12],[10,18,30,30,12],[10,18,30,30,12],[25,40,35],[25,40,35],[25,40,35],
[10,15,25,25,25]];f8.t1=t1[data.tW];f8.t8=t8[data.tW];if(data.tW===0||data.tW===2||data.tW===3||
data.tW===9||data.tW===10||data.tW===11){for(aB=0;aB<f5;aB++){
sv.push([{fX:((aRu[aB][0]+1)+"."),eU:0},{fX:aRu[aB][1],eU:1,tB:aRu[aB][4],tC:aRu[aB][3]},
{fX:(nc*aRu[aB][2]).toFixed(a53),eU:0}]);}}else if(data.tW===12){
for(aB=0;aB<f5;aB++){var aRx=aRu[aB][3];sv.push([{fX:""+aRu[aB][0],eU:0},{fX:aRy(aRu[aB][4]),eU:0},
{fX:aRu[aB][5],eU:1,tB:aRu[aB][1],tC:0},{fX:aRu[aB][6],eU:1,tB:aRu[aB][2],tC:0},
{fX:bo.eI(aRx,bF.tG.a0I(aRu[aB][1],5)),eU:0}]);}}else if(data.tW===1){
for(aB=0;aB<f5;aB++){sv.push([{fX:((aRu[aB][0]+1)+"."),eU:0},{fX:aRu[aB][1],eU:0},
{fX:(nc*aRu[aB][2]).toFixed(a53),eU:0},{fX:aRu[aB][3],eU:1,tB:aRu[aB][5],tC:aRu[aB][4]}
]);}}else if(data.tW===4||data.tW===5||data.tW===6||data.tW===7||data.tW===8){for(aB=0;aB<f5;aB++){
var aRz=aRu[aB][5];if(data.tW===4||data.tW===8){aRz=(100*(aRz%64)/(aRz>>6)).toFixed(0)+"%";
if(aRz===S[1]){if(data.tW===4){aRz+=" ("+L(372)+")";}else{aRz+=" ("+L(373)+")";
}}}else if(data.tW===5){if(aRz>=32768){aRz=-(aRz-32768);}}else{aRz=(nc*aRz).toFixed(a53);}sv.push([
{fX:""+aRu[aB][0],eU:0},{fX:aRy(aRu[aB][6]),eU:0},{fX:aRu[aB][7],eU:1,tB:aRu[aB][1],tC:aRu[aB][2]},
{fX:aRu[aB][8],eU:1,tB:aRu[aB][3],tC:aRu[aB][4]},{fX:""+aRz,eU:0}]);}}aRp=new st(aOl.vP,f8);
}function aRy(f5){if(f5<60){if(f5===1){return f5+" Second";}return f5+" Seconds";
}else if(f5<3600){f5=Math.floor(f5/60);if(f5===1){return f5+" Minute";}return f5+" Minutes";
}else if(f5<172800){f5=Math.floor(f5/3600);if(f5===1){return f5+" Hour";}return f5+" Hours";
}f5=Math.floor(f5/172800);return f5+" Days";}function aRr(jf){var f5=data.data.length;
if(!f5){return;}var min=parseInt(data.data[0][0]);var max=min;for(var aB=1;aB<f5;aB++){
var aFj=parseInt(data.data[aB][0]);min=Math.min(aFj,min);max=Math.max(aFj,max);}var tX;if(jf<0){
tX=min+jf;}else{tX=max+1;}t.u(8,t.a2H().a2I,new tE(21,{tW:data.tW,tX:tX,tY:tX+Math.abs(jf)}));
}this.show=function(){aOl.show();this.resize();};this.sA=function(){
aOl.sA();};this.resize=function(){aOl.resize();aRp.resize();};this.a37=function(ed){
if(ed===2){aOl.vQ[0].rA();}};dd();}function aRs(a4t){var aOl;var aOm;function dd(){
aOl=new vJ(L(374),[new w(S[2]+L(39),function(){t.aOj(10);})]);aOm=new qm(aOl.vP,aOo());
}function aOo(){var qo=[];qo.push(aQc());qo.push(aS0());qo.push(aS1());return qo;}function aQc(){
var aP5=new qW();var aPD;var aQg=new rh(bj.eQ.data[132],1,function(){aPD.button.click();});
var aQh=new rh(bj.eQ.data[131],1,function(){aQg.e.focus();});aP5.qZ(L(291));
aP5.qk(aQh);aQh.e.style.marginBottom=S[12];aP5.qZ(L(292));aP5.qk(aQg);var aS2=function(){
var tX=Math.floor(aQh.e.value);var tY=Math.floor(aQg.e.value);var a3b=Math.min(tX,tY);
var aNt=Math.max(tX,tY);return{a3b:a3b,aNt:aNt};};aPD=new w(L(290),function(){
var ql=aS2();t.u(8,t.a66(10).a2I,new tE(21,{tW:a4t.tW,tX:ql.a3b,tY:ql.aNt}));
},0,0,1);aP5.qk((new sO([aPD.button])));return aP5;}function aS0(){
var aP5=new qW();var aPD;var aQg=new rh(bj.eQ.data[134],1,function(){aPD.button.click();});
var aQh=new rh(bj.eQ.data[133],0,function(){aQg.e.focus();});aP5.qZ(a4t.tW===1?L(375):L(376));
aP5.qk(aQh);aQh.e.style.marginBottom=S[12];aP5.qZ(L(377));aP5.qk(aQg);aPD=new w(L(290),function(){
var aR5=aQh.e.value.slice(0,20);var aR6=Math.abs(Math.floor(aQg.e.value));
t.u(8,t.a66(10).a2I,new tE(22,{tW:a4t.tW,aR5:aR5,aR6:aR6}));
},0,0,1);aP5.qk((new sO([aPD.button])));return aP5;}function aS1(){
var aP5=new qW();var aPD;var aQg=new rh(bj.eQ.data[152],1,function(){aPD.button.click();});
var aQh=new rh(bj.eQ.data[151],0,function(){aQg.e.focus();});aP5.qZ(L(378));
aP5.qk(aQh);aQh.e.style.marginBottom=S[12];aP5.qZ(L(377));aP5.qk(aQg);aPD=new w(L(290),function(){
var aR5=aQh.e.value.slice(0,5);var aR6=Math.abs(Math.floor(aQg.e.value));
t.u(8,t.a66(10).a2I,new tE(28,{tW:a4t.tW,aR5:aR5,aR6:aR6}));
},0,0,1);aP5.qk((new sO([aPD.button])));return aP5;}this.show=function(){
aOl.show();this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();
aOm.resize();};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};dd();}function aOg(){var aS3;
var tj;var aS4=[new Array(4),new Array(4),new Array(2),new Array(2)];var aS5=new Array(4);var aS6;
var aS7=new Array(2);var aS8=[L(63),L(335),L(379),L(380)];var ti;var tl;function rC(){ti=new sR([
new w(aS8[0],function(){aS9(0,0);return 2;}),new w(aS8[1],function(){aS9(0,1);return 2;}),
new w(aS8[2],function(){aS9(0,2);return 2;}),new w(aS8[3],function(){aS9(0,3);return 2;})
],bB.pE);tj=new sR([new w("",0,2),new w("",0,2)],bB.pF,1);var aSA=new sR([
new w(L(381),function(){aS9(2,0);return 2;}),new w(L(113),function(){aS9(2,1);return 2;})
],bB.pE);tl=new sR([new w(L(25,0,0,1),function(){aPl();}),
new w(L(382),function(){aSB(1);return 2;})],bB.pE);aS3=new th(
ti,tj,aSA,tl,aFV,bn.uj.aG1);for(var aB=0;aB<4;aB++){aS4[0][aB]=new rq("0",ti.rS[aB].button);
aS4[1][aB]=new rq("0",ti.rS[aB].button,1);}aS4[2][1]=new rq("0",aSA.rS[1].button);
aS4[3][1]=new rq("0",tl.rS[1].button);aS6=[new rq("",aSA.rS[1].button,1,1),
new rq("",tl.rS[1].button,1,1)];aS6[0].rr.style.bottom=S[128];aS6[1].rr.style.bottom=S[128];
aSC(0,bn.y.rx[0],1);aSC(2,bn.y.rx[2],1);aS7=[new rq(L(284),aS3.u8(),1,0),new rq("",aS3.u8(),1,1)];
aS7[0].rr.style.fontSize=S[42];aS7[1].rr.style.fontSize=S[42];}function aFV(){
if(!bn.a2A){return;}var aEo=aS3.tx.rg.e.value.trim().slice(0,127);if(aEo.length<1){return;
}aS3.tx.rg.e.value="";bn.aDm.a15(aEo);}this.aFr=function(){return aS3.tx;};function aPl(){t.x();
bn.ud();b0.y.a2P(3240);t.u(5,5);}function aSB(aSD){bn.y.rx[3]=1-bn.y.rx[3];aSC(3,1,bn.y.rx[3]);
if(aSD){b0.aFg.aFh(4);}if(bn.y.rx[3]){bj.sL.sM(158,bn.y.rx[0]);}}this.aDm=function(tB){aS9(2,0);
var qa=aS3.tx.rg.e.value;var aSE="@"+tB+" ";if(qa.length&&!bA.rs.a4N(qa," ")){aSE=" "+aSE;}
qa+=aSE;aS3.tx.rg.e.value=qa;aS3.tx.rg.e.focus();};function aS9(fO,fP){if(bn.y.rx[fO]===fP){return;
}if(fO===0&&bn.y.rx[3]){aSB(0);}aSC(fO,bn.y.rx[fO],0);aSC(fO,fP,1);bn.y.rx[fO]=fP;if(fO===0){
b0.aFg.aFh(2,fP);if(bn.y.rx[2]){aS3.ty.mm();aS3.tx.ru(1);}else{aS3.tx.ru(0);}t.a2H().aFK();
t.a2H().aFJ();return;}if(fO===2){if(fP===0){b0.aFg.aFh(0);aS3.tx.mm();aS3.u6();}else{b0.aFg.aFh(1);
aS3.ty.mm();aS3.u7();}}}function aSC(fO,fP,color){aS3.u0[fO].rS[fP].rD(color?bB.oP:bB.pE);
}this.aFI=function(){aS3.ty.mm();};this.aFK=function(){var aSF=bn.y.rx[0];var ry=bn.y.rz[aSF];
bS.a7(ry.el,ry.mapSeed);var fP=tj.rS;var a7m=aSG(ry.el,ry.mapSeed)+aSH(ry.aEY)+aSI(ry.aFM);
var aEV=L(383)+S[14]+aSG(ry.aGI,ry.aGJ)+aSH(ry.aGK)+aSI(ry.aFM,1);
if(fP[0].button.textContent===a7m&&fP[1].button.textContent===aEV){return;
}fP[0].button.textContent=a7m;fP[1].button.textContent=aEV;tj.resize();};this.aFJ=function(){
var aSF=bn.y.rx[0];var ry=bn.y.rz[aSF];aS3.u4(ry.u5);for(var aB=0;aB<bn.uM.uN.length;aB++){
aS4[0][aB].rr.textContent=bn.uM.uN[aB].length;aS4[1][aB].rr.textContent=aSJ(bn.y.rz[aB].aFM);
}var uM=bn.uM.uN[aSF];var aSK=uM.length;var aSL=bn.uM.uO[aSF];
aS4[2][1].rr.textContent=""+aSK;aS4[3][1].rr.textContent=""+aSL;for(var aB=0;aB<4;aB++){
var aSM=bn.y.rz[aB];if(!aS5[aB]){aS5[aB]=new rq(bS.xN.aNA[aSM.el],ti.rS[aB].button,1,1);
}else if(aSM.u5===0){aS5[aB].rr.textContent=bS.xN.aNA[aSM.el];}if(bA.rs.startsWith(aS8[aB],"🏆 ")){
if(!aSM.aEe){aS8[aB]=aS8[aB].substring(3);ti.rS[aB].button.textContent=aS8[aB];
ti.rS[aB].button.appendChild(aS4[1][aB].rr);ti.rS[aB].button.appendChild(aS4[0][aB].rr);
ti.rS[aB].button.appendChild(aS5[aB].rr);}}else if(aSM.aEe){aS8[aB]="🏆 "+aS8[aB];
ti.rS[aB].button.textContent=aS8[aB];ti.rS[aB].button.appendChild(aS4[1][aB].rr);
ti.rS[aB].button.appendChild(aS4[0][aB].rr);ti.rS[aB].button.appendChild(aS5[aB].rr);}}var aSN="";
var aSO="";if(aSF===0){aSN=bn.lF.aEt(uM,0,aSK);aSO=bn.lF.aEt(uM,0,aSL);}aS6[0].rr.textContent=aSN;
aS6[1].rr.textContent=aSO;aS7[1].rr.textContent="MP: "+bn.y.aFC[0]+"   SP: "+bn.y.aFC[1]+
"   Lobby: "+bA.r1.a3o(bn.uM.uN);};function aSG(el,aM7){return bS.xN.aNA[el];}function aSH(aEY){
if(aEY<7){return S[14]+(aEY+2)+" Teams";}else if(aEY===10){return "   No Full-Sending";}
return "";}function aSI(aFM,aSP){if(aSP){if(aFM<=90&&aFM>60){return S[143];}return "";}if(aFM<=60){
return S[143];}return "";}this.aFO=function(){aS3.tx.mm();};function aSJ(fX){var a7z=bL.fW(fX,60);
var a80=fX%60;return(a7z<10?"0":"")+a7z+":"+(a80<10?"0":"")+a80;}this.show=function(){
aS3.show();this.resize();bn.message.show();};this.sA=function(){aS3.sA();bn.uj.sA();
bn.uJ.sA();bn.message.sA();};this.resize=function(){aS3.resize(1-bn.y.rx[2]);bn.message.resize();
};this.a37=function(ed){if(ed===2){if(bn.y.rx[3]){aSB(1);}else{aS3.u0[3].rS[0].rA();
}return;}if(ed<2){aSB(1);}};rC();}function aON(){var aOl;var aOm;function dd(){aOl=new vJ(L(384),
[new w(S[2]+L(39),function(){t.u(7,t.a66(7).a2I);}),new w(L(203),function(){aSQ();})
]);aOm=new qm(aOl.vP,aOo());}function aSQ(){bj.sL.sM(105,bG.tG.x7(aOm.qq[0].qX[0].e.value,5));
bj.sL.sM(106,bG.tG.x7(aOm.qq[1].qX[0].e.value,15));t.u(8,t.a66(7).a2I,new tE(18));
}function aOo(){var qo=[];qo.push(aOu());qo.push(aOv());qo.push(aSR());
return qo;}function aOu(){var aP5=new qW();aP5.qZ(L(181));aP5.qk(new rh({value:"",eC:-1}));
return aP5;}function aOv(){var aP5=new qW();aP5.qZ(L(183));var aPF=new rh({value:"",eC:-1});
aPF.e.type=S[34];aP5.qk(aPF);aP5.qk((new sO([(new w(L(184),function(e){if(e.textContent===L(184)){
e.textContent=L(185);aPF.e.type=S[44];}else{e.textContent=L(184);aPF.e.type=S[34];
}return true;})).button])));return aP5;}function aSR(){var aP5=new qW();aP5.qZ(L(187));
aP5.qb(L(385));aP5.qb(L(386));aP5.qb(L(387));return aP5;}this.show=function(){aOl.show();
this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();aOm.resize();
};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};dd();}function aOU(){var aOl;var aRl;var aRm;
function dd(){aRm=[new w(L(346),function(){aRn(5);},0,0,1),new w(L(347),function(){aRn(6);},0,0,1),
new w(L(348),function(){aRn(7);},0,0,1),new w(S[119],function(){aRn(12);},0,0,1)
];var vK=[new w(S[2]+L(39),function(){t.a2C();})];aOl=new vJ(L(388),vK);
aRl=new rR(aRm,aOl.vP);}function aRn(aB){t.u(8,t.tD,new tE(21,{tW:aB,tX:0,tY:10}));
}this.show=function(){aOl.show();this.resize();};this.sA=function(){
aOl.sA();};this.resize=function(){aOl.resize();aRl.resize();};this.a37=function(ed){
if(ed===2){aOl.vQ[0].rA();}};dd();}function aOE(){this.eQ={};this.tZ=new Array(7);this.aOS=null;
this.aOP=null;this.sr=0;this.t5=[0,0];this.z=function(){t.u(5,5);};this.a5q=function(aSS){
if(aSS){aZ.aH5=aSS;}t.x();aZ.dd();};this.aDM=function(){t.u(aa.a2D()===0?5:0);
};this.aQf=function(){if(bj.eQ.data[130].value===1){t.u(8,t.a2H().a2I,new tE(24,{
aQB:bj.eQ.data[125].value,tX:bj.eQ.data[128].value,tY:bj.eQ.data[129].value
}));return;}var g=bj.eQ.data[126].value.split(",");g=g.slice(0,10);for(var aB=0;aB<g.length;aB++){
g[aB]=g[aB].trim().slice(0,7).toUpperCase();}if(g.length===1&&g[0].length===0){
g=[];}t.u(8,t.a2H().a2I,new tE(23,{aQB:bj.eQ.data[125].value,a1i:g}));
};this.aRe=function(a2I,target){t.u(4,a2I,new v("Data Usage Information",
"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: "+b0.y.aP6(S[135]),
false,[
new w(S[2]+L(39),function(){t.u(a2I);}),new w("✅ Accept",function(){bj.sL.sM(140,1);if(target===0){
t.u(2,a2I);}else{t.u(8,a2I,new tE(target));}})]));};this.aST=function(){for(var aB=0;aB<7;aB++){
this.tZ[aB]=bG.wy.x2(bH.q1(5));}this.tZ[1]="["+this.tZ[1]+"]";if(t.tD===5){t.a2H().aHu.sM(this.tZ);
t.a2H().resize();}};this.aPE=function(fX,pN,a7b){fX=bA.gR.a4q(fX,1,1000000);
var aSU=Math.max(1,1+Math.floor(0.01*(fX-100)));var ef=L(389,[pN]);ef+=S[8];ef+=L(390,[a7b]);
ef+=S[8];ef+=L(391,[aSU<20?(fX+aSU)+"–"+(fX+20):(fX+aSU)]);ef+=S[8];ef+=L(392,[fX]);
return ef;};}function aOX(){var aPi;var aPj;var aSV;function rC(){aPi=new vJ(L(312),
[new w(S[2]+L(39),aPl)]);if(aD.data.mapType===2){b6.dd();}aPj=new qm(aPi.vP,aPm());
}function aPl(){b6.ud();t.aOk()[19]=null;t.a2C();}function aPm(){var qo=[];aPo(qo);aSW(qo);aSX(qo);
aSY(qo);aSZ(qo);aSa(qo);aSb(qo);return qo;}function aPo(qo){var aP5=new qW();aP5.qZ(L(278));
aP5.qh(new vF({su:[L(393),L(394),L(395)],value:aD.data.mapType},function(eC){aD.data.mapType=eC;
if(eC===2){b6.dd();aD.data.canvas=null;}else{aD.data.passableWater=aD.data.passableMountains=1;
b6.ud();}t.u(20);}));if(aD.data.mapType>=2){aP5.qk(new sY());
aP5.qk(new sI({value:aD.data.passableWater},L(396),function(value){aD.data.passableWater=value;
}));aP5.qk(new sI({value:aD.data.passableMountains},L(397),function(value){
aD.data.passableMountains=value;}));}qo.push(aP5);}function aSW(qo){if(aD.data.mapType!==0){
return;}var aP5=new qW();aP5.qZ(L(312));var su=[];for(var aB=0;aB<bS.xN.aN8.length;aB++){
su.push(bS.xN.xO[bS.xN.aN8[aB]].name);}var vG=function(eC){aD.data.mapProceduralIndex=eC;
aSc();};aP5.qh(new vF({su:su,value:aD.data.mapProceduralIndex},vG));qo.push(aP5);
}function aSX(qo){if(aD.data.mapType!==1){return;}var aP5=new qW();aP5.qZ(L(312));var su=[];
for(var aB=0;aB<bS.xN.aN9.length;aB++){su.push(bS.xN.xO[bS.xN.aN9[aB]].name);}var vG=function(eC){
aD.data.mapRealisticIndex=eC;aSc();};aP5.qh(new vF({su:su,value:aD.data.mapRealisticIndex},vG));
qo.push(aP5);}function aSY(qo){if(aD.data.mapType!==2){return;}var aP5=new qW();aP5.qZ(L(398));
aP5.qk(new rh(bj.eQ.data[162],1));aP5.qZ(L(399),S[12]);aP5.qk(new sO([(new w(L(400),function(){
b6.aJ4();return true;})).button]));qo.push(aP5);}function aSZ(qo){if(aD.data.mapType!==2){return;
}var aP5=new qW();aP5.qZ(L(401));var rg=new rh({eC:-1,value:aD.data.mapName},0,0,function(e){
aD.data.mapName=e.target.value=e.target.value.slice(0,20);});aP5.qk(rg);qo.push(aP5);
}function aSa(qo){if(aD.data.mapType!==0){return;}var aP5=new qW();aP5.qZ(S[105]);var rg=new rh({
eC:-1,value:aD.data.mapSeed},1,0,function(e){var aM7=Math.abs(Math.floor(e.target.value))%16384;
if(aD.data.mapSeed===aM7){return;}aD.data.mapSeed=aM7;
aSc();});var aPD=new w(L(303),function(e){var aM7=Math.floor(Math.random()*16384);
if(aD.data.mapSeed===aM7){return;}rg.e.value=aD.data.mapSeed=aM7;aSc();return true;});aP5.qk(rg);
aP5.qk((new sO([aPD.button])));qo.push(aP5);}function aSb(qo){aSV=new qW();aSV.qZ(L(402));
if(aD.data.mapType!==2){aSd();}else if(aD.data.canvas){aSe();}qo.push(aSV);}function aSc(){aSf();
aSd();}function aSf(){if(aSV.qY.lastChild){t.removeChild(aSV.qY,aSV.qY.lastChild);}}function aSd(){
var aSg=bS.a5x(aD.data);aD.data.canvas=bS.aMC(aSg,aD.data.mapSeed).xX;aSe();}function aSe(){
var a3t=aD.data.canvas;a3t.style.width=S[1];aSV.qY.appendChild(a3t);}this.aJB=function(a3t){
if(aD.data.canvas){aSf();}aD.data.canvas=a3t;aSe();};this.show=function(){aPi.show();
this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){aPi.resize();aPj.resize();
};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};rC();}function v(title,qg,aSh,aRo){var aOl;
var aQw;function dd(){if(!aRo){aRo=[new w(S[2]+L(39),function(){t.a2C();})];}aOl=new vJ(title,aRo);
aQw=new sN(aOl.vP,qg);if(aSh){bA.qt.textAlign(aOl.vP.style,1);}}this.show=function(){
aOl.show();this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){
aOl.resize();aQw.resize();};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};
dd();}function aOa(){var aPi;var aPj;var aPk;function rC(){aPi=new vJ(L(316),[new w(S[2]+L(39),aPl)
]);aPj=new qm(aPi.vP,aPm());}function aPl(){aPn();aPr();t.aOk()[19]=null;t.a2C();
}function aPr(){if(aD.data.playerNamesType===2&&bA.r1.a3X(aD.data.playerNamesData).length===1){
aD.data.playerNamesType=0;}if(aD.data.playerNamesType!==2){aD.data.playerNamesData=null;
}}function aPn(){if(aD.data.playerNamesType===2){bA.r1.a3l(aPk.vp(),aD.data.playerNamesData,20);
}}function aPm(){var qo=[];aPo(qo);aPq(qo);return qo;}function aPo(qo){var aP5=new qW();
aP5.qZ(L(278));aP5.qh(new vF({su:[L(317),L(318),L(281)],value:aD.data.playerNamesType},
function(eC){aPn();aD.data.playerNamesType=eC;
t.u(23);}));aP5.qk(new sY());aP5.qk(new sI({value:aD.data.selectableName},L(403),
function(value){aD.data.selectableName=value;}));qo.push(aP5);
}function aPq(qo){if(aD.data.playerNamesType!==2){return;}var aP5=new qW();aP5.qZ(S[19]);
aPk=new vh(0,1,0,1);if(!aD.data.playerNamesData||aD.data.playerNamesData.length!==aD.f2){
aD.data.playerNamesData=new Array(aD.f2);aD.data.playerNamesData.fill("");
}aPk.vo(bA.rs.a5G(aD.data.playerNamesData,1,"\""));aP5.qk(aPk);qo.push(aP5);}this.show=function(){
aPi.show();this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){aPi.resize();
aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};rC();}function aOi(){
var aPi;var aPj;function dd(){aPi=new vJ(L(404),[new w(S[2]+L(39),function(){t.a2C();})
]);aPj=new qm(aPi.vP,aPm());}function aPm(){var qo=[];qo.push(aSi());qo.push(aSj());
qo.push(aRL());qo.push(aSk());qo.push(aSl());qo.push(aSm());return qo;}function aSi(){
var aP5=new qW();aP5.qZ(L(405));aP5.qf(b0.y.aP6("/wiki/propaganda"),S[6]).style.marginBottom=S[12];
aP5.qf("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>",S[6]);
return aP5;}function aSj(){var aP5=new qW();aP5.qZ(L(406));
var ef=bj.eQ.data[174].value;var qc=aP5.qb(ef.length+S[140]);qc.style.textAlign=S[10];
var aPQ=new vh(0,1,function(e){var fX=e.target.value;var gY=fX.length;qc.textContent=gY+S[140];
if(gY<=180){bj.sL.sM(174,fX);}});aPQ.e.rows=6;aPQ.e.style.fontSize=S[17];aPQ.vo(ef);
aP5.qk(aPQ);return aP5;}function aRL(){var aP5=new qW();aP5.qZ(L(302));for(var aB=0;aB<11;aB++){
var iO=aP5.qk(new rh(bj.eQ.data[163+aB]));aB&&(iO.e.style.marginTop=S[30]);
}aP5.qk((new sO([(new w(L(407),function(){var data=bj.eQ.data;for(var aB=163;aB<174;aB++){
if(data[aB]){bj.eQ.w4(aB,data[aB].w7);}}t.a2C();t.aOk()[31]=null;t.u(31);
})).button])));return aP5;}function aSk(){var aP5=new qW();aP5.qZ("Targeting");aP5.qf(L(408));
aP5.qk(new rh(bj.eQ.data[175],0,0));return aP5;}function aSl(){var aP5=new qW();aP5.qZ(L(402));
aP5.qk((new sO([(new w(L(184),function(){(new ee()).show(bj.eQ.data[174].value,aSn(),-1);
})).button])));return aP5;}function aSn(){var colors=new Array(11);for(var aB=0;aB<11;aB++){
var fX=bj.eQ.data[163+aB].value;var g=fX.split(",");colors[aB]=new Uint8Array(3);
for(var fO=0;fO<3;fO++){if(fO<g.length){colors[aB][fO]=Number(g[fO]);}}}return colors;
}function aSm(){var aP5=new qW();aP5.qZ(L(409));aP5.qf(L(410));var aSo=new rh(bj.eQ.data[176],1,0);
aP5.qk(aSo);var aSp=new w(L(411),function(e){if(aSq.button.textContent===L(180)&&b0.y.eZ(0)){
bA.qt.vC(e);aPC();b0.aGE.aSr(bj.eQ.data[176].value,aSn(),bj.eQ.data[175].value,
bj.eQ.data[174].value);}return true;},1);var aPC=function(){aSq.button.textContent=L(179);
aSp.rD(1);aSp.button.style.color=bB.o0;};var aSq=new w(L(179),function(e){
if(e.textContent===L(179)){e.textContent=L(180);aSp.rD(0);aSp.button.style.color=bB.oz;}else{
aPC();}return true;});aP5.qk((new sO([aSq.button,aSp.button])));return aP5;}this.show=function(){
aPi.show();this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){aPi.resize();
aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};dd();}function aOL(){
var aPi;var vm;function rC(){aPi=new vJ(L(412),[new w(S[2]+L(39),function(){t.aOj(1);}),
new w(L(413),function(){vm.vq();}),new w(L(414),function(){vm.vr();}),
new w(L(415),function(){vm.clear();}),new w(L(416),function(){aSs();})]);vm=new vh(L(417));
aPi.vP.appendChild(vm.e);}this.show=function(aSt){this.aSu(aSt);aPi.show();this.resize();
};this.aSu=function(aSt){if(aD.a11===0){if(aSt){vm.vo(aSt);}else if(aD.a5a.length){vm.vo(aD.a5a);
}return;}if(!aD.hE){b9.qD.a5m=b9.a5n.a0T();}vm.vo(b9.aSv(b9.qD.a5m));};this.sA=function(){
aPi.sA();};this.resize=function(){aPi.resize();vm.resize();};function aSs(){t.x();
var qa=b9.aSw(vm.vp());if(aD.a11&&qa.length>0&&qa===b9.qD.a5m){b9.aSx();return;}if(!b9.aJk.xI(qa)){
return;}b9.aSx();}this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}else{aSs();}};
rC();}function aOK(){var aOl;var aOm;var qo;function dd(){aOl=new vJ(L(418),[new w(S[2]+L(39),aSy),
new w(L(419),function(){t.x();bj.sL.wf();t.u(2);})]);aOo();aOm=new qm(aOl.vP,qo);
}function aSy(){if(b7.aD8!==bj.eQ.data[12].value){b7.dd();t.u(8,1,new tE(30));return;
}t.u(1);}function aOo(){var aP5;qo=[];aP5=new qW();aP5.qZ(L(420));aP5.qb(L(421));qo.push(aP5);
aSz(qo);aT0(qo);aP5=new qW();aP5.qZ(L(422));bj.eQ.data[1].su=[L(423),L(424),L(425),L(426)];
aP5.qh(new vF(bj.eQ.data[1]));qo.push(aP5);aP5=new qW();
aP5.qZ(L(427));bj.eQ.data[9].su=[L(424),L(428),L(429)];aP5.qh(new vF(bj.eQ.data[9]));qo.push(aP5);
aP5=new qW();aP5.qZ(L(430));bj.eQ.data[11].su=[L(431),L(9),L(432)];aP5.qh(new vF(bj.eQ.data[11]));
qo.push(aP5);aP5=new qW();aP5.qZ(L(433));aP5.qk(new sI(bj.eQ.data[2]));
qo.push(aP5);aP5=new qW();aP5.qZ(L(434));aP5.qk(new sI(bj.eQ.data[7]));
qo.push(aP5);aP5=new qW();aP5.qZ(L(435));aP5.qk(new sI(bj.eQ.data[8]));
qo.push(aP5);aP5=new qW();aP5.qZ(L(436));aP5.qk(new rh(bj.eQ.data[5]));
qo.push(aP5);aP5=new qW();aP5.qZ(L(437));aP5.qk(new sI(bj.eQ.data[13],L(438)));
aP5.qk(new sI(bj.eQ.data[14],L(439)));qo.push(aP5);aP5=new qW();
aP5.qZ(L(440));aP5.qh(new vF({su:[L(441),L(442),L(443)],value:aZ.aH6},function(aB){aZ.aH6=aB;
}));qo.push(aP5);}function aT0(qo){var aP5=new qW();aP5.qZ(L(444));var aT1=[];aP5.qk((new sO([
(new w(L(407),function(e){bX.aT2();for(var aB=0;aB<aT1.length;aB++){aT1[aB].e.value=bX.aCh[aB];
}bA.qt.vC(e);return true;})).button])));for(var aB=0;aB<bX.aT3.length;aB++){
aP5.qb(bX.aT3[aB]);for(var fO=0;fO<2;fO++){var eC=2*aB+fO;var rg=new rh({value:bX.aCh[eC],eC:-1});
rg.e.aT4=eC;aT1.push(rg);rg.e.addEventListener(S[89],function(e){e.preventDefault();
var code=e.code;e.target.value=code;bX.aT5(e.target.aT4,code);});fO&&(rg.e.style.marginLeft="4%");
rg.e.style.width="48%";aP5.qk(rg);}}qo.push(aP5);}function aSz(qo){
var aP5=new qW();aP5.qZ(L(408));var g=b7.data.aDP();aP5.qh(new vF({su:g,value:b7.data.aDT(g)},
function(eC){bj.sL.sM(12,g[eC].split(":")[0]);return true;}));qo.push(aP5);}this.show=function(){
aOl.show();this.resize();};this.sA=function(){aOl.sA();};this.resize=function(){
aOl.resize();aOm.resize();};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};
dd();}function aOb(){var aPi;var aPj;var aPk;function rC(){aPi=new vJ(L(445),[new w(S[2]+L(39),aPl)
]);aPj=new qm(aPi.vP,aPm());}function aPl(){aPn();aPr();t.aOk()[19]=null;t.a2C();
}function aPn(){if(aD.data.spawningType===2){bA.r1.a3j(aPk.vp(),aD.data.spawningData,bS.aJE-1);
}}function aPr(){if(aD.data.spawningType===2){if(!bA.r1.a3X(aD.data.spawningData)){
aD.data.spawningType=0;}}if(aD.data.spawningType!==2){aD.data.spawningData=null;
}}function aPm(){var qo=[];aPo(qo);aPp(qo);aPq(qo);return qo;}function aPo(qo){
var aP5=new qW();aP5.qZ(L(278));var su=[L(303),L(315),L(281)];var value=aD.data.spawningType;
if(aD.data.gameMode===0){su.splice(1,1);if(value>0){value=1;}}aP5.qh(new vF({su:su,value:value},
function(eC){aPn();aD.data.spawningType=eC;if(aD.data.gameMode===0&&eC===1){
aD.data.spawningType=2;}if(aD.data.spawningType===2&&!aD.data.spawningData){
aD.data.spawningData=new Uint16Array(2*aD.f2);}t.u(24);}));aP5.qk(new sY());
aP5.qk(new sI({value:aD.data.selectableSpawn},L(446),function(value){aD.data.selectableSpawn=value;
}));qo.push(aP5);}function aPp(qo){var aP5=new qW();aP5.qZ(S[105]);aP5.qk(new rh({eC:-1,
value:aD.data.spawningSeed},1,0,function(e){var value=Math.abs(Math.floor(e.target.value))%16384;
e.target.value=aD.data.spawningSeed=value;}));qo.push(aP5);}function aPq(qo){
if(aD.data.spawningType!==2){return;}var aP5=new qW();aP5.qZ(S[19]);aPk=new vh(0,1,0,1);
aPk.vo(bA.rs.a5G(aD.data.spawningData,2));aP5.qk(aPk);qo.push(aP5);}this.show=function(){
aPi.show();this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){
aPi.resize();aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};
rC();}function aOJ(){var aOl;var aRl;var aRm;function dd(){aRm=[new w(L(447),function(){aT6(0);}),
new w(L(338),function(){t.u(16);}),new w(L(388),function(){t.u(17);}),
new w(L(448),function(){t.y.aQf();},0,0,1),new w(L(412),function(){t.u(3,1);}),
new w(L(449),function(){t.u(18);}),new w(L(404),function(){t.u(31);}),
new w(L(450),function(){t.y.a5q(2);}),new w(L(418),function(){aT6(1);}),
new w(L(451),function(){aT7();}),new w(L(452),function(){aT8();}),new w(L(453),function(){aT9();}),
new w(L(454),function(){a21();})];var vK=[new w(S[2]+L(39),function(){t.y.aDM();})];
aTA();if(a0.id===1&&a0.dw>=5){aRm.push(new w(L(455),function(){a0.a1.a22();
}));}aOl=new vJ(L(456),vK);aRl=new rR(aRm,aOl.vP);}function aTA(){if(aa.a2D()!==8){return;
}aRm.unshift(new w(L(326),function(){t.u(30);}));aRm.unshift(new w(L(457),function(){if(bd.aTB>=2){
t.x();be.a3A();bf.dk=true;}},0,1));aRm.unshift(new w(L(458),function(){if(!aD.hE&&aM.qU(aD.ep)){
b8.hV.ph();t.x();if(aM.hF){aM.a3A();}}},0,1));aRm.unshift(new w(L(459),function(){
if(!aD.hE&&aw.hu(aD.ep)){bV.a6S(2);b8.hV.hq();t.x();if(aM.hF){aM.a3A();
}}},0,1));}function aT6(id){if(a0.id===0&&!bj.eQ.data[140].value){t.y.aRe(t.tD,id===0?16:0);
return;}if(id===0){t.u(8,1,new tE(16));}else{t.u(2);}}function aT7(){var t1=[S[107],
L(460),L(461),"YouTube Tutorial","Discord",L(462),L(331),L(463),L(334),L(464),"Terms","Privacy"
];var a4J=[bK.aPg,bK.aDg,bK.a26,"https://www.youtube.com/watch?v=6QBmA9N1668",bK.aDh,bK.aTC,
bK.aTD,bK.aTE,bK.aTF,bK.aTG,bK.aTH,bK.aTI];if(b0.y.aTJ(0)){for(var aB=0;aB<a4J.length;aB++){
a4J[aB]=a4J[aB].replace("https://territorial.io","https://game.territorial.io");}}if(a0.id===1){
t1.splice(2,1);t1.splice(0,1);a4J.splice(2,1);a4J.splice(0,1);}else if(a0.id===2){t1.splice(1,1);
t1.splice(0,1);a4J.splice(1,1);a4J.splice(0,1);}t.u(4,1,new v(L(451),bA.qt.a4I(t1,a4J),
false,[new w(S[2]+L(39),function(){t.u(1);})]));}function aT8(){t.u(4,1,new v(L(452),
l.dw+S[8]+b0.y.aP6("/changelog"),true,[new w(S[2]+L(39),function(){t.u(1);})]));}function aT9(){
t.u(4,1,new v(L(453),L(465)+S[8]+L(466),false,[new w(S[2]+L(39),function(){t.u(1);}),
new w(L(467),function(){a0.a1.a20();t.u(1);})]));}function a21(){a0.a1.a21();
t.u(4,1,new v(L(468),L(469)+" "+b0.y.aP6(S[135]),false,[new w(S[2]+L(39),function(){t.u(1);})
]));}this.show=function(){a0.a1.setState(12);aOl.show();this.resize();
this.eY();};this.sA=function(){aOl.sA();};this.resize=function(){aOl.resize();aRl.resize();
};this.eY=function(){if(aa.a2D()!==8){return;}if(bd.aTB>=2){if(aRm[2].rB===bB.oC){aRm[2].rD(0);
}}else{if(aRm[2].rB!==bB.oC){aRm[2].rD(bB.oC);}}if(!aD.hE&&aM.qU(aD.ep)){if(aRm[1].rB===bB.oC){
aRm[1].rD(0);}}else{if(aRm[1].rB!==bB.oC){aRm[1].rD(bB.oC);}}if(!aD.hE&&aw.hu(aD.ep)){
if(aRm[0].rB===bB.oC){aRm[0].rD(0);}}else{if(aRm[0].rB!==bB.oC){aRm[0].rD(bB.oC);}
}};this.a37=function(ed){if(ed===2){aOl.vQ[0].rA();}};dd();}function aOf(){var aPi;var aPj;var aPk;
function rC(){aPi=new vJ(L(321),[new w(S[2]+L(39),aPl)]);aPj=new qm(aPi.vP,aPm());}function aPl(){
aPn();if(aD.data.sResourcesType!==2){aD.data.sResourcesData=null;}t.aOk()[19]=null;t.a2C();
}function aPn(){if(aD.data.sResourcesType===2){bA.r1.a3j(aPk.vp(),aD.data.sResourcesData,2047);
}}function aPm(){var qo=[];aPo(qo);aPp(qo);aPq(qo);return qo;}function aPo(qo){var aP5=new qW();
aP5.qZ(L(278));aP5.qh(new vF({su:[L(279),L(280),L(281)],value:aD.data.sResourcesType},function(eC){
aPn();if(eC===2&&!aD.data.sResourcesData){aD.data.sResourcesData=new Uint16Array(aD.f2);
}aD.data.sResourcesType=eC;t.u(28);}));qo.push(aP5);}function aPp(qo){
if(aD.data.sResourcesType!==1){return;}var aP5=new qW();aP5.qZ(S[38]);aP5.qk(new rh({eC:-1,
value:aD.data.sResourcesValue},1,0,function(e){var value=bL.iD(Math.floor(e.target.value),0,2047);
e.target.value=aD.data.sResourcesValue=value;}));qo.push(aP5);}function aPq(qo){
if(aD.data.sResourcesType!==2){return;}var aP5=new qW();aP5.qZ(S[19]);aPk=new vh(0,1,0,1);
aPk.vo(bA.rs.a5G(aD.data.sResourcesData,2));aP5.qk(aPk);qo.push(aP5);}this.show=function(){
aPi.show();this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){aPi.resize();
aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};rC();}function aOd(){var aPi;
var aPj;var aPk;function rC(){aPi=new vJ(L(319),[new w(S[2]+L(39),aPl)]);aPj=new qm(aPi.vP,aPm());
}function aPl(){aPn();if(aD.data.tIncomeType!==2){aD.data.tIncomeData=null;}t.aOk()[19]=null;
t.a2C();}function aPn(){if(aD.data.tIncomeType===2){bA.r1.a3j(aPk.vp(),aD.data.tIncomeData,255);
}}function aPm(){var qo=[];aPo(qo);aPp(qo);aPq(qo);return qo;}function aPo(qo){var aP5=new qW();
aP5.qZ(L(278));aP5.qh(new vF({su:[L(279),L(280),L(281)],value:aD.data.tIncomeType},
function(eC){aPn();if(eC===2&&!aD.data.tIncomeData){aD.data.tIncomeData=new Uint8Array(aD.f2);
aD.data.tIncomeData.fill(32);}aD.data.tIncomeType=eC;t.u(26);}));qo.push(aP5);}function aPp(qo){
if(aD.data.tIncomeType!==1){return;}var aP5=new qW();aP5.qZ(S[38]);aP5.qk(new rh({eC:-1,
value:aD.data.tIncomeValue},1,0,function(e){var value=bL.iD(Math.floor(e.target.value),0,255);
e.target.value=aD.data.tIncomeValue=value;}));qo.push(aP5);}function aPq(qo){
if(aD.data.tIncomeType!==2){return;}var aP5=new qW();aP5.qZ(S[19]);aPk=new vh(0,1,0,1);
aPk.vo(bA.rs.a5G(aD.data.tIncomeData,4));aP5.qk(aPk);qo.push(aP5);}this.show=function(){
aPi.show();this.resize();};this.sA=function(){aPi.sA();};this.resize=function(){aPi.resize();
aPj.resize();};this.a37=function(ed){if(ed===2){aPi.vQ[0].rA();}};rC();}function aOV(){
var aOl;var aOm;function dd(){aOl=new vJ(L(449),[new w(S[2]+L(39),function(){t.a2C();})
]);aOm=new qm(aOl.vP,aOo());}function aOo(){var qo=[];qo.push(aTK());
return qo;}function aTK(){var aP5=new qW();aP5.qf(b0.y.aP6(S[133]),S[6]).style.marginBottom=S[12];
aP5.qZ(L(470));var aTL=new rh({value:bj.eQ.data[105].value,eC:-1});aTL.e.readOnly=true;
aP5.qk(aTL);aP5.qZ(L(364),S[12]);var aTM=new rh(bj.eQ.data[148],0,undefined,function(e){
aPA(bj.eQ.data[149].value,e.target.value);});aP5.qk(aTM);aP5.qZ(L(368),S[12]);
var aTN=new rh(bj.eQ.data[149],1,undefined,function(e){aPA(e.target.value,bj.eQ.data[148].value);
});aP5.qk(aTN);var aPC=function(){aSq.button.textContent=L(179);aTM.e.readOnly=false;
aTN.e.readOnly=false;aPB.rD(1);aPB.button.style.color=bB.o0;};var aSq=new w(L(179),function(e){
if(e.textContent===L(179)){e.textContent=L(180);aTM.e.readOnly=true;
aTN.e.readOnly=true;aPB.rD(0);aPB.button.style.color=bB.oz;bj.sL.sM(149,aTN.e.value);
aPA(bj.eQ.data[149].value,bj.eQ.data[148].value);}else{aPC();}return true;});aP5.qk((new sO([
aSq.button])));var aPB=new w(L(14),function(e){if(aTM.e.readOnly&&b0.y.eZ(0)){bA.qt.vC(e);
aPC();b0.aGE.aGF({tF:0,tB:bj.eQ.data[148].value,value:parseInt(bj.eQ.data[149].value,10)
});}return true;},1);var qc=aP5.qb();aP5.qb(L(471)).style.fontWeight=S[37];
var aPA=function(fX,qa){qc.innerHTML=t.y.aPE(fX,bj.eQ.data[105].value,qa);
};aP5.qk((new sO([aPB.button])));aPA(bj.eQ.data[149].value,bj.eQ.data[148].value);
return aP5;}this.show=function(){aOl.show();this.resize();};this.sA=function(){
aOl.sA();};this.resize=function(){aOl.resize();aOm.resize();};this.a37=function(ed){if(ed===2){
aOl.vQ[0].rA();}};dd();}function bw(){if(typeof Math.log2!==S[36]){Math.log2=function(fC){
return Math.log(fC)/Math.log(2);};}if(typeof Math.log10!==S[36]){Math.log10=function(fC){
return Math.log(fC)/Math.log(10);};}if(typeof Math.sign!==S[36]){Math.sign=function(fC){
return fC>0?1:fC<0?-1:0;};}}function ci(){var aTO=false;var aAM;var aTP;var aTQ;
var aTR;function aTS(){aTO=true;aAM=-1;aTP=new Array(4);for(var aB=3;aB>=0;aB--){aTP[aB]=false;
}var yN=Math.floor(1+0.020*h.min);aTQ=new Array(4);aTR=new Array(4);aTR[1]=aTR[3]=aTQ[0]=aTQ[2]=0;
aTR[0]=aTQ[3]=-yN;aTQ[1]=aTR[2]=yN;}this.a35=function(eC){if(aD.a11===0){
return;}if(!aH.ni()){return;}if(!aTO){aTS();}aTP[eC]=true;if(aAM===-1){aAM=setInterval(aTT,20);
aTT();}};this.a38=function(eC){if(aD.a11===0){return;}if(!aTO){aTS();}aTP[eC]=false;
if(aAM===-1){return;}var aTU=false;for(var aB=3;aB>=0;aB--){aTU=aTU||aTP[aB];}if(!aTU){this.nY();
}};this.nY=function(){if(!aTO){return;}if(aAM===-1){return;}for(var aB=3;aB>=0;aB--){aTP[aB]=false;
}clearInterval(aAM);aAM=-1;};function aTT(){if(aAM===-1){return;}if(aD.a11===0||!aH.ni()){
ar.nY();return;}var aTU=false;for(var aB=3;aB>=0;aB--){if(aTP[aB]){aTU=true;ii+=aTQ[aB];
ij+=aTR[aB];af.a2Z(aTQ[aB],aTR[aB]);aS.aA2();}}if(!aTU){ar.nY();return;}bf.dk=true;}}function cj(){
this.y=new aTV();this.mh=new aTW();this.pN=new aTX();this.aFg=new aTY();this.ea=new aTZ();
this.aGE=new aTa();this.q0=new aTb();this.aR2=new aTc();this.a7b=new aTd();this.aTe=new aTf();
this.aTg=new aTh();this.aTi=new aTj();this.aTk=new aTl();this.dd=function(){this.y.dd();
};}function aTV(){this.aHA=5;this.aTm=null;this.a2L=0;this.a2B=0;var aTn;var aTo;var aTp=15000;
this.dd=function(){this.aTm=new Array(this.aHA);var a7m=".territorial.io";this.aTm[0]=S[20];
var aM7=ay.aMT(0);ay.a5d(0);for(var aB=1;aB<this.aHA;aB++){this.aTm[aB]=aK.a0Z()+a7m;
}ay.a5d(aM7);aTn=new Array(this.aHA);aTo=new Array(this.aHA);for(aB=this.aHA-1;aB>=0;aB--){
aTo[aB]={aTO:false,eT:0,aTq:false};}this.aHB(0,0,0);};this.aTr=function(aB){return aTn[aB];
};this.eY=function(){for(var aB=this.aHA-1;aB>=0;aB--){if(this.eZ(aB)&&bf.eT>aTo[aB].eT+aTp){
b0.pN.aTs(aB,aTo[aB].aTq);aTt(aB);}}if(!this.eZ(0)&&bf.eT>aTo[0].eT+8000){
aTo[0].eT=bf.eT;this.aHB(0,0,0);}};this.aQz=function(id){return this.aHB(0,id,0)&&this.aTu(0);
};this.aTJ=function(aTv){if(aTv){return aZ.aH7;}return aTw();};function aTw(){if(aZ.aH6===0){
return l.dy?1:0;}return aZ.aH6-1;}this.a1R=function(){if(aTw()){return S[52];}return S[20];
};this.aP6=function(aTx){var f8=this.a1R()+aTx;return "<a href='https://"+f8+S[43]+f8+S[61];
};this.aHB=function(a28,a2I,aTv){var aTy=this.aTJ(aTv);
if(!aTo[a28].aTO){aTz(a28,a2I,aTy);return false;}if(aTn[a28].aU0()){aTn[a28].aU1(a2I);
return aTn[a28].eZ();}aTn[a28].sA();aTz(a28,a2I,aTy);return false;};function aTz(a28,a2I,aTy){
aTo[a28].aTO=true;aTt(a28);aTn[a28]=new aU2();aTn[a28].dd(a28,a2I,aTy);}this.aU3=function(a28,a2I){
b0.ea.aU4(a28);};this.aTu=function(aB){return this.eZ(aB)&&aTn[aB].aTu();};this.aU5=function(aB){
aTn[aB].aU5();};this.eZ=function(aB){return aTo[aB].aTO&&aTn[aB].eZ();};function aU0(aB){
return aTo[aB].aTO&&aTn[aB].aU0();}this.send=function(a28,aC){if(a28!==0){aTt(a28);
}aTn[a28].send(aC);};this.a2q=function(a28){if(aa.a2D()===8){aTo[a28].aTq=true;b0.mh.aU6=true;
}};function aTt(a28){aTo[a28].eT=bf.eT;aTo[a28].aTq=false;}this.close=function(a28,aU7){
if(aU0(a28)){aTn[a28].close(aU7);}};this.aU8=function(a28,aU7){o.a2O(aU7);
if(aU0(a28)){aTn[a28].close(aU7);}};this.a2P=function(aU7){for(var aB=this.aHA-1;aB>=0;aB--){
this.close(aB,aU7);}};this.aU9=function(a28,aU7){for(var aB=this.aHA-1;aB>=0;aB--){
if(aB!==a28){this.close(aB,aU7);}}};this.a5o=function(){if(this.a2L!==0||(!aD.kk&&!aD.hE)){
this.close(this.a2L,3246);}};this.aUA=function(a28,e){aTn[a28].sA();
o.a27(a28,e.code);};}function aTW(){this.aU6=false;this.eY=function(){if(bf.kN()%250!==249){return;
}if(aD.hE){return;}b0.ea.aUB(+(this.aU6&&ag.mz[aD.ep]),aUC());this.aU6=false;};function aUC(){
return al.kw+bN.y.mG;}}function aTd(){this.aUD=function(a28,aC){bH.dd(aC);if(bH.size===0){
b0.y.aU8(a28,3205);return;}if(bH.q1(1)===0){aUE(a28);}else{aUF(a28);}bf.aUG();};function aUE(a28){
var aUH=bH.q1(6);if(aUH===0){aUI(a28);}else if(aUH===2){b0.aTe.aUJ(a28);}else if(aUH===3||aUH===4){
ax.dd();}else if(aUH===5){b0.aTg.aUK();}else if(aUH===9){b0.aTg.aUL(a28);
}else if(aUH===10){b0.aTi.aUM();}else if(aUH===11){b0.aTg.aUN(a28);}else if(aUH===12){
b0.aTi.aUO();}else if(aUH===13){b0.aTk.aUP();}else if(aUH===14){b0.aTk.aUQ();}else if(aUH===15){
b0.aTg.aUR();}else if(aUH===16){b0.aTe.aUS(a28);}else if(aUH===17){b0.aTe.aUT(a28);
}else if(aUH===19){b0.aTe.aUU(a28);}else if(aUH===20){b0.aTg.aUV(a28);}}function aUI(a28){
if(a28!==0){return;}if(aa.a2D()===8){return;}t.y.aST();var aUW=bH.q1(12);var aUX=bH.q1(6);
var g=new Array(aUW);for(var aB=0;aB<aUW;aB++){g[aB]=bH.q1(aUX);}aT.aAS(g);}function aUF(a28){
var aUH;var qx=aa.a2D();if(qx!==8){if(!ax.aHf()){return;}}if(a28!==b0.y.a2L){b0.y.aU8(a28,3244);
return;}aUH=bH.q1(1);if(aUH===0){bf.a1B.aUY(bH.aC);}else{aUZ();}}function aUZ(){var aUa=bH.q1(2);
if(aUa===0){aUb();}else if(aUa===1){aUc();}else if(aUa===2){aUd();}else{if(!l.a9||l.aA){return;
}var f5=3*60*3;bD.a7(1+6+f5*32);bD.a8(1,0);bD.a8(6,10);var aB;f5=Math.min(b8.pK.q3.length,f5);
for(aB=0;aB<f5;aB++){bD.aUe(32,b8.pK.q3[aB]);}b0.y.send(b0.y.a2L,bD.aC);}}function aUb(){
var pN=bH.q1(9);if(ag.mz[pN]===0||ag.mz[aD.ep]===0){return;}var pc=bH.q1(10);aN.pb(pN,aD.ep,pc);
af.qS(pN,1,pc);}function aUc(){var pN=bH.q1(9);if(ag.mz[pN]===0||ag.mz[aD.ep]===0){return;
}if(!b5.aLi(0,[pN],true)){return;}aN.pt(pN,1);}function aUd(){var pN=bH.q1(9);var target=bH.q1(9);
if(ag.mz[pN]===0||ag.mz[target]===0||ag.mz[aD.ep]===0){return;}if(!b5.aLi(1,[pN],true)){
return;}af.qS(pN,3,96);af.qS(target,4,96);aN.a7i(pN,target);}}function aTj(){this.aUM=function(){
bj.y.wV();bj.sL.sM(105,bF.tG.tH(bF.tG.tI(5)));bj.sL.sM(106,bF.tG.tH(bF.tG.tI(15)));bj.sL.sM(109,0);
bj.sL.sM(108,bj.eQ.data[109].value);bj.sL.sM(111,bj.eQ.data[109].value+1);bj.sL.sM(107,0);
bj.sL.sM(110,"");};this.aUO=function(){if(bH.size<bD.aUf(1+6+5+3+3+3+8)){b0.y.aU8(0,3254);
return;}var data={tC:bH.q1(30),wj:bH.q1(16),wk:bH.q1(30),wl:bH.q1(30),wm:bH.q1(30),
wn:bH.aUg(32),username:bG.x0.xI(5),wo:bG.x0.xI(3),wp:bG.x0.xI(3),wq:bH.aUg(32),wr:bH.aUg(32),
ws:bH.q1(30),wt:bH.aUg(32),wu:bH.aUg(32),wv:bH.aUg(32),ww:bH.aUg(32),aPJ:bH.aUg(32),aPK:bH.aUg(30),
aPY:bH.aUg(32),aPZ:bG.x0.xI(3),aPR:bH.aUg(2),aPT:bH.aUg(10),aPP:bG.x0.xI(8),aPS:bH.aUg(5),
aP8:bH.q1(30),aPI:bH.q1(30),a1U:bH.aUg(32),aPN:bH.q1(3),aPM:bH.q1(8),aPa:bH.q1(1),aPb:bH.q1(1)
};if(data.aPa){data.aPc=bH.aUg(32);data.aPd=bH.q1(30);data.aPe=bH.q1(30);data.aPf=bH.q1(1);
}if(t.tD===8){if(t.a2H().aQy===25){data.aOn=true;t.y.aOS=data;t.a2H().aDL(25,false);
}else{data.aOn=false;bj.sL.sM(160,+(data.aPa&&data.aPf));data.tB=bj.eQ.data[105].value;
t.y.aOP=data;bj.sL.wi(data);t.a2H().aDL(16,true);}}};}function aTl(){this.aUP=function(){var aB;
if(bH.size<bD.aUf(1+6+6+10)){b0.y.aU8(0,3259);return;}var tW=bH.q1(6);var f5=bH.q1(10);var data=[];
if(tW===9||tW===10||tW===11){for(aB=0;aB<f5;aB++){data.push([bH.q1(30),bG.x0.xI(5),bH.aUg(32),
0,bH.q1(30)]);}if(t.tD===8){t.a2H().aDL(21,true,{tW:tW,data:data});}return;}if(tW===12){
for(aB=0;aB<f5;aB++){data.push([bH.q1(20),bH.q1(30),bH.q1(30),bH.aUg(32),bH.q1(30),bG.x0.xI(5),
bG.x0.xI(5)]);}if(t.tD===8){t.a2H().aDL(21,true,{tW:tW,data:data});}return;}var i2=bH.q1(16);
if(!bH.aUh(1+6+6+10+16+i2*16+f5*(tW===0?(30+5+16+30+30):tW===1?(16+3+16+5+31+30):(tW===2||tW===3)?
(30+5+32+30+30):(4*30+32+30+20+5+5)))){b0.y.aU8(0,3260);return;}if(tW===0){for(aB=0;aB<f5;aB++){
data.push([bH.q1(30),bG.wy.x2(bH.q1(5)),bH.q1(16),bH.q1(30),bH.q1(30)]);}}else if(tW===1){
for(aB=0;aB<f5;aB++){data.push([bH.q1(16),bG.wy.x2(bH.q1(3)),bH.q1(16),bG.wy.x2(bH.q1(5)),
bH.q1(31),bH.q1(30)]);}}else if(tW===2||tW===3){for(aB=0;aB<f5;aB++){data.push([bH.q1(30),
bG.wy.x2(bH.q1(5)),bH.aUg(32),bH.q1(30),bH.q1(30)]);}}else{for(aB=0;aB<f5;aB++){data.push([
bH.q1(20),bH.q1(30),bH.q1(30),bH.q1(30),bH.q1(30),bH.aUg(32),bH.q1(30),bG.wy.x2(bH.q1(5)),
bG.wy.x2(bH.q1(5))]);}}if(t.tD===8){t.a2H().aDL(21,true,{tW:tW,data:data});}};this.aUQ=function(){
if(bH.size<bD.aUf(1+6+4+7+11)){b0.y.aU8(0,3265);return;}var aUi=bH.q1(4);var aUj=bH.q1(7);
var aUk=bH.q1(11);if(!bH.aUh(1+6+4+7+11+aUj*16+aUk*16+aUi*(3+8))){b0.y.aU8(0,3266);return;
}var data=[];for(var aB=0;aB<aUi;aB++){var a1j=bG.wy.x2(bH.q1(3));var aUl=bH.q1(8);var aQC=[];
for(var fO=0;fO<aUl;fO++){aQC.push(bH.q1(16));}data.push({name:"["+a1j+"]",aQC:aQC});}if(t.tD===8){
t.a2H().aDL(23,true,data);}};}function aTf(){this.aUJ=function(a28){if(a28!==b0.y.a2B){
b0.y.close(a28,3239);return;}if(aa.a2D()!==6){b0.y.close(a28,3271);return;}bn.dd();
for(var aB=0;aB<4;aB++){var ry=bn.y.rz[aB];ry.u5=bH.q1(10);ry.el=bH.q1(6);ry.mapSeed=bH.q1(14);
ry.aEY=bH.q1(4);ry.aGI=bH.q1(6);ry.aGJ=bH.q1(14);ry.aGK=bH.q1(4);ry.aEe=bH.q1(1);
ry.aFM=bH.q1(12);ry.spawningSeed=bH.q1(14);var playerCount=bH.q1(16);bn.uM.uO[aB]=bH.q1(16);
for(var fO=0;fO<playerCount;fO++){bn.uM.aE0(aB,bH.q1(30),bG.x0.xI(5),bH.q1(4),bH.q1(30),bH.q1(7),
bH.q1(16),bH.q1(18),bH.q1(11),bH.q1(12));}}t.u(29);bn.y.aFE(true);};this.aUS=function(a28){
if(a28!==b0.y.a2B){b0.y.close(a28,3239);return;}if(!bn.a2A){b0.y.close(a28,3251);
return;}bn.y.aFC[0]=bH.q1(20);bn.y.aFC[1]=bH.q1(20);var aUm=bH.q1(16);for(var fO=0;fO<aUm;fO++){
var id=bH.q1(3);if(id===0){bn.uM.aE0(bH.q1(2),bH.q1(30),bG.x0.xI(5),0,1234566,
127,0,bH.q1(18),0,bH.q1(12));}else if(id===1){bn.uM.aEJ(bH.q1(16),bH.q1(2));}else if(id===2){
bn.uM.aEF(bH.q1(16),bH.q1(2),bH.q1(2));}else if(id===3){bn.uM.aEI(bH.q1(16),bH.q1(2)
);}else if(id===4){bn.uM.aE8(bH.q1(16),bH.q1(2),bH.q1(4),bH.q1(30),bH.q1(7),bH.q1(16),bH.q1(11),
bH.q1(18));}else if(id===5){bn.uM.aE9(bH.q1(16),bH.q1(2),bH.q1(1));}}for(var aB=0;aB<4;aB++){
var ry=bn.y.rz[aB];ry.u5=bH.q1(10);ry.aGI=bH.q1(6);ry.aGJ=bH.q1(14);ry.aGK=bH.q1(4);if(ry.u5===0){
ry.a2L=bH.q1(10);ry.aEc=bH.q1(10);if(bn.aDo.dl(aB)){return;}ry.el=bH.q1(6);ry.mapSeed=bH.q1(14);
ry.aEY=bH.q1(4);ry.aEe=bH.q1(1);ry.aFM=bH.q1(12);ry.spawningSeed=bH.q1(14);ry.aGL.push(ry.aGL[0]);
ry.aGL.shift();}}bn.y.aEU();};this.aUT=function(a28){if(a28!==b0.y.a2B){b0.y.close(a28,3272);
return;}if(!bn.a2A){b0.y.close(a28,3273);return;}var rw=bH.q1(4);var ry=bn.y.rz[rw];
var s0=ry.s0;ry.s1=bH.q1(20);var uc=bH.q1(6);for(var aB=0;aB<uc;aB++){var aGc=aUn();
bn.s9.aGb(aGc);s0.push(aGc);}bn.y.aFN(rw);};function aUn(){var id=bH.q1(3);if(id===0){
return{id:id,tB:bH.q1(30),r:bn.aDm.aFl(bG.x0.xI(7))};}if(id===1){return{id:id,tB:bH.q1(30),
aEn:bH.q1(3),value:bH.q1(30),target:bH.q1(30)};}if(id===2){return{id:id,tB:bH.q1(30),aEn:bH.q1(3)
};}if(id===3){return{id:id,tB:bH.q1(30),aEn:bH.q1(3),value:bH.q1(4),target:bH.q1(30)};}if(id===4){
return{id:id,tB:bH.q1(30),aEn:bH.q1(3),target:bH.q1(30)};}if(id===5){return{id:id,aEn:bH.q1(6)};
}if(id===6){return{id:id,value:bH.q1(17)};}return null;}this.aUU=function(a28){if(a28!==b0.y.a2B){
b0.y.close(a28,3276);return;}if(!bn.a2A){b0.y.close(a28,3277);return;}bn.message.aES(aUn());
};}function aTh(){this.aUK=function(){var id=bH.q1(20);var colors=new Array(11);
for(var aB=0;aB<11;aB++){colors[aB]=new Uint8Array([bH.q1(8),bH.q1(8),bH.q1(8)]);
}var ef=bG.x0.xI(8);bU.eM.ec({id:id,colors:colors,ef:ef});};this.aUV=function(a28){var f8=bH.q1(5);
var rP=bi.aUo.aUp(f8,bH.q1(30),bH.q1(30),bH.q1(30));b0.ea.aUq(a28,rP);};this.aUL=function(a28){
if(!bH.aUh(1+6+3+30+30+(5+30+30+30))){b0.y.aU8(a28,3269);return;}var aUa=bH.q1(3);
var rP=bi.aUo.eY(bH.q1(30),bH.q1(30));var aUr=bi.aUo.aUp(bH.q1(5),bH.q1(30),bH.q1(30),bH.q1(30));
b0.ea.aUs(a28,rP,aUr,aUa);if(aUa>0){return;}if(a28===0){
if(bj.eQ.data[105].value.length===0){b0.ea.eb(0);}else{b0.aGE.aUt(a28);}}else{b0.aGE.aUt(a28);
}if(b0.y.aTr(a28).aUu()===4){if(aa.a2D()===6){b0.aFg.aHC(a28);}}else if(b0.y.aTr(a28).aUu()===5){
if(aa.a2D()===8||aa.a2D()===10){b0.pN.aHb();}}};this.aUN=function(a28){
var id=bH.q1(6);if(id===1){bj.sL.sM(160,bH.q1(30));b0.y.aU5(a28);if(!aT.aAO){b0.ea.eb(1);}b7.aDH();
if(t.tD===8){t.a2H().aRC();}return;}if(id===21){if(t.tD===8){t.a2H().aDL(17);}return;}if(id===22){
bj.sL.sM(106,bj.eQ.data[110].value);bj.sL.sM(110,"");if(t.tD===8){t.a2H().aDL(15);}return;
}};this.aUR=function(){var f5=bH.q1(16);var aUv=bH.q1(16);if(!bH.aUh(1+6+16+16+16+f5*10+aUv*16)){
b0.y.aU8(0,3270);return;}var g=[];for(var aB=0;aB<f5;aB++){g.push(bG.wy.x2(bH.q1(10)));}b7.aDK(g);
};}function aTX(){this.aTs=function(a28,aTq){bD.a7(1+6+1+3);bD.a8(1,0);bD.a8(6,4);bD.a8(1,aTq?1:0);
bD.a8(3,aD.a11===0?bn.a2A?6:0:aD.hE?1:aD.kk?7:aD.ki<7?2:aD.ki===8?4:aD.ki===9?5:3);
b0.y.send(a28,bD.aC);};this.aHb=function(){bD.a7(1+6+8+10+9+10+14);bD.a8(1,0);
bD.a8(6,5);bD.a8(8,b0.y.a2B);bD.a8(10,ax.aEc);bD.a8(9,ax.aHU);bD.a8(10,l.e0);bD.a8(14,l.dp);
b0.y.send(b0.y.a2L,bD.aC);};this.pO=function(er){bD.a7(1+4+22);bD.a8(1,1);bD.a8(4,0);
bD.a8(22,er);b0.y.send(b0.y.a2L,bD.aC);};this.pP=function(ih,jZ){bD.a7(1+4+10+10);bD.a8(1,1);
bD.a8(4,1);bD.a8(10,ih);bD.a8(10,jZ);b0.y.send(b0.y.a2L,bD.aC);};this.pT=function(ih,pR){
bD.a7(1+4+10+9);bD.a8(1,1);bD.a8(4,2);bD.a8(10,ih);bD.a8(9,pR);b0.y.send(b0.y.a2L,bD.aC);
};this.pV=function(ih,pU){bD.a7(1+4+10+27);bD.a8(1,1);bD.a8(4,3);bD.a8(10,ih);bD.a8(27,pU);
b0.y.send(b0.y.a2L,bD.aC);};this.pX=function(ih,nN){bD.a7(1+4+10+16);bD.a8(1,1);bD.a8(4,4);
bD.a8(10,ih);bD.a8(16,nN);b0.y.send(b0.y.a2L,bD.aC);};this.pa=function(jZ){bD.a7(1+4+10);
bD.a8(1,1);bD.a8(4,5);bD.a8(10,jZ);b0.y.send(b0.y.a2L,bD.aC);};this.pe=function(eC){bD.a7(1+4+10);
bD.a8(1,1);bD.a8(4,6);bD.a8(10,eC);b0.y.send(b0.y.a2L,bD.aC);};this.pg=function(pf){bD.a7(1+4+1);
bD.a8(1,1);bD.a8(4,7);bD.a8(1,pf);b0.y.send(b0.y.a2L,bD.aC);};this.pi=function(){bD.a7(1+4);
bD.a8(1,1);bD.a8(4,8);b0.y.send(b0.y.a2L,bD.aC);};this.pj=function(ih,er,jZ){bD.a7(1+4+10+10+22);
bD.a8(1,1);bD.a8(4,10);bD.a8(10,ih);bD.a8(10,jZ);bD.a8(22,er);b0.y.send(b0.y.a2L,bD.aC);
};this.pr=function(aUw,aUx){bD.a7(1+4+9+10);bD.a8(1,1);bD.a8(4,15);bD.a8(9,aUx);
bD.a8(10,aUw);b0.y.send(b0.y.a2L,bD.aC);};this.pu=function(a7b){bD.a7(1+4+9);bD.a8(1,1);
bD.a8(4,14);bD.a8(9,a7b);b0.y.send(b0.y.a2L,bD.aC);};this.py=function(aUy,target){var aB;
var f5=aUy.length;bD.a7(1+4+9+f5*9);bD.a8(1,1);bD.a8(4,13);bD.a8(9,target);for(aB=0;aB<f5;aB++){
bD.a8(9,aUy[aB]);}b0.y.send(b0.y.a2L,bD.aC);};}function aTa(){this.aUz=function(){
bD.a7(1+6+(14+4+7+1+1+5));bD.a8(1,0);bD.a8(6,16);b0.ea.aV0();b0.y.send(0,bD.aC);
};this.aUt=function(a28){bD.a7(1+6+(30+90));bD.a8(1,0);bD.a8(6,17);aV1();b0.y.send(a28,bD.aC);
};this.aRD=function(){bD.a7(1+6+90);bD.a8(1,0);bD.a8(6,18);bG.tG.xE(bj.eQ.data[110].value,15);
b0.y.send(0,bD.aC);};this.aRA=function(a4t){var f5=a4t.qa.length;bD.a7(1+6+6+8+f5*16);
bD.a8(1,0);bD.a8(6,29);bD.a8(6,a4t.tF);bD.a8(8,f5);bF.wy.xD(a4t.qa);b0.y.send(0,bD.aC);};
this.aSr=function(wn,colors,aV2,ef){bE.dd();bE.a8(1,0);bE.a8(6,16);bE.a8(20,Math.min(wn,1000000));
for(var aB=0;aB<11;aB++){for(var fO=0;fO<3;fO++){bE.a8(8,colors[aB][fO]);}
}var wT=b7.data.aDO(aV2.trim());bE.a8(8,wT===-1?255:wT);bF.x0.a0T(ef.trim().substring(0,180),8,bE);
b0.y.send(0,bE.aV3());};this.aPU=function(data){bD.a7(1+6+6+30);bD.a8(1,0);
bD.a8(6,25);bD.a8(6,data.tF);bG.tG.xE(data.tB,5);b0.y.send(0,bD.aC);};this.aGF=function(data){
bD.a7(1+6+6+30+32);bD.a8(1,0);bD.a8(6,27);bD.a8(6,data.tF);bG.tG.xE(data.tB,5);
bD.aUe(32,data.value);b0.y.send(0,bD.aC);};function aV1(){bG.tG.xE(bj.eQ.data[105].value,5);
bG.tG.xE(bj.eQ.data[106].value,15);}}function aTb(){this.pz=function(){
var f5=aD.kQ;var a0q=bR.result.a0q;var lL=a0q.length;bD.a7(1+4+10+1+1+f5*16+lL*(9+24));
bD.a8(1,1);bD.a8(4,12);bD.a8(10,lL);bD.a8(1,+(aD.a0y===2));bD.a8(1,aD.a1J%2);
var a1c=ag.a1c;for(var aB=0;aB<f5;aB++){bD.a8(16,a1c[aB]);}var gt=ag.gt;for(aB=0;aB<lL;aB++){
var gd=a0q[aB];bD.a8(9,gd);bD.a8(24,gt[gd]);}b0.y.send(b0.y.a2L,bD.aC);};}function aTc(){
this.aR3=function(tW,tX,tY){bD.a7(1+6+6+2*(1+30));bD.a8(1,0);bD.a8(6,21);bD.a8(6,tW);
bD.a8(1,+(tX<0));bD.a8(1,+(tY<0));bD.a8(30,Math.abs(tX));bD.a8(30,Math.abs(tY));b0.y.send(0,bD.aC);
};this.aR4=function(tW,aR5,aR6){bD.a7(1+6+6+5+aR5.length*16+30);bD.a8(1,0);bD.a8(6,22);bD.a8(6,tW);
b0.ea.aV4(aR5);bD.a8(30,aR6);b0.y.send(0,bD.aC);};this.aR9=function(tW,aR5,aR6){bD.a7(1+6+6+30+30);
bD.a8(1,0);bD.a8(6,28);bD.a8(6,tW);bG.tG.xE(aR5,5);bD.a8(30,aR6);b0.y.send(0,bD.aC);
};this.aR7=function(aQB,a1i){var aB;var f5=a1i.length;var i2=0;for(aB=0;aB<f5;aB++){
i2+=a1i[aB].length;}bD.a7(1+6+3+4+7+f5*3+i2*16);bD.a8(1,0);bD.a8(6,23);bD.a8(3,aQB);bD.a8(4,f5);
bD.a8(7,i2);for(aB=0;aB<f5;aB++){bD.a8(3,a1i[aB].length);bF.wy.xD(a1i[aB]);}b0.y.send(0,bD.aC);
};this.aR8=function(aQB,tX,tY){bD.a7(1+6+3+2*(1+20));bD.a8(1,0);bD.a8(6,24);bD.a8(3,aQB);
bD.a8(1,+(tX<0));bD.a8(1,+(tY<0));bD.a8(20,Math.abs(tX));bD.a8(20,Math.abs(tY));b0.y.send(0,bD.aC);
};}function aTY(){this.aHC=function(a28){var username=bj.eQ.data[122].value.slice(0,20);
bD.a7(1+6+10+2+5+username.length*16+18+bi.aV5.q1());bD.a8(1,0);bD.a8(6,1);
bD.a8(10,l.e0);bD.a8(2,bj.eQ.data[158].value);b0.ea.aV4(username);var aV6=bA.color.a3y(bj.y.wc());
bD.a8(6,aV6[0]);bD.a8(6,aV6[1]);bD.a8(6,aV6[2]);bi.aV5.a0T();b0.y.a2B=a28;b0.y.send(a28,bD.aC);
};this.aFh=function(aV7,a4t){bE.dd();bE.a8(1,0);bE.a8(6,2);bE.a8(3,aV7);if(aV7===2){bE.a8(2,a4t);
}else if(aV7===3){bF.x0.a0T(a4t,7,bE);}else if(aV7===5){bE.a8(3,a4t.id);bE.a8(3,a4t.value);
bE.a8(30,a4t.tB);}b0.y.send(b0.y.a2B,bE.aV3());};}function aTZ(){this.aU4=function(a28){
bD.a7(1+6+(14+4+7+1+1+5+2*8));bD.a8(1,0);bD.a8(6,13);aV8();b0.y.send(a28,bD.aC);
};this.aUs=function(a28,rP,aUr,aUa){bD.a7(1+6+3+30+30+30);bD.a8(1,0);bD.a8(6,14);bD.a8(3,aUa);
bD.a8(30,rP[0]);bD.a8(30,rP[1]);bD.a8(30,aUr);b0.y.send(a28,bD.aC);};this.aUq=function(a28,rP){
bD.a7(1+6+30);bD.a8(1,0);bD.a8(6,30);bD.a8(30,rP);b0.y.send(a28,bD.aC);};this.eb=function(id){
bD.a7(1+6+6);bD.a8(1,0);bD.a8(6,15);bD.a8(6,id);b0.y.send(0,bD.aC);};this.us=function(id,value){
bD.a7(1+6+6+30);bD.a8(1,0);bD.a8(6,3);bD.a8(6,id);bD.a8(30,value);b0.y.send(0,bD.aC);
};this.aDJ=function(id,qa){var f5=Math.min(qa.length,63);bD.a7(1+6+6+6+f5*16);bD.a8(1,0);
bD.a8(6,26);bD.a8(6,id);bD.a8(6,f5);bF.wy.xD(qa);b0.y.send(0,bD.aC);};this.aV9=function(aSS,ql){
bD.a7(1+6+ql.length*(16+10));bD.a8(1,0);bD.a8(6,9);for(var aB=0;aB<ql.length;aB++){
bD.a8(16,ql[aB][0]);bD.a8(10,ql[aB][1]);}b0.y.send(aSS,bD.aC);};this.aUB=function(aVA,aVB){
bD.a7(1+6+1+12);bD.a8(1,0);bD.a8(6,19);bD.a8(1,aVA);bD.a8(12,aVB);b0.y.send(b0.y.a2L,bD.aC);
};function aV8(){bD.a8(14,l.dp);bD.a8(4,a0.id);bD.a8(7,a0.dw);bD.a8(1,+l.a9);bD.a8(1,+l.aA);
bD.a8(5,(new Date()).getHours()%24);var aVC=b7.aDN();bD.a8(8,aVC[0]);bD.a8(8,aVC[1]);
}this.aV4=function(username){bD.a8(5,username.length);bF.wy.xD(username);};}function aU2(){var aVD;
var aVE;var b;var aVF=["wss://","/s50/","/s51/","/s52/"];var aVG=0;this.dd=function(eC,a2I,aTy){
aVD=eC;aVE=a2I;aVH(aTy);};this.aVI=function(){return b.readyState===b.CONNECTING;
};this.eZ=function(){return b.readyState===b.OPEN;};this.aTu=function(){
return aVG;};this.aU5=function(){aVG=1;};this.aU0=function(){return this.aVI()||this.eZ();
};this.aU1=function(a2I){aVE=a2I;};this.aUu=function(){return aVE;};this.send=function(aC){
if(this.eZ()){b.send(aC);}};this.close=function(aU7){if(this.aU0()){this.sA();
b.close(aU7);}};this.sA=function(){b.onopen=null;b.onmessage=null;b.onclose=null;b.onerror=null;
};function aVH(aTy){var ll;if(l.dt){ll="ws://localhost:"+(7130+aVD)+"/";}else{if(aTy){
ll=aVF[0]+S[52]+"/x0"+aVD+"/";}else{ll=aVF[0]+b0.y.aTm[aVD]+aVF[1+l.du];}}b=new WebSocket(ll);
b.binaryType="arraybuffer";b.onopen=aU3;b.onmessage=aVJ;b.onclose=aUA;b.onerror=aVK;
}function aU3(){b0.y.aU3(aVD,aVE);}function aVJ(e){b0.a7b.aUD(aVD,new Uint8Array(e.data));
}function aVK(){}function aUA(e){b0.y.aUA(aVD,e);}}function dK(){var aVL=false;
var aVM=0;var i=0;var tK=0;var gap=0;var canvas=null;var zA=null;var a3Y=null;this.dd=function(){
if(!aD.hz){canvas=null;zA=null;a3Y=null;return;}aVM=0;a3Y=new Uint32Array(aD.yC+1);
aVN();this.resize();};this.a8w=function(){return i;};this.resize=function(){
if(!aD.hz){return;}i=Math.floor(0.95*((a0.a1.iE()&&!aD.nT)?(0.18*h.min):(0.13*h.iF)));
i*=1+(0.5+0.2*a0.a1.iE())*aD.nT;i+=i%2;
gap=Math.max(1,0.015*i);tK=Math.floor(i-0.5*gap);canvas=canvas?canvas:document.createElement(S[4]);
canvas.width=i;canvas.height=i;zA=canvas.getContext("2d",{alpha:true});zA.lineWidth=gap;
zA.strokeStyle=bB.o0;bA.qt.textAlign(zA,1);bA.qt.textBaseline(zA,1);aVO();};this.kx=function(aVP){
if(aVP){aVQ();}var ky=this.kz();if(bg.kn[ky]){return a3Y[ky];}ky=aVR();var eU=ag.gt[m1[0]];
if(ky===-1){return eU;}if(a3Y[ky]>eU){return a3Y[ky];}return eU;};this.a1v=function(){
aVM=31;this.eY();return this.kz();};this.kz=function(){var ky=0;for(var aB=aD.yC;aB>0;aB--){
if(a3Y[aB]>a3Y[ky]){ky=aB;}}return ky;};function aVR(){var ky=-1;for(var aB=aD.yC;aB>=1;aB--){
if(ky===-1||a3Y[aB]>a3Y[ky]){ky=aB;}}return ky;}this.kR=function(aVS){var gY=0;var l1=al.l1;
var f3=bg.f3;var f5=al.kw;var fj=bO.fj;for(var aB=0;aB<f5;aB++){var gd=l1[aB];if(f3[gd]===aVS){
fj[gY++]=gd;}}bO.fa[0]=gY;};this.l0=function(aVS){var gY=0;var l1=al.l1;var f3=bg.f3;
var f5=al.kw;var fj=bO.fj;for(var aB=0;aB<f5;aB++){var gd=l1[aB];if(f3[gd]!==aVS){fj[gY++]=gd;
}}bO.fa[0]=gY;};this.a4R=function(){var gY=0;for(var aB=aD.yC;aB>=0;aB--){gY+=a3Y[aB]>0;
}return gY;};this.eY=function(){if(!aD.hz){return;}if(++aVM>=32){aVM=0;aVQ();}};function aVN(){
for(var aB=aD.yC;aB>=0;aB--){a3Y[aB]=0;}for(aB=al.kw-1;aB>=0;aB--){a3Y[bg.f3[al.l1[aB]]]+=1;
}}function aVQ(){for(var aB=aD.yC;aB>=0;aB--){a3Y[aB]=0;}for(aB=al.kw-1;aB>=0;aB--){
a3Y[bg.f3[al.l1[aB]]]+=ag.gt[al.l1[aB]];}aVL=true;}this.mm=function(){if(!aD.hz){
return;}if(aVL){aVO();}};function aVO(){var aB;var aVT=0;var f5=0;var ed=Math.floor(i/2);
var eB=Math.floor(tK/2);var aVU=1.5*Math.PI;var aVV;for(aB=aD.yC;aB>=0;aB--){
f5+=a3Y[aB];if(a3Y[aB]===0){aVT++;}}z4();if(f5>0){if(aVT===aD.yC){for(aB=aD.yC;aB>=0;aB--){
if(a3Y[aB]>0){aVW(aB,ed,eB);break;}}aVX(ed);}else{for(aB=0;aB<=aD.yC;aB++){if(a3Y[aB]>0){
aVV=aVU+2*Math.PI*a3Y[aB]/f5;aVY(aB,ed,eB,aVU,aVV);aVZ(ed,eB,aVU,aVV);if(aB!==0){aVa(ed,eB,aVU);
}aVU=aVV;}}aVa(ed,eB,1.5*Math.PI);}}aVb(ed,eB);}function z4(){aVL=false;zA.clearRect(0,0,i,i);
}function aVW(aB,ed,eB){zA.fillStyle=bg.aVc[bg.kn[aB]];zA.beginPath();zA.arc(ed,ed,eB,0,2*Math.PI);
zA.fill();}function aVY(aB,ed,eB,aVU,aVV){zA.fillStyle=bg.aVc[bg.kn[aB]];zA.beginPath();
zA.arc(ed,ed,eB,aVU,aVV);zA.lineTo(ed,ed);zA.fill();}function aVX(ed){var fontSize=ed/3;
zA.font=bA.qt.sk(1,fontSize);zA.fillStyle=bB.o0;zA.fillText(S[1],ed,ed+0.1*fontSize);
}function aVZ(ed,eB,aVU,aVV){var aVd,ef;var fX=(aVV-aVU)/(2*Math.PI);
var fontSize=1*eB*Math.min(fX,0.37);if(fontSize<8){return;}aVd=(aVU+aVV)/2;
ef=Math.floor(100*fX+0.5)+"%";eB*=0.525-Math.max(0.6*(fX-0.7),0);zA.font=bA.qt.sk(1,fontSize);
zA.fillStyle=bB.o0;zA.fillText(ef,ed+Math.cos(aVd)*eB,ed+Math.cos(aVd+1.5*Math.PI)*eB);
}function aVa(ed,eB,aVd){zA.beginPath();zA.moveTo(ed,ed);
zA.lineTo(ed+Math.cos(aVd)*eB,ed+Math.cos(aVd+1.5*Math.PI)*eB);zA.stroke();}function aVb(ed,eB){
zA.beginPath();zA.arc(ed,ed,eB,0,2*Math.PI);zA.stroke();}this.vY=function(){if(aD.hz){
if(aD.nT){vZ.drawImage(canvas,bc.gap,bc.gap);}else{vZ.drawImage(canvas,bc.gap,a8v+2*bc.gap);
}}};}function da(){this.hU=function(aVe){return this.a15(aVe,function(ej){
return ac.f0(ej);});};this.ha=function(aVe){return this.a15(aVe,function(ej){
return ac.aIU(ej,aD.ep);});};this.a15=function(aVe,a0d){var aVf=bM.iC();return aVg(aVe,aVf,a0d);
};function aVg(aVe,aVf,a0d){var hK=bM.fD(aVe);var hM=bM.fF(aVe);var aVh=bS.fG-2;var aAD=bS.fH-2;
var aVi=-1;for(var f8=0;f8<aVf;f8++){var aAC=Math.max(hK-f8,1);var aMb=Math.max(hM-f8,1);
var yn=Math.min(hK+f8,aVh);var ym=Math.min(hM+f8,aAD);var iW=aVj(hK,yn-hK,hM-f8,a0d,aAD,1);
var iX=aVj(hK-1,hK-aAC-1,hM-f8,a0d,aAD,-1);var aVk=aVj(hK,yn-hK,hM+f8,a0d,aAD,1);
var aVl=aVj(hK-1,hK-aAC-1,hM+f8,a0d,aAD,-1);var aVm=aVn(hM,ym-hM-1,hK-f8,a0d,aVh,1);
var aVo=aVn(hM-1,hM-aMb-2,hK-f8,a0d,aVh,-1);var aVp=aVn(hM,ym-hM-1,hK+f8,a0d,aVh,1);
var aVq=aVn(hM-1,hM-aMb-2,hK+f8,a0d,aVh,-1);aVi=aVr(aVi,iW,aVe);aVi=aVr(aVi,iX,aVe);
aVi=aVr(aVi,aVk,aVe);aVi=aVr(aVi,aVl,aVe);aVi=aVr(aVi,aVm,aVe);aVi=aVr(aVi,aVo,aVe);
aVi=aVr(aVi,aVp,aVe);aVi=aVr(aVi,aVq,aVe);if(aVi>=0&&f8*f8>=bM.iY(aVi,aVe)){return aVi;
}}return-1;}function aVj(fC,f5,fE,a0d,aAD,fV){if(fE<1||fE>aAD){return-1;}for(var aB=0;aB<=f5;aB++){
var ej=bM.il(fC,fE);if(a0d(ej)){return ej>>2;}fC+=fV;}return-1;}function aVn(fE,f5,fC,a0d,aVh,fV){
if(fC<1||fC>aVh){return-1;}f5=Math.max(f5,0);for(var aB=0;aB<=f5;aB++){
var ej=bM.il(fC,fE);if(a0d(ej)){return ej>>2;}fE+=fV;}return-1;}function aVr(iW,iX,aVe){
if(iX===-1){return iW;}if(iW===-1){return iX;}if(bM.iY(iX,aVe)<bM.iY(iW,aVe)){
return iX;}return iW;}}function d3(){this.dl=function(){if(a0.id!==0){return false;}if(aVs()){
return true;}var value=aVt("replay");if(!this.clear()){return false;}if(!value){return false;
}t.u(3,0,value);return true;};function aVs(){var value=aVt(S[101]);if(!value){value=aVt("a");
if(!value){bI.clear();return false;}}bI.clear();t.u(8,t.tD,new tE(1000,{tF:0,tB:value,tC:0
}));return true;}this.clear=function(){var a25=new URL(window.location.href);a25.search="";try{
history.replaceState(null,"",a25.toString());return true;}catch(e){console.log("error 352: "+e);
}return false;};function aVt(key){if(typeof URLSearchParams===S[27]){return null;
}var aSt=window.location.search;var aVu=new URLSearchParams(aSt);var value=aVu.get(key);
if(typeof value!==S[45]||value.length<1){return null;}return value;}this.aPh=function(key,value){
if(a0.id!==0){return;}try{var a25=new URL(window.location.href);var gd=a25.searchParams;
gd.set(key,value);a25.search=gd.toString();history.replaceState(null,"",a25.toString());
}catch(e){console.log("error 358: "+e);}};}function ck(){var aVv;var g;this.dd=function(){
g=new Uint16Array(101);for(var aB=g.length-1;aB>=0;aB--){g[aB]=bL.fW(aB*32768,100);
}this.a5d(0);};this.value=function(gd){return g[gd];};this.aMT=function(){
return bL.fW(aVv-1,2);};this.a5d=function(aM7){aVv=(aM7*2)%32768+1;};this.random=function(){
aVv=aVv*167%32768;return aVv;};this.jh=function(mu){return bL.fW(mu*this.random(),32768);
};this.kI=function(gd){return gd!==0&&this.random()<this.value(gd);
};this.j3=function(fO,fP){return fO+this.jh(fP-fO);};}function cz(){this.qD=new aVw();
this.a5n=new aVx();this.aJk=new aVy();this.dd=function(){if(aD.hE){return;}this.qD.dd();
};this.eY=function(){if(aD.hE){return;}this.qD.eY();aVz();};function aVz(){if(t.tD!==3){return;
}if(bf.kN()%15!==5&&aD.a11!==2){return;}t.a2H().aSu();}this.aSx=function(){var aW0=aD.a11!==0;
var aW1=aD.a5Z;if(!aW0){aa.aHM();}aD.a5X.a5w();aD.data.canvas=null;b0.y.close(b0.y.a2L,3257);
b0.y.a2L=0;aD.data.isReplay=1;aD.a5b();if(aW0){aD.a5Z=aW1;}};this.aSw=function(qa){
var aB=qa.indexOf("=");if(aB>=0){return qa.substring(aB+1);}return qa;};this.aSv=function(qa){
return qa;};}function aVw(){this.aW2=null;this.aW3=null;this.aW4=null;this.aW5=null;this.aW6=null;
this.aW7=null;this.a5m="";var aW8=0;this.dd=function(){this.aW2=[];this.aW3=[];this.aW4=[];
this.aW5=[];this.aW6=[0];this.aW7=[0];aW8=0;this.a5m="";};this.qE=function(id,fo,fq,fs){
if(aD.hE||aD.a11===2){return;}if(this.aW6[aW8]===0){if(this.aW7[aW8]){this.aW6.push(1);
this.aW7.push(0);aW8++;}else{this.aW6[aW8]=1;}}this.aW2.push(id);this.aW3.push(fo);
this.aW4.push(fq===undefined?0:fq);this.aW5.push(fs===undefined?0:fs);this.aW7[aW8]++;
};this.eY=function(){if(this.aW6[aW8]===0){this.aW7[aW8]++;return;}this.aW6.push(0);
this.aW7.push(0);aW8++;};}function aVy(){var aW9=0;this.xI=function(qa,aWA){aW9=aWA;
bG.tG.xA(bG.tG.x8(bG.tG.x6(qa)));aN.a74="";if(!aPr()){return false;}aWB();if(!aWC()){return false;
}if(bH.eC<8*bH.size-13||bH.eC>8*bH.size){aWD("Out Of Bounds Error: "+bH.eC+" "+(8*bH.size));
return false;}b9.qD.a5m=qa;if(aD.data.mapType===2){aWD("Load base64 image...",2);
return aWA;}return true;};this.aJl=function(aJC,aWE){var a3t=document.createElement(S[4]);
var i7=a3t.getContext("2d");a3t.width=aJC.width;a3t.height=aJC.height;i7.drawImage(aJC,0,0);
aD.data.canvas=a3t;if(aW9||aWE){if(aD.a11){return;}aD.data.mapType=2;t.x();t.u(19);return;
}b9.aSx();};function aPr(){if(bH.size<10){aWD("File Too Small");return false;}var aWF=bH.q1(12);
if(aWF!==l.rVersion){var r="Incompatible Version   Required: "+l.rVersion;r+="   Found: "+aWF;
r+="   Compatible at "+b0.y.a1R()+"/"+aWF;aWD(r,1);}var aVB=bH.q1(12);var aWG=bH.q1(31);
if(aWG!==bH.size){aWD("Size Error: "+aWG+" "+bH.size);return false;}if(aWH(aVB,aWF)){return true;
}return false;}function aWD(qa,id){if(aW9){return;}if(!id){t.u(4,3,new v("⚠️ "+L(472),qa,1));
return;}if(id===1){aN.a74=L(473)+": "+qa;return;}t.u(4,3,new v(L(474),qa,1));}function aWH(j,aWF){
var gd=bH.aC;var f5=bH.size;var aVB=aWF;for(var aB=3;aB<f5;aB++){aVB=(aVB+gd[aB])&4095;
}if(aVB===j){return true;}aWD("Hash Error: "+aVB+" "+j+" "+f5);return false;}function aWB(){
var iO=bH;var ql=aD.data=new a5W();ql.mapType=iO.q1(2);ql.mapProceduralIndex=iO.q1(8);
ql.mapRealisticIndex=iO.q1(8);ql.mapSeed=iO.q1(14);ql.mapName=iO.aWI(5);
ql.mapType===2&&iO.aWJ();ql.passableWater=iO.q1(1);ql.passableMountains=iO.q1(1);
ql.playerCount=iO.q1(10);ql.humanCount=iO.q1(10);ql.selectedPlayer=iO.q1(9);
ql.gameMode=iO.q1(1);ql.playerMode=iO.q1(2);ql.battleRoyaleMode=iO.q1(2);
ql.numberTeams=iO.q1(4);ql.isZombieMode=iO.q1(1);ql.isContest=iO.q1(1);
ql.isReplay=iO.q1(1);ql.elo=iO.aWK(2,14,2);ql.colorsType=iO.q1(1);ql.colorsPersonalized=iO.q1(1);
ql.colorsData=iO.aWK(10,18,512);ql.selectableColor=iO.q1(1);ql.teamPlayerCount=iO.aWK(4,10,9);
ql.neutralBots=iO.q1(1);ql.botDifficultyType=iO.q1(2);ql.botDifficultyValue=iO.q1(4);
ql.botDifficultyTeam=iO.aWK(4,4,9);ql.botDifficultyData=iO.aWK(10,4,512);ql.spawningType=iO.q1(2);
ql.spawningSeed=iO.q1(14);ql.spawningData=iO.aWK(11,12,1024);ql.selectableSpawn=iO.q1(1);
ql.playerNamesType=iO.q1(2);ql.playerNamesData=iO.aWL(10,5,512);ql.selectableName=iO.q1(1);
ql.aIncomeType=iO.q1(2);ql.aIncomeValue=iO.q1(8);ql.aIncomeData=iO.aWK(10,8,512);
ql.tIncomeType=iO.q1(2);ql.tIncomeValue=iO.q1(8);ql.tIncomeData=iO.aWK(10,8,512);
ql.iIncomeType=iO.q1(2);ql.iIncomeValue=iO.q1(8);ql.iIncomeData=iO.aWK(10,8,512);
ql.sResourcesType=iO.q1(2);ql.sResourcesValue=iO.q1(11);ql.sResourcesData=iO.aWK(10,11,512);
ql.a5u=iO.aWK(10,30,0);}function aWC(){var iO=bH;var xJ=iO.q1(5);var aWM=iO.q1(30);
var aWN=iO.q1(30);if(aWM+aWN>8*iO.size){aWD("Corrupted File");return false;}aWO(aWM);
aWP(aWN,xJ);return true;}function aWO(f5){var aWQ=new Uint8Array(f5);var aWR=new Uint16Array(f5);
var aWS=new Uint32Array(f5);var aWT=new Uint32Array(f5);b9.qD.aW2=aWQ;b9.qD.aW3=aWR;
b9.qD.aW4=aWS;b9.qD.aW5=aWT;for(var aB=0;aB<f5;aB++){var id=bH.q1(4);aWQ[aB]=id;aWR[aB]=bH.q1(9);
if(id===0){aWS[aB]=bH.q1(22);}else if(id===1){aWS[aB]=bH.q1(10);aWT[aB]=bH.q1(10);}else if(id===2){
aWS[aB]=bH.q1(10);aWT[aB]=bH.q1(9);}else if(id===3){aWS[aB]=bH.q1(10);aWT[aB]=bH.q1(27);
}else if(id===4){aWS[aB]=bH.q1(10);aWT[aB]=bH.q1(16);}else if(id===5){aWS[aB]=bH.q1(10);
}else if(id===6){aWS[aB]=bH.q1(10);}else if(id===7){aWS[aB]=bH.q1(1);}else if(id===10){
aWS[aB]=bH.q1(20);aWT[aB]=bH.q1(22);}}}function aWP(f5,xJ){var aW6=new Uint8Array(f5);
var aW7=new Array(f5);aW7.fill(0);b9.qD.aW6=aW6;b9.qD.aW7=aW7;for(var aB=0;aB<f5;aB++){
aW6[aB]=bH.q1(1);aW7[aB]=bH.q1(xJ);}}}function aVx(){this.a0T=function(){var xJ=aWU();
aWV();aWW(xJ);aWX(xJ);var aWY=bE.eC;var a0G=bL.fW(aWY-1,6)+1;if(bD.aUf(6*a0G)!==bE.g.length){
bE.g.push(0);}aWZ();bH.dd(bE.g);var rP=bF.tG.tH(bF.tG.tI(a0G));bH.ud();bE.dd();return rP;
};function aWV(){var ql=aD.data;var i=bE;i.dd();i.a8(12,l.rVersion);i.eC+=12+31;i.a8(2,ql.mapType);
i.a8(8,ql.mapProceduralIndex);i.a8(8,ql.mapRealisticIndex);i.a8(14,ql.mapSeed);i.aWa(ql.mapName,5);
ql.mapType===2&&i.aWb(ql.canvas);i.a8(1,ql.passableWater);i.a8(1,ql.passableMountains);
i.a8(10,ql.playerCount);i.a8(10,ql.humanCount);i.a8(9,ql.selectedPlayer);i.a8(1,ql.gameMode);
i.a8(2,ql.playerMode);i.a8(2,ql.battleRoyaleMode);i.a8(4,ql.numberTeams);i.a8(1,ql.isZombieMode);
i.a8(1,ql.isContest);i.a8(1,ql.isReplay);i.dj(ql.elo,2,14);i.a8(1,ql.colorsType);
i.a8(1,ql.colorsPersonalized);i.dj(ql.colorsData,10,18);i.a8(1,ql.selectableColor);
i.dj(ql.teamPlayerCount,4,10);i.a8(1,ql.neutralBots);i.a8(2,ql.botDifficultyType);
i.a8(4,ql.botDifficultyValue);i.dj(ql.botDifficultyTeam,4,4);i.dj(ql.botDifficultyData,10,4);
i.a8(2,ql.spawningType);i.a8(14,ql.spawningSeed);i.dj(ql.spawningData,11,12);
i.a8(1,ql.selectableSpawn);i.a8(2,ql.playerNamesType);i.aWc(ql.playerNamesData,10,5);
i.a8(1,ql.selectableName);i.a8(2,ql.aIncomeType);i.a8(8,ql.aIncomeValue);
i.dj(ql.aIncomeData,10,8);i.a8(2,ql.tIncomeType);i.a8(8,ql.tIncomeValue);i.dj(ql.tIncomeData,10,8);
i.a8(2,ql.iIncomeType);i.a8(8,ql.iIncomeValue);i.dj(ql.iIncomeData,10,8);i.a8(2,ql.sResourcesType);
i.a8(11,ql.sResourcesValue);i.dj(ql.sResourcesData,10,11);i.dj(ql.a5u,10,30);}function aWW(xJ){
var i=bE;var aW2=b9.qD.aW2;var fo=b9.qD.aW3;var fq=b9.qD.aW4;var fs=b9.qD.aW5;var f5=aW2.length;
i.a8(5,xJ);i.a8(30,f5);i.a8(30,b9.qD.aW7.length);for(var aB=0;aB<f5;aB++){var ed=aW2[aB];
i.a8(4,ed);i.a8(9,fo[aB]);if(ed===0){i.a8(22,fq[aB]);}else if(ed===1){i.a8(10,fq[aB]);
i.a8(10,fs[aB]);}else if(ed===2){i.a8(10,fq[aB]);i.a8(9,fs[aB]);}else if(ed===3){i.a8(10,fq[aB]);
i.a8(27,fs[aB]);}else if(ed===4){i.a8(10,fq[aB]);i.a8(16,fs[aB]);}else if(ed===5){i.a8(10,fq[aB]);
}else if(ed===6){i.a8(10,fq[aB]);}else if(ed===7){i.a8(1,fq[aB]);}else if(ed===10){i.a8(20,fq[aB]);
i.a8(22,fs[aB]);}}}function aWX(xJ){var i=bE;var aW6=b9.qD.aW6;var aW7=b9.qD.aW7;var f5=aW6.length;
for(var aB=0;aB<f5;aB++){i.a8(1,aW6[aB]);i.a8(xJ,aW7[aB]);}}function aWd(){var g=bE.g;
var f5=g.length;var aVB=l.rVersion;for(var aB=3;aB<f5;aB++){aVB=(aVB+g[aB])&4095;}return aVB;
}function aWZ(){var i=bE;i.eC=12+12;i.a8(31,i.g.length);i.eC=12;i.a8(12,aWd());}function aWU(){
var aW7=b9.qD.aW7;var f5=aW7.length;var max=0;for(var aB=0;aB<f5;aB++){max=Math.max(max,aW7[aB]);
}return xQ(Math.max(max,1));}}function cp(){var ed;var bu=false;var aWe=false;
var aWf=-10000;var aWg=-1;var aWh=0;this.i=0;this.j=0;this.min=0;this.max=0;this.iF=0;
this.vV=1;this.k=1;this.ss=0;this.de=function(){this.i=aWi(document.documentElement.clientWidth)+2;
this.j=aWi(document.documentElement.clientHeight)+2;};this.dd=function(){ed=1;xP();aWj(0);};
function xP(){a2Y=document.getElementById("canvasA");if(a0.id===2){a2Y.style.webkitUserSelect=S[5];
}vZ=a2Y.getContext("2d",{alpha:false});vZ.imageSmoothingEnabled=false;}this.eY=function(){
if(++ed>=50){resize(0);}aWk();};function aWk(){if(aWg===-1){return;}if(bf.eT<aWg){return;
}aWh++;aWg=-1;if(2000*aWh>=bf.eT+4*2000){console.log("error 3748");return;}a0.a1.setState(15);
}this.dn=function(jf){bu=true;resize(jf);};this.a3D=function(){if(aWf+1000>bf.eT){return;
}aWf=bf.eT;resize(0);};function resize(aWl){ed=0;if(!ab.tf()){return;}if(aWj(aWl)||bu){bu=false;
bc.resize();bW.aCt.resize();aY.dd();bY.dd();aZ.resize();aT.resize();aO.resize();t.resize();
if(aD.a11>=1){aV.resize(false);aU.resize();aW.resize();aS.resize();aR.resize();aN.resize();
aM.resize();bC.resize();aw.resize();aP.resize();aQ.resize();aL.resize();be.resize();af.resize();
aX.resize();bh.resize();aS.aA2();}else{aa.aHO();aa.aHP();}bf.dk=true;}}function aWi(fX){
if(fX&&fX>128){return Math.floor(fX);}return 128;}function aWm(i,j){var iF=(i+j)/2;
var aWn=(a0.id!==0||i<j)?700:1200;var aWo=Math.min(aWn/iF,1);if(bj.eQ.data[1].value===0){
aWo=2*aWo/3;}else{aWo=Math.min(aWo+(bj.eQ.data[1].value-1)*(1-aWo)/2,1);
}h.k=(window.devicePixelRatio||1)*aWo;}function aWj(aWl){var tK,a9Q,tL,u3;if(h.ss>0){return false;
}tK=aWi(document.documentElement.clientWidth);a9Q=aWi((window.visualViewport&&a0.id!==2)?
window.visualViewport.height:document.documentElement.clientHeight);aWm(tK,a9Q);if(aWl&&!aWe){
aWe=true;t.removeChild(document.body,a2Y);}else if(aWe){aWe=false;document.body.appendChild(a2Y);
}tL=Math.floor(0.5+tK*h.k);u3=Math.floor(0.5+a9Q*h.k);if(tL===h.i&&u3===h.j){
return false;}h.i=tL;h.j=u3;h.min=aCV(tL,u3);h.max=a7J(tL,u3);h.iF=bL.fW(tL+u3,2);
h.vV=tL/u3;a2Y.width=tL;a2Y.height=u3;a2Y.style.width=tK+"px";a2Y.style.height=a9Q+"px";
aWg=bf.eT+1000;return true;}}function dH(){this.aUo=new aWp();this.a1r=new aWq();
this.aV5=new aWr();}function aWr(){this.q1=function(){return 69;};this.a0T=function(){
var i=window.screen.width;var j=window.screen.height;bD.a8(26,(i*j+j)%67108864);
bD.a8(22,0);bD.a8(21,0);};}function aWq(){this.a1s=function(){var aB,gd;var f5=al.kw;
var a0p=al.l1;var a1c=ag.a1c;var a9E=this.aIv();for(aB=0;aB<f5;aB++){gd=a0p[aB];if(!bA.gR.jn(gd)){
a1c[gd]=a9E;}}var qI=ag.qI;var jT=ag.jT;var jU=ag.jU;var a1a=ag.a1a;f5=aD.kQ;for(aB=0;aB<f5;aB++){
if(a1a[aB]===0||jU[aB]<1||2*qI[aB]>3*(jT[aB]+jU[aB])){a1c[aB]=0;}}var a1p=0;for(aB=0;aB<f5;aB++){
a1p+=a1c[aB]>0;}return a1p;};this.aIv=function(){return Math.min(65535,bf.kN());
};}function aWp(){var size=256;this.eY=function(aWs,aWt){var g=new Uint8Array(size);aWu(g,aWs,aWt);
aWv(g,aWs,2);aWv(g,aWt,7);aWw(g);return aUC(g);};function aWu(g,aWs,aWt){var aB;var f5=size;
var aWx=3+(4+aWs)%32768;var aWy=12+aWt%32768;var aWz=17+((aWs&aWt)+(aWs|aWt)+aWs)%32768;
for(aB=0;aB<f5;aB++){aWx=1+(aWx*aWy)%aWz;g[aB]=aWx%256;}}function aWv(g,fX,hx){
var aB;var f5=size;for(aB=0;aB<f5;aB++){g[aB]=(g[aB]+((fX>>((aB+hx)%30))&1))%256;}}function aWw(g){
var aB,fX;var f5=size;var eC=0;for(aB=0;aB<30000;aB++){fX=g[eC];g[eC]=(fX+aB+g[(eC+aB)%f5])%256;
eC=(fX+aB+eC+(fX&eC))%f5;}}function aUC(g){var aB;var f5=size;var a9Q=1;var u3=1;
for(aB=0;aB<f5;aB+=2){a9Q=((1+a9Q)*(g[aB]+1))%1073741824;u3=((1+u3)*(g[aB+1]+1))%1073741824;
}return [a9Q,u3];}this.aUp=function(aX0,aX1,aX2,result){var gY=1<<aX0;for(var aB=0;aB<gY;aB++){
if(this.aX3(aB,aX1,aX2)===result){return aB;}}return 0;};this.aX3=function(aX4,aX1,aX2){
var yL=aX1+aX4;var yU=aX2+aX4;var fX=(yL+yU)&2147483647;for(var fO=1;fO<=16;fO++){fX ^=fX>>fO;
fX>>>=1+(yL&3);fX=(fX*(7+((yL|yU)&1023)))&1073741823;fX+=(yU&65535);yL>>=1+(fX&1);yU>>=1+(yL&1);
}fX&=1073741823;return fX;};}function cm(){var aX5;var aX6;var iJ;var aX7;this.dd=function(){
var aB,fC,fE,aV6,aX8;var i,j,zA,i4,xa,fX,gd,fL,fO;if(aX9()){aX6=null;return;}aX5=bL.fW(64+32,4);
if(bS.el===1){aV6=0;aX8=160;}else{aV6=128;aX8=32;}aX7=S[9]+aV6+","+aV6+","+aV6+")";
aX6=new Array(4);for(aB=3;aB>=0;aB--){aX6[aB]=document.createElement(S[4]);
i=aB%2===0?bS.fG:aX5;j=aB%2===0?aX5:bS.fH+2*aX5;aX6[aB].width=i;
aX6[aB].height=j;zA=aX6[aB].getContext("2d",{alpha:false});i4=zA.getImageData(0,0,i,j);
xa=i4.data;if(aB%2===0){for(fE=aX5-1;fE>=0;fE--){fX=aX8+Math.floor((fE+1)*(aV6-aX8)/(aX5+1));
for(fC=i-1;fC>=0;fC--){gd=((aB===0?aX5-fE-1:fE)*i+fC)*4;xa[gd]=fX;xa[gd+1]=fX;xa[gd+2]=fX;
xa[gd+3]=255;}}}else{for(fC=aX5-1;fC>=0;fC--){fX=aX8+Math.floor((fC+1)*(aV6-aX8)/(aX5+1));
for(fE=j-1-aX5;fE>=aX5;fE--){gd=(fE*i+(aB===3?aX5-fC-1:fC))*4;
xa[gd]=fX;xa[gd+1]=fX;xa[gd+2]=fX;xa[gd+3]=255;}}for(fO=1;fO>=0;fO--){for(fC=aX5-1;fC>=0;fC--){
for(fE=aX5-1;fE>=0;fE--){fL=(Math.pow((fC*fC+fE*fE),0.5)+1)/(aX5+1);fL=fL>1?1:fL;
fX=aX8+Math.floor(fL*(aV6-aX8));gd=((fO===0?aX5-fE-1:fE+fO*(j-aX5))*i+(aB===1?fC:aX5-fC-1))*4;
xa[gd]=fX;xa[gd+1]=fX;xa[gd+2]=fX;xa[gd+3]=255;}}}}zA.putImageData(i4,0,0);}aXA(aX8);
};function aX9(){iJ=true;aX7=S[9]+bS.xY[0]+","+bS.xY[1]+","+bS.xY[2]+")";if(bS.aMG(bS.el)){
return true;}iJ=false;return false;}function aXA(aXB){bS.xT.fillStyle=S[9]+aXB+","+aXB+","+aXB+")";
bS.xT.fillRect(0,0,bS.fG,1);bS.xT.fillRect(0,bS.fH-1,bS.fG,1);
bS.xT.fillRect(0,0,1,bS.fH);bS.xT.fillRect(bS.fG-1,0,1,bS.fH);}this.z4=function(){
var fO=iJ?0:-aX5;if(!aO1(fO,fO,bS.fG-2*fO,bS.fH-2*fO,ba.aXC,ba.aXD,ba.aXE,ba.aXF)){
vZ.fillStyle=aX7;vZ.fillRect(0,0,h.i,h.j);}};this.vY=function(){if(iJ){return;
}if(aO0(0,-aX5,bS.fG,aX5,ba.aXC,ba.aXD,ba.aXE,ba.aXF)){vZ.drawImage(aX6[0],ba.aXG,ba.aXH-aX5);
}if(aO0(bS.fG,-aX5,aX5,bS.fH+2*aX5,ba.aXC,ba.aXD,ba.aXE,ba.aXF)){
vZ.drawImage(aX6[1],ba.aXG+bS.fG,ba.aXH-aX5);
}if(aO0(0,bS.fH,bS.fG,aX5,ba.aXC,ba.aXD,ba.aXE,ba.aXF)){vZ.drawImage(aX6[2],ba.aXG,ba.aXH+bS.fH);
}if(aO0(-aX5,-aX5,aX5,bS.fH+2*aX5,ba.aXC,ba.aXD,ba.aXE,ba.aXF)){
vZ.drawImage(aX6[3],ba.aXG-aX5,ba.aXH-aX5);
}};}function d6(){this.aIt=new aXI();this.z7=new aXJ();this.y=new aXK();this.is=new aXL();
this.aXB=new aXM();this.mL=new aXN();this.kE=new aXO();this.lD=new aXP();this.aXQ=new aXR();
this.aXS=new aXT();this.mW=new aXU();this.hf=new aXV();this.lm=new aXW();this.lF=new aXX();
this.hi=new aXY();this.mP=new aXZ();this.qQ=new aXa();this.dd=function(){this.lm.dd();this.z7.dd();
this.y.dd();this.is.dd();this.aXB.dd();this.aXS.dd();this.mP.dd();};this.vY=function(){
this.aXS.vY();this.z7.vY();};}function aXO(){this.eY=function(player){if(!bN.mW.mX(player)){
return false;}var kU=bN.y.kU[player];if(kU>=Math.max(3*ao.performance.le,aE.ke[aE.ho[player]])){
return false;}if(!bA.gR.mY(player,aE.kc[aE.ho[player]],32,0)){return false;
}if(aW.aCI()){return aXb(player);}if(!ao.jH.eY(player)&&!ao.j6.eY(player)&&!ao.j8.eY(player)){
return false;}aXc(player);return true;};function aXb(player){
var aXd=bN.lF.aCL();var f5=aXd.length;if(f5===0){return false;}var mS=aXd[ay.jh(f5)];
var nN=bN.y.mJ[mS];if(bN.mP.mQ(player,nN)){return false;}if(!aXe(player,mS)){return false;
}if(!bN.hi.qP(player,nN,1)){return false;}bA.gR.ma(player);bN.y.mb(player);return true;
}function aXe(player,mS){var aXf=bM.iq(bN.y.mV[mS]);var hK=bM.fD(aXf);var hM=bM.fF(aXf);
var nQ=ag.iy[player];var nR=ag.j0[player];var nd=ag.iz[player];var ne=ag.j1[player];
var iP=Math.max(hK-nd,nQ-hK);var iS=Math.max(hM-ne,nR-hM);return iP<100&&iS<100;
}function aXc(player){bO.fh[1]=4;bA.gR.ma(player);bN.y.mb(player);}}function aXZ(){
var aXg=0;var aXh=null;this.dd=function(){if(aXh===null){aXh=new Uint16Array(2*bN.y.ke);
}aXg=0;};this.ec=function(aXi,mP){var aXj=aXh;aXj[aXg++]=aXi;aXj[aXg++]=mP;
};this.mQ=function(player,mO){var aXj=aXh;var f5=aXg;for(var aB=0;aB<f5;aB+=2){if(aXj[aB]===mO){
if(!bN.lF.aXk(aXj[aB+1])){continue;}if(player===(bN.y.mK[bO.fh[2]]>>3)){return true;
}}}return false;};this.aXl=function(aXm){var mL=bN.y.mH[aXm];if(mL<64){return;}aXn(bN.y.mJ[aXm]);
};this.aXo=function(aXp,aXq){var aXr=bN.y.mJ[aXp];var mO=-1;var aXj=aXh;var f5=aXg;
for(var aB=1;aB<f5;aB+=2){if(aXj[aB]===aXr){mO=aXj[aB-1];break;}}if(mO===-1){return false;
}if(!bN.lF.aXk(mO)){return false;}var aXm=bO.fh[2];var ll=bN.y.mI[aXm];if(aXq===ll[ll.length-1]){
bN.y.mI[aXp]=bN.lm.aXs(bN.y.mI[aXp],bN.lm.lu(ll));return true;}var aXt=bN.lF.aXu(ll,aXq);
if(aXt===-1){return false;}var aXv=bN.y.mU[aXm];if(aXt===aXv){var aXw=bM.iq(bN.y.mV[aXm]);
bN.y.mI[aXp]=bN.lm.aXx(bN.y.mI[aXp],ll,aXt,aXq,bM.iV(ll[aXt],aXq)>bM.iV(ll[aXt],aXw));
return true;}bN.y.mI[aXp]=bN.lm.aXx(bN.y.mI[aXp],ll,aXt,aXq,aXt>aXv);return true;
};function aXn(mO){var aXj=aXh;var f5=aXg;for(var aB=f5-2;aB>=0;aB-=2){if(aXj[aB]===mO){
aXy(aXj[aB+1]);aXj[aB]=aXj[f5-2];aXj[aB+1]=aXj[f5-1];f5-=2;}}aXg=f5;}function aXy(aXr){
if(!bN.lF.aXk(aXr)){return;}bN.mP.aXz(bO.fh[2]);}this.aXz=function(aY0){var lL=bN.y;
var mL=lL.mH[aY0];if(mL%64===5){return false;}var ll=lL.mI[aY0];lL.aY1[aY0]=65535-lL.aY1[aY0];
lL.mU[aY0]=ll.length-lL.mU[aY0]-2;lL.mI[aY0]=bN.lm.lu(ll);lL.mH[aY0]=mL-mL%64+5;
return true;};}function aXU(){this.mX=function(player){if(!aD.data.passableWater){
return false;}if(bN.y.mG===bN.y.ke){return false;}if(bN.y.kU[player]===bN.y.aY2){
return false;}if(ag.gm[player].length===0){return false;}return true;
};this.qL=function(aVe){var mL=bO.fh[1];if(mL>=4){return false;}if(!bN.lF.aY3(bM.ev(aVe))){
return false;}return ac.f0(bM.ev(bM.iu(aVe,mL)));};}function aXI(){this.aIu=function(player){
var a8e=bN.y.a8e;var tX=player<<3;var tY=tX+bN.y.kU[player]-1;for(var aB=tY;aB>=tX;aB--){
this.aY4(a8e[aB]);}};this.aY4=function(aY5){var y=bN.y;var aY6=y.mG-1;var aY7=y.mK[aY5];
var aY8=y.aY9[aY5];var aYA=y.mV[aY5];y.mG=aY6;y.mK[aY5]=y.mK[aY6];y.mV[aY5]=y.mV[aY6];
y.aY1[aY5]=y.aY1[aY6];y.a7a[aY5]=y.a7a[aY6];y.aY9[aY5]=y.aY9[aY6];y.mJ[aY5]=y.mJ[aY6];
y.mH[aY5]=y.mH[aY6];y.aYB[aY5]=y.aYB[aY6];y.mI[aY5]=y.mI[aY6];y.mU[aY5]=y.mU[aY6];
y.a8e[y.mK[aY5]]=aY5;aYC(aY7);bN.is.is[bM.ir(y.mV[aY5])][y.aY9[aY5]]=aY5;aYD(bM.ir(aYA),aY8);
};function aYC(aVd){var player=aVd>>3;var y=bN.y;var f5=y.kU[player]-1;var aYE=(player<<3)+f5;
y.kU[player]=f5;if(aYE===aVd){return;}y.a8e[aVd]=y.a8e[aYE];y.mK[y.a8e[aVd]]=aVd;
}function aYD(aB,aYF){var aP5=bN.is.is[aB];var e=aP5.pop();if(aYF===aP5.length){return;
}aP5[aYF]=e;bN.y.aY9[e]=aYF;}}function aXJ(){var aYG;var aYH=8;var aYI=null;this.dd=function(){
if(!aYG){aYG=new Array(aD.f2);}aYG.fill(null);aYI=aYJ(255);aYK();};function aYK(){
if(!aD.hz){return;}var a3t=new Array(bg.kn.length);var f5=aD.f2;var aYL=aYG;var aBd=bg.aBd;
for(var aB=0;aB<f5;aB++){var a6L=aBd[aB];if(!a3t[a6L]){a3t[a6L]=aYM(a6L);}aYL[aB]=a3t[a6L];
}}function aYJ(eC){var i1=aYH+4;var a3t=bA.qt.xP(i1,i1);var i7=bA.qt.getContext(a3t,true);
var i4=bA.qt.getImageData(i7,i1,i1);var xa=i4.data;aYN(xa,i1+1,eC);aYN(xa,i1+2,eC);
aYN(xa,2*i1+1,eC);aYN(xa,2*i1-3,eC);aYN(xa,2*i1-2,eC);aYN(xa,3*i1-2,eC);aYN(xa,i1*(i1-3)+1,eC);
aYN(xa,i1*(i1-2)+1,eC);aYN(xa,i1*(i1-2)+2,eC);aYN(xa,i1*(i1-2)-2,eC);aYN(xa,i1*(i1-1)-3,eC);
aYN(xa,i1*(i1-1)-2,eC);i7.putImageData(i4,0,0);return a3t;}function aYN(xa,er,eC){
var ej=4*er;xa[ej]=255;xa[ej+1]=255;xa[ej+2]=eC;xa[ej+3]=255;}function aYO(player){
var a3t=bA.qt.xP(aYH,aYH);var i7=bA.qt.getContext(a3t,true);aYP(i7,ac.a8F(player));
return a3t;}function aYM(a6L){var a3t=bA.qt.xP(aYH,aYH);var i7=bA.qt.getContext(a3t,true);
var g=bO.fe;g.set(bg.aYQ[a6L]);aYP(i7,g);return a3t;}function aYP(i7,aX7){
var fC,fE,iP,iS,fL,er,aYR,aYS,aYT;var i1=aYH;var i4=bA.qt.getImageData(i7,i1,i1);
var xa=i4.data;var lL=(i1>>1)-0.5;var aYU=bA.r1.a3R(aX7,0.5);if(!bA.r1.a3T(aX7,aYU,300)){
bA.r1.a3V(aX7,100);}for(fE=0;fE<i1;fE++){for(fC=0;fC<i1;fC++){iP=fC-lL;iS=fE-lL;er=(fE*i1+fC)*4;
fL=iP*iP+iS*iS;aYS=((i1-1.5)*(i1-1.5)/4);aYT=((i1-4.5)*(i1-4.5)/4);aYR=fL<=aYT?aYU:aX7;
xa[er]=aYR[0];xa[er+1]=aYR[1];xa[er+2]=aYR[2];xa[er+3]=fL>aYS?0:255;}}i7.putImageData(i4,0,0);
}this.vY=function(){var aB,aYV,aO9,aOA,fC,fE,player,fontSize,a3t,f9,ho,aYW,iO;
var aYX,aYY,aYZ,aYa;var mV=bN.y.mV;var mK=bN.y.mK;
var a7a=bN.y.a7a;var aYB=bN.y.aYB;var aYb=aYG;var aYc=aD.ep;var f5=bN.y.mG;var aYd=h.i;var aYe=h.j;
var aYf=bS.fG<<4;var aYg=aYH;var eu=iG;var ej=eu/aYg;var nQ=ii/eu;var nR=ij/eu;var nd=(aYd+ii)/eu;
var ne=(aYe+ij)/eu;var iP=nd-nQ;var iS=ne-nR;var i7=vZ;i7.imageSmoothingEnabled=eu<9;
bA.qt.textAlign(i7,1);bA.qt.textBaseline(i7,1);for(aB=0;aB<f5;aB++){player=mK[aB]>>3;
ho=a7a[aB];aYV=0.9+0.1*Math.log10(ho);iO=mV[aB];aO9=(iO%aYf)/16-aYV;aOA=Math.floor(iO/aYf)/16-aYV;
fC=aYd*(aO9-nQ)/iP;fE=aYe*(aOA-nR)/iS;aYZ=+(player===aYc);aYY=1+aYZ/8;aYa=eu*aYV;
aYX=-2*aYa*aYY;aYY=aYZ*aYa/4;if(fC<aYX||fE<aYX||fC>aYd+aYY||fE>aYe+aYY){continue;}f9=2*aYV*ej;
aYW=aYV*eu;a3t=aYb[player];if(a3t===null){aYb[player]=a3t=aYO(player);}if(player===aYc){
i7.setTransform(f9,0,0,f9,fC-f9*2,fE-f9*2);i7.drawImage(aYI,0,0);}i7.setTransform(f9,0,0,f9,fC,fE);
i7.drawImage(a3t,0,0);fontSize=Math.floor(aYh(ho)*aYW);if(fontSize<6){continue;
}i7.setTransform(1,0,0,1,0,0);i7.fillStyle=aYB[aB]?bB.oY:bB.o0;i7.font=bA.qt.sk(1,fontSize);
i7.fillText(bA.rs.a0I(ho),fC+aYW,fE+aYW+0.1*fontSize);}i7.imageSmoothingEnabled=false;
i7.setTransform(1,0,0,1,0,0);};function aYh(ho){if(ho<1000){return 0.42;
}if(ho<10000){return 0.34;}if(ho<1000000){return 0.26;}if(ho<100000000){return 0.19;}return 0.15;
}}function aXT(){var aYi;var aYj=20;this.dd=function(){if(!aD.hz){aYi=[bP.y.aYk(aYj,bg.aYl[7])];
return;}aYm();};function aYm(){var hv=1-aD.yD;aYi=new Array(bg.kn.length);
for(var aB=aD.yC-1;aB>=0;aB--){var a6L=bg.kn[aB+hv];aYi[a6L]=bP.y.aYk(aYj,bg.aYl[a6L]);
}if(aD.ki===9){aYi[1]=bP.y.aYk(aYj,bg.aYl[1]);}}this.vY=function(){
var nk=iG;if(nk>=5){return;}var aYd=h.i;var aYe=h.j;var nQ=ii/nk;var nR=ij/nk;var nd=(aYd+ii)/nk;
var ne=(aYe+ij)/nk;var ge=-aYj*nk;var aYn=0.5*ge;var aYf=bS.fG<<4;var f5=bN.y.mG;var mV=bN.y.mV;
var mK=bN.y.mK;var aBd=bg.aBd;var a3t=aYi;var i7=vZ;if(nk>3){i7.globalAlpha=0.5*(5-nk);
}for(var aB=0;aB<f5;aB++){var iO=mV[aB];var aYo=(iO%aYf)/16;var aYp=Math.floor(iO/aYf)/16;
var fC=aYd*(aYo-nQ)/(nd-nQ)+aYn;var fE=aYe*(aYp-nR)/(ne-nR)+aYn;if(fC>aYd||fE>aYe||fC<ge||fE<ge){
continue;}i7.setTransform(nk,0,0,nk,fC,fE);i7.drawImage(a3t[aBd[mK[aB]>>3]],0,0);
}i7.globalAlpha=1;i7.setTransform(nk,0,0,nk,0,0);};}function aXX(){
this.aYq=function(player,id){var aYr=ag.gm[player];var f5=aYr.length;for(var aB=0;aB<f5;aB++){
if(bM.iH(aYr[aB],id)){return true;}}return false;};this.aYs=function(player,er){
var aB,fX,iX,aYt,aYu,ej;var aYr=ag.gm[player];var f5=aYr.length;var i=bS.fG;var aYv=bM.fD(er);
var aYw=bM.fF(er);var fB=-1;var min=bS.fG*bS.fG+bS.fH*bS.fH;var id=ac.en(bM.ev(er));
for(aB=0;aB<f5;aB++){ej=aYr[aB];iX=ej>>2;aYt=aYv-(iX%i);aYu=aYw-~~((iX+0.5)/i);
fX=aYt*aYt+aYu*aYu;if(fX<min&&bM.iH(ej,id)){min=fX;fB=iX;}}return fB;};this.lG=function(iW,iX){
var id=ac.en(bM.ev(iX));var iI=bM.iA;var ej=bM.ev(iW);var aYx=-1;for(var aB=0;aB<4;aB++){
var eu=ej+iI[aB];if(ac.iJ(eu)&&ac.en(eu)===id&&(aYx===-1||bM.iY(bM.et(eu),iX)<
bM.iY(aYx,iX))){aYx=bM.et(eu);}}return aYx;};this.lp=function(player,er){var iI=bM.iA;
var ej=bM.ev(er);for(var aB=0;aB<4;aB++){var eu=ej+iI[aB];if(ac.gf(eu)&&ac.z2(player,eu)){
return true;}}return false;};this.lq=function(player,er){var iI=bM.iA;var ej=bM.ev(er);
for(var aB=0;aB<4;aB++){var eu=ej+iI[aB];if(ac.ew(eu)){return true;}if(ac.gf(eu)){var jZ=ac.ex(eu);
if(player!==jZ&&bs.ey(player,jZ)){return true;}}}return false;};this.mM=function(er){
var iI=bM.iA;var ej=bM.ev(er);for(var aB=0;aB<4;aB++){var eu=ej+iI[aB];if(ac.gf(eu)){
var player=ac.ex(eu);if(bA.gR.jn(player)){return player;}}}return-1;};this.aY3=function(ej){
if(!ac.iJ(ej)){return false;}var iI=bM.iA;for(var aB=0;aB<4;aB++){if(ac.f0(ej+iI[aB])){return true;
}}return false;};this.nP=function(player,id){var f5=bN.y.kU[player];var tX=player<<3;var tY=tX+f5;
var mJ=bN.y.mJ;var a8e=bN.y.a8e;for(var aB=tX;aB<tY;aB++){var a8f=a8e[aB];if(mJ[a8f]===id){
return a8f;}}return-1;};this.nU=function(player){var f5=bN.y.kU[player];if(f5===0){
return-1;}return bN.y.a8e[player<<3];};this.a6d=function(lf,lg){var f5=bN.y.mG;if(f5<1){return-1;
}var mV=bN.y.mV;var aYy=16*5;var aQS=-1;for(var aB=0;aB<f5;aB++){var fL=bM.iL(lf,lg,mV[aB]);
if(fL<aYy){aYy=fL;aQS=aB;}}if(!aYz(aQS,lf,lg)){return-1;}return aQS;};this.aXk=function(nN){
var f5=bN.y.mG;var mJ=bN.y.mJ;for(var aB=0;aB<f5;aB++){if(mJ[aB]===nN){bO.fh[2]=aB;return true;
}}return false;};this.aIq=function(player){var f5=bN.y.kU[player];var tX=player<<3;var tY=tX+f5;
var a8e=bN.y.a8e;var a7a=bN.y.a7a;var ho=0;for(var aB=tX;aB<tY;aB++){ho+=a7a[a8e[aB]];}return ho;
};this.aZ0=function(player,aY0){var ll=bN.y.mI[aY0];return this.lp(player,ll[ll.length-1]);
};this.aZ1=function(iW,iX,fL,aZ2){var ia=bM.fD(iW);var ib=bM.fF(iW);var ic=bM.fD(iX);
var ie=bM.fF(iX);fL=Math.max(fL,1);var aZ3=ic-ia;var aZ4=ie-ib;var iP=bL.fW(Math.abs(aZ3)*aZ2,fL);
var iS=bL.fW(Math.abs(aZ4)*aZ2,fL);return bM.fS(ia+Math.sign(aZ3)*iP,ib+Math.sign(aZ4)*iS);
};function aYz(aB,lf,lg){if(aB<0){return false;}var aZ5=bN.y.mV[aB];
var aZ6=bM.iR(aZ5);var aZ7=bM.iU(aZ5);var aVf=1.25*16*(0.9+0.1*Math.log10(bN.y.a7a[aB]));
aVf=Math.max(aVf,bM.ik(bA.qt.tc(0.02,1.7)));return bL.aO8(bM.iQ(lf),bM.iT(lg),aZ6,aZ7,aVf);
}this.aXu=function(ll,er){var f5=ll.length-1;var fC=bM.fD(er);var fE=bM.fF(er);
for(var aB=0;aB<f5;aB++){var iW=ll[aB];var iX=ll[aB+1];var nQ=bM.fD(iW);var nR=bM.fF(iW);
var nd=bM.fD(iX);var ne=bM.fF(iX);if((fC===nQ||fC===nd||Math.sign(fC-nQ)!==Math.sign(fC-nd))&&
(fE===nR||fE===ne||Math.sign(fE-nR)!==Math.sign(fE-ne))){if(nQ===nd||nR===ne){
return aB;}if(Math.abs(fC-nQ)===Math.abs(fE-nR)&&Math.abs(fC-nd)===Math.abs(fE-ne)){
return aB;}}}return-1;};this.aCL=function(){var aZ8=m1[0];
var mK=bN.y.mK;var mG=bN.y.mG;var g=[];for(var aB=0;aB<mG;aB++){if(bA.gR.l4(aZ8,mK[aB]>>3)){
g.push(aB);}}return g;};this.ln=function(player,ll){var f5=bN.y.kU[player];
var tX=player<<3;var tY=tX+f5;var a8e=bN.y.a8e;var mI=bN.y.mI;var hX=ll[0];var l3=ll[ll.length-1];
for(var aB=tX;aB<tY;aB++){var gd=mI[a8e[aB]];if(gd[0]===hX&&gd[gd.length-1]===l3){
return true;}}return false;};}function aXY(){this.hj=function(player,er){if(!aZ9(player)){
return false;}var aY0=aZA(player,er);if(aY0===-1){return false;}if(!aZB(player,aY0)){return false;
}bO.fh[3]=bN.y.mJ[aY0];return true;};this.pW=function(player,nN){if(!aZ9(player)){return false;
}if(!bN.lF.aXk(nN)){return false;}var aY0=bO.fh[2];if(!aZB(player,aY0)){return false;}return true;
};this.qP=function(player,nN,aZC){if(!aZD(player,nN,aZC)){return false;}var aY0=bO.fh[2];
bN.y.mH[aY0]=64+bN.y.mH[aY0]%64;bN.mP.ec(nN,bN.y.mZ);return true;};function aZB(player,aY0){
var aXf=bM.iq(bN.y.mV[aY0]);var aZE=ac.en(bM.ev(aXf));if(!bN.lF.aYq(player,aZE)){
return false;}return true;}function aZD(player,nN,aZC){if(!aZ9(player)){return false;
}if(!bN.lF.aXk(nN)){return false;}var aY0=bO.fh[2];if(!bA.gR.l4(player,bN.y.mK[aY0]>>3)){
return false;}if(aZF(player,aY0)){return true;}var aXf=bM.iq(bN.y.mV[aY0]);
var aZG=bN.lF.aYs(player,aXf);if(aZG===-1){return false;}var aZH=bM.iV(aZG,aXf);
if(aZC&&aZH>120){return false;}var aVe=aZI(aY0,aZH,aXf);if(bN.lD.qM(player,aVe,1)){bO.fh[1]=6;
return true;}return false;}function aZI(aY0,aZH,aXf){var ll=bN.y.mI[aY0];var mT=bN.y.mU[aY0];
var aZJ=bM.iV(aXf,ll[mT+1]);if(aZH<=aZJ){return bN.lF.aZ1(aXf,ll[mT+1],aZJ,aZH);
}var fL=aZH-aZJ;var f5=ll.length-1;for(var aB=mT+1;aB<f5;aB++){
var aZK=bM.iV(ll[aB],ll[aB+1]);if(fL<=aZK){return bN.lF.aZ1(ll[aB],ll[aB+1],aZK,fL);
}fL-=aZK;}return ll[f5];}function aZF(player,aY0){if(!bN.lF.aZ0(player,aY0)){
return false;}bO.g[0]=bN.lm.lu(bN.y.mI[aY0]);bO.fh[1]=6;return true;}function aZA(player,er){
var f5=bN.y.mG;var mV=bN.y.mV;var mK=bN.y.mK;var aYy=bM.iC();var aQS=-1;for(var aB=0;aB<f5;aB++){
var fL=bM.iV(er,bM.iq(mV[aB]));if(fL<aYy&&bA.gR.l4(player,(mK[aB]>>3))){aYy=fL;aQS=aB;
}}return aQS;}function aZ9(player){if(!bN.mW.mX(player)){return false;}if(bN.lm.ls()){return false;
}return true;}}function aXN(){this.eY=function(){var mH=bN.y.mH;var mV=bN.y.mV;var aY1=bN.y.aY1;
for(var aB=bN.y.mG-1;aB>=0;aB--){if(aY1[aB]!==65535){continue;}if(aZL(aB,bM.iq(mV[aB]),mH[aB]%64)){
bN.mP.aXl(aB);bN.aIt.aY4(aB);}}};this.aZM=function(player,er,hw,nN,ho){
if(hw>=5){return;}var aYc=aD.ep;if(!bA.gR.hH(aYc)){return;}if(!bs.ey(player,aYc)){
return;}if(player===aYc){return;}if(ag.gm[aYc].length===0){return;}if(!bA.gR.a4U(player,5)){return;
}var fJ=false;var aZN;for(var aB=0;aB<4;aB++){aZN=(er+bM.i9[aB])<<2;if(!ac.f0(aZN)){continue;
}if(ac.ew(aZN)){continue;}if(ac.ex(aZN)===aYc){fJ=true;break;}}if(!fJ){return;}aN.a7j(719,0);
var qa;if(ho<25000){qa=L(475)+" ("+bA.rs.a0I(ho)+") ⛵";}else{qa=L(476)+" ("+bA.rs.a0I(ho)+") 🚢";
}aN.zT(180,qa,719,player,bB.oX,bB.nx,-1,true,undefined,{fP:1,nN:nN});
};function aZL(aB,aXf,hw){if(hw===6){if(bN.mP.aXo(aB,aXf)){bN.y.mU[aB]++;bN.y.aY1[aB]=0;
return false;}return true;}var player=bN.y.mK[aB]>>3;var ho=bN.y.a7a[aB];bd.aZO(player);if(hw<4){
aZP(player,ho,(aXf+bM.i9[hw])<<2,aXf);}else if(hw===4){aZQ(player,ho,aXf);}else if(hw===5){
aZR(player,ho,aXf);}return true;}function aZQ(player,ho,aXf){var aB,f9;var iI=bM.iA;
var eu=bM.ev(aXf);for(aB=0;aB<4;aB++){f9=eu+iI[aB];if(ac.ew(f9)){aZP(player,ho,f9,aXf);
return;}}for(aB=0;aB<4;aB++){f9=eu+iI[aB];if(ac.gf(f9)&&!ac.z2(player,f9)){aZP(player,ho,f9,aXf);
return;}}for(aB=0;aB<4;aB++){f9=eu+iI[aB];if(ac.gf(f9)){aZP(player,ho,f9,aXf);
return;}}}function aZR(player,ho,aXf){var aB,f9;var iI=bM.iA;var eu=bM.ev(aXf);
for(aB=0;aB<4;aB++){f9=eu+iI[aB];if(ac.gf(f9)&&ac.z2(player,f9)){aZP(player,ho,f9,aXf);
return;}}for(aB=0;aB<4;aB++){f9=eu+iI[aB];if(ac.gf(f9)){aZP(player,ho,f9,aXf);
return;}}for(aB=0;aB<4;aB++){f9=eu+iI[aB];if(ac.ew(f9)){aZP(player,ho,f9,aXf);
return;}}}function aZP(player,ho,aZN,aXf){var jZ;if(ac.ew(aZN)){jZ=aD.f2;}else{jZ=ac.ex(aZN);
if(jZ===player){bd.gV(player,ho-bA.gR.gU(player,ho),12);return;}if(!bs.ey(player,jZ)){
b8.kS.pl(player,jZ,ho);return;}}if(!ad.jl(player,jZ)&&!ad.k4(player)){bd.gV(player,ho,12);return;
}ag.gX[player].push(aXf<<2);ad.ec(player,ho,jZ);aF.jX(player,true);}}function aXK(){this.ke=512;
this.aY2=8;this.mG=0;this.mZ=0;this.mK=new Uint16Array(this.ke);this.mV=new Uint32Array(this.ke);
this.aY1=new Uint16Array(this.ke);this.a7a=new Uint32Array(this.ke);
this.aY9=new Uint16Array(this.ke);this.mJ=new Uint16Array(this.ke);this.mH=new Uint8Array(this.ke);
this.aYB=new Uint8Array(this.ke);this.mI=new Array(this.ke);this.mU=new Uint16Array(this.ke);
this.kU=new Uint8Array(aD.f2);this.a8e=new Uint16Array(this.aY2*aD.f2);this.dd=function(){
this.mG=0;this.mZ=0;this.kU.fill(0);this.mI.fill(null);};this.mb=function(player){
var ho=bO.fc[0];var mL=bO.fh[1];var ll=bO.g[0];var aZS=this.mZ;var f5=this.mG;var aZT=bM.ip(ll[0]);
var aZU=this.kU[player];var aZV=(player<<3)+aZU;this.mK[f5]=aZV;this.mV[f5]=aZT;this.aY1[f5]=0;
if(ho<60){bA.gR.gS(player,60-ho);ho=60;}this.a7a[f5]=ho;this.aY9[f5]=bN.is.mb(f5,bM.ir(aZT));
this.mJ[f5]=aZS;this.mH[f5]=mL;this.aYB[f5]=0;this.mI[f5]=ll;this.mU[f5]=0;this.mZ=(aZS+1)%65536;
this.kU[player]=aZU+1;this.a8e[aZV]=f5;this.mG++;bN.mL.aZM(player,ll[ll.length-1],mL,aZS,ho);
};this.eY=function(){bN.mL.eY();var gd=aD.ep;var eU=bN.lF.aIq(gd);
aZW(this);aZX(this);aZY(this);aZZ(this);bd.gV(gd,eU-bN.lF.aIq(gd),15);};function aZW(sV){
var aZa,ge;var mV=sV.mV;var a7a=sV.a7a;var aYB=sV.aYB;var aY1=sV.aY1;var aY9=sV.aY9;
var mI=sV.mI;var mU=sV.mU;var f5=sV.mG;var aYf=bS.fG<<4;for(var aB=f5-1;aB>=0;aB--){var aZb=mV[aB];
var ll=mI[aB];var aZc=mU[aB];var aZT=bM.ip(ll[aZc]);var aZd=bM.ip(ll[aZc+1]);var aZe=aZT%aYf;
var aZf=~~((aZT+0.5)/aYf);var aZg=aZd%aYf;var aZh=~~((aZd+0.5)/aYf);var aZi=aZg-aZe;
var aZj=aZh-aZf;var f8=Math.max(~~Math.sqrt(aZi*aZi+aZj*aZj+0.5),1);var aZk=a7a[aB];
if(aYB[aB]){ge=40000;}else{ge=250000+Math.min(20*aZk,300000)+Math.min(aZk>>3,50000);
}var aZl=aY1[aB]+Math.max(~~((ge+0.5)/f8),1);if(aZl>=65535){if(aZc+2<ll.length){
mU[aB]=aZc+1;mV[aB]=aZa=aZm(aB,aZl,aZg,aZh,aZc,f8,ll,aYf);}else{mV[aB]=aZa=aZd;aY1[aB]=65535;
}}else{aY1[aB]=aZl;mV[aB]=aZa=aZe+bL.fW(aZl*aZi,65535)+aYf*(aZf+bL.fW(aZl*aZj,65535));
}aY9[aB]=bN.is.aZn(aY9[aB],aZb,aZa);}}function aZm(aB,aZl,aZe,aZf,aZc,f8,ll,aYf){
aZl=Math.min(aZl-65535,65535);var aZd=bM.ip(ll[aZc+2]);var aZg=aZd%aYf;var aZh=~~((aZd+0.5)/aYf);
var aZi=aZg-aZe;var aZj=aZh-aZf;var aZo=Math.max(~~Math.sqrt(aZi*aZi+aZj*aZj+0.5),1);
aZl=Math.min(Math.floor((f8*aZl+0.5)/aZo),65534);
bN.y.aY1[aB]=aZl;return aZe+bL.fW(aZl*aZi,65535)+aYf*(aZf+bL.fW(aZl*aZj,65535));}function aZX(sV){
if(bf.kN()%2!==1){return;}var aB,hx,lL,fP,ed,aZp,zw,aZq,hX,l3,aA7,aA9,nQ,nR,aZT,aZd,aZr;
var fL,aZs,aZt,aZu;var f5=sV.mG;var mV=sV.mV;var mK=sV.mK;var a7a=sV.a7a;var aYB=sV.aYB;
var is=bN.is.is;var aZv=is.length;var aZw=bN.is.aZw;var aYf=bS.fG<<4;var aZx=aD.hz;var aVS=bg.f3;
var aYy=120*120;var ge=(f5-1)*(bL.fW(bf.kN(),2)%2);for(aB=0;aB<f5;aB++){hx=Math.abs(aB-ge);
aZT=mV[hx];lL=bM.ir(aZT);hX=mK[hx]>>3;nQ=aZT%aYf;nR=~~((aZT+0.5)/aYf);aZt=a7a[hx];
for(fP=0;fP<9;fP++){aZp=lL+aZw[fP];if(aZp<0||aZp>=aZv){continue;}aZq=is[aZp];zw=aZq.length;
for(ed=0;ed<zw;ed++){aZr=aZq[ed];l3=mK[aZr]>>3;if(hX===l3||(aZx&&aVS[hX]===aVS[l3]&&aVS[hX])){
continue;}aZd=mV[aZr];aA7=nQ-(aZd%aYf);aA9=nR-~~((aZd+0.5)/aYf);fL=aA7*aA7+aA9*aA9;
if(fL<aYy){aZu=a7a[aZr];if(aZu<=aZt){aZs=Math.max(1,bL.fW(aZu+bL.fW(aZt-aZu,10),10));
}else{aZs=Math.max(1,bL.fW(aZt,10));}a7a[aZr]=Math.max(aZu-aZs,0);
aYB[aZr]=4;}}}}}function aZY(sV){if(bf.kN()%5!==3){return;}var a7a=sV.a7a;
var f5=sV.mG;for(var aB=0;aB<f5;aB++){var ho=a7a[aB];a7a[aB]=Math.max(ho-Math.max(1,ho>>7),0);
}}function aZZ(sV){var a7a=sV.a7a;var aYB=sV.aYB;for(var aB=sV.mG-1;aB>=0;aB--){
aYB[aB]=aYB[aB]>>1;if(a7a[aB]===0){bN.mP.aXl(aB);bN.aIt.aY4(aB);}}}}function aXL(){this.aZy=32;
this.fC=0;this.fE=0;this.it=0;this.aZz=0;this.aa0=4;this.is=null;this.aZw=new Int16Array(9);
this.dd=function(){this.it=1+bL.fW(bS.fG-1,this.aZy);this.aZz=1+bL.fW(bS.fH-1,this.aZy);
this.is=new Array(this.it*this.aZz);bA.r1.a3Q(this.is);aa1(this.aZw,this.it);};function aa1(aZw,i){
var fC,fE;for(fC=-1;fC<=1;fC++){for(fE=-1;fE<=1;fE++){aZw[3*(1+fE)+1+fC]=fE*i+fC;
}}}this.mb=function(aa2,aB){this.is[aB].push(aa2);return this.is[aB].length-1;
};this.aZn=function(aa3,aZT,aZd){var aa4,aa5;var tX=bM.ir(aZT);var tY=bM.ir(aZd);
if(tX===tY){return aa3;}aa4=this.is[tX].pop();if(this.is[tX].length===aa3){return this.mb(aa4,tY);
}aa5=this.is[tX][aa3];this.is[tX][aa3]=aa4;bN.y.aY9[aa4]=aa3;return this.mb(aa5,tY);};
}function aXP(){this.lE=function(player,aa6){if(aa6===-1){return false;}if(!bN.lF.lq(player,aa6)){
return false;}return this.qM(player,aa6,0);};this.qM=function(player,aa6,aa7){
var lj=aa8(player,aa6,aa7);if(lj===-1){return false;}bO.g[0]=bN.lm.get(lj);
return true;};function aa8(player,aa6,aa7){var aZG=bN.lF.aYs(player,aa6);if(aZG===-1){return-1;
}var aa9=bN.lF.lG(aZG,aa6);if(aa9===-1){return-1;}var lj=bN.lm.lr(aa9,aa6);if(lj>=0){return lj;
}if(bN.lm.ls()){return-1;}lj=bN.lm.lr(aa6,aa9);if(lj>=0){return bN.lm.lt(bN.lm.lu(bN.lm.get(lj)));
}if(aa9===aa6){return bN.lm.lt(new Uint32Array([aa9,aa6]));}lj=bN.aXQ.qM(aa9,aa6);if(lj>=0){
return lj;}if(!aa7){return-1;}return aaA(aa6,player);}function aaA(aaB,player){var fm=bO.fm;
fm.fill(0);var eQ=[aaB];fm[aaB]=1;var iB=bM.iB;var aaC=-1;var f5=eQ.length;while(aaC===-1&&f5){
var g=[];for(var aB=0;aB<f5;aB++){var er=eQ[aB];var a5E=fm[er];for(var f8=0;f8<8;f8++){
var fB=er+iB[f8];var ej=4*fB;if(!ac.iJ(ej)){if(aaC===-1&&f8%2===0&&ac.yz(player,ej)){
aaC=er;}continue;}var x9=fm[fB];var a1m=a5E+5+((f8&1)<<1);if(x9===0){g.push(fB);fm[fB]=a1m;
}else{fm[fB]=Math.min(a1m,x9);}}}eQ=g;f5=eQ.length;}if(aaC===-1){return-1;}return aaD(aaB,aaC);
}function aaD(iW,aaE){var iB=bM.iB;var aaF=-1;var hw=0;var mv=[];while(aaE!==iW){hw=aaG(aaE,hw);
if(hw!==aaF){mv.push(aaE);aaF=hw;}aaE+=iB[hw];}mv.push(iW);var lj=bN.lm.lr(mv[0],iW);
if(lj>=0){return lj;}return bN.lm.lt(new Uint32Array(mv));}function aaG(er,hw){
var fm=bO.fm;var iB=bM.iB;var a5E=fm[er];if(a5E-fm[er+iB[hw]]===5+((hw&1)<<1)){return hw;
}for(var fO=0;fO<8;fO++){var f8=(fO+hw+6)&7;if(a5E-fm[er+iB[f8]]===5+((f8&1)<<1)){return f8;
}}return hw;}}function aXR(){this.qM=function(aa9,aa6){var ll=aa8(aa9,aa6);if(ll===null){return-1;
}return bN.lm.lt(ll);};function aa8(aa9,aa6){var ia=bM.fD(aa9);var ib=bM.fF(aa9);var ic=bM.fD(aa6);
var ie=bM.fF(aa6);if(ia===ic){if(aaH(ia,ib,ie)){return new Uint32Array([aa9,aa6]);
}return null;}if(ib===ie){if(aaI(ib,ia,ic)){return new Uint32Array([aa9,aa6]);
}return null;}return aaJ(ia,ib,ic,ie,aa9,aa6)||aaJ(ic,ie,ia,ib,aa9,aa6);
}function aaH(hK,ib,ie){var jg=Math.min(ib,ie);var ni=Math.max(ib,ie);
for(var fE=jg+1;fE<ni;fE++){if(!ac.iJ(bM.il(hK,fE))){return false;}}return true;
}function aaI(hM,ia,ic){var jg=Math.min(ia,ic);var ni=Math.max(ia,ic);for(var fC=jg+1;fC<ni;fC++){
if(!ac.iJ(bM.il(fC,hM))){return false;}}return true;}function aaJ(ia,ib,ic,ie,aa9,aa6){
var f5=Math.min(Math.abs(ic-ia),Math.abs(ie-ib));var iP=Math.sign(ic-ia);
var iS=Math.sign(ie-ib);for(var aB=0;aB<f5;aB++){ia+=iP;ib+=iS;if(!ac.iJ(bM.il(ia,ib))){
return null;}}if(ia===ic){if(aaH(ia,ib,ie)){return new Uint32Array([aa9,bM.fS(ia,ib),aa6]);
}return null;}if(aaI(ib,ia,ic)){return new Uint32Array([aa9,bM.fS(ia,ib),aa6]);
}return null;}}function aXW(){var aaK=[];this.dd=function(){aaK=[];};this.ls=function(){
return aaK.length===65536;};this.lr=function(aa9,aa6){var lm=aaK;var f5=lm.length;
for(var aB=0;aB<f5;aB++){var gd=lm[aB];if(gd[0]===aa9&&gd[gd.length-1]===aa6){return aB;}}return-1;
};this.lu=function(ll){var aaL=new Uint32Array(ll.length);aaL.set(ll);return aaL.reverse();
};this.aXs=function(hX,l3){var gY=hX.length-1;var aaM=new Uint32Array(gY+l3.length);
aaM.set(hX,0);aaM.set(l3,gY);return aaM;};this.aXx=function(hX,l3,wd,er,aaN){
if(aaN){l3=this.lu(l3);wd=l3.length-wd-2;}var aaO=l3.subarray(wd+1+(er===l3[wd+1]));
var aaM=new Uint32Array(hX.length+aaO.length);aaM.set(hX,0);aaM.set(aaO,hX.length);
return aaM;};this.lt=function(ll){aaK.push(ll);return aaK.length-1;};this.get=function(aB){
return aaK[aB];};this.lo=function(){return aaK;};this.aaP=function(aa9,aa6){return null;
};}function aXa(){this.eY=function(player,nN){var mS=bN.lF.nP(player,nN);if(mS<0){return false;
}if(!bN.mP.aXz(mS)){return false;}bN.mP.aXl(mS);return true;};}function aXM(){var zb=32;
var za=new Array(2);this.aaQ=-1;this.dd=function(){this.aaQ=-1;if(za[0]){return;}za[0]=xP(255);
za[1]=xP(0);};function xP(ed){var fC,fE,er,iP,iS,fL;var i1=zb;var a3t=bA.qt.xP(i1,i1);
var i7=bA.qt.getContext(a3t,true);var i4=bA.qt.getImageData(i7,i1,i1);var xa=i4.data;
var lL=(i1>>1)-0.5;var lM=Math.sqrt(lL*lL);xa.fill(255);for(fE=0;fE<i1;fE++){for(fC=0;fC<i1;fC++){
iP=fC-lL;iS=fE-lL;er=(fE*i1+fC)*4;fL=255*2.8*(lM-Math.sqrt(iP*iP+iS*iS))/lM;xa[er+2]=ed;
xa[er+3]=fL>255?0:fL;}}i7.putImageData(i4,0,0);return a3t;}this.aaR=function(i7,ej,fC,fE,eB,aB){
if(!bA.gR.hH(aD.ep)){return;}ej*=(4/3)*(20/32);eB*=(4/3);i7.setTransform(ej,0,0,ej,fC-eB,fE-eB);
i7.drawImage(za[+(bN.y.mJ[aB]===this.aaQ)],0,0);};}function aXV(){
this.hg=function(player,aVe){if(!bN.mW.mX(player)){return false;}var aVf=bM.iC();var aaS=[];
while(true){var aaC=aaT(aVe,aVf,aaS,player);if(aaC===-1){break;}var id=ac.en(bM.ev(aaC));
if(bN.lF.aYq(player,id)){if(aaU(player,aaC,aVe)){bO.fh[7]=aaC;return true;}return false;
}aaS.push(id);}return false;};function aaT(aVe,aVf,aaS,player){var hK=bM.fD(aVe);var hM=bM.fF(aVe);
var aVh=bS.fG-2;var aAD=bS.fH-2;var aVi=-1;for(var f8=0;f8<aVf;f8++){var aAC=Math.max(hK-f8,1);
var aMb=Math.max(hM-f8,1);var yn=Math.min(hK+f8,aVh);var ym=Math.min(hM+f8,aAD);
var iW=aVj(hK,yn-hK,hM-f8,aaS,aAD,1,player);var iX=aVj(hK-1,hK-aAC-1,hM-f8,aaS,aAD,-1,player);
var aVk=aVj(hK,yn-hK,hM+f8,aaS,aAD,1,player);var aVl=aVj(hK-1,hK-aAC-1,hM+f8,aaS,aAD,-1,player);
var aVm=aVn(hM,ym-hM-1,hK-f8,aaS,aVh,1,player);var aVo=aVn(hM-1,hM-aMb-2,hK-f8,aaS,aVh,-1,player);
var aVp=aVn(hM,ym-hM-1,hK+f8,aaS,aVh,1,player);var aVq=aVn(hM-1,hM-aMb-2,hK+f8,aaS,aVh,-1,player);
aVi=aVr(aVi,iW,aVe);aVi=aVr(aVi,iX,aVe);aVi=aVr(aVi,aVk,aVe);aVi=aVr(aVi,aVl,aVe);
aVi=aVr(aVi,aVm,aVe);aVi=aVr(aVi,aVo,aVe);aVi=aVr(aVi,aVp,aVe);aVi=aVr(aVi,aVq,aVe);
if(aVi>=0&&f8*f8>=bM.iY(aVi,aVe)){return aVi;}}return-1;}function aVj(fC,f5,fE,aaS,aAD,fV,player){
if(fE<1||fE>aAD){return-1;}for(var aB=0;aB<=f5;aB++){var ej=bM.il(fC,fE);
if(bN.lF.aY3(ej)&&!bA.r1.has(aaS,ac.en(ej))&&ac.yr(ej,player)){return ej>>2;}fC+=fV;
}return-1;}function aVn(fE,f5,fC,aaS,aVh,fV,player){if(fC<1||fC>aVh){return-1;}f5=Math.max(f5,0);
for(var aB=0;aB<=f5;aB++){var ej=bM.il(fC,fE);if(bN.lF.aY3(ej)&&!bA.r1.has(aaS,ac.en(ej))&&
ac.yr(ej,player)){return ej>>2;}fE+=fV;}return-1;}function aVr(iW,iX,aVe){
if(iX===-1){return iW;}if(iW===-1){return iX;}if(bM.iY(iX,aVe)<bM.iY(iW,aVe)){return iX;}return iW;
}function aaU(player,aaC,aVe){var hw=bM.iw(aaC,aVe);for(var aB=0;aB<4;aB++){var er=bM.iu(aaC,hw);
if(ac.aIU(bM.ev(er),player)){bO.fh[6]=hw;return true;}hw=(hw+1)%4;}return false;}}function dg(){
this.aT3=[L(477),L(478),L(479),L(480),L(481),L(482),L(483),L(484),L(485),L(486),L(487),
L(488),L(489),L(490),L(491),L(492)];var aaV=[S[55],"","KeyB","","KeyW","","KeyS","","KeyD","",
"KeyA","","KeyH","","NumpadAdd","","NumpadSubtract","","ArrowLeft","","ArrowRight","","ArrowUp","",
"ArrowDown","","KeyM","","KeyP","","KeyI",""];this.aCh=new Array(aaV.length);this.dd=function(){
var value=bj.eQ.data[155].value;var g=value.split(";");var lL=g.length;aaW();if(lL>aaV.length){
return;}for(var aB=0;aB<lL;aB++){if(g[aB].length){this.aCh[aB]=g[aB];}}};function aaW(){
var f5=aaV.length;for(var aB=0;aB<f5;aB++){bX.aCh[aB]=aaV[aB];}}this.aT5=function(eC,code){
var aCh=this.aCh;var aaX=aaV;aCh[eC]=code;var qa="";var f5=aCh.length;var aaY=[];
for(var aB=0;aB<f5;aB++){aaY.push(aCh[aB]===aaX[aB]?"":aCh[aB]);}f5--;for(var aB=0;aB<f5;aB++){
qa+=aaY[aB]+";";}qa+=aaY[f5];bj.sL.sM(155,qa);};this.aT2=function(){bj.sL.sM(155,"");
this.dd();};this.ed=function(code,eC){return code===this.aCh[eC]||code===this.aCh[eC+1];
};}function dY(){var aXg=1;var aaZ=new Array(aXg);var aaa=new Array(aXg);
var aab=20;var eR=0;var aac=false;this.dd=function(){if(window.document.documentMode){return;}
var src="data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
for(var aB=aXg-1;aB>=0;aB--){aad(aB,src);}aac=true;};this.ud=function(){if(!aac){
return;}aac=false;for(var aB=aXg-1;aB>=0;aB--){aaZ[aB].onpause=null;aaZ[aB].oncanplaythrough=null;
t.removeChild(document.body,aaZ[aB]);aaZ[aB]=null;}};function aad(aB,src){aaa[aB]=0;
aaZ[aB]=document.createElement("audio");aaZ[aB].src=src;aaZ[aB].setAttribute("preload",S[11]);
aaZ[aB].setAttribute("controls",S[5]);aaZ[aB].style.display=S[5];
aaZ[aB].onpause=function(){aaa[aB]=1;};aaZ[aB].oncanplaythrough=function(){
aaa[aB]=aaa[aB]===0?1:aaa[aB];};document.body.appendChild(aaZ[aB]);
}function aae(){aab++;bp.play();}this.play=function(){if(!aac){return;}var eU=performance.now();
if(eU>eR+66){for(var aB=aXg-1;aB>=0;aB--){if(aaa[aB]===1){eR=eU;aaa[aB]=2;aaZ[aB].play();return;}}
}if(aab>0){aab--;setTimeout(aae,66);}};}function ca(){this.a9C=function(){if(al.kw<3){return false;
}if(ag.gt[m1[0]]>=(aD.kA>>1)){return false;}if(aD.hz){return aaf();}else{return aag();}
};function aag(){if(aD.ki===8){return false;}var aah=ae.aK1();if(2*ag.h7[m1[0]]>=aah){return false;
}return true;}function aaf(){if(aD.ki===9){return false;}var aah=ae.aK1();var aai=ae.aK2(bh.kz());
if(2*aai>=aah){return false;}return true;}}function cA(){this.dd=function(){
if(aD.data.sResourcesType===0){aaj();}else if(aD.data.sResourcesType===1){aak();}else{
aal();}bd.mv[8]=ag.h7[aD.ep];};function aaj(){var aZU=aD.kQ;var h7=ag.h7;for(var aB=0;aB<aZU;aB++){
h7[aB]=512;}var aZV=aD.y5;var kd=aE.kd;var ho=aE.ho;for(aB=aZU;aB<aZV;aB++){h7[aB]=kd[ho[aB]];
}}function aak(){var f5=aD.y5;var h7=ag.h7;var sResourcesValue=aD.data.sResourcesValue;
for(var aB=0;aB<f5;aB++){h7[aB]=sResourcesValue;}}function aal(){var f5=aD.y5;var h7=ag.h7;
var sResourcesData=aD.data.sResourcesData;for(var aB=0;aB<f5;aB++){h7[aB]=sResourcesData[aB];
}}}function dP(){var aIc=501;this.aam=new Uint32Array(aIc);this.a4Z=new Uint32Array(aIc);
this.aCM=new Uint16Array(aIc);this.aTB=0;var aan=1;var uq=0;this.max=[0,0,0];
this.aao=0;this.mv=new Array(21);this.aap=null;this.de=function(){this.aap=[L(493),L(494),L(495),
L(496),L(497),L(498),L(499),L(500),L(319),L(320),L(501),L(502),L(503),L(504),"",L(505),L(506),
L(507),L(277),L(508),L(509)];};this.dd=function(){this.aTB=0;aan=1;this.aao=0;uq=0;aaq(this);
this.mv.fill(0);};this.qJ=function(player,ih){if(!bA.gR.a4T(player)){return;}this.mv[0]+=ih+1;
this.mv[1]++;this.mv[12]+=bO.fc[1];};this.po=function(player,pR){if(player===aD.ep){
aN.po(bO.fc[0],bO.fc[1],pR);this.mv[12]+=bO.fc[1];this.mv[16]+=bO.fc[0];}if(pR===aD.ep){
aN.a7n(bO.fc[0],player);this.mv[10]+=bO.fc[0];}};this.qN=function(player){if(!bA.gR.a4T(player)){
return;}this.mv[2]++;this.mv[12]+=bO.fc[1];};this.qV=function(player){if(!bA.gR.a4T(player)){
return;}this.mv[19]++;this.mv[12]+=bO.fc[1];};this.aZO=function(player){if(!bA.gR.a4T(player)){
return;}this.mv[20]++;};this.gV=function(player,a5E,eC){if(!bA.gR.a4T(player)){
return;}this.mv[eC]+=a5E;};this.eY=function(){if(this.aao){return;}if(uq-- >0){return;
}aar(this);};function aar(self){self.aam[self.aTB]=ag.gt[aD.ep];self.a4Z[self.aTB]=ag.h7[aD.ep];
self.aCM[self.aTB]=ae.aCN(aD.ep);aas(self,self.aTB);self.aTB++;if(self.aTB===aIc){
aat(self);}uq=aan-1;be.mm();if(ag.mz[aD.ep]===0){self.aao=bf.kN();}}function aat(self){aaq(self);
aas(self,0);self.aTB=1+bL.fW(aIc,2);for(var aB=1;aB<self.aTB;aB++){self.aam[aB]=self.aam[aB*2];
self.a4Z[aB]=self.a4Z[aB*2];self.aCM[aB]=self.aCM[aB*2];aas(self,aB);}aan*=2;}function aaq(self){
self.max.fill(0);}function aas(self,aB){self.max[0]=Math.max(self.aam[aB],self.max[0]);
self.max[1]=Math.max(self.a4Z[aB],self.max[1]);self.max[2]=Math.max(self.aCM[aB],self.max[2]);
}}function dQ(){this.i=0;this.j=0;this.tK=0;this.tL=0;this.aau=0;
this.aav=0;this.a9Q=0;this.u3=0;this.aaw=0;var aax=0;this.aay=0;this.aaz=0;this.ab0=0;this.a8l=0;
this.eC=0;this.aBx=null;this.hr=false;this.ab1=-1;this.ab2=false;this.ab3=[0,0];this.de=function(){
this.aBx=[L(510),L(119,0,"Balance"),L(118,0,S[109]),L(511)];};this.dd=function(){
this.hr=false;this.ab1=-1;this.ab2=false;this.resize();};this.resize=function(){var i6=1.369;
this.i=h.i<i6*h.j?h.i:(h.j*i6);var f8=a0.a1.iE()&&h.i<h.j?1:a0.a1.iE()?0.8:h.i<h.j?0.65:0.59;
this.i=Math.floor(f8*this.i);this.i-=a0.a1.iE()&&h.i<h.j?(2*bc.gap+2):0;
this.j=Math.floor(this.i/i6);this.a8l=Math.floor(this.j/150);this.a8l=Math.max(this.a8l,1.5);
this.tK=Math.floor(1+this.i*0.02);this.tL=Math.floor(1+this.i*0.04);
this.a9Q=this.tL;aax=Math.floor(0.75*this.a9Q);this.u3=Math.floor(1+this.i*0.075);
this.aay=Math.floor(1+this.i*0.1125);this.aaz=Math.floor(this.i*(a0.a1.iE()?0.03:0.029));
this.aaz=Math.max(this.aaz,4);this.ab0=Math.floor(this.i*0.035);
this.ab0=Math.max(this.ab0,4);this.aaw=this.j-2*this.a9Q-this.u3-this.aay;if(this.hr){this.ab4();
}};this.hI=function(lf,lg){if(!this.hr){return false;}var y7=lf;var y8=lg;lf-=bL.fW(h.i-this.i,2);
lg-=bL.fW(h.j-this.j,2);if(lf<0||lg<0||lf>=this.i||lg>=this.j||(lf>=this.i-this.aay&&lg<this.aay)){
if(aM.hI(y7,y8)===-1&&!bC.hI(y7,y8)){
this.sA();}return true;}if(lg<this.aay){return true;}if(lg<this.j-this.u3){
this.ab2=true;this.ab1=(lf-2*this.tK-this.aau)/this.aav;if(this.eC!==3){bf.dk=true;}return true;
}var aB=Math.floor(lf/(this.i/this.aBx.length));aB=aB<0?0:aB>=this.aBx.length?this.aBx.length-1:aB;
if(aB!==this.eC){this.eC=aB;this.ab4();bf.dk=true;
}return true;};this.a2Z=function(lf,lg){this.ab3[0]=lf;this.ab3[1]=lg;if(this.hr&&this.ab2){
lf-=bL.fW(h.i-this.i,2);var eU=this.ab1;this.ab1=(lf-2*this.tK-this.aau)/this.aav;
if((this.ab1>=0&&this.ab1<=1)||(eU>=0&&eU<=1)){bf.dk=true;}
return true;}return false;};this.a2y=function(){if(this.ab2){this.ab2=false;}};this.a3A=function(){
if(this.hr){this.sA();}else{this.show();}};this.show=function(){if(bd.aTB<2){return;}this.hr=true;
this.ab4();};this.sA=function(){this.hr=false;this.ab1=-1;bf.dk=true;};this.ab4=function(){
if(this.eC<2){this.aau=aQ.measureText(bA.rs.a0I(bd.max[this.eC]),bA.qt.sk(0,this.aaz));
}else if(this.eC===2){this.aau=aQ.measureText(bA.rs.a57(6,2),bA.qt.sk(0,this.aaz));
}this.aav=this.i-2*this.tK-this.aau-this.tL;};this.mm=function(){if(!this.hr){
return;}this.ab4();};this.vY=function(){if(!this.hr){return;}this.a9i();};this.a9i=function(){
var fC=bL.fW(h.i-this.i,2);var fE=bL.fW(h.j-this.j,2);vZ.setTransform(1,0,0,1,fC,fE);
vZ.fillStyle=bB.nx;vZ.fillRect(0,this.aay,this.i,this.j-this.aay);this.ab5();
this.aRj();vZ.strokeRect(0,0,this.i,this.j);bA.qt.textAlign(vZ,2);vZ.font=bA.qt.sk(0,this.aaz);
if(this.eC===0){this.ab6(bd.aam,fC,fE);}else if(this.eC===1){this.ab6(bd.a4Z,fC,fE);
}else if(this.eC===2){this.ab7(fC,fE);}else if(this.eC===3){this.ab8(fC,fE);this.ab9(fC,fE);}
aM.a6u(Math.floor(fC+this.i-0.725*this.aay),Math.floor(fE+0.275*this.aay),Math.floor(0.45*this.aay));
vZ.setTransform(1,0,0,1,0,0);};this.ab5=function(){var aB,eU;vZ.lineWidth=this.a8l;
bA.qt.textBaseline(vZ,1);bA.qt.textAlign(vZ,1);vZ.strokeStyle=bB.o0;vZ.font=bA.qt.sk(1,this.ab0);
eU=this.i/this.aBx.length;vZ.fillStyle=bB.oM;vZ.fillRect(this.eC*eU,this.j-this.u3,eU,this.u3);
vZ.fillStyle=bB.o0;vZ.fillRect(0,this.j-this.u3-0.5*this.a8l,this.i,this.a8l);for(aB=1;aB<=3;aB++){
vZ.fillRect(aB*eU,this.j-this.u3,this.a8l,this.u3);}for(aB=this.aBx.length-1;aB>=0;aB--){
vZ.fillText(bA.zA.a47(this.aBx[aB],0,0.9*eU),(aB+0.5)*eU,this.j-0.46*this.u3);
}};this.aRj=function(){vZ.fillStyle=bB.on;vZ.fillRect(0,0,this.i,this.aay);vZ.fillStyle=bB.o0;
vZ.fillRect(0,this.aay-0.5*this.a8l,this.i,this.a8l);vZ.font=bA.qt.sk(1,0.39*this.aay);
vZ.fillText(bA.zA.a47(L(512),0,0.8*this.i),Math.floor(this.i/2),Math.floor(0.55*this.aay));
};this.ab6=function(g,fC,fE){
var lL=bd.max[this.eC];vZ.setTransform(1,0,0,1,fC+2*this.tK+this.aau,fE+this.a9Q+this.aay);
vZ.lineWidth=2;var a3S=this.aaw/Math.sqrt(lL);
vZ.beginPath();vZ.moveTo(this.aav,this.aaw-a3S*Math.sqrt(g[bd.aTB-1]));
for(var aB=bd.aTB-2;aB>=0;aB--){vZ.lineTo(aB*this.aav/(bd.aTB-1),this.aaw-a3S*Math.sqrt(g[aB]));
}vZ.stroke();var ej=this.a6u(g,a3S,0.5);if(ej<0.95){vZ.fillText(bA.rs.a0I(lL),-this.tK,0);}
if(Math.abs(ej-0.5)>0.05){vZ.fillText(bA.rs.a0I(Math.floor(lL/4)),-this.tK,Math.floor(this.aaw/2));
}if(ej>0.05){vZ.fillText("0",-this.tK,this.aaw);
}};this.ab7=function(fC,fE){vZ.setTransform(1,0,0,1,fC+2*this.tK+this.aau,fE+this.a9Q+this.aay);
vZ.lineWidth=2;var a3S=this.aaw/Math.max(bd.max[this.eC],1);
vZ.beginPath();vZ.moveTo(this.aav,this.aaw-a3S*bd.aCM[bd.aTB-1]);
for(var aB=bd.aTB-2;aB>=0;aB--){vZ.lineTo(aB*this.aav/(bd.aTB-1),this.aaw-a3S*bd.aCM[aB]);
}vZ.stroke();var ej=this.a6u(bd.aCM,a3S,1);
var lL=bd.max[this.eC]/100;if(ej<0.95){vZ.fillText(bA.rs.a57(lL,2),-this.tK,0);
}if(Math.abs(ej-0.5)>0.05){vZ.fillText(bA.rs.a57(lL/2,2),-this.tK,Math.floor(this.aaw/2));
}if(ej>0.05){vZ.fillText(bA.rs.a57(0,2),-this.tK,this.aaw);}};this.ab8=function(fC,fE){
var aB;vZ.setTransform(1,0,0,1,fC+0.34*this.i,fE+2*aax+this.aay);bA.qt.textAlign(vZ,2);
var aBf=this.j-4*aax-this.u3-this.aay;var f5=10;var g=[0,1,19,2,20,3,4,5,6,7];
for(aB=9;aB>=0;aB--){vZ.fillText(bA.zA.a47(bd.aap[g[aB]],0,0.31*this.i),0,aB*aBf/(f5-1));
}var fX=bd.mv;vZ.setTransform(1,0,0,1,fC+0.39*this.i,fE+2*aax+this.aay);
bA.qt.textAlign(vZ,0);vZ.fillText(bA.rs.a57(100*fX[0]/(1024*Math.max(fX[1],1)),1),0,0);
for(aB=8;aB>=1;aB--){vZ.fillText(fX[g[aB]].toString(),0,aB*aBf/(f5-1));
}vZ.fillText(bA.rs.a57(100*(1-ag.gt[aD.ep]/fX[7]),0),0,aBf);
};this.ab9=function(fC,fE){var aB;vZ.setTransform(1,0,0,1,fC+0.79*this.i,fE+2*aax+this.aay);
bA.qt.textAlign(vZ,2);var aBf=this.j-4*aax-this.u3-this.aay;var f5=9;vZ.fillStyle=bB.oH;
for(aB=2;aB>=0;aB--){vZ.fillText(bA.zA.a47(bd.aap[aB+8],0,0.31*this.i),0,aB*aBf/f5);
}vZ.fillText(bA.zA.a47(bd.aap[18],0,0.31*this.i),0,3*aBf/f5);
vZ.fillStyle=bB.oG;vZ.fillText(bA.zA.a47(bd.aap[11],0,0.31*this.i),0,4*aBf/f5);
vZ.fillStyle=bB.oZ;vZ.fillText(bA.zA.a47(bd.aap[13],0,0.31*this.i),0,5*aBf/f5);
vZ.fillText(bA.zA.a47(bd.aap[15],0,0.31*this.i),0,6*aBf/f5);
vZ.fillText(bA.zA.a47(bd.aap[16],0,0.31*this.i),0,7*aBf/f5);
vZ.fillText(bA.zA.a47(bd.aap[12],0,0.31*this.i),0,8*aBf/f5);vZ.fillStyle=bB.oY;
vZ.fillText(bA.zA.a47(bd.aap[17],0,0.31*this.i),0,aBf);vZ.fillStyle=bB.oH;var fX=bd.mv;
var aFj=fX[8]+fX[9]+fX[10]+fX[18];var a7X=bA.rs.a0I(aFj);var aQX=vZ.measureText(a7X).width;
vZ.setTransform(1,0,0,1,fC+0.83*this.i+aQX,fE+2*aax+this.aay);vZ.fillText(bA.rs.a0I(fX[8]),0,0);
vZ.fillText(bA.rs.a0I(fX[9]),0,1*aBf/f5);vZ.fillText(bA.rs.a0I(fX[10]),0,2*aBf/f5);
vZ.fillText(bA.rs.a0I(fX[18]),0,3*aBf/f5);vZ.fillStyle=bB.oG;
vZ.fillText(a7X,0,4*aBf/f5);vZ.fillStyle=bB.oZ;vZ.fillText(bA.rs.a0I(fX[13]),0,5*aBf/f5);
vZ.fillText(bA.rs.a0I(fX[15]),0,6*aBf/f5);vZ.fillText(bA.rs.a0I(fX[16]),0,7*aBf/f5);
vZ.fillText(bA.rs.a0I(fX[12]),0,8*aBf/f5);var abA=fX[12]+fX[13]+fX[15]+fX[16];vZ.fillStyle=bB.oY;
vZ.fillText(bA.rs.a0I(abA),0,aBf);vZ.fillStyle=bB.o0;};this.a6u=function(g,a3S,aAL){
if(this.ab1<0||this.ab1>1){return 0.25;}var aB=this.ab1*(bd.aTB-1);var e=Math.floor(aB);
var fo=g[e];var fq=g[e<bd.aTB-1?e+1:e];fo=fo+(aB-e)*(fq-fo);vZ.strokeStyle=bB.o3;if(this.ab1>0.04){
this.abB(0,this.aaw-a3S*Math.pow(fo,aAL),aB*this.aav/(bd.aTB-1),this.aaw-a3S*Math.pow(fo,aAL));
}if(fo/bd.max[this.eC]>0.04){
this.abB(aB*this.aav/(bd.aTB-1),this.aaw,aB*this.aav/(bd.aTB-1),this.aaw-a3S*Math.pow(fo,aAL));
}vZ.fillStyle=bB.ob;vZ.beginPath();
vZ.arc(aB*this.aav/(bd.aTB-1),this.aaw-a3S*Math.pow(fo,aAL),Math.max(2,0.014*this.j),0,2*Math.PI);
vZ.fill();var eT=this.ab1*bf.aCO;
if(ag.mz[aD.ep]===0){eT=Math.floor(eT*bd.aao);}else{eT=Math.floor(eT*bf.kN());}vZ.fillStyle=bB.o0;
vZ.fillText(aAL===1?bA.rs.a57(fo/100,2):bA.rs.a0I(Math.floor(fo)),-this.tK,this.aaw-a3S*Math.pow(fo,aAL));
bA.qt.textAlign(vZ,1);
vZ.fillText(aW.aCB(eT),aB*this.aav/(bd.aTB-1),this.aaw+this.aaz-(a0.a1.iE()?2:0)-this.a8l);
bA.qt.textAlign(vZ,2);return a3S*Math.pow(fo,aAL)/this.aaw;
};this.abB=function(nQ,nR,nd,ne){vZ.beginPath();vZ.moveTo(nQ,nR);vZ.lineTo(nd,ne);vZ.stroke();};
}function by(){this.aTC="https://territorial.io/changelog";this.aTH="https://territorial.io/terms";
this.aTI="https://territorial.io/privacy";this.aTG="https://territorial.io/tutorial";
this.aTF="https://territorial.io/players";this.aTD="https://territorial.io/clans";
this.aTE="https://territorial.io/clan-results";this.aPg="https://patreon.com/c/territorial";
this.aDg="https://play.google.com/store/apps/details?id=territorial.io";
this.a26="https://apps.apple.com/app/id1581110913";
this.aDh="https://discord.gg/pthqvpTXmh";this.aDi="https://www.instagram.com/davidtschacher/";
this.zq="🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼";
}function d8(){this.y=new abC();this.z7=new abD();
this.dd=function(){this.y.dd();};this.eY=function(){if(this.y.aVM===0){return;}this.y.aVM--;
};}function abD(){this.vY=function(){if(bP.y.aVM===0){return;}abE();if(aD.hT){abF();}};
function abE(){vZ.globalAlpha=Math.min(bP.y.aVM/580,1);vZ.drawImage(bP.y.abG,1+aS.z5(),1+aS.z6());
vZ.globalAlpha=1;}function abF(){var nQ=ii/iG;var nR=ij/iG;var nd=(h.i+ii)/iG;
var ne=(h.j+ij)/iG;var ge=bP.y.abH*iG;var abI=bP.y.abI;for(var aB=aD.kQ-1;aB>=0;aB--){
abJ(aB,ge,nQ,nR,nd,ne,abI);}vZ.setTransform(iG,0,0,iG,0,0);}function abJ(aB,ge,nQ,nR,nd,ne,abI){
if(ag.mz[aB]===0||ag.gt[aB]===0){return;}var fC=h.i*((ag.iy[aB]+ag.iz[aB]+1)/2-nQ)/(nd-nQ)-0.5*ge;
var fE=h.j*((ag.j0[aB]+ag.j1[aB]+1)/2-nR)/(ne-nR)-0.5*ge;
if(fC>h.i||fE>h.j||fC< -ge||fE< -ge){return;}vZ.setTransform(iG,0,0,iG,fC,fE);
vZ.drawImage(abI[aD.hz?bg.f3[aB]:1],0,0);}}function abC(){this.abH=28;
this.aVM=0;this.abG=null;this.abI=null;var abK=null;var abL=new Uint8Array([2,0,2,1,1,1,1,2,0,2]);
this.dd=function(){this.aVM=700;abM(this);aDe(this,abN(this));if(!aD.hT){
this.a5P();}};function abN(sV){if(sV.abG!==null&&sV.abG.width===bS.fG-2&&sV.abG.height===bS.fH-2){
return true;}sV.abG=bA.qt.xP(bS.fG-2,bS.fH-2);return false;}function abM(sV){var i1=sV.abH;
sV.abI=[];abK=[];if(aD.hz){for(var aB=0;aB<=aD.yC;aB++){sV.abI.push(abO(i1,bg.aYl[bg.kn[aB]]));
abK.push(abO(i1>>1,bg.aYl[bg.kn[aB]]));}if(aD.ki===9){abK.push(abO(i1,bg.aYl[1]));}
}else{sV.abI.push(abO(i1,bg.aYl[7]));sV.abI.push(abO(i1,bg.aYl[4]));abK.push(abO(i1>>1,bg.aYl[7]));
}}this.aYk=function(i1,abP){return abO(i1,abP);};function abO(i1,abP){
var fC,fE,er,iP,iS,fL;var a3t=bA.qt.xP(i1,i1);var i7=bA.qt.getContext(a3t,true);
var i4=bA.qt.getImageData(i7,i1,i1);var xa=i4.data;var lL=(i1>>1)-0.5;var abQ=(lL+0.5);
abQ*=abQ;for(fE=0;fE<i1;fE++){for(fC=0;fC<i1;fC++){iP=fC-lL;iS=fE-lL;er=(fE*i1+fC)*4;
fL=iP*iP+iS*iS;xa[er]=abP[0];xa[er+1]=abP[1];xa[er+2]=abP[2];xa[er+3]=(abQ-fL)*abP[3]/abQ;
}}if(abP[0]===128||bS.el<2){var ed=(abP[0]+abP[1]+abP[2])>380?0:255;abR(xa,i1,ed,-1,-1);
abR(xa,i1,ed,1,-1);abR(xa,i1,ed,-1,1);abR(xa,i1,ed,1,1);}i7.putImageData(i4,0,0);return a3t;
}function abR(xa,i1,ed,yv,yw){var fO=abL;var f5=fO.length;var lL=i1>>1;var abS=(1-yv)>>1;
var abT=(1-yw)>>1;for(var aB=0;aB<f5;aB+=2){var er=((lL+yw*fO[aB+1]-abT)*i1+lL+yv*fO[aB]-abS)*4;
xa[er]=ed;xa[er+1]=ed;xa[er+2]=ed;}}function aDe(sV,abU){var aB;var abG=sV.abG;
var i7=bA.qt.getContext(abG,true);var f5=aD.f2;var i1=sV.abH>>1;i7.imageSmoothingEnabled=false;
i7.setTransform(1,0,0,1,0,0);if(abU){i7.clearRect(0,0,abG.width,abG.height);
}if(aD.ki===9){i1=i1<<1;var abV=az.kr[5];for(aB=f5-abV;aB<f5;aB++){aaR(aB,i7,abK,i1);
}f5-=abV;i1=i1>>1;}for(aB=aD.kQ;aB<f5;aB++){aaR(aB,i7,abK,i1);}}this.a5P=function(){var f5=aD.kQ;
var i1=this.abH;var abI=this.abI;var i7=bA.qt.getContext(this.abG,true);for(var aB=0;aB<f5;aB++){
aaR(aB,i7,abI,i1);}};function aaR(aB,i7,a3t,i1){if(ag.mz[aB]===0||ag.gt[aB]===0){
return;}var fC=(ag.iy[aB]+ag.iz[aB]+1-i1-2)>>1;var fE=(ag.j0[aB]+ag.j1[aB]+1-i1-2)>>1;
i7.drawImage(a3t[aD.hz?((aD.ki===9&&aE.ho[aB]===5)?3:bg.f3[aB]):(aB<aD.kQ?1:0)],fC,fE);
}}function d9(){this.ph=function(player){aN.a1E(player,(player===aD.ep?21:22));
abW(player);abX();};this.qC=function(player){if(aD.a11===1&&ag.mz[player]!==0&&ag.a4P[player]!==2){
abW(player);}aD.a14--;aD.a13--;aN.a1E(player,4);if(bA.gR.hG(2)){
aW.ml(true);}abX();};function abX(){if(aD.ki===8&&aD.a11===1){bR.a0d.a10();}}function abW(player){
if(aD.hT){ak.aIj(player);al.aLm();if(aD.kk){aD.qF.eY();}}else{b3.aE0(player);}}}function dJ(){
this.aVc=["rgba(90,90,90,0.88)","rgba(130,12,12,0.88)","rgba(12,130,12,0.88)","rgba(12,12,130,0.88)","rgba(130,130,12,0.88)","rgba(130,12,130,0.88)","rgba(12,130,130,0.88)","rgba(130,130,130,0.88)","rgba(0,0,0,0.88)"];
this.aBc=["rgb(210,200,200)","rgb(255,120,120)","rgb(0,230,0)","rgb(150,150,255)","rgb(240,240,25)","rgb(255,70,255)","rgb(25,240,240)",bB.o0,"rgb(170,170,170)"];
this.abY=[bB.o0,"rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(255,255,0)","rgb(255,0,255)","rgb(0,255,255)",bB.o0,bB.nr];
this.abZ=[bB.nr,bB.o0,bB.o0,bB.o0,bB.nr,bB.nr,bB.nr,bB.nr,bB.o0];
var aLw=[S[123],S[132],"255,4,4","200,4,4","4,255,4","4,180,4",
"255,195,195","90,3,3","200,255,200","3,84,3"];this.aLF=[S[13]+aLw[0]+",",S[13]+aLw[1]+",",
S[13]+aLw[2]+",",S[13]+aLw[3]+",",S[13]+aLw[4]+",",S[13]+aLw[5]+",",
S[13]+aLw[6]+",",S[13]+aLw[7]+",",S[13]+aLw[8]+",",S[13]+aLw[9]+","];this.aLG=[
S[9]+aLw[0]+")",S[9]+aLw[1]+")",S[9]+aLw[2]+")",S[9]+aLw[3]+")",S[9]+aLw[4]+")",S[9]+aLw[5]+")",
S[9]+aLw[6]+")",S[9]+aLw[7]+")",S[9]+aLw[8]+")",S[9]+aLw[9]+")"];this.a1N=null;
this.aYl=[[128,128,128,180],[255,0,0,180],[0,255,0,180],[50,50,255,180],[255,255,0,180],[255,0,255,180],[0,255,255,180],[255,255,255,180],[0,0,0,180]];
this.aYQ=[[128,128,128],[255,0,0],[0,255,0],[0,0,255],[255,255,0],[255,0,255],[0,255,255],[255,255,255],[0,0,0]];
this.kn=[0,1,2,3,4,5,6,7,8];this.f3=new Uint8Array(aD.f2);this.aBd=new Uint8Array(aD.f2);
this.yI=new Uint16Array(aD.f2);this.yJ=new Uint16Array(this.kn.length+1);
this.yK=new Uint16Array(this.kn.length);this.de=function(){
this.a1N=[L(513),L(514),L(515),L(516),L(517),L(518),L(519),L(520),L(521)];};this.dd=function(){
this.f3.fill(0);this.aBd.fill(0);this.aba();if(!aD.hz){return;}if(aD.ki===9){abb();}else{if(aD.kk){
abc();}else{this.eY();}}abd();abe();};this.aba=function(){for(var aB=this.kn.length-1;aB>=0;aB--){
this.kn[aB]=aB;}};function abb(){var f3=bg.f3;for(var aB=aD.data.teamPlayerCount[7]-1;aB>=0;aB--){
f3[aB]=1;}var f5=aD.f2;for(aB=aD.data.teamPlayerCount[7];aB<f5;aB++){
f3[aB]=2;}bg.kn[1]=7;bg.kn[2]=8;}this.eY=function(){var a07=new Uint8Array(aD.kQ);
var a08=new Uint8Array(aD.kQ);var abf=new Uint16Array(8);var abg=new Uint16Array(this.kn.length);
this.abh(a07,a08,abf,1);this.aIA(abf);this.abi(abg,a07,a08);this.abj(a07,a08,abg);this.abk();
};function abc(){var aYQ=bg.aYQ;var colorsData=aD.data.colorsData;if(!aD.data.selectableColor){
for(var aB=aD.kQ-1;aB>=0;aB--){colorsData[aB]=ay.jh(262144);}}var abl=0;
var fL=256*3;var aV6=[4*(colorsData[0]>>12),4*((colorsData[0]>>6)&63),4*(colorsData[0]&63)];
var teamPlayerCount=aD.data.teamPlayerCount;for(aB=0;aB<9;aB++){if(!teamPlayerCount[aB]){
continue;}var f8=0;for(var fP=0;fP<3;fP++){f8+=Math.abs(aYQ[aB][fP]-aV6[fP]);}if(f8<fL){
abl=aB;fL=f8;}}var abm=new Uint16Array(9);for(aB=0;aB<9;aB++){abm[aB]=teamPlayerCount[aB];
}var kn=bg.kn;var abn=new Uint8Array(9);kn[0]=0;var gY=1;for(aB=1;aB<9;aB++){if(abm[aB]){
abn[aB]=gY;kn[gY++]=aB;}}var jg=aD.kQ;var f3=bg.f3;if(abm[abl]){abm[abl]--;f3[0]=abn[abl];
}else{jg=0;}var ed=0;for(aB=jg;aB<aD.y5;aB++){var hx=kn[ed];if(abm[hx]){abm[hx]--;f3[aB]=abn[hx];
}else{ed++;aB--;if(ed>=9){console.log("error 325");return;}}}}this.abh=function(a07,a08,abm,abo){
var aB,fP,e,abp;var f5=this.kn.length-abo;var g=new Uint16Array(f5);var aYQ=this.aYQ;
var colorsData=aD.data.colorsData;for(aB=aD.kQ-1;aB>=0;aB--){for(fP=f5;fP>=abo;fP--){
g[fP-1]=Math.abs(4*(colorsData[aB]>>12)-aYQ[fP][0])+Math.abs(4*((colorsData[aB]>>6)&63)-aYQ[fP][1])+Math.abs(4*(colorsData[aB]&63)-aYQ[fP][2]);
}abp=768;
for(fP=f5-1;fP>=0;fP--){e=(fP+aB)%f5;if(g[e]<abp){abp=g[e];a07[aB]=e;}}abm[a07[aB]]+=4;abp=768;
for(fP=f5-1;fP>=0;fP--){e=(fP+aB)%f5;if(g[e]<abp&&e!==a07[aB]){abp=g[e];a08[aB]=e;}}abm[a08[aB]]++;
}};this.aIA=function(abm){var aB,fP,lN;var f5=this.kn.length-1;for(aB=f5;aB>=0;aB--){
this.kn[aB]=aB;}for(aB=f5-1;aB>=0;aB--){abm[aB]++;}for(aB=1;aB<=f5;aB++){lN=0;for(fP=1;fP<f5;fP++){
if(abm[fP]>abm[lN]){lN=fP;}}abm[lN]=0;this.kn[aB]=lN+1;}};this.abi=function(abg,a07,a08){
var fP,a1j,ed,f8,e,nc,tb;var abq=this.kn.length-1;var rM=new Uint16Array(abq);
var abr=[];var abt=0;var a1i=[];var abu=[];loop:for(var aB=0;aB<aD.kQ;aB++){
a1j=bA.rs.a1k(ag.a1h[aB]);if(a1j!==null){for(fP=a1i.length-1;fP>=0;fP--){
if(a1j===a1i[fP]){abu[fP].push(aB);abt=Math.max(abt,abu[fP].length);
continue loop;}}a1i.push(a1j);abr.push(false);abu.push([aB]);abt=Math.max(abt,1);
}}while(aD.yC>2&&abt>bL.fW(aD.kQ,aD.yC)){aD.yC--;aD.ki--;}for(fP=a1i.length-1;fP>=0;fP--){
f8=-1;for(ed=a1i.length-1;ed>=0;ed--){if(!abr[ed]&&(f8===-1||abu[ed].length>abu[f8].length)){f8=ed;
}}for(ed=abq-1;ed>=0;ed--){rM[ed]=1;}for(ed=abu[f8].length-1;ed>=0;ed--){rM[a07[abu[f8][ed]]]+=3;
rM[a08[abu[f8][ed]]]++;}for(aB=abq-1;aB>=0;aB--){e=f8%abq;for(ed=abq-1;ed>=0;ed--){
if(rM[ed]>rM[e]){e=ed;}}nc=-1;for(ed=aD.yC;ed>0;ed--){if(this.kn[ed]===e+1){
nc=ed;break;}}rM[e]=0;if(nc===-1){continue;}tb=0;for(ed=aD.yC;ed>0;ed--){if(abg[nc]>abg[ed]){tb++;
}}if(tb===aD.yC-1){continue;}for(ed=abu[f8].length-1;ed>=0;ed--){abg[nc]++;this.f3[abu[f8][ed]]=nc;
}break;}abr[f8]=true;}};this.abj=function(a07,a08,abg){var aB,fP,iO;var f5=this.kn.length-1;
var border=bL.fW(aD.kQ,aD.yC);if(aD.kQ%aD.yC>0){border++;}var abv=new Uint8Array(f5+1);
for(fP=f5;fP>=1;fP--){abv[this.kn[fP]]=fP;}for(aB=0;aB<aD.kQ;aB++){iO=abv[a07[aB]+1];
if(this.f3[aB]===0&&iO<=aD.yC&&abg[iO]<border){abg[iO]++;this.f3[aB]=iO;}}for(aB=0;aB<aD.kQ;aB++){
iO=abv[a08[aB]+1];if(this.f3[aB]===0&&iO<=aD.yC&&abg[iO]<border){abg[iO]++;this.f3[aB]=iO;}}
for(fP=aD.yC;fP>=1;fP--){for(aB=aD.kQ-1;aB>=0;aB--){if(abg[fP]>=border){break;}if(this.f3[aB]===0){
abg[fP]++;this.f3[aB]=fP;}}}};this.abk=function(){if(aD.yC<8){aD.yC++;aD.ki++;aD.yD=1;return;}
for(var aB=aD.kQ;aB<aD.f2;aB++){this.f3[aB]=1+aB%aD.yC;}};function abd(){var f5=aD.f2;var yI=bg.yI;
var yJ=bg.yJ;var yK=bg.yK;var f3=bg.f3;var kn=bg.kn;var yB=kn.length;var eQ=new Array(yB);
for(var aB=0;aB<yB;aB++){eQ[aB]=[];}for(aB=0;aB<f5;aB++){eQ[kn[f3[aB]]].push(aB);
}for(aB=1;aB<=yB;aB++){yJ[aB]=yJ[aB-1]+eQ[aB-1].length;}for(aB=0;aB<yB;aB++){
var gY=eQ[aB].length;var lL=yJ[aB];for(var hx=0;hx<gY;hx++){yI[hx+lL]=eQ[aB][hx];
}}var kQ=aD.kQ;for(aB=0;aB<yB;aB++){gY=eQ[aB].length;lL=yJ[aB];for(hx=0;hx<gY;hx++){
if(yI[hx+lL]>=kQ){yK[aB]=hx;break;}}}}function abe(){var f5=aD.f2;var f3=bg.f3;var aBd=bg.aBd;
var kn=bg.kn;for(var aB=0;aB<f5;aB++){aBd[aB]=kn[f3[aB]];}if(aD.ki===9){aBd.fill(1,f5-az.kr[5]);
}}}function db(){this.gu=function(){var aB,fC,fE;for(aB=g1-1;aB>=0;aB--){fC=bL.fW(g3[aB],4)%bS.fG;
fE=bL.fW(g3[aB],4*bS.fG);ag.iy[fw]=Math.min(fC,ag.iy[fw]);ag.j0[fw]=Math.min(fE,ag.j0[fw]);
ag.iz[fw]=Math.max(fC,ag.iz[fw]);ag.j1[fw]=Math.max(fE,ag.j1[fw]);}};
this.gF=function(){var f5=ag.gX[fw].length;var f8,gd,aB;var f7=ac.f7;loop:for(aB=f5-1;aB>=0;aB--){
for(f8=3;f8>=0;f8--){gd=ag.gX[fw][aB]+f7[f8];if(ac.ew(gd)||(ac.gf(gd)&&ac.ex(gd)!==fw)){
ac.jc(ag.gX[fw][aB],fw);continue loop;}}ag.gX[fw][aB]=ag.gX[fw][f5-1];
ag.gX[fw].pop();f5--;}};this.gG=function(){var player=fw;var gl=ag.gl;var gm=ag.gm;
var fU=ag.fU;var f5=gl[player].length;var f7=ac.f7;loop:for(var aB=f5-1;aB>=0;aB--){var abw=false;
var abx=false;for(var f8=3;f8>=0;f8--){var gd=gl[player][aB]+f7[f8];if(ac.aIU(gd,player)){
continue loop;}abw=abw||ac.iJ(gd);abx=abx||ac.aIT(gd);}if(abw){gm[player].push(gl[player][aB]);
}else if(abx){fU[player].push(gl[player][aB]);}else{ac.ye(gl[player][aB],player);
}gl[player][aB]=gl[player][f5-1];gl[player].pop();f5--;}};this.gj=function(){
ag.gt[g0]-=g1;};this.gk=function(border){var f5=border.length;for(var aB=f5-1;aB>=0;aB--){
if(!ac.yz(g0,border[aB])){border[aB]=border[f5-1];border.pop();f5--;}}};this.gn=function(border){
var f5=border.length;for(var aB=f5-1;aB>=0;aB--){if(!ac.yz(g0,border[aB])&&ac.f0(border[aB])){
border[aB]=border[f5-1];border.pop();f5--;}}};this.go=function(border){var f5=border.length;
var f7=ac.f7;var f8,gd;for(var aB=f5-1;aB>=0;aB--){for(f8=3;f8>=0;f8--){gd=border[aB]+f7[f8];
if(ac.aIU(gd,g0)){ag.gl[g0].push(border[aB]);border[aB]=border[f5-1];border.pop();f5--;break;
}}}};this.gp=function(){var f8,gd;var f7=ac.f7;for(var aB=g1-1;aB>=0;aB--){for(f8=3;f8>=0;f8--){
gd=g3[aB]+f7[f8];if(ac.z2(g0,gd)&&ac.aIV(gd)){ag.gl[g0].push(gd);ac.ga(gd,g0);}}}};
this.gq=function(){var fC,fE;loop:while(ag.j0[g0]<ag.j1[g0]){for(fC=ag.iz[g0];fC>=ag.iy[g0];fC--){
if(ac.yz(g0,(ag.j0[g0]*bS.fG+fC)*4)){break loop;}}ag.j0[g0]++;}loop:while(ag.j0[g0]<ag.j1[g0]){
for(fC=ag.iz[g0];fC>=ag.iy[g0];fC--){if(ac.yz(g0,(ag.j1[g0]*bS.fG+fC)*4)){
break loop;}}ag.j1[g0]--;}loop:while(ag.iy[g0]<ag.iz[g0]){for(fE=ag.j1[g0];fE>=ag.j0[g0];fE--){
if(ac.yz(g0,(fE*bS.fG+ag.iy[g0])*4)){break loop;}}ag.iy[g0]++;}loop:while(ag.iy[g0]<ag.iz[g0]){
for(fE=ag.j1[g0];fE>=ag.j0[g0];fE--){if(ac.yz(g0,(fE*bS.fG+ag.iz[g0])*4)){break loop;
}}ag.iz[g0]--;}};this.ey=function(player,jZ){return(bg.f3[player]===0||bg.f3[player]!==bg.f3[jZ]);
};this.hb=function(player){var f8,aB,ge;var f5=ag.gl[player].length;
var f7=ac.f7;for(f8=3;f8>=0;f8--){ge=f7[f8];for(aB=0;aB<f5;aB++){if(ac.ew(ag.gl[player][aB]+ge)){
return true;}}}return false;};this.aIf=function(player){var f8,aB,ge;
var f5=ag.gl[player].length;var f7=ac.f7;for(f8=3;f8>=0;f8--){ge=f7[f8];for(aB=0;aB<f5;aB++){
if(ac.jb(ag.gl[player][aB])&&ac.ew(ag.gl[player][aB]+ge)){return true;}}}return false;
};this.he=function(a4V,a4W){var aB,eU,f8,ge,gd;var aZU=ag.gl[a4V].length;var aZV=ag.gl[a4W].length;
if(aZV<aZU){eU=a4V;a4V=a4W;a4W=eU;eU=aZU;aZU=aZV;aZV=eU;}var f7=ac.f7;for(f8=3;f8>=0;f8--){
ge=f7[f8];for(aB=0;aB<aZU;aB++){gd=ag.gl[a4V][aB]+ge;if(ac.gf(gd)&&ac.ex(gd)===a4W){
return true;}}}return false;};this.aIg=function(a4V,a4W){var aB,f8,ge,gd;
var aZU=ag.gl[a4V].length;var f7=ac.f7;for(f8=3;f8>=0;f8--){ge=f7[f8];for(aB=0;aB<aZU;aB++){
if(ac.jb(ag.gl[a4V][aB])){gd=ag.gl[a4V][aB]+ge;if(ac.gf(gd)&&ac.ex(gd)===a4W){return true;
}}}}return false;};}function dV(){this.qO=new aby();}function aby(){this.hh=function(player){
if(!bA.gR.a4Q(player)){return;}aN.zT(80,L(522),637,0,bB.oq,bB.nx,-1,false);
};this.hk=function(player){if(!bA.gR.a4Q(player)){return;
}aN.zT(80,L(523),637,0,bB.oq,bB.nx,-1,false);};}function abz(){this.ac0=0;this.eY=function(){
aO.eY();aZ.eY();h.eY();b0.y.eY();ax.aHg();bU.eM.eY();if(bf.dk){bf.dk=false;aa.vY();}};
}function ac1(){this.eT=bf.eT;this.eC=0;this.ac0=0;this.aHe=0;this.ac2=null;this.ac3=7;this.ac4=0;
this.dd=function(){this.aHe=0;this.ac2=[];this.eC=0;this.ac0=0;};this.aUY=function(aC){if(aD.hT){
this.aCP(aC);return;}this.ac2.push(aC);if(aD.a11===2){for(var aB=0;aB<this.ac2.length;aB++){
b8.pK.eY(this.ac2[aB]);}this.ac2=[];return;}};this.aCP=function(aC){if(aD.a11===2){return;
}b8.pK.eY(aC);b9.eY();aW.aCP(this.aHe);if(this.aHe===aD.a5V){aD.qF.eY();this.aHe=0;this.eC=0;
this.ac0=0;this.eT=bf.eT;return;}this.aHe++;af.a5O();af.ml(true);bb.aCy();};this.eY=function(){
h.eY();if(aD.hT){bf.dk=aW.aCP(-1)||bf.dk;mn();}else{if(this.eC===0){if(bf.eT>=this.eT){
this.eT+=bf.aCO*Math.floor(1+(bf.eT-this.eT)/bf.aCO);if(aD.a11===2){mc();}else{this.ac5();
}this.eC++;if(bf.eT-this.ac4>27){this.ac6();}}}else{this.ac6();}}mi();if(bf.dk){bf.dk=false;
z3();}this.ac4=bf.eT;};this.ac6=function(){bf.dk=true;mk();this.eC=0;};this.ac5=function(){
var wO,aB;if(this.ac0!==this.aHe*7){me();bb.aCy();return;}wO=false;loop:while(this.ac7()){
wO=true;me();if(aD.a11===2){break;}if(this.ac2.length>0){for(aB=this.ac3-2;aB>=0;aB--){
me();if(aD.a11===2){break loop;}}}else{break;}}if(wO){bb.aCy();}else{mc();bb.a5R();
}};this.ac7=function(){if(this.ac2.length>0){this.aHe++;b8.pK.eY(this.ac2[0]);this.ac2.shift();
return true;}return false;};}function ac8(){var ac9;var acA;var acB;var aHe;var acC;var eC=0;
var eT=bf.eT;this.ac0=0;this.dd=function(){ac9=0;acA=0;acB=0;aHe=0;acC=0;};this.eY=function(){
h.eY();if(bC.a9c()<1.7){acD();}else{acE();}mi();if(bf.dk){bf.dk=false;z3();}};function acD(){
var aZv;if(eC===0){if(bf.eT>=eT){aZv=bf.aCO/bC.a9c();eT+=aZv*Math.floor(1+(bf.eT-eT)/aZv);
if(aD.a11===2||aM.hF||!bC.a5s){mc();}else{acF();bb.aCy();}eC++;
}}else{acG();}}function acE(){var aZv;if(bf.eT>=eT){if(aD.a11===2||aM.hF||!bC.a5s){mc();eT=bf.eT;
}else{aZv=bf.aCO/bC.a9c();if((bf.eT-eT)/aZv>16){eT=bf.eT-16*aZv;}while(bf.eT>=eT&&aD.a11!==2){
eT+=aZv;acF();}bb.aCy();}}acG();}function acF(){if(acH()){return;}if(!acI()){
return;}me();}function acH(){if(!aD.hT){return 0;}if(aD.kk){return 0;}if(aD.a11===2){return 1;
}if(acC%7!==0){acC++;return 1;}if(aHe===aD.a5V){if(!acI()){return 0;}aW.aCP(aHe);aD.qF.eY();
return 1;}if(!acI()){return 0;}acC++;aHe++;af.a5O();af.ml(true);return 1;}function acG(){eC=0;
if(aD.hT){bf.dk=aW.aCP((aHe-(acC%7===0?0:1))+(acC%7)/7)||bf.dk;mn();return;}if(aM.hF||!bC.a5s){
mn();}else{bf.dk=true;mk();}}function acI(){var aB,f5,lL;var acJ=b9.qD.aW2;var fo=b9.qD.aW3;
var fq=b9.qD.aW4;var fs=b9.qD.aW5;var acK=b9.qD.aW6;var acL=b9.qD.aW7;if(ac9>=acL.length){
aN.a2M("Replay file smaller than expected.");bC.a3B(false);aD.a11=2;return false;}
lL=acL[ac9];if(!acK[ac9]){if(++acB>=lL){ac9++;acB=0;}return true;}f5=acA+lL;for(aB=acA;aB<f5;aB++){
b8.pK.q2(acJ[aB],fo[aB],fq[aB],fs[aB]);}acA+=lL;ac9++;return true;}this.a1C=function(){
if(b9.qD.aW7.length-ac9<=2){return;}aN.a2M("Replay file larger than expected.");
};}function acM(){var eC=0;var eT=bf.eT;this.ac0=0;this.eY=function(){
h.eY();if(aD.hT){mn();}else{if(eC===0){if(bf.eT>=eT){eT+=bf.aCO*Math.floor(1+(bf.eT-eT)/bf.aCO);
if(aD.a11===2||aM.hF){mc();}else{me();bb.aCy();}eC++;}}else{if(aM.hF){mn();}else{bf.dk=true;
mk();}eC=0;}}mi();if(bf.dk){bf.dk=false;z3();}};}function dR(){this.a1B=null;this.dk=false;
this.eT=0;this.aCO=56;var acN=0;this.dd=function(){this.a5p();window.requestAnimationFrame(acO);
this.eT=performance.now();};this.a5h=function(){if(aD.hE){this.a1B=new ac8();
this.a1B.dd();return;}if(aD.kk){this.a1B=new acM();}else{this.a1B=new ac1();this.a1B.dd();
}};this.a5p=function(){this.a1B=new abz();this.dk=true;};this.eY=function(){this.a1B.ac0++;
};this.kN=function(){return this.a1B.ac0;};function acO(){bf.eT=acN=performance.now();
bf.a1B.eY();window.requestAnimationFrame(acO);}this.aUG=function(){var eU=performance.now();
if(acN+1000>eU){return;}this.eT=eU;this.a1B.eY();};}function ct(){var aH0=0;
var acP=true;this.eY=function(){if(bf.eT<aH0){return;}mF();};function mF(){aH0=bf.eT+3000;
if(aD.hE||aD.kk){return;}if(bA.gR.hH(aD.ep)){return;}var eU=new Date();var a80=eU.getUTCSeconds();
if(acP){if(a80<43){acP=false;}return;}if(a80<43){return;}aH0+=52000;acP=true;
var a7z=(eU.getUTCMinutes()+2)%60;if(a7z%10===0){if(aD.ki<7){acQ(0);}return;}if(a7z%10===5){
if(aD.ki===7||aD.ki===10){acQ(1);}return;}if(a7z%10===7){if(aD.ki===8){acQ(2);}return;
}if(a7z%10===2){if(aD.ki===9){acQ(3);}}}function acQ(id){var r=[L(524),L(525),L(526),L(527)][id];
aN.a7e(r);}}function cn(){var nQ;var nR;var nd;var ne;var acR=0;var acS=0;this.a2d=function(e){
if(e.touches.length>1){acS=bf.eT;acR=3;acT(e);aL.sA();return true;}acR=0;return false;
};this.a2e=function(e){if(aD.a11===0){return false;}if(e.touches.length>1){acR=Math.max(acR-1,0);
if(!aH.ni()){return true;}var aMk=acU();acT(e);var aMl=acU();var iM=Math.floor((nQ+nd)/2);
var iN=Math.floor((nR+ne)/2);aS.aA3(iM,iN,Math.max(0.125,aMl)/Math.max(0.125,aMk));bf.dk=true;
return true;}return false;};this.a31=function(){var fC,fE;if(acR){acR=0;if(bf.eT<acS+500){
fC=(nQ+nd)/2;fE=(nR+ne)/2;aL.a2v(fC,fE);if(aL.click(fC,fE,true)){bf.dk=true;}return true;
}}return false;};function acU(){return Math.pow((Math.pow((nd-nQ),2)+Math.pow((ne-nR),2)),0.5);
}function acT(e){nQ=h.k*e.touches[0].clientX;nR=h.k*e.touches[0].clientY;
nd=h.k*e.touches[1].clientX;ne=h.k*e.touches[1].clientY;}}function d2(){
this.size=0;this.eC=0;this.aC=null;this.dd=function(aC){this.eC=0;this.aC=aC;this.size=aC.length;
};this.ud=function(){this.aC=null;};this.q1=function(size){var aB;var fX=0;var aC=this.aC;
var ni=this.eC+size-1;for(aB=this.eC;aB<=ni;aB++){fX|=((aC[aB>>3]>>(7-(aB&7)))&1)<<(ni-aB);
}this.eC+=size;if(this.eC>8*this.size){console.error("Unwrapper Overflow");
}return fX;};this.aUg=function(size){var fP=size>>1;var f8=1<<fP;
return f8*this.q1(size-fP)+this.q1(fP);};this.aUh=function(acV){return this.size===bD.aUf(acV);
};this.aWK=function(xr,acW,acX){var gY=this.q1(xr);if(!gY){return null;}var f5=Math.max(gY,acX);
var g=acW<=8?new Uint8Array(f5):acW<=16?new Uint16Array(f5):new Uint32Array(f5);
for(var aB=0;aB<gY;aB++){g[aB]=this.q1(acW);}var fX=g[gY-1];if(!fX){return g;
}g.fill(fX,gY);return g;};this.aWL=function(xr,acY,acX){var gY=this.q1(xr);if(!gY){return null;
}var f5=Math.max(gY,acX);var g=new Array(f5);for(var aB=0;aB<gY;aB++){g[aB]=this.aWI(acY);
}g.fill(g[gY-1],gY);return g;};this.aWI=function(xr){return bG.wy.x2(this.q1(xr));
};this.aWJ=function(){var qa=bF.tG.tH(bF.tG.tI(this.q1(30)));qa=bA.rs.a5J(qa,"_","/");
qa=bA.rs.a5J(qa,"-","\+");var acZ="";while((qa.length+acZ.length)%4){acZ=acZ+"=";}qa=S[96]+qa+acZ;
var aJC=new Image();aJC.onload=function(){b9.aJk.aJl(aJC);aJC.onload=null;aJC=null;};aJC.src=qa;};}
function dL(){this.aXG=0;this.aXH=0;this.aXC=0;this.aXD=0;this.aXE=0;this.aXF=0;this.aCz=[0,0,0,0];
this.nh=function(){this.aXG=aS.z5();this.aXH=aS.z6();this.aXC=-this.aXG;this.aXD=-this.aXH;
this.aXE=h.i/iG;this.aXF=h.j/iG;this.aCz[0]=Math.floor(this.aXC);this.aCz[1]=Math.floor(this.aXD);
this.aCz[2]=Math.floor(this.aCz[0]+this.aXE+1);this.aCz[3]=Math.floor(this.aCz[1]+this.aXF+1);
bb.aCw=true;};}function co(){var a8h;var nC;this.dd=function(){a8h=1;nC=0;
};this.eY=function(){if(a8h>0){aca();}};function aca(){nC=nC===0?bf.eT+16:nC;a8h-=(bf.eT-nC)*0.001;
a8h=a8h<0?0:a8h;nC=bf.eT;bf.dk=true;}this.vY=function(){if(a8h>0){acb();}};function acb(){
vZ.fillStyle="rgba(0,0,0,"+a8h+")";vZ.fillRect(0,0,h.i,h.j);}}function a6(){this.size=0;this.eC=0;
this.aC=null;this.dd=function(aC){this.eC=0;this.aC=aC;this.size=aC.length;};this.a7=function(acV){
this.dd(new Uint8Array(this.aUf(acV)));return this.aC;};this.ud=function(){this.aC=null;};
this.a8=function(size,a85){var aB;var aC=this.aC;var ni=this.eC+size-1;for(aB=this.eC;aB<=ni;aB++){
aC[aB>>3]|=((a85>>(ni-aB))&1)<<(7-(aB&7));}this.eC+=size;if(this.eC>8*this.size){
console.error("Wrapper Overflow");}};this.aUe=function(size,a85){var fP=size>>1;
var f8=1<<fP;this.a8(size-fP,bL.fW(a85,f8));this.a8(fP,a85%f8);};this.acc=function(size){var aB;
var aC=this.aC;var ni=this.eC+size;for(aB=this.eC;aB<ni;aB++){aC[aB>>3]&=255 ^(128>>>(aB&7));
}};this.aUf=function(acV){return(acV+7)>>3;};this.acd=function(g,jg,ni,ace){
var aB;for(aB=jg;aB<ni;aB++){this.a8(ace,g[aB]);}};}function d1(){this.dd=function(){this.g=[];
this.eC=0;};this.aV3=function(){return new Uint8Array(this.g);};this.a8=function(acf,value){
var g=this.g;var ni=this.eC+acf-1;var acg=1+(ni>>3);while(g.length<acg){g.push(0);
}for(var aB=this.eC;aB<=ni;aB++){g[aB>>3]|=((value>>(ni-aB))&1)<<(7-(aB&7));}this.eC+=acf;
};this.dj=function(g,xr,acW){var ach=bA.r1.a3n(g);this.a8(xr,ach);for(var aB=0;aB<ach;aB++){
this.a8(acW,g[aB]);}};this.aWc=function(g,xr,acY){var ach=bA.r1.a3n(g);this.a8(xr,ach);
for(var aB=0;aB<ach;aB++){this.aWa(g[aB],acY);}};this.aWa=function(qa,xr){var f5=qa.length;
this.a8(xr,f5);for(var aB=0;aB<f5;aB++){this.a8(16,qa.charCodeAt(aB));}};this.aWb=function(a3t){
var qa=a3t.toDataURL();var aci=qa.split(",");if(aci.length<2){console.log("error 266");return;
}qa=aci[aci.length-1];qa=bA.rs.a5J(qa,"/","_");qa=bA.rs.a5J(qa,"\\+","-");qa=bA.rs.a5J(qa,"=","");
var xB=bG.tG.x8(qa);var f5=xB.length;this.a8(30,f5);for(var aB=0;aB<f5;aB++){
this.a8(6,xB[aB]);}};}setTimeout(bt,10000);window.onload=function(){bt();};    })();