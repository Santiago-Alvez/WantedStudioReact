// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBogHnvdKq7D5IizuDPl8A9oCN4ty12tVc",
  authDomain: "wanted-studio-barber.firebaseapp.com",
  projectId: "wanted-studio-barber",
  storageBucket: "wanted-studio-barber.appspot.com",
  messagingSenderId: "684322654628",
  appId: "1:684322654628:web:d2cf7b7cc95e36db335931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportar data

export const db = getFirestore(app)