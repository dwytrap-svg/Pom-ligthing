// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp3pHqEH-YeNGnK0TZYg92AdDLvajStsc",
  authDomain: "pom-lighting-v1.firebaseapp.com",
  projectId: "pom-lighting-v1",
  storageBucket: "pom-lighting-v1.firebasestorage.app",
  messagingSenderId: "442555983316",
  appId: "1:442555983316:web:868e0fd9badd7844d76241",
  measurementId: "G-5EZGXL3E5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);