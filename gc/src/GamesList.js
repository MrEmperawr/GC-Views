import React, {useState, useEffect} from 'react';
import './css/GamesList.css';

function GamesList(props) {
  const [team, setTeam] = useState(false);
  const [teamListClicked, setTeamListClicked] = useState(false)
  const teamList = Object.keys(props.teams)
    .map(key => props.teams[key].team)
  

  const showTeamList = () => {
    setTeamListClicked(!teamListClicked);
  }

  const showTeamGames = () => {
    setTeam()
  }

  if (!teamListClicked) return (
    <div className="GamesList">
      {console.log(teamListClicked)}
      <div 
        className="GamesList-slectionField"
        onClick={showTeamList}>Choose Team</div>
    </div>
  );

  if (teamListClicked) return (
    <div className="GamesList">
      {console.log(teamList)}
      <div 
        className="GamesList-slectionField">
          <ul>
            {teamList
            .map(team =>
            <li 
              id={team} 
              className="GamesList-List"
              onClick={showTeamGames}>
              {team}
            </li>
            )}
          </ul>
        </div>
    </div>
  );
}

export default GamesList;