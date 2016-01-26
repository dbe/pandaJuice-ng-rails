class CartVariant < ActiveRecord::Base
  belongs_to :user
  belongs_to :variant
end
