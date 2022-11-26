import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkBba6PJvAXKZ_9_wKVDvhB1DfXDaB_bY",
  authDomain: "restaurantapp-930bc.firebaseapp.com",
  databaseURL: "https://restaurantapp-930bc-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-930bc",
  storageBucket: "restaurantapp-930bc.appspot.com",
  messagingSenderId: "580683239037",
  appId: "1:580683239037:web:f87037b97bb8c5034d6b14",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
