// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAor6lWp4BQPk0w4LNAIz6GKBOp8QNejoE",
  authDomain: "inventory-management-71386.firebaseapp.com",
  projectId: "inventory-management-71386",
  storageBucket: "inventory-management-71386.appspot.com",
  messagingSenderId: "990445975216",
  appId: "1:990445975216:web:2d7442e6d859bf9b6fed75",
  measurementId: "G-N1C634MY4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}