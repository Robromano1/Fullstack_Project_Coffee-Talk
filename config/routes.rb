Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :create, :show]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :messages, only: [:index, :show, :create, :update]
  end
end