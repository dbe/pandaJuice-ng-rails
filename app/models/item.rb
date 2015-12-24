class Item < ActiveRecord::Base
  has_many :sale_items
  has_many :sales, :through => :sale_items
end
