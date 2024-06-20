import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATKqjFsKvEJIQdPIaG3OMilGP4cWmDsG4",
  authDomain: "nexus-student-carpool.firebaseapp.com",
  projectId: "nexus-student-carpool",
  storageBucket: "nexus-student-carpool.appspot.com",
  messagingSenderId: "879920301417",
  appId: "1:879920301417:web:04309ea96728a89ec029f8",
  measurementId: "G-JQMG0LKNM7"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

