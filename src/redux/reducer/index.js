import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {userReducer} from "./userReducer";
import {playerReducer} from "./playerReducer";

export const allReducers = combineReducers({
  playerReducer: playerReducer
})
