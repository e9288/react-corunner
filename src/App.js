import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='h1'>Scoreboard</h1>
      <span className='stats'>Player: 1</span>
    </header>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  }

  handleScore = (delta) => {
    //this.setState({score:this.state.score+1});
    this.setState( (prevState) => ({score:prevState.score+delta}));
  }
/*
  constructor() {
    super();
    //this.incrementScore = this.incrementScore.bind(this);
    //에로우 펑션을 이용하면 바인드 하지 않아도 됨.
  }
*/

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={ () => this.handleScore(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={ () => this.handleScore(1)}> + </button>
      </div>
    );
  }
}
/*
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}
*/
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className='remove-player' onClick={ () => props.removePlayer(props.id)}> x </button>
        {props.name}</span>
      <Counter score={props.score} />
    </div>
  );
}

class App extends React.Component {
  state = {
    players : [
      {name: 'LDK', score: 30, id: 0},
      {name: 'HONG', score: 40, id: 1},
      {name: 'KIM', score: 50, id: 2},
      {name: 'PARK', score: 60, id: 3},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('remove player : ' + id);
    this.setState( (prevState) => {
      // const players = prevState.players;
      // 위 처럼 원본 state 데이터 자체를 가져오는 것이 아니라
      // spread 연산자를 통해 원본 state와 동일한 새 객체를 생성하여 처리하도록 한다.
      // memory 주소 값이 변경됨을 감지하고 rendering 하는 react의 성질때문.
      const players = [...prevState.players];
      const index = players.findIndex(player => player.id ===id)
      players.splice(index, 1);
      return { players: players };
    });
  }
  render() {
    return (
      <div className="scoreboard">
        <Header />
        {
          this.state.players.map(player =>
            <Player key={player.id} name={player.name} score={player.score}
                    removePlayer={this.handleRemovePlayer} id={player.id}></Player>
          )
        }
      </div>
    );
  }
}

export default App;
