class Api::V1::TripsController < ApplicationController
  def index
    # user = current_user
    # trips = user.trips

    render json: Trip.all, adapter: :json
  end
end
