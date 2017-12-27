class Trip
  include Mongoid::Document
  include Mongoid::Timestamps
  # belongs_to :user
  # has_many :restaurants

  # field :user_id, type: Integer
  field :city, type: String
  field :state, type: String
  field :lat, type: Float
  field :lon, type: Float
  field :name, type: String
  field :start_date, type: Date
  field :tags, type: Array
  
  validates :city, presence: true

  # geocoded_by :address,
  # :latitude => :lat, :longitude => :lon
  # after_validation :geocode

  # getter
  def address
    "#{self.city}, #{self.state}"
  end

  # def city=(str)
  #   write_attribute(:city, str)
  # end
  #
  # def city
  #   read_attribute(:city)
  # end
  
  def tags_serial=(str)
    write_attribute(:tags, str.split(/[\ \,]+/))
  end
  
  # raise self.start_date.inspect
end
