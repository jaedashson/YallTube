json.array! @videos do |video|
  json.extract! video, :id, :title, :description, :uploader_id, :created_at, :updated_at
  json.videoUrl url_for(video.video)
  json.thumbnailUrl url_for(video.thumbnail)
end