class Api::PokemonController < ApplicationController
  def create
  end

  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
  end
end
