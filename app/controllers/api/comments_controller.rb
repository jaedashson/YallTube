class Api::CommentsController < ApplicationController

  # Get the 
  # GET /api/videos/:video_id/comments
  def
    @comments = Comment.where(video_id: params[:video_id]) 

    render :index
  end


end
