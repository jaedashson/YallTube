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
    type: RECEIVE_COMMENT,
    comment
  };
};

// Thunk action creators

// TODO - Write error action creators
export const fetchParentComments = videoId => dispatch => {
  return APIUtil.fetchParentComments(videoId).then(comments => {
    return dispatch(receiveComments(comments));
  });
};

// TODO - Write error action creators
export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment).then(comment => {
    return dispatch(receiveComment(comment));
  });
};