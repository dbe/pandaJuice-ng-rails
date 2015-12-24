class Sale < ActiveRecord::Base
  has_many :sale_items
  has_many :items, :through => :sale_items


  def self.current_sales
    now = DateTime.now()
    Sale.where("start <= ?", now).where("finish >= ?", now)
  end
end
