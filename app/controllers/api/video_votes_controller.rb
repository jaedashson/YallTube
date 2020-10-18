class Api::VideoVotesController < ApplicationController
  # Make this fetch all the like ids of a given video or user
  # GET /api/users/:user_id/likes
  # GET /api/videos/:video_id/likes
  def index
    if params[:user_id] # Get a user's video votes
      @video_votes = VideoVote.where(voter_id: params[:user_id])
    elsif params[:video_id] # Get a video's video votes
      @video_votes = VideoVote.where(video_id: params[:video_id])
    end

    render :index
  end

  # Creates a "like" (video vote) connecting a user and a video
  def create
    @video_vote = VideoVote.new(video_vote_params)

    if @video_vote.save
      render :show
    else
      render json: @video_vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @video_vote = VideoVote
      .where(voter_id: video_vote_params[:voter_id])
      .where(video_id: video_vote_params[:video_id]).first
    if @video_vote.destroy
      render :show
    else
      render json: @video_vote.errors.full_messages, status: 422
    end
  end

  private
  def video_vote_params
    params.require(:video_vote).permit(:voter_id, :video_id, :like)
  end
  
end