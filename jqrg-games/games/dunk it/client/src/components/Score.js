import React, { Component } from 'react'
import ScoreDigit from './ScoreDigit';

const scoreStyle = {
    display: 'flex', 
    justifyContent: 'center'
}

export default class Score extends Component {
  render() {
    const score = this.props.score;
    const ones = score % 10;
    const tens = (score - ones) / 10;
    return (
      <div>

      <div style={scoreStyle}>
        <ScoreDigit digit={tens}/>
        <ScoreDigit digit={ones}/>
      </div>
      </div>
      
    )
  }
}
