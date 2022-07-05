import React, { Component } from "react";

class PageSize extends Component {
  state = {};
  render() {
    return (
      <select
        className="form-select"
        onChange={(e) => {
          const value = e.target.value;
          this.props.setPageSize(value);
         // if (value) this.setState({ limit: value, page: 1 });
        }}
        value={this.props.pageSize}
      >
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    );
  }
}

export default PageSize;
