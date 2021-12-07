//import React, { useEffect, useContext, useState } from 'react';
import "./Login.css"
import { auth } from './Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


export default function Login() {

    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((re) => {
                console.log(re);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
            </button>
        </div>
    );
}