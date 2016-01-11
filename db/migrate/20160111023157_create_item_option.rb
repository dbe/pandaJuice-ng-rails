class CreateItemOption < ActiveRecord::Migration
  def change
    create_table :item_options do |t|
      t.string :name, :null => false
      t.string :value, :null => false
      t.integer :item_id, :null => false

      t.timestamps :null => false
    end
  end
end
