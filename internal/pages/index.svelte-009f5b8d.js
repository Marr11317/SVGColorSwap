import{S as e,i as t,s as r,e as o,t as l,c as s,a as c,g as i,d as n,J as a,f,H as h,l as d,j as u,m as p,o as y,x as v,u as k,v as g,k as m,K as w,n as x,b as E,L as b,M as $,N as I,w as L,O as U,A,r as N,P,Q as T,R as D,T as H}from"../chunks/vendor-af427fb3.js";import{C as B,r as M}from"../chunks/colorpick-72a94587.js";function O(e,t,r){const o=e.slice();return o[19]=t[r],o}function V(e){let t,r;return{c(){t=o("p"),r=l("Nothing will be modified, since neither the strokes nor the fills will be."),this.h()},l(e){t=s(e,"P",{style:!0});var o=c(t);r=i(o,"Nothing will be modified, since neither the strokes nor the fills will be."),o.forEach(n),this.h()},h(){a(t,"color","red")},m(e,o){f(e,t,o),h(t,r)},d(e){e&&n(t)}}}function S(e){let t,r;return{c(){t=o("p"),r=l("No color found in your svg element\r\n        "),this.h()},l(e){t=s(e,"P",{style:!0});var o=c(t);r=i(o,"No color found in your svg element\r\n        "),o.forEach(n),this.h()},h(){a(t,"margin","24px")},m(e,o){f(e,t,o),h(t,r)},d(e){e&&n(t)}}}function j(e,t){let r,o,l;return o=new B({props:{color:t[19],showHex:t[2],collapse:t[3]}}),o.$on("change",(function(...e){return t[16](t[19],...e)})),{key:e,first:null,c(){r=d(),u(o.$$.fragment),this.h()},l(e){r=d(),p(o.$$.fragment,e),this.h()},h(){this.first=r},m(e,t){f(e,r,t),y(o,e,t),l=!0},p(e,r){t=e;const l={};64&r&&(l.color=t[19]),4&r&&(l.showHex=t[2]),8&r&&(l.collapse=t[3]),o.$set(l)},i(e){l||(v(o.$$.fragment,e),l=!0)},o(e){k(o.$$.fragment,e),l=!1},d(e){e&&n(r),g(o,e)}}}function C(e){let t,r,a,d,u,p,y,g,A,T,D,H,B,M,C,R,F,J,K,Q,W,q,z,G,X,Y,Z,_,ee,te,re,oe,le,se,ce,ie,ne,ae,fe,he,de,ue,pe,ye,ve,ke,ge,me,we,xe,Ee,be,$e=[],Ie=new Map,Le=!e[5]&&!e[4]&&V(),Ue=e[6];const Ae=e=>e[19];for(let o=0;o<Ue.length;o+=1){let t=O(e,Ue,o),r=Ae(t);Ie.set(r,$e[o]=j(r,t))}let Ne=null;return Ue.length||(Ne=S()),{c(){t=o("div"),r=o("div"),a=o("input"),d=m(),u=o("div"),p=o("input"),y=m(),g=o("label"),A=l("collapse"),T=m(),D=o("div"),H=o("input"),B=m(),M=o("label"),C=l("Show Hex"),R=m(),F=o("div"),J=o("input"),K=m(),Q=o("label"),W=l("Modify Strokes"),q=m(),z=o("div"),G=o("input"),X=m(),Y=o("label"),Z=l("Modify Fills"),_=m(),Le&&Le.c(),ee=m(),te=o("button"),re=l("Download Result"),oe=m(),le=o("input"),se=m(),ce=o("div");for(let e=0;e<$e.length;e+=1)$e[e].c();Ne&&Ne.c(),ne=m(),ae=o("div"),fe=w("svg"),he=w("g"),de=w("ellipse"),ue=w("ellipse"),pe=w("ellipse"),ye=w("circle"),ve=w("g"),ke=w("circle"),ge=w("circle"),me=w("circle"),we=w("circle"),this.h()},l(e){t=s(e,"DIV",{class:!0});var o=c(t);r=s(o,"DIV",{class:!0});var l=c(r);a=s(l,"INPUT",{type:!0,accept:!0}),d=x(l),u=s(l,"DIV",{});var f=c(u);p=s(f,"INPUT",{id:!0,type:!0}),y=x(f),g=s(f,"LABEL",{for:!0});var h=c(g);A=i(h,"collapse"),h.forEach(n),f.forEach(n),T=x(l),D=s(l,"DIV",{});var v=c(D);H=s(v,"INPUT",{id:!0,type:!0}),B=x(v),M=s(v,"LABEL",{for:!0});var k=c(M);C=i(k,"Show Hex"),k.forEach(n),v.forEach(n),R=x(l),F=s(l,"DIV",{});var m=c(F);J=s(m,"INPUT",{id:!0,type:!0}),K=x(m),Q=s(m,"LABEL",{for:!0});var w=c(Q);W=i(w,"Modify Strokes"),w.forEach(n),m.forEach(n),q=x(l),z=s(l,"DIV",{});var E=c(z);G=s(E,"INPUT",{id:!0,type:!0}),X=x(E),Y=s(E,"LABEL",{for:!0});var b=c(Y);Z=i(b,"Modify Fills"),b.forEach(n),E.forEach(n),_=x(l),Le&&Le.l(l),ee=x(l),te=s(l,"BUTTON",{});var $=c(te);re=i($,"Download Result"),$.forEach(n),l.forEach(n),oe=x(o),le=s(o,"INPUT",{type:!0,orient:!0,class:!0}),se=x(o),ce=s(o,"DIV",{class:!0,style:!0});var I=c(ce);for(let t=0;t<$e.length;t+=1)$e[t].l(I);Ne&&Ne.l(I),I.forEach(n),o.forEach(n),ne=x(e),ae=s(e,"DIV",{class:!0});var L=c(ae);fe=s(L,"svg",{xmlns:!0,viewBox:!0,"stroke-width":!0},1);var U=c(fe);he=s(U,"g",{fill:!0},1);var N=c(he);de=s(N,"ellipse",{stroke:!0,rx:!0,ry:!0},1),c(de).forEach(n),ue=s(N,"ellipse",{stroke:!0,rx:!0,ry:!0,transform:!0},1),c(ue).forEach(n),pe=s(N,"ellipse",{stroke:!0,rx:!0,ry:!0,transform:!0},1),c(pe).forEach(n),ye=s(N,"circle",{stroke:!0,r:!0},1),c(ye).forEach(n),N.forEach(n),ve=s(U,"g",{fill:!0,stroke:!0},1);var P=c(ve);ke=s(P,"circle",{fill:!0,r:!0},1),c(ke).forEach(n),ge=s(P,"circle",{cy:!0,r:!0},1),c(ge).forEach(n),me=s(P,"circle",{cx:!0,cy:!0,r:!0},1),c(me).forEach(n),we=s(P,"circle",{cx:!0,cy:!0,r:!0},1),c(we).forEach(n),P.forEach(n),U.forEach(n),L.forEach(n),this.h()},h(){E(a,"type","file"),E(a,"accept",".svg"),E(p,"id","collapse"),E(p,"type","checkbox"),E(g,"for","collapse"),E(H,"id","showHex"),E(H,"type","checkbox"),E(M,"for","showHex"),E(J,"id","modifyStrokes"),E(J,"type","checkbox"),E(Q,"for","modifyStrokes"),E(G,"id","modifyFills"),E(G,"type","checkbox"),E(Y,"for","modifyFills"),E(r,"class","specificControls svelte-uvn0yn"),E(le,"type","range"),E(le,"orient","vertical"),E(le,"class","svelte-uvn0yn"),E(ce,"class","colors svelte-uvn0yn"),E(ce,"style",ie=e[3]?"overflow: visible;":"overflow: auto;"),E(t,"class","controls svelte-uvn0yn"),E(de,"stroke","#66899a"),E(de,"rx","6"),E(de,"ry","44"),E(ue,"stroke","#e1d85d"),E(ue,"rx","6"),E(ue,"ry","44"),E(ue,"transform","rotate(-66)"),E(pe,"stroke","#80a3cf"),E(pe,"rx","6"),E(pe,"ry","44"),E(pe,"transform","rotate(66)"),E(ye,"stroke","#4b541f"),E(ye,"r","44"),E(he,"fill","none"),E(ke,"fill","#80a3cf"),E(ke,"r","13"),E(ge,"cy","-44"),E(ge,"r","9"),E(me,"cx","-40"),E(me,"cy","18"),E(me,"r","9"),E(we,"cx","40"),E(we,"cy","18"),E(we,"r","9"),E(ve,"fill","#66899a"),E(ve,"stroke","white"),E(fe,"xmlns","http://www.w3.org/2000/svg"),E(fe,"viewBox","-52 -53 100 100"),E(fe,"stroke-width","2"),E(ae,"class","svgWrapper svelte-uvn0yn")},m(o,l){f(o,t,l),h(t,r),h(r,a),h(r,d),h(r,u),h(u,p),p.checked=e[3],h(u,y),h(u,g),h(g,A),h(r,T),h(r,D),h(D,H),H.checked=e[2],h(D,B),h(D,M),h(M,C),h(r,R),h(r,F),h(F,J),J.checked=e[4],h(F,K),h(F,Q),h(Q,W),h(r,q),h(r,z),h(z,G),G.checked=e[5],h(z,X),h(z,Y),h(Y,Z),h(r,_),Le&&Le.m(r,null),h(r,ee),h(r,te),h(te,re),h(t,oe),h(t,le),b(le,e[0]),h(t,se),h(t,ce);for(let e=0;e<$e.length;e+=1)$e[e].m(ce,null);Ne&&Ne.m(ce,null),f(o,ne,l),f(o,ae,l),h(ae,fe),h(fe,he),h(he,de),h(he,ue),h(he,pe),h(he,ye),h(fe,ve),h(ve,ke),h(ve,ge),h(ve,me),h(ve,we),e[17](ae),xe=!0,Ee||(be=[$(a,"change",e[7]),$(p,"change",e[11]),$(H,"change",e[12]),$(J,"change",e[13]),$(G,"change",e[14]),$(te,"click",e[9]),$(le,"change",e[15]),$(le,"input",e[15])],Ee=!0)},p(e,[t]){8&t&&(p.checked=e[3]),4&t&&(H.checked=e[2]),16&t&&(J.checked=e[4]),32&t&&(G.checked=e[5]),e[5]||e[4]?Le&&(Le.d(1),Le=null):Le||(Le=V(),Le.c(),Le.m(r,ee)),1&t&&b(le,e[0]),332&t&&(Ue=e[6],N(),$e=I($e,t,Ae,1,e,Ue,Ie,ce,P,j,null,O),L(),Ue.length?Ne&&(Ne.d(1),Ne=null):Ne||(Ne=S(),Ne.c(),Ne.m(ce,null))),(!xe||8&t&&ie!==(ie=e[3]?"overflow: visible;":"overflow: auto;"))&&E(ce,"style",ie)},i(e){if(!xe){for(let e=0;e<Ue.length;e+=1)v($e[e]);xe=!0}},o(e){for(let t=0;t<$e.length;t+=1)k($e[t]);xe=!1},d(r){r&&n(t),Le&&Le.d();for(let e=0;e<$e.length;e+=1)$e[e].d();Ne&&Ne.d(),r&&n(ne),r&&n(ae),e[17](null),Ee=!1,U(be)}}}function R(e,t,r){let o,l,s=60,c=!1,i=!1,n=!0,a=!0,f={};function h(e){let t=e.style.fill;if(""===t&&(t=e.getAttribute("fill")),t&&"none"!==t&&""!==t){const o=H(t).hex().toUpperCase();f.hasOwnProperty(o)?f[o].filled.push(e):r(10,f[o]={filled:[e],stroked:[]},f)}let o=e.style.stroke;if(""===o&&(o=e.getAttribute("stroke")),o&&"none"!==o&&""!==o){const t=H(o).hex().toUpperCase();f.hasOwnProperty(t)?f[t].stroked.push(e):r(10,f[t]={filled:[],stroked:[e]},f)}}function d(e,t){if(e=e.toUpperCase(),t=t.toUpperCase(),f.hasOwnProperty(e)){if(a){const r=f[e].filled;for(const e of r)e.style.fill="",e.setAttribute("fill",t)}if(n){const r=f[e].stroked;for(const e of r)e.style.stroke="",e.setAttribute("stroke",t)}}}A((()=>{M(l,h),r(10,f)}));return e.$$.update=()=>{1024&e.$$.dirty&&r(6,o=Array.from(Object.keys(f))),3&e.$$.dirty&&l&&l.setAttribute("style","height: "+s+"vh")},[s,l,c,i,n,a,o,function(e){const t=e.target.files[0],o=new FileReader;o.onload=e=>{if("string"!=typeof e.target.result)return void console.error("Error reading file");const t=e.target.result;r(1,l.innerHTML=t,l),r(10,f={}),M(l,h),Object.keys(f).length>10&&r(3,i=!0),r(10,f)},o.readAsText(t)},d,function(){const e=l.outerHTML,t=new Blob([e],{type:"image/svg+xml"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download="recolored.svg",o.click()},f,function(){i=this.checked,r(3,i)},function(){c=this.checked,r(2,c)},function(){n=this.checked,r(4,n)},function(){a=this.checked,r(5,a)},function(){s=T(this.value),r(0,s)},(e,t)=>d(e,t.detail.color),function(e){D[e?"unshift":"push"]((()=>{l=e,r(1,l)}))}]}class F extends e{constructor(e){super(),t(this,e,R,C,r,{})}}export{F as default};
