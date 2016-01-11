class CreateItemOptions < ActiveRecord::Migration
  def change
    create_table :item_options do |t|
      t.integer :item_id, null: false
      t.string :name, null: false
      t.string :value, null: false

      t.timestamps null: false

      t.index [:name, :value, :item_id], unique: true
    end
  end
end
