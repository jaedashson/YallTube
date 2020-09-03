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

  def reply_count
    if self.parent_id == nil
      self.replies.count
    else
      nil
    end
  end
end
