json.extract! @comment, :id, :author_id, :video_id, :parent_id, :body, :created_at, :updated_at
json.authorUsername @comment.author.username
json.replyCount @comment.reply_count
json.replyIds @comment.reply_ids