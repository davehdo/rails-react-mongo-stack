class Api::V1::TripsController < ApplicationController
  # before_action :authenticate_user! #, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
    user = current_user
    trips = user.trips

    render json: trips, adapter: :json
  end

  def show
    trip = Trip.find(params[:id])
    nearby = '{"businesses": [{"id": "laughing-monk-cafe-boston", "country": "US", "state": "MA", "display_address": ["130 Dartmouth St", "Boston, MA 02116"]}]}'
    # serialized = ActiveModelSerializers::SerializableResource.new(trip, adapter: :json).as_json
    # render json: serialized.merge(JSON.parse(nearby))

    restaurants = trip.restaurants
    render json: {trip: trip, restaurants: restaurants}, adapter: :json
  end

  def create
    # trip = current_user.trips.new(trip_params)
    # if trip.save
    #   render json: trip, adapter: :json
    # else
    #   render json: trip.errors, status: :unprocessable_entity
    # end

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
