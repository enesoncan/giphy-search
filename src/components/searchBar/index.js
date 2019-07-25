import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
  handleInputChange = (event) => {
    const { handleInputChange } = this.props;
    handleInputChange(event);
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Arama Yap"
            name="search"
            onChange={(event) => this.handleInputChange(event)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
