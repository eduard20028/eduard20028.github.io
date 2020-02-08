import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC-kUemiaXvSMuAisGROwohHJ9jlgmIG7A",
    authDomain: "fir-movie-db-auth.firebaseapp.com",
    databaseURL: "https://fir-movie-db-auth.firebaseio.com",
    projectId: "fir-movie-db-auth",
    storageBucket: "fir-movie-db-auth.appspot.com",
    messagingSenderId: "148746996891",
    appId: "1:148746996891:web:85ae8d45a2f58d8ce2ca3e",
    measurementId: "G-PFBBENHDH2"
  });

export default app;