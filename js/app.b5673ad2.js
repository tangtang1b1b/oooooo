(function(){var t={1839:function(t,e,n){"use strict";var o=n(9242),r=n(3396);const i=(0,r._)("nav",null,null,-1);function a(t,e){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r.Wm)(n)],64)}var s=n(89);const u={},c=(0,s.Z)(u,[["render",a]]);var l=c,d=n(2483);const f={class:"home"};function g(t,e,n,o,i,a){const s=(0,r.up)("Banner");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(s)])}var m=n(7139);const p=t=>((0,r.dD)("data-v-13a77606"),t=t(),(0,r.Cn)(),t),h={class:"banner"},b=p((()=>(0,r._)("div",{class:"nextcir"},null,-1))),v={class:"word"},y={class:"title tick"},w=p((()=>(0,r._)("h2",null,[(0,r.Uk)("Keep reading,"),(0,r._)("br"),(0,r.Uk)(" and go with the flow")],-1))),k=p((()=>(0,r._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum eos, laudantium corporis iste ut natus eum inventore, totam explicabo necessitatibus esse voluptates rem. Ipsum labore aspernatur voluptates id necessitatibus?",-1))),x=p((()=>(0,r._)("div",{class:"read"},null,-1))),_={class:"item tick"},S={class:"thingbox"},O={class:"imag"},C=["href"],T=["src"],A={class:"gone"},E={class:"plus"},D=["href"],j=p((()=>(0,r._)("i",{class:"fa-solid fa-barcode"},null,-1))),N=[j];function q(t,e,o,i,a,s){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",h,[b,(0,r._)("div",v,[(0,r._)("div",y,[w,k,(0,r.Wm)(u,{to:"/more",class:"view tick"},{default:(0,r.w5)((()=>[(0,r.Uk)("View more")])),_:1})]),x]),(0,r._)("div",_,[(0,r._)("div",{id:"next",class:"next tick",onClick:e[0]||(e[0]=(...t)=>i.right&&i.right(...t)),onMouseenter:e[1]||(e[1]=(...t)=>i.mouse&&i.mouse(...t)),onMouseleave:e[2]||(e[2]=(...t)=>i.mousel&&i.mousel(...t))},"next",32),(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.data,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"thing"},[(0,r._)("div",O,[(0,r._)("a",{href:t["url"]},[(0,r._)("img",{src:n(2951)(`./${t["img"]}.png`),alt:""},null,8,T)],8,C)]),(0,r._)("p",null,(0,m.zw)(t["name"]),1),(0,r._)("div",A,[(0,r._)("p",null,(0,m.zw)(t["descr"]),1),(0,r._)("div",E,[(0,r._)("a",{class:"tick",href:t["url"]},N,8,D)])])])))),128))])])])}var L={setup(){const t=[{url:"https://tangtang1b1b.github.io/chayuan/",name:"茶苑CHAYUAN",descr:"個人購物網站",img:"1"},{url:"https://tangtang1b1b.github.io/DigiSalad/",name:"沙拉互動",descr:"沙拉互動測驗",img:"2"},{url:"https://tangtang1b1b.github.io/Global-Digital-test/",name:"寰宇數位",descr:"寰宇數位測驗",img:"3"},{url:"https://tangtang1b1b.github.io/todolist/todolistagain/index.html",name:"TodoList",descr:"TodoList實作",img:"4"},{url:"https://tangtang1b1b.github.io/Sliding-puzzle-game/",name:"九宮格拼圖",descr:"拼圖小遊戲實作",img:"5"},{url:"https://tangtang1b1b.github.io/chayuan/",name:"茶苑CHAYUAN",descr:"個人購物網站",img:"1"},{url:"https://tangtang1b1b.github.io/DigiSalad/",name:"沙拉互動",descr:"沙拉互動測驗",img:"2"}];let e=1,n=!0;const o=()=>{const o=document.querySelector(".thingbox");e<t.length-1&&(o.style=`transition: transform 0.5s 0.1s ease-in-out;transform: translateX(-${100/7*e}%)`,e++,1==n?i():r(),e==t.length-1&&setTimeout((()=>{e=0,o.style=`transform: translateX(-${100/7*e}%)`,o.style="transition: 0s",e=1}),700))},r=()=>{n=!n;const t=document.querySelector(".nextcir"),e=document.querySelector(".banner"),o=document.querySelectorAll(".tick");o.forEach((t=>{t.style="transition: border 1s,color 1s,transform 0.3s ,box-shadow 0.3s",t.classList.remove("white")})),t.style="transition: 1s ease-in-out;background-color: #edc7af;width: 10px;height: 10px;transform: translate(-200%,-200%) scale(500)",setTimeout((()=>{e.style="background-color: #edc7af",t.style="background-color: #edc7af;transition: 0s;width: 0px;height: 0px;transform: translate(-200%,-200%) scale(0)"}),1e3)},i=()=>{n=!n;const t=document.querySelector(".nextcir"),e=document.querySelector(".banner"),o=document.querySelectorAll(".tick");o.forEach((t=>{t.style="transition: border 1s,color 1s, transform 0.3s ,box-shadow 0.3s",t.classList.add("white")})),t.style="transition: 1s ease-in-out;background-color: #a82224;width: 10px;height: 10px;transform: translate(-200%,-200%) scale(500)",setTimeout((()=>{e.style="background-color: #a82224",t.style="background-color: #a82224;transition: 0s;width: 0px;height: 0px;transform: translate(-200%,-200%) scale(0)"}),1e3)},a=()=>{const t=document.querySelector("#next");t.style=1==n?"background-color: #a82224;color: #fff;":"background-color: #edc7af;color: #333;border: solid 1px #333"},s=()=>{const t=document.querySelector("#next");t.style=1==n?"background-color: #edc7af":"background-color: #a82224"};return{right:o,growred:i,growyellow:r,mouse:a,mousel:s,data:t}}};const P=(0,s.Z)(L,[["render",q],["__scopeId","data-v-13a77606"]]);var U=P,M={name:"HomeView",components:{Banner:U}};const B=(0,s.Z)(M,[["render",g],["__scopeId","data-v-60ef6cd1"]]);var H=B;const F=[{path:"/",name:"home",component:H},{path:"/more",name:"more",component:()=>n.e(289).then(n.bind(n,1289))}],z=(0,d.p7)({history:(0,d.PO)("/oooooo/"),routes:F});var I=z,Y=n(65),K=(0,Y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(l).use(K).use(I).mount("#app")},2951:function(t,e,n){var o={"./1.png":8810,"./2.png":5519,"./3.png":6997,"./4.png":3758,"./5.png":6136};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=2951},8810:function(t,e,n){"use strict";t.exports=n.p+"img/1.574d6eca.png"},5519:function(t,e,n){"use strict";t.exports=n.p+"img/2.0b8f2ca9.png"},6997:function(t,e,n){"use strict";t.exports=n.p+"img/3.720655cd.png"},3758:function(t,e,n){"use strict";t.exports=n.p+"img/4.d66e6b7f.png"},6136:function(t,e,n){"use strict";t.exports=n.p+"img/5.ed6c0101.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".fe3c9532.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".4625a593.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="oooooo:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[r];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(g);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/oooooo/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(e(a,s))return r();t(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={289:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),s=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(o);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkoooooo"]=self["webpackChunkoooooo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1839)}));o=n.O(o)})();
//# sourceMappingURL=app.b5673ad2.js.map