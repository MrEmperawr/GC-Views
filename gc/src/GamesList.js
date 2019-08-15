import React from 'react';
import './css/GamesList.css';

function GamesList(props) {
  return (
    <div className="GamesList">
      This is where the Games will go. Oh muh lawd :o
      {console.log(props)}
    </div>
  );
}

export default GamesList;