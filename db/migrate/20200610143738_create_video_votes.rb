class CreateVideoVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :video_votes do |t|
      t.integer :voter_id, null: false
      t.integer :video_id, null: false
      t.boolean :like, null: false
      t.timestamps
    end

    add_index :video_votes, [:voter_id, :video_id], unique: true
    add_index :video_votes, :voter_id
    add_index :video_votes, :video_id
    add_index :video_votes, :like
    add_index :video_votes, :created_at
  end
end
