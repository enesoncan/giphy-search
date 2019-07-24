import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" className="search-box" placeholder="Arama Yap" />
      </div>
    );
  }
}

export default SearchBar;
