class Api::UsersController < ApplicationController  
  # CHANGE THIS ACTION TO A CUSTOM ROUTE
  # GET /api/users?email=user1@gmail.com
  def index
    @user = User.find_by(email: params[:email])

    if @user
      render :show
    else
      render json: ["Couldn't find your YallTube Account"], status: 404
    end
  end

  # GET /api/users_by_id
  def index_by_id
    @users = User.where('id IN (?)', params[:userIds])
    render :index
  end
  
  # GET /api/users/:userId
  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
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

