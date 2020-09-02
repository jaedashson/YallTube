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