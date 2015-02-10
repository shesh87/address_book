class ContactsController < ApplicationController

	def home
    	render 'home'
  	end

  	def new
  		@person = Contact.new
  		render 'new'
  	end

  	def create
  		@person = Contact.new contact_params
  		if @person.save
  			flash[:alert] = "Contact was not created"
  			redirect_to(contacts_id_path(@person))
  		else
  			flash[:error] = "Contact was not created"
  			render 'new'
  		end
  	end

  	def show
		@contact = Contact.find(params[:id])
	end

	def index
		@contacts = Contact.all
	end

  	private
		def contact_params
			params.require(:contact).permit(:name, :address, :phone_number, :phone_number_alt, :email_address, :email_address_alt)
		end

end
