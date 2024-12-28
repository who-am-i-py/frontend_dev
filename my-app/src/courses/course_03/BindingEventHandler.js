import React, { Component } from "react";

class BindingEventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }
  // Solution [01] by create methods with arrow manner:
  alertMessage = () => {
    this.state.name
      ? alert(`Hello and welcome, ${this.state.name} (^_^) `)
      : alert("We do not accept empty vale for name propert (T_T) ");
  };
  updateName = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>BindingEventHandler the best practice</h1>
        <h3>Enter your name:</h3>
        <input
          className="form-control"
          value={this.state.name}
          onChange={this.updateName}
        />
        <button className="btn btn-danger" onClick={this.alertMessage}>
          Shaw message
        </button>
      </div>
    );
  }
}

export default BindingEventHandler;
