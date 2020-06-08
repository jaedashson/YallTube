import {
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";
import {
  RECEIVE_USER
} from "../actions/users_actions";


const usersReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      debugger
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      // debugger
      return state;
  }
};

export default usersReducer;