import React, {Component} from 'react';

export class Stopwatch extends Component {

  tickRef;

  state  = {
    timer: 0,
    isRunning : false
  }
  tick = () => {
    console.log("a");
    if(this.state.isRunning){
      this.setState(prevState => ({
        timer : prevState.timer + 1
      }));
    }

  }

  handleStopwatch = () => {
    this.setState(prevState => {
      return ({
        isRunning: !prevState.isRunning
      });
    })
}
  //DOM rending 직후
  //api 호출, 3rd lib loading 직후 등
  componentDidMount() {
    this.tickRef = window.setInterval(this.tick, 1000);
  }

  //DOM destory 직전
  //리소스 해제 등
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button>Reset</button>
      </div>
    )
  }
}