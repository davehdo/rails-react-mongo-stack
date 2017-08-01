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

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["trips"].length).to eq 2
      expect(returned_json["trips"][0]["name"]).to eq trip1.name
      expect(returned_json["trips"][0]["city"]).to eq trip1.city
      expect(returned_json["trips"][0]["state"]).to eq trip1.state
      expect(returned_json["trips"][1]["name"]).to eq trip2.name
      expect(returned_json["trips"][1]["city"]).to eq trip2.city
      expect(returned_json["trips"][1]["state"]).to eq trip2.state
    end
  end

    describe "GET#show" do
      it "should return a trip and all its restaurants" do
        user = FactoryGirl.create(:user)
        trip1 = FactoryGirl.create(:trip, user: user)
        trip2 = FactoryGirl.create(:trip, user: user)
        restaurant1 = FactoryGirl.create(:restaurant, trip: trip1)
        restaurant2 = FactoryGirl.create(:restaurant, trip: trip1)

        sign_in user

        get :show, params: { id: trip1.id }

        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")

        expect(returned_json).to be_kind_of(Hash)
        expect(returned_json).to_not be_kind_of(Array)
        expect(returned_json["trip"]).to be_kind_of(Hash)
        expect(returned_json["trip"]["name"]).to eq trip1.name
        expect(returned_json["restaurants"]).to be_kind_of(Array)
        expect(returned_json["restaurants"].length).to eq 2
        expect(returned_json["restaurants"][0]["name"]).to eq restaurant1.name
        expect(returned_json["restaurants"][1]["name"]).to eq restaurant2.name
      end
    end

    describe "POST#create" do
      it "should create a trip with the correct info if the user is signed in" do
        user = FactoryGirl.create(:user)

        post_json = {
          name: "Boston",
          city: "Boston",
          state: "MA",
          user_id: user.id
        }.to_json

        sign_in user

        expect { post(:create, body: post_json) }.to change { Trip.count }.by 1
        post(:create, body: post_json)

        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200

        expect(returned_json).to be_kind_of(Hash)
        expect(returned_json).to_not be_kind_of(Array)
        expect(returned_json["trip"]["name"]).to eq "Boston"
        expect(returned_json["trip"]["city"]).to eq "Boston"
        expect(returned_json["trip"]["state"]).to eq "MA"
      end
    end

    describe "DELETE#destroy" do
      it "should delete a trip and return the same trip" do
        user = FactoryGirl.create(:user)
        trip1 = FactoryGirl.create(:trip, user: user)

        sign_in user

        expect { delete(:destroy, params: {id: trip1.id}) }.to change { Trip.count }.by -1

        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200

        expect(returned_json).to be_kind_of(Hash)
        expect(returned_json).to_not be_kind_of(Array)
        expect(returned_json["trip"]["name"]).to eq trip1.name
        expect(returned_json["trip"]["city"]).to eq trip1.city
        expect(returned_json["trip"]["state"]).to eq trip1.state
      end
    end

end
