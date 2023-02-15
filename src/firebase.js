import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDuKXcMs0QbKYUK4uhdvvijEN3TgLWb2bY",
  authDomain: "alisha-2002b.firebaseapp.com",
  projectId: "alisha-2002b",
  storageBucket: "alisha-2002b.appspot.com",
  messagingSenderId: "626969287335",
  appId: "1:626969287335:web:72b90b607285d8b7a51982",
  measurementId: "G-V4X64KQ1G5"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();