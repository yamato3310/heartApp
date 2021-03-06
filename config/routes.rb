Rails.application.routes.draw do
  get 'users', to: 'application#index'

  # get 'user/use'

  get 'user/show'

  get 'management_screen/show'

  get 'screen/show'

  match "/*any", to: 'user#show', via: :all
  get "/", to: 'user#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
