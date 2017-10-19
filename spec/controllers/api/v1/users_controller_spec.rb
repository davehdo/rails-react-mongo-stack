require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe "GET#index" do
    it "should the current user's first name" do
      user = FactoryGirl.create(:user)

      sign_in user

      get :index

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json.length).to eq 1
      expect(returned_json["user"]).to eq user.first_name
    end
  end
end
