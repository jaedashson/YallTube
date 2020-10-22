# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_22_215426) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "comment_votes", force: :cascade do |t|
    t.integer "voter_id", null: false
    t.integer "comment_id", null: false
    t.boolean "like", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["comment_id"], name: "index_comment_votes_on_comment_id"
    t.index ["created_at"], name: "index_comment_votes_on_created_at"
    t.index ["like"], name: "index_comment_votes_on_like"
    t.index ["voter_id", "comment_id"], name: "index_comment_votes_on_voter_id_and_comment_id", unique: true
    t.index ["voter_id"], name: "index_comment_votes_on_voter_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "video_id", null: false
    t.integer "parent_id"
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["created_at"], name: "index_comments_on_created_at"
    t.index ["parent_id"], name: "index_comments_on_parent_id"
    t.index ["video_id"], name: "index_comments_on_video_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer "subscriber_id", null: false
    t.integer "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_subscriptions_on_channel_id"
    t.index ["created_at"], name: "index_subscriptions_on_created_at"
    t.index ["subscriber_id", "channel_id"], name: "index_subscriptions_on_subscriber_id_and_channel_id", unique: true
    t.index ["subscriber_id"], name: "index_subscriptions_on_subscriber_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "video_votes", force: :cascade do |t|
    t.integer "voter_id", null: false
    t.integer "video_id", null: false
    t.boolean "like", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_video_votes_on_created_at"
    t.index ["like"], name: "index_video_votes_on_like"
    t.index ["video_id"], name: "index_video_votes_on_video_id"
    t.index ["voter_id", "video_id"], name: "index_video_votes_on_voter_id_and_video_id", unique: true
    t.index ["voter_id"], name: "index_video_votes_on_voter_id"
  end

  create_table "videos", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "uploader_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_videos_on_created_at"
    t.index ["title"], name: "index_videos_on_title"
    t.index ["uploader_id"], name: "index_videos_on_uploader_id"
  end

  create_table "views", force: :cascade do |t|
    t.integer "viewer_id"
    t.integer "video_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_views_on_created_at"
    t.index ["video_id"], name: "index_views_on_video_id"
    t.index ["viewer_id"], name: "index_views_on_viewer_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
