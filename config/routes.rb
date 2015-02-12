Rails.application.routes.draw do
  
  get '/' => 'contacts#index', as: 'home'

  get '/add_contacts' => 'contacts#new'

  post '/contacts' => 'contacts#create'

  get 'contacts/:id' => 'contacts#show', as: 'contacts_id'

  get '/contacts/sort_letter/:letter' => 'contacts#sort_letter', as: 'letter_sort'

end
