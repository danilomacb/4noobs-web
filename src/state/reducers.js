import { SET_FILES } from "./actions";

function reducers(state = {}, action) {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.files };
    default:
      return state;
  }
}

export default reducers;
