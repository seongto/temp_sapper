import{S as t,i as e,s as n,e as o,a,t as i,q as c,c as r,d as s,b as l,f as p,h as d,j as u,k as m,l as f,m as h,n as g,o as y,p as E}from"./client.4cf19642.js";function b(t){let e,n,y,E,b,A,T,w,M,_,v,j,I,S,k,x,N,P,$,q,C,V,D,H,J,K,L,O=t[0].title+"";return document.title=e="allius blog | "+t[0].title,{c(){n=o("meta"),E=o("meta"),A=o("meta"),w=o("meta"),_=o("meta"),j=o("meta"),S=o("meta"),x=o("meta"),P=o("meta"),$=o("meta"),q=o("meta"),C=o("link"),V=a(),D=o("h1"),H=i(O),J=i(" 입니다."),K=a(),L=o("div"),this.h()},l(t){const e=c('[data-svelte="svelte-19vqik"]',document.head);n=r(e,"META",{name:!0,content:!0}),E=r(e,"META",{property:!0,content:!0}),A=r(e,"META",{property:!0,content:!0}),w=r(e,"META",{name:!0,content:!0}),_=r(e,"META",{property:!0,content:!0}),j=r(e,"META",{property:!0,content:!0}),S=r(e,"META",{property:!0,content:!0}),x=r(e,"META",{property:!0,content:!0}),P=r(e,"META",{property:!0,content:!0}),$=r(e,"META",{property:!0,content:!0}),q=r(e,"META",{property:!0,content:!0}),C=r(e,"LINK",{rel:!0,type:!0,href:!0}),e.forEach(s),V=l(t),D=r(t,"H1",{});var o=p(D);H=d(o,O),J=d(o," 입니다."),o.forEach(s),K=l(t),L=r(t,"DIV",{class:!0}),p(L).forEach(s),this.h()},h(){u(n,"name","title"),u(n,"content",y="allius blog | "+t[0].title),u(E,"property","og:title"),u(E,"content",b="allius blog | "+t[0].title),u(A,"property","twitter:title"),u(A,"content",T="allius blog | "+t[0].title),u(w,"name","description"),u(w,"content",M=t[0].description),u(_,"property","og:description"),u(_,"content",v=t[0].description),u(j,"property","twitter:description"),u(j,"content",I=t[0].description),u(S,"property","og:image"),u(S,"content",k=t[0].thumnail),u(x,"property","twitter:image"),u(x,"content",N=t[0].thumnail),u(P,"property","og:image:alt"),u(P,"content","allius blog"),u($,"property","twitter:image:alt"),u($,"content","allius blog"),u(q,"property","og:type"),u(q,"content","website"),u(C,"rel","icon"),u(C,"type","image/png"),u(C,"href","/allius-favicon-01.png"),u(L,"class","post-viewer")},m(e,o){m(document.head,n),m(document.head,E),m(document.head,A),m(document.head,w),m(document.head,_),m(document.head,j),m(document.head,S),m(document.head,x),m(document.head,P),m(document.head,$),m(document.head,q),m(document.head,C),f(e,V,o),f(e,D,o),m(D,H),m(D,J),f(e,K,o),f(e,L,o),t[2](L)},p(t,[o]){1&o&&e!==(e="allius blog | "+t[0].title)&&(document.title=e),1&o&&y!==(y="allius blog | "+t[0].title)&&u(n,"content",y),1&o&&b!==(b="allius blog | "+t[0].title)&&u(E,"content",b),1&o&&T!==(T="allius blog | "+t[0].title)&&u(A,"content",T),1&o&&M!==(M=t[0].description)&&u(w,"content",M),1&o&&v!==(v=t[0].description)&&u(_,"content",v),1&o&&I!==(I=t[0].description)&&u(j,"content",I),1&o&&k!==(k=t[0].thumnail)&&u(S,"content",k),1&o&&N!==(N=t[0].thumnail)&&u(x,"content",N),1&o&&O!==(O=t[0].title+"")&&h(H,O)},i:g,o:g,d(e){s(n),s(E),s(A),s(w),s(_),s(j),s(S),s(x),s(P),s($),s(q),s(C),e&&s(V),e&&s(D),e&&s(K),e&&s(L),t[2](null)}}}async function A(t,e){const n=await this.fetch(`blog/${t.params.postId}.json`);await n.json();return{post:{title:"tttt",contents:"aaaaaa"}}}function T(t,e,n){let o,{post:a}=e;return y(async()=>{await Promise.all([import("./toastui-editor-viewer.c33b4716.js"),]).then((function(t){return t[0]})).then((function(t){return t.t})).then(t=>{n(1,o=new t.default({el:o,initialValue:a.contents}))})}),t.$$set=t=>{"post"in t&&n(0,a=t.post)},[a,o,function(t){E[t?"unshift":"push"](()=>{o=t,n(1,o)})}]}export default class extends t{constructor(t){super(),e(this,t,T,b,n,{post:0})}}export{A as preload};
