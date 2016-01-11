class Sku < ActiveRecord::Base
  has_many :items
end
