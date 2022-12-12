import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDM-6J9cwHQpJGBmhpJ16oiqnO3T_QgM98",
    authDomain: "little-18e35.firebaseapp.com",
    projectId: "little-18e35",
    storageBucket: "little-18e35.appspot.com",
    messagingSenderId: "480487839513",
    appId: "1:480487839513:web:d8876d1f07e7b3aa7a9788",
    measurementId: "G-YNDBMVEGL8"
};

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
