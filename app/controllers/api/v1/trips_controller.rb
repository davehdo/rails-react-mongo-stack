class Api::V1::BakeriesController < ApplicationController
  def index
    render json: Trip.all, adapter: :json
  end
end
