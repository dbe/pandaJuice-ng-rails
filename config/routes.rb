Rails.application.routes.draw do
  devise_for :users
  root 'root#index'
  scope :api do
    scope :v1 do
      resources :items
      resources :sales do
        collection do
          get 'current'
        end
      end
    end
  end
end
