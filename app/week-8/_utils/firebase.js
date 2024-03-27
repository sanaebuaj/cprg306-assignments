// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPNJqt4fYqcOFZrEt-mb9T_PrMrjdn_I8",
  authDomain: "cprg306-assignment-c72ae.firebaseapp.com",
  projectId: "cprg306-assignment-c72ae",
  storageBucket: "cprg306-assignment-c72ae.appspot.com",
  messagingSenderId: "809773544431",
  appId: "1:809773544431:web:49240fcbae76f1ee0c3c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);