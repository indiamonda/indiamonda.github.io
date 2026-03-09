import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  render() {
    console.log(this.props.scoreboard);
    return (
      <div className="App">
        <Scoreboard scoreboard={this.props.scoreboard} />
      </div>
    );
  }
}

export default observer(App);
