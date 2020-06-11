class VideoVote < ApplicationRecord
  validates :voter_id, uniqueness: { scope: [:video_id] }
  validates :like, inclusion: { in: [true, false] }
  
  belongs_to :voter,
    foreign_key: :voter_id,
    class_name: :User

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
end
