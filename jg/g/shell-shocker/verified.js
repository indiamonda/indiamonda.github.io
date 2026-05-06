var verifs = ["NeXi2k", "OOOPS", "maaxuh", "R7AN?", "Slimecube", "Vatr1x", "FLEX_CHADWELL", "akimbo27", "TTV_dercookiiee", "2FlyWanna_Be", "wounds", "Zim", "Flexkng"] //Urban lol]

window.verified = Object.fromEntries(verifs.map(e=>[e,1]));


window.cLen = function(str) {
    let i = 0;
        oi = 0,
        ci = 0,
        g = true;
    for (let el of str) {
        if (!g) continue;
        if (el == '[') oi++;
        if (el == ']') ci++;
        if (oi > 0 && ci > 0 && oi == ci) g = false;
        i++;
    }
    var sl = i == str.length ? 0 : i + 1;
    return str.slice(sl);
}

const config = { childList: true, subtree: true };
const callback = function(mutations, observer) {
    for(let mutation of mutations) { 
        for(let node of mutation.addedNodes) { 
            if (!(node instanceof HTMLElement)) continue;
            if (node.tagName == "IMG") return;
        }
    }
    var tableChildren = document.querySelector('table');
    if (!tableChildren) return;
    var table = Array.from(tableChildren.children, el => {
        var nel = el.querySelectorAll('td')[1];
        if (!nel) return;
        var nameH = nel.querySelector('a');
        if (!nameH) return;
        var name = nameH.href.split('#').slice(1).join('#');
        if (name in window.verified) {
            var image = document.createElement('img');
            image.src = "files/assets/32335389/1/Verified-Icon-NeXi.png";
            image.className = 'verification';
            var pnode = nameH.parentNode;
            pnode.insertAdjacentElement('afterbegin', image);
        }
    });
};
const observer = new MutationObserver(callback);
observer.observe(document, config);
