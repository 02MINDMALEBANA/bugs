// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQp78ksVK63u2jg6OzMasyi40wdHCHBQI",
  authDomain: "bugs-8be27.firebaseapp.com",
  projectId: "bugs-8be27",
  storageBucket: "bugs-8be27.appspot.com",
  messagingSenderId: "987942817760",
  appId: "1:987942817760:web:6f00661238a8a938792585",
  measurementId: "G-BP8H50N2CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app) 

export {db}
