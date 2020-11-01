export const createSubscription = subscription => {
  return $.ajax({
    method: "POST",
    url: "/api/subscriptions",
    data: { subscription }
  });
};

export const destroySubscription = subscription => {
  return $.ajax({
    method: "DELETE",
    url: "/api/subscriptions",
    data: { subscription }
  });
};