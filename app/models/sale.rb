class Sale < ActiveRecord::Base
  has_many :sale_variants
  has_many :variants, :through => :sale_variants

  has_many :items, -> { uniq }, through: :variants
end
