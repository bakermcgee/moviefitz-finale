import React from "react";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function NavbarLanding(){

        const nav = useNavigate();

        return (

            <div className="navbar">
                <button className="navbar-sn" onClick={() => nav('/')}>MovieFitz</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "0"}} onClick={() => nav('/login')}>Login/Sign Up</button>

            </div>

        );

}