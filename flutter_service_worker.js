'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2c017e9b4ebb09570da117ee8527b69a",
"index.html": "ed664b4bac3022aef4af28a8e7727de2",
"/": "ed664b4bac3022aef4af28a8e7727de2",
"main.dart.js": "0f2b83605660eb4408aa5b7398071536",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "33f006afb9fec7b0effb45dc816ae633",
"icons/Icon-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-192.png": "5e2febe0a64d06c624cc1f8d5d1a32ac",
"icons/Icon-maskable-512.png": "97c7dc428a99350aba82964372883671",
"icons/Icon-512.png": "97c7dc428a99350aba82964372883671",
"manifest.json": "021316a807c29602a8d1c6cb532b239d",
".git/config": "8251ff638046e37836705e254ee137fc",
".git/objects/0d/bfffd7822b8507d6e2231b010e0d1be82e7923": "74b9401ce8addea0192083d54624bb5e",
".git/objects/66/dae4166c94ee87e5db5812ffacce009c5b20a3": "cb5083417213306db294241ec8d9fa49",
".git/objects/66/217db4c3c87f133d134cbd40dc8bd2f8029689": "0e8ee7fef12e5a5f258b2c8dab5fa2c9",
".git/objects/9b/d4326c0599e432c1f7aa373cfd875f88957675": "ca6f69547583b032f2975a6c45ee6d2b",
".git/objects/35/835fd46c912be833b3d1fca6027cff4d03be12": "59380a7643c1b47ee8d3bee565b37bff",
".git/objects/69/5fd94c29c9af023666d3a43dd19e38760f790d": "ae0702290000f691ae44639e2f5fc41f",
".git/objects/93/cb014c8b110be9a56f0c493f31d3c8d2b5f3ea": "0c63a2f3b0fca4d9af65d874d789a681",
".git/objects/60/188ef8109bf6528636c6d8d9ca0fc70f332a2f": "77f38ff30f7b5d00f4aedb459c4ba739",
".git/objects/a4/f9d773900d07cb2d5039f625e1af7922860386": "2ee49c3e1dfd23de77dfb41237242bbd",
".git/objects/b2/62f5393fd61c1c950fc580bd478e3a62756864": "0c55803490222d2fe60817e8a71ed5c4",
".git/objects/b3/455610437cf68bd8ca7c651e1f11e54e14230e": "806fe02c4a11d306047de1a7cc6563c6",
".git/objects/a5/f92f714b18e7fc56c5974d05b9d8dd5c1c2bfd": "fd232790c1195e18cf635607e28032cf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/edf76cd42c9975d53d9ca5574cbe9ac8cfbd79": "7e0107b7a1c19031033d2c9fc6c37205",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/22bed458101cc2244037005c287ec8698cdc09": "f51797122c3d22c5477e1c9148f82f52",
".git/objects/f2/d1142a7a946f479cd0a006ef1763a62df91504": "c472b7a4caae554a10ffc83c9edfb270",
".git/objects/c6/e9a6eda76f344a220ab98c310cdd337288e018": "fe60c6780d1fafb1bf6854ae154eeb28",
".git/objects/27/3902209c1d5b194b1832451dedfcf2cb1bd670": "7422fe53b416958b0e2fc8f4ab253ffb",
".git/objects/7d/e74f5ebdb59165e863fcd13e2b847b9039e899": "cd3dc075cb568f484f04a83a5ce7c705",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8f/ab620613f9426266815bb78f8ef11fc9122327": "226222e5972d910a3f15ff7a5eae1699",
".git/objects/75/ddc73cb68fa5bde560a3431570c29d3d9a3694": "30e9d5333b1050d5f4b6606eb6f4b752",
".git/objects/86/c771804476e9d7a3a314998fe3b804f15d6d25": "e4795aa88bd13cdedaed8f20c931b9e0",
".git/objects/9f/26ed079f47b66fcaf26ef8e797c11c6fe3f6e9": "16042da9beb4660e61c93d8ce0d11033",
".git/objects/07/e20faa34f3bdf9f7b670f07064d6a1e0222fb8": "b8db98b76bac6bb6f965b3d6c9d1feb6",
".git/objects/5c/3421fa3bc7752569e3ee0135f5f19729c45c45": "8be5e63bce2a49eac6af5e41d025b537",
".git/objects/5d/2947adbade99b58ade04de9d3687e5b574105d": "a89178ca1441af235385ad8b24fd5528",
".git/objects/98/0331cc01ca787ea7d4ec17dfc7a8c7ada5ae1a": "a7e84a05a170d0f5edefd9ed666415a0",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/52/b66cbcf186735a86c129dd23e512ad3048db47": "c59ef545f73f0b6be995863a11d6b56b",
".git/objects/55/3727ecec70df6d98e66070c045bbd974ebf2f5": "c299753e9d6931ea2e7b8644bd866603",
".git/objects/97/efcf2e626d3e2362b5f8052c95abbe8df71c3f": "3f2c8f0918f60246cf2153674c239f34",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d4/aae314ce17b4a3091cce37a8e3119ef45b97a4": "5f5f20d76528536bed255dd8b4c36dd7",
".git/objects/a7/21c05f9f5de5ff1a85eaab00180a00c8a7b2c7": "b51f277e8792021342910b5e13a49f9f",
".git/objects/b1/268069b508fc245906f4a98c31150edb72e423": "7da022a143d98ced793ea210ec788473",
".git/objects/b1/b5467ae4ccde4fd0131727910ba52c7744cdc7": "72ddcf055e42b63fdeec3471faf370ce",
".git/objects/a9/cb67eae0b019f68795e478bd43c34d3f9470d2": "afb9b4a6d7d6ad7092b2621d92e1c891",
".git/objects/a9/4feebcf0946d54fff157ee0ac3541c0c75926a": "f3d28ab13b7a95f9fab028f10117d07c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/9d2fd602f4184fe43738206523fa37d1a5f5cf": "5186dbd67cc60b44e0ce3403ae2665d5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ed10029649596f7b156f56de421ed960ed70c1": "a9af27a99798c9ee9e35b883efd69af2",
".git/objects/c4/113d43a430c416a28b60eaa5ab8b020d5585d4": "797d4902867824704f4f22dec0b4ea27",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/0538240e5b60f345d652f3f0f7379b4e3f2ce6": "1397a0fc2687b47723c35f2fd16a3817",
".git/objects/f0/e9c692b4be3862fde6fdbe653c7cc201c58f28": "3eb67c8bc1df2f99ed5702e7ac74b93a",
".git/objects/e8/821219bbb115752fc74ce99894bba493d908ab": "f21caa6a4959e2ae1558167c06a9dc0c",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/31c234db6bbafddab048dc18c88c2a9783de47": "d5e6ac9be836823cdc6db3e927dd139c",
".git/objects/4a/bc06604413f023fb6299182fde47ce517bb7db": "311f55c3ab99cd02d33d4be4eb8606d8",
".git/objects/4f/2f307bec6e6943417f9eba886c040c124a1173": "cdc858db792f576aca03d357b7557341",
".git/objects/2e/6d8a369802834be86b7b2d01c97ccd5b0305cb": "e4e3d977254d246055f92a35514ad8e3",
".git/objects/2b/e4b8406da953f010f10167ccdb514f2392fbd6": "63771e6cd2d886260fafb938c5337a5b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/63081d5b56872dd0ea902496a8ad98a950343d": "73d214e6006829b24ebfff2f74642200",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12d5dcc0af7abbb00b409beadc7f4a1b",
".git/logs/refs/heads/main": "12d5dcc0af7abbb00b409beadc7f4a1b",
".git/logs/refs/remotes/origin/main": "a29d565567e79c443ed0467cc47cb279",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c5e65272e1526400b0ad95b08d3822a5",
".git/refs/remotes/origin/main": "c5e65272e1526400b0ad95b08d3822a5",
".git/index": "f6da1d9b47de38f9edd806b62b4704b0",
".git/COMMIT_EDITMSG": "a09e06fef615dbbca7562a9e01b47b76",
".git/FETCH_HEAD": "68002af0dbcc827cf80babf51c19bc1c",
"assets/AssetManifest.json": "91b791d199642539f9d48a5e7425ffd7",
"assets/NOTICES": "adfb116f066638f358c433452398b9b0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "87886eaac04ea6e4d7b46350184e7426",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo_cf.png": "78895528f56f8fcdeca7c239b98b25a4",
"assets/assets/images/logo_aki.png": "a6858205497287afe7faa07e2287325d",
"assets/assets/images/logo_cf_img.png": "8cb8f25a2e220bb473c83582ef0aa70f",
"assets/assets/images/post_qr.jpg": "064db18d953a62570e553580cb50b606",
"assets/assets/images/background.jpg": "b4b895c5c6a1916b909003b435223399",
"assets/assets/images/post_img.jpg": "edc0168fd1d27b061691a2c9e8838ab7",
"assets/assets/images/promo_img.png": "ae3a64c19ec7f60e1728115ace6f1453",
"assets/assets/images/logo_cf%2520copy.png": "462471abe934e764fdacf7a1279673ac",
"assets/assets/images/logo_jugueton.png": "87caa44388cf535632548ed7b2904c7f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
