import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    // TODO ... YOUR FIREBASE_CONFIGURATION
    apiKey: "AIzaSyABUum7ISBLW_LfHEnTqyKAmBbpyLujVkM",
    authDomain: "class-work-6a531.firebaseapp.com",
    projectId: "class-work-6a531",
    storageBucket: "class-work-6a531.appspot.com",
    messagingSenderId: "569810192688",
    appId: "1:569810192688:web:35b27415816263e46720f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore, Cloud Storage and get a reference to the service
export var db = getFirestore(app)