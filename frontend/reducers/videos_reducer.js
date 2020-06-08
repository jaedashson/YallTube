import {
  RECEIVE_VIDEO
} from "../actions/videos_actions";

const videosReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      // debugger
      return Object.assign({}, state, { [action.video.id]: action.video });
    default:
      // debugger
      return state;
  }
};

export default videosReducer;