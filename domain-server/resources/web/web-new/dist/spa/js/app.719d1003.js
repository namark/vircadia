(()=>{"use strict";var e={8502:(e,t,n)=>{n(5363);var r=n(8880),o=n(9592),a=n(3673);function i(e,t,n,r,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var c=n(4260);const s=(0,c.Z)(l,[["render",i]]),d=s;var p=n(3340),h=n(8339);const u=[{path:"/",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(34)]).then(n.bind(n,3034))}]},{path:"/wizard",component:()=>Promise.all([n.e(736),n.e(596)]).then(n.bind(n,6596)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(249)]).then(n.bind(n,7249))}]},{path:"/networking",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(16)]).then(n.bind(n,6016))}]},{path:"/security",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(757)]).then(n.bind(n,7757))}]},{path:"/content",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(890)]).then(n.bind(n,1128))}]},{path:"/audio",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(201)]).then(n.bind(n,9201))}]},{path:"/avatars",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(267)]).then(n.bind(n,2267))}]},{path:"/entities",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(724)]).then(n.bind(n,8724))}]},{path:"/scripts",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>n.e(361).then(n.bind(n,9361))}]},{path:"/advanced",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(331)]).then(n.bind(n,2331))}]},{path:"/backup-restore",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(714)]).then(n.bind(n,4714))}]},{path:"/assignment",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(483)]).then(n.bind(n,8483))}]},{path:"/help",component:()=>Promise.all([n.e(736),n.e(294)]).then(n.bind(n,4294)),children:[{path:"",component:()=>n.e(707).then(n.bind(n,6707))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(284)]).then(n.bind(n,1284))}],f=u,m=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function b(e,t){const n="function"===typeof m?await m({}):m,r=e(d);return r.use(o.Z,t),{app:r,router:n}}var v=n(4434),g=n(6249);const y={config:{dark:"auto"},plugins:{Notify:v.Z,Loading:g.Z}},P="";async function O({app:e,router:t},n){let r=!1;const o=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},a=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===r&&c<n.length;c++)try{await n[c]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:P})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&(e.use(t),e.mount("#q-app"))}b(r.ri,y).then((e=>Promise.all([Promise.resolve().then(n.bind(n,1768))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));O(e,n)}))))},1768:(e,t,n)=>{n.r(t),n.d(t,{api:()=>c,default:()=>s});var r=n(3340),o=n(52),a=n.n(o),i=n(8563);i.Z.info(i.Z.types.OTHER,"Bootstrapping Axios.");const l="https://metaverse.vircadia.com/live";a().interceptors.request.use((e=>{var t;return(null===(t=e.url)||void 0===t?void 0:t.includes(l))&&(e.headers["x-vircadia-error-handle"]="badrequest"),console.info("config",e),e}),(e=>Promise.reject(e)));const c=a().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=c}))},8563:(e,t,n)=>{n.d(t,{Z:()=>o});const r=function(){let e,t;function n(e,t,n){console.info(e,t,n)}function r(e,r){n(e,t.DEBUG,r)}function o(e,r){n(e,t.ERROR,r)}function a(e,r){n(e,t.WARN,r)}function i(e,r){n(e,t.INFO,r)}return function(e){e["OTHER"]="[OTHER]",e["DOMAIN"]="[DOMAIN]",e["METAVERSE"]="[METAVERSE]"}(e||(e={})),function(e){e["ERROR"]="[ERROR]",e["DEBUG"]="[DEBUG]",e["WARN"]="[WARN]",e["INFO"]="[INFO]"}(t||(t={})),{types:e,levels:t,print:n,debug:r,error:o,warn:a,info:i}}(),o=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,(()=>{n.amdO={}})(),(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i["default"]=()=>r,n.d(a,i),a}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{16:"3b696f1b",34:"7ee2e09f",201:"cdcb953f",249:"a40fb647",267:"5a728355",284:"568e9c1c",294:"187abb07",331:"699d9e22",361:"cff2514f",483:"1cf1c9a7",596:"7b883e5c",707:"2384ee56",714:"0a15bbc7",724:"7316b97d",757:"a0b284b2",890:"923e4fc7"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"fc06f7aa",249:"dea22e27",736:"8d8e9948"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="vircadia-domain-dashboard:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var p=s[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+a){l=p;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var h=(t,n)=>{l.onerror=l.onload=null,clearTimeout(u);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.p=""})(),(()=>{var e=(e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var i=n.miniCssF(r),l=n.p+i;if(t(i,l))return o();e(r,l,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={249:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error,c=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var d=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=globalThis["webpackChunkvircadia_domain_dashboard"]=globalThis["webpackChunkvircadia_domain_dashboard"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(8502)));r=n.O(r)})();