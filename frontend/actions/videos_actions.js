import * as APIUtil from "../util/videos_api_util";

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const CLEAR_VIDEO_ERRORS = "CLEAR_VIDEO_ERRORS";
export const CREATE_VIDEO = "CREATE_VIDEO";

// POJO action creators

export const receiveVideo = video => {
  // debugger
  return {
    type: RECEIVE_VIDEO,
    video
  };
};

export const receiveVideoErrors = errors => {
  // debugger
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors
  };
};

export const clearVideoErrors = () => {
  // debugger
  return {
    type: CLEAR_VIDEO_ERRORS
  };
};

// thunk action creators

export const fetchVideo = videoId => dispatch => {
  // debugger
  return APIUtil.fetchVideo(videoId).then(video => {
    // debugger
    return dispatch(receiveVideo(video));
  }, error => {
    // debugger
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};

// Need to establish difference between createVideo and attachVideo
export const createVideo = video => dispatch => {
  debugger
  return APIUtil.createVideo(video).then(response => {
    debugger
    console.log(response.message);
  }, error => {
    debugger
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};