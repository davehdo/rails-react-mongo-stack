class YelpController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def create

    binding.pry

    url = "https://api.yelp.com/v3/businesses/search"
    query = {
      location: "Boston, MA",
      term: "food",
      range: 5,
      limit: 3
    }

    response = HTTP.auth("Bearer #{ENV["YOUR_TOKEN"]}").get(url, params: query)

    body = response.body.to_json

    render json: body
  end

  private

  def permitted_params
    params.require(:location).permit(:city, :state)
  end
end
