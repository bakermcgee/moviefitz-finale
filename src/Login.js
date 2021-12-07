//import React, { useEffect, useContext, useState } from 'react';
import "./Login.css"
import { auth } from './Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import NavbarLogin from "./NavbarLogin";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const nav = useNavigate();

    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((re) => {
                console.log(re);
                nav('/profile');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <NavbarLogin />
            <div className="container login-container">
                <div className="card">
                    <div className="card-content">
                        <header className='login-txt'>
                            Login
                        </header>
                        <br></br><br></br>
                        <div className="login-buttons">
                            <button className="login-provider-button" style={{position: "relative", left: "65px"}} onClick={signInWithGoogle}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png" alt="google icon" width='60' height='60'/>
                                <span> Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}