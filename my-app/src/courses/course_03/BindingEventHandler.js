import React, { Component } from "react";

class BindingEventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    this.alertMessage = this.alertMessage.bind(this);

    // Solution [03] by create methods with vanilla js and use bind function in constuctor methon:
  }
  alertMessage() {
    this.state.name
      ? alert(`Hello and welcome, ${this.state.name} (^_^) `)
      : alert("We do not accept empty value for name propert (T_T) ");
  }
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
        {/* Solution [04] by create methods with ES6 arrow function in render component method:
        in constuctor methon: */}
        <button className="btn btn-danger" onClick={this.alertMessage}>
          Shaw message
        </button>
      </div>
    );
  }
}

export default BindingEventHandler;
