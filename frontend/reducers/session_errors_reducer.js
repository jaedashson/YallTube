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
      const newState = state.slice();
      newState.push(action.error);
      return newState;
    case RECEIVE_SESSION_ERRORS: // Sets errors to the action's errors
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER: // Clears the errors
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;