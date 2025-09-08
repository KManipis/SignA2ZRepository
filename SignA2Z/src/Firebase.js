// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ ADD THIS
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq-cmiw_pHauINcYQnLdhVOyhGqlWkBRc",
  authDomain: "signala2z.firebaseapp.com",
  projectId: "signala2z",
  storageBucket: "signala2z.appspot.com", // ⚠ fix typo: ".firebasestorage.app" → ".appspot.com"
  messagingSenderId: "724997183385",
  appId: "1:724997183385:web:1edc6a9b789b7ea167a508",
  measurementId: "G-G8D2J46CRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
