import './App.css'

function App() {


  return (
    <div className="App">
      ciao
    </div>
  )
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcVtyEQvkmS1SGxWGTS697mTqiWrjMKfM",
  authDomain: "tvmaze-app-32da7.firebaseapp.com",
  projectId: "tvmaze-app-32da7",
  storageBucket: "tvmaze-app-32da7.appspot.com",
  messagingSenderId: "460430759981",
  appId: "1:460430759981:web:a84c86b4162154b24080a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default App
