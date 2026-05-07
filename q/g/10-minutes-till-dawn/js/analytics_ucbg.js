function inFrame () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

function botBrowser() {
  try {
    return navigator.webdriver
  } catch (e) {
      return true;
  }
}

function loadGoogleAnalytics(id) {
  // Google tag (gtag.js)
  var firstScript= document.getElementsByTagName("script")[0];
  newScript= document.createElement("script");
  newScript.async= "";
  newScript.src= "https://www.googletagmanager.com/gtag/js?id="+ id;
  firstScript.parentNode.insertBefore(newScript, firstScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', id);
}

window.addEventListener("load", (event) => {
  if (botBrowser()) {
    loadGoogleAnalytics("G-M9CQ16MX4G");
    console.log('Bot Browser', event);
  } else {
    console.log('Human Browser', event);
    if (window.location.href.indexOf(".github.io")> -1) {
      if (inFrame()) {
        loadGoogleAnalytics("G-T445XL67R6");
      } else {
        loadGoogleAnalytics("G-T445XL67R6");
      }
    } else {
        loadGoogleAnalytics("G-T445XL67R6");
    }
  }
});

