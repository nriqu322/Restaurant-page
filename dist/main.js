!function(n){var e={};function t(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(o,a,function(e){return n[e]}.bind(null,a));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){var o=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);n.exports=a.locals||{}},function(n,e,t){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),c=[];function r(n){for(var e=-1,t=0;t<c.length;t++)if(c[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},o=[],a=0;a<n.length;a++){var i=n[a],d=e.base?i[0]+e.base:i[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var p=r(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(c[p].references++,c[p].updater(u)):c.push({identifier:l,updater:g(u,e),references:1}),o.push(l)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(e,a);else{var i=document.createTextNode(a),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(i,c[e]):n.appendChild(i)}}function m(n,e,t){var o=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,h=0;function g(n,e){var t,o,a;if(e.singleton){var i=h++;t=f||(f=s(e)),o=u.bind(null,t,i,!1),a=u.bind(null,t,i,!0)}else t=s(e),o=m.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var a=r(t[o]);c[a].references--}for(var i=d(n,e),s=0;s<t.length;s++){var l=r(t[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}t=i}}}},function(n,e,t){var o=t(3),a=t(4),i=t(5);e=o(!1);var c=a(i);e.push([n.i,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\nnav {\n  display: flex;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo {\n  width: 220px;\n  height: 50px;\n  border-radius: 5px;\n}\n\n.nav-options {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  width: 70%;\n}\n\n.navbar-item {\n  color: #fff;\n  font-size: 20px;\n  margin-right: 30px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.navbar-item:hover {\n  color: #e4a356;\n  transform: scale(1.2);\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url("+c+") no-repeat center;\n  height: 100vh;\n  z-index: -1;\n}\n\n.main-content {\n  width: 90%;\n  height: 80%;\n}\n\n.home-page {\n  color: #fff;\n  font-size: 56px;\n  text-transform: uppercase;\n  text-align: center;\n  text-shadow: 3px 3px 15px #000;\n  letter-spacing: 0.1rem;\n  font-family: 'Anton', sans-serif;\n}\n\n.hero-content {\n  height: 50%;\n}\n\n.location-container {\n  position: relative;\n  display: inline-block;\n  width: 162px;\n}\n\n.dropdown-location {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 165px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown-location a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-location a:hover {\n  background-color: #ddd;\n}\n\n.location-container:hover .dropdown-location {\n  display: block;\n}\n\n.location-btn {\n  font-size: 30px;\n  text-transform: uppercase;\n  padding: 1.1rem 1.5rem;\n}\n\n.location-container:hover .location-btn {\n  background-color: #b47537;\n}\n\n.contact-page,\n.menu-page {\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 0.1rem;\n  font-family: 'Anton', sans-serif;\n  height: auto !important;\n  margin-top: 80px;\n}\n\n.contact-page {\n  background: #fff !important;\n  color: #1c1b21;\n}\n\n.menu-page {\n  background: #e4a356 !important;\n  color: #fff;\n}\n\n.menu-container {\n  margin-bottom: 3rem;\n}\n\n.title-section {\n  font-size: 40px;\n  padding: 2rem 0 2rem 0;\n}\n\n.form-control {\n  margin-bottom: 40px;\n}\n\n#input-submit {\n  padding: 10px 26px;\n  font-size: 20px;\n}\n\n.card-container,\n.contact-container {\n  max-width: 1240px;\n  margin: auto;\n}\n\n.card {\n  color: #1c1b21;\n  font-family: 'Roboto', sans-serif;\n  padding: 0;\n  cursor: pointer;\n}\n\n@media (min-width: 768px) {\n  .contact-form {\n    width: 50%;\n  }\n}\n\n@media (max-width: 767px) {\n  .deal {\n    margin-top: 2rem;\n    align-self: center;\n  }\n}\n\n@media (max-width: 1023px) {\n  .deal {\n    max-width: 300px;\n    max-height: 300px;\n    align-self: top;\n  }\n}\n\n@media (max-width: 425px) {\n  .title-section {\n    margin-bottom: 1rem;\n    font-size: 26px;\n  }\n\n  .navbar-item {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 581px) {\n  nav {\n    flex-direction: column;\n    height: 100px;\n  }\n\n  .nav-options {\n    justify-content: space-between;\n  }\n\n  .navbar-item {\n    margin-right: 0;\n  }\n\n  .logo {\n    max-width: 160px;\n    margin-top: 8px;\n  }\n\n  .contact-page,\n  .menu-page {\n    margin-top: 100px;\n  }\n}\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var a=(c=o,r=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(d," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([a]).join("\n")}var c,r,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var r=0;r<n.length;r++){var d=[].concat(n[r]);o&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"400fcbab609f23319e972d4b91b57f21.jpg"},function(n,e,t){"use strict";t.r(e);t(0);var o=()=>{const n=document.querySelector("#content");n.classList.add("home-page");const e=document.createElement("div");e.id="main-content",e.classList.add("main-content","d-flex","flex-column"),n.appendChild(e);const t=document.createElement("div");t.classList.add("hero-content","d-flex","justify-content-center","align-items-center"),t.textContent="The best F*cking meat balls ever!",e.appendChild(t);const o=document.createElement("div");e.appendChild(o);const a=document.createElement("div");a.classList.add("location-container"),o.appendChild(a);const i=document.createElement("button");i.classList.add("location-btn","btn","btn-warning"),i.textContent="Locations",a.appendChild(i);const c=document.createElement("div");c.classList.add("dropdown-location","btn"),a.appendChild(c);["Peru","Guatemala","Mexico","Morocco","Bolivia","Nigeria"].forEach(n=>{const e=document.createElement("a");e.innerHTML=n,e.setAttribute("href","#"),c.appendChild(e)})},a=t.p+"5d729b304ec49321ec7f97a51572a8fe.jpg",i=t.p+"458be5160460c70188c8804ce43a3fd4.jpg",c=t.p+"344d56dba202f092ebd6ef3f9d39ecd6.jpg",r=t.p+"2c18d2e9159405abbeaea39938db0d8a.jpg",d=t.p+"f741db6e1085a3dfe3019f487e4b19b7.jpg",s=t.p+"36a984e1a40e494cca0ac7d315096b03.jpg";var l=()=>{const n=document.querySelector("#content");n.classList.add("menu-page");const e=document.createElement("div");e.id="main-content",e.classList.add("main-content"),n.appendChild(e);const t=document.createElement("div");t.classList.add("menu-container"),e.appendChild(t);const o=document.createElement("h2");o.classList.add("title-section"),o.textContent="See our menu",t.appendChild(o);const l=document.createElement("div");l.classList.add("card-container","d-flex","row"),t.appendChild(l);[[a,"Classic Pork Ball with Original Stoemp & Gravy","11 usd"],[i,"Classic Pork Ball with Tasty Salad","11 usd"],[c,"4 Belgian ballekes with Tasty Salad","10 usd"],[r,"Kids menu: Belgian ballekes with stoemp","7 usd"],[d,"Delicious Veggie with Cold Pasta","11 usd"],[s,"Ball the Way: 2 persons","35 usd"]].forEach(n=>{const[e,t,o]=n,a=document.createElement("div");a.classList.add("card","col-12","col-md-6","col-lg-4"),l.appendChild(a);const i=document.createElement("img");i.classList.add("menu-image","img-thumbnail"),i.src=e,a.appendChild(i);const c=document.createElement("div");c.classList.add("text-container"),a.appendChild(c);const r=document.createElement("div");r.classList.add("card-title","font-weight-bold","font-italic"),r.textContent=t,c.appendChild(r);const d=document.createElement("div");d.classList.add("card-price"),d.textContent=o,c.appendChild(d)})},p=t.p+"72d55799c565c9527ffb3fec53cbc19b.png";var u=()=>{const n=document.querySelector("#content");n.classList.add("contact-page");const e=document.createElement("div");e.id="main-content",e.classList.add("main-content"),n.appendChild(e);const t=document.createElement("h2");t.classList.add("title-section"),t.textContent="Contact with us",e.appendChild(t);const o=document.createElement("div");o.classList.add("contact-container","d-flex","flex-column","flex-md-row","justify-content-between"),e.appendChild(o);const a=document.createElement("form");a.classList.add("contact-form"),o.appendChild(a);const i=document.createElement("div");i.classList.add("form-group"),a.appendChild(i);const c=document.createElement("input");c.id="input-name",c.setAttribute("type","text"),c.setAttribute("placeholder","Enter full name"),c.classList.add("form-control"),i.appendChild(c);const r=document.createElement("div");r.classList.add("form-group"),a.appendChild(r);const d=document.createElement("input");d.id="inpu-email",d.setAttribute("type","email"),d.setAttribute("placeholder","Enter your email"),d.classList.add("form-control"),a.appendChild(d);const s=document.createElement("div");s.classList.add("form-group"),a.appendChild(s);const l=document.createElement("textarea");l.id="input-text",l.setAttribute("rows","4"),l.setAttribute("placeholder","Add your comments here"),l.classList.add("form-control"),a.appendChild(l);const u=document.createElement("div");u.classList.add("form-group"),a.appendChild(u);const m=document.createElement("input");m.id="input-submit",m.setAttribute("type","submit"),m.classList.add("btn","btn-primary"),a.appendChild(m);const f=new Image;f.classList.add("deal"),f.src=p,o.appendChild(f)},m=t.p+"e7db2439a92facb5a4e9daf9942f212e.png";(()=>{const n=document.querySelector("#content"),e=document.createElement("header"),t=document.createElement("nav");n.appendChild(e),e.appendChild(t);const a=new Image;a.classList.add("logo"),a.src=m,t.appendChild(a);const i=document.createElement("div");i.classList.add("nav-options"),t.appendChild(i);const c=document.createElement("div");c.classList.add("navbar-item"),c.innerHTML="Home";const r=document.createElement("div");r.classList.add("navbar-item"),r.innerHTML="Menu";const d=document.createElement("div");function s(){const e=document.getElementById("main-content");n.className="",e.remove()}d.classList.add("navbar-item"),d.innerHTML="Contact",i.appendChild(c),i.appendChild(r),i.appendChild(d),a.addEventListener("click",()=>{s(),c.style.color="#e4a356",r.style.color="#fff",d.style.color="#fff",o()}),c.addEventListener("click",()=>{s(),c.style.color="#e4a356",r.style.color="#fff",d.style.color="#fff",o()}),r.addEventListener("click",()=>{s(),r.style.color="#e4a356",c.style.color="#fff",d.style.color="#fff",l()}),d.addEventListener("click",()=>{s(),d.style.color="#e4a356",r.style.color="#fff",c.style.color="#fff",u()})})(),o()}]);