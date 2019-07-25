import React, { Component } from 'react';
import './style.css';

class SearchWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    const { inputValue } = this.state;
    const { onSubmitClick } = this.props;
    onSubmitClick(inputValue);
  };

  render() {
    return (
      <div className="search-wrapper">
        <input type="text" className="search-box" placeholder="Gif Ara" onChange={this.handleInputChange} />
        <button type="button" className="search-btn" onClick={this.handleClick}>
          ARA
        </button>
      </div>
    );
  }
}
export default SearchWrapper;
