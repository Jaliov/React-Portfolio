"use strict";var precacheConfig=[["/React-Portfolio/index.html","451834d81ad4f362bed2735217ff8081"],["/React-Portfolio/static/css/main.5d26b29d.css","05590fefd48713cdb545eedd991bb6ca"],["/React-Portfolio/static/js/main.a8e84501.js","33ce9f260d5d57b7c82081eb371b0b57"],["/React-Portfolio/static/media/Burger-Logger.21895e68.jpg","21895e68e570ae8c38ac0b471219c559"],["/React-Portfolio/static/media/Code_QuizImage.f2606fae.jpg","f2606faea34129be10922268f5493b66"],["/React-Portfolio/static/media/FlipcardsImage.3fafa777.jpg","3fafa77731d734903fd21846f6125241"],["/React-Portfolio/static/media/HipGrandpaImage.f6b162c9.jpg","f6b162c9531f409d11ba5a2fb1079a18"],["/React-Portfolio/static/media/JoelatBarron_2016cropped.79c32a3a.jpg","79c32a3a758fa0672248f152d94583a8"],["/React-Portfolio/static/media/LisabflamencoScreenshot.e2cdbf50.jpg","e2cdbf50d64b0270af7588d5482c34fa"],["/React-Portfolio/static/media/WeatherAppImage.b0bd08a2.jpg","b0bd08a21323254a69688196f5d19ba6"],["/React-Portfolio/static/media/WorkdayScheduler.2058d6b7.jpg","2058d6b743089d4e4e6c86bcbaaa3ec1"],["/React-Portfolio/static/media/fanPageImage.adb0ef64.jpg","adb0ef644439401e6b880b019a202fcc"],["/React-Portfolio/static/media/storefrontsColorizedTextureBluetexture.373f94da.jpg","373f94dafceae86e54cc19b73e1b16c1"],["/React-Portfolio/static/media/yellowChatScreenshot.d994c415.jpg","d994c415b88c6a641d92560512b3668b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/React-Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});