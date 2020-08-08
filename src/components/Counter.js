import React from "react";
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

class Counter extends React.Component {
  /*

    handleScore = (delta) => {
      // this.state.score += 1;
      // this.setState({score: this.state.score + 1});
      this.setState((prevState) => ({score: prevState.score + delta}));
      //
    }
  */
  render() {
    return (
      <div className="counter">
        <button className='counter-action decrement' onClick={() => this.action.changeScore(this.props.id, -1)}> -
        </button>
        <span className='counter-score'>{this.props.score}</span>
        <button className='counter-action increment' onClick={() => this.action.changeScore(this.props.id, 1)}> +
        </button>
      </div>
    );
  }
}

const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta) => dispatch(changeScore(id, delta))
  // dispatch(action)
})
export default connect(null, mapActionToProps)(Counter);
