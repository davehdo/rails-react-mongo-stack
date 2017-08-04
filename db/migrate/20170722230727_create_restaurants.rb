class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.belongs_to :trip
      t.string :name, null: false
      t.string :address
      t.string :city, null: false
      t.string :state
      t.string :zip
      t.string :url
      t.string :image_url

      t.timestamps null: false
    end
  end
end
