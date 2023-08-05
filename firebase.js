// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG3jN0EeJaKKZd85Ml-9HRz_OaX3dZ0uo",
  authDomain: "thoughts-social-aea58.firebaseapp.com",
  projectId: "thoughts-social-aea58",
  storageBucket: "thoughts-social-aea58.appspot.com",
  messagingSenderId: "663095474934",
  appId: "1:663095474934:web:028d4180abd853dfa74ad7",
  measurementId: "G-ENQC6BNWY0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
