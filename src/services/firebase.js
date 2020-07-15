import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyDS6R78kNW4JCumjts_4eu4Igpbh8011zE",
    authDomain: "assignment-1-b191a.firebaseapp.com",
    databaseURL: "https://assignment-1-b191a.firebaseio.com",
    projectId: "assignment-1-b191a",
    storageBucket: "assignment-1-b191a.appspot.com",
    messagingSenderId: "520756784904",
    appId: "1:520756784904:web:e6a8b5e5b44b21cf11c6bd",
    measurementId: "G-NQ5XP5M1EN"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();