import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='header-title'>Game of Thrones Books</h1>
      <h2 className='header-subtitle'>Fetch a list from an API and display it</h2>
    </div>
  );
};

export default Header;