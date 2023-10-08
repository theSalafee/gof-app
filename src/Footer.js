import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='footer-text'>
        © {new Date().getFullYear()} Game of Thrones Books. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;