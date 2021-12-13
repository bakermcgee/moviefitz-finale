import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import Login from "./Login";
import Profile from "./Profile";
import Recommended from "./Recommended";
import AdminUpdate from "./AdminUpdate";
import NowPlaying from "./NowPlaying";


function App() {
  return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Landing />} />
                <Route path='/login' element ={<Login />} />
                <Route path='/admin' element ={<AdminUpdate />} />
                <Route path='/profile' element ={<Profile />} />
                <Route path='/now-playing' element ={<NowPlaying />} />
                <Route path='/recommended' element ={<Recommended />} />
            </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
