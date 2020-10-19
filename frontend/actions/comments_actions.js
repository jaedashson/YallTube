import * as APIUtil from "../util/comments_api_util";

export const RECEIVE_PARENT_COMMENTS = "RECEIVE_PARENT_COMMENTS";
export const RECEIVE_PARENT_COMMENT = "RECEIVE_PARENT_COMMENT";
export const RECEIVE_REPLIES = "RECEIVE_REPLIES";
export const RECEIVE_REPLY = "RECEIVE_REPLY";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

// POJO action creators

export const receiveParentComments = comments => {
  return {
    type: RECEIVE_PARENT_COMMENTS,
    comments
  };
};

export const receiveParentComment = comment => {
  return {
    type: RECEIVE_PARENT_COMMENT,
    comment
  };
};

export const receiveReplies = comments => {
  return {
    type: RECEIVE_REPLIES,
    comments
  };
};

export const receiveReply = comment => {
  return {
    type: RECEIVE_REPLY,
    comment
  };
};

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

// Thunk action creators

export const fetchParentComments = videoId => dispatch => {
  return APIUtil.fetchParentComments(videoId).then(comments => {
    return dispatch(receiveParentComments(comments));
  });
};

export const createParentComment = comment => dispatch => {
  return APIUtil.createComment(comment).then(comment => {
    return dispatch(receiveParentComment(comment));
  });
};

export const fetchReplies = commentId => dispatch => {
  return APIUtil.fetchReplies(commentId).then(comments => {
    return dispatch(receiveReplies(comments));
  });
};

export const createReply = comment => dispatch => {
  return APIUtil.createComment(comment).then(comment => {
    return dispatch(receiveReply(comment));
  });
};

export const fetchComments = commentIds => dispatch => {
  return APIUtil.fetchComments(commentIds).then(comments => {
    return dispatch(receiveComments(comments));
  });
};