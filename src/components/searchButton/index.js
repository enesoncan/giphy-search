import React, { Component } from 'react';
import './style.css';

class SearchButton extends Component {
  handleClick = (event) => {
    const { handleSubmit } = this.props;
    handleSubmit(event);
  };
  render() {
    return (
      <div>
        <button type="button" className="search-btn" onClick={(event) => this.handleClick(event)}>
          Ara
        </button>
      </div>
    );
  }
}

export default SearchButton;
