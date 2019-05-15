Rails.application.routes.draw do
  get 'user/use'

  get 'user/show'

  get 'management_screen/show'

  get 'screen/show'

  match "/*any", to: 'user#use', via: :all
  get "/", to: 'user#use'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
