class TripSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :date, :start_date
end
