import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBo3zhiLCgh-d4pKqCLw_w2rES7VST3RCw',
  authDomain: 'libu-ed7ee.firebaseapp.com',
  databaseURL: 'https://libu-ed7ee-default-rtdb.firebaseio.com',
  projectId: 'libu-ed7ee',
  storageBucket: 'libu-ed7ee.appspot.com',
  messagingSenderId: '181968616768',
  appId: '1:181968616768:web:be0159953f9c2c9cd00ea5',
  measurementId: 'G-TLBMPRBNXG',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
