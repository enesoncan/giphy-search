import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: null
    };
  }

  handleClick = () => {
    const { inputValue } = this.state;
    const { onSubmitClick } = this.props;
    onSubmitClick(inputValue);
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      const { inputValue } = this.state;
      const { onSubmitClick } = this.props;
      onSubmitClick(inputValue);
    }
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
    if (e.target.value.length > 2) {
      const { onSubmitClick } = this.props;
      onSubmitClick(e.target.value);
    }
  };

  render() {
    return (
      <div className="search-wrapper">
        <input
          type="text"
          className="search-box"
          placeholder="Enter Gif Tag"
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
        <button type="button" className="search-btn" onClick={this.handleClick}>
          SEARCH
        </button>
      </div>
    );
  }
}
export default Search;
