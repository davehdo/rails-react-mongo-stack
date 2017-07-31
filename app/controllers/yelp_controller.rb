class YelpController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
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
      binding.pry
      body = JSON.parse(response.body)
      render json: body
    else
      # body = JSON.parse(response.body)
      render json: response
      # {error: "There has been an error from the Yelp API"}
    end
  end

  private

  def permitted_params
    params.require(:location).permit(:city, :state)
  end
end
