// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsgZrxyKnwovHqg-qZNVYOWjHSh2GhihQ",
  authDomain: "twitter-3890d.firebaseapp.com",
  projectId: "twitter-3890d",
  storageBucket: "twitter-3890d.appspot.com",
  messagingSenderId: "849320687667",
  appId: "1:849320687667:web:779b1490012dc971fd8b46",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
