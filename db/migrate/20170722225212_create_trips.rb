class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.belongs_to :user
      t.string :city, null: false
      t.string :state
      t.string :date

      t.timestamps null: false
    end
  end
end
