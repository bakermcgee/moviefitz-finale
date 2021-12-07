import React from "react";
import './Navbar.css';

export default function NavbarLogin(){

    return (

        <div className="navbar">
            <button className="navbar-sn">MovieFitz</button>
            <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "0"}}>Sign Up</button>
        </div>

    );

}