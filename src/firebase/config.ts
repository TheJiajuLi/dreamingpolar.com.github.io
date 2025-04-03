import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvys9saTxFWK9-G0yN4sdW5ZRf5UJJPVo",
  authDomain: "dreamingpolar.firebaseapp.com",
  projectId: "dreamingpolar",
  storageBucket: "dreamingpolar.appspot.com",
  messagingSenderId: "235267613970",
  appId: "1:235267613970:web:b8fe47a27df8f844b03fcb",
  measurementId: "G-KMPK5YFBR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db, analytics };