import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
  apiKey: "AIzaSyA455KxLtOBIaIRni3LDFGXmb04g_OCozA",
  authDomain: "crwn-db-c231a.firebaseapp.com",
  projectId: "crwn-db-c231a",
  storageBucket: "crwn-db-c231a.appspot.com",
  messagingSenderId: "1080031374671",
  appId: "1:1080031374671:web:88f288aa9914638a44e93a",
  measurementId: "G-CK72RRM54E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






