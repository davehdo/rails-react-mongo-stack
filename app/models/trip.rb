class Trip < ApplicationRecord
  belongs_to :user
  has_many :restaurants

  validates :city, presence: true
end
