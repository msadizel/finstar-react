import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../../Constant/Server";

const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  return <WrappedComponent {...props} navigate={navigate} />;
};

class Create extends Component {
  state = {
    count: 100,
  };

  render() {
    return (
      <>
        <>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Укажите сколько записей создать"
              onChange={(e) => {
                const value = e.target.value;
                if (value) this.setState({ count: value });
              }}
              value={this.state.count}
            />
            <label htmlFor="floatingInput">
              Укажите сколько записей создать
            </label>
          </div>
          <div className="d-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.PostItems();
              }}
            >
              Создать
            </button>
          </div>
        </>
      </>
    );
  }

  PostItems = async () => {
    let items = [];
    for (let i = 0; i < this.state.count; i++) {
      items.push({
        code: 0,
        value: `item - ${i + 1}`,
      });
    }
    await fetch(`${SERVER}/Items/Array`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });
    this.props.navigate("/items");
  };
}

export default withRouter(Create);
