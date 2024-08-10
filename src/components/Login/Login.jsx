import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      setUser(response.data);
      history("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-content">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="btn1"> 
            <button type="submit">SignUp</button>
            <button  className="btn" type="submit">Login</button>

            </div>
          </form>
        </div>
        <div className="login-image">
          <img
            src="https://eskooly.com/assets/images/illustrations/mockups/landing3/signup1.png"
            alt="Login illustration"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
