class Api::FishController < ApplicationController
    before_action :authenticate_user!

    def index

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
