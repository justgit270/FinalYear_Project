import React, { useState } from "react";
import { SignInStyled } from "./Auth.styled.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email.toLowerCase(),
      password: password,
    };

    console.log("User login details:", data);

    // Simulate login success and redirect to home page

    try {
      const response = await axios.post("http://localhost:4500/login", data);

      console.log(response);

      if (response.status === 201) {
        alert("Login Successful");

        navigate("/");
      } else if (response.status === 409) {
        alert("Create an account first");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          alert("User doesn't exists");
        } else {
          alert("An error occurred: " + error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <SignInStyled>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@gmail.com"
              required
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </SignInStyled>
  );
};

export default Login;
