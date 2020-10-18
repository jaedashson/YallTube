class RemoveViewerIdRequirementFromViews < ActiveRecord::Migration[5.2]
  def change
    change_column :views, :viewer_id, :integer, :null => true
  end
end
