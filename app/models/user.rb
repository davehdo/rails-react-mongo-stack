class User
  include Mongoid::Document
  include Mongoid::Timestamps
  # has_many :trips
  
  field :first_name, type: String
  field :last_name, type: String
  field :email, type: String
  field :encrypted_password, type: String

  field :reset_password_token, type: String
  field :reset_password_sent_at, type: DateTime

  field :remember_created_at, type: DateTime

  field :sign_in_count, type: Integer, default: 0
  field :current_sign_in_at, type: DateTime
  field :last_sign_in_at, type: DateTime
  field :current_sign_in_ip, type: String
  field :last_sign_in_ip, type: String

  field :will_save_change_to_email?, type: Boolean
  

  validates_presence_of :first_name
  validates_presence_of :last_name
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
