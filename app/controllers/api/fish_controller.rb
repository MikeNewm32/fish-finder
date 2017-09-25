class Api::FishController < ApplicationController

    def index
        @user = User.find params[:id]
        @fishing_spot = @user.fishing_spot.find(params[:id])
        @fish_index = @fishing_spot.fish.all

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
        params.require(:fish).permit(:name, :length, :weight, :photo, :fishing_spot_id)
    end

end
