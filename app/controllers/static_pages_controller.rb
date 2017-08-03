class StaticPagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    #here, by default, renders views/static_pages/index.html.erb
  end
end
