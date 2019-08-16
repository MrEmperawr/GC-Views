import React, {useState, useEffect} from 'react';
import { RingLoader } from 'react-spinners';
import fetch from 'node-fetch';
import GamesList from './GamesList';
import CompList from './CompList';
import './css/TeamMatchList.css';

function TeamMatchList (props) {
    return (
        <div className="GamesList">
            <div>{props.name}</div>
        </div>
      );
    }  

export default TeamMatchList;
  
