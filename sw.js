// King Gnu Hub · Service Worker
// 只缓存 App Shell（HTML + manifest + icons），其余（YouTube/Spotify/CDN）走网络。
// 每次发新版本改这里的 SW_VERSION 触发更新。
const SW_VERSION = "gnuhub-v1.0.0";
const APP_SHELL = [
  "./app-preview.html",
  "./manifest.webmanifest",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg",
  "./icons/icon-1024.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SW_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== SW_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 只处理 GET 同源静态资源；外部资源（Spotify/YouTube/CDN）直接透传
  if (req.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((res) => {
          // stale-while-revalidate
          if (res && res.status === 200 && res.type === "basic") {
            const clone = res.clone();
            caches.open(SW_VERSION).then((c) => c.put(req, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
