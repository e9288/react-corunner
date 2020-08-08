import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {addPlayer} from "../redux/actions";


function AddPlayerForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  let handleValueChange = (e) => {
    setValue(e.target.value);
  }

  let handleSubmit = (e) => {
    // form의 기본 동작 (reloading) 막기
    e.preventDefault();

    // 폼 유효성 검증
    // HTML 5 validation check API를 이용해서 검증한다.
    const player = document.getElementById("player");
    const form = document.getElementById("form");
    console.log(player.validity.valid);
    console.log(form.checkValidity());

    if (!form.checkValidity()) {
      return;
    }

    dispatch(addPlayer(value.toUpperCase()));
    setValue('');
  }

    return (
      <form id="form" className="form" onSubmit={handleSubmit} noValidate>
        <input id="player" className="input" type="text" placeholder="enter a player's name" value={value}
               onChange={handleValueChange} required/>
        <input className="input" type="submit" value="ADD PLAYER"/>
      </form>
    );
}

export default AddPlayerForm;