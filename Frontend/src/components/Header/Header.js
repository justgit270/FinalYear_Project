// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Header component
const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        {/* Make the logo clickable */}
        <Link to="/" className="logo-link">
          <h1>My Website</h1>
        </Link>
      </div>
      <div className="auth-buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
      </div>
    </HeaderStyled>
  );
};

// Styled-components for the header
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;

  .logo {
    .logo-link {
      text-decoration: none; /* Remove underline from the link */
      color: white; /* Change the color of the link to white */
    h1 {
      margin: 0;
      cursor: pointer; /* Optional: Change the cursor style */
    }
  }
}

  .auth-buttons {
    button {
      margin-left: 10px;
      padding: 8px 16px;
      background-color: #61dafb;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      color: black;
    }
    button:hover {
      background-color: #21a1f1;
    }
  }
`;

export default Header;
