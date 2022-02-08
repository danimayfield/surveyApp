
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyDm9SwBYFLbz_rGhMApNzDQHgBzhgadmUw",
  authDomain: "surveyapp-d7f88.firebaseapp.com",
  databaseURL: "https://surveyapp-d7f88-default-rtdb.firebaseio.com",
  projectId: "surveyapp-d7f88",
  storageBucket: "surveyapp-d7f88.appspot.com",
  messagingSenderId: "982100463924",
  appId: "1:982100463924:web:d1a88d09f2007ec6875561"
};

const firebase = initializeApp(config);

export default firebase;