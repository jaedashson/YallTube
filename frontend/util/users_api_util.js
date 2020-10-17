export const fetchUser = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  });
};

export const fetchUsers = userIds => {
  return $.ajax({
    method: "GET",
    url: "/api/users_by_id",
    data: { userIds }
  });
};