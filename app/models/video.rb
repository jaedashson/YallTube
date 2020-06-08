class Video < ApplicationRecord
  validates :title, presence: true;
  
  has_one_attached :video

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User
    
  # Likes/dislikes MVP
  has_many :votes,
    polymorphic: true,
    foreign_key: :votable_id,
    class_name: :Vote

  # Comments MVP
  has_many :comments

  # Views MVP
  has_many :views
end
