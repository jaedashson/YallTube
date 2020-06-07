import React from "react";

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

  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={}>
          <input type="text" 
            className="search-input"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.update()}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;