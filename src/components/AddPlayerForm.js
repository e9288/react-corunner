import React from 'react'

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    // form의 기본 동작 (reloading) 막기
    e.preventDefault();

    // 폼 유효성 검증
    // HTML 5 validation check API를 이용해서 검증한다.
    const player = document.getElementById("player");
    const form = document.getElementById("form");
    console.log(player.validity.valid);
    console.log(form.checkValidity());

    if(!form.checkValidity()){

      return;
    }

    this.props.addPlayer(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form id="form" className="form" onSubmit={this.handleSubmit} noValidate >
        <input id="player" className="input" type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleValueChange} required />
        <input className="input" type="submit" value="ADD PLAYER" />
      </form>
    );
  }
}