// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7D-1-u-Luy8GlgpS-e2aamtr5Y6ov544",
  authDomain: "tik-tok---jornada-ba383.firebaseapp.com",
  projectId: "tik-tok---jornada-ba383",
  storageBucket: "tik-tok---jornada-ba383.appspot.com",
  messagingSenderId: "837615590977",
  appId: "1:837615590977:web:d4309785c56acc9dc970c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;