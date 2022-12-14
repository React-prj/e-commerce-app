// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  //there are many providers, but we only like 
  // FacebookAuthProvider,
  // TwitterAuthProvider,
  // GithubAuthProvider,

} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYkwLjwqQC6b37Phhl-WKZ6R3UZpt4yn0",
  authDomain: "crwn-clothing-db-84924.firebaseapp.com",
  projectId: "crwn-clothing-db-84924",
  storageBucket: "crwn-clothing-db-84924.appspot.com",
  messagingSenderId: "572215897396",
  appId: "1:572215897396:web:ed22962e844347ea658961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => signOut(auth)

//we will callback this change everytime there is a change
export const onAuthStateChangedListener = (callback) => 
        onAuthStateChanged(auth, callback)