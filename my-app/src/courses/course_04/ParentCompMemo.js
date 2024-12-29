import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentCompMemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Khaled",
    };
  }
  componentDidMount = () => {
    setInterval(() => this.setState({ name: "Khaled" }));
  };
  render() {
    console.log("=========== The Parent Component Rendering ============");

    return (
      <div>
        <h1>The Parent Component</h1>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentCompMemo;
