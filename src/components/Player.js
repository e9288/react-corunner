import Counter from "./Counter";
import React from "react";
import {removePlayer} from "../redux/actions";
import {useDispatch} from "react-redux";

const Player = (props) => {

  const dispatch = useDispatch();
  return (
    <div className="player">
      <span className='player-name'>
        <button className='remove-player'
                onClick={() => dispatch(removePlayer(props.id))}> x </button>
        {props.children}
        {props.name}
      </span>
      <Counter score={props.score} id={props.id} />
    </div>
  );
}

export default Player;
