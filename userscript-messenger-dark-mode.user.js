// ==UserScript==
// @name        Change stylesheet to messenger dark mode
// @namespace   Scripts
// @include     https://www.messenger.com/*
// @grant       none
// @run-at      document-end
// @version     1.0
// @author      Brandieee
// @description 12/12/2020, 7:14:52 PM
// @updateURL https://raw.githubusercontent.com/Brandieee/userscript-messenger-dark-mode/main/userscript-messenger-dark-mode.meta.js
// @downloadURL https://raw.githubusercontent.com/Brandieee/userscript-messenger-dark-mode/main/userscript-messenger-dark-mode.js
// ==/UserScript==

window.addEventListener('load', (event) => {
  changeStylesheet();
});


function changeStylesheet() {
  if (document.styleSheets.length >= 4){
      
    sep = document.styleSheets[2].cssRules[1].cssText.indexOf(':')

    document.styleSheets[3].insertRule(document.styleSheets[2].cssRules[1].cssText.slice(sep))
    document.styleSheets[3].deleteRule(1)
  } else {
    console.log("Waiting")
    setTimeout(changeStylesheet, 300);
  }
}
