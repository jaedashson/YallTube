class Api::ViewsController < ApplicationController
  # POST /api/views
  def create
    @view = View.new(view_params)

    if @view.save
      render :show
    else
      render json: @view.errors.full_messages, status: 422
    end
  end
  
  private
  def view_params
    params.require(:view).permit(:viewer_id, :video_id)
  end
end