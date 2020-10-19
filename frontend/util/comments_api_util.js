export const createComment = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/comments",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const fetchParentComments = videoId => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}/comments`
  });
};

export const fetchReplies = commentId => {
  return $.ajax({
    method: "GET",
    url: `/api/comments/${commentId}/comments`
  });
};

export const fetchComments = commentIds => {
  return $.ajax({
    method: "GET",
    url: "/api/comments_by_id",
    data: { commentIds }
  });
};