Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:index, :show, :create] do
      resources :video_votes, only: [:index]
    end
    get 'users_by_id', to: 'users#index_by_id'

    resources :videos, only: [:index, :show, :create] do
      resources :video_votes, only: [:index]
      resources :comments, only: [:index] # Get parent comments of a video
    end
    get 'videos_by_id', to: 'videos#index_by_id'
    get 'videos_by_uploader_id', to: 'videos#index_by_uploader_id'
    get 'videos_search', to: 'videos#search'
    
    resources :views, only: [:create]

    resources :video_votes, only: [:create]
    delete 'video_votes', to: 'video_votes#destroy'

    resources :comments, only: [:create] do
      resources :comments, only: [:index] # Get replies of a parent comment
    end
    get 'comments_by_id', to: 'comments#index_by_id'

    resources :comment_votes, only: [:create]
    delete 'comment_votes', to: 'comment_votes#destroy'

    resources :subscriptions, only: [:create]
    delete 'subscriptions', to: 'subscriptions#destroy'

    # Delete video vote based on voter_id and video_id in video_vote_params

    # Get liked videos by sending an array of likedVideoIds to VideosController
  end

  # resources :videos, only: :show
  
end
