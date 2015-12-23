class RenameSalesEndToSalesFinish < ActiveRecord::Migration
  def change
    rename_column :sales, :end, :finish
  end
end
