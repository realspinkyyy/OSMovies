// service-worker.js

self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'You have a new message!',
        icon: 'icon.png',
        badge: 'badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('New Message', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // You can open the app or take action when the notification is clicked
    event.waitUntil(
        clients.openWindow('/')
    );
});
