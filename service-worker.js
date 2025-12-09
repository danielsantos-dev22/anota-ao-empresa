const CACHE_VERSION = Date.now().toString();
const CACHE_NAME = `anotacoes-cache-${CACHE_VERSION}`;

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

// Instalação: cria cache novo sempre que fizer deploy
self.addEventListener("install", (event) => {
  self.skipWaiting(); // força instalação imediata
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Ativação: limpa caches antigos automaticamente
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // ativa nova versão instantaneamente
});

// Estratégia de cache: network first, fallback cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Atualiza cache com a resposta nova
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      })
      .catch(() => caches.match(event.request)) // offline fallback
  );
});
