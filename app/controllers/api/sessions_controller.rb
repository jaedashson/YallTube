class Api::SessionsController < ApplicationController
  # Login
  # POST /api/session
  def create
    debugger
    @user = User.find_by_credentials(user_params[:username], user_params[:password])

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Wrong password"], status: 401
    end
  end

  # Logout
  # DELETE /api/session
  def destroy
    debugger
    if logged_in?
      logout!
      render json: {}
    else
      render json: ["Current user not found"], status: 404
    end
  end
end
