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
	# 	if direction == "asc"
	# 		order(name: :asc)
	# 	else
	# 		order(name: :desc)
	# 	end
	# end

	def self.sort_letter(letter)
		where("name LIKE ?", "#{letter}%")
	end

end
