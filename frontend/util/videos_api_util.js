export const fetchVideo = (videoId) => {
  // debugger
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}`
  })
};

export const fetchAllVideos = () => {
  // debugger
  return $.ajax({
    method: "GET",
    url: "/api/videos"
  })
}

export const createVideo = (formData) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/videos",
    data: formData,
    contentType: false,
    processData: false
  })
};