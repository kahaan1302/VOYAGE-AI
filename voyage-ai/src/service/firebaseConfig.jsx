// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_APIKEY,
  authDomain: "voyage-ai-1ff5d.firebaseapp.com",
  projectId: "voyage-ai-1ff5d",
  storageBucket: "voyage-ai-1ff5d.firebasestorage.app",
  messagingSenderId: "477400583259",
  appId: "1:477400583259:web:ab65fc4485feef2e8a437e",
  measurementId: "G-PPW37DQ3PX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
