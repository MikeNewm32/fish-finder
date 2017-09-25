class FishingSpot < ApplicationRecord
    has_many :fish, dependent: :destroy
    belongs_to :user
end
