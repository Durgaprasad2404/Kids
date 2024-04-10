import React, { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            {/* eslint-disable-next-line */}
          <a href="#" className='nav-item'>Home</a>
          {/* eslint-disable-next-line */}
          <a href="#" className='nav-item'>Our Alphabets</a>
          {/* eslint-disable-next-line */}
          <a href="#" className='nav-item'>Stories</a>
          {/* eslint-disable-next-line */}
          <a href="#" className='nav-item'>Rhymes</a>
          {/* eslint-disable-next-line */}
          <a href="#" className='nav-item'>Puzzles</a>
          {/* eslint-disable-next-line */}
          <a href="#" className='nav-item'>Contact Us</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
