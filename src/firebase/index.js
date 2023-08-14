import { getFirestore } from "firebase/firestore";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyASHFZ7466bIVXrfE2bDPwZqvgF621zS1E",
    authDomain: "mytodolist-2e0d1.firebaseapp.com",
    projectId: "mytodolist-2e0d1",
    storageBucket: "mytodolist-2e0d1.appspot.com",
    messagingSenderId: "258447553457",
    appId: "1:258447553457:web:3f1664b2b4cbbec92ec390"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
};
