class Variant < ActiveRecord::Base
  belongs_to :item

  has_and_belongs_to_many :item_options

  has_many :sale_variants
  has_many :sales, :through => :sale_variants

  has_many :cart_variants

  #TODO: Probably take this out. It does more db calls
  #Just for convinience of testing
  def pretty_print
    options = self.item_options

    ret = "Sku: #{self.sku}\nBelongs to Item: #{self.item.name}\n"

    options.each do |option|
      ret += "#{option.name} : #{option.value}\n"
    end

    puts ret
  end
end
