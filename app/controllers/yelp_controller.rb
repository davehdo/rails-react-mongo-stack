class YelpController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def index
    trip = Trip.find(params[:tripId])

    url = "https://api.yelp.com/v3/businesses/search"
    query = {
      location: "#{trip.city}, #{trip.state}",
      term: "food",
      range: 5,
      limit: 6
    }

    response = HTTP.auth("Bearer #{ENV["YOUR_TOKEN"]}").get(url, params: query)

    if response.status == 200
      body = JSON.parse(response.body)
      render json: body
    else
      render json: {error: "There has been an error from the Yelp API"}
    end
  end

  def create
    trip = Trip.find(params[:trip_id])

    url = "https://api.yelp.com/v3/businesses/search"
    query = {
      location: "#{trip.city}, #{trip.state}",
      term: "food, #{params[:search]}",
      limit: 1
    }

    response = HTTP.auth("Bearer #{ENV["YOUR_TOKEN"]}").get(url, params: query)

    if response.status == 200
      body = JSON.parse(response.body)
      render json: body
    else
      render json: {error: "There has been an error from the Yelp API"}
    end
  end

  private

  def permitted_params
    # params.require(:location).permit(:city, :state)
    params.permit(:trip_id, :search)
  end
end
