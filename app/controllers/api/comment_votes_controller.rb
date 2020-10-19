class Api::CommentVotesController < ApplicationController
  def create
    @comment_vote = CommentVote.new(comment_vote_params)

    if @comment_vote.save
      render :show
    else
      render json: @comment_vote.errors.full_messages,
      status: 422
    end
  end

  def destroy
    @comment_vote = CommentVote
      .where(voter_id: comment_vote_params[:voter_id])
      .where(comment_id: comment_vote_params[:comment_id]).first

    if @comment_vote.destroy
      render :show
    else
      render json: @comment_vote.errors.full_messages, status: 422
    end
  end

  private
  def comment_vote_params
    params.require(:comment_vote).permit(:voter_id, :comment_id, :like)
  end
end