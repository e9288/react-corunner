import {ADD_PLAYER} from "../action_types";

let maxId = 4;
const playerInitialState = {
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ]
}

//하나의 reducer 내의 state는 로컬(자기자신)의 state를 가리킨다.
export const playerReducer = (state = playerInitialState, action) => {
  switch(action.type) {
    case ADD_PLAYER:
      const players = [ ...state.players ];
      players.push({name: action.name, score: 0, id: ++maxId})
      return {
        ...state,
        players: players
      };
    default:
      return state;
  }
}
