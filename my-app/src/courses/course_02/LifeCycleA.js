import React, { Component } from "react";

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
  render() {
    console.log("[render]==[LifeCycleA]");

    return <div>LifeCycleA</div>;
  }
}

export default LifeCycleA;
