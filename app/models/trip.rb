class Trip
  include Mongoid::Document
  include Mongoid::Timestamps
  # belongs_to :user
  # has_many :restaurants

  field :user_id, type: Integer
  field :city, type: String
  field :state, type: String
  field :lat, type: Float
  field :lon, type: Float
  field :name, type: String
  field :start_date, type: Date

  
  validates :city, presence: true

  # geocoded_by :address,
  # :latitude => :lat, :longitude => :lon
  # after_validation :geocode

  def address
    "#{self.city}, #{self.state}"
  end

  # raise self.start_date.inspect
end
