import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";

export const allReducers = combineReducers({
  // 전체 state가 여기서 관리된다.
  playerReducer: playerReducer
})
