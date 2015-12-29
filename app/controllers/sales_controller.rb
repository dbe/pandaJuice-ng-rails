class SalesController < ApplicationController
  respond_to :json

  def current
    @sale = Sale.current_sales.first
    respond_with(@sale)
  end
end
