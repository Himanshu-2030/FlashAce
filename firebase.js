// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOBp_y5IKXOAb26AJUWEi6TQV4d5LTdJA",
  authDomain: "flashai-d91bc.firebaseapp.com",
  projectId: "flashai-d91bc",
  storageBucket: "flashai-d91bc.appspot.com",
  messagingSenderId: "486805290628",
  appId: "1:486805290628:web:7f868a552b086e607b0cd1",
  measurementId: "G-YHJM4Z6494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export(db)