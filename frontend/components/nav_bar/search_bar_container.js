import { connect } from "react-redux";
import { fetchSearch } from "../../actions/videos_actions";
import SearchBar from "./search_bar";

const mSTP = ({ session, entities }) => {
  return {

  };
};

const mDTP = dispatch => {
  return {
    fetchSearch: searchTerm => dispatch(fetchSearch(searchTerm))
  };
};

export default connect(mSTP, mDTP)(SearchBar);