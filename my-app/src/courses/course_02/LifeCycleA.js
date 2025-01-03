import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "hello",
    };
    console.log("[constructor]==[LifeCycleA]");
  }
  static getDerivedStateFromProps = (state, prop) => {
    console.log("[getDerivedStateFromProps]==[LifeCycleA]");
    return null;
  };
  componentDidMount = () => {
    console.log("[componentDidMount]==[LifeCycleA]");
  };
  shouldComponentUpdate = () => {
    console.log("[shouldComponentUpdate]==[LifeCycleA]");
    return true;
  };
  getSnapshotBeforeUpdate = (prevState, prevProp) => {
    console.log("[getSnapshotBeforeUpdate]==[LifeCycleA]");
    return null;
  };
  componentDidUpdate = () => {
    console.log("[componentDidUpdate]==[LifeCycleA]");
  };
  updateHandler = () => {
    console.log("[updateHandler]==[LifeCycleA]");
    this.setState({ first: "Goodbye " });
  };

  render() {
    console.log("[render]==[LifeCycleA]");

    return (
      <div>
        <h1>LifeCycleA, {this.state.first}</h1>
        <button className="btn btn-primary" onClick={this.updateHandler}>
          Update Phase [A]
        </button>
        <hr />
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
