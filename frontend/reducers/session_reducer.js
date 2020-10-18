import { cloneDeep } from "lodash";

import {
  RECEIVE_EMAIL_ATTEMPT,
  CLEAR_EMAIL_ATTEMPT,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";
import {
  RECEIVE_VIEW
} from "../actions/views_actions";
import {
  RECEIVE_VIDEO_VOTE,
  REMOVE_VIDEO_VOTE
} from "../actions/video_votes_actions";

const defaultState = {
  id: null,
  attemptedUser: null,
  likedVideoIds: [],
  dislikedVideoIds: [],
  uploadedVideoIds: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = null;
  // const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_EMAIL_ATTEMPT:
      newState = cloneDeep(state);
      newState["attemptedUser"] = action.attemptedUser;
      return newState;
    case CLEAR_EMAIL_ATTEMPT:
      newState = cloneDeep(state);
      newState["attemptedUser"] = null;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = cloneDeep(state);
      newState["id"] = action.currentUser.id;
      newState["likedVideoIds"] = action.currentUser.likedVideoIds;
      newState["dislikedVideoIds"] = action.currentUser.dislikedVideoIds;
      newState["uploadedVideoIds"] = action.currentUser.uploadedVideoIds;
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = cloneDeep(state);
      newState["id"] = null;
      return newState;
    case RECEIVE_VIEW:
      newState = cloneDeep(state);
      if (!newState["viewedVideoIds"].includes(action.view.video_id)) {
        newState["viewedVideoIds"].push(action.view.video_id);
      }
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;