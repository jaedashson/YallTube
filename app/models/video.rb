class Video < ApplicationRecord
  validates :title, presence: true
  
  has_one_attached :video
  has_one_attached :thumbnail

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :votes,
    foreign_key: :video_id,
    class_name: :VideoVote

  has_many :comments,
    foreign_key: :video_id,
    class_name: :Comment

  has_many :views,
    foreign_key: :video_id,
    class_name: :View

  def like_count
    self.votes.where(like: true).count
  end

  def dislike_count
    self.votes.where(like: false).count
  end

  def comment_count
    self.comments.count
  end

  def view_count
    self.views.count
  end
end
