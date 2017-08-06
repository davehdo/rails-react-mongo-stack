class Trip < ApplicationRecord
  belongs_to :user
  has_many :restaurants

  validates :city, presence: true

  geocoded_by :address,
  :latitude => :lat, :longitude => :lon
  after_validation :geocode

  def address
    "#{self.city}, #{self.state}"
  end
end
