class AddSaleVariantJoinTable < ActiveRecord::Migration
  def change
    create_join_table :sales, :variants
  end
end
