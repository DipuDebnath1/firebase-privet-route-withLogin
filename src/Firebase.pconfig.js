// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeE040QXNF03HJoicoWpbdss2GzRDN9go",
  authDomain: "athetication-login-register.firebaseapp.com",
  projectId: "athetication-login-register",
  storageBucket: "athetication-login-register.appspot.com",
  messagingSenderId: "483183354784",
  appId: "1:483183354784:web:1f573f05e807873560bac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

