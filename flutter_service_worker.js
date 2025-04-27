'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d56793d73e036bca0f7b42ac9615da04",
"version.json": "ea4972c97e4529ac72b25c53254fec9e",
"index.html": "30dadbae1a6ac7b2a408a595b60d99b8",
"/": "30dadbae1a6ac7b2a408a595b60d99b8",
"main.dart.js": "c773fc9fd2da181434ec25f1bb251aee",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "c0f977270c00d44bb9a6543472c3177c",
"icons/Icon-192.png": "2e6571d476a1786ee4234fc99647e230",
"icons/Icon-maskable-192.png": "2e6571d476a1786ee4234fc99647e230",
"icons/Icon-maskable-512.png": "97a36f681b289597b450ac8d1ad64cf5",
"icons/Icon-512.png": "97a36f681b289597b450ac8d1ad64cf5",
"manifest.json": "b1fa34fdf8c77f8596a8791b29b00af2",
"assets/AssetManifest.json": "914ea2796c902d18465267a6b170dc19",
"assets/NOTICES": "aebaaf5122b3f4e93a64ebba527a26dc",
"assets/FontManifest.json": "e959a4020239da7dccbd2847bd89c10a",
"assets/AssetManifest.bin.json": "97e4c921838e649f69678421cf957ed6",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ace5e977d68fe2104ba592b7ebf58df9",
"assets/fonts/MaterialIcons-Regular.otf": "aa4283c2d9bb8261f5bf6a9421d11aca",
"assets/assets/music/summer_park.mp3": "500e49f581463cd018f50adbb3573bde",
"assets/assets/music/CREDITS.TXT": "76c2c10fe9833d945ac41f615fdcca10",
"assets/assets/music/long_away_home.wav": "6ce7a9112bc1a5d279737e16794b86ea",
"assets/assets/images/highlight_yellow.png": "2927cc57ec27b5b3990497caa03a0bea",
"assets/assets/images/whaley_happy.png": "0a52d707c3ce0b763e9d9bed69027a31",
"assets/assets/images/ultimateChampion.png": "a6d015d7b00e19f6f22a63c7ec03cbe2",
"assets/assets/images/bg_splash.png": "1d16b423895b5f92f39b6d82cb4f0154",
"assets/assets/images/black_swabs.png": "b7988b97db4f26d629efa56afd875cde",
"assets/assets/images/whaleBuddy.png": "41171c6395aff3e2fa80394a619a6673",
"assets/assets/images/yellow_tray.png": "bd82ea3829998037492f33a0ffb1073e",
"assets/assets/images/yellow_pot.png": "585b2680981aa263a2f30fb9b1f9d7ec",
"assets/assets/images/bonus_full_row.png": "01c9244c47e3669e0b798682961b9561",
"assets/assets/images/blue_newspaper.png": "b97517c96b82025ced0580f64cdbbf70",
"assets/assets/images/green_apple.png": "8bc0775a938bd291a521cbd1c14bf2ff",
"assets/assets/images/green_nutshell.png": "2e555bbd575c80a877064cb52bb0d680",
"assets/assets/images/blue_towels.png": "d05b8be5e39842dbc7cbb1f5d2e1facd",
"assets/assets/images/bg_clean.png": "b40ef6fc64012bd93aaa24fab60bab99",
"assets/assets/images/blue_carton.png": "372c51ddaaa4a5fbab07d916076dc86f",
"assets/assets/images/red_cleaner.png": "333c01d1ddd405f59c706d13d3e20729",
"assets/assets/images/whaley_sad.png": "0eeb1b6e0b9fc39e5609a917ce6dc01e",
"assets/assets/images/lock.png": "1d595e246f013c8d890cbabeebfba322",
"assets/assets/images/banner.png": "e2cc265b53d068fe3ad44230e83f2c88",
"assets/assets/images/highlight_red.png": "e7068b66376c4a31ffc08a8f686adc48",
"assets/assets/images/highlight_green.png": "e8e82ef0c15cf57dd4ac022f2eb67e4f",
"assets/assets/images/bonus_highspeed.png": "0e6174ad20e4b8ea9d0cc5d834659f68",
"assets/assets/images/blue_paper.png": "db2f2dd876e3c6a091cdebe3733b55fa",
"assets/assets/images/bonus_battery.png": "8c2baf3c1328a7c2345b05b02e39aca7",
"assets/assets/images/black_cup.png": "9a336eb380c6f69e392b1638afaac57a",
"assets/assets/images/highlight_blue.png": "275bf90ed54c67322692c02bc744e660",
"assets/assets/images/ecoWarrior.png": "cfc5ea300cd2a7dd7fa254c83af826df",
"assets/assets/images/red_oil.png": "320120d00fcc266a21e30af581ca6551",
"assets/assets/images/black_shoe.png": "db35c93dad43aadbecaffe01c5449374",
"assets/assets/images/star_blue.png": "53c78e3b92208a9017c54cee4cc2aac3",
"assets/assets/images/black_chips.png": "b719c8263355f5d33aac8eba9ac40d41",
"assets/assets/images/README.md": "542268c3df538d0ff84c881a2ca8019b",
"assets/assets/images/green_bread.png": "25674f74211871ffe0280bf9a00031de",
"assets/assets/images/whaley_neutral.png": "d9bfdd329ee770484dd2af1cf620ed1c",
"assets/assets/images/level.png": "e07597d6c7d9edf629fcc8f0754a1aa1",
"assets/assets/images/logo.png": "657c18d2fe4a0f0e12f733645335361d",
"assets/assets/images/oceanGuardian.png": "c7fdb390c29d8db191021a162bc4ec34",
"assets/assets/images/highlight_black.png": "b80e46b34a6dc05c5e374014fe2b00f6",
"assets/assets/images/yellow_tin.png": "672227cb703e7aa7fb251e47d2b3e119",
"assets/assets/images/yellow_can.png": "5978198c216664ffc2417b20c6b26b5a",
"assets/assets/images/black_dish.png": "eaafe4576fa903aca6d71fa8701f284c",
"assets/assets/images/green_eggshell.png": "f0ba2b8b5cb2aef87e8da0cbbc3db255",
"assets/assets/images/red_phone.png": "6abb94f3ac68697ab251af94300dfd33",
"assets/assets/images/star_gold.png": "cd946ee22a8f27c3448f8df830793079",
"assets/assets/images/yellow_bottle.png": "99871d12ff2d74e2549c3e2d2e86e4ff",
"assets/assets/images/green_leaves.png": "37b6a7c4d24f2bd4cb5a0c95011ea817",
"assets/assets/images/bins.png": "eb3bb0b1b4d4f8a1a84e14653eb1b202",
"assets/assets/images/red_thermometer.png": "0bfa518840fc6e9d8902fa054d8e29a8",
"assets/assets/images/recyclingHero.png": "000490837ef8294eb1812e4dce862346",
"assets/assets/images/blue_box.png": "1a2112f37088c77580f0d9f8c8bf13d5",
"assets/assets/images/bonus_five_rows.png": "0d699264cb1df4aa54c4dadd25214304",
"assets/assets/images/red_danger.png": "578b3c2f68605c5e25e270e1fbee62b6",
"assets/assets/images/whaley_speaking.png": "a28e0477009ee68198e4ee6718524898",
"assets/assets/sfx/whoHoo.m4a": "bff0ddeac3844d5791e0238c5bbc6861",
"assets/assets/sfx/click3.mp3": "23f7ef1589277fc59d0b297db8d0297f",
"assets/assets/sfx/CREDITS.TXT": "9d7cd11ffdcd07e867f7566e13e0fd31",
"assets/assets/sfx/click2.mp3": "e7c23ca3c1bd7c9c3285c9e60f27504c",
"assets/assets/sfx/click1.mp3": "10dfe538c54ddca1d967034637a37cbb",
"assets/assets/sfx/click4.mp3": "fc48c687051776935ee27782a6ee5648",
"assets/assets/sfx/ohNo.m4a": "210a46d71030870566a2de75a766a695",
"assets/assets/json/questions.json": "f21a6d49f04eeb869cc4ef63383bead2",
"assets/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
