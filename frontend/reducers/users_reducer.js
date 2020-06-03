import {
  RECEIVE_EMAIL_ATTEMPT,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EMAIL_ATTEMPT:
      return Object.assign({}, state, { [action.attemptedUser.id]: action.attemptedUser });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;