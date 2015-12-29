class ItemsController < ApplicationController
  respond_to :json

  def show
    @item = Item.find(params[:id])
    respond_with(@item)
  end

  def index
    @items = Item.all
    respond_with(@items)
  end

  def create
  end
end
