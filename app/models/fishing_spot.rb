class FishingSpot < ApplicationRecord
    has_many :fish, dependent: :destroy
end
