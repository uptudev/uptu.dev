import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth, UserCredential } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0k19XghJYR5gkyjQLJzcSE2TBtd8Twac",
    authDomain: "uptu-50412.firebaseapp.com",
    projectId: "uptu-50412",
    storageBucket: "uptu-50412.appspot.com",
    messagingSenderId: "770635266402",
    appId: "1:770635266402:web:984d8ae2451d97fa74943b"
};

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