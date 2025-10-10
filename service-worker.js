const CACHE_NAME = "rpg-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./js/rpg_core.js",
  "./js/rpg_managers.js",
  "./js/rpg_objects.js",
  "./js/rpg_scenes.js",
  "./js/rpg_sprites.js",
  "./js/rpg_windows.js",
  "./data/System.json",
  // Add more assets as needed (images, audio, etc.)
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
