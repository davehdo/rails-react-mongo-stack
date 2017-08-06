class AddLatToTrip < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :lat, :float
    add_column :trips, :lon, :float
  end
end
