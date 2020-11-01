import * as APIUtil from "../util/subscriptions_api_util";

export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";

// POJO action creators

export const receiveSubscription = subscription => {
  return {
    type: RECEIVE_SUBSCRIPTION,
    subscription
  };
};

export const removeSubscription = subscription => {
  return {
    type: REMOVE_SUBSCRIPTION,
    subscription
  };
};

// Thunk action creators

export const createSubscription = subscription => dispatch => {
  return APIUtil.createSubscription(subscription).then(subscription => {
    return dispatch(receiveSubscription(subscription));
  });
};

export const destroySubscription = subscription => dispatch => {
  return APIUtil.destroySubscription(subscription).then(subscription => {
    return dispatch(removeSubscription(subscription));
  });
};