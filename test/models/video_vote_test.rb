# == Schema Information
#
# Table name: video_votes
#
#  id         :bigint           not null, primary key
#  voter_id   :integer          not null
#  video_id   :integer          not null
#  like       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class VideoVoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
