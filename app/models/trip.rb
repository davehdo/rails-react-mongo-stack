class Trip < ApplicationRecord
  belongs_to :user
  has_many :restaurants

  validates :name, presence: true
  validates :city, presence: true
  validates :state, presence: true
end
