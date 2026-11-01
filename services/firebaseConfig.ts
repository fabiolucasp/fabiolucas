import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth for authentication

// NOTA PARA FÁBIO LUCAS:
// Substitua as variáveis abaixo pelas chaves do seu projeto Firebase.
// Como boas práticas, utilize variáveis de ambiente (.env) no projeto real.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "YOUR_FIREBASE_API_KEY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-YOUR_MEASUREMENT_ID"
};

// Inicialização condicional para evitar erros no ambiente de preview
let app;
let analytics;
let db;
let auth; // Declare auth variable

try {
    // Verifica se estamos em um ambiente onde podemos inicializar (ex: não SSR sem config)
    // E se a API Key não é o placeholder padrão.
    if (typeof window !== 'undefined' && firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
        app = initializeApp(firebaseConfig);
        analytics = getAnalytics(app);
        db = getFirestore(app);
        auth = getAuth(app); // Initialize Auth
        console.log("Firebase initialized successfully");
    } else {
        console.warn("Firebase config placeholder or non-browser environment detected. Skipping full initialization.");
    }
} catch (e) {
    console.error("Error initializing Firebase:", e);
}

export { app, analytics, db, auth }; // Export auth
