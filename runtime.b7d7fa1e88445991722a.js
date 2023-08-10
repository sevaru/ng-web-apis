(()=>{"use strict";var e,g={},_={};function r(e){var f=_[e];if(void 0!==f)return f.exports;var t=_[e]={exports:{}};return g[e].call(t.exports,t,t.exports,r),t.exports}r.m=g,e=[],r.O=(f,t,n,b)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,n,b]=e[d],s=!0,o=0;o<t.length;o++)(!1&b||a>=b)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(s=!1,b<a&&(a=b));if(s){e.splice(d--,1);var i=n();void 0!==i&&(f=i)}}return f}b=b||0;for(var d=e.length;d>0&&e[d-1][2]>b;d--)e[d]=e[d-1];e[d]=[t,n,b]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var b=Object.create(null);r.r(b);var d={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>d[s]=()=>t[s]);return d.default=()=>t,r.d(b,d),b}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{30:"56dc2bba17b886e97dd7",80:"fef359c4ebde32d8bb09",206:"6b6c970d1f5cb3768545",224:"893a6e0e541ba9a5c6da",265:"954dc4b0339ecf24d41c",266:"1a546119bff1f20e40ab",291:"1dced62c560212976aba",387:"94f2fbc7badcd4a288e7",423:"4386d151bbcd627aab0b",443:"cffd27435f427d0e478c",460:"e2f1b1459eb7c31af555",504:"02273df5117a4f3da679",524:"7f1623a2bf24fd2e6851",562:"fbc1fd737eee76d063e8",579:"51ca0a33afb7e066a382",592:"8463ffa1fa6b10ba91bc",628:"bda12dbbc759d0636e06",703:"09abcc84378e0909ee08",785:"0c610fea9bbdfaca51dd",803:"3f84e9e0aff08b867bdb",808:"8239d2377cd9048e5d07",812:"ef70299ddfbc8f15f6b4",892:"1699389d63f943b09326",948:"e55b3377f7d98318b0eb",994:"2a20e60b38bcc2baff4c"}[e]+".js",r.miniCssF=e=>"styles.5faed457c508b972eb12.css",r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="ng-web-apis:";r.l=(t,n,b,d)=>{if(e[t])e[t].push(n);else{var a,s;if(void 0!==b)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var c=o[i];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==f+b){a=c;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+b),a.src=r.tu(t)),e[t]=[n];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(y=>y(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(n,b)=>{var d=r.o(e,n)?e[n]:void 0;if(0!==d)if(d)b.push(d[2]);else if(666!=n){var a=new Promise((c,l)=>d=e[n]=[c,l]);b.push(d[2]=a);var s=r.p+r.u(n),o=new Error;r.l(s,c=>{if(r.o(e,n)&&(0!==(d=e[n])&&(e[n]=void 0),d)){var l=c&&("load"===c.type?"missing":c.type),u=c&&c.target&&c.target.src;o.message="Loading chunk "+n+" failed.\n("+l+": "+u+")",o.name="ChunkLoadError",o.type=l,o.request=u,d[1](o)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,b)=>{var o,i,[d,a,s]=b,c=0;if(d.some(u=>0!==e[u])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var l=s(r)}for(n&&n(b);c<d.length;c++)r.o(e,i=d[c])&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},t=self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();