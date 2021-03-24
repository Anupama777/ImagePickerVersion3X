import  firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig ={
    apiKey: 'AIzaSyCvxz3c8Fv8BSdl3TG7HH-YZRxi90nJK5M',
    authDomain: 'react-native-firebase-de-da83f.firebaseapp.com',
    databaseURL: 'https://react-native-firebase-de-da83f.firebaseio.com',
    projectId: 'react-native-firebase-de-da83f',
    storageBucket: 'react-native-firebase-de-da83f.appspot.com',
    messagingSenderId: '114427079226',
    appId: '1:114427079226:android:fcd176806eac633fef2303 ',
  };

  

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () =>{ auth.signInWithPopup(provider);
  }

  const provider1 = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithFacebook= () => auth.signInWithPopup(provider1);



  export {firebase};