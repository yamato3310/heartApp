Rails.application.routes.draw do
  root to 'user#use'

  get 'management_screen/show'

  get 'screen/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
