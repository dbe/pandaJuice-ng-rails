class Sale < ActiveRecord::Base
  has_and_belongs_to_many :variants

  has_many :items, -> { uniq }, through: :variants
end
