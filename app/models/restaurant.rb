class Restaurant < ApplicationRecord
  belongs_to :trip

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
end
