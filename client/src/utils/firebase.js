import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY7XXO3-fz6CZ5gC9eb69w4XdY94mhUDo",
  authDomain: "netflixgpt-4c0e0.firebaseapp.com",
  projectId: "netflixgpt-4c0e0",
  storageBucket: "netflixgpt-4c0e0.firebasestorage.app",
  messagingSenderId: "246477197070",
  appId: "1:246477197070:web:b2a4dddd225deffb01915f",
  measurementId: "G-ZM80DRPK3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
