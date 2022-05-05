// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8RLzXwSLLY5Ku70Nh5rOeFKW0Qzl_5S4",
  authDomain: "genius-car-service-e4612.firebaseapp.com",
  projectId: "genius-car-service-e4612",
  storageBucket: "genius-car-service-e4612.appspot.com",
  messagingSenderId: "931188520601",
  appId: "1:931188520601:web:6d28acfaf8e2b6dd95ea08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default(auth);