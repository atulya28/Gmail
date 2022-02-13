import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider, getAuth } from '@firebase/auth'
import { initializeApp } from '@firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCBjVutlls4lRSUIW0gov49nZguWS_mt8k",
    authDomain: "fir-3014f.firebaseapp.com",
    projectId: "fir-3014f",
    storageBucket: "fir-3014f.appspot.com",
    messagingSenderId: "505009280625",
    appId: "1:505009280625:web:972d2dc90802ab6ea76dd0",
    measurementId: "G-GENPQB6SN3"
  };
  
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export default function Login() {
    return (
        <div className='login'>
            <button onClick={() => {
                const auth = getAuth();
                signInWithPopup(auth, provider)
                  .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    console.log(user)
                    localStorage.setItem('name', user.displayName)
                    localStorage.setItem('email', user.email)
                    localStorage.setItem('photo', user.photoURL)
                    window.location.href = '/home/inbox'
                  }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                  });
            }}>Sign in</button>
        </div>
    )
}
