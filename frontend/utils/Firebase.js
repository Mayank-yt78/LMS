import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginprj-lms.firebaseapp.com",
  projectId: "loginprj-lms",
  storageBucket: "loginprj-lms.firebasestorage.app",
  messagingSenderId: "765135164427",
  appId: "1:765135164427:web:5ccd297baee20217a0a30e",
  measurementId: "G-QNLTVRFX3V"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}