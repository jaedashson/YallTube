class Api::VideosController < ApplicationController
  # GET /api/videos
  def index
    if params[:videoIds]
      @videos = Video.where('id IN (?)', params[:videoIds]) # TODO - Is this ever working?
    else
      @videos = Video.all
    end
    
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