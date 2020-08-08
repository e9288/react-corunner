import {Counter} from "./Counter";
import React from "react";
import {addPlayer, removePlayer} from "../redux/actions";
import {connect} from "react-redux";

const Player = (props) => {
  // console.log(props);
  return (
    <div className="player">
      <span className='player-name'>
        <button className='remove-player' onClick={() => props.removePlayer(props.id)}> x </button>
        {props.name}
      </span>
      <Counter score={props.score} id={props.id} />
    </div>
  );
}

const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id)),

  // dispatch(action)
})
export default connect(null, mapActionToProps)(Player);

// connect(받음,넘김)(컴포넌트)