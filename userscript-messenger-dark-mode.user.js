// ==UserScript==
// @name        Change stylesheet to messenger dark mode
// @namespace   Scripts
// @include     https://www.messenger.com/*
// @grant       none
// @run-at      document-end
// @version     1.0.3
// @author      Brandieee
// @description 16/10/2021
// @updateURL https://raw.githubusercontent.com/Brandieee/userscript-messenger-dark-mode/main/userscript-messenger-dark-mode.meta.js
// @downloadURL https://raw.githubusercontent.com/Brandieee/userscript-messenger-dark-mode/main/userscript-messenger-dark-mode.user.js
// ==/UserScript==

window.addEventListener('load', (event) => {
  changeStylesheet();
});


function changeStylesheet() {
  if (document.styleSheets.length >= 1){
	  document.styleSheets[0].insertRule(':root,' + document.styleSheets[0].cssRules[1].cssText)
	  document.styleSheets[0].deleteRule(1)
  } else {
    console.log("Waiting")
    setTimeout(changeStylesheet, 300);
  }
}
