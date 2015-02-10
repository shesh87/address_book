class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
    	t.string :name
    	t.text :address
    	t.string :phone_number
    	t.string :phone_number_alt
    	t.string :email_address
    	t.string :email_address_alt
      t.timestamps null: false
    end
  end
end
