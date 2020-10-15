import { cloneDeep } from "lodash";

import {
  RECEIVE_VIDEO,
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEOS
} from "../actions/videos_actions";
import {
  RECEIVE_PARENT_COMMENT,
  RECEIVE_REPLY
} from "../actions/comments_actions"

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;
  switch (action.type) {
    case RECEIVE_VIDEO:
      return Object.assign({}, state, { [action.video.id]: action.video });
    case RECEIVE_ALL_VIDEOS:
      newState = {};
      action.videos.forEach(video => newState[video.id] = video);
      return newState;
    case RECEIVE_VIDEOS:
      newState = Object.assign({}, state);
      action.videos.forEach(video => newState[video.id] = video);
      return newState;
    case RECEIVE_PARENT_COMMENT:
      newState = cloneDeep(state);
      newState[action.comment.video_id].commentCount++;
      return newState;
    case RECEIVE_REPLY:
      newState = cloneDeep(state);
      newState[action.comment.video_id].commentCount++;
      return newState;
    default:
      return state;
  }
};

export default videosReducer;