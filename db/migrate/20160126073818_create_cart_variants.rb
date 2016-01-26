class CreateCartVariants < ActiveRecord::Migration
  def change
    create_table :cart_variants do |t|
      t.integer :variant_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
