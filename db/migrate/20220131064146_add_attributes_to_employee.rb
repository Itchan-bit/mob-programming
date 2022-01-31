class AddAttributesToEmployee < ActiveRecord::Migration[6.0]
  def change
    add_column :employees,  :first_name, :string, null: true
    add_column :employees,  :last_name, :string, null: true
  end
end
