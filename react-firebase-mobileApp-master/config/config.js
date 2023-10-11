import firebase from 'firebase';

//Api initialisation
const  config = {
    apiKey: "AIzaSyALBsAgnYIywS6jdGovkQ063NeHtrWAG_o",
    authDomain: "my-react-native-ae3dc.firebaseapp.com",
    databaseURL: "https://my-react-native-ae3dc.firebaseio.com",
    projectId: "my-react-native-ae3dc",
    storageBucket: "my-react-native-ae3dc.appspot.com",
    messagingSenderId: "198753788971",
    appId: "1:198753788971:web:bcadd2c50cef6b7eb5366e",
    measurementId: "G-NDFYL95F4Y"
  };

firebase.initializeApp(config);
export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

