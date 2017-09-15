class Api::FishingSpotsController < ApplicationController

    def index
        @fishing_spots = FishingSpot.all
        render json: @fishing_spots
    end
    
    def show
        @fishing_spot = FishingSpot.find(params[:id])
        render json: @fishing_spot
    end

    def create
        @fishing_spots = FishingSpot.new fishing_spots_params
    
        if @fishing_spots.save
          render json: @fishing_spots
        else
          render json: {
            message: 'Error when creating Fishing Spot'
          }
        end
      end

    def update
        @fishing_spot = FishingSpot.find params[:id]
    
        if @fishing_spot.update(fishing_spot_params)
          render json: @fishing_spot
        else
          render json: {
            message: 'Error when updating Fishing Spot'
          }
        end
      end

      def destroy
        @fishing_spot = FishingSpot.find(params[:id])
        @fishing_spot.destroy
    
        render json: {
          message: 'Fishing Spot successfully destroyed'
        }
      end

    private

    def fishing_spot_params
        params.require(:fishing_spot).permit(:title, :description, :location)
    end

end
