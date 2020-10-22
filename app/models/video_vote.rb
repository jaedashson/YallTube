# == Schema Information
#
# Table name: video_votes
#
#  id         :bigint           not null, primary key
#  voter_id   :integer          not null
#  video_id   :integer          not null
#  like       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
