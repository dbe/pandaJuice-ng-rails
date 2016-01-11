class Item < ActiveRecord::Base
  has_many :item_options
  has_many :variants
end
