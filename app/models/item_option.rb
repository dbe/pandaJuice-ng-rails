class ItemOption < ActiveRecord::Base
  belongs_to :item

  has_and_belongs_to_many :variants
end
