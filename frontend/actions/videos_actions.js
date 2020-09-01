import * as APIUtil from "../util/videos_api_util";

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
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

export const receiveAllVideos = videos => {
  // debugger
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos
  };
};

export const receiveVideos = videos => {
  // debugger
  return {
    type: RECEIVE_VIDEOS,
    videos
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

// Thunk action creators

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

export const fetchAllVideos = () => dispatch => {
  // debugger
  return APIUtil.fetchAllVideos().then(videos => {
    // debugger
    return dispatch(receiveAllVideos(videos));
  }, error => {
    // debugger
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};

export const fetchVideos = (videoIds) => dispatch => {
  // debugger
  return APIUtil.fetchVideos(videoIds).then(videos => {
    // debugger
    return dispatch(receiveVideos(videos));
  }, error => {
    // debugger
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};

// Need to establish difference between createVideo and attachVideo
export const createVideo = video => dispatch => {
  // debugger
  return APIUtil.createVideo(video).then(video => {
    // debugger
    return dispatch(receiveVideo(video));
  }, error => {
    // debugger
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};