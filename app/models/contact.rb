class Contact < ActiveRecord::Base
	validates :name, presence: true
	validates :phone_number, numericality: true
	validates :phone_number_alt, numericality: true
	validates :email_address, uniqueness: true
	validates :email_address_alt, uniqueness: true

end
