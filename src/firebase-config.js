// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBKLJ9DeePC_bRyuAffzh2TDrW5k6hILkw",
  authDomain: "code-simplified-48676.firebaseapp.com",
  projectId: "code-simplified-48676",
  storageBucket: "code-simplified-48676.appspot.com",
  messagingSenderId: "903970957381",
  appId: "1:903970957381:web:a370ed0a1cf21216a29b2c",
  measurementId: "G-2F4PK4J0W6"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth =  getAuth(app)