export const createVideoVote = vote => {
  return $.ajax({
    method: "POST",
    url: "/api/video_votes",
    data: { vote }
  });
};

export const destroyVideoVote = vote => {
  return $.ajax({
    method: "DELETE",
    url: "/api/video_votes",
    data: { vote }
  })
}