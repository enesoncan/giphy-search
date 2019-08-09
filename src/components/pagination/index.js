import React, { Component } from "react";
import "./style.css";

class Pagination extends Component {
  onPaginate = e => {
    const { paginationValue } = this.props;
    paginationValue(e);
  };

  render() {
    const { gifsData } = this.props;
    const ulList = [];

    if (typeof gifsData.pagination !== "undefined") {
      const paginationData = gifsData.pagination;

      const count = paginationData.count;
      const total_count = paginationData.total_count;
      const pageNumber = Math.floor(total_count / count);

      for (let i = 0; i < pageNumber; i++) {
        if (i === 5) {
          break;
        }
        ulList.push(i);
      }
    }

    return (
      <div>
        {ulList.length > 0 ? (
          <ul className="pagination">
            {ulList.map(item => {
              return (
                <li
                  key={item}
                  value={item}
                  className="pagination-item"
                  onClick={e => this.onPaginate(e)}
                >
                  {item + 1}
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Pagination;
