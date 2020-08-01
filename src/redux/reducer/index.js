import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {userReducer} from "./userReducer";

export const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
})
