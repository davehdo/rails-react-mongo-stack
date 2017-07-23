class Api::V1::TripsController < ApplicationController
  # before_action :authenticate_user! #, only: [:index]

  def index
    user = current_user
    trips = user.trips

    render json: trips, adapter: :json
  end

  def show
    render json: Restaurants.all
  end

  def create
    trip = current_user.trips.new(trip_params)
    if trip.save
      render json: trip, adapter: :json
    else
      render json: trip.errors, status: :unprocessable_entity
    end
  end

  private

  def trip_params
    params.permit(:name, :city, :state)
  end
end
