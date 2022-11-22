// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvLSpApnOv9y--j2fjUxmSQO17RtydOvQ",
  authDomain: "useradd-ad1c9.firebaseapp.com",
  databaseURL:
    "https://useradd-ad1c9-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "useradd-ad1c9",
  storageBucket: "useradd-ad1c9.appspot.com",
  messagingSenderId: "574652493539",
  appId: "1:574652493539:web:3715d8b77005b27c295fd6",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
