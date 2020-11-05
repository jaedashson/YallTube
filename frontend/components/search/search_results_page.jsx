import React from "react";
import SearchResultVideo from "./search_result_video";
import SideBarContainer from "../pages/side_bar_container";

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  conductSearch() {
    const searchTerm = this.props.searchQuery.split("+").join(" ");

    this.props.fetchSearch(searchTerm)
      .then(action => {
        const uploaderIds = action.videos.map(video => video.uploader_id);
        return this.props.fetchUsers(uploaderIds);
      })
      .then(action => this.setState({ loaded: true }));
  }

  componentDidMount() {
    this.conductSearch();
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchQuery != prevProps.searchQuery) {
      this.conductSearch();
    }
  }

  renderItems() {
    const items = this.props.videos.map(video => {
      return (
        <SearchResultVideo
          key={video.id}
          video={video}
          uploader={this.props.uploaders[video.uploader_id]}
        />
      );
    });

    return items;
  }

  render() {
    if (!this.state.loaded) return null;

    return (
      <div className="search-results-page">
        <SideBarContainer />
        <div className="search-results-index">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default SearchResultsPage;