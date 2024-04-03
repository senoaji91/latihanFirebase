import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc } from "firebase/firestore"

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCQ3t50QeIU4UPjOH6pP7UE9mF-z16C-t8",
    authDomain: "odpbni-6f66d.firebaseapp.com",
    projectId: "odpbni-6f66d",
    storageBucket: "odpbni-6f66d.appspot.com",
    messagingSenderId: "631732932992",
    appId: "1:631732932992:web:cf6871765b620fb66a3165",
    measurementId: "G-JWY7NKBS1V"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { db, getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc }