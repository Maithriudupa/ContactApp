
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1dT1nLQ7XuktYF8ex21W_ZnaFtSWGLrc",
  authDomain: "zoho-contact-app-c4b09.firebaseapp.com" ,
  projectId: "zoho-contact-app-c4b09",
  storageBucket: "zoho-contact-app-c4b09.appspot.com",
  messagingSenderId: "1000383554455",
  appId: "1:1000383554455:web:3254ff211881c450cb1ad2",
  measurementId: "G-MH9CBB855H"
};

const fire = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default fire;