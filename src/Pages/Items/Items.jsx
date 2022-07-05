import React, { Component } from "react";
import { PageSelector, PageSize } from "../../Components/";

import { SERVER } from "../../Constant/Server";

class Items extends Component {
  state = {
    items: null,
    limit: 10,
    page: 1,
    pagesCount: undefined,
    loading: true,
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
    if (this.state.loading && !this.state.items)
      return (
        <div className="px-4 py-5 my-5 text-center">
          <div class="spinner-grow text-primary" role="status"></div>
        </div>
      );
    else if (this.state.items && this.state.items.length > 0)
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
              <PageSize
                pageSize={this.state.limit}
                setPageSize={this.setPageSize}
              ></PageSize>
            </div>
            <div className="col-4"></div>
            <div className="col-4 ">
              <PageSelector
                setPage={this.setPage}
                page={this.state.page}
                pagesCount={this.state.pagesCount}
              />
            </div>
          </div>
        </>
      );
    else
      return (
        <div className="px-4 py-5 my-5 text-center">
          Элементы для отображения отсутствуют
        </div>
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
    this.setState({ loading: true });
    const response = await fetch(
      `${SERVER}/Items/?Page=${this.state.page}&Limit=${this.state.limit}`
    );
    let data = await response.json();
    if (data) {
      this.setState({ items: data, loading: false });
    }
  };

  setPageSize = (value) => {
    if (value) this.setState({ limit: value, page: 1 });
  };

  setPage = (value) => {
    if (value) this.setState({ page: value });
  };
}
export default Items;
