import {
  RECEIVE_VIDEO,
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEOS
} from "../actions/videos_actions";
import {
  RECEIVE_PARENT_COMMENT
} from "../actions/comments_actions"


const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      return Object.assign({}, state, { [action.video.id]: action.video });
    case RECEIVE_ALL_VIDEOS:
      let newState = {};
      action.videos.forEach(video => newState[video.id] = video);
      return newState;
    case RECEIVE_VIDEOS:
      let newState1 = Object.assign({}, state);
      action.videos.forEach(video => newState1[video.id] = video);
      return newState1;
    case RECEIVE_PARENT_COMMENT:
      let newState2 = Object.assign({}, state);
      // debugger
      newState2[action.comment.video_id].commentCount++;
      // debugger
      return newState2;
    default:
      return state;
  }
};

export default videosReducer;