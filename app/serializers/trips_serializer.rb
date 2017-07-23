class TripsSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state
end
