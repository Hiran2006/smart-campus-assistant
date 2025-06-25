// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCd1XUTX7ZST82Qx9E_AeYRoTN5We799do',
  authDomain: 'smart-campus-assistance.firebaseapp.com',
  projectId: 'smart-campus-assistance',
  storageBucket: 'smart-campus-assistance.firebasestorage.app',
  messagingSenderId: '1022815475895',
  appId: '1:1022815475895:web:e91ea6d20d0484c775d532',
  measurementId: 'G-C9G9QRRWNE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
