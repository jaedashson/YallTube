export const fetchVideo = (videoId) => {
  return $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}`
  });
};

export const fetchAllVideos = () => {
  return $.ajax({
    method: "GET",
    url: "/api/videos"
  });
};

export const fetchVideos = (videoIds) => {
  return $.ajax({
    method: "GET",
    url: "/api/videos",
    data: { videoIds }
  });
};

export const createVideo = (formData) => {
  return $.ajax({
    method: "POST",
    url: "/api/videos",
    data: formData,
    contentType: false,
    processData: false
  });
};