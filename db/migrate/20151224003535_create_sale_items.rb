class CreateSaleItems < ActiveRecord::Migration
  def change
    create_table :sale_items do |t|
      t.integer :sale_id
      t.integer :item_id
      t.integer :quantity
      t.decimal :cost, :precision => 8, :scale => 2
    end
  end
end
