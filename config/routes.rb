Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post 'users/login', to: 'authentication#authenticate'
      post 'users/signup', to: 'users#create'
    end
  end
end
