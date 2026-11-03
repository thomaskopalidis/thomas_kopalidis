// Αποθήκευση των αρχείων του site για γρήγορο άνοιγμα και χρήση χωρίς σύνδεση (εκτός από τα πλακίδια του χάρτη)
const V = "ptm-v4";
const FILES = ["./","index.html","app.js","areas.js","lines.js","methodology.html","about.html","privacy.html","manifest.webmanifest","icon-192.png","icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js","https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || /overpass|basemaps|tile\.openstreetmap/.test(u.host)) return;   // ζωντανά δεδομένα: πάντα από το δίκτυο
  // πρώτα το δίκτυο (για να βλέπεις πάντα την τελευταία έκδοση), αλλιώς το αποθηκευμένο
  e.respondWith(fetch(e.request).then(r => { if (r.ok && (u.origin === location.origin || u.host === "cdnjs.cloudflare.com")) { const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); } return r; })
    .catch(() => caches.match(e.request, {ignoreSearch:true})));
});
