class CreateFishingSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :fishing_spots do |t|
      t.string :title
      t.string :description
      t.string :location

      t.timestamps
    end
  end
end
