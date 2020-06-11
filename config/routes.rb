Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create] do
      resources :video_votes, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show, :create] do
      resources :video_votes, only: [:index]
    end
    resources :video_votes, only: [:create, :destroy]

  end

  # resources :videos, only: :show
  
end
