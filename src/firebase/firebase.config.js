// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtYrGgBOULatIt034cIVESCV50q4RB2tA",
  authDomain: "frost-box-a9-ab4d6.firebaseapp.com",
  projectId: "frost-box-a9-ab4d6",
  storageBucket: "frost-box-a9-ab4d6.firebasestorage.app",
  messagingSenderId: "59588888713",
  appId: "1:59588888713:web:87223bd94f9506ef9a5e58"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };    
export default app;          
