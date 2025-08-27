self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("raza-site-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icons/icon-192.png",
        "icons/icon-512.png",
        "downloads/cv-template.docx",
        "downloads/cv-template.pdf",
        "downloads/ppt-template.pptx",
        "downloads/ppt-template2.pptx"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
