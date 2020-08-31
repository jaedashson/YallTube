class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # Get all the comments for this video
  # GET /api/videos/:video_id/comments
  def index
    @comments = Comment.where(video_id: params[:video_id]).includes(:author)

    # debugger

    render :index
  end

  # Create a comment for this video
  # POST /api/comments
  def create
    # debugger

    @comment = Comment.new(comment_params)

    if @comment.save
      render :show # What does this do?
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :video_id, :parent_id, :body)
  end

end
