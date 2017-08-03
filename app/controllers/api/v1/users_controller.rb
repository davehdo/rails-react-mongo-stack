class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user = nil
    if user_signed_in?
      user = { user: current_user.first_name }
    else
      user = { user: false }
    end

    render json: user, adapter: :json
  end
end
