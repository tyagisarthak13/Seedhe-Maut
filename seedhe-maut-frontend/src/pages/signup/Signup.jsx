import React, { useState, useEffect } from "react";
import "../signup/Signup.jsx";
import "./Signup.css";
import { Link } from "react-router-dom";
import { createUser } from "../../services/userService.js";

const Signup = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    const{email} = e.target;
    e.preventDefault();
    if (!text || !email || !password) {
      setError("Email and password are required");
      return;
    }
    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     try {
    //       const dataToSend= {

    //       }
    //       const data = await createUser(dataToSend);
    //       setUsers(data);
    //     } catch (error) {
    //       console.error("Failed to fetch users");
    //     }
    //   };

    //   fetchUsers();
    // }, []);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Signup</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={text}
              id=""
              placeholder="Enter your username "
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              id=""
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="number"
              value={number}
              id=""
              placeholder="Enter your Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              id=""
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <p>
            Already have an account? <Link to="/">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
