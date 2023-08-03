import { initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
 
const firebaseConfig = {
    apiKey: "AIzaSyBiameuvXeNUF5Wp3M0MCWoqz9ZFTfUI2E",
    authDomain: "job-portal-d2b40.firebaseapp.com",
    projectId: "job-portal-d2b40",
    storageBucket: "job-portal-d2b40.appspot.com",
    messagingSenderId: "543912619679",
    appId: "1:543912619679:web:c58959e3256bbe4c573caa"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
