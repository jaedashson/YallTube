class Api::UsersController < ApplicationController  
  # GET /api/users/:userId
  def show
    @user = User.find_by(id: params[:id])
    render :show
  end
  
  # Signup
  # POST /api/users
  def create
    @user = User.new(user_params)

    debugger

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end

