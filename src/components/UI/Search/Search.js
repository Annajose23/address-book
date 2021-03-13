import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="keyword"
            placeholder="Search.."
            value={this.props.keyword}
            onChange={this.props.handleSearchKeyword}
          />
        </form>
      </div>
    );
  }
}

export default Search;
