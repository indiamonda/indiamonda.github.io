var _dc=atob('amltbXlxcmcuZ2l0aHViLmlv');
function _gd(){return _dc}
var _PKS=atob('cGFuaWNLZXk=');
var _PLS=atob('cGFuaWNLZXlMaW5r');
(function(){var v=localStorage.getItem(_PKS);if(v==='ShiftRight'){localStorage.setItem(_PKS,'AltRight')}})();
var _pk=localStorage.getItem(_PKS)||'AltRight';
var _pl=localStorage.getItem(_PLS)||'';
function _frl(l){
  if(!l)return atob('aHR0cHM6Ly9wYXVzZC5zY2hvb2xvZ3kuY29t');
  if(l.startsWith('http://')||l.startsWith('https://'))return l;
  if(l.startsWith('/')||l.includes('/')){
    var c=l.startsWith('/')?l.substring(1):l;
    var d=_dc||atob('amltbXlxcmcuZ2l0aHViLmlv');
    return 'https://'+d+'/'+c;
  }
  if(l.includes('.')&&!l.includes('/'))return 'https://'+l;
  return atob('aHR0cHM6Ly9wYXVzZC5zY2hvb2xvZ3kuY29t');
}
document.addEventListener('keydown',function(e){
  var ck=localStorage.getItem(_PKS)||'AltRight';
  var cl=localStorage.getItem(_PLS)||'';
  var rl=_frl(cl);
  if(e.code===ck)window.location.href=rl;
});
window.addEventListener('storage',function(e){
  if(e.key===_PKS)_pk=e.newValue||'AltRight';
  if(e.key===_PLS)_pl=e.newValue||'';
});
