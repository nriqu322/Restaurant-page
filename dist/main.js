!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],s=n.base?a[0]+n.base:a[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:u,updater:h(f,n),references:1}),o.push(u)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,v=0;function h(e,n){var t,o,r;if(n.singleton){var a=v++;t=m||(m=d(n)),o=f.bind(null,t,a,!1),r=f.bind(null,t,a,!0)}else t=d(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=s(e,n),d=0;d<t.length;d++){var u=c(t[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=a}}}},function(e,n,t){var o=t(3),r=t(4),a=t(5);n=o(!1);var i=r(a);n.push([e.i,"/* font-family: 'Anton', sans-serif;\nfont-family: 'Roboto', sans-serif; */\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url("+i+") center;\n  height: 100vh;\n  z-index: -1;\n}\n\n.main-content {\n  color: #fff;\n  font-size: 56px;\n  text-transform: uppercase;\n  text-align: center;\n  text-shadow: 3px 3px 15px #000;\n  letter-spacing: 0.1rem;\n  font-family: 'Anton', sans-serif;\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\nnav {\n  height: 80px;\n}\n\n.nav-options {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.navbar-item {\n  color: #fff;\n  font-size: 23px;\n  margin-right: 15px;\n  text-transform: uppercase;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"400fcbab609f23319e972d4b91b57f21.jpg"},function(e,n,t){"use strict";t.r(n);var o=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="main-content",n.classList.add("main-content","home-page"),n.textContent="The best F*cking meat balls ever!",e.appendChild(n)};t(0);var r=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="main-content",n.classList.add("main-content","menu-page"),e.appendChild(n);const t=document.createElement("div");t.classList.add("menu-container");const o=document.createElement("h3");menutTitle.classList.add("title-section"),menutTitle.textContent="See our menu",n.appendChild(t),t.appendChild(o)};var a=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="main-content",n.classList.add("main-content","contact-page"),e.appendChild(n);const t=document.createElement("div");t.classList.add("contact-container"),n.appendChild(t);const o=document.createElement("h5");o.classList.add("title-section"),o.textContent="Contact with us";const r=document.createElement("div");r.classList.add("contact-form"),t.appendChild(o),t.appendChild(r)};(()=>{const e=document.querySelector("#content"),n=document.createElement("header"),t=document.createElement("nav");e.appendChild(n),n.appendChild(t);const i=document.createElement("div");i.classList.add("nav-options"),t.appendChild(i);const c=document.createElement("div");c.classList.add("navbar-item"),c.innerHTML="Home";const s=document.createElement("div");s.classList.add("navbar-item"),s.innerHTML="Menu";const d=document.createElement("div");function u(){document.getElementById("main-content").remove()}d.classList.add("navbar-item"),d.innerHTML="Contact",i.appendChild(c),i.appendChild(s),i.appendChild(d),c.addEventListener("click",()=>{u(),o()}),s.addEventListener("click",()=>{u(),r()}),d.addEventListener("click",()=>{u(),a()})})(),o()}]);