class CreateCommentVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :comment_votes do |t|
      t.integer :voter_id, null: false
      t.integer :comment_id, null: false
      t.boolean :like, null: false
      t.timestamps
    end

    add_index :comment_votes, [:voter_id, :comment_id], unique: true
    add_index :comment_votes, :voter_id
    add_index :comment_votes, :comment_id
    add_index :comment_votes, :like
    add_index :comment_votes, :created_at
  end
end
