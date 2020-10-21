json.extract! @video, :id, :title, :description, :uploader_id, :created_at, :updated_at 
json.videoUrl url_for(@video.video)
json.thumbnailUrl url_for(@video.thumbnail)
json.viewCount @video.view_count
json.likeCount @video.like_count
json.dislikeCount @video.dislike_count
json.commentCount @video.comment_count
json.parentCommentIds @video.parent_comment_ids