Rails.application.routes.draw do
  root 'root#index'

  scope :api, defaults: {format: 'json'} do
    scope :v1 do
      devise_for :users, module: "auth"
      get 'users/current' => 'users#current'

      resources :items
      resources :sales do
        collection do
          get 'current'
        end
      end
    end
  end

  get "*path" => 'root#index'
end
