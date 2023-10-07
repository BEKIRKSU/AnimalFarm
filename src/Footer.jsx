import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="footer">
        <div className="footer-copyright">Copyright © {currentDate.getFullYear()} </div> 
    </footer>
  );
};

export default Footer;
