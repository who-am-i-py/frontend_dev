import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "hello",
    };
    console.log("[constructor]==[LifeCycleB]");
  }
  static getDerivedStateFromProps = (state, prop) => {
    console.log("[getDerivedStateFromProps]==[LifeCycleB]");
    return null;
  };
  componentDidMount = () => {
    console.log("[componentDidMount]==[LifeCycleB]");
  };
  shouldComponentUpdate = () => {
    console.log("[shouldComponentUpdate]==[LifeCycleB]");
    return true;
  };
  getSnapshotBeforeUpdate = (prevState, prevProp) => {
    console.log("[getSnapshotBeforeUpdate]==[LifeCycleB]");
    return null;
  };
  componentDidUpdate = () => {
    console.log("[componentDidUpdate]==[LifeCycleB]");
  };
  updateHandler = () => {
    console.log("[updateHandler]==[LifeCycleB]");
    this.setState({ first: "Goodbye " });
  };

  render() {
    console.log("[render]==[LifeCycleB]");

    return (
      <div>
        <h1>LifeCycleB, {this.state.first}</h1>
        <button className="btn btn-primary" onClick={this.updateHandler}>
          Update Phase [B]
        </button>
      </div>
    );
  }
}

export default LifeCycleB;
