// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBJc5mRguFr2vwaWAQGKHbvmAqYLfyGDU",
  authDomain: "easyrecruitproject.firebaseapp.com",
  projectId: "easyrecruitproject",
  storageBucket: "easyrecruitproject.appspot.com",
  messagingSenderId: "377142009080",
  appId: "1:377142009080:web:0bdcf6a5d907f8b8a0ef0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;