class AddNameToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :name, :string
    add_column :trips, :start_date, :date
  end
end
