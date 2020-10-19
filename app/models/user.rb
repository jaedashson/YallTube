class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :videos,
    foreign_key: :uploader_id,
    class_name: :Video

  has_many :video_votes,
    foreign_key: :voter_id,
    class_name: :VideoVote

  has_many :voted_videos,
    through: :video_votes,
    source: :video

  has_many :views,
    foreign_key: :viewer_id,
    class_name: :View

  has_many :viewed_videos,
    through: :views,
    source: :video

  has_many :comment_votes,
    foreign_key: :voter_id,
    class_name: :CommentVote

  has_many :voted_comments,
    through: :comment_votes,
    source: :comment
  
  def uploaded_video_ids
    self.videos.pluck(:id)
  end

  def liked_video_ids
    self.video_votes.where(like: true).pluck(:video_id)
  end

  def disliked_video_ids
    self.video_votes.where(like: false).pluck(:video_id)
  end

  def viewed_video_ids
    self.views.pluck(:video_id).uniq
  end

  def liked_comment_ids
    self.comment_votes.where(like: true).pluck(:comment_id)
  end

  def disliked_comment_ids
    self.comment_votes.where(like: false).pluck(:comment_id)
  end

  # has_many :subscriptions_out # `subscriptions` where `subscriber_id` points to this user
  # has_many :channels_subscribed # Channels (`users`) through `subscriptions_out`
  # has_many :subscriptions_in # `subscriptions` where `channel_id` points to this user
  # has_many :subscribers # Subscribers (`users`) through `subscriptions_in`
  # has_many :comments
  # has_many :comment_votes # `votes` that this user made on comments
  # has_many :channel_views # sum of view count of `videos`

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end
  
  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypted = BCrypt::Password.new(self.password_digest)
    bcrypted.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
  
  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end
end
