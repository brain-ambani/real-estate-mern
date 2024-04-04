// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d4999.firebaseapp.com",
  projectId: "mern-estate-d4999",
  storageBucket: "mern-estate-d4999.appspot.com",
  messagingSenderId: "184533340305",
  appId: "1:184533340305:web:df974cdf1cf658be7f6f30",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
