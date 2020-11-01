class Api::SubscriptionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @subscription = Subscription.new(subscription_params)

    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription
      .where(subscriber_id: subscription_params[:subscriber_id])
      .where(channel_id: subscription_params[:channel_id]).first
    # debugger
    if @subscription.destroy
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  private
  def subscription_params
    params.require(:subscription).permit(:subscriber_id, :channel_id)
  end
end