json.extract! user, :id, :username, :email, :created_at, :updated_at
json.likedVideoIds user.liked_video_ids
json.dislikedVideoIds user.disliked_video_ids
json.uploadedVideoIds user.uploaded_video_ids
json.viewedVideoIds user.viewed_video_ids
json.likedCommentIds user.liked_comment_ids
json.dislikedCommentIds user.disliked_comment_ids
json.subscriberCount user.subscriber_count
json.subscribedChannelIds user.subscribed_channel_ids