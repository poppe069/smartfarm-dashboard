import{s as Se,n as ce,o as Ae}from"../chunks/scheduler.c4efabc0.js";import{S as Me,i as Le,g as m,h as _,j as b,f as n,k as p,a as H,E as Ce,D as q,m as R,s as x,e as Ee,n as w,c as C,x as u,o as j}from"../chunks/index.65033d26.js";import{n as N,d as ge}from"../chunks/utils.7c1dc23b.js";function le(h){return(h==null?void 0:h.length)!==void 0?h:Array.from(h)}function be(h,e,l){const t=h.slice();return t[3]=e[l],t[5]=l,t}function He(h,e,l){const t=h.slice();return t[6]=e[l],t}function Ie(h){let e,l="Incoming...";return{c(){e=m("div"),e.textContent=l,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-18ke0pw"&&(e.textContent=l),this.h()},h(){p(e,"class","card font-semibold capitalize text-primary-500")},m(t,i){H(t,e,i)},p:ce,d(t){t&&n(e)}}}function Te(h){let e,l,t='<h4 class="h4">Air Humidity</h4>',i,c,r,a=N(h[6].air_humid)+"",I,D,o,v,s='<h4 class="h4">Light</h4>',g,d,T,S=N(h[6].light)+"",J,K,A,k,re='<h4 class="h4">Soil Humidity</h4>',se,O,P,F=N(h[6].soil_humid)+"",Q,U,M,V,he='<h4 class="h4">Temperature</h4>',ae,y,z,B=N(h[6].temperature)+"",W,X,L,ne,G=ge(h[6].createdAt.toString())+"",Y,ie;return{c(){e=m("div"),l=m("header"),l.innerHTML=t,i=x(),c=m("section"),r=m("span"),I=R(a),D=x(),o=m("div"),v=m("header"),v.innerHTML=s,g=x(),d=m("section"),T=m("span"),J=R(S),K=x(),A=m("div"),k=m("header"),k.innerHTML=re,se=x(),O=m("section"),P=m("span"),Q=R(F),U=x(),M=m("div"),V=m("header"),V.innerHTML=he,ae=x(),y=m("section"),z=m("span"),W=R(B),X=x(),L=m("div"),ne=R("@"),Y=R(G),ie=x(),this.h()},l(f){e=_(f,"DIV",{class:!0});var E=b(e);l=_(E,"HEADER",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-1sowaz8"&&(l.innerHTML=t),i=C(E),c=_(E,"SECTION",{class:!0});var oe=b(c);r=_(oe,"SPAN",{class:!0});var de=b(r);I=w(de,a),de.forEach(n),oe.forEach(n),E.forEach(n),D=C(f),o=_(f,"DIV",{class:!0});var Z=b(o);v=_(Z,"HEADER",{class:!0,"data-svelte-h":!0}),q(v)!=="svelte-69441z"&&(v.innerHTML=s),g=C(Z),d=_(Z,"SECTION",{class:!0});var fe=b(d);T=_(fe,"SPAN",{class:!0});var ue=b(T);J=w(ue,S),ue.forEach(n),fe.forEach(n),Z.forEach(n),K=C(f),A=_(f,"DIV",{class:!0});var $=b(A);k=_($,"HEADER",{class:!0,"data-svelte-h":!0}),q(k)!=="svelte-yoa43b"&&(k.innerHTML=re),se=C($),O=_($,"SECTION",{class:!0});var ve=b(O);P=_(ve,"SPAN",{class:!0});var me=b(P);Q=w(me,F),me.forEach(n),ve.forEach(n),$.forEach(n),U=C(f),M=_(f,"DIV",{class:!0});var ee=b(M);V=_(ee,"HEADER",{class:!0,"data-svelte-h":!0}),q(V)!=="svelte-7at1qh"&&(V.innerHTML=he),ae=C(ee),y=_(ee,"SECTION",{class:!0});var _e=b(y);z=_(_e,"SPAN",{class:!0});var pe=b(z);W=w(pe,B),pe.forEach(n),_e.forEach(n),ee.forEach(n),X=C(f),L=_(f,"DIV",{class:!0});var te=b(L);ne=w(te,"@"),Y=w(te,G),ie=C(te),te.forEach(n),this.h()},h(){p(l,"class","card-header"),p(r,"class","text-4xl"),p(c,"class","mb-4"),p(e,"class","card p-2 variant-filled-primary"),p(v,"class","card-header"),p(T,"class","text-4xl"),p(d,"class","mb-4"),p(o,"class","card p-2 variant-filled-primary"),p(k,"class","card-header"),p(P,"class","text-4xl"),p(O,"class","mb-4"),p(A,"class","card p-2 variant-filled-primary"),p(V,"class","card-header"),p(z,"class","text-4xl"),p(y,"class","mb-4"),p(M,"class","card p-2 variant-filled-primary"),p(L,"class","text-gray-600 dark:txt-gray-400e text-left")},m(f,E){H(f,e,E),u(e,l),u(e,i),u(e,c),u(c,r),u(r,I),H(f,D,E),H(f,o,E),u(o,v),u(o,g),u(o,d),u(d,T),u(T,J),H(f,K,E),H(f,A,E),u(A,k),u(A,se),u(A,O),u(O,P),u(P,Q),H(f,U,E),H(f,M,E),u(M,V),u(M,ae),u(M,y),u(y,z),u(z,W),H(f,X,E),H(f,L,E),u(L,ne),u(L,Y),u(L,ie)},p(f,E){E&1&&a!==(a=N(f[6].air_humid)+"")&&j(I,a),E&1&&S!==(S=N(f[6].light)+"")&&j(J,S),E&1&&F!==(F=N(f[6].soil_humid)+"")&&j(Q,F),E&1&&B!==(B=N(f[6].temperature)+"")&&j(W,B),E&1&&G!==(G=ge(f[6].createdAt.toString())+"")&&j(Y,G)},d(f){f&&(n(e),n(D),n(o),n(K),n(A),n(U),n(M),n(X),n(L))}}}function De(h){let e,l='<hr class="!border-t-8 !border-double"/>';return{c(){e=m("div"),e.innerHTML=l,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-k1og6n"&&(e.innerHTML=l),this.h()},h(){p(e,"class","pt-8 pb-8")},m(t,i){H(t,e,i)},d(t){t&&n(e)}}}function xe(h){let e,l,t=h[3].name+"",i,c,r,a,I,D=le(h[3].Result),o=[];for(let s=0;s<D.length;s+=1)o[s]=Te(He(h,D,s));let v=h[0].length>1&&h[0].length!==h[5]+1&&De();return{c(){e=m("div"),l=m("h2"),i=R(t),c=x(),r=m("section");for(let s=0;s<o.length;s+=1)o[s].c();a=x(),v&&v.c(),I=Ee(),this.h()},l(s){e=_(s,"DIV",{class:!0});var g=b(e);l=_(g,"H2",{class:!0});var d=b(l);i=w(d,t),d.forEach(n),g.forEach(n),c=C(s),r=_(s,"SECTION",{class:!0});var T=b(r);for(let S=0;S<o.length;S+=1)o[S].l(T);T.forEach(n),a=C(s),v&&v.l(s),I=Ee(),this.h()},h(){p(l,"class","h2"),p(e,"class","pb-4"),p(r,"class","grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-token")},m(s,g){H(s,e,g),u(e,l),u(l,i),H(s,c,g),H(s,r,g);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(r,null);H(s,a,g),v&&v.m(s,g),H(s,I,g)},p(s,g){if(g&1&&t!==(t=s[3].name+"")&&j(i,t),g&1){D=le(s[3].Result);let d;for(d=0;d<D.length;d+=1){const T=He(s,D,d);o[d]?o[d].p(T,g):(o[d]=Te(T),o[d].c(),o[d].m(r,null))}for(;d<o.length;d+=1)o[d].d(1);o.length=D.length}s[0].length>1&&s[0].length!==s[5]+1?v||(v=De(),v.c(),v.m(I.parentNode,I)):v&&(v.d(1),v=null)},d(s){s&&(n(e),n(c),n(r),n(a),n(I)),Ce(o,s),v&&v.d(s)}}}function Ne(h){let e,l=le(h[0]),t=[];for(let c=0;c<l.length;c+=1)t[c]=xe(be(h,l,c));let i=null;return l.length||(i=Ie()),{c(){e=m("main");for(let c=0;c<t.length;c+=1)t[c].c();i&&i.c(),this.h()},l(c){e=_(c,"MAIN",{class:!0});var r=b(e);for(let a=0;a<t.length;a+=1)t[a].l(r);i&&i.l(r),r.forEach(n),this.h()},h(){p(e,"class","m-4")},m(c,r){H(c,e,r);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);i&&i.m(e,null)},p(c,[r]){if(r&1){l=le(c[0]);let a;for(a=0;a<l.length;a+=1){const I=be(c,l,a);t[a]?t[a].p(I,r):(t[a]=xe(I),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length,!l.length&&i?i.p(c,r):l.length?i&&(i.d(1),i=null):(i=Ie(),i.c(),i.m(e,null))}},i:ce,o:ce,d(c){c&&n(e),Ce(t,c),i&&i.d()}}}function ke(h,e,l){let{data:t}=e,i=t.boards;const c=async()=>{const a=await(await fetch("/api/sensor")).json();l(0,i=a)};return Ae(()=>{const r=setInterval(()=>{c()},5e3);return()=>clearInterval(r)}),h.$$set=r=>{"data"in r&&l(1,t=r.data)},[i,t]}class Oe extends Me{constructor(e){super(),Le(this,e,ke,Ne,Se,{data:1})}}export{Oe as component};
