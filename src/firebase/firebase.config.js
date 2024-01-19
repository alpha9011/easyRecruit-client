
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey:import.meta.env.VITE_APIKEY ,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN ,
  // projectId:import.meta.env.VITE_PROJECTID ,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET ,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID ,
  // appId:import.meta.env.VITE_APPID ,

  apiKey: "AIzaSyD9m86sjbr4SPV8kK_gV-xooK13xjGBn0s",
  authDomain: "easyrecurit.firebaseapp.com",
  projectId: "easyrecurit",
  storageBucket: "easyrecurit.appspot.com",
  messagingSenderId: "62192967844",
  appId: "1:62192967844:web:1e72a597da8aa3ded78631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;