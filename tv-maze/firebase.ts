import  {initializeApp}  from "firebase/app";
import "firebase/auth"
import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);


let uiConfig = {
    signInSuccessUrl: "home",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],

    tosUrl: "<your-tos-url>",
    
    privacyPolicyUrl: function () {
        window.location.assign("<your-privacy-policy-url>");
    },
};


const auth = getAuth(app)
let ui = new firebaseui.auth.AuthUI(auth);


export { auth , ui ,uiConfig }
export default app
