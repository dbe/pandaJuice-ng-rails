Rails.application.routes.draw do
  resources :sales
  scope :api do
    resources :items
  end
end
