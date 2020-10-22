class Subscription < ApplicationRecord
  belongs_to :subscriber,
    foreign_key: :subscriber_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :User
end