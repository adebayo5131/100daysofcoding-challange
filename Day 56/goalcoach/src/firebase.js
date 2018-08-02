import *as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBUDkRFBUFhzTbCMln6Yjy3nkU_siBSxv4",
    authDomain: "goalcoach-1a4e9.firebaseapp.com",
    databaseURL: "https://goalcoach-1a4e9.firebaseio.com",
    projectId: "goalcoach-1a4e9",
    storageBucket: "",
    messagingSenderId: "920551819100"
  };

 export const firebaseApp = firebase.initializeApp(config)
 export const goalRef = firebase.database().ref('goals');