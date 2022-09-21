import {initializeApp} from '@firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClWR6qVxyZKOazickjy8tlYstLiRcv2bg",
    authDomain: "tashkent-436b1.firebaseapp.com",
    projectId: "tashkent-436b1",
    storageBucket: "tashkent-436b1.appspot.com",
    messagingSenderId: "1098422808529",
    appId: "1:1098422808529:web:70843d1004cd0d73ecfaf0"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);