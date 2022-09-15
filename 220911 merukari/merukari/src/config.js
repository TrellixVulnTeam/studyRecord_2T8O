import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDt4tQsf3sx-hUz47oo3-NVrG8DI_cEqM4",
  authDomain: "portfolio-43d67.firebaseapp.com",
  projectId: "portfolio-43d67",
  storageBucket: "portfolio-43d67.appspot.com",
  messagingSenderId: "655968618797",
  appId: "1:655968618797:web:1bd71c6b0122530682eba4",
  measurementId: "G-0PY25ELYZR"
};
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db;