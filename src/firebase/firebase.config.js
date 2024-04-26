// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-lNOCibo6hOs2njsNlT9bqQ4MBrHydKA",
  authDomain: "craftopia-12c6c.firebaseapp.com",
  projectId: "craftopia-12c6c",
  storageBucket: "craftopia-12c6c.appspot.com",
  messagingSenderId: "361373741962",
  appId: "1:361373741962:web:453579db9c2e59dfcc4e73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;