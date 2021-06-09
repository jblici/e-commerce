import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzERk76nUlB4X5rhUh8fXZlpzg8JJ1Bv0",
    authDomain: "e-commerce-1ce4e.firebaseapp.com",
    projectId: "e-commerce-1ce4e",
    storageBucket: "e-commerce-1ce4e.appspot.com",
    messagingSenderId: "87771883218",
    appId: "1:87771883218:web:3475885136e982eef3ef0b"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;