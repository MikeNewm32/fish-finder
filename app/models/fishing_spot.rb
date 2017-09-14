class FishingSpot < ApplicationRecord
    has_many :fish, dependent: :destroy
    has_many :users, through: :fish
end
