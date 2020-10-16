class Api::VideosController < ApplicationController
  # GET /api/videos
  def index
    debugger
    if params[:videoIds]
      @videos = Video.where('id IN (?)', params[:videoIds])
    else
      @videos = Video.all
    end
    debugger
    render :index
  end

  # GET /api/videos/:videoId
  def show
    @video = Video.find_by(id: params[:id])

    if @video
      render :show
    else
      render json: ["Video not found"], status: 404
    end
  end

  # createVideo
  # POST /api/videos
  def create
    @video = Video.new(video_params)

    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end
  
  private
  def video_params
    params.require(:video).permit(:title, :description, :uploader_id, :video, :thumbnail);
  end
  
end