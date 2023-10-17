// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth, UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpJSHLszGkpFHNvSCQ-1l7L8az09wNkc0",
  authDomain: "vuetut-7992c.firebaseapp.com",
  databaseURL: "https://vuetut-7992c-default-rtdb.firebaseio.com",
  projectId: "vuetut-7992c",
  storageBucket: "vuetut-7992c.appspot.com",
  messagingSenderId: "1084894783495",
  appId: "1:1084894783495:web:e00a702f6da2cbbf01a2a2",
  measurementId: "G-PYNKKC834H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)

function sign_up(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

function sign_in(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

function sign_out(): Promise<void> {
    return signOut(auth);
}

export { app, auth, db, sign_up, sign_in, sign_out }
