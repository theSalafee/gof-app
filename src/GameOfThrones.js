import React from 'react';
import './GameOfThrones.css'; // Import the CSS file

const GameInfo = () => {
  return (
    <div className='game-info-container'>
      <h2 className='game-info-title'>Explore the World of Game of Thrones</h2>
      <p className='game-info-text'>
        Welcome to the Game of Thrones API exploration! This is your gateway to the
        fascinating world of Westeros and Essos. Dive into the rich lore and
        characters of the epic series created by George R.R. Martin.
      </p>
      <button className='explore-button'>Explore Now</button>
    </div>
  );
};

export default GameInfo;