import * as APIUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

// POJO action creators

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

// Thunk action creators

export const fetchComments = videoId => dispatch => {
  return APIUtil.fetchComments(videoId).then(comments => {
    return dispatch(receiveComments(comments));
  });
};