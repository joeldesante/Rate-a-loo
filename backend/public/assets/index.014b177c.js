var dn=Object.defineProperty,pn=Object.defineProperties;var mn=Object.getOwnPropertyDescriptors;var rt=Object.getOwnPropertySymbols;var gn=Object.prototype.hasOwnProperty,_n=Object.prototype.propertyIsEnumerable;var st=(t,e,n)=>e in t?dn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,he=(t,e)=>{for(var n in e||(e={}))gn.call(e,n)&&st(t,n,e[n]);if(rt)for(var n of rt(e))_n.call(e,n)&&st(t,n,e[n]);return t},fe=(t,e)=>pn(t,mn(e));const bn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};bn();function D(){}function Tt(t,e){for(const n in e)t[n]=e[n];return t}function Dt(t){return t()}function ot(){return Object.create(null)}function ee(t){t.forEach(Dt)}function We(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let de;function it(t,e){return de||(de=document.createElement("a")),de.href=e,t===de.href}function wn(t){return Object.keys(t).length===0}function yn(t,...e){if(t==null)return D;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function we(t){return t&&We(t.destroy)?t.destroy:D}function p(t,e){t.appendChild(e)}function B(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function En(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function O(){return W(" ")}function qe(){return W("")}function Ve(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function xt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vn(t){return Array.from(t.childNodes)}function Pe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Sn(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let ae;function oe(t){ae=t}function Se(){if(!ae)throw new Error("Function called outside component initialization");return ae}function Xe(t){Se().$$.on_mount.push(t)}function Cn(t){Se().$$.after_update.push(t)}function kn(t){Se().$$.on_destroy.push(t)}function In(){const t=Se();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=Sn(e,n,{cancelable:r});return s.slice().forEach(a=>{a.call(t,o)}),!o.defaultPrevented}return!0}}function at(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const se=[],ct=[],_e=[],lt=[],Ot=Promise.resolve();let Ne=!1;function Bt(){Ne||(Ne=!0,Ot.then($t))}function Ke(){return Bt(),Ot}function Le(t){_e.push(t)}const Ae=new Set;let pe=0;function $t(){const t=ae;do{for(;pe<se.length;){const e=se[pe];pe++,oe(e),Rn(e.$$)}for(oe(null),se.length=0,pe=0;ct.length;)ct.pop()();for(let e=0;e<_e.length;e+=1){const n=_e[e];Ae.has(n)||(Ae.add(n),n())}_e.length=0}while(se.length);for(;lt.length;)lt.pop()();Ne=!1,Ae.clear(),oe(t)}function Rn(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Le)}}const be=new Set;let Y;function Ce(){Y={r:0,c:[],p:Y}}function ke(){Y.r||ee(Y.c),Y=Y.p}function P(t,e){t&&t.i&&(be.delete(t),t.i(e))}function L(t,e,n,r){if(t&&t.o){if(be.has(t))return;be.add(t),Y.c.push(()=>{be.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Pt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const c in a)c in i||(r[c]=1);for(const c in i)s[c]||(n[c]=i[c],s[c]=1);t[o]=i}else for(const c in a)s[c]=1}for(const a in r)a in n||(n[a]=void 0);return n}function Nt(t){return typeof t=="object"&&t!==null?t:{}}function V(t){t&&t.c()}function U(t,e,n,r){const{fragment:s,on_mount:o,on_destroy:a,after_update:i}=t.$$;s&&s.m(e,n),r||Le(()=>{const c=o.map(Dt).filter(We);a?a.push(...c):ee(c),t.$$.on_mount=[]}),i.forEach(Le)}function j(t,e){const n=t.$$;n.fragment!==null&&(ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function An(t,e){t.$$.dirty[0]===-1&&(se.push(t),Bt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,r,s,o,a,i=[-1]){const c=ae;oe(t);const l=t.$$={fragment:null,ctx:null,props:o,update:D,not_equal:s,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ot(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let h=!1;if(l.ctx=n?n(t,e.props||{},(u,m,...d)=>{const b=d.length?d[0]:m;return l.ctx&&s(l.ctx[u],l.ctx[u]=b)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](b),h&&An(t,u)),m}):[],l.update(),h=!0,ee(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=vn(e.target);l.fragment&&l.fragment.l(u),u.forEach(x)}else l.fragment&&l.fragment.c();e.intro&&P(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),$t()}oe(c)}class K{$destroy(){j(this,1),this.$destroy=D}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!wn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const te=[];function Lt(t,e){return{subscribe:Mt(t,e).subscribe}}function Mt(t,e=D){let n;const r=new Set;function s(i){if(H(t,i)&&(t=i,n)){const c=!te.length;for(const l of r)l[1](),te.push(l,t);if(c){for(let l=0;l<te.length;l+=2)te[l][0](te[l+1]);te.length=0}}}function o(i){s(i(t))}function a(i,c=D){const l=[i,c];return r.add(l),r.size===1&&(n=e(s)||D),i(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:a}}function Ut(t,e,n){const r=!Array.isArray(t),s=r?[t]:t,o=e.length<2;return Lt(n,a=>{let i=!1;const c=[];let l=0,h=D;const u=()=>{if(l)return;h();const d=e(r?c[0]:c,a);o?a(d):h=We(d)?d:D},m=s.map((d,b)=>yn(d,y=>{c[b]=y,l&=~(1<<b),i&&u()},()=>{l|=1<<b}));return i=!0,u(),function(){ee(m),h()}})}function Tn(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,s,o,a=[],i="",c=t.split("/");for(c[0]||c.shift();s=c.shift();)n=s[0],n==="*"?(a.push("wild"),i+="/(.*)"):n===":"?(r=s.indexOf("?",1),o=s.indexOf(".",1),a.push(s.substring(1,~r?r:~o?o:s.length)),i+=!!~r&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(i+=(~r?"?":"")+"\\"+s.substring(o))):i+="/"+s;return{keys:a,pattern:new RegExp("^"+i+(e?"(?=$|/)":"/?$"),"i")}}function Dn(t){let e,n,r;const s=[t[2]];var o=t[0];function a(i){let c={};for(let l=0;l<s.length;l+=1)c=Tt(c,s[l]);return{props:c}}return o&&(e=new o(a()),e.$on("routeEvent",t[7])),{c(){e&&V(e.$$.fragment),n=qe()},m(i,c){e&&U(e,i,c),B(i,n,c),r=!0},p(i,c){const l=c&4?Pt(s,[Nt(i[2])]):{};if(o!==(o=i[0])){if(e){Ce();const h=e;L(h.$$.fragment,1,0,()=>{j(h,1)}),ke()}o?(e=new o(a()),e.$on("routeEvent",i[7]),V(e.$$.fragment),P(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else o&&e.$set(l)},i(i){r||(e&&P(e.$$.fragment,i),r=!0)},o(i){e&&L(e.$$.fragment,i),r=!1},d(i){i&&x(n),e&&j(e,i)}}}function xn(t){let e,n,r;const s=[{params:t[1]},t[2]];var o=t[0];function a(i){let c={};for(let l=0;l<s.length;l+=1)c=Tt(c,s[l]);return{props:c}}return o&&(e=new o(a()),e.$on("routeEvent",t[6])),{c(){e&&V(e.$$.fragment),n=qe()},m(i,c){e&&U(e,i,c),B(i,n,c),r=!0},p(i,c){const l=c&6?Pt(s,[c&2&&{params:i[1]},c&4&&Nt(i[2])]):{};if(o!==(o=i[0])){if(e){Ce();const h=e;L(h.$$.fragment,1,0,()=>{j(h,1)}),ke()}o?(e=new o(a()),e.$on("routeEvent",i[6]),V(e.$$.fragment),P(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}else o&&e.$set(l)},i(i){r||(e&&P(e.$$.fragment,i),r=!0)},o(i){e&&L(e.$$.fragment,i),r=!1},d(i){i&&x(n),e&&j(e,i)}}}function On(t){let e,n,r,s;const o=[xn,Dn],a=[];function i(c,l){return c[1]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=qe()},m(c,l){a[e].m(c,l),B(c,r,l),s=!0},p(c,[l]){let h=e;e=i(c),e===h?a[e].p(c,l):(Ce(),L(a[h],1,1,()=>{a[h]=null}),ke(),n=a[e],n?n.p(c,l):(n=a[e]=o[e](c),n.c()),P(n,1),n.m(r.parentNode,r))},i(c){s||(P(n),s=!0)},o(c){L(n),s=!1},d(c){a[e].d(c),c&&x(r)}}}function ut(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const Ge=Lt(null,function(e){e(ut());const n=()=>{e(ut())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Ut(Ge,t=>t.location);Ut(Ge,t=>t.querystring);const ht=Mt(void 0);async function Bn(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await Ke(),history.replaceState(fe(he({},history.state),{__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY}),void 0,void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}async function $n(){await Ke(),window.history.back()}function ye(t,e){if(e=dt(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return ft(t,e),{update(n){n=dt(n),ft(t,n)}}}function ft(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||Pn(r.currentTarget.getAttribute("href"))})}function dt(t){return t&&typeof t=="string"?{href:t}:t||{}}function Pn(t){history.replaceState(fe(he({},history.state),{__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY}),void 0,void 0),window.location.hash=t}function Nn(t,e,n){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:o=!1}=e;class a{constructor(g,w){if(!w||typeof w!="function"&&(typeof w!="object"||w._sveltesparouter!==!0))throw Error("Invalid component object");if(!g||typeof g=="string"&&(g.length<1||g.charAt(0)!="/"&&g.charAt(0)!="*")||typeof g=="object"&&!(g instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:R,keys:C}=Tn(g);this.path=g,typeof w=="object"&&w._sveltesparouter===!0?(this.component=w.component,this.conditions=w.conditions||[],this.userData=w.userData,this.props=w.props||{}):(this.component=()=>Promise.resolve(w),this.conditions=[],this.props={}),this._pattern=R,this._keys=C}match(g){if(s){if(typeof s=="string")if(g.startsWith(s))g=g.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const F=g.match(s);if(F&&F[0])g=g.substr(F[0].length)||"/";else return null}}const w=this._pattern.exec(g);if(w===null)return null;if(this._keys===!1)return w;const R={};let C=0;for(;C<this._keys.length;){try{R[this._keys[C]]=decodeURIComponent(w[C+1]||"")||null}catch{R[this._keys[C]]=null}C++}return R}async checkConditions(g){for(let w=0;w<this.conditions.length;w++)if(!await this.conditions[w](g))return!1;return!0}}const i=[];r instanceof Map?r.forEach((f,g)=>{i.push(new a(g,f))}):Object.keys(r).forEach(f=>{i.push(new a(f,r[f]))});let c=null,l=null,h={};const u=In();async function m(f,g){await Ke(),u(f,g)}let d=null,b=null;o&&(b=f=>{f.state&&f.state.__svelte_spa_router_scrollY?d=f.state:d=null},window.addEventListener("popstate",b),Cn(()=>{d?window.scrollTo(d.__svelte_spa_router_scrollX,d.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let y=null,v=null;const S=Ge.subscribe(async f=>{y=f;let g=0;for(;g<i.length;){const w=i[g].match(f.location);if(!w){g++;continue}const R={route:i[g].path,location:f.location,querystring:f.querystring,userData:i[g].userData,params:w&&typeof w=="object"&&Object.keys(w).length?w:null};if(!await i[g].checkConditions(R)){n(0,c=null),v=null,m("conditionsFailed",R);return}m("routeLoading",Object.assign({},R));const C=i[g].component;if(v!=C){C.loading?(n(0,c=C.loading),v=C,n(1,l=C.loadingParams),n(2,h={}),m("routeLoaded",Object.assign({},R,{component:c,name:c.name,params:l}))):(n(0,c=null),v=null);const F=await C();if(f!=y)return;n(0,c=F&&F.default||F),v=C}w&&typeof w=="object"&&Object.keys(w).length?n(1,l=w):n(1,l=null),n(2,h=i[g].props),m("routeLoaded",Object.assign({},R,{component:c,name:c.name,params:l})).then(()=>{ht.set(l)});return}n(0,c=null),v=null,ht.set(void 0)});kn(()=>{S(),b&&window.removeEventListener("popstate",b)});function k(f){at.call(this,t,f)}function A(f){at.call(this,t,f)}return t.$$set=f=>{"routes"in f&&n(3,r=f.routes),"prefix"in f&&n(4,s=f.prefix),"restoreScrollState"in f&&n(5,o=f.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[c,l,h,r,s,o,k,A]}class Ln extends K{constructor(e){super(),X(this,e,Nn,On,H,{routes:3,prefix:4,restoreScrollState:5})}}var ue={host:"http://ratealoo.joeldesante.com"};function Mn(t){let e,n,r,s,o,a,i,c,l,h,u,m,d,b,y,v,S,k,A,f,g,w;return{c(){e=E("div"),n=E("a"),r=E("div"),s=E("img"),i=O(),c=E("div"),l=E("div"),h=E("h3"),u=W(t[1]),m=O(),d=E("p"),b=W(t[2]),y=W("% THRONE-O-SCORE"),v=O(),S=E("div"),k=E("a"),A=W("Navigate"),it(s.src,o=t[4])||_(s,"src",o),_(s,"class","object-cover h-40 w-full rounded"),_(r,"class","bg-gray-200 rounded"),_(n,"href",a="/locations/"+t[0]),_(h,"class","font-bold font-serif text-xl"),_(d,"class","font-black text-sm text-blue-700"),_(l,"class","grow"),_(k,"href",f=encodeURI(`maps:daddr=${t[1]}, ${t[3]}`)),_(k,"class","font-black bg-blue-600 p-5 pt-3 pb-3 inline-block rounded text-white"),_(S,"class","flex-none"),_(c,"class","flex flex-space mt-2 justify-center items-center")},m(R,C){B(R,e,C),p(e,n),p(n,r),p(r,s),p(e,i),p(e,c),p(c,l),p(l,h),p(h,u),p(l,m),p(l,d),p(d,b),p(d,y),p(c,v),p(c,S),p(S,k),p(k,A),g||(w=we(ye.call(null,n)),g=!0)},p(R,[C]){C&16&&!it(s.src,o=R[4])&&_(s,"src",o),C&1&&a!==(a="/locations/"+R[0])&&_(n,"href",a),C&2&&Pe(u,R[1]),C&4&&Pe(b,R[2]),C&10&&f!==(f=encodeURI(`maps:daddr=${R[1]}, ${R[3]}`))&&_(k,"href",f)},i:D,o:D,d(R){R&&x(e),g=!1,w()}}}function Un(t,e,n){let{locationId:r}=e,{locationName:s}=e,{score:o="?"}=e,{address:a}=e,i="#";return Xe(async()=>{const l=await(await fetch(`${ue.host}/api/locations/${r}/images`)).json();console.log(l[0].image),n(4,i=l[0].image||"#")}),t.$$set=c=>{"locationId"in c&&n(0,r=c.locationId),"locationName"in c&&n(1,s=c.locationName),"score"in c&&n(2,o=c.score),"address"in c&&n(3,a=c.address)},[r,s,o,a,i]}class jt extends K{constructor(e){super(),X(this,e,Un,Mn,H,{locationId:0,locationName:1,score:2,address:3})}}function pt(t,e,n){const r=t.slice();return r[1]=e[n],r}function mt(t){let e,n,r,s,o,a;return n=new jt({props:{locationId:t[1].rowid,locationName:t[1].name,score:t[1].score,address:t[1].address}}),{c(){e=E("li"),V(n.$$.fragment),r=O(),s=E("hr"),o=O(),_(s,"class","mt-3"),_(e,"class","mb-4")},m(i,c){B(i,e,c),U(n,e,null),p(e,r),p(e,s),p(e,o),a=!0},p(i,c){const l={};c&1&&(l.locationId=i[1].rowid),c&1&&(l.locationName=i[1].name),c&1&&(l.score=i[1].score),c&1&&(l.address=i[1].address),n.$set(l)},i(i){a||(P(n.$$.fragment,i),a=!0)},o(i){L(n.$$.fragment,i),a=!1},d(i){i&&x(e),j(n)}}}function jn(t){let e,n,r,s,o,a=t[0],i=[];for(let l=0;l<a.length;l+=1)i[l]=mt(pt(t,a,l));const c=l=>L(i[l],1,1,()=>{i[l]=null});return{c(){e=E("section"),n=E("h2"),n.textContent="Nearby Bathrooms",r=O(),s=E("ul");for(let l=0;l<i.length;l+=1)i[l].c();_(n,"class","font-serif font-bold text-xl mb-2"),_(e,"class","mt-3")},m(l,h){B(l,e,h),p(e,n),p(e,r),p(e,s);for(let u=0;u<i.length;u+=1)i[u].m(s,null);o=!0},p(l,[h]){if(h&1){a=l[0];let u;for(u=0;u<a.length;u+=1){const m=pt(l,a,u);i[u]?(i[u].p(m,h),P(i[u],1)):(i[u]=mt(m),i[u].c(),P(i[u],1),i[u].m(s,null))}for(Ce(),u=a.length;u<i.length;u+=1)c(u);ke()}},i(l){if(!o){for(let h=0;h<a.length;h+=1)P(i[h]);o=!0}},o(l){i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)L(i[h]);o=!1},d(l){l&&x(e),En(i,l)}}}function Hn(t,e,n){let r=[];return Xe(async()=>{const s=await fetch(`${ue.host}/api/locations?lat=0&long=0`);n(0,r=await s.json()),console.log(r)}),[r]}class Fn extends K{constructor(e){super(),X(this,e,Hn,jn,H,{})}}function zn(t){let e,n,r,s,o,a,i;return n=new Fn({}),{c(){e=E("main"),V(n.$$.fragment),r=O(),s=E("div"),o=O(),a=E("div"),a.innerHTML='<input type="search" placeholder="Search for a place to poop..." class="w-full shadow-lg rounded border p-2"/>',_(s,"class","h-12"),_(a,"class","fixed bottom-5 w-full right-0 p-8 pb-4")},m(c,l){B(c,e,l),U(n,e,null),p(e,r),p(e,s),p(e,o),p(e,a),i=!0},p:D,i(c){i||(P(n.$$.fragment,c),i=!0)},o(c){L(n.$$.fragment,c),i=!1},d(c){c&&x(e),j(n)}}}class Wn extends K{constructor(e){super(),X(this,e,null,zn,H,{})}}function qn(t){let e,n,r,s,o,a,i,c=t[1].address+"",l,h,u,m,d,b,y,v;return n=new jt({props:{locationId:t[1].rowid,locationName:t[1].name,score:t[1].score,address:t[1].address}}),{c(){e=E("main"),V(n.$$.fragment),r=O(),s=E("section"),o=E("h4"),o.textContent="Address",a=O(),i=E("p"),l=W(c),h=O(),u=E("a"),m=W("Leave a review"),_(o,"class","font-bold"),_(s,"class","mt-2"),_(u,"href",d="/locations/"+t[0].location+"/review"),_(u,"class","underline mt-4 text-lg text-blue-500"),_(e,"class","pt-4")},m(S,k){B(S,e,k),U(n,e,null),p(e,r),p(e,s),p(s,o),p(s,a),p(s,i),p(i,l),p(e,h),p(e,u),p(u,m),b=!0,y||(v=we(ye.call(null,u)),y=!0)},p(S,[k]){const A={};k&2&&(A.locationId=S[1].rowid),k&2&&(A.locationName=S[1].name),k&2&&(A.score=S[1].score),k&2&&(A.address=S[1].address),n.$set(A),(!b||k&2)&&c!==(c=S[1].address+"")&&Pe(l,c),(!b||k&1&&d!==(d="/locations/"+S[0].location+"/review"))&&_(u,"href",d)},i(S){b||(P(n.$$.fragment,S),b=!0)},o(S){L(n.$$.fragment,S),b=!1},d(S){S&&x(e),j(n),y=!1,v()}}}function Vn(t,e,n){let{params:r={}}=e,s={};return Xe(async()=>{let o=await fetch(`${ue.host}/api/locations/${r.location}`);o.ok&&n(1,s=await o.json())}),t.$$set=o=>{"params"in o&&n(0,r=o.params)},[r,s]}class Xn extends K{constructor(e){super(),X(this,e,Vn,qn,H,{params:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],i=t[n++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|i&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,i=a?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=o>>2,u=(o&3)<<4|i>>4;let m=(i&15)<<2|l>>6,d=l&63;c||(d=64,a||(m=64)),r.push(n[h],n[u],n[m],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ht(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],i=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||i==null||l==null||u==null)throw Error();const m=o<<2|i>>4;if(r.push(m),l!==64){const d=i<<4&240|l>>2;if(r.push(d),u!==64){const b=l<<6&192|u;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Yn=function(t){const e=Ht(t);return Gn.encodeByteArray(e,!0)},Ft=function(t){return Yn(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Zn(){return typeof indexedDB=="object"}function Qn(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="FirebaseError";class Ie extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=er,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?tr(o,r):"Error",i=`${this.serviceName}: ${a} (${s}).`;return new Ie(s,i,r)}}function tr(t,e){return t.replace(nr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nr=/\{\$([^}]+)}/g;function Me(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(gt(o)&&gt(a)){if(!Me(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){return t&&t._delegate?t._delegate:t}class ce{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(or(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(o);r===i&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sr(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sr(t){return t===G?void 0:t}function or(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(I||(I={}));const ar={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},cr=I.INFO,lr={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},ur=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hr{constructor(e){this.name=e,this._logLevel=cr,this._logHandler=ur,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ar[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const fr=(t,e)=>e.some(n=>t instanceof n);let _t,bt;function dr(){return _t||(_t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pr(){return bt||(bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wt=new WeakMap,Ue=new WeakMap,qt=new WeakMap,Te=new WeakMap,Ye=new WeakMap;function mr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(q(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Wt.set(n,t)}).catch(()=>{}),Ye.set(e,t),e}function gr(t){if(Ue.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Ue.set(t,e)}let je={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ue.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return q(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _r(t){je=t(je)}function br(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(De(this),e,...n);return qt.set(r,e.sort?e.sort():[e]),q(r)}:pr().includes(t)?function(...e){return t.apply(De(this),e),q(Wt.get(this))}:function(...e){return q(t.apply(De(this),e))}}function wr(t){return typeof t=="function"?br(t):(t instanceof IDBTransaction&&gr(t),fr(t,dr())?new Proxy(t,je):t)}function q(t){if(t instanceof IDBRequest)return mr(t);if(Te.has(t))return Te.get(t);const e=wr(t);return e!==t&&(Te.set(t,e),Ye.set(e,t)),e}const De=t=>Ye.get(t);function yr(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),i=q(a);return r&&a.addEventListener("upgradeneeded",c=>{r(q(a.result),c.oldVersion,c.newVersion,q(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),i.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),i}const Er=["get","getKey","getAll","getAllKeys","count"],vr=["put","add","delete","clear"],xe=new Map;function wt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xe.get(e))return xe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Er.includes(n)))return;const o=async function(a,...i){const c=this.transaction(a,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),s&&c.done]))[0]};return xe.set(e,o),o}_r(t=>fe(he({},t),{get:(e,n,r)=>wt(e,n)||t.get(e,n,r),has:(e,n)=>!!wt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const He="@firebase/app",yt="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new hr("@firebase/app"),kr="@firebase/app-compat",Ir="@firebase/analytics-compat",Rr="@firebase/analytics",Ar="@firebase/app-check-compat",Tr="@firebase/app-check",Dr="@firebase/auth",xr="@firebase/auth-compat",Or="@firebase/database",Br="@firebase/database-compat",$r="@firebase/functions",Pr="@firebase/functions-compat",Nr="@firebase/installations",Lr="@firebase/installations-compat",Mr="@firebase/messaging",Ur="@firebase/messaging-compat",jr="@firebase/performance",Hr="@firebase/performance-compat",Fr="@firebase/remote-config",zr="@firebase/remote-config-compat",Wr="@firebase/storage",qr="@firebase/storage-compat",Vr="@firebase/firestore",Xr="@firebase/firestore-compat",Kr="firebase",Gr="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]",Yr={[He]:"fire-core",[kr]:"fire-core-compat",[Rr]:"fire-analytics",[Ir]:"fire-analytics-compat",[Tr]:"fire-app-check",[Ar]:"fire-app-check-compat",[Dr]:"fire-auth",[xr]:"fire-auth-compat",[Or]:"fire-rtdb",[Br]:"fire-rtdb-compat",[$r]:"fire-fn",[Pr]:"fire-fn-compat",[Nr]:"fire-iid",[Lr]:"fire-iid-compat",[Mr]:"fire-fcm",[Ur]:"fire-fcm-compat",[jr]:"fire-perf",[Hr]:"fire-perf-compat",[Fr]:"fire-rc",[zr]:"fire-rc-compat",[Wr]:"fire-gcs",[qr]:"fire-gcs-compat",[Vr]:"fire-fst",[Xr]:"fire-fst-compat","fire-js":"fire-js",[Kr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map,Fe=new Map;function Jr(t,e){try{t.container.addComponent(e)}catch(n){Je.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ve(t){const e=t.name;if(Fe.has(e))return Je.debug(`There were multiple attempts to register component ${e}.`),!1;Fe.set(e,t);for(const n of Ee.values())Jr(n,t);return!0}function Zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Z=new zt("app","Firebase",Qr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Z.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=Gr;function ns(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Vt,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Z.create("bad-app-name",{appName:String(r)});const s=Ee.get(r);if(s){if(Me(t,s.options)&&Me(n,s.config))return s;throw Z.create("duplicate-app",{appName:r})}const o=new ir(r);for(const i of Fe.values())o.addComponent(i);const a=new es(t,n,o);return Ee.set(r,a),a}function rs(t=Vt){const e=Ee.get(t);if(!e)throw Z.create("no-app",{appName:t});return e}function ne(t,e,n){var r;let s=(r=Yr[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const i=[`Unable to register library "${s}" with version "${e}":`];o&&i.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&i.push("and"),a&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Je.warn(i.join(" "));return}ve(new ce(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="firebase-heartbeat-database",os=1,le="firebase-heartbeat-store";let Oe=null;function Xt(){return Oe||(Oe=yr(ss,os,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(le)}}}).catch(t=>{throw Z.create("storage-open",{originalErrorMessage:t.message})})),Oe}async function is(t){try{return(await Xt()).transaction(le).objectStore(le).get(Kt(t))}catch(e){throw Z.create("storage-get",{originalErrorMessage:e.message})}}async function Et(t,e){try{const r=(await Xt()).transaction(le,"readwrite");return await r.objectStore(le).put(e,Kt(t)),r.done}catch(n){throw Z.create("storage-set",{originalErrorMessage:n.message})}}function Kt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=1024,cs=30*24*60*60*1e3;class ls{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hs(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=cs}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vt(),{heartbeatsToSend:n,unsentEntries:r}=us(this._heartbeatsCache.heartbeats),s=Ft(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vt(){return new Date().toISOString().substring(0,10)}function us(t,e=as){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),St(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),St(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zn()?Qn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await is(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Et(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Et(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function St(t){return Ft(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){ve(new ce("platform-logger",e=>new Sr(e),"PRIVATE")),ve(new ce("heartbeat",e=>new ls(e),"PRIVATE")),ne(He,yt,t),ne(He,yt,"esm2017"),ne("fire-js","")}fs("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="firebasestorage.googleapis.com",Yt="storageBucket",ds=2*60*1e3,ps=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T extends Ie{constructor(e,n){super(Be(e),`Firebase Storage: ${n} (${Be(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,T.prototype)}_codeEquals(e){return Be(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Be(t){return"storage/"+t}function Ze(){const t="An unknown error occurred, please check the error payload for server response.";return new T("unknown",t)}function ms(t){return new T("object-not-found","Object '"+t+"' does not exist.")}function gs(t){return new T("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _s(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new T("unauthenticated",t)}function bs(){return new T("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ws(t){return new T("unauthorized","User does not have permission to access '"+t+"'.")}function ys(){return new T("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Es(){return new T("canceled","User canceled the upload/download.")}function vs(t){return new T("invalid-url","Invalid URL '"+t+"'.")}function Ss(t){return new T("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Cs(){return new T("no-default-bucket","No default bucket found. Did you set the '"+Yt+"' property when initializing the app?")}function ks(){return new T("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Is(){return new T("no-download-url","The given file does not have any download URLs.")}function ze(t){return new T("invalid-argument",t)}function Jt(){return new T("app-deleted","The Firebase app was deleted.")}function Rs(t){return new T("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ie(t,e){return new T("invalid-format","String does not match format '"+t+"': "+e)}function re(t){throw new T("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=N.makeFromUrl(e,n)}catch{return new N(e,"")}if(r.path==="")return r;throw Ss(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(f){f.path.charAt(f.path.length-1)==="/"&&(f.path_=f.path_.slice(0,-1))}const a="(/(.*))?$",i=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function l(f){f.path_=decodeURIComponent(f.path)}const h="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",d=new RegExp(`^https?://${u}/${h}/b/${s}/o${m}`,"i"),b={bucket:1,path:3},y=n===Gt?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",S=new RegExp(`^https?://${y}/${s}/${v}`,"i"),A=[{regex:i,indices:c,postModify:o},{regex:d,indices:b,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let f=0;f<A.length;f++){const g=A[f],w=g.regex.exec(e);if(w){const R=w[g.indices.bucket];let C=w[g.indices.path];C||(C=""),r=new N(R,C),g.postModify(r);break}}if(r==null)throw vs(e);return r}}class As{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t,e,n){let r=1,s=null,o=null,a=!1,i=0;function c(){return i===2}let l=!1;function h(...v){l||(l=!0,e.apply(null,v))}function u(v){s=setTimeout(()=>{s=null,t(d,c())},v)}function m(){o&&clearTimeout(o)}function d(v,...S){if(l){m();return}if(v){m(),h.call(null,v,...S);return}if(c()||a){m(),h.call(null,v,...S);return}r<64&&(r*=2);let A;i===1?(i=2,A=0):A=(r+Math.random())*1e3,u(A)}let b=!1;function y(v){b||(b=!0,m(),!l&&(s!==null?(v||(i=2),clearTimeout(s),u(0)):v||(i=1)))}return u(0),o=setTimeout(()=>{a=!0,y(!0)},n),y}function Ds(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){return t!==void 0}function Os(t){return typeof t=="object"&&!Array.isArray(t)}function Qe(t){return typeof t=="string"||t instanceof String}function Ct(t){return et()&&t instanceof Blob}function et(){return typeof Blob!="undefined"}function kt(t,e,n,r){if(r<e)throw ze(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ze(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Zt(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(J||(J={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r,s,o,a,i,c,l,h,u){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=i,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,d)=>{this.resolve_=m,this.reject_=d,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new me(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=i=>{const c=i.loaded,l=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const i=o.getErrorCode()===J.NO_ERROR,c=o.getStatus();if(!i||this.isRetryStatusCode_(c)){const h=o.getErrorCode()===J.ABORT;r(!1,new me(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new me(l,o))})},n=(r,s)=>{const o=this.resolve_,a=this.reject_,i=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(i,i.getResponse());xs(c)?o(c):o()}catch(c){a(c)}else if(i!==null){const c=Ze();c.serverResponse=i.getErrorText(),this.errorCallback_?a(this.errorCallback_(i,c)):a(c)}else if(s.canceled){const c=this.appDelete_?Jt():Es();a(c)}else{const c=ys();a(c)}};this.canceled_?n(!1,new me(!1,null,!0)):this.backoffId_=Ts(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ds(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||o}}class me{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $s(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ps(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Ns(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ls(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ms(t,e,n,r,s,o){const a=Zt(t.urlParams),i=t.url+a,c=Object.assign({},t.headers);return Ns(c,e),$s(c,n),Ps(c,o),Ls(c,r),new Bs(i,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function js(...t){const e=Us();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(et())return new Blob(t);throw new T("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Hs(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $e{constructor(e,n){this.data=e,this.contentType=n||null}}function zs(t,e){switch(t){case M.RAW:return new $e(Qt(e));case M.BASE64:case M.BASE64URL:return new $e(en(t,e));case M.DATA_URL:return new $e(qs(e),Vs(e))}throw Ze()}function Qt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=t.charCodeAt(++n);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Ws(t){let e;try{e=decodeURIComponent(t)}catch{throw ie(M.DATA_URL,"Malformed data URL.")}return Qt(e)}function en(t,e){switch(t){case M.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw ie(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case M.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw ie(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Fs(e)}catch{throw ie(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class tn{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ie(M.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Xs(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function qs(t){const e=new tn(t);return e.base64?en(M.BASE64,e.rest):Ws(e.rest)}function Vs(t){return new tn(t).contentType}function Xs(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){let r=0,s="";Ct(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ct(this.data_)){const r=this.data_,s=Hs(r,e,n);return s===null?null:new z(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new z(r,!0)}}static getBlob(...e){if(et()){const n=e.map(r=>r instanceof z?r.data_:r);return new z(js.apply(null,n))}else{const n=e.map(a=>Qe(a)?zs(M.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return n.forEach(a=>{for(let i=0;i<a.length;i++)s[o++]=a[i]}),new z(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){let e;try{e=JSON.parse(t)}catch{return null}return Os(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Gs(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function rn(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){return e}class ${constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Ys}}let ge=null;function Js(t){return!Qe(t)||t.length<2?t:rn(t)}function sn(){if(ge)return ge;const t=[];t.push(new $("bucket")),t.push(new $("generation")),t.push(new $("metageneration")),t.push(new $("name","fullPath",!0));function e(o,a){return Js(a)}const n=new $("name");n.xform=e,t.push(n);function r(o,a){return a!==void 0?Number(a):a}const s=new $("size");return s.xform=r,t.push(s),t.push(new $("timeCreated")),t.push(new $("updated")),t.push(new $("md5Hash",null,!0)),t.push(new $("cacheControl",null,!0)),t.push(new $("contentDisposition",null,!0)),t.push(new $("contentEncoding",null,!0)),t.push(new $("contentLanguage",null,!0)),t.push(new $("contentType",null,!0)),t.push(new $("metadata","customMetadata",!0)),ge=t,ge}function Zs(t,e){function n(){const r=t.bucket,s=t.fullPath,o=new N(r,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Qs(t,e,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const a=n[o];r[a.local]=a.xform(r,e[a.server])}return Zs(r,t),r}function on(t,e,n){const r=nn(e);return r===null?null:Qs(t,r,n)}function eo(t,e,n,r){const s=nn(e);if(s===null||!Qe(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(l=>{const h=t.bucket,u=t.fullPath,m="/b/"+a(h)+"/o/"+a(u),d=tt(m,n,r),b=Zt({alt:"media",token:l});return d+b})[0]}function to(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class an{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){if(!t)throw Ze()}function no(t,e){function n(r,s){const o=on(t,s,e);return cn(o!==null),o}return n}function ro(t,e){function n(r,s){const o=on(t,s,e);return cn(o!==null),eo(o,s,t.host,t._protocol)}return n}function ln(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=bs():s=_s():n.getStatus()===402?s=gs(t.bucket):n.getStatus()===403?s=ws(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function so(t){const e=ln(t);function n(r,s){let o=e(r,s);return r.getStatus()===404&&(o=ms(t.path)),o.serverResponse=s.serverResponse,o}return n}function oo(t,e,n){const r=e.fullServerUrl(),s=tt(r,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,i=new an(s,o,ro(t,n),a);return i.errorHandler=so(e),i}function io(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ao(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=io(null,e)),r}function co(t,e,n,r,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function i(){let A="";for(let f=0;f<2;f++)A=A+Math.random().toString().slice(2);return A}const c=i();a["Content-Type"]="multipart/related; boundary="+c;const l=ao(e,r,s),h=to(l,n),u="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,m=`\r
--`+c+"--",d=z.getBlob(u,r,m);if(d===null)throw ks();const b={name:l.fullPath},y=tt(o,t.host,t._protocol),v="POST",S=t.maxUploadRetryTime,k=new an(y,v,no(t,n),S);return k.urlParams=b,k.headers=a,k.body=d.uploadData(),k.errorHandler=ln(e),k}class lo{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=J.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=J.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=J.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw re("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw re("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw re("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw re("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw re("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uo extends lo{initXhr(){this.xhr_.responseType="text"}}function un(){return new uo}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this._service=e,n instanceof N?this._location=n:this._location=N.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Q(e,n)}get root(){const e=new N(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rn(this._location.path)}get storage(){return this._service}get parent(){const e=Ks(this._location.path);if(e===null)return null;const n=new N(this._location.bucket,e);return new Q(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Rs(e)}}function ho(t,e,n){t._throwIfRoot("uploadBytes");const r=co(t.storage,t._location,sn(),new z(e,!0),n);return t.storage.makeRequestWithTokens(r,un).then(s=>({metadata:s,ref:t}))}function fo(t){t._throwIfRoot("getDownloadURL");const e=oo(t.storage,t._location,sn());return t.storage.makeRequestWithTokens(e,un).then(n=>{if(n===null)throw Is();return n})}function po(t,e){const n=Gs(t._location.path,e),r=new N(t._location.bucket,n);return new Q(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){return/^[A-Za-z]+:\/\//.test(t)}function go(t,e){return new Q(t,e)}function hn(t,e){if(t instanceof nt){const n=t;if(n._bucket==null)throw Cs();const r=new Q(n,n._bucket);return e!=null?hn(r,e):r}else return e!==void 0?po(t,e):t}function _o(t,e){if(e&&mo(e)){if(t instanceof nt)return go(t,e);throw ze("To use ref(service, url), the first argument must be a Storage instance.")}else return hn(t,e)}function It(t,e){const n=e==null?void 0:e[Yt];return n==null?null:N.makeFromBucketSpec(n,t)}class nt{constructor(e,n,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Gt,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ds,this._maxUploadRetryTime=ps,this._requests=new Set,s!=null?this._bucket=N.makeFromBucketSpec(s,this._host):this._bucket=It(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=N.makeFromBucketSpec(this._url,e):this._bucket=It(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Q(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new As(Jt());{const o=Ms(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Rt="@firebase/storage",At="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="storage";function bo(t,e,n){return t=Re(t),ho(t,e,n)}function wo(t){return t=Re(t),fo(t)}function yo(t,e){return t=Re(t),_o(t,e)}function Eo(t=rs(),e){return t=Re(t),Zr(t,fn).getImmediate({identifier:e})}function vo(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new nt(n,r,s,e,ts)}function So(){ve(new ce(fn,vo,"PUBLIC").setMultipleInstances(!0)),ne(Rt,At,""),ne(Rt,At,"esm2017")}So();var Co="firebase",ko="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(Co,ko,"app");const Io={apiKey:"AIzaSyAKv1NoLw2rzhKoF0ip5LkTDuwwOoQ1O4I",authDomain:"rate-a-loo.firebaseapp.com",projectId:"rate-a-loo",storageBucket:"rate-a-loo.appspot.com",messagingSenderId:"121517063344",appId:"1:121517063344:web:45d26b22c441756e798f75"},Ro=ns(Io),Ao=Eo(Ro);let To=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");function Do(t){let e,n,r,s,o,a;return{c(){e=E("main"),n=E("h2"),n.textContent="Leave a review",r=O(),s=E("form"),s.innerHTML=`<input class="block p-3 rounded border mb-2 w-full" type="file" name="image" id="image" accept="image/png, image/jpeg, image/webp, image/gif"/> 
        <input class="block p-3 rounded border mb-2 w-full" name="score" type="number" placeholder="Score (out of 100)" max="100" min="0" required=""/> 
        <textarea class="block p-3 rounded border mb-2 w-full" name="details" placeholder="Thoughts?"></textarea> 
        <button type="submit" class="block bg-blue-600 text-white rounded p-3">Submit Review</button>`,_(n,"class","font-serif text-2xl font-bold mb-4 mt-4")},m(i,c){B(i,e,c),p(e,n),p(e,r),p(e,s),o||(a=Ve(s,"submit",xt(t[0])),o=!0)},p:D,i:D,o:D,d(i){i&&x(e),o=!1,a()}}}function xo(t,e,n){let{params:r={}}=e;async function s(o){const a=new FormData(o.target),i=a.get("image"),c=yo(Ao,To()),l=await bo(c,i),h=await wo(c);console.log(h),console.log("Uploaded a blob or file!",l);let u={rating:a.get("score"),details:a.get("details"),image:h,location:r.location};console.log(u),(await fetch(`${ue.host}/api/ratings`,{method:"POST",body:JSON.stringify(u),headers:{Accept:"application/json","Content-Type":"application/json"}})).ok&&(console.log("Submitted"),push("/"))}return t.$$set=o=>{"params"in o&&n(1,r=o.params)},[s,r]}class Oo extends K{constructor(e){super(),X(this,e,xo,Do,H,{params:1})}}function Bo(t){let e,n,r,s,o;return{c(){e=E("h2"),e.textContent="Add a new bathroom",n=O(),r=E("form"),r.innerHTML=`<input class="block p-3 rounded border mb-2" name="name" type="text" placeholder="Name" required=""/> 
    <input class="block p-3 rounded border mb-2" name="address" type="text" placeholder="Address" required=""/>  
    <button type="submit" class="block bg-blue-600 text-white rounded p-3">Add</button>`,_(e,"class","font-serif text-2xl font-bold mb-4 mt-4"),_(r,"method","POST"),_(r,"action","#"),_(r,"class","flex flex-col")},m(a,i){B(a,e,i),B(a,n,i),B(a,r,i),s||(o=Ve(r,"submit",xt(t[0])),s=!0)},p:D,i:D,o:D,d(a){a&&x(e),a&&x(n),a&&x(r),s=!1,o()}}}function $o(t){async function e(n){const r=new FormData(n.target);console.log(r);let s={name:r.get("name"),address:r.get("address"),lat:0,long:0};console.log(s),(await fetch(`${ue.host}/api/locations`,{method:"POST",body:JSON.stringify(s),headers:{Accept:"application/json","Content-Type":"application/json"}})).ok&&console.log("Submitted"),Bn("/")}return[e]}class Po extends K{constructor(e){super(),X(this,e,$o,Bo,H,{})}}function No(t){let e,n,r,s,o,a,i,c,l,h,u,m,d,b;return u=new Ln({props:{routes:{"/":Wn,"/locations/:location":Xn,"/locations/:location/review":Oo,"/add":Po}}}),{c(){e=E("div"),n=E("h1"),r=E("a"),r.textContent="Rate-a-loo",s=O(),o=E("a"),o.textContent="Back",a=O(),i=E("a"),i.textContent="Add a bathroom",c=O(),l=E("hr"),h=O(),V(u.$$.fragment),_(r,"href","/"),_(n,"id","title"),_(n,"class","text-4xl font-serif font-black mb-3"),_(o,"class","m-1 p-2 rounded bg-gray-300 mt-4 cursor-pointer"),_(i,"href","/add"),_(i,"class","m-1 p-2 rounded bg-gray-300 mt-4")},m(y,v){B(y,e,v),p(e,n),p(n,r),p(e,s),p(e,o),p(e,a),p(e,i),B(y,c,v),B(y,l,v),B(y,h,v),U(u,y,v),m=!0,d||(b=[we(ye.call(null,r)),Ve(o,"click",t[0]),we(ye.call(null,i))],d=!0)},p:D,i(y){m||(P(u.$$.fragment,y),m=!0)},o(y){L(u.$$.fragment,y),m=!1},d(y){y&&x(e),y&&x(c),y&&x(l),y&&x(h),j(u,y),d=!1,ee(b)}}}function Lo(t){return[()=>{$n()}]}class Mo extends K{constructor(e){super(),X(this,e,Lo,No,H,{})}}new Mo({target:document.getElementById("app")});
