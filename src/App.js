import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {


  handleChangeScore = (id, delta) => {
    // console.log('handleScore:', id,delta);
    this.setState(prevState => {
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if(player.id === id) {
          player.score += delta;
        }
      });
      return {players};
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players} />

        {
          this.props.players.map(player =>
            <Player name={player.name} score={player.score} id={player.id} key={player.id}
                    changeScore={this.handleChangeScore} />)
        }
        <AddPlayerForm />
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
