class Api::SessionsController < ApplicationController
  # Login
  # POST /api/session
  def create
    # debugger
    @user = User.find_by_credentials(user_params[:username], user_params[:password])

    if @user
      # debugger
      login!(@user)
      render "api/users/show"
    else
      # debugger
      render json: ["Wrong password"], status: 401
    end
  end

  # Logout
  # DELETE /api/session
  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: ["Current user not found"], status: 404
    end
  end
end
