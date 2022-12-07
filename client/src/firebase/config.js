// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu0w60jOj-MY5HACESs8LwpOaSh0QeFAY",
    authDomain: "fitness-tracker-17e27.firebaseapp.com",
    projectId: "fitness-tracker-17e27",
    storageBucket: "fitness-tracker-17e27.appspot.com",
    messagingSenderId: "956032508809",
    appId: "1:956032508809:web:b84793d9584a5f4cb63758"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
