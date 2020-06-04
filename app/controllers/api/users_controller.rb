class Api::UsersController < ApplicationController  
  # GET /api/users?email=user1@gmail.com
  def index
    debugger
    @user = User.find_by(email: params[:email])

    if @user
      render :show
    else
      render json: ["Couldn't find your YallTube Account"], status: 404
    end
  end
  
  # GET /api/users/:userId
  def show
    debugger
    @user = User.find_by(id: params[:id])
    render :show
  end

  # Signup
  # POST /api/users
  def create
    debugger
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end

