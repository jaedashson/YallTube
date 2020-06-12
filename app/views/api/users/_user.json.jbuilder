json.extract! user, :id, :username, :email, :created_at, :updated_at
json.likedVideoIds user.liked_video_ids
json.dislikedVideoIds user.disliked_video_ids
json.uploadedVideoIds user.uploaded_video_ids