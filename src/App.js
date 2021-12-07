import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import Login from "./Login";
import Landing from "./Landing";
import Navbar from "./Navbar";
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
        <Navbar />
        <Landing />
      </body>

  );
}

export default App;
