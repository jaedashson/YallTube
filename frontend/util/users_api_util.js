export const fetchUser = userId => {
  // debugger
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  });
};

export const fetchVotedVideoIds = userId => {
  // debugger
  
}