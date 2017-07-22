class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.belongs_to :user
      t.string :name, null: false
      t.string :city, null: false
      t.string :state, null: false

      t.timestamps null: false
    end
  end
end
