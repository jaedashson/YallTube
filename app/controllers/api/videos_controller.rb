class Api::VideosController < ApplicationController
  # GET /api/videos
  def index
    # debugger
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

  # createVideo
  # POST /api/videos
  def create
    # debugger
    @video = Video.new(video_params)

    if @video.save
      # debugger
      render json: { message: "Video created" }
    else
      # debugger
      render json: @video.errors.full_messages, status: 422
    end
  end
  
  private
  def video_params
    params.require(:video).permit(:title, :description, :uploader_id, :video, :thumbnail);
  end
  
end