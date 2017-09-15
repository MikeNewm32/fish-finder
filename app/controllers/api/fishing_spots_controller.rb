class Api::FishingSpotsController < ApplicationController
    before_action :authenticate_user!

    def index
        @fishing_spots = FishingSpot.all
        render json: @fishing_spots
    end

    def create
        @fishing_spots = FishingSpot.create!(fishing_spot_params)

    end

    def show
        @fishing_spot = FishingSpot.find(params[:id])
        render json: @fishing_spot
    end


    def update

    end

    def destroy

    end

    private

    def fishing_spot_params
        params.require(:fishing_spot).permit(:title, :description, :location)
    end

end
