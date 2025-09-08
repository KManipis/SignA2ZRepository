// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq-cmiw_pHauINcYQnLdhVOyhGqlWkBRc",
  authDomain: "signala2z.firebaseapp.com",
  projectId: "signala2z",
  storageBucket: "signala2z.firebasestorage.app",
  messagingSenderId: "724997183385",
  appId: "1:724997183385:web:1edc6a9b789b7ea167a508",
  measurementId: "G-G8D2J46CRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);