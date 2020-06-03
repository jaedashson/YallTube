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

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      debugger

      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

