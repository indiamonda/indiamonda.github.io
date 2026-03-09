import React, { Component } from 'react'
import { observer } from 'mobx-react';

const segmentMap = [
    [1, 1, 0, 1, 0, 1, 1, 1], //0
    [0, 1, 0, 0, 0, 1, 0, 0], //1
    [1, 1, 1, 0, 1, 0, 1, 1], //2
    [1, 1, 1, 0, 1, 1, 1, 0], //3 
    [0, 1, 1, 1, 1, 1, 0, 0], //4
    [1, 0, 1, 1, 1, 1, 1, 0], //5
    [1, 0, 1, 1, 1, 1, 1, 1], //6
    [1, 1, 0, 0, 0, 1, 0, 0], //7
    [1, 1, 1, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 1, 1, 0, 0]  //9
];

// A score digit has 7 segments.
class ScoreDigit extends Component {
  deriveStyle() {
    const digit = this.props.digit;
    const segments = segmentMap[digit];
    return {
        upperSquareStyle: {
            width: '100px',
            height: '100px',
            margigRight: '10px',
            marginLeft: '10px',
            borderTop: `20px solid ${segments[0]?'#F00':'#ccc'}`,
            borderRight: `20px solid ${segments[1]?'#F00':'#ccc'}`, 
            borderBottom: `10px solid ${segments[2]?'#F00':'#ccc'}`,
            borderLeft: `20px solid ${segments[3]?'#F00':'#ccc'}`,
        },
        lowerSquareStyle: {
            width: '100px',
            height: '100px',
            margigRight: '10px',
            marginLeft: '10px',
            borderTop: `10px solid ${segments[4]?'#F00':'#ccc'}`,
            borderRight: `20px solid ${segments[5]?'#F00':'#ccc'}`, 
            borderBottom: `20px solid ${segments[6]?'#F00':'#ccc'}`,
            borderLeft: `20px solid ${segments[7]?'#F00':'#ccc'}`,
        }
    }
  }  

  render() {
    const { upperSquareStyle, lowerSquareStyle } = this.deriveStyle();
    return (
      <div>
       <div className="upperSquare" style={upperSquareStyle}></div>
       <div className="lowerSquare" style={lowerSquareStyle}></div> 
      </div>
    )
  }
}

export default observer(ScoreDigit)