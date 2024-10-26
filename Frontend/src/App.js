// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Header from './components/Header/Header.js'; // Import the Header


function App() {
  return (
    <Router>
      <div className="App">
        {/* Use the Header component */}
        <Header />

        <Routes>
          {/* Define the paths for your Login and Signup components */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Homepage */}
          <Route path="/" element={<h1>Welcome to the Homepage</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
