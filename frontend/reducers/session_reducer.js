import {
  RECEIVE_EMAIL_ATTEMPT,
  CLEAR_EMAIL_ATTEMPT,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const _nullUser = Object.freeze({ id: null });

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_EMAIL_ATTEMPT:
      debugger
      newState["attemptedUser"] = action.attemptedUser;
      return { attemptedUser: action.attemptedUser };
    case CLEAR_EMAIL_ATTEMPT:
      debugger
      delete newState["attemptedUser"];
      return newState;
    case RECEIVE_CURRENT_USER:
      debugger
      newState["id"] = action.currentUser.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      debugger
      return _nullUser;
    default:
      debugger
      return state;
  }
};

export default sessionReducer;