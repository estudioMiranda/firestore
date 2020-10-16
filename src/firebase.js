import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvGfqa-J8qjWX5Cc8R1Ku8BPY2woEh1ak",
    authDomain: "museo-f7dc2.firebaseapp.com",
    databaseURL: "https://museo-f7dc2.firebaseio.com",
    projectId: "museo-f7dc2",
    storageBucket: "museo-f7dc2.appspot.com",
    messagingSenderId: "761451708850",
    appId: "1:761451708850:web:40858aa8e7419d164ba4ab",
    measurementId: "G-45VHXFWMEE"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };