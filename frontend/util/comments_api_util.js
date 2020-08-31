export const createComment = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/comments",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const fetchComments = videoId => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}/comments`
  });
};