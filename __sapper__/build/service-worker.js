!function(){"use strict";const e=1602919996741,t="cache"+e,s=["/client/inject_styles.88de199d.js","/client/index.963619cd.js","/client/index.28aece63.js","/client/[postId].97a0e54a.js","/client/client.4cf19642.js","/client/toastui-editor-viewer.c33b4716.js"].concat(["/service-worker-index.html","/allius-favicon-01.png","/global.css","/logo192.jpg","/logo512.jpg","/manifest.json"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();