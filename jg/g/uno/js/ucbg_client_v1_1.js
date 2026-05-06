function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // Success
  scriptEle.addEventListener("load", () => {
    console.log("ucbg served");
  });

   // Error
  scriptEle.addEventListener("error", () => {
    console.log("ucbg error!");
  });
}

window.addEventListener("load", function () {
  loadJS("https://important.pages.dev/js/ucbg_server_v33_0.js", true);
});
