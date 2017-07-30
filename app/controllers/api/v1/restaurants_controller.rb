class Api::V1::TripsController < ApplicationController
  # before_action :authenticate_user! #, only: [:index]
  skip_before_action :verify_authenticity_token

  def create

    body = request.body.read
    parsed = JSON.parse(body)
    restaurant = Restaurant.new(parsed)
    tripId = Trip.find(params[:id])
    restaurant.trip = tripId

    if restaurant.save
      render json: restaurant, adapter: :json
    else
      render json: restaurant.errors.full_messages, status: :unprocessable_entity
    end
  end


  private

  def restaurant_params
    params.permit(:name, :address, :city, :state, :zip, :url, :image_url)
  end
end
