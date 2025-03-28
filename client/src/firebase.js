import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-abb57.firebaseapp.com",
  projectId: "mern-estate-abb57",
  storageBucket: "mern-estate-abb57.firebasestorage.app",
  messagingSenderId: "206232449242",
  appId: "1:206232449242:web:1c941532f4fd9b25b875e3"
};
export const app = initializeApp(firebaseConfig);