class Api::V1::TripsController < ApplicationController
  # before_action :authenticate_user! #, only: [:index]
  # before_action :authorize_user
  skip_before_action :verify_authenticity_token

  def index
    user = current_user
    trips = user.trips

    render json: trips, adapter: :json
  end

  def show
    trip = Trip.find(params[:id])
    restaurants = trip.restaurants

    render json: {trip: trip, restaurants: restaurants}, adapter: :json
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    trip = Trip.new(parsed)
    trip.user = current_user

    if trip.save
      render json: trip, adapter: :json
    else
      render json: trip.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    trip = Trip.destroy(params[:id])
    render json: { trip: trip }
  end

  private

  def trip_params
    params.permit(:name, :city, :state)
  end
end
