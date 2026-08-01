// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

// Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Storage
import { getStorage } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFfktDiAMSaH4O7xmuDfCQ_EIJyqCR1jg",
    authDomain: "our-place-548cb.firebaseapp.com",
    projectId: "our-place-548cb",
    storageBucket: "our-place-548cb.firebasestorage.app",
    messagingSenderId: "811319966726",
    appId: "1:811319966726:web:3cac250ffee0bf8ac99787"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

console.log("Firebase connected!");