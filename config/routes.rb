Rails.application.routes.draw do
  resources :events
  resources :admins

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
