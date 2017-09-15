class AddFishingSpotsRefToFish < ActiveRecord::Migration[5.1]
  def change
    add_reference :fish, :fishing_spot, foreign_key: true
  end
end
