import React, { Component } from 'react'
import Score from './Score';
import Timer from './Timer';
import { observer } from 'mobx-react';

const scoreboardStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr'
}

class Scoreboard extends Component {
  render() {
    return (
      <div style={scoreboardStyle}>
        <p>Home</p>
        <p>Guest</p>
        <Score score={this.props.scoreboard.home.score} />    
        <Score score={this.props.scoreboard.guest.score} />    
      </div>
    )
  }
}

export default observer(Scoreboard);
