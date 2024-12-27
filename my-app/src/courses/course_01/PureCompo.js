import React, { PureComponent } from "react";

export default class PureCompo extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="text-secondary">
          Hello {this.props.name}, I'm PureComponent of React
        </h1>
      </div>
    );
  }
}
