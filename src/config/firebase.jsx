// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB61_eieiE_aQmE7dumMI54LmXi96mzscg",
  authDomain: "mystic-markers-80316.firebaseapp.com",
  projectId: "mystic-markers-80316",
  storageBucket: "mystic-markers-80316.firebasestorage.app",
  messagingSenderId: "823621529756",
  appId: "1:823621529756:web:cfc4d637a3d85be1f73d59",
  measurementId: "G-5V1JSM1GBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provide = new GoogleAuthProvider();

// 匯出
export { auth, provide };