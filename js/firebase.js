//Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy542BAiVJfnzjs2FGVbDd4DPDTkVJijU",
  authDomain: "logintiendanjp.firebaseapp.com",
  projectId: "logintiendanjp",
  storageBucket: "logintiendanjp.appspot.com",
  messagingSenderId: "91663719346",
  appId: "1:91663719346:web:4dba1dbad9b3f228ad22ab",
  measurementId: "G-997MCK426T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);