import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGcdh1qSz-h6W6PmsTmQetMllS1cxZ0pE",
  authDomain: "user-authentication-fire-ba286.firebaseapp.com",
  projectId: "user-authentication-fire-ba286",
  storageBucket: "user-authentication-fire-ba286.appspot.com",
  messagingSenderId: "892051911982",
  appId: "1:892051911982:web:ad2d5f2fae2a8d3beb36bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)//link my app to the firestore
export const auth = getAuth(app)
export const storage = getStorage(app)


export default app;
