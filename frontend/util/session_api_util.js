export const signup = user => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
);

export const getUserByEmail = email => (
  $.ajax({
    method: "GET",
    url: `/api/users?email=${email}`
  })
);

export const login = user => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
);