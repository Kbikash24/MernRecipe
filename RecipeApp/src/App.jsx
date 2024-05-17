import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RecipeDetail from "./components/RecipeDetail";




const App = () => {
  return (
    <>
      <Router><Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
         
          <Route path="/recipe/:id" element={<RecipeDetail/>}></Route>
        </Routes>
        
      </Router>
    </>
  );
};

export default App;
