import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3DOlNgCYla2qFke0xUb_vND_kAC9XqeY",
  authDomain: "daily-timemanegement.firebaseapp.com",
  databaseURL: "https://daily-timemanegement.firebaseio.com",
  projectId: "daily-timemanegement",
  storageBucket: "daily-timemanegement.appspot.com",
  messagingSenderId: "380453141448",
  appId: "1:380453141448:web:60b550de4c33f66eeb1efd",
  measurementId: "G-1C7B017X6F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
