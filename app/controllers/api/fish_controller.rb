class Api::FishController < ApplicationController
    before_action :authenticate_user!
    
    def index
        @user = User.find params[:user_id]
        @fishing_spot = @user.fishing_spots.find(params[:fishing_spot_id])
        @fish_index = @fishing_spot.fish

        render json: @fish_index
    end

    def create      
        @fish = Fish.create(fish_params)
    end

    def show
        @user = User.find params[:user_id]
        @fishing_spot = @user.fishing_spots.find(params[:fishing_spot_id])
        @fish = @fishing_spot.fish.find(params[:id])
        render json: @fish
    end

    def update
        @fish = Fish.find(params[:id])
        @fish.update(fish_params)
    end

    def destroy
        @fish = Fish.find(params[:id])
        @fish.destroy
    end

    private

    def fishing_params
        params.require(:fish).permit(:name, :length, :weight, :photo, :fishing_spot_id)
    end

end
