import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import Login from "./Login";
import Profile from "./Profile";
//import Dashboard from "./Dashboard";


function App() {
  return (
      /*
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/login" index element ={<Login />} />
              <Route path="/dashboard" element ={<Dashboard />} />
            </Routes>
        </BrowserRouter>
      </div>

       */
      <body>
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Landing />} />
                <Route path='/login' element ={<Login />} />
                <Route path='/profile' element ={<Profile />} />
            </Routes>
        </BrowserRouter>
      </body>

  );
}

export default App;
