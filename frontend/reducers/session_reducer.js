import {
  RECEIVE_EMAIL_ATTEMPT,
  CLEAR_EMAIL_ATTEMPT,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const defaultState = {
  id: null,
  attemptedUser: null,
  likedVideoIds: [],
  dislikedVideoIds: [],
  uploadedVideoIds: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_EMAIL_ATTEMPT:
      newState["attemptedUser"] = action.attemptedUser;
      return newState;
    case CLEAR_EMAIL_ATTEMPT:
      newState["attemptedUser"] = null;
      return newState;
    case RECEIVE_CURRENT_USER:
      // debugger
      newState["id"] = action.currentUser.id;
      newState["likedVideoIds"] = action.currentUser.likedVideoIds;
      newState["dislikedVideoIds"] = action.currentUser.dislikedVideoIds;
      newState["uploadedVideoIds"] = action.currentUser.uploadedVideoIds;
      return newState;
    case LOGOUT_CURRENT_USER:
      newState["id"] = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;