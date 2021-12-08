import React from "react";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar(){

    const nav = useNavigate();

    return (

        <div className="navbar">
            <button className="navbar-sn" onClick={() => nav('/profile')}>MovieFitz</button>
            <button className="navbar-op navbar-op-h" style={{position: "absolute", left: "118px"}} onClick={() => nav('/Recommended')}>Recommended</button>

            <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "99px"}} onClick={() => nav('/Profile')}>Profile</button>
            <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "0"}} onClick={() => nav('/')}>Logout</button>

        </div>

    );

}