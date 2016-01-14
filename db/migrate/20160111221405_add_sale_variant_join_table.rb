class AddSaleVariantJoinTable < ActiveRecord::Migration
  def change
    #NOTE: I'm not naming this table "sales_variants" which goes away from the standard m2m join table naming conventions
    #I'm doing this because I'm thinking of SaleVariant as a first class model, thus the plural name would be sale_variants
    create_table :sale_variants do |t|
      t.belongs_to :sale, :index => true
      t.belongs_to :variant, :index => true
      t.integer :quantity
      t.decimal :cost, :precision => 8, :scale => 2
    end
  end
end
