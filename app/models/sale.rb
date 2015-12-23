class Sale < ActiveRecord::Base
  def self.current_sales
    now = DateTime.now()
    Sale.where("start <= ?", now).where("finish >= ?", now)
  end
end
