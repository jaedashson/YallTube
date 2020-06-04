import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_SESSION_ERROR,
  CLEAR_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERROR:
      debugger
      const newState = state.slice();
      newState.push(action.error);
      return newState;
    case RECEIVE_SESSION_ERRORS:
      debugger
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      debugger
      return ["ERRORS CLEARED"];
    case RECEIVE_CURRENT_USER:
      debugger
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;