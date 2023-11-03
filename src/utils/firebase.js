// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLHwySFAWIo_w97WHAof-FEB3AWf-HdQA",
  authDomain: "netflixgpt-2e664.firebaseapp.com",
  projectId: "netflixgpt-2e664",
  storageBucket: "netflixgpt-2e664.appspot.com",
  messagingSenderId: "40232290664",
  appId: "1:40232290664:web:e64564ac00caa642ff2edd",
  measurementId: "G-VNXWWE2LP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);  // eslint-disable-line 
export const auth = getAuth(); 