class SalesController < ApplicationController
  respond_to :json

  def current
    #@sale = Sale.current_sales.first
    #TODO: Put this back in the model and use real logic for current
    @sale = Sale.includes(:items, {
      sale_variants: {
        variant: :item_options
      }
    }).first
    
    respond_with @sale
  end
end
