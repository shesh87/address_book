class Contact < ActiveRecord::Base
	validates :name, presence: true
	validates :phone_number, allow_blank: true, numericality: true, length: { minimum: 10 }
	validates :phone_number_alt, allow_blank: true, numericality: true, length: { minimum: 10 }
	validates :email_address, allow_blank: true, uniqueness: true
	validates :email_address_alt, allow_blank: true, uniqueness: true


	def self.sort_letter(letter)
		where("name LIKE ?", "#{letter}%")
	end

end
