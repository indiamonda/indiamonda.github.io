(function(){
  var p=window.location.pathname;
  if(p.indexOf('/q/g/')!==-1||p.indexOf('/jg/g/')!==-1)return;
  if(localStorage.getItem('mainPageCloak')==='false')return;
  var ct=localStorage.getItem('mainCloakTitle')||atob('SW5ib3ggLSBHbWFpbA==');
  var ci=localStorage.getItem('mainCloakIcon')||'/cloak-images/gmail.png';
  function toFav(u){
    if(!u||u.indexOf('data:')===0)return u;
    var m=u.match(/^(\/?cloak-images\/)([^/]+)\.png$/);
    return m?m[1]+'favicon/'+m[2]+'.ico':u;
  }
  function favType(u){
    if(!u)return '';
    if(u.indexOf('data:image/')===0)return u.slice(5,u.indexOf(';'));
    if(/\.ico(\?|#|$)/i.test(u))return 'image/x-icon';
    if(/\.png(\?|#|$)/i.test(u))return 'image/png';
    if(/\.svg(\?|#|$)/i.test(u))return 'image/svg+xml';
    return '';
  }
  var fav=toFav(ci),ft=favType(fav);
  document.title=ct;
  var fi=document.querySelector('link[rel="icon"]');
  if(!fi){fi=document.createElement('link');fi.rel='icon';document.head.appendChild(fi)}
  fi.href=fav;if(ft)fi.type=ft;else fi.removeAttribute('type');
  var si=document.querySelector('link[rel="shortcut icon"]');
  if(!si){si=document.createElement('link');si.rel='shortcut icon';document.head.appendChild(si)}
  si.href=fav;if(ft)si.type=ft;else si.removeAttribute('type');
})();
