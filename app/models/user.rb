class User
  include Mongoid::Document
  include Mongoid::Timestamps
  # has_many :trips
  
  field :first_name, type: String
  field :last_name, type: String
  
  validates_presence_of :first_name
  validates_presence_of :last_name
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable
end
