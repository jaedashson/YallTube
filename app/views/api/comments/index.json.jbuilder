json.array! @comments do |comment|
  json.extract! comment, :id, :author_id, :video_id, :parent_id, :text, :created_at, :updated_at
end