'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9b4cacb3509e5aa18e7c012f065a496a",
"assets/AssetManifest.bin.json": "0e09ccd047e5b37a4571b5a46cc2fbed",
"assets/AssetManifest.json": "7fe343c0cd5151b58b5355d480986a79",
"assets/assets/3d_models/human_body.glb": "f1005157520efeb479b84361700f60c9",
"assets/assets/3d_models/MaleCharBaseMesh.glb": "aebb69ac4542420d6b0d2c5932972113",
"assets/assets/lang/en.json": "44bf2a7d068f205b2283aa74f94d7626",
"assets/assets/lang/it.json": "dd2c0879316b4364e5d883ad0049aadc",
"assets/assets/weather_conditions.json": "b0a9d935167fff36d31e265b0e5ea1e6",
"assets/FontManifest.json": "544c266a31446571280e5cd8a1fe9231",
"assets/fonts/MaterialIcons-Regular.otf": "762a9dad6c0d0b91f26ebd7da00023ea",
"assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/imgs/analysis_result.png": "d4715a9c9e02789c31026b1b1ce62886",
"assets/imgs/basalcellcarcinoma.jpg": "2660d65a0dc2e42c2036640e66062c33",
"assets/imgs/bowensdisease.jpg": "c7ae8c561bec8c9ae7956b88d05531a5",
"assets/imgs/defaultimage.jpg": "4598ccbe12b78193e0f42fc3e7273ea6",
"assets/imgs/default_profile_image.png": "d871245d72a8121f465a9107929df3d0",
"assets/imgs/dermatofibroma.jpeg": "a7f7e697c40d87d6b976875a5f1e9edb",
"assets/imgs/dermchecker.png": "d67f99fd11e12b6aa09cfc097c65c2df",
"assets/imgs/google_icon.png": "96c1a6566397efcf7de758fd2a6f116a",
"assets/imgs/healthy_lesion%2520copy.png": "050ecb7ea8407918d075101f6c7245de",
"assets/imgs/healthy_lesion.png": "050ecb7ea8407918d075101f6c7245de",
"assets/imgs/hemangioma.jpg": "67efb7c287be1b7f0490403f7c2e7262",
"assets/imgs/intro-sketch.png": "0fe709695498988b2972ba79807df724",
"assets/imgs/irritated_lesion%2520copy.png": "a6ff127dc65ec41723309fdb4c9d6a83",
"assets/imgs/irritated_lesion.png": "a6ff127dc65ec41723309fdb4c9d6a83",
"assets/imgs/loading.png": "6a666ffb483e892a1502977fb0250356",
"assets/imgs/logo_DermChecker.png": "8af1f7372ac65faeccc47c5b92434d86",
"assets/imgs/logo_DermChecker_arrotondato.png": "75159d60e669808a0ba927f71158658d",
"assets/imgs/map_image.png": "49b3c0e8365f432ad80a640e0af24515",
"assets/imgs/melanocyticnevi.jpg": "08ceebb0f25a3cc98fe419f54d391f7a",
"assets/imgs/melanoma.jpeg": "8a1421737ad44b89a8cb4dfdbcbb9633",
"assets/imgs/menu.png": "4929880ac87d76193f08a62b257856cf",
"assets/imgs/saved_results.png": "bcd984d57109748c93edecf09406eb45",
"assets/imgs/seborrheickeratosis.jpg": "7fde07bba3835dd2a1c7613d9bfa1ebf",
"assets/imgs/skin.png": "1188a1fde3dd739804999292293396d1",
"assets/imgs/skin_scan.png": "ec2afc39e5dd2fc5140e1f5804463c47",
"assets/imgs/splash_screen.png": "798d16452b0e50ba5303c336a4b9f366",
"assets/NOTICES": "b984ad58443583b991eef0342abd841f",
"assets/packages/camerawesome/assets/icons/16_9.png": "ee01c5857314518ac7f3e31d891ae436",
"assets/packages/camerawesome/assets/icons/1_1.png": "9fccda0fa73f4e7870fc9db46a61b8f5",
"assets/packages/camerawesome/assets/icons/4_3.png": "0091aca9a18eb33b968ec3abf62699a3",
"assets/packages/camerawesome/assets/icons/expanded.png": "b8bce8882199b9e134b7b2d102317d3a",
"assets/packages/camerawesome/assets/icons/minimized.png": "1589a3aefe13c85c8bf2296863881c3d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "f8215360fdff66df7659859c72b2ef5e",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "73b4ae3f406f0307a275ffffc2bd33be",
"icons/Icon-192.png": "58508d080b18654d6f47592b5944ae65",
"icons/Icon-512.png": "59eb3c77bc2b76514c6f8544ac990e96",
"icons/Icon-maskable-192.png": "58508d080b18654d6f47592b5944ae65",
"icons/Icon-maskable-512.png": "59eb3c77bc2b76514c6f8544ac990e96",
"index.html": "31bfca26936967983c3492c9e98a6893",
"/": "31bfca26936967983c3492c9e98a6893",
"main.dart.js": "115cedb692cd7bfeadee703d068b5e73",
"manifest.json": "471f7ccec348c1d83250773e756b0f79",
"splash/img/dark-1x.png": "90c06d34e5644cef48cc08a94738b15d",
"splash/img/dark-2x.png": "92a971cc77ae94b554ceff450d04e7e2",
"splash/img/dark-3x.png": "4f40216ca6bb6728a32b298c5890894f",
"splash/img/dark-4x.png": "b0b6c4e7c091e838c9c2cd65d22a8c58",
"splash/img/light-1x.png": "90c06d34e5644cef48cc08a94738b15d",
"splash/img/light-2x.png": "92a971cc77ae94b554ceff450d04e7e2",
"splash/img/light-3x.png": "4f40216ca6bb6728a32b298c5890894f",
"splash/img/light-4x.png": "b0b6c4e7c091e838c9c2cd65d22a8c58",
"version.json": "614779d5c24f47e2340c0e9853aa1e44"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
