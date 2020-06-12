export const createVideoVote = vote => {
  debugger
  return $.ajax({
    method: "POST",
    url: "/api/video_votes",
    data: { vote }
  });
};

export const destroyVideoVote = vote => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: "/api/video_votes",
    data: { vote }
  })
}