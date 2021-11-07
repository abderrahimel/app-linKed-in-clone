import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBar_TCooYTHuRezK3okWUTC0gAjSdqv2E",
  authDomain: "linked-in-7f6dc.firebaseapp.com",
  projectId: "linked-in-7f6dc",
  storageBucket: "linked-in-7f6dc.appspot.com",
  messagingSenderId: "841715689859",
  appId: "1:841715689859:web:1e222a1b5c82134f3e2eb6"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};