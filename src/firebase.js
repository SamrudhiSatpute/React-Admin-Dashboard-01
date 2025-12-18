import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth using the app
export const auth = getAuth(app);
