import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDjZQWSBLIcAzpB9fFXRbAkXwwi-SFhNPA",
  authDomain: "trip-dashboard-1c339.firebaseapp.com",
  projectId: "trip-dashboard-1c339",
  storageBucket: "trip-dashboard-1c339.appspot.com",
  messagingSenderId: "434623359199",
  appId: "1:434623359199:web:9484a766881cfeae5b216a",
  measurementId: "G-SVHKYF4LZF"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app); 