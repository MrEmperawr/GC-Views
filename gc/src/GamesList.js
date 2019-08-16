import React, {useState, useEffect} from 'react';
import TeamMatchList from './TeamMatchList';
import './css/GamesList.css';

function GamesList(props) {
  const [team, setTeam] = useState(null);
  const [teamListClicked, setTeamListClicked] = useState(false)
  const [currentGameListData, setCurrentGameListData] = useState(null)
  const teamList = Object.keys(props.teams)
    .map(key => props.teams[key].team)
  

  const showTeamList = () => {
    setTeamListClicked(!teamListClicked);
  }

  const showTeamGames = (teamName) => {
    setTeam(teamName)
  }

  useEffect(() => {
    const teams = Object.keys(props.teams).map(key => props.teams[key]);
    let currentGameListData = teams
      .filter(thisTeam => thisTeam.team === team)
      .map(teamData => teamData.match)
    setCurrentGameListData(currentGameListData);

  }, [team])

  useEffect(() => {

  }, [teamListClicked])

  if (!teamListClicked) return (
    <div className="GamesList">
      <div 
        className="GamesList-slectionField"
        onClick={showTeamList}>Choose Team</div>
    </div>
  );

  if (teamListClicked) 
    return (
    <div className="GamesList">
      <div 
        className="GamesList-slectionField">
          <ul>
            {teamList
            .map(teamName =>
            <li 
              key={teamName} 
              className="GamesList-List"
              onClick={() => {
                showTeamGames(teamName)}}>
              {teamName}
            </li>
            )}
          </ul>
        </div>
        {team && true ? 
          <ul>
          {console.log(currentGameListData)}
            {currentGameListData.map(matchData =>
              matchData.map(data => 
              <li 
              className="GamesList-Game"
              key={data.fmid}>
                <p>{data.time}</p>
                <p>{data.team2.val} - {data.team1.val}</p>
                <p>{data.venue}</p>
              </li>
              )
            )}
          </ul> 
          : <div></div>}
    </div>
  );
}

export default GamesList;