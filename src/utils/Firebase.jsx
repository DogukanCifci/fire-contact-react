import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvLSpApnOv9y--j2fjUxmSQO17RtydOvQ",
  authDomain: "useradd-ad1c9.firebaseapp.com",
  projectId: "useradd-ad1c9",
  storageBucket: "useradd-ad1c9.appspot.com",
  messagingSenderId: "574652493539",
  appId: "1:574652493539:web:3715d8b77005b27c295fd6",
  databaseURL:
    "https://useradd-ad1c9-default-rtdb.europe-west1.firebasedatabase.app/",
};

//app ismini firebase olarak degistirdim!
const firebase = initializeApp(firebaseConfig);

export default firebaseConfig;

//--------------//--------------//--------------Insert Data Function--------------//--------------//--------------
