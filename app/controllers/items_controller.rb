class ItemsController < ApplicationController
  respond_to :json

  def show
    @item = Item.find(params[:id])
    respond_with(@item)
  end

  def index
    render json: Item.all
  end

  def create
  end
end
