(()=>{var e,r,t,n,o,a,u,i,l,f,d,s,p,h,c={579:(e,r,t)=>{Promise.all([t.e(950),t.e(712)]).then(t.bind(t,712))}},v={};function m(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,exports:{}};return c[e](t,t.exports,m),t.exports}m.m=c,m.c=v,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+".js",m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="header:",m.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,i;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){u=d;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,m.nc&&u.setAttribute("nonce",m.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var s=(r,n)=>{u.onerror=u.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),i&&document.head.appendChild(u)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var a=m.S[t],u="header",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(o[r]={get:t,from:u,eager:!!n})},l=[];return"default"===t&&(i("react-dom","17.0.2",(()=>Promise.all([m.e(935),m.e(950)]).then((()=>()=>m(935))))),i("react","17.0.2",(()=>m.e(294).then((()=>()=>m(294)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),m.p="https://mathysjtaljaard.github.io/micro-front-header/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var u=r[n],i=(typeof u)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=u)return o<u;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var u=[];for(a=1;a<e.length;a++){var i=e[a];u.push(0===i?"not("+l()+")":1===i?"("+l()+" || "+l()+")":2===i?u.pop()+" "+u.pop():o(i))}return l();function l(){return u.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var u=0,i=1,l=!0;;i++,u++){var f,d,s=i<e.length?(typeof e[i])[0]:"";if(u>=r.length||"o"==(d=(typeof(f=r[u]))[0]))return!l||("u"==s?i>n&&!o:""==s!=o);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(i<=n){if(f!=e[i])return!1}else{if(o?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=s&&"n"!=s){if(o||i<=n)return!1;l=!1,i--}else{if(i<=n||d<s!=o)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,i--)}}var p=[],h=p.pop.bind(p);for(u=1;u<e.length;u++){var c=e[u];p.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",l=(e,r,t,n)=>{var o=u(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(i(e,t,o,n)),f(e[t][o])},f=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,o){var a=m.I(r);return a&&a.then?a.then(e.bind(e,r,m.S[r],t,n,o)):e(0,m.S[r],t,n,o)})(((e,r,t,n,o)=>r&&m.o(r,t)?l(r,0,t,n):o())),s={},p={950:()=>d("default","react",[1,17,0,2],(()=>m.e(294).then((()=>()=>m(294))))),181:()=>d("default","react-dom",[1,17,0,2],(()=>m.e(935).then((()=>()=>m(935)))))},h={712:[181],950:[950]},m.f.consumes=(e,r)=>{m.o(h,e)&&h[e].forEach((e=>{if(m.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},n=r=>{delete s[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var o=p[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={179:0};m.f.j=(r,t)=>{var n=m.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(950!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=m.p+m.u(r),u=new Error;m.l(a,(t=>{if(m.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,u,i]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in u)m.o(u,n)&&(m.m[n]=u[n]);i&&i(m)}for(r&&r(t);l<a.length;l++)o=a[l],m.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkheader=self.webpackChunkheader||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),m.nc=void 0,m(579)})();