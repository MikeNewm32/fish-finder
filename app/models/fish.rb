class Fish < ApplicationRecord
    belongs_to :fishing_spots, dependent: :destroy
    belongs_to :user
end
