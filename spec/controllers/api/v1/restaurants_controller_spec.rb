require 'rails_helper'

RSpec.describe Api::V1::RestaurantsController, type: :controller do
  describe "POST#create" do
    it "should create a restaurant with the correct info if the user is signed in" do
      user = FactoryGirl.create(:user)
      trip = FactoryGirl.create(:trip, user: user)

      post_json = {
        tripId: trip.id,
        name: "Felipe's",
        address: "12345 Milk Street",
        city: "Cambridge",
        state: "MA",
        zip: "12345"
      }

      sign_in user

      expect { post(:create, params: post_json) }.to change { Restaurant.count }.by 1

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq "Felipe's"
      expect(returned_json["address"]).to eq "12345 Milk Street"
      expect(returned_json["city"]).to eq "Cambridge"
      expect(returned_json["state"]).to eq "MA"
      expect(returned_json["zip"]).to eq "12345"
    end
  end

  describe "DELETE#destroy" do
    it "should delete a trip and return the same trip" do
      user = FactoryGirl.create(:user)
      trip = FactoryGirl.create(:trip, user: user)
      restaurant = FactoryGirl.create(:restaurant, trip: trip)

      sign_in user

      expect { delete(:destroy, params: {id: restaurant.id}) }.to change { Restaurant.count }.by -1
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq restaurant.name
      expect(returned_json["address"]).to eq restaurant.address
      expect(returned_json["city"]).to eq restaurant.city
      expect(returned_json["state"]).to eq restaurant.state
      expect(returned_json["zip"]).to eq restaurant.zip
    end
  end
end
