import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_zCs_ou2iep12BYNlnhKh-07Ogt1bjvY",
  authDomain: "atharvweb-auth.firebaseapp.com",
  projectId: "atharvweb-auth",
  storageBucket: "atharvweb-auth.appspot.com",
  messagingSenderId: "741213456098",
  appId: "1:741213456098:web:d1670890bc17f689bec0bb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
