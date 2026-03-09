import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Scoreboard } from './models/scoreboard';

let scoreboard = Scoreboard.create({
    home: {
      name: 'home team',
      score: 0
    },  
    guest: {
      name: 'guest team',
      score: 0
    },  
    timer: {
      seconds: 30
    }
  });

ReactDOM.render(<App scoreboard={scoreboard}/>, document.getElementById('root'));

const socket = new WebSocket("ws://localhost:4001")
socket.onmessage = event => { // type of event is MessageEvent
  // event.data is a string. 
  let ev = JSON.parse(event.data);
  console.log(ev.score);
  // scoreboard.score.setScore(ev.score);
  scoreboard.setScore(ev.score);
}
