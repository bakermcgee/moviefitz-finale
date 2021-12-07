import React from "react";
import './Navbar.css';
import {useNavigate} from "react-router-dom";

export default function NavbarLogin(){

    const nav = useNavigate();

    return (

        <div className="navbar">
            <button className="navbar-sn" onClick={() => nav('/')}>MovieFitz</button>
        </div>

    );

}