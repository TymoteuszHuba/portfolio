(()=>{"use strict";var n={536:(n,e,t)=>{t.d(e,{A:()=>o});var A=t(354),r=t.n(A),a=t(314),i=t.n(a)()(r());i.push([n.id,'*{box-sizing:border-box;margin:0;padding:0}html{font-size:62.5%;scroll-behavior:smooth}body{font-family:"Montserrat",sans-serif;background-color:#f4f4f4;overflow-x:hidden}.layout{display:grid;grid-template-columns:minmax(0, 1fr);grid-template-rows:auto auto 1fr auto;grid-template-areas:"nav" "header" "main" "footer";align-items:center;justify-items:center;height:100%;width:100%;margin:0 auto}:root{--clr-light-gray: #eee;--clr-gray: #ddd;--clr-dark-gray: #bebebe;--clr-white: #fff;--clr-black: #000;--clr-shadow: rgba(0, 0, 0, 0.9);--clr-main: #6cabab}.nav{grid-area:nav;position:sticky;width:100dvw;top:0;padding:clamp(2rem,.8rem + .7vw,3rem) clamp(1.5rem,.8rem + .7vw,4rem);z-index:10}.nav__container{display:grid;grid-template-areas:"hamburger logo contact";grid-template-columns:auto 1fr auto;max-width:1400px;align-items:center;margin:0 auto;width:100%}.nav__hamburger{grid-area:hamburger;display:flex;flex-direction:column;justify-content:space-between;width:4rem;height:4rem;padding:1em 0;cursor:pointer;z-index:10000}.nav__hamburger-line{height:.3rem;background-color:var(--clr-black);border-radius:5rem;transition:.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)}.nav__hamburger-line--top{width:50%}.nav__hamburger-line--middle{width:100%}.nav__hamburger-line--bottom{width:75%}.nav__hamburger--active .nav__hamburger-line{background-color:var(--clr-dark-gray)}.nav__hamburger--active .nav__hamburger-line--top{transform-origin:bottom;transform:rotatez(45deg) translate(3px, -2.5px)}.nav__hamburger--active .nav__hamburger-line--middle{transform-origin:top;transform:rotatez(-45deg)}.nav__hamburger--active .nav__hamburger-line--bottom{transform-origin:bottom;width:50%;transform:translate(18px, -3px) rotatez(45deg)}.nav__hamburger--active:hover .nav__hamburger-line{background-color:var(--clr-white)}.nav__links{position:fixed;display:flex;top:0;left:0;flex-direction:column;align-items:center;justify-content:center;gap:4rem;position:fixed;width:100%;height:100%;text-align:center;background-color:var(--clr-shadow);transform:translateX(-100%)}.nav__links-link{padding:2rem;font-size:clamp(1.4rem,1.4rem + .8vw,2.4rem);letter-spacing:.4rem;text-decoration:none;color:var(--clr-dark-gray);transition:color .2s ease-in-out}.nav__links-link:hover{color:var(--clr-white)}.nav__links--active{transform:translateX(0);height:100dvh}.nav__logo{grid-area:logo;display:flex;align-items:center;justify-content:center;transition:transform .2s ease-in-out}.nav__logo-link{height:6rem}.nav__logo-img{height:6rem;width:6rem}.nav__logo:active{transform:scale(0.96)}.nav__contact-link{grid-area:contact;display:flex;align-items:center;justify-content:center;position:relative;height:4rem;justify-self:flex-end;font-size:clamp(1.5rem,.8rem + .7vw,2rem);font-weight:500;letter-spacing:.3rem;text-decoration:none;color:var(--clr-black);transition:transform .3s ease-in-out}.nav__contact-link span{position:relative}.nav__contact-link:active{transform:scale(0.96)}.nav__contact-link:before{left:0;width:15%;transform:skew(-12deg)}.nav__contact-link:before{content:"";position:absolute;top:50%;display:block;height:1.2rem;background:var(--clr-main);transition:width .2s ease-in-out}.nav__contact-link:hover::before{width:100%}@media(min-width: 992px){.nav__container{grid-template-areas:"links logo contact";grid-template-columns:2fr 2fr 2fr}.nav__hamburger{display:none}.nav__links{grid-area:links;gap:clamp(4rem,3rem + 1vw,6rem);flex-direction:row;justify-content:flex-start;position:relative;text-align:center;font-weight:500;background-color:transparent;transform:translateX(0)}.nav__links-link{position:relative;padding:1.6rem 0rem;font-size:clamp(1.2rem,1.2rem + .4vw,2rem);letter-spacing:.4rem;text-decoration:none;color:var(--clr-black);transition:color .2s ease-in-out,text-shadow .2s ease-in-out}.nav__links-link:hover{color:var(--clr-black)}.nav__links-link span{position:relative}.nav__links-link:before{left:15%;width:0%;transform:skew(-12deg)}.nav__links-link:before{content:"";position:absolute;top:50%;display:block;height:1.2rem;background:var(--clr-main);transition:width .2s ease-in-out}.nav__links-link:hover::before{width:100%}.nav__logo{grid-area:logo}.nav__contact-link{grid-area:contact}}.nav--effects{background:rgba(255, 255, 255, 0.2);backdrop-filter:blur(10px);transition:background .3s ease-in-out}.blur{filter:blur(5px);transition:filter .3s ease;pointer-events:none}.header{grid-area:header;display:grid;grid-template-rows:auto;grid-template-areas:"text_area" "image";align-items:center;width:min(100%,1440px);padding:2rem 0}.header__image{grid-area:image;position:relative;display:flex;align-items:center;justify-content:center}.header__image-img{width:clamp(50rem,100%,80rem);height:auto;z-index:2}.header__text{grid-area:text_area;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;padding:2rem;text-align:center}.header__text-greeting{font-size:clamp(6rem,3.2683rem + 3.122vw,10rem);background:linear-gradient(180deg, #6cabab, #61e2c2);background-clip:text;letter-spacing:.5rem;-webkit-text-fill-color:transparent}.header__text-title{font-size:clamp(3rem,3.2683rem + 3.122vw,5rem);font-weight:200}.header__text--bold{font-weight:700}.header__text--special{display:block;padding-top:1rem;font-size:clamp(1.5rem,1.3171rem + .5805vw,2rem);font-style:italic;letter-spacing:.1rem}@media(min-width: 800px){.header{grid-template-areas:"image text_area";grid-template-columns:1fr 1fr}.header__image{justify-content:flex-end}}@media(min-width: 992px){.header__image-overlay{display:block;position:absolute;top:0;left:50%;right:50%;bottom:0;background-size:contain;background-repeat:no-repeat;pointer-events:none;transition:transform .1s ease-out;z-index:5;width:clamp(50rem,100%,80rem);height:110%;transform:scale(1) translate(-50%)}}.about__description{font-size:2rem;text-align:justify}.main{grid-area:main;width:100dvw;max-width:1200px;height:100%;padding:2rem}.section__title{position:relative;font-size:15rem;color:var(--clr-gray);opacity:.5;text-transform:uppercase}.section__title-deco{display:block;width:80px;height:auto;margin:.5rem auto 0;transition:stroke .3s ease-in-out}',"",{version:3,sources:["webpack://./src/css/main.css"],names:[],mappings:"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",sourcesContent:['@charset "UTF-8";\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: "Montserrat", sans-serif;\n  background-color: #f4f4f4;\n  overflow-x: hidden;\n}\n\n.layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-rows: auto auto 1fr auto;\n  grid-template-areas: "nav" "header" "main" "footer";\n  align-items: center;\n  justify-items: center;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n}\n\n:root {\n  --clr-light-gray: #eee;\n  --clr-gray: #ddd;\n  --clr-dark-gray: #bebebe;\n  --clr-white: #fff;\n  --clr-black: #000;\n  --clr-shadow: rgba(0, 0, 0, 0.9);\n  --clr-main: #6cabab;\n}\n\n.nav {\n  grid-area: nav;\n  position: sticky;\n  width: 100dvw;\n  top: 0;\n  padding: clamp(2rem, 0.8rem + 0.7vw, 3rem) clamp(1.5rem, 0.8rem + 0.7vw, 4rem);\n  z-index: 10;\n}\n.nav__container {\n  display: grid;\n  grid-template-areas: "hamburger logo contact";\n  grid-template-columns: auto 1fr auto;\n  max-width: 1400px;\n  align-items: center;\n  margin: 0 auto;\n  width: 100%;\n}\n.nav__hamburger {\n  grid-area: hamburger;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 4rem;\n  height: 4rem;\n  padding: 1em 0;\n  cursor: pointer;\n  z-index: 10000;\n}\n.nav__hamburger-line {\n  height: 0.3rem;\n  background-color: var(--clr-black);\n  border-radius: 5rem;\n  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n}\n.nav__hamburger-line--top {\n  width: 50%;\n}\n.nav__hamburger-line--middle {\n  width: 100%;\n}\n.nav__hamburger-line--bottom {\n  width: 75%;\n}\n.nav__hamburger--active .nav__hamburger-line {\n  background-color: var(--clr-dark-gray);\n}\n.nav__hamburger--active .nav__hamburger-line--top {\n  transform-origin: bottom;\n  transform: rotatez(45deg) translate(3px, -2.5px);\n}\n.nav__hamburger--active .nav__hamburger-line--middle {\n  transform-origin: top;\n  transform: rotatez(-45deg);\n}\n.nav__hamburger--active .nav__hamburger-line--bottom {\n  transform-origin: bottom;\n  width: 50%;\n  transform: translate(18px, -3px) rotatez(45deg);\n}\n.nav__hamburger--active:hover .nav__hamburger-line {\n  background-color: var(--clr-white);\n}\n.nav__links {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4rem;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: var(--clr-shadow);\n  transform: translateX(-100%);\n}\n.nav__links-link {\n  padding: 2rem;\n  font-size: clamp(1.4rem, 1.4rem + 0.8vw, 2.4rem);\n  letter-spacing: 0.4rem;\n  text-decoration: none;\n  color: var(--clr-dark-gray);\n  transition: color 0.2s ease-in-out;\n}\n.nav__links-link:hover {\n  color: var(--clr-white);\n}\n.nav__links--active {\n  transform: translateX(0);\n  height: 100dvh;\n}\n.nav__logo {\n  grid-area: logo;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease-in-out;\n}\n.nav__logo-link {\n  height: 6rem;\n}\n.nav__logo-img {\n  height: 6rem;\n  width: 6rem;\n}\n.nav__logo:active {\n  transform: scale(0.96);\n}\n.nav__contact-link {\n  grid-area: contact;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: 4rem;\n  justify-self: flex-end;\n  font-size: clamp(1.5rem, 0.8rem + 0.7vw, 2rem);\n  font-weight: 500;\n  letter-spacing: 0.3rem;\n  text-decoration: none;\n  color: var(--clr-black);\n  transition: transform 0.3s ease-in-out;\n}\n.nav__contact-link span {\n  position: relative;\n}\n.nav__contact-link:active {\n  transform: scale(0.96);\n}\n.nav__contact-link:before {\n  left: 0;\n  width: 15%;\n  transform: skew(-12deg);\n}\n.nav__contact-link:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  display: block;\n  height: 1.2rem;\n  background: var(--clr-main);\n  transition: width 0.2s ease-in-out;\n}\n.nav__contact-link:hover::before {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  .nav__container {\n    grid-template-areas: "links logo contact";\n    grid-template-columns: 2fr 2fr 2fr;\n  }\n  .nav__hamburger {\n    display: none;\n  }\n  .nav__links {\n    grid-area: links;\n    gap: clamp(4rem, 3rem + 1vw, 6rem);\n    flex-direction: row;\n    justify-content: flex-start;\n    position: relative;\n    text-align: center;\n    font-weight: 500;\n    background-color: transparent;\n    transform: translateX(0);\n  }\n  .nav__links-link {\n    position: relative;\n    padding: 1.6rem 0rem;\n    font-size: clamp(1.2rem, 1.2rem + 0.4vw, 2rem);\n    letter-spacing: 0.4rem;\n    text-decoration: none;\n    color: var(--clr-black);\n    transition: color 0.2s ease-in-out, text-shadow 0.2s ease-in-out;\n  }\n  .nav__links-link:hover {\n    color: var(--clr-black);\n  }\n  .nav__links-link span {\n    position: relative;\n  }\n  .nav__links-link:before {\n    left: 15%;\n    width: 0%;\n    transform: skew(-12deg);\n  }\n  .nav__links-link:before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    display: block;\n    height: 1.2rem;\n    background: var(--clr-main);\n    transition: width 0.2s ease-in-out;\n  }\n  .nav__links-link:hover::before {\n    width: 100%;\n  }\n  .nav__logo {\n    grid-area: logo;\n  }\n  .nav__contact-link {\n    grid-area: contact;\n  }\n}\n.nav--effects {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  transition: background 0.3s ease-in-out;\n}\n\n.blur {\n  filter: blur(5px);\n  transition: filter 0.3s ease;\n  pointer-events: none;\n}\n\n.header {\n  grid-area: header;\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-areas: "text_area" "image";\n  align-items: center;\n  width: min(100%, 1440px);\n  padding: 2rem 0;\n}\n.header__image {\n  grid-area: image;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__image-img {\n  width: clamp(50rem, 100%, 80rem);\n  height: auto;\n  z-index: 2;\n}\n.header__text {\n  grid-area: text_area;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2rem;\n  text-align: center;\n}\n.header__text-greeting {\n  font-size: clamp(6rem, 3.2683rem + 3.122vw, 10rem);\n  background: linear-gradient(180deg, #6cabab, #61e2c2);\n  background-clip: text;\n  letter-spacing: 0.5rem;\n  -webkit-text-fill-color: transparent;\n}\n.header__text-title {\n  font-size: clamp(3rem, 3.2683rem + 3.122vw, 5rem);\n  font-weight: 200;\n}\n.header__text--bold {\n  font-weight: 700;\n}\n.header__text--special {\n  display: block;\n  padding-top: 1rem;\n  font-size: clamp(1.5rem, 1.3171rem + 0.5805vw, 2rem);\n  font-style: italic;\n  letter-spacing: 0.1rem;\n}\n@media (min-width: 800px) {\n  .header {\n    grid-template-areas: "image text_area";\n    grid-template-columns: 1fr 1fr;\n  }\n  .header__image {\n    justify-content: flex-end;\n  }\n}\n@media (min-width: 992px) {\n  .header__image-overlay {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    right: 50%;\n    bottom: 0;\n    background-size: contain;\n    background-repeat: no-repeat;\n    pointer-events: none;\n    transition: transform 0.1s ease-out;\n    z-index: 5;\n    width: clamp(50rem, 100%, 80rem);\n    height: 110%; /* Ustawiamy wysokość na 100% kontenera */\n    transform: scale(1) translate(-50%); /* Domyślne skalowanie */\n  }\n}\n\n.about__description {\n  font-size: 2rem;\n  text-align: justify;\n}\n\n.main {\n  grid-area: main;\n  width: 100dvw;\n  max-width: 1200px;\n  height: 100%;\n  padding: 2rem;\n}\n\n.section__title {\n  position: relative;\n  font-size: 15rem;\n  color: var(--clr-gray);\n  opacity: 0.5;\n  text-transform: uppercase;\n}\n.section__title-deco {\n  display: block;\n  width: 80px; /* Dostosuj do potrzeb */\n  height: auto;\n  margin: 0.5rem auto 0;\n  transition: stroke 0.3s ease-in-out;\n}/*# sourceMappingURL=main.css.map */'],sourceRoot:""}]);const o=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",A=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),A&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),A&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,A,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(A)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);A&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,A=0;A<e.length;A++)if(e[A].identifier===n){t=A;break}return t}function A(n,A){for(var a={},i=[],o=0;o<n.length;o++){var c=n[o],s=A.base?c[0]+A.base:c[0],l=a[s]||0,C="".concat(s," ").concat(l);a[s]=l+1;var d=t(C),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var g=r(m,A);A.byIndex=o,e.splice(o,0,{identifier:C,updater:g,references:1})}i.push(C)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=A(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var o=t(a[i]);e[o].references--}for(var c=A(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var A=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var A="";t.supports&&(A+="@supports (".concat(t.supports,") {")),t.media&&(A+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(A+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),A+=t.css,r&&(A+="}"),t.media&&(A+="}"),t.supports&&(A+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(A,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(A){var r=e[A];if(void 0!==r)return r.exports;var a=e[A]={id:A,exports:{}};return n[A](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var A in e)t.o(e,A)&&!t.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:e[A]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var A=e.getElementsByTagName("script");if(A.length)for(var r=A.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=A[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var A=t(72),r=t.n(A),a=t(825),i=t.n(a),o=t(659),c=t.n(o),s=t(56),l=t.n(s),C=t(540),d=t.n(C),m=t(113),g=t.n(m),u=t(536),p={};p.styleTagTransform=g(),p.setAttributes=l(),p.insert=c().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=d(),r()(u.A,p),u.A&&u.A.locals&&u.A.locals;const f=t.p+"images/logotype5166c2a3d4e5a6904b39.webp",v=t.p+"images/me_websitec97f15a27d8c416f31dd.webp",h=t.p+"images/overlay1b35fec330c0fd7f1fae.webp";var _=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],A=document.querySelector(n);A?t?A.style.backgroundImage="url(".concat(e,")"):A.src=e:console.warn("Cannot find element for ".concat(n))};document.addEventListener("DOMContentLoaded",(function(){_(".nav__logo-img",f),_(".header__image-img",v),_(".header__image-overlay",h,!0),function(){var n=document.querySelector(".nav__hamburger"),e=document.querySelector(".nav__links"),t=document.querySelectorAll(".nav__links-link"),A=document.querySelector(".main"),r=document.querySelector(".header"),a=[A,document.querySelector(".nav__logo"),r,document.querySelector(".nav__contact-link")];function i(){n.classList.remove("nav__hamburger--active"),e.classList.remove("nav__links--active"),a.forEach((function(n){return null==n?void 0:n.classList.remove("blur")})),document.body.style.overflow=""}n.addEventListener("click",(function(){n.classList.toggle("nav__hamburger--active"),e.classList.toggle("nav__links--active"),a.forEach((function(n){return null==n?void 0:n.classList.toggle("blur")})),e.classList.contains("nav__links--active")?document.body.style.overflow="hidden":document.body.style.overflow=""})),t.forEach((function(n){n.addEventListener("click",(function(){e.classList.contains("nav__links--active")&&i()}))})),window.addEventListener("resize",(function(){window.innerWidth>768&&i()}))}(),function(){var n=document.querySelector(".nav");if(n){var e=n.offsetTop-20;window.addEventListener("resize",(function(){e=n.offsetTop-20})),window.addEventListener("scroll",(function(){window.scrollY>e?n.classList.add("nav--effects"):n.classList.remove("nav--effects")}))}}(),function(){var n=document.querySelector(".header__image-overlay"),e=document.querySelector(".header__image");if(n&&e){var t=!1;document.addEventListener("mousemove",(function(A){if(!(window.innerWidth<768)){var r=A.clientX,a=A.clientY,i=e.getBoundingClientRect(),o=i.left+i.width/2,c=i.top+i.height/2,s=(r-o)/i.width,l=(a-c)/i.height;t||(t=!0,requestAnimationFrame((function(){n.style.transform="translate(calc(-50% + ".concat(2*s,"rem), ").concat(2*l,"rem)"),t=!1})))}}))}}()}))})();
//# sourceMappingURL=bundle.js.map