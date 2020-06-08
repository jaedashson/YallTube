class Api::VideosController < ApplicationController
  # GET /api/videos
  def index
    @videos = Video.all
    render :index
  end

  # GET /api/videos/:videoId
  def show
    @video = Video.find(params[:id])
    render :show
  end
  
  private
  def video_params
    params.require(:video).permit(:title, :description, :uploader_id)
  end
  
end