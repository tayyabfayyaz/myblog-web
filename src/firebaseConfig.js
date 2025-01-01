// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { database } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZmTM5BUssis_Jpm6gbbm2SN2a71TwLlc",
  authDomain: "blog-web-94882.firebaseapp.com",
  projectId: "blog-web-94882",
  storageBucket: "blog-web-94882.firebasestorage.app",
  messagingSenderId: "152214731619",
  appId: "1:152214731619:web:77d9c116bdc5fb693df156",
  measurementId: "G-MJWZ4HJCJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;