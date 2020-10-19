import * as APIUtil from "../util/video_votes_api_util";

export const RECEIVE_VIDEO_VOTE = "RECEIVE_VIDEO_VOTE";
export const REMOVE_VIDEO_VOTE = "REMOVE_VIDEO_VOTE";

// POJO action creators

export const receiveVideoVote = videoVote => {
  return {
    type: RECEIVE_VIDEO_VOTE,
    videoVote
  };
};

export const removeVideoVote = videoVote => {
  return {
    type: REMOVE_VIDEO_VOTE,
    videoVote
  }
}

// Thunk action creators

export const createVideoVote = videoVote => dispatch => {
  debugger
  return APIUtil.createVideoVote(videoVote).then(videoVote => {
    debugger
    return dispatch(receiveVideoVote(videoVote));
  });
};

export const destroyVideoVote = videoVote => dispatch => {
  return APIUtil.destroyVideoVote(videoVote).then(videoVote => {
    return dispatch(removeVideoVote(videoVote));
  });
};