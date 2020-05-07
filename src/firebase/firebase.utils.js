import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEP4pTZWxaJeXXP6SXRqDyzgLAiWCNW1c",
  authDomain: "crwn-db-1c9ba.firebaseapp.com",
  databaseURL: "https://crwn-db-1c9ba.firebaseio.com",
  projectId: "crwn-db-1c9ba",
  storageBucket: "crwn-db-1c9ba.appspot.com",
  messagingSenderId: "878639692671",
  appId: "1:878639692671:web:bd1f9fa6053f2c93c5f84a",
  measurementId: "G-VD2XTGCWMK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
