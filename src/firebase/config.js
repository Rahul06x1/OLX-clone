import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDD811bSOx9okfzX51Dp7XINkJl8BX1h_A",
    authDomain: "olx-clone-149e9.firebaseapp.com",
    projectId: "olx-clone-149e9",
    storageBucket: "olx-clone-149e9.appspot.com",
    messagingSenderId: "341708486784",
    appId: "1:341708486784:web:09299451ff842fdf254e65",
    measurementId: "G-TXLYBBC77J"
  };

export default firebase.initializeApp(firebaseConfig)