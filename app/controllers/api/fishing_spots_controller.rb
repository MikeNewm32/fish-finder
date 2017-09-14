class Api::FishingSpotsController < ApplicationController

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
        params.require(:fishing_spot).permit(:title, :description, :location)
    end

end
