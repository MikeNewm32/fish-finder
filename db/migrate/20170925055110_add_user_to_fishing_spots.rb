class AddUserToFishingSpots < ActiveRecord::Migration[5.1]
  def change
    add_reference :fishing_spots, :user, index: true
    add_foreign_key :fishing_spots, :users
  end
end
