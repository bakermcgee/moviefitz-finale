import React, {useState} from "react";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import {getDatabase, ref, get, child} from "firebase/database";
import { auth } from './Firebase';



export default function Navbar(){

    const nav = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    const db = getDatabase();
    auth.onAuthStateChanged((user) => {
        if(user != null){
            const userInfo = user.uid;

            //gets the children from the admins directory and checks to see if the current user's ID matches any of the admins'
            get(child(ref(db), 'admins/')).then((snapshot) => {
                if(snapshot.exists()){
                    snapshot.forEach((childSnap) => {
                        if(userInfo === childSnap.child('uID').val()){
                            setIsAdmin(true);
                        }
                    })
                }else{
                    console.log('Database Error: Missing admins list');
                }
            });

        }else{
            console.log('Session Expired');
            nav('/');
        }
    })

    if(isAdmin){ //changes the navbar depending on user status
        return (

            <div className="navbar">
                <button className="navbar-sn" onClick={() => nav('/admin')}>MovieFitz</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", left: "118px"}} onClick={() => nav('/admin')}>Admin Options</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", left: "274px"}} onClick={() => nav('/now-playing')}>Now Playing</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", left: "415px"}} onClick={() => nav('/recommended')}>Recommended</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "99px"}} onClick={() => nav('/profile')}>Profile</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "0"}} onClick={() => {auth.signOut().then(nav('/'));}}>Logout</button>

            </div>

        );
    }else{
        return (

            <div className="navbar">
                <button className="navbar-sn" onClick={() => nav('/profile')}>MovieFitz</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", left: "118px"}} onClick={() => nav('/now-playing')}>Now Playing</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", left: "259px"}} onClick={() => nav('/recommended')}>Recommended</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "99px"}} onClick={() => nav('/profile')}>Profile</button>
                <button className="navbar-op navbar-op-h" style={{position: "absolute", right: "0"}} onClick={() => {auth.signOut().then(nav('/'));}}>Logout</button>

            </div>

        );
    }

}