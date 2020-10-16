class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :viewer_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end

    add_index :views, :viewer_id
    add_index :views, :video_id
    add_index :views, :created_at
  end
end
