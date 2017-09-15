class User < ActiveRecord::Base
  # Include default devise modules.
  # has_many :fish
  # has_many :fishing_spots
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
