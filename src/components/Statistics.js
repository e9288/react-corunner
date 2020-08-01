import React from 'react';
import _ from 'lodash';

export const Statistics = (props) => {
  const players = [...props.players];

  let totalPlayer = players.length;
  let totalScore = 0;
  /*
  players.forEach(player => {
    //totalPlayer++;
    totalScore += player.score;
  })
  */
  // totalScore = _.sumBy(players, player => player.score);
  totalScore = _.sumBy(players, 'score');

  console.log();
  return (
    <table className='stats'>
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayer}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  )
}