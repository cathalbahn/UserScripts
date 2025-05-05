// ==UserScript==
// @name         Enable PiP
// @version      1.0.0
// @description  Enables picture in picture for sites that disable it
// @author       CathalBahn forked from Hyperweb
// @namespace    https://github.com/cathalbahn/UserScripts
// @updateURL    https://github.com/cathalbahn/UserScripts/raw/main/pip.user.js
// @downloadURL  https://github.com/cathalbahn/UserScripts/raw/main/pip.user.js
// @match        https://*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// ==/UserScript==

(function() {
    'use strict';

    function act() {
      let v = document.querySelector('video');
      v.addEventListener('webkitpresentationmodechanged', (e)=>{
        e.stopPropagation();
        console.log('stop prop');
      }, true);
      v.setAttribute('pip-mode', 'true');
//       setTimeout(()=>{
//         v.webkitSetPresentationMode('picture-in-picture');
//         console.log('pip');
//       }, 1000);
    }

    function helper() {
      let vid = document.querySelector('video');
      if (vid && vid.getAttribute('pip-mode') !== 'true') {
        act()
      } 
    }

    setInterval(() => helper(), 1000)
})()