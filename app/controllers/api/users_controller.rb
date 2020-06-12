class Api::UsersController < ApplicationController  
  # CHANGE THIS ACTION TO A CUSTOM ROUTE
  # GET /api/users?email=user1@gmail.com
  def index
    debugger
    @user = User.find_by(email: params[:email])

    if @user
      debugger
      render :show
    else
      debugger
      render json: ["Couldn't find your YallTube Account"], status: 404
    end
  end
  
  # GET /api/users/:userId
  def show
    # debugger
    @user = User.find_by(id: params[:id])

    if @user
      # debugger
      render :show
    else
      # debugger
      render json: ["User not found"], status: 404
    end
  end

  # Signup
  # POST /api/users
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end

