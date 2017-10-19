require 'rails_helper'

describe TripSerializer, type: :serializer do
  describe '#formatted_date' do
    let(:trip) { create(:trip) }

    it 'returns a correctly formatted_date' do
      serialized_trip_json = TripSerializer.new(trip).to_json
      expect(JSON.parse(serialized_trip_json)['formatted_date']).to eq 'Sun September 22, 1991'
    end
  end
end
