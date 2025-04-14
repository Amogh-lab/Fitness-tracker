import React from 'react';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/" className="navbar-item">Home</a></li>
        <li><a href="/about" className="navbar-item">About</a></li>
        <li><a href="#services" className="navbar-item">Services</a></li>
        <li><a href="#contact" className="navbar-item">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
