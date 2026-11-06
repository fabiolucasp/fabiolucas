// web/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// Suas configurações do Firebase (As mesmas usadas no main.dart)
const firebaseConfig = {
  apiKey: "AIzaSyBKT5ntjiNi_nzuCniIM5mC1K6J-9DKLgc",
  authDomain: "fabiolucasdev-a3ab4.firebaseapp.com",
  projectId: "fabiolucasdev-a3ab4",
  storageBucket: "fabiolucasdev-a3ab4.firebasestorage.app",
  messagingSenderId: "662562416089",
  appId: "1:662562416089:web:50ac1ad5a19407aa57e5c8",
  measurementId: "G-69527BH1CB"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handler para notificações em Background
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Recebeu mensagem em background ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/Icon-192.png', // Certifique-se de ter esse ícone na pasta web/icons
    badge: '/icons/Icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});