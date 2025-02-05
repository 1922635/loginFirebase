// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhXxDKA8PCkfhZHMeU-nDr59ZVlp_D-Dc",
  authDomain: "login-firebase-d7310.firebaseapp.com",
  projectId: "login-firebase-d7310",
  storageBucket: "login-firebase-d7310.firebasestorage.app",
  messagingSenderId: "269793029481",
  appId: "1:269793029481:web:2bf1e6e0c704d9af85e1f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);
 