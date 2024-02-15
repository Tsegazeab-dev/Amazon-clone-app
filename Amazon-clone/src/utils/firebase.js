import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCygzXU3zWNHM5s9JN3Wdv03ekzusRa4eU",
  authDomain: "clone-97f4e.firebaseapp.com",
  projectId: "clone-97f4e",
  storageBucket: "clone-97f4e.appspot.com",
  messagingSenderId: "942161902717",
  appId: "1:942161902717:web:2ff81e82acf949f99bc514",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
