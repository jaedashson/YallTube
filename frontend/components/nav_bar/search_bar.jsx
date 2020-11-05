import React from "react";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  update() {
    return e => this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSearch(e) {
    e.preventDefault();
    
    const searchQuery = this.state.searchTerm.split(" ").join("+");

    // Turn search result into query URL
    this.props.history.push(`/search?q=${searchQuery}`);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSearch}>
          <input type="text" 
            className="search-input"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.update()}
          />
          <button className="search-button">
            <FontAwesomeIcon icon="search" className="search-icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);