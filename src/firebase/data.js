// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtCbOwJujRyZFhSdFXhxgSL85aB21ngD4",
  authDomain: "astroshop-7505a.firebaseapp.com",
  projectId: "astroshop-7505a",
  storageBucket: "astroshop-7505a.appspot.com",
  messagingSenderId: "582735030699",
  appId: "1:582735030699:web:6d934ad0a132345d508aee",
  measurementId: "G-RJ2XCCHR8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
