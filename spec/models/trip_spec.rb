require 'rails_helper'

describe Trip, type: :model do
  # it { should belong_to :user }
  # it { should have_many :restaurants }

  it { should have_valid(:city).when('Boston', 'Minneapolis') }
  it { should_not have_valid(:city).when(nil, '') }

  describe '#address' do
    let(:trip) { create(:trip) }

    it 'returns the formatted city and state' do
      expect(trip.address).to eq "#{trip.city}, #{trip.state}"
    end
  end
end
