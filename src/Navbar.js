import React from "react";
import './Navbar.css';

export default function Navbar(){

    return(

        <div className="navbar">
            <button className="navbar-sn" >MovieFitz</button>
            <button className="navbar-op navbar-op-h" style={{position: "fixed", right: "0"}}>Sign Up</button>
            <button className="navbar-op navbar-op-h" style={{position: "fixed", right: "100px"}}>Login</button>
        </div>

    );
}