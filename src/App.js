import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {CustomPlayer} from './components/CustomPlayer';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import * as _ from 'lodash';


class App extends React.Component {

  getHighScore() {
    const highScoreObject = _.maxBy(this.props.players, 'score');
    return highScoreObject.score === 0 ? '' : highScoreObject.score;
  }

  handleChangeScore = (id, delta) => {
    // console.log('handleScore:', id,delta);
    this.setState(prevState => {
      const players = [...prevState.players];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      });
      return {players};
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>

        {
          this.props.players.map(player =>
            <CustomPlayer name={player.name} score={player.score} id={player.id} key={player.id}
                          isHighScore={player.score === this.getHighScore()}></CustomPlayer>)
        }
        <AddPlayerForm/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //state : store 전체 state
  //왼쪽이 props, 오른쪽이 store의 state
  players: state.playerReducer.players
})

export default connect(mapStateToProps, null)(App);
