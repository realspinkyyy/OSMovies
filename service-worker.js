self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

self.addEventListener("push", (event) => {
  const data = event.data.json();
  const title = data.title || "Urgent Message";
  const options = {
    body: data.message,
    icon: "icons/icon-192x192.png",
    badge: "icons/icon-192x192.png",
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
