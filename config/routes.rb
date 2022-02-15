Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  authenticated :user do
    root "users#index", as: :authenticated_root
  end
  
  devise_scope :user do
    root 'devise/sessions#new'
  end
  
  get "*path", to: 'users#index'
end
