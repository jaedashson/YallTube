import SearchResultsPage from "./search_results_page";
import { connect } from "react-redux";
import { fetchSearch } from "../../actions/videos_actions";
import { fetchUsers } from "../../actions/users_actions";

const mSTP =({ entities: { videos, users, comments } }, ownProps) => {
  const arr = window.location.href.split("?q=");
  const searchQuery = arr[arr.length - 1];

  return {
    videos: Object.values(videos),
    uploaders: users,
    searchQuery
  };
};

const mDTP = dispatch => {
  return {
    fetchSearch: searchTerm => dispatch(fetchSearch(searchTerm)),
    fetchUsers: userIds => dispatch(fetchUsers(userIds))
  };
};

export default connect(mSTP, mDTP)(SearchResultsPage);