import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {CustomPlayer} from './components/CustomPlayer';
import AddPlayerForm from "./components/AddPlayerForm";
import {useSelector} from "react-redux";
import * as _ from 'lodash';


function App() {
  const players = useSelector(state => state.playerReducer.players);

  let getHighScore = () => {
    const highScoreObject = _.maxBy(players, 'score');
    return highScoreObject.score === 0 ? '' : highScoreObject.score;
  }


  return (
    <div className="scoreboard">
      <Header players={players}/>

      {
        players.map(player =>
          <CustomPlayer name={player.name} score={player.score} id={player.id} key={player.id}
                        isHighScore={player.score === getHighScore()}></CustomPlayer>)
      }
      <AddPlayerForm/>
    </div>
  );

}

export default (App);
