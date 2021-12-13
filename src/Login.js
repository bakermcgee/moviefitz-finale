import "./Login.css"
import { auth } from './Firebase';
import { signInWithPopup, GoogleAuthProvider, setPersistence, browserSessionPersistence } from 'firebase/auth';
import NavbarLogin from "./NavbarLogin";
import { useNavigate } from 'react-router-dom';
import {useCallback} from "react";

const useLogin = () =>{

    const nav = useNavigate();
    return useCallback(() =>{
        const provider = new GoogleAuthProvider();
        setPersistence(auth, browserSessionPersistence) //keeps login persistent to avoid crashes on refresh
            .then(() => {
                signInWithPopup(auth, provider) //signs into google via popup
                    .then((re) => {
                        const credentials = re;
                        nav('/profile');
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })

    }, [nav]);

}

export default function Login() {
    const signInWithGoogle = useLogin();
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
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}