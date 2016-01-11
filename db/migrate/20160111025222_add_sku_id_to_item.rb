class AddSkuIdToItem < ActiveRecord::Migration
  def change
    change_table :items do |t|
      t.remove :name, :description
      t.integer :sku_id, :null => false
    end
  end
end
