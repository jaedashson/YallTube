class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # Get all the comments for this video
  # GET /api/videos/:video_id/comments
  # GET /api/comments/:comment_id/comments
  def index
    if params[:video_id]
      @comments = Comment.where(video_id: params[:video_id]).where(parent_id: nil).includes(:author)
    elsif params[:comment_id]
      @comments = Comment.where(parent_id: params[:comment_id]).includes(:author)     
    end

    render :index
  end

  # Create a comment for this video
  # POST /api/comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :video_id, :parent_id, :body)
  end

end
