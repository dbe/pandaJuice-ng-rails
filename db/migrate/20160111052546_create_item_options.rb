class CreateItemOptions < ActiveRecord::Migration
  def change
    create_table :item_options do |t|
      t.string :name, null: false
      t.integer :item_id, null: false

      t.timestamps null: false

      t.index [:name, :item_id], unique: true
    end
  end
end
