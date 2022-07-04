import React, { Component } from "react";
import { SERVER } from "../../Constant/Server";

class Items extends Component {
  state = {
    items: [],
    limit: 10,
    page: 1,
    pagesCount: undefined,
  };
  componentDidMount = async () => {
    this.LoadItems();
    this.LoadPagesCount();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.page !== this.state.page ||
      prevState.limit !== this.state.limit
    ) {
      this.LoadPagesCount();
      this.LoadItems();
    }
  };
  render() {
    return (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>ID</td>
              <td>Значение</td>
              <td>порядковый номер</td>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.value}</td>
                  <td>{item.number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="row ">
          <div className="col-4">
            <select
              className="form-select"
              onChange={(e) => {
                const value = e.target.value;
                if (value) this.setState({ limit: value, page: 1 });
              }}
              value={this.state.limit}
            >
              <option>5</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="col-4"></div>
          <div className="col-4 pagination">
            <div className="page-item">
              <button
                className="page-link"
                onClick={(e) => {
                  const page = this.state.page;
                  if (page > 1) this.setState({ page: page - 1 });
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
                value={this.state.page}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value) this.setState({ page: value });
                }}
                placeholder={
                  this.state.page + "из " + this.state.pagesCount
                    ? this.state.pagesCount
                    : ""
                }
              ></input>
            </div>
            <div className="page-link">
              из {this.state.pagesCount ? this.state.pagesCount : ""}
            </div>

            <div className="page-item">
              <button
                className="page-link"
                onClick={(e) => {
                  const page = this.state.page;
                  if (page < this.state.pagesCount)
                    this.setState({ page: page + 1 });
                }}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  LoadPagesCount = async () => {
    const response = await fetch(
      `${SERVER}/Items/Pages?Limit=${this.state.limit}`
    );
    let data = await response.json();
    if (data) {
      this.setState({ pagesCount: data });
    }
  };

  LoadItems = async () => {
    const response = await fetch(
      `${SERVER}/Items/?Page=${this.state.page}&Limit=${this.state.limit}`
    );
    let data = await response.json();
    if (data) {
      this.setState({ items: data });
    }
  };
}
export default Items;
