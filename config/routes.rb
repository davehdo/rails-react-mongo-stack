Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'

  resources :trips, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :show]
    end
  end

end
