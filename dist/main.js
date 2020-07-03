!function(n){var e={};function t(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(a,o,function(e){return n[e]}.bind(null,o));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){var a=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),c=[];function r(n){for(var e=-1,t=0;t<c.length;t++)if(c[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},a=[],o=0;o<n.length;o++){var i=n[o],d=e.base?i[0]+e.base:i[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=r(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:l,updater:g(p,e),references:1}),a.push(l)}return a}function s(n){var e=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var o=t.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(n){e.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(e);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,a){var o=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(i,c[e]):n.appendChild(i)}}function m(n,e,t){var a=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var f=null,h=0;function g(n,e){var t,a,o;if(e.singleton){var i=h++;t=f||(f=s(e)),a=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=s(e),a=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<t.length;a++){var o=r(t[a]);c[o].references--}for(var i=d(n,e),s=0;s<t.length;s++){var l=r(t[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}t=i}}}},function(n,e,t){var a=t(3),o=t(4),i=t(5);e=a(!1);var c=o(i);e.push([n.i,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\nnav {\n  display: flex;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo {\n  width: 220px;\n  height: 50px;\n  border-radius: 5px;\n}\n\n.nav-options {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  width: 70%;\n}\n\n.navbar-item {\n  color: #fff;\n  font-size: 20px;\n  margin-right: 30px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url("+c+") center;\n  height: 100vh;\n  z-index: -1;\n}\n\n.main-content {\n  width: 90%;\n  height: 80%;\n}\n\n.home-page {\n  color: #fff;\n  font-size: 56px;\n  text-transform: uppercase;\n  text-align: center;\n  text-shadow: 3px 3px 15px #000;\n  letter-spacing: 0.1rem;\n  font-family: 'Anton', sans-serif;\n}\n\n.contact-page,\n.menu-page {\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 0.1rem;\n  font-family: 'Anton', sans-serif;\n}\n\n.contact-page {\n  background: #fff !important;\n  color: #1c1b21;\n}\n\n.menu-page {\n  background: #1c1b21 !important;\n  color: #fff;\n}\n\n.title-section {\n  font-size: 42px;\n  margin: 1rem 0 3rem 0;\n}\n\n.form-control {\n  margin-bottom: 40px;\n}\n\n#input-submit {\n  padding: 10px 26px;\n  font-size: 20px;\n}\n\n.card {\n  color: #1c1b21;\n  font-family: 'Roboto', sans-serif;\n  padding: 0;\n}\n\n@media (min-width: 768px) {\n  .contact-form {\n    width: 50%;\n  }\n}\n\n@media (max-width: 767px) {\n  .deal {\n    margin-top: 2rem;\n    align-self: center;\n  }\n}\n\n@media (max-width: 1023px) {\n  .deal {\n    max-width: 300px;\n    max-height: 300px;\n    align-self: top;\n  }\n}\n\n@media (max-width: 425px) {\n  .title-section {\n    margin-bottom: 1rem;\n    font-size: 30px;\n  }\n\n  .navbar-item {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 581px) {\n  nav {\n    flex-direction: column;\n    height: 100px;\n  }\n\n  .nav-options {\n    justify-content: space-between;\n  }\n\n  .navbar-item {\n    margin-right: 0;\n  }\n\n  .logo {\n    max-width: 160px;\n    margin-top: 8px;\n  }\n}\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var o=(c=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(d," */")),i=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var c,r,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,a){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var r=0;r<n.length;r++){var d=[].concat(n[r]);a&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"400fcbab609f23319e972d4b91b57f21.jpg"},function(n,e,t){"use strict";t.r(e);var a=()=>{const n=document.querySelector("#content");n.classList.add("home-page");const e=document.createElement("div");e.id="main-content",e.classList.add("main-content"),e.textContent="The best F*cking meat balls ever!",n.appendChild(e)},o=(t(0),t.p+"5d729b304ec49321ec7f97a51572a8fe.jpg"),i=t.p+"458be5160460c70188c8804ce43a3fd4.jpg",c=t.p+"344d56dba202f092ebd6ef3f9d39ecd6.jpg",r=t.p+"2c18d2e9159405abbeaea39938db0d8a.jpg",d=t.p+"f741db6e1085a3dfe3019f487e4b19b7.jpg",s=t.p+"36a984e1a40e494cca0ac7d315096b03.jpg";var l=()=>{const n=document.querySelector("#content");n.classList.add("menu-page");const e=document.createElement("div");e.id="main-content",e.classList.add("main-content","menu-page"),n.appendChild(e);const t=document.createElement("div");t.classList.add("menu-container"),e.appendChild(t);const a=document.createElement("h6");a.classList.add("title-section"),a.textContent="See our menu",t.appendChild(a);const l=document.createElement("div");l.classList.add("card-container","d-flex","row"),t.appendChild(l);[o,i,c,r,d,s].forEach(n=>{const e=document.createElement("div");e.classList.add("card","col-12","col-md-6","col-lg-4"),l.appendChild(e);const t=document.createElement("img");t.classList.add("menu-image","img-thumbnail"),t.src=n,e.appendChild(t)})},u=t.p+"72d55799c565c9527ffb3fec53cbc19b.png";var p=()=>{const n=document.querySelector("#content");n.classList.add("contact-page");const e=document.createElement("div");e.id="main-content",e.classList.add("main-content"),n.appendChild(e);const t=document.createElement("h2");t.classList.add("title-section"),t.textContent="Contact with us",e.appendChild(t);const a=document.createElement("div");a.classList.add("contact-container","d-flex","flex-column","flex-md-row","justify-content-between"),e.appendChild(a);const o=document.createElement("form");o.classList.add("contact-form"),a.appendChild(o);const i=document.createElement("div");i.classList.add("form-group"),o.appendChild(i);const c=document.createElement("input");c.id="input-name",c.setAttribute("type","text"),c.setAttribute("placeholder","Enter full name"),c.classList.add("form-control"),i.appendChild(c);const r=document.createElement("div");r.classList.add("form-group"),o.appendChild(r);const d=document.createElement("input");d.id="inpu-email",d.setAttribute("type","email"),d.setAttribute("placeholder","Enter your email"),d.classList.add("form-control"),o.appendChild(d);const s=document.createElement("div");s.classList.add("form-group"),o.appendChild(s);const l=document.createElement("textarea");l.id="input-text",l.setAttribute("rows","4"),l.setAttribute("placeholder","Add your comments here"),l.classList.add("form-control"),o.appendChild(l);const p=document.createElement("div");p.classList.add("form-group"),o.appendChild(p);const m=document.createElement("input");m.id="input-submit",m.setAttribute("type","submit"),m.classList.add("btn","btn-primary"),o.appendChild(m);const f=new Image;f.classList.add("deal"),f.src=u,a.appendChild(f)},m=t.p+"e7db2439a92facb5a4e9daf9942f212e.png";(()=>{const n=document.querySelector("#content"),e=document.createElement("header"),t=document.createElement("nav");n.appendChild(e),e.appendChild(t);const o=new Image;o.classList.add("logo"),o.src=m,t.appendChild(o);const i=document.createElement("div");i.classList.add("nav-options"),t.appendChild(i);const c=document.createElement("div");c.classList.add("navbar-item"),c.innerHTML="Home";const r=document.createElement("div");r.classList.add("navbar-item"),r.innerHTML="Menu";const d=document.createElement("div");function s(){const n=document.getElementById("main-content");document.getElementById("content").className="",n.remove()}d.classList.add("navbar-item"),d.innerHTML="Contact",i.appendChild(c),i.appendChild(r),i.appendChild(d),c.addEventListener("click",()=>{s(),a()}),r.addEventListener("click",()=>{s(),l()}),d.addEventListener("click",()=>{s(),p()})})(),a()}]);