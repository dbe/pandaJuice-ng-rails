Rails.application.routes.draw do
  scope :api do
    resources :items
    resources :sales
  end
end
