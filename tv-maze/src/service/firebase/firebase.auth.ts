import { auth } from "./firebase.init";

import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";

import "firebaseui/dist/firebaseui.css";

let uiConfig = {
    signInSuccessUrl: "/home",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

let ui = new firebaseui.auth.AuthUI(auth);

export { ui, uiConfig };
