export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: "/api/comments",
    data: { comment: comment }
  });
};

export const fetchComments = videoId => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}/comments`
  });
};