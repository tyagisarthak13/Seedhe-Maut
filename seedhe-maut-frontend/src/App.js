import React from "react";
import Login from "./pages/login/Login"; // Import Login component
import "./pages/login/Login"; // Import CSS for styling
import Signup from "./pages/signup/Signup"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

