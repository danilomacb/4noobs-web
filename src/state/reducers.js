import { SET_README, SET_FILES } from "./actions";

function reducers(state = {}, action) {
  switch (action.type) {
    case SET_README:
      return { ...state, readme: action.readme };
    case SET_FILES:
      return { ...state, files: action.files };
    default:
      return state;
  }
}

export default reducers;
