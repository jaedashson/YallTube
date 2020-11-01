import { cloneDeep } from "lodash";

import {
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";
import {
  RECEIVE_USER,
  RECEIVE_USERS
} from "../actions/users_actions";
import {
  RECEIVE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from "../actions/subscriptions_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;
  let subscription;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      newState = cloneDeep(state);
      action.users.forEach(user => newState[user.id] = user);
      return newState;
    case RECEIVE_SUBSCRIPTION:
      newState = cloneDeep(state);
      subscription = action.subscription;
      newState[subscription.channel_id].subscriberCount++;
      return newState;
    case REMOVE_SUBSCRIPTION:
      newState = cloneDeep(state);
      subscription = action.subscription;
      newState[subscription.channel_id].subscriberCount--;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;