import firebase from 'firebase';

const firesebaseConfig = {
    apiKey: "AIzaSyBpWaZhlqzNXQEif1-t8pV7TzXD17wSDus",
    authDomain: "tiktok-9631c.firebaseapp.com",
    databaseURL: "https://tiktok-9631c.firebaseio.com",
    projectId: "tiktok-9631c",
    storageBucket: "tiktok-9631c.appspot.com",
    messagingSenderId: "914398533820",
    appId: "1:914398533820:web:a1a4e1faccb1e498e158b9",
    measurementId: "G-NWBBHEQMTY"
};

const firebaseApp = firebase.initializeApp(firesebaseConfig);
const db = firebaseApp.firestore();
export default db;