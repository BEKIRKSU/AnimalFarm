import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">Bekir's Animal Farm</Link>
    </nav>
  );
};

export default Navbar;