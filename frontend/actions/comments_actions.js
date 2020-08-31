import * as APIUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";


// POJO action creators

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENTS,
    comment
  };
};

// Thunk action creators

// TODO - Write error action creators
export const fetchComments = videoId => dispatch => {
  return APIUtil.fetchComments(videoId).then(comments => {
    return dispatch(receiveComments(comments));
  });
};

// TODO - Write error action creators
export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment).then(comment => {
    return dispatch(receiveComment(comment));
  });
};