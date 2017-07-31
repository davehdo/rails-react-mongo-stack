require 'rails_helper'

RSpec.describe Api::V1::TripsController, type: :controller do

  describe "GET#index" do
    it "should return a list of all trips belonging to the current user" do
      user = FactoryGirl.create(:user)
      trip1 = FactoryGirl.create(:trip, user: user)
      trip2 = FactoryGirl.create(:trip, user: user)

      sign_in user

      get :index

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["trips"].length).to eq 2
      expect(returned_json["trips"][0]["name"]).to eq trip1.name
      expect(returned_json["trips"][1]["name"]).to eq trip2.name
    end
  end

    describe "GET#show" do
      it "should return a trip and all its restaurants" do
      end
    end

    describe "POST#create" do
    end

    describe "DELETE#destroy" do
    end

end
