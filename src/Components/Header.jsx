import { Link } from "react-router-dom";
import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">Тестовое задание IT Expert Finstar</div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Link to="/Create" className="btn btn-primary">
                Создать элементы
              </Link>
            </div>
            <div className="col">
              <Link to="/Items" className="btn btn-primary">
                Просмотр элементов
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
