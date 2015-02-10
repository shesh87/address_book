class Contact < ActiveRecord::Base
	validates :name, presence: true
	validates :phone_number, allow_blank: true, numericality: true, length: { minimum: 10 }
	validates :phone_number, allow_blank: true, numericality: true, length: { minimum: 10 }
	validates :email_address, allow_blank: true, uniqueness: true
	validates :email_address_alt, allow_blank: true, uniqueness: true


	def self.order_contacts
		order(name: :asc)
	end

	# def self.order_contacts(direction)
	# 	if direction == ""
	# 	order(name: :asc)
	# end

end
