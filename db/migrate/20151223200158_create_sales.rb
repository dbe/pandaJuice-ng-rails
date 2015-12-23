class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.datetime :start
      t.datetime :end

      t.timestamps null: false
    end
  end
end
