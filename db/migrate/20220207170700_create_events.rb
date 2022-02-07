class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :date
      t.text :description
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
