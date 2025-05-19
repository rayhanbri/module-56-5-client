// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjfUz9ZTPOe-kZtH-y6LWJzA_CiIiFkXw",
  authDomain: "coffee-store-app-c5bfe.firebaseapp.com",
  projectId: "coffee-store-app-c5bfe",
  storageBucket: "coffee-store-app-c5bfe.firebasestorage.app",
  messagingSenderId: "453574319397",
  appId: "1:453574319397:web:e8a3150e9ca50920dfcecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);