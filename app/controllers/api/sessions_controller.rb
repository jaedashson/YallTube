class Api::SessionsController < ApplicationController
  # Login
  # POST /api/session
  def create
    @user = User.find_by_credentials(login_params[:username], user_params[:password])

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
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
