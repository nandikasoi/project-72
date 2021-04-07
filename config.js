import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDeSOW2SZ2spp-OdmC0rc-ETEmW-OmAIbw",
    authDomain: "storyhub-3efde.firebaseapp.com",
    databaseURL: "https://storyhub-3efde-default-rtdb.firebaseio.com",
    projectId: "storyhub-3efde",
    storageBucket: "storyhub-3efde.appspot.com",
    messagingSenderId: "775801468919",
    appId: "1:775801468919:web:721ce2871f4c817f2da0f2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export defdault firebase.firestore()