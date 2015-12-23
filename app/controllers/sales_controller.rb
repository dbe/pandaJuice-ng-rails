class SalesController < ApplicationController
  def current
    render json: Sale.current_sales
  end
end
