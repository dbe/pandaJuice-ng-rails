class AddItemOptionsVariantsJoinTable < ActiveRecord::Migration
  def change
    create_join_table :item_options, :variants
  end
end
