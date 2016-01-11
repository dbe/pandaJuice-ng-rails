class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.datetime :start, null: false
      t.datetime :finish, null: false

      t.timestamps null: false
    end
  end
end
