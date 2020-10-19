export const createVideoVote = vote => {
  return $.ajax({
    method: "POST",
    url: "/api/video_votes",
    data: { video_vote: vote }
  });
};

export const destroyVideoVote = vote => {
  return $.ajax({
    method: "DELETE",
    url: "/api/video_votes",
    data: { video_vote: vote }
  })
}