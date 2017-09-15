class AddImageToFishingSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :fishing_spots, :image, :string
  end
end
