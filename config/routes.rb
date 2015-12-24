Rails.application.routes.draw do
  root 'root#index'

  scope :api do
    scope :v1 do
      devise_for :users

      resources :items
      resources :sales do
        collection do
          get 'current'
        end
      end
    end
  end
end
