class CreateVariants < ActiveRecord::Migration
  def change
    create_table :variants do |t|
      t.string :sku, null: false
      t.integer :item_id, null: false

      t.timestamps null: false

      t.index :sku, :unique => true
    end
  end
end
