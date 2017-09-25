class Api::FishingSpotsController < ApplicationController
  before_action :authenticate_user!

    def index
        @user = User.find(params[:user_id])
        @fishing_spots = @user.fishing_spots
        render json: @fishing_spots
    end
    
    def show
        @user = User.find(params[:user_id])
        @fishing_spot = @user.fishing_spots.find(params[:id])
        render json: @fishing_spot
    end

    def create
        @user = User.find(params[:user_id])
        @fishing_spot = FishingSpot.create(fishing_spot_params)
        # redirect_to api_user_path(@user)
        
      end

    def update
        @fishing_spot = FishingSpot.find params[:id]
        # console.log(@fishing_spot)
        @fishing_spot.update!(fishing_spot_params)
    end

      def destroy
        @fishing_spot = FishingSpot.find(params[:id])
        @fishing_spot.destroy
    
        # render json: {
        #   message: 'Fishing Spot successfully destroyed'
        # }
      end

    private

    def fishing_spot_params
        params.require(:fishing_spot).permit(:title, :description, :location, :image, :user_id)
    end

end
