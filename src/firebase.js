import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_6Tu_yBl9rsRrKdAYtVMngUQrehH8Gmk",
  authDomain: "my-try-a66e3.firebaseapp.com",
  projectId: "my-try-a66e3",
  storageBucket: "my-try-a66e3.appspot.com",
  messagingSenderId: "951244665932",
  appId: "1:951244665932:web:cf1c6433bdb7b6cb46f0e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
