import React, { Component } from "react";

class SearchBar extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5 mt-5">
          <div className="col">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
