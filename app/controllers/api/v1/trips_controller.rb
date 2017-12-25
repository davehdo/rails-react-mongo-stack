class Api::V1::TripsController < ApplicationController
  # before_action :authenticate_user! #, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
    # user = current_user
    trips = Trip.all
    render json: trips, adapter: :json
  end

  def show
    trip = Trip.find(params[:id])
    # restaurants = trip.restaurants

    render json: {trip: trip, restaurants: []}, adapter: :json
  end

  def create
    trip = Trip.new(trip_params)

    if trip_params[:start_date] and trip_params[:start_date] != ""
      start_date = Date.strptime(trip_params[:start_date], '%m/%d/%Y')
      trip.start_date = start_date
    end 

    
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
    params.permit(:city, :state, :start_date, :tags_serial)
  end
end
