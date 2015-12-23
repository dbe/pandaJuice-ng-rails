class SalesController < ApplicationController
  def current
    render json: Sale.current
  end
end
