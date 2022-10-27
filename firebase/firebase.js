// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKt5oy6-yEBm9rxeOSYccBhLTnCexqPIc",
  authDomain: "test-micro-posts-48cdf.firebaseapp.com",
  projectId: "test-micro-posts-48cdf",
  storageBucket: "test-micro-posts-48cdf.appspot.com",
  messagingSenderId: "210109164029",
  appId: "1:210109164029:web:43a043b2b8a7e46ab79194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.export = {firebase} ;