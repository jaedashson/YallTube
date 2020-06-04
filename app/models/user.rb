class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  # ASSOCIATIONS
  has_many :videos
  has_many :videos_viewed
  has_many :video_votes
  has_many :subscriptions_out # `subscriptions` where `subscriber_id` points to this user
  has_many :channels_subscribed # Channels (`users`) through `subscriptions_out`
  has_many :subscriptions_in # `subscriptions` where `channel_id` points to this user
  has_many :subscribers # Subscribers (`users`) through `subscriptions_in`
  has_many :comments
  has_many :comment_votes
  has_many :channel_views # sum of view count of `videos`

  def self.find_by_credentials(username, password)
    debugger
    
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
