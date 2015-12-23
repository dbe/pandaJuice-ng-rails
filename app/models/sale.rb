class Sale < ActiveRecord::Base
  def self.current
    now = DateTime.now()
    Sale.where("start <= ?", now).where("finish >= ?", now).first
  end
end
