class TripSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :date
end
