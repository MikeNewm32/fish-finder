class CreateFish < ActiveRecord::Migration[5.1]
  def change
    create_table :fish do |t|
      t.string :name
      t.integer :length
      t.integer :weight
      t.string :photo

      t.timestamps
    end
  end
end
