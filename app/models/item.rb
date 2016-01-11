class Item < ActiveRecord::Base
  has_many :sale_items
  has_many :sales, :through => :sale_items

  has_many :item_options

  belongs_to :sku
end
