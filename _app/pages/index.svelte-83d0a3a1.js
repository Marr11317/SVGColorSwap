import{S as t,i as e,s as l,J as n,e as s,c as a,a as r,d as o,b as i,f as c,K as f,j as g,k as u,m as h,n as d,L as p,o as m,H as v,M as y,N as x,t as k,g as $,x as b,u as E,v as T,O as N,P as w,Q as M,R as S}from"../chunks/vendor-1dc3c5cc.js";function A(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function I(t){let e,l;return{c(){e=s("p"),l=k("No color found in your svg element\n        "),this.h()},l(t){e=a(t,"P",{style:!0});var n=r(e);l=$(n,"No color found in your svg element\n        "),n.forEach(o),this.h()},h(){p(e,"margin","24px")},m(t,n){c(t,e,n),v(e,l)},d(t){t&&o(e)}}}function j(t,e){let l,n,g,u;function h(){return e[6](e[12])}return{key:t,first:null,c(){l=s("button"),this.h()},l(t){l=a(t,"BUTTON",{class:!0,style:!0}),r(l).forEach(o),this.h()},h(){i(l,"class","colorButton svelte-17ynm7t"),i(l,"style",n="background-color: "+e[10]+"; "+(e[4]===e[12]?"border: 2px solid black;":"padding: 2px;")),this.first=l},m(t,e){c(t,l,e),g||(u=f(l,"click",h),g=!0)},p(t,s){e=t,17&s&&n!==(n="background-color: "+e[10]+"; "+(e[4]===e[12]?"border: 2px solid black;":"padding: 2px;"))&&i(l,"style",n)},d(t){t&&o(l),g=!1,u()}}}function C(t){let e;return{c(){e=s("div"),this.h()},l(t){e=a(t,"DIV",{class:!0}),r(e).forEach(o),this.h()},h(){i(e,"class","svgWrapper svelte-17ynm7t")},m(l,n){c(l,e,n),e.innerHTML=t[1],t[8](e)},p(t,l){2&l&&(e.innerHTML=t[1])},d(l){l&&o(e),t[8](null)}}}function D(t){let e,l,k,$,M,S,D,H,L,O,P,R,V=[],B=new Map;l=new n({props:{startColor:t[0][t[4]]}}),l.$on("colorChange",t[5]);let U=t[0];const J=t=>t[10];for(let n=0;n<U.length;n+=1){let e=A(t,U,n),l=J(e);B.set(l,V[n]=j(l,e))}let K=null;U.length||(K=I());let Q=t[1]&&C(t);return{c(){e=s("div"),g(l.$$.fragment),k=u(),$=s("div");for(let t=0;t<V.length;t+=1)V[t].c();K&&K.c(),M=u(),S=s("input"),D=u(),Q&&Q.c(),H=u(),L=s("textarea"),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=r(e);h(l.$$.fragment,n),k=d(n),$=a(n,"DIV",{style:!0});var s=r($);for(let e=0;e<V.length;e+=1)V[e].l(s);K&&K.l(s),s.forEach(o),M=d(n),S=a(n,"INPUT",{type:!0,orient:!0,class:!0}),n.forEach(o),D=d(t),Q&&Q.l(t),H=d(t),L=a(t,"TEXTAREA",{class:!0}),r(L).forEach(o),this.h()},h(){p($,"display","flex"),p($,"flex-direction","column"),p($,"align-items","center"),p($,"text-align","center"),p($,"flex-grow","2"),p($,"margin","12px"),p($,"justify-content","center"),p($,"max-height","300px"),p($,"overflow","auto"),i(S,"type","range"),i(S,"orient","vertical"),i(S,"class","svelte-17ynm7t"),i(e,"class","controls svelte-17ynm7t"),i(L,"class","svelte-17ynm7t")},m(n,s){c(n,e,s),m(l,e,null),v(e,k),v(e,$);for(let t=0;t<V.length;t+=1)V[t].m($,null);K&&K.m($,null),v(e,M),v(e,S),y(S,t[2]),c(n,D,s),Q&&Q.m(n,s),c(n,H,s),c(n,L,s),y(L,t[1]),O=!0,P||(R=[f(S,"change",t[7]),f(S,"input",t[7]),f(L,"input",t[9])],P=!0)},p(t,[e]){const n={};17&e&&(n.startColor=t[0][t[4]]),l.$set(n),17&e&&(U=t[0],V=x(V,e,J,1,t,U,B,$,w,j,null,A),U.length?K&&(K.d(1),K=null):K||(K=I(),K.c(),K.m($,null))),4&e&&y(S,t[2]),t[1]?Q?Q.p(t,e):(Q=C(t),Q.c(),Q.m(H.parentNode,H)):Q&&(Q.d(1),Q=null),2&e&&y(L,t[1])},i(t){O||(b(l.$$.fragment,t),O=!0)},o(t){E(l.$$.fragment,t),O=!1},d(t){t&&o(e),T(l);for(let e=0;e<V.length;e+=1)V[e].d();K&&K.d(),t&&o(D),Q&&Q.d(t),t&&o(H),t&&o(L),P=!1,N(R)}}}function H(t,e,l){let n,s=["#000000"],a=0,r="",o=60;return t.$$.update=()=>{if(3&t.$$.dirty){const t=[/fill:(#[a-f0-9]{3})/gi,/fill:(#[a-f0-9]{4})/gi,/fill:(#[a-f0-9]{6})/gi,/fill:(#[a-f0-9]{8})/gi,/fill="(#[a-f0-9]{3})"/gi,/fill="(#[a-f0-9]{4})"/gi,/fill="(#[a-f0-9]{6})"/gi,/fill="(#[a-f0-9]{8})"/gi,/stroke:(#[a-f0-9]{3})"/gi,/stroke:(#[a-f0-9]{4})"/gi,/stroke:(#[a-f0-9]{6})"/gi,/stroke:(#[a-f0-9]{8})"/gi,/stroke="(#[a-f0-9]{3})"/gi,/stroke="(#[a-f0-9]{4})"/gi,/stroke="(#[a-f0-9]{6})"/gi,/stroke="(#[a-f0-9]{8})"/gi];for(const e of t){const t=[...r.matchAll(e)];if(t.length)for(const e of t)-1===s.indexOf(e[1])&&s.push(e[1])}l(0,s=[...s])}12&t.$$.dirty&&n&&n.setAttribute("style","height: "+o+"vh")},[s,r,o,n,a,function(t){const{r:e,g:n,b:o,a:i}=t.detail,c=function(t,e,l,n){return t=t.toString(16),e=e.toString(16),l=l.toString(16),n=Math.ceil(255*n).toString(16),1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==l.length&&(l="0"+l),1==n.length&&(n="0"+n),"#"+t+e+l+n}(e,n,o,i);l(1,r=r.replace(new RegExp(s[a],"gi"),c)),l(0,s[a]=c,s)},t=>l(4,a=t),function(){o=M(this.value),l(2,o)},function(t){S[t?"unshift":"push"]((()=>{n=t,l(3,n)}))},function(){r=this.value,l(1,r)}]}class L extends t{constructor(t){super(),e(this,t,H,D,l,{})}}export{L as default};
