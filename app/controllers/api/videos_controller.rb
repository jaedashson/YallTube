class Api::VideosController < ApplicationController
  # GET /api/videos
  def index
    if params[:videoIds]
      @videos = Video.where('id IN (?)', params[:videoIds])
    else
      @videos = Video.all
    end
    render :index
  end

  # GET /api/videos_by_id
  def index_by_id
    @videos = Video.where('id IN (?)', params[:videoIds])
    render :index
  end

  # GET /api/videos_by_uploader_id
  def index_by_uploader_id
    @videos = Video.where('uploader_id IN (?)', params[:uploaderIds])
    render :index
  end

  # GET /api/videos_search
  # Currently only searches video titles
  def search
    search_term = params[:searchTerm]
    search_words = search_term.split.map { |word| "%#{word}%" }
    @videos = Video.where("title ILIKE ANY ( array[?] )", search_words)
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