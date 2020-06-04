import {
  RECEIVE_EMAIL_ATTEMPT,
  CLEAR_EMAIL_ATTEMPT,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const defaultState = {
  id: null,
  attemptedUser: null
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_EMAIL_ATTEMPT:
      debugger
      newState["attemptedUser"] = action.attemptedUser;
      return newState;
    case CLEAR_EMAIL_ATTEMPT:
      debugger
      newState["attemptedUser"] = null;
      return newState;
    case RECEIVE_CURRENT_USER:
      debugger
      newState["id"] = action.currentUser.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      debugger
      newState["id"] = null;
      return newState;
    default:
      debugger
      return state;
  }
};

export default sessionReducer;