import React, { Component } from 'react';
import './style.css';

class SearchButton extends Component {
  render() {
    return (
      <div>
        <button type="button" className="search-btn">
          Ara
        </button>
      </div>
    );
  }
}

export default SearchButton;
