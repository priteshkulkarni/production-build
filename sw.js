/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "cfac8a4d5dd26874b2d550813a71eb43"
  },
  {
    "url": "assets/css/bootstrap.min.css",
    "revision": "19bf434bcee4866002a894d098fd2296"
  },
  {
    "url": "assets/css/gradient.css",
    "revision": "3a89e63bcf397e0ac67afc1f3f31c385"
  },
  {
    "url": "assets/css/style.css",
    "revision": "b7d8aca437f64f401a38c45adf378238"
  },
  {
    "url": "assets/image/569f3187dd0895c00d8b46c1-750.jpg",
    "revision": "6fc803fc63cdb43755e59fdec4bb525c"
  },
  {
    "url": "assets/image/avatar2.png",
    "revision": "61d90d84534b510fcd3778198abef4a5"
  },
  {
    "url": "assets/image/back.jpg",
    "revision": "cb7fb157587e115c436900548ccd8675"
  },
  {
    "url": "assets/image/cancel button.png",
    "revision": "8308626d2cd13db887a575d351279aaf"
  },
  {
    "url": "assets/image/chennai.jpeg",
    "revision": "4e7bbda3b15b8dc52a905d31e336aee9"
  },
  {
    "url": "assets/image/cross-3-logo.png",
    "revision": "1f56bcaef9f1dbb51c835e082a1403ec"
  },
  {
    "url": "assets/image/cross-345.png",
    "revision": "eaee2d6382ccb23e8075098481a582c9"
  },
  {
    "url": "assets/image/cross-thin-icon.png",
    "revision": "e65be7570d8b75e56c46e3403bab9f7e"
  },
  {
    "url": "assets/image/cross-thin.png",
    "revision": "0e0c225909abc525076174792aa42cb7"
  },
  {
    "url": "assets/image/demo.jpg",
    "revision": "3daeafcfa45c1f8afa484889b69a8d36"
  },
  {
    "url": "assets/image/google-plus-logo.png",
    "revision": "0af4731128202819d5b8da4f3ef4729a"
  },
  {
    "url": "assets/image/ham4.png",
    "revision": "72129c50a5816dab5347a23b757d88e8"
  },
  {
    "url": "assets/image/ham6.png",
    "revision": "39f8103f402147b7041548c16651a29b"
  },
  {
    "url": "assets/image/hamburger icon.png",
    "revision": "42e21afbb2029c26e234cd132ce25da9"
  },
  {
    "url": "assets/image/list.png",
    "revision": "3b190b589f6e9b7370bdfd2dcd23f55c"
  },
  {
    "url": "assets/image/logo2.png",
    "revision": "dce20ae6371adff0058d73320b119dea"
  },
  {
    "url": "assets/image/tick_green.png",
    "revision": "4e4f22d5bb4da366ca61415e5bf2d5f4"
  },
  {
    "url": "assets/image/xantt logo.png",
    "revision": "5cc248264f1cacfe53d01f268cc2fcfb"
  },
  {
    "url": "assets/js/bootstrap.min.js",
    "revision": "6f1f3b8cfee287ee4971ca0e1dbde8dd"
  },
  {
    "url": "assets/js/jquery.min.js",
    "revision": "710458dd559c957714ac4a8e95357eb5"
  },
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "baf91ba7411e03ba129d1919f16eebc7"
  },
  {
    "url": "manifest.json",
    "revision": "66e0c48b678ed61920015e9e7926bd12"
  },
  {
    "url": "static/css/main.f2184e53.css",
    "revision": "b58013a5c644c83d472045a28cce98ae"
  },
  {
    "url": "static/js/main.92113939.js",
    "revision": "eb888b2ffd17614b3e412ec9651d0435"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
