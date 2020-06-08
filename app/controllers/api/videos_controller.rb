class Api::VideosController < ApplicationController
  # GET /api/videos
  def index
    debugger
    @videos = Video.all
    render :index
  end

  # GET /api/videos/:videoId
  def show
    # debugger
    @video = Video.find_by(id: params[:id])

    if @video
      render :show
    else
      render json: ["Video not found"], status: 404
    end
  end
  
  private
  def video_params
    params.require(:video).permit(:title, :description, :uploader_id)
  end
  
end