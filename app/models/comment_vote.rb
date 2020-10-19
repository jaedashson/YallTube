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