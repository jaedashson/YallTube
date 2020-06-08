export const fetchVideo = (videoId) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}`
  })
};