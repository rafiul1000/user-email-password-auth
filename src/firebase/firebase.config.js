// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0CQU3_HbgueSkIkBAo0lmxNKhpdrbJiY",
  authDomain: "user-email-password-auth-b8a97.firebaseapp.com",
  projectId: "user-email-password-auth-b8a97",
  storageBucket: "user-email-password-auth-b8a97.appspot.com",
  messagingSenderId: "293800155468",
  appId: "1:293800155468:web:e738dc8ce8fdf4468217e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;