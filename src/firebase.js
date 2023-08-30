import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDBY6ldYNiDEdtNYXjBFU4tSp81Lwvfo2w",
  authDomain: "linkedin-clone-620b6.firebaseapp.com",
  projectId: "linkedin-clone-620b6",
  storageBucket: "linkedin-clone-620b6.appspot.com",
  messagingSenderId: "997009572070",
  appId: "1:997009572070:web:ff2956a22e3dcef4f7bb27"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;