import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>QuizMaster</h1>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/question/1">Start Quiz</Link></li>
        <li><Link to="/">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
