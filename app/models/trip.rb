class Trip < ApplicationRecord
  belongs_to :user
  has_many :restaurants

  validates :name, presence: true
  validates :city, presence: true
  validates :state, presence: true

  # def find_nearby_restaurants
  #   token = "9XIiNX4VVQ8J3yvuF7Zt2FLES5t11aQozr6bvyQSs8ZeyOApEKwLgSLBJavahQvTnIhy9WeLuGmGd0eOwDXWSPwKdJpYOSJsVRU5bskVZV3HrjYWUbzXQcAyi0dVWXYx"
  #   url = "https://api.yelp.com/v3/businesses/search"
  #   query = {
  #     location: "#{self.city}, #{self.state}",
  #     term: "food",
  #     range: 10,
  #     limit: 3
  #   }
  #
  #   response = HTTP.auth("Bearer #{token}").get(url, params: query)
  #
  #   body = response.body
  # end
end
