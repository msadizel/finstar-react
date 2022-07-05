import React, { Component } from "react";

class PageSelector extends Component {
  state = {};
  render() {
    return (
      <div className="pagination">
        <div className="page-item">
          <button
            className="page-link"
            onClick={(e) => {
              const value = this.props.page;
              if (value > 1) this.props.setPage(value - 1);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </div>
        <div className="page-item">
          <input
            className="form-control"
            size="4"
            type="number"
            value={this.props.page}
            onChange={(e) => {
              const value = e.target.value;

              if (value) this.props.setPage(value);
            }}
            placeholder={
              this.props.page + "из " + this.props.pagesCount
                ? this.props.pagesCount
                : ""
            }
          ></input>
        </div>
        <div className="page-link">
          из {this.props.pagesCount ? this.props.pagesCount : ""}
        </div>

        <div className="page-item">
          <button
            className="page-link"
            onClick={(e) => {
              const value = this.props.page;
              if (value < this.props.pagesCount) this.props.setPage(value + 1);
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PageSelector;
