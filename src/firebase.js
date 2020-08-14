import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB33BixDNmmIOMv24I0iuEbVk4td2E05Xg",
  authDomain: "tinder-cl.firebaseapp.com",
  databaseURL: "https://tinder-cl.firebaseio.com",
  projectId: "tinder-cl",
  storageBucket: "tinder-cl.appspot.com",
  messagingSenderId: "880097593199",
  appId: "1:880097593199:web:d9b8bc8c68928075cc0a9a",
  measurementId: "G-NB0GYSMM8D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
