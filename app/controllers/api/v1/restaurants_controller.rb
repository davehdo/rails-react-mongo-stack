class Api::V1::RestaurantsController < ApplicationController
  # before_action :authenticate_user! #, only: [:index]
  skip_before_action :verify_authenticity_token

  def create
    restaurant = Restaurant.new(restaurant_params)

    if restaurant.save
      render json: restaurant, adapter: :json
    else
      render json: restaurant.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    restaurant = Restaurant.destroy(params[:id])
    render json: restaurant
  end

  private

  def restaurant_params
    params.permit(
      :name,
      :address,
      :city,
      :state,
      :zip,
      :url, 
      :image_url,
      :trip_id,
      :lat,
      :lon
    )
  end
end
