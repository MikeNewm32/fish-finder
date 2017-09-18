class Api::FishController < ApplicationController

    def index
        @fishing_spots = FishingSpot.find(params[:fishing_spots_id])
        @fishing_spot_fish_index = @fishing_spots.fish.all

        render json: @fish_index
    end

    def create

    end

    def show

    end


    def update

    end

    def destroy
        
    end

    private

    def fishing_spot_params
        params.require(:fish).permit(:name, :length, :weight, :photo)
    end

end
