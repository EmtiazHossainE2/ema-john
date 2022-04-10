// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaGwjLePwb0UNpFmuXtR32Ji2nTPBpcgY",
    authDomain: "ema-john-responsive.firebaseapp.com",
    projectId: "ema-john-responsive",
    storageBucket: "ema-john-responsive.appspot.com",
    messagingSenderId: "904010214141",
    appId: "1:904010214141:web:0b32b1f29b4568bb35ec94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;