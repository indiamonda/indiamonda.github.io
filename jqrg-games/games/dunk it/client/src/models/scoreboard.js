import { types } from 'mobx-state-tree';

// const Score = types
//   .model({
//     score: types.integer
//   })
//   .actions((self) => ({
//     setScore(newScore) {
//       console.log('setting score');
//       self.score = newScore;
//     }
//   }))

const Timer = types
  .model({
    seconds: types.integer
  })
  .actions((self) => ({
    setTime(seconds) {
      self.seconds = seconds;
    },
    start() {
      setInterval(function(){self.seconds = self.seconds - 1;}, 1000);
    } 
  }))

const Team = types
  .model({
    name: types.string,
    score: types.integer
  })
  .actions((self) => ({
    setScore(newScore) {
      self.score = newScore;
    }
  }))

export const Scoreboard = types
  .model({
    home: Team,
    guest: Team,
    // score: types.integer,
    // score: Score,
    timer: Timer
  })
  .actions((self) => ({
    setScore(newScore) {
      // self.score.setScore(newScore);
      self.home.setScore(newScore);
    }
  }))
