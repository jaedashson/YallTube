import * as APIUtil from "../util/users_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

export const usersActionsTest = "hello"; // TESTING

// POJO action creators

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const clearUserErrors = () => {
  return {
    type: CLEAR_USER_ERRORS
  };
};

// thunk action creators

export const fetchUser = userId => dispatch => {
  return APIUtil.fetchUser(userId).then(user => {
    return dispatch(receiveUser(user));
  }, error => {
    return dispatch(receiveUserErrors(error.responseJSON));
  })
};