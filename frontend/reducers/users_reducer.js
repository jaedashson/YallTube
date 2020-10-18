import { cloneDeep } from "lodash";

import {
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";
import {
  RECEIVE_USER,
  RECEIVE_USERS
} from "../actions/users_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      newState = cloneDeep(state);
      action.users.forEach(user => newState[user.id] = user);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;