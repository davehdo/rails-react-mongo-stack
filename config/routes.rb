Rails.application.routes.draw do
  # resources :trips, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :show, :create]
    end
  end

  devise_for :users
  root 'static_pages#index'
end
