import React, { Component } from "react";
import "./style.css";

class Pagination extends Component {
  onPaginate = e => {
    const { paginationValue } = this.props;
    paginationValue(e);
  };

  render() {
    const { gifsData } = this.props;
    const paginationData = gifsData.pagination;
    let ulList = [];

    if (typeof paginationData !== "undefined") {
      var count = paginationData.count;
      var total_count = paginationData.total_count;
      var pageNumber = Math.floor(total_count / count);
    }
    for (let i = 0; i < pageNumber; i++) {
      if (i === 5) {
        break;
      }
      ulList.push(
        <li
          key={i}
          value={i}
          className="pagination-item"
          onClick={e => this.onPaginate(e)}
        >
          {i + 1}
        </li>
      );
    }

    return <ul className="pagination">{ulList}</ul>;
  }
}

export default Pagination;
