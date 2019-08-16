import React, {useState, useEffect} from 'react';
import { RingLoader } from 'react-spinners';
import fetch from 'node-fetch';
import GamesList from './GamesList';
import CompList from './CompList';
import './css/App.css';

function App() {
  const [gameData, setGameData] = useState(false);
  
  const getGameData = () => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(data => setGameData(data))
      .catch(error => console.log(error));
  }

  useEffect( () => {
    setTimeout(() => {
        getGameData();
      }, 1000);
    }, [])

  if (gameData) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lists etc!</h1>
        </header>
        <div className="App-ListContainer">
          <GamesList teams={gameData.teams}/>
          <CompList comps={gameData.competitions}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header-loader">
          <RingLoader 
          sizeUnit={"em"}
          size={15}
          color={"white"}
          />
        </header>
      </div>
    );
  }
}

export default App;
