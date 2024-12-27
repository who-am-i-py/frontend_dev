import React, { Component } from "react";

class RegComp extends Component {
  render() {
    return (
      <div>
        <h1 className="text-primary">
          Hello {this.props.name}, I'm RegularComponent of React
        </h1>
      </div>
    );
  }
}

export default RegComp;
