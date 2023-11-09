import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtoiqvp3Ks9DpTM9RflqUjd5BpcLEUb-Q",
  authDomain: "test-blog-85710.firebaseapp.com",
  projectId: "test-blog-85710",
  storageBucket: "test-blog-85710.appspot.com",
  messagingSenderId: "1034524560715",
  appId: "1:1034524560715:web:e9127be371f66257ecacce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);