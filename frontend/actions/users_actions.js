import * as APIUtil from "../util/users_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

export const usersActionsTest = "hello"; // TESTING

// POJO action creators

export const receiveUser = user => {
  // debugger
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveUserErrors = errors => {
  // debugger
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const clearUserErrors = () => {
  // debugger
  return {
    type: CLEAR_USER_ERRORS
  };
};

// thunk action creators

export const fetchUser = userId => dispatch => {
  // debugger
  return APIUtil.fetchUser(userId).then(user => {
    // debugger
    return dispatch(receiveUser(user));
  }, error => {
    // debugger
    return dispatch(receiveUserErrors(error.responseJSON));
  })
};