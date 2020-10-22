# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  video_id   :integer          not null
#  parent_id  :integer
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video

  belongs_to :parent,
    foreign_key: :parent_id,
    class_name: :Comment,
    optional: true

  has_many :replies,
    foreign_key: :parent_id,
    class_name: :Comment

  has_many :votes,
    foreign_key: :comment_id,
    class_name: :CommentVote

  def like_count
    self.votes.where(like: true).count
  end

  def dislike_count
    self.votes.where(like: false).count
  end

  def reply_count
    if self.parent_id == nil
      self.replies.count
    else
      nil
    end
  end

  def reply_ids
    self.replies.pluck(:id)
  end

end
