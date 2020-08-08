// action creator : action을 동적으로 생성
import {ADD_PLAYER, REMOVE_PLAYER, CHANGE_SCORE} from "./action_types";

export const addPlayer = (name) => ({
 type: ADD_PLAYER,
 name: name
})

export const removePlayer = (id) => ({
 type: REMOVE_PLAYER,
 id: id
})

export const changeScore = (id, delta) => ({
 type: CHANGE_SCORE,
 id: id,
 delta: delta
})