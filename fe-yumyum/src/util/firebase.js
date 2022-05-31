// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5X7cmr6jkZIISAfoRuzOmLiMMEFZGSHc",
  authDomain: "restorantyumyum-c02a6.firebaseapp.com",
  databaseURL:
    "https://restorantyumyum-c02a6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "restorantyumyum-c02a6",
  storageBucket: "gs://restorantyumyum-c02a6.appspot.com",
  messagingSenderId: "77404571594",
  appId: "1:77404571594:web:6b3e18723a5bafc0f4f133",
  measurementId: "G-YD12D41QX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
