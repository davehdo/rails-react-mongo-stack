class AddLatToRestaurant < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :lat, :float
    add_column :restaurants, :lon, :float
  end
end
