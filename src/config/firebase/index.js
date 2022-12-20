import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

// you must put your own firebase config here
const firebaseConfig = {
    // your firebase config
};

const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
