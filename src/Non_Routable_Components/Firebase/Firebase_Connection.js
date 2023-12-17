// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChuuZu6j2NOmlOBjfxIani9_LNhxrirOM",
  authDomain: "hallrentalproject.firebaseapp.com",
  databaseURL:
    "https://hallrentalproject-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hallrentalproject",
  storageBucket: "hallrentalproject.appspot.com",
  messagingSenderId: "485950336004",
  appId: "1:485950336004:web:f74a8c8a54871171031951",
  measurementId: "G-CXG7RKV9SP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase_database = getDatabase(app);
export const firebase_storage = getStorage(app);
export const firebase_authentication = getAuth(app);

onAuthStateChanged(firebase_authentication, (user) => {
  if (user) {
    localStorage.setItem("User Authenticated", "True");
  } else {
    localStorage.setItem("User Authenticated", "False");
  }
});