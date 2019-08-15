import React, {useState, useEffect} from 'react';
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
      getGameData();
    }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Lists etc!</h1>
      </header>
      <div>
        <GamesList/>
        <CompList/>
      </div>
    </div>
  );
}

export default App;
