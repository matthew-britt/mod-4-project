class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.decimal :longitude
      t.decimal :latitude
      t.text :description
      t.string :name
      t.decimal :price

      t.timestamps
    end
  end
end
