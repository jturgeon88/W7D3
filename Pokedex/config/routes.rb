Rails.application.routes.draw do
  namespace :api do
    get 'pokemon/create'
  end

  namespace :api do
    get 'pokemon/show'
  end

  namespace :api do
    get 'pokemon/index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :pokemon, only: [:create, :show, :index]
  end
end
