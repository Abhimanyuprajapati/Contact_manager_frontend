// firebase.js (or firebaseConfig.js)

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApwr8EqSQcIeFeYS6fToR-7TRcEsdnLOk",
    authDomain: "contact-manager-f70f1.firebaseapp.com",
    projectId: "contact-manager-f70f1",
    storageBucket: "contact-manager-f70f1.appspot.com",
    messagingSenderId: "686071247752",
    appId: "1:686071247752:web:fb1bd7a529e48ad7c5403d",
    measurementId: "G-W7TVJ58XCD"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
