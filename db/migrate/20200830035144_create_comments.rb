class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :video_id, null: false
      t.integer :parent_id
      t.text :body, null: false
      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :video_id
    add_index :comments, :parent_id
    add_index :comments, :created_at
  end
end
