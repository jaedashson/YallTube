export const signup = user => {
  debugger
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  })
};

export const getUserByEmail = email => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/users?email=${email}`
  })
};

export const login = user => {
  debugger
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  })
};

export const logout = () => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
};