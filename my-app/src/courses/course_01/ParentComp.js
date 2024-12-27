import React, { Component } from "react";
import PureCompo from "./PureCompo";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Khadada",
    };
  }
  componentDidMount = () => {
    setInterval(() => this.setState({ name: "Khadada" }), 2000);
  };
  updatePureHandler = () => {
    this.setState({ name: "Whoami" });
  };

  render() {
    console.log(
      "============================= Parent Component ============================="
    );
    return (
      <div>
        <h1 className="text-success">I'm Parent Component</h1>
        <PureCompo name={this.state.name} />
        <RegComp name={this.state.name} />
        <button className="btn btn-primary" onClick={this.updatePureHandler}>
          Render PureComponent
        </button>
      </div>
    );
  }
}

export default ParentComp;
