import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpStyled } from "./Auth.styled.js";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name.toUpperCase(),
      email,
      password,
      number,
      address,
      state: state.toUpperCase(),
      country: country.toUpperCase(),
      city: city.toUpperCase(),
      pincode,
    };
    console.log("User details:", data);

    try {
      const response = await axios.post("http://localhost:4500/signup", data);

      if (response.status === 201) {
        alert("Signup Successful");

        navigate("/login"); 
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          alert("User already exists");
        } else {
          alert("An error occurred: " + error.response.data.message);
        }
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <SignUpStyled>
      <div className="signup">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              autoFocus
              required
            />
          </div>
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
          <div>
            <input
              className="input"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Phone no"
              required
            />
          </div>
          <div>
            <input
              className="input"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
          </div>
          <div>
            <input
              className="input"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              required
            />
          </div>
          <div>
            <input
              className="input"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
              required
            />
          </div>
          <div>
            <input
              className="input"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
            />
          </div>
          <div>
            <input
              className="input"
              type="number"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Pin code"
              required
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </SignUpStyled>
  );
};

export default Signup;
