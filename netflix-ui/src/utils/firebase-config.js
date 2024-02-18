// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4cOJpt1ct91WHfUZynk6Ha02Y2vXJzjw",
  authDomain: "react-netflix-clone-1c5f7.firebaseapp.com",
  projectId: "react-netflix-clone-1c5f7",
  storageBucket: "react-netflix-clone-1c5f7.appspot.com",
  messagingSenderId: "684517813980",
  appId: "1:684517813980:web:0baaefa50c70b2a86e0e19",
  measurementId: "G-JSKDPCF5JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);