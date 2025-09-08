// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq-cmiw_pHauINcYQnLdhVOyhGqlWkBRc",
  authDomain: "signala2z.firebaseapp.com",
  projectId: "signala2z",
  storageBucket: "signala2z.appspot.com",
  messagingSenderId: "724997183385",
  appId: "1:724997183385:web:abcdef123456", // 👈 grab this from Firebase Console (Web app config)
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
