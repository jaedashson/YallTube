export const fetchVideo = videoId => {
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

export const fetchVideos = videoIds => {
  return $.ajax({
    method: "GET",
    url: "/api/videos_by_id",
    data: { videoIds }
  });
};

export const fetchSubscriptions = uploaderIds => {
  return $.ajax({
    method: "GET",
    url: "/api/videos_by_uploader_id",
    data: { uploaderIds }
  });
};

export const fetchSearch = searchTerm => {
  return $.ajax({
    method: "GET",
    url: "/api/videos_search",
    data: { searchTerm }
  });
};

export const createVideo = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/videos",
    data: formData,
    contentType: false,
    processData: false
  });
};