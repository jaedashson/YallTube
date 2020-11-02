import * as APIUtil from "../util/videos_api_util";

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const CLEAR_VIDEO_ERRORS = "CLEAR_VIDEO_ERRORS";
export const CREATE_VIDEO = "CREATE_VIDEO";

// POJO action creators

export const receiveVideo = video => {
  return {
    type: RECEIVE_VIDEO,
    video
  };
};

export const receiveAllVideos = videos => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos
  };
};

export const receiveVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos
  };
};

export const receiveVideoErrors = errors => {
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors
  };
};

export const clearVideoErrors = () => {
  return {
    type: CLEAR_VIDEO_ERRORS
  };
};

// Thunk action creators

export const fetchVideo = videoId => dispatch => {
  return APIUtil.fetchVideo(videoId).then(video => {
    return dispatch(receiveVideo(video));
  }, error => {
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};

export const fetchAllVideos = () => dispatch => {
  return APIUtil.fetchAllVideos().then(videos => {
    return dispatch(receiveAllVideos(videos));
  }, error => {
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};

export const fetchVideos = videoIds => dispatch => {
  return APIUtil.fetchVideos(videoIds).then(videos => {
    return dispatch(receiveVideos(videos));
  }, error => {
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};

export const fetchSubscriptions = uploaderIds => dispatch => {
  return APIUtil.fetchSubscriptions(uploaderIds).then(videos => {
    return dispatch(receiveVideos(videos));
  }, error => {
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};

// Need to establish difference between createVideo and attachVideo
export const createVideo = video => dispatch => {
  return APIUtil.createVideo(video).then(video => {
    return dispatch(receiveVideo(video));
  }, error => {
    return dispatch(receiveVideoErrors(error.responseJSON));
  });
};