export const signup = user => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
};

export const getUserByEmail = email => {
  return $.ajax({
    method: "GET",
    url: `/api/users?email=${email}`
  })
};

export const login = user => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  })
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
};