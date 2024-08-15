// src/serviceWorkerRegistration.js

// This optional code is used to register a service worker.
// Note this is different from CRA's built-in service worker functionality
// which may not be directly accessible in the latest CRA versions.

// The default export should be a function to register the Service Worker
export function register(config) {
    if ('serviceWorker' in navigator) {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
      window.addEventListener('load', () => {
        const swRegistration = navigator.serviceWorker.register(swUrl).then((registration) => {
          console.log('Service Worker registrado con éxito:', registration);
          // Perform some additional tasks like notifying user or syncing
        }).catch((error) => {
          console.log('Error al registrar el Service Worker:', error);
        });
      });
    }
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  