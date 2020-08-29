import {combineReducers} from "redux";
import { userReducer } from "./userReducer";

export const allReducers = combineReducers({
  // 전체 state가 여기서 관리된다.
  userReducer: userReducer
})
