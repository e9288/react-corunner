
let maxId = 4;
const user = {
  frcsCustNo : 'qpwoy00'
}

//하나의 reducer 내의 state는 로컬(자기자신)의 state를 가리킨다.
export const userReducer = (state = user, action) => {
  let frcsCustNo = state.frcsCustNo;

  return{
    ...state,
    frcsCustNo : frcsCustNo
  };
}
