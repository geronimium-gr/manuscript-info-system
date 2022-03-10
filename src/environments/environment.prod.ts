import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNRjKZupP19Np8MjGQW0IJK6LZpeyKPVE",
  authDomain: "db-manuscript-test.firebaseapp.com",
  projectId: "db-manuscript-test",
  storageBucket: "db-manuscript-test.appspot.com",
  messagingSenderId: "796490752373",
  appId: "1:796490752373:web:72ad2fd202141c7090f33c",
  measurementId: "G-KMNB0HEDRJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

