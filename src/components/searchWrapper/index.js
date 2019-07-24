import React, { Component } from 'react';
import './style.css';
import SearchBar from '../searchBar';
import SearchButton from '../searchButton';

class SearchWrapper extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <SearchBar />
        <SearchButton />
      </div>
    );
  }
}
export default SearchWrapper;
