# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint           not null, primary key
#  subscriber_id :integer          not null
#  channel_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Subscription < ApplicationRecord
  validate(:check_different_user)

  def check_different_user
    if self.subscriber_id == self.channel_id
      errors[:channel_id] << "Can't subscribe to self"
    end
  end

  belongs_to :subscriber,
    foreign_key: :subscriber_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :User
end
