import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDymT0IffUxZnVKlPDn9ABS9gyWyxl9-88",
    authDomain: "yogaagma-ch.firebaseapp.com",
    projectId: "yogaagma-ch",
    storageBucket: "yogaagma-ch.appspot.com",
    messagingSenderId: "697655389564",
    appId: "1:697655389564:web:f4e992ef62cc776faac8f9"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
