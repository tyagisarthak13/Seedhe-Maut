import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
// import Button from "../../components/button/loginbtn";
import { Link } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (email === "admin@example.com" && password === "password123") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      {/* <button className="login-btn" >
  
    </button> */}
      <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {/* <p>Don't have any account ? <a href="../signup/Signup.jsx">Signup</a></p> */}
          <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
        </form>
      </div>
    </div>
    </div>
  );
};


export default Login;
