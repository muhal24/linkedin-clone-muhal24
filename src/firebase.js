import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAIhIypRQunqPgqfNhcyVQZzVz4NvChwsc",
    authDomain: "linkedin-clone-muhal24.firebaseapp.com",
    projectId: "linkedin-clone-muhal24",
    storageBucket: "linkedin-clone-muhal24.appspot.com",
    messagingSenderId: "121909953426",
    appId: "1:121909953426:web:ece48d6785479b77f8b74b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};