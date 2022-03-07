import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDk-n1vlpHx99yBnC-mwI_91Or1KWFnYU8",
    authDomain: "db-manuscript-info-sys.firebaseapp.com",
    projectId: "db-manuscript-info-sys",
    storageBucket: "db-manuscript-info-sys.appspot.com",
    messagingSenderId: "332721464351",
    appId: "1:332721464351:web:3739882ff172159572e12a",
    measurementId: "G-FGSQ9VRNMT"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

