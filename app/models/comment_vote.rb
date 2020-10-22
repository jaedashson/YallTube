# == Schema Information
#
# Table name: comment_votes
#
#  id         :bigint           not null, primary key
#  voter_id   :integer          not null
#  comment_id :integer          not null
#  like       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CommentVote < ApplicationRecord
  validates :voter_id, uniqueness: { scope: [:comment_id] }
  validates :like, inclusion: { in: [true, false ] }

  belongs_to :voter,
    foreign_key: :voter_id,
    class_name: :User

  belongs_to :comment,
    foreign_key: :comment_id,
    class_name: :Comment
end
